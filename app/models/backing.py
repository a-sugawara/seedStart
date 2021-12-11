from .db import db

class Backing(db.Model):
    __tablename__ = 'backings'

    id = db.Column(db.Integer, primary_key=True)
    backed = db.Column(db.Integer, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='backings')

    project = db.relationship('Project', back_populates='backing')

    def to_dict(self):
        return {
            'id': self.id,
            'backed': self.backed,
            'project_id': self.project_id,
            'user_id': self.user_id,
        }
