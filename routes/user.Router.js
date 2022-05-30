const express = require('express');
const bodyParser = require('body-parser');
const Users = require('../Models/user.models');

const usersRouter = express.Router();
usersRouter.use(bodyParser.json());


usersRouter.route('/')
.get((req, res, next) =>{
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ', err));
});

usersRouter.route('/add')
.post((req, res, next) =>{
    const username = req.body.username;

    const newUser = new Users({username});

    newUser.save()
    .then(() => res.json(username, 'added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//Use res.status(status).json(obj)
module.exports = usersRouter;