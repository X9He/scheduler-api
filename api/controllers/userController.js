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

exports.update = async function (req, res) {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'homeAddress', 'workAddress'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => {
            user[update] = req.body[update]
        });

        await user.save();
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
};

exports.delete = async function (req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
};

exports.login = async function (req, res) {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
};
