const { test } = require('@kmamal/testing')

const Num = require('@kmamal/numbers/js')
const Mat = require('../matrix').defineFor(Num)
const {
	decomposeLU,
	recoverOriginalFromLU,
} = require('./decompose-lu').defineFor(Mat)

test('matrix.decompose-lu', (t) => {
	const mat = [ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ]
	const M = 4
	const N = 4

	const lu = decomposeLU(mat, M, N)
	const { L, U } = lu

	for (let m = 0; m < M; m++) {
		for (let n = m + 1; n < N; n++) {
			t.equal(L[m * N + n], 0)
		}
	}

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < m; n++) {
			t.equal(U[m * N + n], 0)
		}
	}

	const recovered = recoverOriginalFromLU(lu, M, N)
	t.equal(recovered, mat)
})
