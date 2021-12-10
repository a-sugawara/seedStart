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


    db.session.commit()

def undo_rewards():
    db.session.execute('TRUNCATE rewards RESTART IDENTITY CASCADE;')
    db.session.commit()
