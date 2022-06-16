# SnakePad

Hello, welcome to my SnakePad project. As someone who has a growing collection of corn snakes, I need a way that was more user friendly and exicitng than a excel spreadsheet. So when it came time to build an app for my 16 week learn to code program I had this idea almost immediately.

## Deployed Link

https://psteide-snakepad.netlify.app

## Project Details

There is a log-in necessary, using Auth0, (necessary so each user can have access to thier individual list of snakes). But once you're logged in, you're greeted to your very own list of snakes.

![webpage](https://i2.paste.pics/97dabe21746c0c456f79fb9f7d6b02a4.png)

On this page you can add snakes to your collection, delete them, and just generally have access to high level information on your snakes.

If you click more info you will be sent to the detail page of that particular snake:

![webpage](https://i2.paste.pics/4e4ce71de419fc1f07e24655cf82b009.png)

On this page you can update the snake's info and add new records using the Add record button.

## Technologies Used

The front end for this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

The back end for this project was done using Spring-boot, deployed in heroku.

### Back End Repo Link

https://github.com/psteide93/capstone-colubrid-tracker-api

### Back End Deployed Link

https://colubrid-tracker.herokuapp.com/

API endpoints:

api/snakes
api/notes
api/weights
api/sheds
api/feedings
