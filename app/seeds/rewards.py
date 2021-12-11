from app.models import db, Reward

def seed_rewards():
    reward_1 = Reward(
        title = "Your tree",
        project_id = 1,
        price = 1,
        description = "We will plant a tree and name it after you"
    )
    reward_2 = Reward(
        title = "Your dirt",
        project_id = 1,
        price = 5,
        description = "We will give you a jar of dirt"
    )
    reward_3 = Reward(
        title = "Your fruit",
        project_id = 2,
        price = 10,
        description = "We will give you a fruit from our tree (random)"
    )
    reward_4 = Reward(
        title = "Your seeds",
        project_id = 2,
        price = 5,
        description = "We will give you a packet of seeds for a fruit tree"
    )
    reward_5 = Reward(
        title = "A free coffee",
        project_id = 3,
        price = 5,
        description = "We will give you a voucher for a free cup of coffee from our shop."
    )
    reward_6 = Reward(
        title = "A Bag of Coffee Beans",
        project_id = 3,
        price = 10,
        description = "We will give you a bag of coffee beans or grounds from our shop."
    )
    reward_7 = Reward(
        title = "A Sketchbook",
        project_id = 4,
        price = 10,
        description = "We will give you a sketchbook to make drawings of your own."
    )
    reward_8 = Reward(
        title = "Art Kit",
        project_id = 4,
        price = 30,
        description = "We will give you a sketchbook, with colored pencils, graphite pencils, along with a pencil sharpener and an eraser."
    )
    reward_9 = Reward(
        title = "One Free Class",
        project_id = 5,
        price = 30,
        description = "We will give you a free woodworking class."
    )
    reward_10 = Reward(
        title = "Seven Free Classes",
        project_id = 5,
        price = 100,
        description = "We will give you seven free woodworking class."
    )
    reward_11 = Reward(
        title = "Green Energy Pin Set",
        project_id = 6,
        price = 100,
        description = "We will give you a set of eight green energy themed enamel pins."
    )
    reward_12 = Reward(
        title = "Framed Print of The Building",
        project_id = 7,
        price = 100,
        description = "We will give you a framed, high quality photo of the completed project, taken by a professional photographer."
    )
    reward_13 = Reward(
        title = "Sports kit",
        project_id = 8,
        price = 100,
        description = "Get a kit with various recreational items, like a basketball, baseballs and a bat, and glove."
    )
    reward_14 = Reward(
        title = "Herb kit",
        project_id = 9,
        price = 100,
        description = "Get a kit with various pots and seeds you can use to grow your own variety of herbs."
    )
    reward_15 = Reward(
        title = "Coupon",
        project_id = 10,
        price = 100,
        description = "Get a 20 percent off coupon to our shop."
    )
    reward_16 = Reward(
        title = "Seasonal Pass",
        project_id = 11,
        price = 100,
        description = "Get a seasonal pass to our trails."
    )
    reward_17 = Reward(
        title = "Cleanup Crew Patch",
        project_id = 12,
        price = 100,
        description = "Get an embroidered patch signifying you are part of our cleanup crew."
    )
    reward_18 = Reward(
        title = "We plant a tree in your name",
        project_id = 13,
        price = 100,
        description = "We plant a tree in your name"
    )
    reward_19 = Reward(
        title = "Deck Kit",
        project_id = 14,
        price = 100,
        description = "Get a deck kit delivered to you."
    )
    reward_20 = Reward(
        title = "Fresh Veggie Basket",
        project_id = 15,
        price = 100,
        description = "Get a basket full of veggies from locally owned farms."
    )
    reward_21 = Reward(
        title = "Handmade Soap Bundle",
        project_id = 16,
        price = 100,
        description = "Get a basket full of handmade soap from one of our local crafters."
    )
    reward_22 = Reward(
        title = "Book Bundle",
        project_id = 17,
        price = 100,
        description = "Get a bundle of random books."
    )
    reward_23 = Reward(
        title = "Craft Kit",
        project_id = 18,
        price = 30,
        description = "We will give you a sketchbook, with colored pencils, graphite pencils, along with a pencil sharpener and an eraser."
    )
    reward_24 = Reward(
        title = "Herb kit",
        project_id = 19,
        price = 100,
        description = "Get a kit with various pots and seeds you can use to grow your own variety of herbs."
    )
    reward_25 = Reward(
        title = "Tool Kit",
        project_id = 19,
        price = 100,
        description = "Get a kit with various tools to use for construction, home renos, etc."
    )
    reward_26 = Reward(
        title = "Tiny Home Diorama Kit",
        project_id = 21,
        price = 100,
        description = "Get a kit with instructions on how to build a model of one of our tiny homes."
    )
    reward_27 = Reward(
        title = "Three Classes",
        project_id = 22,
        price = 100,
        description = "Have access to three of our classes to improve interview stills, spice up your resume, etc."
    )
    reward_28 = Reward(
        title = "Framed Print of The Building Sketch",
        project_id = 23,
        price = 100,
        description = "Recieve a high-quality print of the building plan created by our architects."
    )
    reward_29 = Reward(
        title = "One of Our IN MOCEAN machines",
        project_id = 24,
        price = 400,
        description = "Recieve a one of our machines for your own use."
    )
    reward_72 = Reward(
        title = "Mini Wind Turbine",
        project_id = 25,
        price = 5000,
        description = "Recieve a one of our at-home turbines for your own use."
    )
    reward_30 = Reward(
        title = "A Ticket to the Festival",
        project_id = 26,
        price = 15,
        description = "Recieve a ticket to the food festival."
    )
    reward_31 = Reward(
        title = "Basket O' Bread",
        project_id = 27,
        price = 30,
        description = "Recieve a basket of our freshly baked bread."
    )
    reward_32 = Reward(
        title = "Our Lunchbox",
        project_id = 28,
        price = 30,
        description = "Recieve our lunchbox."
    )
    reward_33 = Reward(
        title = "Unlimited Baseball Games Pass",
        project_id = 29,
        price = 300,
        description = "Gain a pass to enjoy all of the baseball games hosted at the field."
    )
    reward_34 = Reward(
        title = "Our Hydroponics Kit",
        project_id = 30,
        price = 300,
        description = "Recieve our finished kit."
    )
    reward_35 = Reward(
        title = "DVD Copy of the Documentary",
        project_id = 31,
        price = 15,
        description = "Recieve a copy of our work."
    )
    reward_36 = Reward(
        title = "Early Access to Our Podcasts",
        project_id = 32,
        price = 50,
        description = "Recieve early access to all of our podcast episodes."
    )
    reward_37 = Reward(
        title = "Name on the Building's Plaque",
        project_id = 33,
        price = 40,
        description = "Have your name engraved on the plaque in the lobby of the building to show your contribution."
    )
    reward_38 = Reward(
        title = "Three Classes",
        project_id = 34,
        price = 100,
        description = "Have three classes to learn this craft."
    )
    reward_39 = Reward(
        title = "Three Classes",
        project_id = 35,
        price = 100,
        description = "Have three classes to learn how to improve interview skills."
    )
    reward_40 = Reward(
        title = "Early Access to the Videos",
        project_id = 36,
        price = 50,
        description = "Get the video tutorials before anyone else."
    )
    reward_41 = Reward(
        title = "Swim Bundle",
        project_id = 36,
        price = 100,
        description = "Get a swimming kit: bathing suit, goggles, and a swim cap."
    )
    reward_42 = Reward(
        title = "Seven Classes",
        project_id = 35,
        price = 200,
        description = "Have seven classes to learn how to improve interview skills."
    )
    reward_43 = Reward(
        title = "Seven Classes",
        project_id = 34,
        price = 200,
        description = "Have seven classes to learn this craft."
    )
    reward_44 = Reward(
        title = "Framed Print of The Building Sketch",
        project_id = 33,
        price = 100,
        description = "Recieve a high-quality print of the building plan created by our architects."
    )
    reward_45 = Reward(
        title = "Pin",
        project_id = 32,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_46 = Reward(
        title = "Pin",
        project_id = 31,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_47 = Reward(
        title = "Pin",
        project_id = 30,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_48 = Reward(
        title = "Pin",
        project_id = 29,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_49 = Reward(
        title = "Pin",
        project_id = 28,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_50 = Reward(
        title = "Pin",
        project_id = 27,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_51 = Reward(
        title = "Pin",
        project_id = 26,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_52 = Reward(
        title = "Pin",
        project_id = 25,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_53 = Reward(
        title = "Pin",
        project_id = 24,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_54 = Reward(
        title = "Pin",
        project_id = 23,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_55 = Reward(
        title = "Pin",
        project_id = 22,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_56 = Reward(
        title = "Pin",
        project_id = 21,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_57 = Reward(
        title = "Pin",
        project_id = 20,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_58 = Reward(
        title = "Pin",
        project_id = 19,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_59 = Reward(
        title = "Pin",
        project_id = 18,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_60 = Reward(
        title = "Pin",
        project_id = 17,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_61 = Reward(
        title = "Pin",
        project_id = 16,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_62 = Reward(
        title = "Pin",
        project_id = 15,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_63 = Reward(
        title = "Pin",
        project_id = 14,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_64 = Reward(
        title = "Pin",
        project_id = 13,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_65 = Reward(
        title = "Pin",
        project_id = 12,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_66 = Reward(
        title = "Pin",
        project_id = 11,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_67 = Reward(
        title = "Pin",
        project_id = 10,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_68 = Reward(
        title = "Pin",
        project_id = 9,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_69 = Reward(
        title = "Pin",
        project_id = 8,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_70 = Reward(
        title = "Pin",
        project_id = 7,
        price = 10,
        description = "Recieve a pin made to show your support of our project."
    )
    reward_71 = Reward(
        title = "Solar Panels",
        project_id = 6,
        price = 40000,
        description = "Get your own solar panels installed on your property."
    )




    db.session.add(reward_1)
    db.session.add(reward_2)
    db.session.add(reward_3)
    db.session.add(reward_4)
    db.session.add(reward_5)
    db.session.add(reward_6)
    db.session.add(reward_7)
    db.session.add(reward_8)
    db.session.add(reward_9)
    db.session.add(reward_10)
    db.session.add(reward_11)
    db.session.add(reward_12)
    db.session.add(reward_13)
    db.session.add(reward_14)
    db.session.add(reward_15)
    db.session.add(reward_16)
    db.session.add(reward_17)
    db.session.add(reward_18)
    db.session.add(reward_19)
    db.session.add(reward_20)
    db.session.add(reward_21)
    db.session.add(reward_22)
    db.session.add(reward_23)
    db.session.add(reward_24)
    db.session.add(reward_25)
    db.session.add(reward_26)
    db.session.add(reward_27)
    db.session.add(reward_28)
    db.session.add(reward_29)
    db.session.add(reward_30)
    db.session.add(reward_31)
    db.session.add(reward_32)
    db.session.add(reward_33)
    db.session.add(reward_34)
    db.session.add(reward_35)
    db.session.add(reward_36)
    db.session.add(reward_37)
    db.session.add(reward_38)
    db.session.add(reward_39)
    db.session.add(reward_40)
    db.session.add(reward_41)
    db.session.add(reward_42)
    db.session.add(reward_43)
    db.session.add(reward_44)
    db.session.add(reward_45)
    db.session.add(reward_46)
    db.session.add(reward_47)
    db.session.add(reward_48)
    db.session.add(reward_49)
    db.session.add(reward_50)
    db.session.add(reward_51)
    db.session.add(reward_52)
    db.session.add(reward_53)
    db.session.add(reward_54)
    db.session.add(reward_55)
    db.session.add(reward_56)
    db.session.add(reward_57)
    db.session.add(reward_58)
    db.session.add(reward_59)
    db.session.add(reward_60)
    db.session.add(reward_61)
    db.session.add(reward_62)
    db.session.add(reward_63)
    db.session.add(reward_64)
    db.session.add(reward_65)
    db.session.add(reward_66)
    db.session.add(reward_67)
    db.session.add(reward_68)
    db.session.add(reward_69)
    db.session.add(reward_70)
    db.session.add(reward_71)
    db.session.add(reward_72)


    db.session.commit()

def undo_rewards():
    db.session.execute('TRUNCATE rewards RESTART IDENTITY CASCADE;')
    db.session.commit()
