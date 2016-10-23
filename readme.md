# jquery-inputmask-canjs

[![Build Status](https://travis-ci.org//jquery-inputmask-canjs.png?branch=master)](https://travis-ci.org//jquery-inputmask-canjs)



## Usage

This is a [CanJS](https://canjs.com/) wrapper for [jquery.inputmask](http://robinherbots.github.io/Inputmask/). It uses [can.view.attr](https://canjs.com/docs/can.view.attr.html) to instantiate the plugin based on the `inputmask` attribute.

### Install

```cmd
$ npm install jquery-inputmask-canjs
```

Stache template:
```html
<can-import from="jquery-inputmask-canjs" />
<input inputmask="99-9999999" type="text" />
<input inputmask="9-a{1,3}9{1,3}" type="text" />
```

![inputmask demo](./dist/demo.png)

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```cmd
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```cmd
npm test
```
