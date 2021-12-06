from .db import db

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, nullable=False, db.ForeignKey('categories.id'))
    description = db.Column(db.Text(3000), nullable=False)
    goal_amount = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='projects')
    category = db.relationship('Catagory', back_populates='projects')
    backing = db.relationship('Backing', back_populates='projects', cascade="all", "delete")
    reward = db.relationship('Reward', back_populates='projects', cascade="all", "delete")
    image = db.relationship('Image', back_populates='projects', cascade="all","delete")

    def to_dict(self):
        return{
            'id':self.id,
            'user_id':self.user,
            'catagory_id': self.catagory_id,
            'description':self.description,
            'goal_amount': self.goal_amount
        }
