const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExployeeSchema = new Schema({
    firstname: {
        type: String, required: true, trim: true
    },
    lastname: {
        type: String, required: true, trim: true
    },
    telephone: {
        type: Number, required: true, minlength: 10, maxlength: 15
    },
    serial: {
        type: String
    },
    email: {
        type: String, required: true, trim: true
    },
    location: {
        type: String, required: true
    },
    commencement: {
        type: Date, required: true
    },
    department: {
        type: String, required: true
    }
},
{
    timestamps: true
});

const Employees = mongoose.model('employee', ExployeeSchema);
module.exports = Employees;
