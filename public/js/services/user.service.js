'use  strict';

app.factory('User', function(DS) {
	var User = DS.defineResource({
		name: 'users'
	})
  /*
    create a User jsdata resource 
  */
	return User;
}).run(function (User) {});

