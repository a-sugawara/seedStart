from app.models import category, db, Project

def seed_project():

    project1 = Project(
        user_id = 1,
        category_id = 3,
        description = 'We are trying to plant trees in local communities and municipalities. We will match donations up to $100,000!',
        goal_amount = 100000,
        title = "A tree for a tree",
    )

    db.session.add(project1)
    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
