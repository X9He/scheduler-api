'use strict';

let mongoose = require('mongoose'), Schedule = mongoose.model('Schedule');

exports.list_all_schedules = function(req, res) {
  Schedule.find({}, (err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
  });
};


exports.create_a_schedule = function(req, res) {
  var new_Schedule = new Schedule(req.body);
  new_Schedule.save(function(err, schedule) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.read_a_schedule = function(req, res) {
  Schedule.findById(req.params.scheduleId, function(err, schedule) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.update_a_schedule = function(req, res) {
  Schedule.findOneAndUpdate({_id: req.params.scheduleId}, req.body, {new: true}, function(err, schedule) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.delete_a_schedule = function(req, res) {
  Schedule.remove({
    _id: req.params.scheduleId
  }, function(err, schedule) {
    if (err)
      res.send(err);
    res.json({ message: 'schedule successfully deleted' });
  });
};

