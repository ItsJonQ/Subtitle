(function(subtitle, undefined) {
	'use strict';
	subtitle.options = {
		name: 'Subtitle Log'
	};

	subtitle.write = function(message) {
		var self = subtitle;
		var output = '';
		output += '\n';
		output += '==============================================' + '\n';
		output += subtitle.options.name + '\n';
		output += '==============================================' + '\n';
		output += '\n';
		output += message + '\n';
		output += '\n';
		output += '==============================================' + '\n';
		return output;
	};
	subtitle.output = function(subject) {
		var message;
		var messageType = (typeof subject);
		switch(messageType) {
			case 'function' :
				message = subject.toString();
				break;

			case 'object' :
				message = JSON.stringify(subject);
				break;

			case 'string' : 
				message = subject;
				break;
		}
		console.log(subtitle.write(message));
	};
	subtitle.log = function() {
		for(var i = 0, len = arguments.length; i < len; i++) {
			var arg = arguments[i];
			subtitle.output(arg);
		}
	};


}(window.subtitle = window.subtitle || {}));