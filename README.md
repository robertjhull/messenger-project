# Messenger

A one-to-one realtime chat app.

**Tech**: React, React-Redux, Node, Express, Socket.

## Initial Setup

Create the PostgreSQL database (these instructions may need to be adapted for your operating system):

```
psql
CREATE DATABASE messenger;
\q
```

Update db.js to connect with your local PostgreSQL set up. The [Sequelize documentation](https://sequelize.org/master/manual/getting-started.html) can help with this.

Create a .env file in the server directory and add your session secret (this can be any string):

```
SESSION_SECRET = "your session secret"
```

In the server folder, install dependencies and then seed the database:

```
cd server
npm install
npm run seed
```

In the client folder, install dependencies:

```
cd client
npm install
```

### Running the Application Locally

In one terminal, start the front end:

```
cd client
npm start
```

In a separate terminal, start the back end:

```
cd server
npm run dev
```

## Demo

Login and registration:
![messengerlogin](https://user-images.githubusercontent.com/67487694/130697735-a2675223-275b-48aa-961c-a08c02ec0ce4.png)

Chat:
![messengerchat](https://user-images.githubusercontent.com/67487694/130697748-8de230bc-0beb-449b-8656-b133c7846095.png)
