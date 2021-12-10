from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Reward

def title_validator(form, field):
    title = field.data
    if len(title) > 80:
        raise ValidationError('Title cannot exceed 80 characters.')

def price_validator(form, field):
    price = field.data
    if price < 0:
        raise ValidationError('Reward cost must be greater than zero.')

def description_validator(form, field):
    description = field.data
    if len(description) > 500:
        raise ValidationError('Please enter a description shorter than 500 characters.')
    if len(description) < 20:
        raise ValidationError('Please enter a more detailed description (of at least 20 characters).')

class RewardForm(FlaskForm):
    project_id = IntegerField('project_id', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired(), title_validator])
    price = IntegerField('price', validators=[DataRequired(), price_validator])
    description = TextAreaField('description', validators=[DataRequired(), description_validator])
