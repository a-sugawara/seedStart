from app.models import Backing, db

def seed_backings():
    backing1 = Backing(
        backed = 1.00,
        project_id = 1,
        user_id = 2
    )

    db.session.add(backing1)
    db.session.commit()

def undo_backings():
    db.session.execute('TRUNCATE backings RESTART IDENTITY CASCADE;')
    db.session.commit()
