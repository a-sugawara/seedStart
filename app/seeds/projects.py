from app.models import Project, db

def seed_projects():

    project1 = Project(
        user_id = 1,
        category_id = 3,
        description = 'We are trying to plant trees in local communities and municipalities. We will match donations up to $100,000!',
        goal_amount = 100000,
        title = "A tree for a tree",
    )
    project2 = Project(
        user_id = 1,
        category_id = 3,
        description = 'We are trying to plant trees in local communities and municipalities. We will match donations up to $100,000!',
        goal_amount = 100000,
        title = "A tree for a dict",
    )
    project3 = Project(
        user_id = 2,
        category_id = 4,
        description = 'We would like to open up a small, locally-owned cafe.',
        goal_amount = 200000,
        title = "Local Coffee Shop",
    )

    project4 = Project(
            user_id = 3,
            category_id = 5,
            description = 'We would like to create a space where artists can rent a space to make various types of art.',
            goal_amount = 200000,
            title = "Art Studio",
        )
    project5 = Project(
            user_id = 3,
            category_id = 5,
            description = 'We would like to create a space where artists can rent a space to make various types of art.',
            goal_amount = 200000,
            title = "Art Studio",
        )
    project6 = Project(
            user_id = 1,
            category_id = 6,
            description = 'We would like to gather funds to help residents obtain solar panels for their homes, in order to to become more environmentally-friendly.',
            goal_amount = 200000,
            title = "Funding for Solar Panels",
        )
    project7 = Project(
            user_id = 3,
            category_id = 7,
            description = 'We want to build apartment buildings that our community is able to afford.',
            goal_amount = 200000,
            title = "Apartment Building",
        )
    project8 = Project(
            user_id = 2,
            category_id = 1,
            description = 'We want to open up a rec center where the community can connect, get physical activity via sports and exercise.',
            goal_amount = 200000,
            title = "Recreational Center",
        )
    project9 = Project(
            user_id = 1,
            category_id = 8,
            description = 'We want to have a space in a nearby park dedicated to a community garden, where residents can grow various flowers, fruits, and vegetables.',
            goal_amount = 200000,
            title = "Community Garden",
        )
    project10 = Project(
            user_id = 2,
            category_id = 2,
            description = 'We want to open a locally-owned shop where we sell a variety of antiques',
            goal_amount = 200000,
            title = "Antique Shop",
        )



    db.session.add(project1)
    db.session.add(project2)

    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
