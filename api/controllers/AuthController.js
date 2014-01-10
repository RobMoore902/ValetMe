/**
 * AuthController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var passport = require('passport');

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
    login: function (req, res) {
        passport.authenticate('local', function(err, user, info)
        {
            if ((err) || (!user))
            {
                res.redirect('/');
                return;
            }
            req.logIn(user, function(err)
            {
                if (err)
                {
                    res.view();
                    return;
                }
                res.redirect('/');
                return;
            });
        })(req, res);
    },
//    'twitter': function (req, res)
//    {
//        console.log(passport);
//        console.log('authController');
//        passport.authenticate('twitter');
//    },
//    'twitter/callback': function (req, res) {
//        passport.authenticate('twitter', { failureRedirect: '/login' },
//            function (err, user) {
//                if(err)
//                    res.view('500');
//                console.log(user);
//            })(req, res);
//    },
    logout: function (req, res) {
      req.logout();
      res.redirect('/');
    }
};
