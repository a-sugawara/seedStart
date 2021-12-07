from .db import db

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    description = db.Column(db.Text, nullable=False)
    goal_amount = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(50), nullable=False)

    user = db.relationship('User', back_populates='project')
    category = db.relationship('Category', back_populates='project')
    backing = db.relationship('Backing', back_populates='project', cascade="all, delete")
    reward = db.relationship('Reward', back_populates='project', cascade="all, delete")
    image = db.relationship('Image', back_populates='project', cascade="all, delete")

    def to_dict(self):
        return{
            'id':self.id,
            'user_id':self.user_id,
            'category_id': self.category_id,
            'description':self.description,
            'goal_amount': self.goal_amount,
            'rewards': [list((obj.title, obj.description, obj.price)) for obj in self.reward],
            # 'images' : [list((obj.))]
        }
