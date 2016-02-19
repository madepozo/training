var test2, test3;


// 1. Función expresada

function _test (condition) {
	if (condition) {
		return 'Paso la prueba.';
	} else {
		return 'No paso la prueba';
	}
}


// 2. Función declarada
_test2 = function (condition) {
	if (condition) {
		return 'Paso la prueba.';
	} else {
		return 'No paso la prueba';
	}
};

console.log(' > _test', _test(2 < 2));
console.log(' > _test2', _test2(2 < 2));

// 3. Función usando Constructor Function

test3 = new Function('a', 'b', 'console.log(a, b)');



// Test(1 < 2);

// falsy :
/* 0
*  null
*  undefined
*  ''
*  false
*  NaN
*/
// Truthy
/*
 * true
 * {}
 * 42
 * []
 * "foo"
 * (new Date())
 */
