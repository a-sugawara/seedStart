from app.models import Backing, db

def seed_backings():
    backing1 = Backing(
        backed = 1000.00,
        project_id = 1,
        user_id = 2
    )
    backing2 = Backing(
        backed = 200.00,
        project_id = 2,
        user_id = 3
    )
    backing3 = Backing(
        backed = 3000.00,
        project_id = 3,
        user_id = 2
    )
    backing4 = Backing(
        backed = 400.00,
        project_id = 4,
        user_id = 2
    )
    backing5 = Backing(
        backed = 500.00,
        project_id = 5,
        user_id = 2
    )
    backing6 = Backing(
        backed = 400.00,
        project_id = 6,
        user_id = 3
    )
    backing7 = Backing(
        backed = 300.00,
        project_id = 7,
        user_id = 1
    )
    backing8 = Backing(
        backed = 2000.00,
        project_id = 8,
        user_id = 1
    )
    backing9 = Backing(
        backed = 1000.00,
        project_id = 9,
        user_id = 1
    )
    backing10 = Backing(
        backed = 2000.00,
        project_id = 10,
        user_id = 2
    )
    backing11 = Backing(
        backed = 3000.00,
        project_id = 11,
        user_id = 3
    )
    backing12 = Backing(
        backed = 3000.00,
        project_id = 12,
        user_id = 2
    )
    backing13 = Backing(
        backed = 3000.00,
        project_id = 13,
        user_id = 3
    )
    backing14 = Backing(
        backed = 300.00,
        project_id = 14,
        user_id = 2
    )
    backing15 = Backing(
        backed = 350.00,
        project_id = 15,
        user_id = 1
    )
    backing16 = Backing(
        backed = 200.00,
        project_id = 16,
        user_id = 2
    )
    backing17 = Backing(
        backed = 400.00,
        project_id = 17,
        user_id = 2
    )
    backing18 = Backing(
        backed = 400.00,
        project_id = 18,
        user_id = 1
    )
    backing19 = Backing(
        backed = 5000.00,
        project_id = 19,
        user_id = 1
    )
    backing20 = Backing(
        backed = 5000.00,
        project_id = 20,
        user_id = 3
    )
    backing21 = Backing(
        backed = 5000.00,
        project_id = 21,
        user_id = 2
    )
    backing22 = Backing(
        backed = 10000.00,
        project_id = 22,
        user_id = 2
    )
    backing23 = Backing(
        backed = 10000.00,
        project_id = 23,
        user_id = 1
    )
    backing24 = Backing(
        backed = 20000.00,
        project_id = 24,
        user_id = 1
    )
    backing25 = Backing(
        backed = 20000.00,
        project_id = 25,
        user_id = 3
    )
    backing26 = Backing(
        backed = 15000.00,
        project_id = 26,
        user_id = 3
    )
    backing27 = Backing(
        backed = 15000.00,
        project_id = 27,
        user_id = 3
    )
    backing28 = Backing(
        backed = 15000.00,
        project_id = 28,
        user_id = 3
    )
    backing29 = Backing(
        backed = 10000.00,
        project_id = 29,
        user_id = 2
    )
    backing30 = Backing(
        backed = 10000.00,
        project_id = 30,
        user_id = 2
    )
    backing31 = Backing(
        backed = 50000.00,
        project_id = 31,
        user_id = 2
    )
    backing32 = Backing(
        backed = 50000.00,
        project_id = 32,
        user_id = 1
    )
    backing33 = Backing(
        backed = 300.00,
        project_id = 33,
        user_id = 3
    )
    backing34 = Backing(
        backed = 2000.00,
        project_id = 34,
        user_id = 2
    )
    backing35 = Backing(
        backed = 1000.00,
        project_id = 35,
        user_id = 3
    )
    backing36 = Backing(
        backed = 1000.00,
        project_id = 36,
        user_id = 2
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
    db.session.add(backing12)
    db.session.add(backing13)
    db.session.add(backing14)
    db.session.add(backing15)
    db.session.add(backing16)
    db.session.add(backing17)
    db.session.add(backing18)
    db.session.add(backing19)
    db.session.add(backing20)
    db.session.add(backing21)
    db.session.add(backing22)
    db.session.add(backing23)
    db.session.add(backing24)
    db.session.add(backing25)
    db.session.add(backing26)
    db.session.add(backing27)
    db.session.add(backing28)
    db.session.add(backing29)
    db.session.add(backing30)
    db.session.add(backing31)
    db.session.add(backing32)
    db.session.add(backing33)
    db.session.add(backing34)
    db.session.add(backing35)
    db.session.add(backing36)


    db.session.commit()

def undo_backings():
    db.session.execute('TRUNCATE backings RESTART IDENTITY CASCADE;')
    db.session.commit()
