
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
    beginTime:{
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    scheduleType: {
        // 0 is standard, 1 is a bus schedule
        type: Number
    },
    requireNotification: {
        type: Boolean,
        required: true
    },
    message: {
        type: String,
        required: false
    }
});


module.exports = mongoose.model('Schedule', ScheduleSchema);