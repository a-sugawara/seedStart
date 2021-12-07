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

    db.session.add(reward_1)
    db.session.add(reward_2)
    db.session.add(reward_3)
    db.session.commit()

def undo_rewards():
    db.session.execute('TRUNCATE rewards RESTART IDENTITY CASCADE;')
    db.session.commit()
