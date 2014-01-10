/**
 * Applications
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
  	user_id: 'int',
  	location_id: 'int',
  	status: {
      type: 'int',
      defaultsTo: 0
    }
    
  }

};
