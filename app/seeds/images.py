from app.models import db, Image, image, project

def seed_images():
    image_1 = Image(
        project_id = 1,
        image_url = 'https://m.media-amazon.com/images/I/412FFoC11ML._AC_UY327_FMwebp_QL65_.jpg'
    )

    image_2 = Image(
        project_id = 1,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )

    db.session.add(image_1)
    db.session.add(image_2)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()