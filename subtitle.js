(function(subtitle, undefined) {
	'use strict';
	subtitle.options = {
		name: 'Subtitle JS',
		log: 'Log'
	};

	subtitle.write = function(message, options) {
		var self = subtitle,
				output = '';
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
		var message,
				messageType = (typeof subject);
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
			var arg = arguments[i],
					options;
			
			if(typeof arg === 'object') {
				if(arg.title !== 'undefined') {
					options = { title: arg.title };
				}
			}
			subtitle.output(arg, options);
		}
	};

	subtitle.runtime = function(subject, options) {
		if(typeof subject === 'function') {
			var destroy = false, 
					optionsType = (typeof options),
					start = new Date().getTime(),
					timeUnit = 'milliseconds',
					end, time;

			optionsType = (typeof options);
			switch(optionsType) {

				case 'object' :
				if(options.title !== 'undefined') {
					options = { title: options.title };
				}
				break;

				case 'string' :
					options = { title: options };
				break;

				case 'function' :
					destroy = true;
				break;
			}

			if(destroy === true) {
				return false;
			}

			subject();
			
			end = new Date().getTime();

			time = (end - start) + ' ' + timeUnit;

			subtitle.output(time, options);
		} else {
			return false;
		}
	};


}(window.subtitle = window.subtitle || {}));