// IIEF
(function () {
  'use strict';

	var dom, utils, events, catchDom, suscribeEvents, initialize, data;

	utils = {
		join: function (copy) {
			return copy.join('');
		},
		push: function (copy) {
			var num;

			num = Math.floor(Math.random() * 4 + 6);
			copy.push(num);
			return copy;
		},
		pop: function (copy) {
			copy.pop();
			return copy;
		},
		unshift: function (copy) {
			var num;

			num = Math.floor(Math.random() * 10 - 10);
			copy.unshift(num);
			return copy;
		},
		shift: function (copy) {
			copy.shift();
			return copy;
		},
		slice: function (copy) {
			return copy;
		},
		splice: function (copy) {
			copy.splice(1, 2, 'Eliminine desde la posición 1, 2 elementos y agregue este texto');
			return copy;
		}
	};

	events = {
		clickMethod: function (e) {
			var $el, method, result, message, $message;

			$el = e.target;
			method = $el.dataset.method;

			if ( Array.prototype[method] && utils[method] ) {
				result = utils[method](data.slice());
				dom.console.textContent = JSON.stringify(result);
				message = $el.dataset.message;
				$message = document.createElement('span');
				$message.classList.add('message');
				$message.textContent = message;
				dom.console.appendChild($message);
			}
		}
	};

	catchDom = function () {
		dom.console = document.querySelector('.console');
		dom.example = document.querySelector('.example');
		dom.methods = document.querySelectorAll('.method');
		suscribeEvents();
	};

	suscribeEvents = function () {
		[].forEach.call(dom.methods, function ($el, idx) {
			$el.addEventListener('click', events.clickMethod, true);
		});
	};

	initialize = function () {
		dom = {};
		catchDom();
		data = JSON.parse(dom.example.textContent);
	};

	initialize();

})();
