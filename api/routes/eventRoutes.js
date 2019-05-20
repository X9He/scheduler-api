'use strict';
module.exports = function(app) {
  let event = require('../controllers/eventController');

  // schedule Routes
  app.route('/event')
    .get(event.list_all_events)
    .post(event.create_a_event);


  app.route('/event/:eventId')
    .get(event.read_a_event)
    .put(event.update_a_event)
    .delete(event.delete_a_event);
};
