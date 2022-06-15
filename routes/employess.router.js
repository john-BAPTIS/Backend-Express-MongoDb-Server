const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../Models/employees.models');

const employeeRouter = express.Router();
employeeRouter.use(bodyParser.json());


employeeRouter.route('/')

.get((req, res, next) =>{
    Employee.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ', err));
});

employeeRouter.route('/add')
.post((req, res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const telephone = Number(req.body.telephone);
    const ID = req.body.serial;
    const email = req.body.email;
    const location = req.body.location;
    const commencement = Date.parse(req.body.commencement);
    const department = req.body.department;

    const newEmployee = new Employee({
        firstname,
        lastname,
        telephone,
        ID,
        email,
        location,
        commencement,
        department
    });

    newEmployee.save()
    .then(() => res.json('Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

employeeRouter.route('/:id')
.get((req, res) =>{
    Employee.findByIdan(req.params.id)
    .then((doc) =>{
        res.statusCode = 200;
        res.json(doc);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

employeeRouter.route('/:id')
.delete((req, res) =>{
    Employee.findByIdAndRemove(req.params.id)
    .then(() =>{
        res.statusCode = 200;
        res.json('Id deleted');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

employeeRouter.route('/update/:id')
.post((req, res) =>{
    Employee.findById(req.params.id)
        .then((docs) =>{
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const telephone = Number(req.body.telephone);
            const ID = req.body.serial;
            const email = req.body.email;
            const location = req.body.location;
            const commencement = req.body.commencement;
            const department = req.body.department;
        
            const newEmployee = new Employee({
                firstname,
                lastname,
                telephone,
                ID,
                email,
                location,
                commencement,
                department
            });
        
            newEmployee.save()
            .then(() => res.json(docs, 'Update'))
            .catch(err => res.status(400).json('Error: ' + err));
        });
});

employeeRouter.route('/')
.delete((req, res) =>{
    Employee.deleteMany()
    .then(() =>{
        res.statusCode = 200;
        res.json('All deleted!');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = employeeRouter;
