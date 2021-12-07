from flask import Blueprint, jsonify, request, session
from app.models import Reward, db
from app.forms import RewardForm

reward_routes = Blueprint('rewards', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@reward_routes.route('/')
def get_all_rewards():
    all_rewards = Reward.query.all()
    return {'rewards': [reward.to_dict() for reward in all_rewards]}

@reward_routes.route('/<int:id>', methods=['DELETE'])
def delete_a_reward(id):
    specific_reward = Reward.query.get(id)
    db.session.delete(specific_reward)
    db.session.commit()
    return {'message': 'Successful Deletion'}


@reward_routes.route('/<int:id>', methods=["PUT"])
def update_a_reward(id):
    specific_reward = Reward.query.get(id)
    form = RewardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        specific_reward.project_id=form.data['project_id'],
        specific_reward.title=form.data['title'],
        specific_reward.price=form.data['price'],
        specific_reward.description=form.data['description']
        db.session.commit()
        return specific_reward.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@reward_routes.route('/', methods=["POST"])
def post_reward():
    form = RewardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        reward = Reward(
            project_id=form.data['project_id'],
            title=form.data['title'],
            price=form.data['price'],
            description=form.data['description']
        )
        db.session.add(reward)
        db.session.commit()
        return reward.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
