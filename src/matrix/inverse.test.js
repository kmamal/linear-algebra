const { test } = require('@kmamal/testing')

const Num = require('@kmamal/numbers/js')
const Mat = require('../matrix').defineFor(Num)
const { inverse } = require('./inverse').defineFor(Mat)

test('matrix.inverse', (t) => {
	t.throws(() => { inverse([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 4, 4) })
	t.equal(inverse([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 4, 4), [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ])
	t.equal(inverse([ 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0 ], 4, 4), [ 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0 ])
	t.equal(inverse([ 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2 ], 4, 4), [ 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5 ])
	t.equal(inverse([ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ], 4, 4), [ 1 / 4, 1 / 4, 5, -13 / 4, 3 / 4, -1 / 4, 0, 1 / 4, -3 / 2, 1 / 2, 3, -3 / 2, 0, 0, -2, 1 ])
})
