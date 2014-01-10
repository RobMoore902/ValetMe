/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, ok) {

  // User is allowed, proceed to controller
  if (req.session.passport.user) {
    return ok();
  }

  // User is not allowed
  else {
      var error = {
          code: 403,
          msg: "You must be logged in to preform that action."
      };
    return res.send(error);
  }
};