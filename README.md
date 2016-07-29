# Todo App (Rails5 API and React Redux)

This application is simple Todo.

- Client: React + Redux (start with create-react-app)
- Server: Rails5 API

## Implementation Flow

1. Add Todo API on Rails5.
2. Add Todo Client with React.
3. Convert from react to react-redux. (No api access)
4. Update client to access Web API.

## How to launch

Go to rails root folder and install gems, then start server.

```bash
$ cd rails5-react-redux-todo
$ bundle install --path vendor/bundle
$ rails db:migrate
$ rails s -p 8000
=> Booting Puma
=> Rails 5.0.0 application starting in development on http://localhost:8000
=> Run `rails server -h` for more startup options
Puma starting in single mode...
```

 Open anather console, go to client folder and install node modules, then start server.

```bash
$ cd ./client
$ npm install
$ npm start
Compiled successfully!

The app is running at http://localhost:3000/
```

**notice** *For launching the two server, you should assign different port to each server.*
