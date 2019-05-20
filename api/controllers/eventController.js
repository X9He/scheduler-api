'use strict';

let mongoose = require('mongoose'), Events = mongoose.model('Event');

exports.list_all_schedules = function(req, res) {
  Events.find({}, (err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
  });
};


exports.create_a_schedule = function(req, res) {
  let new_Schedule = new Events(req.body);
  new_Schedule.save(function(err, schedule) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.read_a_schedule = function(req, res) {
  Events.findById(req.params.scheduleId, function(err, schedule) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.update_a_schedule = function(req, res) {
  Events.findOneAndUpdate({_id: req.params.scheduleId}, req.body, {new: true}, function(err, schedule) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.delete_a_schedule = function(req, res) {
  Events.remove({
    _id: req.params.scheduleId
  }, function(err, schedule) {
    if (err)
      res.send(err);
    res.json({ message: 'schedule successfully deleted' });
  });
};

