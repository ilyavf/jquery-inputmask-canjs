var can = require('can');
var Inputmask = require('node_modules/jquery.inputmask/dist/inputmask/inputmask');

can.view.attr('inputmask', function(el){
	var config = el.getAttribute('inputmask'),
		im = new Inputmask(config);
	
	console.log('attr.inputmask ' + config);
	im.mask(el);
});

