from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Project


class ProjectForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    goal_amount = IntegerField('goal_amount', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])

    image_url = StringField('image_url', validators=[DataRequired()])
