'use strict';

let mongoose = require('mongoose');
let User = mongoose.model('User');

exports.create = async function (req, res) {
    try {
        let new_user = new User(req.body);
        const token = await new_user.generateAuthToken();
        await new_user.save();
        res.json({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
};

exports.update = async function (req, res) {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'homeAddress', 'workAddress'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try {
        const user = await User.findById(req.params.id);

        updates.forEach((update) => {
            user[update] = req.body[update]
        });

        await user.save();

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
        const user = await User.findByIdAndDelete(req.params.id);

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
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token})
    } catch (e) {
        res.status(400).send()
    }
};

exports.getUser = async function (req, res) {
    try {
        if (!req.user) {
            return res.status(404).send()
        }
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
};
