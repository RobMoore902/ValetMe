/**
 * LocationsController
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
  getLocations: function (req, res) {
  	Locations.find(function(err,locs){
  		if(err)
  			return res.send('Sorry, B, shit happens...');
  		res.send({
  			locations: locs
  		});
  	});
  },
  offer: function(req, res) {
      res.view();
  }

};
