# About
Demo app written in React and Redux to simulate a player dashboard management tool.

Data is taken from an API and persists to the API server via JSON.

Players can be edited within their component, saved, and updated on the server in 'real' time

When there is a change to a player it will persist until the Heroku dyno restarts.


# Features
Search Players

Edit Players (Team, Position, College)

Add/Remove favorites

Order Favorites Via Drag and Drop (While viewing favorites)

# Install
`git clone https://github.com/nolansmith/demo-player-dashboard.git "dashboard-app" && cd dashboard-app && npm install`

# Dev
`npm run start:dev`

# Prod
`npm run pack && npm run start`


# Application URL (remote)
https://nbaplayerapp.herokuapp.com/


# API Server
http://nba-player-api-dev.us-east-1.elasticbeanstalk.com/

