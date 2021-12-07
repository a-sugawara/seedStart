from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Image

class ImageForm(FlaskForm):
    project_id = IntegerField('project_id', validators=[DataRequired()])
    image_url = StringField('image_url')
