# Back-Log Client

_Back-Log_ is a way to keep record of your progress in games.

Users must create an account to access the app's features. Once signed in,
A user can create a new log to save a record of their progress in a game.
This log, along with all other logs created by the current user, can be displayed,
edited and deleted.

The app was built starting with the back-end. An API was created using Ruby on Rails.
This API was tested using curl scripts. Once successful get, post, patch and deletes
were made development focused on creating the browser client. The client was built
to acomplish the CRUD actions neccessary for users and their Log objects. Focus then
shifted back to the API, making sure that all requests were secure and authenticated.
Lastly, the client was styled.

_User Stories_

-As a user, I want to be able to sign in so I can see my backlog of games.

-As a developer, I want to be able to have a user only access, edit and destroy
the logs that they own.

-As a user, I want to be able to update a game in my backlog once i have progressed in it.

-As a developer, I want to be able to have my client and API perform all RESTful actions.

-As a user, I want to be able to easily read and navigate the client site.

-As a developer, I want to be able to write clean and organized code that
accomplishes the tasks I want it to.

[Back-Log](https://james-coombs.github.io/back-log-client/)

[Back-Log API](https://github.com/james-coombs/back-log-api)

[Wireframe](http://i.imgur.com/9ja2CUn.jpg)

[ERD](http://i.imgur.com/rj8ZSJE.jpg)
