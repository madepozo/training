(function () {

	function Person(name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}

	Person.prototype.login = function (user, pass) {
		console.log(this.name, 'esta logeado');
	}

	function Admin(roles) {
		Person.call(this);
		this.roles = roles;
		this.saludo = function () {}
	}

	var o = {
		
	};

	Admin.prototype = Person.prototype;
	Admin.prototype.constructor = Admin;

	var	persona1 = new Person('Manuel', 'Del Pzo')
	console.log(persona1);

	var admin = new Admin('roles');
	console.log(admin);
	//
	// var o =  Object.create(persona1);
	// console.log('object o' ,o);

})();
