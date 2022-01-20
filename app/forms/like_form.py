from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError

class LikeForm(FlaskForm):
    project_id = IntegerField('project_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])