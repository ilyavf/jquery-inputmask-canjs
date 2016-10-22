# jquery-inputmask-canjs

[![Build Status](https://travis-ci.org//jquery-inputmask-canjs.png?branch=master)](https://travis-ci.org//jquery-inputmask-canjs)



## Usage

This is a CanJS wrapper of the `jquery.inputmask`. It uses `can.view.attr` to instantiate the plugin based on the `inputmask` attribute.

### Install

```
$ npm install jquery-inputmask-canjs
```

Stache template:
```
<can-import from="jquery-inputmask-canjs" />
<input inputmask="99-9999999" type="text" />
<input inputmask="9-a{1,3}9{1,3}" type="text" />
```


## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
