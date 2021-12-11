from app.models import db, Image, image, project

def seed_images():
    image_1 = Image(
        project_id = 1,
        image_url = 'https://ychef.files.bbci.co.uk/976x549/p07n19vr.jpg'
    )

    image_2 = Image(
        project_id = 2,
        image_url = 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'
    )

    image_3 = Image(
        project_id = 3,
        image_url = 'https://user-images.githubusercontent.com/86431563/145533507-d64801bd-267d-487c-b4c0-e089b6b8164f.PNG'
    )
    image_4 = Image(
        project_id = 4,
        image_url = 'https://arrestedmotion.com/wp-content/uploads/2015/11/jen-stark-drip-color-platform-building-culver-city-california-designboom-15.jpg'
    )
    image_5 = Image(
        project_id = 5,
        image_url = 'https://www.pcc.edu/community/wp-content/uploads/sites/36/2019/04/GettyImages-510385414.jpg'
    )
    image_6 = Image(
        project_id = 6,
        image_url = 'https://media.istockphoto.com/photos/solar-panel-cell-on-dramatic-sunset-sky-backgroundclean-alternative-picture-id1310384629?b=1&k=20&m=1310384629&s=170667a&w=0&h=9qeo39JbvBKsw1ulAmn6u9l3K9CqwGHrrSzuiWVw1s8='
    )
    image_7 = Image(
        project_id = 7,
        image_url = 'https://user-images.githubusercontent.com/86431563/145527975-fdf3df6f-2dc7-451b-8e33-c616b61cfa85.png'
    )
    image_8 = Image(
        project_id = 8,
        image_url = 'https://i.pinimg.com/564x/c5/64/28/c5642876b293416b3e663def00d29121.jpg'
    )
    image_9 = Image(
        project_id = 9,
        image_url = 'https://i.pinimg.com/originals/ac/bd/d4/acbdd4da1fed1d4bf15c5481600ec77d.jpg'
    )
    image_10 = Image(
        project_id = 10,
        image_url = 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_284,q_60,w_640/v1/clients/alexandria/A_Galerie_CREDIT_M_Enriquez_for_Visit_Alexandria_1_2100x1354_b584b92a_436d_45a8_aba5_5ada9e5b56b8_8e4b470b-cd5e-4ae2-a5ad-37f31edeab14.jpg'
    )
    image_11 = Image(
        project_id = 11,
        image_url = 'https://www.planetware.com/wpimages/2018/09/oregon-sublimity-best-hiking-trails-trails-silver-falls-state-park-trail-of-ten-falls.jpg'
    )

    image_12 = Image(
        project_id = 12,
        image_url = 'https://greenvillejournal.com/wp-content/uploads/2021/02/GJ-2-19-21-Litter-pickup-iStock.jpeg'
    )

    image_13 = Image(
        project_id = 13,
        image_url = 'https://i.pinimg.com/474x/e6/e6/e8/e6e6e88c3a129822c6f98d91ee71026e.jpg'
    )
    image_14 = Image(
        project_id = 14,
        image_url = 'https://user-images.githubusercontent.com/86431563/145530257-f5e6613e-81a2-4ac8-99db-13aab032854e.PNG'
    )
    image_15 = Image(
        project_id = 15,
        image_url = 'https://thumbor.thedailymeal.com/mTo4ojWZD5511nbS8eqWWcYcTPU=//https://www.thedailymeal.com/sites/default/files/2020/01/23/HERO.jpg'
    )
    image_16 = Image(
        project_id = 16,
        image_url = 'https://i.pinimg.com/564x/36/18/a3/3618a3b5cb69b1d504b02e9f652a5579.jpg'
    )
    image_17 = Image(
        project_id = 17,
        image_url = 'https://user-images.githubusercontent.com/86431563/145540440-f1b75206-c700-4e0d-a602-ebe4990679bb.PNG'
    )
    image_18 = Image(
        project_id = 18,
        image_url = 'https://www.thesprucecrafts.com/thmb/-91NSALmdRzf3Zr5OnLwl-8NWks=/4368x2457/smart/filters:no_upscale()/art-and-craft-supply-on-wooden-desk-1064711160-f6b9b4ba223242c3883c8c8a31cb0286.jpg'
    )
    image_19 = Image(
        project_id = 19,
        image_url = 'https://cdn.shopify.com/s/files/1/1881/4693/files/20181122-20181122-P1090601_1200x.jpg?v=1562892448'
    )
    image_20 = Image(
        project_id = 20,
        image_url = 'https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/06/54cfd8e3db146_-_hardware-appreciation-0814-de.jpg?crop=1xw:1.0xh;center,top&resize=480:*'
    )
    image_21 = Image(
        project_id = 21,
        image_url = 'https://cdn.vox-cdn.com/thumbor/_06Ha2tlHC0oyXJJtNOkJMr-hPs=/0x0:1400x897/1200x800/filters:focal(588x336:812x560)/cdn.vox-cdn.com/uploads/chorus_image/image/65893255/small_storage_xl.0.jpg'
    )

    image_22 = Image(
        project_id = 22,
        image_url = 'https://cdn.searchenginejournal.com/wp-content/uploads/2021/05/41-of-the-best-seo-job-interview-questions-6130f38715181-sej-1280x720.jpg'
    )

    image_23 = Image(
        project_id = 23,
        image_url = 'https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Stock-Condo-Exterior-Adobe-51342322-2.jpg'
    )
    image_24 = Image(
        project_id = 24,
        image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/hoaiq4qzsqeinfxh1ujc'
    )
    image_25 = Image(
        project_id = 25,
        image_url = 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2021/09/wind-unsplash.jpg'
    )
    image_26 = Image(
        project_id = 26,
        image_url = 'https://i.pinimg.com/564x/83/dc/13/83dc134cc31444221bb95b14794ac106.jpg'
    )
    image_27 = Image(
        project_id = 27,
        image_url = 'https://www.bakingbusiness.com/ext/resources/2019/8/08192019/GlobalTrends.jpg?t=1566494557&width=1080'
    )
    image_28 = Image(
        project_id = 28,
        image_url = 'https://i.pinimg.com/564x/0f/8d/72/0f8d7260906ab8b69fb5aba35965858c.jpg'
    )
    image_29 = Image(
        project_id = 29,
        image_url = 'https://user-images.githubusercontent.com/86431563/145531116-c2970a93-1797-4b66-aff1-84976bb964be.PNG'
    )
    image_30 = Image(
        project_id = 30,
        image_url = 'https://cdn.shopify.com/s/files/1/2723/8896/files/Hydroponics_5_mini_1024x1024.jpeg?v=1567617764'
    )
    image_31 = Image(
        project_id = 31,
        image_url = 'https://filmfolk.com/wp-content/uploads/2018/02/Documentary-Filming.jpg'
    )

    image_32 = Image(
        project_id = 32,
        image_url = 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e6931e5e1e61700080e8493%2FCropped-view-of-smiling-podcast-host-sitting-near-microphone-in-podcasting-studio-%2F960x0.jpg%3Ffit%3Dscale'
    )

    image_33 = Image(
        project_id = 33,
        image_url = 'https://i.pinimg.com/564x/52/b3/6e/52b36e8eca52966281428e98630e6ba4.jpg'
    )
    image_34 = Image(
        project_id = 34,
        image_url = 'https://images.adsttc.com/media/images/5fb4/1d9f/63c0/171e/9f00/0093/newsletter/shutterstock_1121968397.jpg?1605639578'
    )
    image_35 = Image(
        project_id = 35,
        image_url = 'https://media.istockphoto.com/vectors/business-interview-illustration-vector-id977762310?k=20&m=977762310&s=612x612&w=0&h=HkTrU0wkI49xmerTBphlIgLh2SaP2wQzNQU3vxNLV3Y='
    )
    image_36 = Image(
        project_id = 36,
        image_url = 'https://blog.divessi.com/wp-content/uploads/2020/10/SWIM_Adult_Cover_istock_microgen.jpg'
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
    db.session.add(image_11)
    db.session.add(image_12)
    db.session.add(image_13)
    db.session.add(image_14)
    db.session.add(image_15)
    db.session.add(image_16)
    db.session.add(image_17)
    db.session.add(image_18)
    db.session.add(image_19)
    db.session.add(image_20)
    db.session.add(image_21)
    db.session.add(image_22)
    db.session.add(image_23)
    db.session.add(image_24)
    db.session.add(image_25)
    db.session.add(image_26)
    db.session.add(image_27)
    db.session.add(image_28)
    db.session.add(image_29)
    db.session.add(image_30)
    db.session.add(image_31)
    db.session.add(image_32)
    db.session.add(image_33)
    db.session.add(image_34)
    db.session.add(image_35)
    db.session.add(image_36)


    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
