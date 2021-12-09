from app.models import db, Image, image, project

def seed_images():
    image_1 = Image(
        project_id = 1,
        image_url = 'https://m.media-amazon.com/images/I/412FFoC11ML._AC_UY327_FMwebp_QL65_.jpg'
    )

    image_2 = Image(
        project_id = 2,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )

    image_2 = Image(
        project_id = 2,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )

    image_3 = Image(
        project_id = 3,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )
    image_4 = Image(
        project_id = 4,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )
    image_5 = Image(
        project_id = 5,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )
    image_6 = Image(
        project_id = 6,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )
    image_7 = Image(
        project_id = 7,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )
    image_8 = Image(
        project_id = 8,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )
    image_9 = Image(
        project_id = 9,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )
    image_10 = Image(
        project_id = 10,
        image_url = 'https://m.media-amazon.com/images/I/41K+qYuMSTL._AC_UY327_FMwebp_QL65_.jpg'
    )

    db.session.add(image_1)
    db.session.add(image_2)
    db.session.add(image_3)
    db.session.add(image_4)
    db.session.add(image_5)
    db.session.add(image_6)
    db.session.add(image_7)
    db.session.add(image_8)
    db.session.add(image_9)
    db.session.add(image_10)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
