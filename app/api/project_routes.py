from flask import Blueprint, jsonify
from app.models import Project

project_routes = Blueprint('projects', __name__)

@project_routes.route('/')
def get_all_projects():
    all_projects = Project.query.all()
    return {'projects': [project.to_dict() for project in all_projects]}
