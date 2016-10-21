# jquery-inputmask-canjs

[![Build Status](https://travis-ci.org//jquery-inputmask-canjs.png?branch=master)](https://travis-ci.org//jquery-inputmask-canjs)



## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'jquery-inputmask-canjs';
```

### CommonJS use

Use `require` to load `jquery-inputmask-canjs` and everything else
needed to create a template that uses `jquery-inputmask-canjs`:

```js
var plugin = require("jquery-inputmask-canjs");
```

## AMD use

Configure the `can` and `jquery` paths and the `jquery-inputmask-canjs` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'jquery-inputmask-canjs',
		    	location: 'node_modules/jquery-inputmask-canjs/dist/amd',
		    	main: 'lib/jquery-inputmask-canjs'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/jquery-inputmask-canjs/dist/global/jquery-inputmask-canjs.js'></script>
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
