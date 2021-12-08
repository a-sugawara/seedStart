from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Reward

class RewardForm(FlaskForm):
    project_id = IntegerField('project_id', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])

