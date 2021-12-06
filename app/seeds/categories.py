from app.models import category, db, Category

# creates the categories for projects
def seed_category():
    parks_and_rec = Category(
        category = 'Parks & Recreation'
    )

    local_businesses = Category(
        category = 'Local Businesses'
    )

    environmental = Category(
        category = 'Environment'
    )

    food = Category(
        category = 'Foods'
    )

    culture = Category(
        category = 'Culture'
    )

    green_tech = Category(
        category = 'Green Tech & Energy'
    )

    housing = Category(
        category = 'Housing'
    )

    community = Category(
        category = 'Community'
    )

    other = Category(
        category = 'Other'
    )

    db.session.add(parks_and_rec)
    db.session.add(local_businesses)
    db.session.add(environmental)
    db.session.add(food)
    db.session.add(culture)
    db.session.add(green_tech)
    db.session.add(housing)
    db.session.add(community)
    db.session.add(other)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()