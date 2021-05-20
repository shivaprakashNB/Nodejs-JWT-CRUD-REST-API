![nodemongo](https://user-images.githubusercontent.com/74342331/118807052-73744580-b8c5-11eb-8be1-98faaaaaf22c.png)
# Nodejs-JWT-CRUD-REST-API
The aim of this repository is to allow CRUD operations (GET, POST, PUT, and DELETE) on the API, which will run the corresponding mongodb database commands. To do this, we’ll set up a route for each endpoint and a function for each query.

Securing RESTful APIs with JWT


How to secure a Nodejs RESTful CRUD API using JSON web tokens?

This repository will shows how to use JWT with a component based agile methodology API using mongodb as the database.

It consist of a component based structure. under the componet ,controller defines interact with routes(postfixes), services contains the all the business logic and dao files is interact with database.

models defines the scheme of the database coolection

It has a db file which will be used to connect the app to the database.
helper directory contains the 
1. auntheticator file (based on company can segregate the data)
2. db is the connection between server
3. error-handler ( global error handling)
4. jwt ( contains the configuration for registering and logging users in, signing and verifying tokens)
5. responseMessage ( conatins all http code response)

The server file is used to spin up the server and tells the app to listen on a specific port.

Details of REST API

1. GET method REST API : For fetching single record from database collection
    routes name : /Users/getOneUsers
2. GET method REST API : For fetching multiple record from database collection
    routes name : /Users/getAllUsers
3. POST method REST API : Inserting single record to the DB collection 
    routes name : /Users/createOneUsers
4. PUT method REST API : updating record based on the loginName to the DB collection 
    routes name : /Users/updateUsers
5. DELETE method REST API : deleting record based on the loginName to the DB collection 
    routes name : /Users/deleteUsers
