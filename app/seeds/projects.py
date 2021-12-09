from app.models import Project, db

def seed_projects():
    # make four per category
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
            category_id = 9,
            description = 'We would like to create a space where people can learn how to make woodworking stuff.',
            goal_amount = 200000,
            title = "Woodworking Workshop",
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
    project11 = Project(
            user_id = 2,
            category_id = 3,
            description = 'We want to raise money to go to opening up a hiking trail so people can get exercise and enjoy nature.',
            goal_amount = 50000,
            title = "Wildlife Trail",
        )
    project12 = Project(
            user_id = 3,
            category_id = 3,
            description = 'We want to gather some funds in order to clean up litter in our local parks and other areas that contain wildlife.',
            goal_amount = 2000,
            title = "Litter Cleanup",
        )
    project13 = Project(
            user_id = 3,
            category_id = 1,
            description = 'We want to fund and build a playround for the local children.',
            goal_amount = 50000,
            title = "Playground",
        )
    project14 = Project(
            user_id = 1,
            category_id = 1,
            description = 'We want to fund and build a large park for everyone to enjoy.',
            goal_amount = 50000,
            title = "Park",
        )
    project15 = Project(
            user_id = 1,
            category_id = 2,
            description = 'We want to open a locally-owned shop where we sell fresh food from local farms.',
            goal_amount = 200000,
            title = "Locally Owned Organic Grocery Store",
        )
    project16 = Project(
            user_id = 2,
            category_id = 8,
            description = 'We want to fund a weekly farmers marker, where local businesses and farms can apply to be a vendor and sell hand-made and hand-grown products.',
            goal_amount = 2000,
            title = "Weekly Farmers Market",
        )
    project16 = Project(
            user_id = 3,
            category_id = 8,
            description = 'We want to have small mailbox-like containers that have books residents can donate, and also take with them while they donate their own.',
            goal_amount = 2000,
            title = "Take a Book, Leave a Book",
        )



    db.session.add(project1)
    db.session.add(project2)
    db.session.add(project3)
    db.session.add(project4)
    db.session.add(project5)
    db.session.add(project6)
    db.session.add(project7)
    db.session.add(project8)
    db.session.add(project9)
    db.session.add(project10)
    db.session.add(project11)
    db.session.add(project12)
    db.session.add(project13)
    db.session.add(project14)
    db.session.add(project15)
    db.session.add(project16)

    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
