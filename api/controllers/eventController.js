'use strict';

let mongoose = require('mongoose'), Events = mongoose.model('Event');

exports.list_all_events = function(req, res) {
  Events.find({}, (err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
  });
};


exports.create_a_event = function(req, res) {
  let new_Schedule = new Events(req.body);
  new_Schedule.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.read_a_event = function(req, res) {
  Events.findById(req.params.eventId, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.update_a_event = function(req, res) {
  Events.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.delete_a_event = function(req, res) {
  Events.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'schedule successfully deleted' });
  });
};

