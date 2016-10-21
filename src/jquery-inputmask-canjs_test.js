import QUnit from 'steal-qunit';
import plugin from './jquery-inputmask-canjs';

QUnit.module('jquery-inputmask-canjs');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the jquery-inputmask-canjs plugin');
});
