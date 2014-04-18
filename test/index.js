var tape = require('tape')
var parse = require('parse-svg-path')
var scale = require('../')

var straight = parse('M10 10 L15 15')
var curves = {
  relative: parse('M10 10 c15 15, 20 10, 15 15'),
  absolute: parse('M10 10 C15 15, 20 10, 15 15')
}

tape('scale by 0.5', function(test) {
  var input = scale(straight, 0.5)
  var expected = parse('M5 5 L7.5 7.5')
  test.deepEqual(input, expected)
  test.end()
})

tape('scale by 0.5 and 1.5', function(test) {
  var input = scale(straight, 0.5, 1.5)
  var expected = parse('M5 15 L7.5 22.5')
  test.deepEqual(input, expected)
  test.end()
})

tape('scale by 0.5 and 1.5 (relative curves)', function(test) {
  var input = scale(curves.relative, 0.5, 1.5)
  var expected = parse('M5 15 c7.5 22.5 10 15 7.5 22.5')
  test.deepEqual(input, expected)
  test.end()
})

tape('scale by 0.5 and 1.5 (absolute curves)', function(test) {
  var input = scale(curves.absolute, 0.5, 1.5)
  var expected = parse('M5 15 C7.5 22.5 10 15 7.5 22.5')
  test.deepEqual(input, expected)
  test.end()
})
