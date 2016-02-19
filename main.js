// IIFE
(function() {
		function sum (a, b) {
			return a + b;
		}

		function sum2() {
			var i, len, sum;
			i = 0;
			sum = 0;
			len = arguments.length || 0;
			while ( i < len ) {
				sum = sum + arguments[i];
				i++;
			}

			return sum;
		}

		function sum3 () {
			var i, sum, len;
			len = arguments.length;
			sum = 0;
			for ( i = 0; i < len ; i++ ) {
				sum = sum + arguments[i];
			}

			return sum;
		}

		function sum4() {
			var arr, sum;
			sum = 0;
			arr = [].slice.call(arguments); // em este punto arr es un Array
			arr.forEach(function (item) {
				sum = sum + item;
			});
			return sum;
		}

		console.log(' > sum', sum(10, 32, 100, 200, 1000, 1));
		console.log(' > sum2', sum2(10, 32, 100, 200, 1000, 1));
		console.log(' > sum3', sum3(10, 32, 100, 200, 1000, 1));
		console.log(' > sum4', sum4(10, 32, 100, 200, 1000, 1));

		

}).call(this);
