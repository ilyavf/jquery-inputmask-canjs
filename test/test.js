var QUnit = require('steal-qunit');
var can = require('can');
var stache = require('can/view/stache/');
require('src/index');

QUnit.module('jquery-inputmask-attr');

QUnit.test('basic', function(assert){
	var frag = can.stache('<input inputmask="99-9999999" type="text" />')();

	frag.firstChild.value = '12qwe34567yu89';
	
	assert.equal(frag.firstChild.value, '12-3456789', 'mask 99-9999999 is applied');
});
