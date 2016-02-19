(function () {
	var o, p1,p2;
	o = {}; // o =  new Object()
	o.a = 'a'; // o[a] = 'a'
	o.b = 10;
	o.hola = function () {
		console.log(' > o',this);
		return '> Hola';
	};
	console.log(o.a); // console.log(o[a])

	function func1 () {
		console.log('click');
	}

	p1 = {
		name: 'Ronny',
		lastname: 'Cabrera',
		toString: function () {
			return this.name + ' ' + this.lastname;
		}
	};

	p2 = {
		name: 'Marcelo',
		lastname: 'Carranza',
		toString: function () {
			return this.name + ' ' + this.lastname;
		}// },
		// fullName: this.name + ' ' + this.lastname > No permitido
	};

	console.log('Ronny >', p1.toString.call(p2));
	console.log('Marcelo > ', p2.toString.apply(p1));


	function Person (name, lastName) {
		this.name = name;
		this.lastName = lastName;
		this.toString = function () {
			console.log(this.name, this.lastName);
		}
	}

	Person.prototype.saludo = function (name) {
		console.log('Hola ' + name )
	};

	Person.bienvenida = function () {

	};


	var p = new Person('Manuel', 'Del Pozo');
	p.toString();
	p.saludo('Ronny');
	console.log(p);
	var p5 =  new Person('Juan', 'Perez');
	p5.saludo('Marcelo');
	console.log(p5);

	Person.prototype.despedida = function () {
		console.log('adios');
	};

	function Alumno(name) {
		Person.call(this);
		this.name = name;
	}

	Alumno.edad = 10;

	console.log('edad > ', Alumno.edad);

	var a1 = new Alumno('Pedro');
	console.log(a1);
	a1.lastName = 'Diaz';

	// Tercera forma de Crear objetos

	var o2 = Object.create();

})();
