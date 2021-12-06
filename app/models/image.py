from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key = True)
    image_url = db.Column(db.Text, nullable = False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable = False)

    project = db.relationship('Project', back_populates='image')

    def to_dict(self):
        return {
            'id': self.id,
            'image_url': self.image_url,
            'project_id': self.project_id
        }
