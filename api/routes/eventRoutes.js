'use strict';
module.exports = function(app) {
  let event = require('../controllers/eventController');

  // schedule Routes
  app.route('/event')
    .get(event.list_all_schedules)
    .post(event.create_a_schedule);


  app.route('/event/:eventId')
    .get(event.read_a_schedule)
    .put(event.update_a_schedule)
    .delete(event.delete_a_schedule);
};
