from flask import Blueprint, jsonify, request, session
from app.models import Image, db
from app.forms import ImageForm

image_routes = Blueprint('images', __name__)

@image_routes.route('/')
def get_images():
    project_images = Image.query.all()
    return {'projects' : [image.to_dict() for image in project_images]}

@image_routes.route('/', methods=['POST'])
def post_images():
    form = ImageForm()
    form = ['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        image = Image(
            project_id=form.data['project_id'],
            image_url=form.data['image_url']
        )
        db.session.add(image)
        db.session.commit()
        return image.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
