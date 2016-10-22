var can = require('can');
var Inputmask = require('jquery.inputmask/dist/inputmask/inputmask');

can.view.attr('inputmask', function(el){
	var config = el.getAttribute('inputmask'),
		im = new Inputmask(config);
	
	im.mask(el);
});

