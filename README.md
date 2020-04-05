[![CodeFactor](https://www.codefactor.io/repository/github/brendenrdowd/mealplanner-client/badge)](https://www.codefactor.io/repository/github/brendenrdowd/mealplanner-client)

# Nutrionist 
Nutrionist allows users to find and save recipes to their calendar. Recipes can be searched using a keyword, and by cuisine, ingredients to avoid, meal type, and diets and allergies. 

_________

A live version can be found at [mealplan.now.sh](https://mealplan.now.sh/) 

## Motivation
I have a hard time grocery shopping effectively and cooking meals for myself. I wanted a centralized way to find recipes based on ingredients and consolidate it into a calendar so a user can know exactly whats for dinner coming up and what ingredients they will need. 

## Screenshots
![landing page](/public/readme/landing.png)

![login page](/public/readme/login.png)

![registration page](/public/readme/register.png)

![Dashboard](/public/readme/Dashboard.png)

![search](/public/readme/search.png)

![calendar](/public/readme/calendar.png)

![results](/public/readme/results.png)

![recipe](/public/readme/recipe.png)

## Technologies
Built using React (with enzyme, moment.js, and react-calendar, JWT). 

## API
The API can be reached on Heroku, [here](https://dry-brushlands-83819.herokuapp.com/api), though it is a protected endpoint. The repository can be found [here](https://github.com/brendenrdowd/mealPlanner-api).

The API handles authenticating user information, retrieving user information from the databse, and storing and retrieving recipe information for specific users from the database. 

### Spoonacular API
Currently I'm relying heavily on the RapidAPI spoonacular API. My hope is to integrate with a user interactive database and stop relying on the external API altogether. 

### Future Features
This is a project I will continue to work on,  my main goals are:
  - Add a consolidated grocery list
  - Allow users to update their information, i.e. diets, allergies and password. 
  - Allow users to favorite recipes and get recommendations based on favorites. 



