const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.use('/getall', (req, res) => {
    
    let response = { error: false, message: 'Ok', total: 0, data: [] };

    const params = req.query;

    User.getAll(params, (error, message, total, data) => {
        response = {
            error: error,
            message: message,
            total: total,
            data: data,
        };

        res.send(response);
    });

})

router.use('/get/:id', (req, res) => {

    let response = { error: false, message: 'Ok', total: 0, data: [] };

    const params = req.params;

    User.get(params, (error, message, total, data) => {

        response = {
            error: error,
            message: message,
            total: total,
            data: data,
        };

        res.send(response);
    });

})

router.use('/add', (req, res) => {

    let response = { error: false, message: 'Ok', total: 0, data: [] };

    const params = req.body;

    User.add(params, (error, message, total, data) => {

        response = {
            error: error,
            message: message,
            total: total,
            data: data,
        };

        res.send(response);
    });  

})

router.use('/update', (req, res) => {

    let response = { error: false, message: 'Ok', total: 0, data: [] };

    const params = req.body;

    User.update(params, (error, message, total, data) => {

        response = {
            error: error,
            message: message,
            total: total,
            data: data,
        };

        res.send(response);
    });  

})

router.use('/delete/:id', (req, res) => {

    let response = { error: false, message: 'Ok', total: 0, data: [] };

    const params = req.params;

    console.log(params);

    User.delete(params, (error, message, total, data) => {

        response = {
            error: error,
            message: message,
            total: total,
            data: data,
        };

        res.send(response);
    });  

})

module.exports = router;