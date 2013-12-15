(function() {
	"use strict";
	subtitle.options.name = 'New Name';
	var obj = {
		holy: 'moly'
	};
	var func = function() {
		return true;
	};
	subtitle.log(func, { title: 'Return True Function' });

	

	var timed = function(wow) {
		for(var i = 0; i < wow; i++) {
			var is = i;
		}
	};

	subtitle.runtime(timed, 'loop test');

})();