const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const {
		transpose,
		mulMatMat,
	} = Matrix

	const {
		__info: { isPrimitive },
		div: _div,
	} = Matrix.Algebra

	const _div$$$ = _div.$$$

	const { decomposeSVD } = require('./decompose-svd').defineFor(Matrix)

	const pseudoinverseFromSVD = isPrimitive
		? ({ U, singularValues, Vt }, M, N) => {
			const R = singularValues.length

			const VS = transpose(Vt, R, N)
			for (let r = 0; r < R; r++) {
				const s = singularValues[r]
				for (let n = 0; n < N; n++) {
					VS[n * R + r] /= s
				}
			}

			const Ut = transpose(U, M, R)
			return mulMatMat(VS, N, R, Ut, R, M)
		}
		: ({ U, singularValues, Vt }, M, N) => {
			const R = singularValues.length

			const VS = transpose(Vt, R, N)
			for (let r = 0; r < R; r++) {
				const s = singularValues[r]
				for (let m = 0; m < M; m++) {
					_div$$$(VS[m * R + r], s)
				}
			}

			const Ut = transpose(U, M, R)
			return mulMatMat(VS, N, R, Ut, R, M)
		}

	const pseudoinverse = (mat, M, N) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }

		const svd = decomposeSVD(mat, M, N)
		return pseudoinverseFromSVD(svd, M, N)
	}

	return {
		pseudoinverseFromSVD,
		pseudoinverse,
	}
})

module.exports = { defineFor }
