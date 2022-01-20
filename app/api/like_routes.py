from flask import Blueprint, jsonify, request, session
from app.models import Like, db
from app.forms import LikeForm

likes_routes = Blueprint('likes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@likes_routes.route('/', methods=['POST'])
def post_like():
    form = LikeForm();
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_like = Like(
            project_id = form.data['project_id'],
            user_id = form.data['user_id']
        )
        db.session.add(new_like)
        db.session.commit()
        return new_like.to_dict();
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@likes_routes.route('/<int:id>', methods=['DELETE'])
def delete_like(id):
    specific_like = Like.query.get(id)
    db.session.delete(specific_like)
    db.session.commit()
    return {"message": "Successful deletion"}