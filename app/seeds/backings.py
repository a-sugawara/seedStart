from app.models import Backing, db

def seed_backings():
    backing1 = Backing(
        backed = 1.00,
        project_id = 1,
        user_id = 2
    )
    backing2 = Backing(
        backed = 1.00,
        project_id = 2,
        user_id = 3
    )
    backing3 = Backing(
        backed = 1.00,
        project_id = 3,
        user_id = 2
    )
    backing4 = Backing(
        backed = 1.00,
        project_id = 4,
        user_id = 2
    )
    backing5 = Backing(
        backed = 1.00,
        project_id = 5,
        user_id = 2
    )
    backing6 = Backing(
        backed = 1.00,
        project_id = 6,
        user_id = 3
    )
    backing7 = Backing(
        backed = 1.00,
        project_id = 7,
        user_id = 1
    )
    backing8 = Backing(
        backed = 1.00,
        project_id = 8,
        user_id = 1
    )
    backing9 = Backing(
        backed = 1.00,
        project_id = 9,
        user_id = 1
    )
    backing10 = Backing(
        backed = 1.00,
        project_id = 9,
        user_id = 2
    )
    backing11 = Backing(
        backed = 1.00,
        project_id = 10,
        user_id = 3
    )

    db.session.add(backing1)
    db.session.add(backing2)
    db.session.add(backing3)
    db.session.add(backing4)
    db.session.add(backing5)
    db.session.add(backing6)
    db.session.add(backing7)
    db.session.add(backing8)
    db.session.add(backing9)
    db.session.add(backing10)
    db.session.add(backing11)


    db.session.commit()

def undo_backings():
    db.session.execute('TRUNCATE backings RESTART IDENTITY CASCADE;')
    db.session.commit()
