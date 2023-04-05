# ASSIGNMENT 9

- Name: Abhishek Hegde
- NUID: 002744522
- Email ID: hegde.ab@northeastern.edu

## Assignment 9 - Backend and frontend connection with 4 react pages including react-router, react-dom and other react components

### Project aspects:

Created a backend folder for connecting to the mongodb and running the localhost on 5000 port and frontend folder to run the react app on localhost 3000 port

-> COonnection is made with backend created in Assignment 8, and login is authenticaed with details stored in database.
- Routers -> userRouters are created for each operation which will go to the Controllers for respective opertions
- Controllers -> In userControllers, for each operation a different method is created with await and async handling to perform their respective operations on the mongodb
- Middlewares -> In errorMiddlewares all the generic errors are defined ex. 400 "Not Found" or 201 "Success"
- 4 Pages are created, home,about,contact andjobs, with relevant data in it using single component card for heading and printing the horizontal lines
- map() is used to fetch the data from file in about section.
- Card component is used.
-Css are used for styling.

### Setup:

- Download the Assignment 9 folder and type command first command "npm install" which will install all the dependencies and then run "npm start" in terminal which will run the server, then run 'cd my-app' and then 'npm start' again which will start the frontend.
