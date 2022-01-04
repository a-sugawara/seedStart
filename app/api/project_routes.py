from flask import Blueprint, jsonify, request, session
from app.models import Project, Image, db
from app.forms import ProjectForm, ProjectFormEdit
from app.awsupload import (
    upload_file_to_s3, allowed_file, get_unique_filename)


project_routes = Blueprint('projects', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@project_routes.route('/')
def get_all_projects():
    all_projects = Project.query.all()
    return {'projects': [project.to_dict() for project in all_projects]}

@project_routes.route('/<int:id>')
def get_a_project(id):
    project = Project.query.get(id)
    return project.to_dictionary()

@project_routes.route('/', methods=['POST'])
def post_project():
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if "image_url" not in form.data:
        return {"errors": "image required"}, 400

    image = form.data["image_url"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    if form.validate_on_submit():
        project = Project(
            user_id=form.data['user_id'],
            category_id=form.data['category_id'],
            description=form.data['description'],
            goal_amount=form.data['goal_amount'],
            title=form.data['title']
        )
        db.session.add(project)
        db.session.commit()

        image = Image(
            image_url = url,
            project_id = project.id
        )
        db.session.add(image)
        db.session.commit()
        return project.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@project_routes.route('/<int:id>', methods=['DELETE'])
def delete_a_project(id):
    specific_project = Project.query.get(id)
    db.session.delete(specific_project)
    db.session.commit()
    return {"message": "Successful deletion"}

@project_routes.route('/discover/<string:term>')
def search_project(term):
    projects = Project.query.filter(Project.title.ilike("%" + term + "%"))
    return {'projects': [project.to_dict() for project in projects]}

@project_routes.route('/<int:id>', methods=['PUT'])
def update_a_project(id):
    specific_project = Project.query.get(id)
    form = ProjectFormEdit()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        specific_project.category_id=form.data['category_id'],
        specific_project.description=form.data['description'],
        specific_project.goal_amount=form.data['goal_amount'],
        specific_project.title=form.data['title']
        db.session.commit()
        return specific_project.to_dictionary()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
