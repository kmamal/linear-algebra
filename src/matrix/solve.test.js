const { test } = require('@kmamal/testing')

const Num = require('@kmamal/numbers/js')
const Mat = require('../matrix').defineFor(Num)
const {
	solve,
	solveViaInverse,
} = require('./solve').defineFor(Mat)

test('matrix.solve', (t) => {
	t.throws(() => { solve([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 4, 4) })
	t.equal(solve([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 4, 4, [ 2, 3, 4, 5 ]), [ 2, 3, 4, 5 ])
	t.equal(solve([ 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0 ], 4, 4, [ 2, 3, 4, 5 ]), [ 5, 4, 3, 2 ])
	t.equal(solve([ 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2 ], 4, 4, [ 4, 6, 8, 10 ]), [ 2, 3, 4, 5 ])
	t.equal(solve([ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ], 4, 4, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(solve([ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ], 4, 4, [ 1, 1, 1, 1 ]), [ 9 / 4, 3 / 4, 1 / 2, -1 ])
})

test('matrix.solveViaInverse', (t) => {
	t.throws(() => { solveViaInverse([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 4, 4) })
	t.equal(solveViaInverse([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 4, 4, [ 2, 3, 4, 5 ]), [ 2, 3, 4, 5 ])
	t.equal(solveViaInverse([ 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0 ], 4, 4, [ 2, 3, 4, 5 ]), [ 5, 4, 3, 2 ])
	t.equal(solveViaInverse([ 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2 ], 4, 4, [ 4, 6, 8, 10 ]), [ 2, 3, 4, 5 ])
	t.equal(solveViaInverse([ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ], 4, 4, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(solveViaInverse([ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ], 4, 4, [ 1, 1, 1, 1 ]), [ 9 / 4, 3 / 4, 1 / 2, -1 ])
})
