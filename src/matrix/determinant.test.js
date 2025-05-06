const { test } = require('@kmamal/testing')

const Num = require('@kmamal/numbers/js')
const Mat = require('../matrix').defineFor(Num)
const { determinant } = require('./determinant').defineFor(Mat)

test("matrix.determinant", (t) => {
	t.equal(determinant([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 4, 4), 0)
	t.equal(determinant([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 4, 4), 1)
	t.equal(determinant([ 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0 ], 4, 4), 1)
	t.equal(determinant([ 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2 ], 4, 4), 16)
	t.equal(determinant([ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ], 4, 4), -4)
})
