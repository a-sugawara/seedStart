from flask import Blueprint, jsonify, request, session
from app.models import Backing, db
from app.forms import BackingForm

backing_routes = Blueprint('backings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# @backing_routes.route('/users/<int:user_id>')
# def get_all_backings(user_id):
#     all_backings = Backing.query.all() or .filter
#     return {'backings': [backing.to_dict() for backing in all_backings]}

@backing_routes.route('/', methods=["POST"])
def post_backing():
    form = BackingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        backing = Backing(
            backed=form.data['backed'],
            project_id=form.data['project_id'],
            user_id=form.data['user_id']
        )
        db.session.add(backing)
        db.session.commit()
        return backing.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@backing_routes.route('/<int:id>', methods=["PUT"])
def update_a_backing(id):
    specific_backing = Backing.query.get(id)
    form = BackingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        specific_backing.backed=form.data['backed'],
        specific_backing.project_id=form.data['project_id'],
        specific_backing.user_id=form.data['user_id']
        db.session.commit()
        return specific_backing.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
