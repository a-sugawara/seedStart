from flask import Blueprint, jsonify
from app.models import Project
from app.forms import ProjectForm
project_routes = Blueprint('projects', __name__)

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
            description=form.data['description']
            goal_amount=form.data['goal_amount'],
            title=form.data['title'],
        )
        db.session.add(project)
        db.session.commit()
        return project.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
