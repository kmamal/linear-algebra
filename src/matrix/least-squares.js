const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const _tmp = {}
	const _tmpMat = []

	const {
		transpose,
		mulMatVec,
		mulVecMat,
	} = Matrix

	const transposeTo = transpose.to

	const {
		__info: { isPrimitive },
		copy: _copy,
		add: _add,
		mul: _mul,
	} = Matrix.Algebra

	const _add$$$ = _add.$$$
	const _mulTo = _mul.to

	const { solve } = require('./solve').defineFor(Matrix)

	const { decomposeSVD } = require('./decompose-svd').defineFor(Matrix)
	const { pseudoinverseFromSVD } = require('./pseudoinverse').defineFor(Matrix)

	const gramMatrix = isPrimitive
		? (mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			const matT = transposeTo(_tmpMat, mat, M, N)

			const res = new Array(N * N)
			for (let i = 0; i < N; i++) {
				for (let j = i; j < N; j++) {
					let dot = matT[i * M] * matT[j * M]
					for (let m = 1; m < M; m++) {
						dot += matT[i * M + m] * matT[j * M + m]
					}
					res[i * N + j] = dot
				}
			}

			for (let i = 1; i < N; i++) {
				for (let j = 0; j < i; j++) {
					res[i * N + j] = res[j * N + i]
				}
			}

			return res
		}
		: (mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			const matT = transposeTo(_tmpMat, mat, M, N)

			const res = new Array(N * N)
			for (let i = 0; i < N; i++) {
				for (let j = i; j < N; j++) {
					const dot = _mulTo(res[i * N + j], matT[i * M], matT[j * M])
					for (let m = 1; m < M; m++) {
						_add$$$(dot, _mulTo(_tmp, matT[i * M + m], matT[j * M + m]))
					}
				}
			}

			for (let i = 1; i < N; i++) {
				for (let j = 0; j < i; j++) {
					_copy(res[i * N + j], res[j * N + i])
				}
			}

			return res
		}

	const leastSquaresViaNormalEquations = (a, M, N, b) => {
		const { length } = a
		if (M * N !== length) { throw new Error("bad length") }
		if (b.length !== M) { throw new Error("bad length") }

		const aTa = gramMatrix(a, M, N)
		const aTb = mulVecMat(b, a, N, M)
		return solve(aTa, N, N, aTb)
	}

	const leastSquaresFromSVD = (svd, M, N, b) => {
		if (b.length !== M) { throw new Error("bad length") }

		const aPseud = pseudoinverseFromSVD(svd, M, N)
		return mulMatVec(aPseud, N, M, b)
	}

	const leastSquares = (a, M, N, b) => {
		const { length } = a
		if (M * N !== length) { throw new Error("bad length") }
		if (b.length !== M) { throw new Error("bad length") }

		const svd = decomposeSVD(a, M, N)
		return leastSquaresFromSVD(svd, M, N, b)
	}

	return {
		gramMatrix,
		leastSquaresViaNormalEquations,
		leastSquaresFromSVD,
		leastSquares,
	}
})

module.exports = { defineFor }
