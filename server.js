const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const mysql = require('mysql2');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const auth = require('./utils/auth'); Do I need to include auth?
// Do I need to add the routers in my controller indexes?

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  cookie: {maxAge: 900000}
};

app.use(session(sess));

const hbs = exphbs.create({ helpers: helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
