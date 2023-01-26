# Scrumone_Else_Broke_It

A simple Application with a Frontend and Backend secured by Basic Authentication.

## Use Case

1. User can log in, logout, see producsts. Edit, delete his profile and delivery address(only backend). Username can't be changed. 
2. A Admin is able to change his profile with the delivery address and can Edit users in a seperate menu with more options than a user. 
3. Products have a section for Details which are added by the Admin. Who is also responsible for adding, deleting and editing the products. 
Default Username and passwords are generated in an in memory database. In data.sql the values are shown. 


## Backend
### Prerequisite
This App is running with:
- Java 17
- Maven 3.X

### Start
Run Maven clean, and compile before running the applicaiton
To run backend go to use WebShopApplication

## Frontend
### Start
Node Js has to be installed if not: Download and install. https://nodejs.org/en/download/
To run frontend go to directory `.\webshop-frontend` and execute in a powershell.

```
npm install -g @angular/cli
npm install
ng serve
```

## Go to Application

Application is reachable under

[Angular Localhost Frontend](http://localhost:4200)
