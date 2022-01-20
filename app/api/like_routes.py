from flask import Blueprint, jsonify, request, session
from app.models import likes, db
from app.forms import BackingForm

likes_routes = Blueprint('likes', __name__)