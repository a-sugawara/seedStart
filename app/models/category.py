from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key = True)
    category = db.Column(db.String, nullable = False)

    project = db.relationship('Project', back_populates='categories')

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category
        }
