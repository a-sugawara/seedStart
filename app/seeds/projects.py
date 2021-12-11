from app.models import Project, db

def seed_projects():
    # make four per category
    project1 = Project(
            user_id = 1,
            category_id = 3,
            description = 'We are trying to plant trees in local communities and municipalities. We will match donations up to $100,000! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 100000,
            title = "A Tree for a Tree",
    )
    project2 = Project(
            user_id = 1,
            category_id = 3,
            description = 'We are trying to plant trees in local communities and municipalities. We will match donations up to $100,000! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 100000,
            title = "A Tree for a Fruit",
    )
    project3 = Project(
            user_id = 2,
            category_id = 4,
            description = 'We would like to open up a small, locally-owned cafe. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Zero-Waste Coffee Shop & Locally-Sourced Ingredients",
    )
    project4 = Project(
            user_id = 3,
            category_id = 5,
            description = 'We would like to create a space where artists can rent a space to make various types of art. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Art Studio",
        )
    project5 = Project(
            user_id = 3,
            category_id = 9,
            description = 'We would like to create a space where people can learn how to make woodworking stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..',
            goal_amount = 200000,
            title = "Woodworking Workshop",
        )
    project6 = Project(
            user_id = 1,
            category_id = 6,
            description = 'We would like to gather funds to help residents obtain solar panels for their homes, in order to to become more environmentally-friendly. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Funding for Solar Panels",
        )
    project7 = Project(
            user_id = 3,
            category_id = 7,
            description = 'We want to build apartment buildings that our community is able to afford. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 500000,
            title = "Apartment Building",
        )
    project8 = Project(
            user_id = 2,
            category_id = 1,
            description = 'We want to open up a rec center where the community can connect, get physical activity via sports and exercise. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Recreational Center",
        )
    project9 = Project(
            user_id = 1,
            category_id = 8,
            description = 'We want to have a space in a nearby park dedicated to a community garden, where residents can grow various flowers, fruits, and vegetables. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Community Garden",
        )
    project10 = Project(
            user_id = 2,
            category_id = 2,
            description = 'We want to open a locally-owned shop where we sell a variety of antiques. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Barnaby's Antique Shop",
        )
    project11 = Project(
            user_id = 2,
            category_id = 3,
            description = 'We want to raise money to go to opening up a hiking trail so people can get exercise and enjoy nature. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 50000,
            title = "Wildlife Trail",
        )
    project12 = Project(
            user_id = 3,
            category_id = 3,
            description = 'We want to gather some funds in order to clean up litter in our local parks and other areas that contain wildlife. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 2000,
            title = "Litter Cleanup",
        )
    project13 = Project(
            user_id = 3,
            category_id = 1,
            description = 'We want to fund a playround kit for local youth to be available for families, organizations, schools, clubs and camps alike. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 50000,
            title = "Playground Kit: Buildable & Modular",
        )
    project14 = Project(
            user_id = 1,
            category_id = 1,
            description = 'We want to create and sell our newly innovated community-oriented decks, which makes setup and use much more convenient. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 50000,
            title = "Deck Designed: Construct at Home or Parks",
        )
    project15 = Project(
            user_id = 1,
            category_id = 2,
            description = 'We want to open a locally-owned shop where we sell fresh food from local farms. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Locally Owned Organic Grocery Store",
        )
    project16 = Project(
            user_id = 2,
            category_id = 8,
            description = 'We want to fund a weekly farmers marker, where local businesses and farms can apply to be a vendor and sell hand-made and hand-grown products. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 2000,
            title = "Weekly Farmers Market",
        )
    project17 = Project(
            user_id = 3,
            category_id = 8,
            description = 'We want to have a small local bookstore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 2000,
            title = "Red's Books: A Local Bookstore",
        )
    project18 = Project(
            user_id = 1,
            category_id = 8,
            description = 'We want to host an arts and crafts club for the members of the community every summer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 2000,
            title = "Arts and Crafts Club",
        )
    project19 = Project(
            user_id = 2,
            category_id = 2,
            description = 'We want to open a locally-owned shop where we sell a variety of plants and seeds to grow yourself. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Monstera: A Local Plant Shop",
        )
    project20 = Project(
            user_id = 1,
            category_id = 2,
            description = 'We want to open a locally-owned shop where we sell a variety of tools and materials for construction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Mr. Hammer Hardware Store",
        )
    project21 = Project(
            user_id = 2,
            category_id = 7,
            description = 'We want to create tiny homes that are energy efficient and affordable. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Let's Build Tiny Homes!",
        )
    project22 = Project(
            user_id = 2,
            category_id = 7,
            description = 'We want to create a space where those who are in need of jobs can gain employement and experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 600000,
            title = "Employement Success Classes",
        )
    project23 = Project(
            user_id = 2,
            category_id = 7,
            description = 'We want to build a new condo that is afforable to low-income residents. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 700000,
            title = "Affordable Condominiums",
        )
    project24 = Project(
            user_id = 1,
            category_id = 6,
            description = 'Help us fund recycling machines for our sailboats to recycle ocean plastic in remote coastal areas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 10000,
            title = "Machines for our IN MOCEAN Recycling Fleet",
        )
    project25 = Project(
            user_id = 1,
            category_id = 6,
            description = 'We would like to erect wind turbines in a nearby field to generate our city/town. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Mini Wind Turbines For the Home",
        )
    project26 = Project(
            user_id = 2,
            category_id = 4,
            description = 'We would like run an annual food truck festival, to show off the variety of local resturants our city has. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 10000,
            title = "Annual Food Truck Festival",
    )
    project27 = Project(
            user_id = 2,
            category_id = 4,
            description = 'New site, new oven but still delicious sourdough and pastries. We are expanding and we would like to have you on board!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 80000,
            title = "Snapery Bakery: Affordable Local Flavors, Tools, Classes",
    )
    project28 = Project(
            user_id = 2,
            category_id = 4,
            description = 'A brilliant spin on a handcrafted, ethically-sourced lunchbox and meal prep app. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 220000,
            title = "Lunchbox Reimagined",
    )
    project29 = Project(
            user_id = 2,
            category_id = 1,
            description = 'We want to construct a large field with four baseball diamonds, so residents can play competitvely on teams. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 100000,
            title = "Baseball Field",
        )
    project30 = Project(
            user_id = 1,
            category_id = 6,
            description = 'We would like to include hydroponics as a method of growing plants in the community gardens. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 20000,
            title = "Prefabricated Hydroponics Kit",
        )
    project31 = Project(
            user_id = 3,
            category_id = 5,
            description = 'We would like to create a documentary for these community members to safely share their stories with a free screen showing to investors. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 200000,
            title = "Rare Documentary on Lives of Afro-Mexicans",
        )
    project32 = Project(
            user_id = 3,
            category_id = 5,
            description = 'From our home to yours, for the public and with the public. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 5000,
            title = "Foreign Languages Podcast: Educational & Resourceful",
        )
    project33 = Project(
            user_id = 3,
            category_id = 5,
            description = 'We would like to fund dormatories for at-risk teens in school, such as a variety of living spaces. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 1000000,
            title = "Dormitory Project for At-Risk High Schoolers",
        )
    project34 = Project(
            user_id = 2,
            category_id = 9,
            description = 'We would like to create a space where people can learn masonry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 10000,
            title = "Masonry Workshop",
        )
    project35 = Project(
            user_id = 2,
            category_id = 9,
            description = 'We would like to create a space where people can learn interview and job-searching skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 10000,
            title = "Interview Workshop",
        )
    project36 = Project(
            user_id = 2,
            category_id = 9,
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            goal_amount = 5000,
            title = "Swimming Tutorial Video Series",
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
    db.session.add(project17)
    db.session.add(project18)
    db.session.add(project19)
    db.session.add(project20)
    db.session.add(project21)
    db.session.add(project22)
    db.session.add(project23)
    db.session.add(project24)
    db.session.add(project25)
    db.session.add(project26)
    db.session.add(project27)
    db.session.add(project28)
    db.session.add(project29)
    db.session.add(project30)
    db.session.add(project31)
    db.session.add(project32)
    db.session.add(project33)
    db.session.add(project34)
    db.session.add(project35)
    db.session.add(project36)


    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
