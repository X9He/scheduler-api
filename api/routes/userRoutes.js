'use strict';
module.exports = function(app) {
    let user = require('../controllers/userController');

    // schedule Routes
    app.route('/user/create')
        .post(user.create);


    // app.route('/user/signin')
    //     .put(user.signin);
    //
    //
    // app.route('/user/signout')
    //     .put(user.signout);
};
