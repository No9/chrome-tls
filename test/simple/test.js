var test = require('tape')
var tls = require('../../chrome')
test('Initial flow', function (t) {
  t.equal('foo', tls.simple(), 'We are running')
})
