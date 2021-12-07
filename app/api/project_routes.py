from flask import Blueprint, jsonify, request, session
from sqlalchemy.orm import joinedload
from sqlalchemy import orm
from app.models import Project, db 
from app.forms import ProjectForm

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
    return project.to_dict()

@project_routes.route('/', methods=['POST'])
def post_project():
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
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
        return project.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@project_routes.route('/<int:id>', methods=['DELETE'])
def delete_a_project(id):
    specific_project = Project.query.get(id)
    db.session.delete(specific_project)
    db.session.commit()
    return {"message": "Successful deletion"}

@project_routes.route('/<int:id>', methods=['PUT'])
def update_a_project(id):
    specific_project = Project.query.get(id)
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        specific_project.category_id=form.data['category_id'],
        specific_project.description=form.data['description'],
        specific_project.goal_amount=form.data['goal_amount'],
        specific_project.title=form.data['title']
        db.session.commit()
        return specific_project.to_dict()
        
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401 