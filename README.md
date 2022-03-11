# CS 35L Web App: GET SH*T DONE

    Shrihaan Gangopadhyay, Allen Ma
    UCLA CS 35L Winter 2022

## How to Launch the App:

- Clone this entire Git repository onto your local machine.
- Development was done on Visual Studio Code, hence we reccomend running on the same platform.
- Open a shell within your platform of choice and cd into <Task-Manager-CS35L>
- Run npm install to install needed dependencies and modules.

### Setting Up Server on MongoDB with .env file creation
- The backend database is setup via MongoDB (https://www.mongodb.com/cloud/atlas/register) 
- Post creating an account, setup a database and select "connect your application" as the connection method.
- Select 'Node.js 3.6 or later' for the 'DRIVER' and 'VERSION' respectively.
- And then create a .env file with the connection string set equal to 'MONGO_KEY'

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
