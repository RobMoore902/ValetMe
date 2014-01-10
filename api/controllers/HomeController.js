/**
 * CommentsController
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
  index: function (req, res) {
  	Locations.find(function(err,locs){
  		if(err)
  			return res.view('500');
  		if(req.session.passport.user != undefined){
  			var id = req.session.passport.user;
  			_.each(locs,function(el,i){
          
  				Applications.findByLocation_id(i)
  				.where({ user_id : id})
  				.where({status: 1})
  				.exec(function(err, loc){
  					console.log(loc);
  					if((err) || !loc)
  						return;
  					if(loc.length > 0)
  						el.status = 1
  				});
  			});
  		}
  		else{
  			var id = 0;
  		}
  		res.view({
  			locations: locs,

  			user: id
  		});
  	});
  }
  



// var markersArray = [];
//         $("#categories").change(function(){
        	
//             deleteOverlays();
// 			var el = $(this);
// 			var data = el.serialize();
// 				$.ajax({
// 				url: "/Google Api Project/db_connection.php",
// 				data: data,
// 				dataType: "json",
// 				type: "POST",
// 				success: function(resp){
// 						for (var x = 0; x < resp.length; x++)
//                         {
// 							var pos2 = new google.maps.LatLng(resp[x].lat,resp[x].lng);
// 							var marker = new google.maps.Marker({
// 							position: pos2,
// 							map: map,
// 							animation: google.maps.Animation.DROP,
// 							title: resp[x].name
// 							});
//                             markersArray.push(marker);
//                         }
// 					}
// 				});

 };