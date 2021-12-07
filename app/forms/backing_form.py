from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Backing

class BackingForm(FlaskForm):
    backed = IntegerField('backed', validators=[DataRequired()])
    project_id = IntegerField('project_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
