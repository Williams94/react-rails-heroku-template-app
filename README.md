## Project Conversation History

This is a Ruby on Rails web application that allows users to keep track of conversations and status updates for projects. Users can leave comments and change the status of a project, and the conversation history will list all comments and status changes.

## Installation
To run the application, you will need to have Ruby, Ruby on Rails and Node.js installed on your system.

## Back-end
Once you have Ruby on Rails installed, you can clone the repository and install the dependencies by running:

1. `git clone https://github.com/yourusername/project-conversation-history.git`

1. `cd project-conversation-history`

1. `bundle install`

You will also need to set up the database by running:


1. `rails db:create`

1. `rails db:migrate`

## Front-end

The front-end is built using React and located under the root directory of the project `./front-end-project-conversation-history`

1. `cd ./front-end-project-conversation-history`
1. `npm install`

# Development
## Starting the app locally
To start the Rails application, run:

`rails server`

Then to start the React application, run:
`npm start`

Then, open your web browser and go to http://localhost:3000/ to view the application.

## Testing the app

To run the Rails tests, run:

`rails test`

To run the React tests, run:

`npm test`

# Usage
To add a new message, click on the "New Comment" button and enter your comment in the form.

To change the status of a project, click on the "Change Status" button and select the new status from the dropdown menu.

To view the conversation history, click on the "View History" button. This will display a list of all comments and status changes for the project.
