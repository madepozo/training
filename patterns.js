(function () {
	// closure

	function func1() {
		var outer = 'outer';
		function func2() {
			var inner = 'inner';
			console.log('inner >', inner);
			console.log('outer >', outer);
		}
		func2();
	}

	//func1();

	function breadcrum() {
		var title = [];

		function add(subtitle) {
			title.push(subtitle);
			console.log(title.join(' > '));
		}

		function remove() {
			title.pop();
			console.log(title.join(' > '));
		}

		return {
			add: add,
			remove: remove
		};
	}

	var generateTitle =  breadcrum();
	generateTitle.add('paso1');
	generateTitle.add('paso2');
	generateTitle.add('paso3');
	generateTitle.remove();

	// Module

	var obj = (function (Module) {
		var title = [];

		var add = function (subtitle) {
			title.push(subtitle);
		};

		function remove() {
			title.pop();
		}

		return {
			_add: add,
			_remove: remove,
			_toString: function () {
				console.log(title.join(' > '));
			}
		};
	})();

	obj._add('paso1');
	obj._add('paso2');
	obj._add('paso3');
	obj._toString();
	obj._add('paso4');
	obj._toString();

	function primero(cb) {
		for (var i = 0; i < 5; i++) {
			console.log(i);
		}
		if ( cb instanceof Function ) {
			cb();
		}
	}

	primero(function () {
		console.log('al fin ejecuto!');
	});

	primero(2);

	// var eventClick = function () {
	//
	// }
	//
	// $('.btnComprar').on('click', eventClick);
	//
	// $('.btnComprar').off('click', eventClick);



})();
