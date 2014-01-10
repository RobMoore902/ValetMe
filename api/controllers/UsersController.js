/**
 * UsersController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  profile: function(req, res){
  	console.log(req.session.passport.user);
  	var id = req.session.passport.user;
  	console.log(id);

  	var fname = '';
  	var lname = '';
  	var email = '';
  	user = null;
  	Users.find( id, function(err,user){
	  	res.view({
	  		user: id,
	  		first_name: user[0].fname,
	  		last_name: user[0].lname,
	  		e_mail: user[0].email,
	  		phone: user[0].phone,
	  		username: user[0].username
	  	});
 
  	});
  }

};
