# About SeedStarter

**SeedStarter** is a Kickstarter clone, with a focus on more local, community-driven projects.

## Live Site

Check out our app on Heroku: https://seed-starter.herokuapp.com/


## Features


### **Projects**

A user can create, read, update and delete a project. They are able to do all four features if this is for their own project. A user cannot edit or delete another users project.

### **Backings & Rewards**

A user can back a project and recieve rewards based on the amount of money backed. The owner of a project can create, edit, and delete rewards to their liking.

### Categories/Discover

Users can filter projects based on the project that is tagged with a specific category.

### Search

Users can use the search bar to look for more specific projects based on what they are looking for.

## How To Run The App Locally

1. Clone this repository

   ```bash
   git clone https://github.com/ad-sw/SeedStarter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
