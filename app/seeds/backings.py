from app.models import project, user, db

def seed_backing():
    backing1 = Project(
        backed = 1.00
        project_id = 1
        user_id = 2
    )

    db.session.add(backing1)
    db.session.commit()

def undo_backings():
    db.session.execute('TRUNCATE backings RESTART IDENTITY CASCADE;')
    session.commit()
