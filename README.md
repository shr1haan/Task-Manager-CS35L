# CS 35L Web App: GET SH*T DONE

    Shrihaan Gangopadhyay, Allen Ma
    UCLA CS 35L Winter 2022

## How to Launch the App:

- Clone the entire Git repository onto your local machine @ "https://github.com/shr1haan/Task-Manager-CS35L.git"
- Development was done on Visual Studio Code, hence we reccomend running on the same platform.
- Open a shell within Visual Studio Code.
- Run npm install to install needed dependencies and modules.

### Setting Up Server on MongoDB with .env file creation
- The backend database is setup via MongoDB, in order to run the app, one must create an account @ "https://www.mongodb.com/cloud/atlas/register"; please note that the login credentials are required to setup the connection string to the database.
- Post creating an account, setup a database and select "connect your application" as the connection method.
- Select 'Node.js 3.6 or later' for the 'DRIVER' and 'VERSION' respectively.
- And then create a .env file with the connection string set equal to 'MONGO_KEY'
- This looks like: MONGO_KEY = "mongodb+srv://Shrihaan:"**'password'**@task-manager.qumhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", and enter the actual password in **'password'**

```javascript
MONGO_KEY = "mongodb+srv://Shrihaan:password@task-manager.qumhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```

### Required packages:

- These have been covered via npm install
- npm start will create the sever on localhost:3000

### Functionality:

- Type into the task box and press add (or hit enter) to input a task into the task list.
- Delete any task you have completed or wish to remove with the delete button.
- Edit specific tasks by clicking on the edit icon
