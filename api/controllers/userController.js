'use strict';

let mongoose = require('mongoose')
let User = mongoose.model('User');

exports.create = function(req, res) {
    let new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

