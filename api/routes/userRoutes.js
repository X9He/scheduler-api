'use strict';

module.exports = function(app) {
    const auth = require('../middleware/authentication');
    let user = require('../controllers/userController');

    // schedule Routes
    app.route('/user/create')
        .post(user.create);

    app.route('/user/login')
        .post(user.login);

    app.route('/user/logout')
        .post(auth, user.logout);

    app.route('/user/logoutall')
        .post(auth, user.logoutAll);

    app.route('/user/me')
        .get(auth, user.getUser);

    app.route('/user/:id')
        .post(auth, user.update)
        .delete(auth, user.delete);


    // app.route('/user/signout')
    //     .put(user.signout);
};
