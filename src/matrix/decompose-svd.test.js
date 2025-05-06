const { test } = require('@kmamal/testing')
const { isNear } = require('@kmamal/util/number/is-near')

const Num = require('@kmamal/numbers/js')
const Mat = require('../matrix').defineFor(Num)
const {
	decomposeSVD,
	recoverOriginalFromSVD,
} = require('./decompose-svd').defineFor(Mat)

const isMatrixNear = (t, a, b) => {
	t.equal(a.length, b.length)
	for (let i = 0; i < a.length; i++) {
		t.ok(isNear(a[i], b[i], 1e-4))
	}
}

test('matrix.decompose-svd', (t) => {
	const mat = [ 1, 3, 1, 4, 3, 9, 5, 15, 0, 2, 1, 1, 0, 4, 2, 3 ]
	const M = 4
	const N = 4

	const svd = decomposeSVD(mat, M, N)
	const { U, singularValues, Vt } = svd
	const R = singularValues.length

	t.ok(R <= N)
	t.ok(R <= M)
	for (const s of singularValues) { t.ok(s !== 0) }

	const Ut = Mat.transpose(U, M, R)
	const V = Mat.transpose(Vt, R, N)
	const UtU = Mat.mulMatMat(Ut, M, R, U, R, M)
	const VtV = Mat.mulMatMat(Vt, R, N, V, N, R)
	isMatrixNear(t, UtU, Mat.identity(M))
	isMatrixNear(t, VtV, Mat.identity(R))

	const recovered = recoverOriginalFromSVD(svd, M, N)
	isMatrixNear(t, recovered, mat)
})
