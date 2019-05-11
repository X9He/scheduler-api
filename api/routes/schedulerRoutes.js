'use strict';
module.exports = function(app) {
  var schedule = require('../controllers/schedulerController');

  // schedule Routes
  app.route('/schedule')
    .get(schedule.list_all_schedules)
    .post(schedule.create_a_schedule);


  app.route('/schedule/:scheduleId')
    .get(schedule.read_a_schedule)
    .put(schedule.update_a_schedule)
    .delete(schedule.delete_a_schedule);
};
