# scale-svg-path
scale-svg-path scales the position of a [parsed SVG path](https://github.com/jkroso/parse-svg-path) along its X/Y axes. It was extracted from Fontello’s wonderful [svgpath](https://github.com/fontello/svgpath) toolkit.

[![Build status](https://travis-ci.org/michaelrhodes/scale-svg-path.png?branch=master)](https://travis-ci.org/michaelrhodes/scale-svg-path)

[![Browser support](https://ci.testling.com/michaelrhodes/scale-svg-path.png)](https://ci.testling.com/michaelrhodes/scale-svg-path)

<small>Older browsers might require a polyfill for [Array.prototype.map](http://kangax.github.io/es5-compat-table/#Array.prototype.map).</small>

## Install
```sh
$ npm install scale-svg-path
```

## API
```js
scale(path, sx [, sy]) // sy = sx if undefined
```

### Example
``` js
var parse = require('parse-svg-path')
var scale = require('scale-svg-path')
var serialize = require('serialize-svg-path')

var path = parse('M10 10 L15 15')
var x = scale(path, 0.5)
var xy = scale(path, 0.5, 1.5)

serialize(x)
// => 'M5 5 L7.5 7.5'

serialize(xy)
// => 'M5 15 L7.5 22.5'
```

### License
[MIT](http://opensource.org/licenses/MIT)
