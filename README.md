This is a Ruby on Rails web application that allows users to keep track of conversations and status updates for projects. Users can leave comments and change the status of a project, and the conversation history will list all comments and status changes.

## Installation
To run the application, you will need to have Ruby, Ruby on Rails and Node.js installed on your system.

## Back-end
Once you have Ruby on Rails installed, you can clone the repository and install the dependencies by running:

1. `git clone https://github.com/yourusername/react-rails-heroku-template-app.git`

1. `cd react-rails-heroku-template-app`

1. `bundle install`

You will also need to set up the database by running:


1. `rails db:create`

1. `rails db:migrate`

## Front-end

The front-end is built using React and located under the root directory of the project `./front-end`

1. `cd ./front-end`
1. `npm install`

# Development
## Starting the app locally
To start the application, run:

`rake start`

## Testing the app

To run the main spec testing the message endpoints, run:

`bundle exec rspec ./test/controllers/messages_controller_spec.rb`

To run the React tests, first cd into the front-end directory:

`cd ./front-end`

Then run:

`yarn test`

# Usage
The conversation history is rendered with the newest messages at the top.

To add a new message, enter your comment in the text field and click the "Send Message" button.

To change the status of a project, click on the "Project Status" dropdown menu and select the new status from the dropdown menu.

# Heroku

## Setup
- `heroku login`
- `heroku create`
- `heroku buildpacks:add heroku/nodejs --index 1`
- `heroku buildpacks:add heroku/ruby --index 2`
- `git push heroku main`
- `heroku run:detached rake db:migrate`
- `heroku open`

## Commands
- `heroku ps:scale web=0` - stops the dyno
- `heroku ps:scale web=1` - starts the dyno
- `heroku pg:info`
- `heroku logs --tail` - tail logs`
- `heroku addons`
- `heroku config`
- `heroku git:remote -a <app_name>`
- `heroku pg:reset DATABASE_URL --app <app_name>`
