/*jquery-inputmask-canjs@0.3.2#jquery-inputmask-canjs*/
define(function (require, exports, module) {
    var can = require('can');
    var Inputmask = require('jquery.inputmask/dist/inputmask');
    can.view.attr('inputmask', function (el) {
        var config = el.getAttribute('inputmask'), im = new Inputmask(config);
        im.mask(el);
    });
});