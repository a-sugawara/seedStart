from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Backing

def greater_than_zero(form, field):
    backed = field.data
    if backed < 1:
        raise ValidationError('Please enter an amount greater than 0.')

class BackingForm(FlaskForm):
    backed = IntegerField('backed', validators=[DataRequired(), greater_than_zero])
    project_id = IntegerField('project_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
