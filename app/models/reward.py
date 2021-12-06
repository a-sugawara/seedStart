from .db import db

class Reward(db.Model):
    __tablename__ = 'rewards'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)

    project = db.relationship('Project', back_populates='reward')


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'project_id': self.project_id,
            'price': self.price,
            'description': self.description
        }
