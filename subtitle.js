(function(subtitle, undefined) {
	'use strict';
	subtitle.options = {
		name: 'Subtitle JS',
		log: 'Log'
	};

	subtitle.write = function(message, options) {
		var self = subtitle;
		var output = '';
		output += '\n';
		output += '==============================================' + '\n';
		output += subtitle.options.name + ' ' + subtitle.options.log + '\n';
		output += '==============================================' + '\n';
		if(options !== undefined) {
			if(options.title !== 'undefined') {
				output += options.title + '\n';
				output += '----------------------------------------------' + '\n';
			}
		}
		output += '\n';
		output += message + '\n';
		output += '\n';
		output += '==============================================' + '\n';
		return output;
	};
	subtitle.output = function(subject, options) {
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
		console.log(subtitle.write(message, options));
	};
	subtitle.log = function() {
		for(var i = 0, len = arguments.length; i < len; i++) {
			var arg = arguments[i];
			var options;
			
			if(typeof arg === 'object') {
				if(arg.title !== 'undefined') {
					options = { title: arg.title };
				}
			}
			subtitle.output(arg, options);
		}
	};


}(window.subtitle = window.subtitle || {}));