'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EventSchema = new Schema({
    // participants: {
    //     type: Schema.ObjectId,ref: 'User',
    //     required: true
    // },
    title: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    beginTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    notificationCDMinutes: {
        type: Number,
        required: false
    },
    repeat: {
        // 0 is never
        // 1 is everyday
        // 2 is every week
        // 3 is every month
        // 4 is every year
        type: Number,
        required: false
    },
    eventType: {
        // 0 is standard, 1 is a bus schedule
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    requireNotification: {
        type: Boolean,
        required: true
    }
});


module.exports = mongoose.model('Event', EventSchema);
