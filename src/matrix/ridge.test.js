const { test } = require('@kmamal/testing')
const { isNear } = require('@kmamal/util/number/is-near')

const Num = require('@kmamal/numbers/js')
const Mat = require('../matrix').defineFor(Num)
const {
	ridge,
	ridgeViaNormalEquations,
} = require('./ridge').defineFor(Mat)
const {
	leastSquares,
	leastSquaresViaNormalEquations,
} = require('./least-squares').defineFor(Mat)

const isMatrixNear = (t, a, b) => {
	t.equal(a.length, b.length)
	for (let i = 0; i < a.length; i++) {
		t.ok(isNear(a[i], b[i], 1e-4), { actual: a[i], expected: b[i] })
	}
}

const inputs = [
	[ [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 4, 4, [ 2, 3, 4, 5 ] ],
	[ [ 1, 2, 3, 4, 5, 6, 7, 8, 10, 10, 11, 13 ], 4, 3, [ 13, 14, 15, 16 ] ],
]

test('matrix.ridge', (t) => {
	for (const input of inputs) {
		isMatrixNear(t, ridge(...input, 0), leastSquares(...input))
	}
})

test('matrix.ridgeViaNormalEquations', (t) => {
	for (const input of inputs) {
		isMatrixNear(t, ridgeViaNormalEquations(...input, 0), leastSquaresViaNormalEquations(...input))
	}

	t.throws(() => {
		leastSquaresViaNormalEquations([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], 4, 3, [ 13, 14, 15, 16 ])
	})
	ridgeViaNormalEquations([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], 4, 3, [ 13, 14, 15, 16 ], 1)
})
