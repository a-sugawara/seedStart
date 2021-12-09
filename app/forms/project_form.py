from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Project

def title_validator(form, field):
    title = field.data
    if len(title) > 50:
        raise ValidationError('Please enter a title shorter than 50 characters.')

def description_validator(form, field):
    description = field.data
    if len(description) > 2000:
        raise ValidationError('Please enter a description shorter than 2000 characters.')
    if len(description) < 20:
        raise ValidationError('Please enter a more detailed description (of at least 20 characters).')

def goal_validator(form, field):
    goal = field.data
    if goal < 50:
        raise ValidationError('Please enter an amount greater than $50.')

def image_validator(form, field):
    image = field.data
    if not image:
        raise ValidationError('Please enter an image.')

class ProjectForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired(), description_validator])
    goal_amount = IntegerField('goal_amount', validators=[DataRequired(), goal_validator])
    title = StringField('title', validators=[DataRequired(), title_validator])

    image_url = StringField('image_url', validators=[DataRequired(), image_validator])

class ProjectFormEdit(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired(), description_validator])
    goal_amount = IntegerField('goal_amount', validators=[DataRequired(), goal_validator])
    title = StringField('title', validators=[DataRequired(), title_validator])
