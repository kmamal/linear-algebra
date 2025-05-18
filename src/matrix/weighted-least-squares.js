const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const _tmp = {}
	const _tmpMat = []

	const {
		transpose,
		mulVecMat,
	} = Matrix

	const transposeTo = transpose.to

	const {
		__info: { isPrimitive },
		copy: _copy,
		add: _add,
		mul: _mul,
	} = Matrix.Algebra

	const {
		mul: vecMul,
	} = require('../vector').defineFor(Matrix.Algebra)

	const _add$$$ = _add.$$$
	const _mulTo = _mul.to
	const _mul$$$ = _mul.$$$

	const { solve } = require('./solve').defineFor(Matrix)

	const weightedGramMatrix = isPrimitive
		? (mat, M, N, weights) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== weights.length) { throw new Error("bad length") }

			const matT = transposeTo(_tmpMat, mat, M, N)

			const res = new Array(N * N)
			for (let i = 0; i < N; i++) {
				for (let j = i; j < N; j++) {
					let dot = matT[i * M] * matT[j * M] * weights[0]
					for (let m = 1; m < M; m++) {
						dot += matT[i * M + m] * matT[j * M + m] * weights[m]
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
		: (mat, M, N, weights) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== weights.length) { throw new Error("bad length") }

			const matT = transposeTo(_tmpMat, mat, M, N)

			const res = new Array(N * N)
			for (let i = 0; i < N; i++) {
				for (let j = i; j < N; j++) {
					const dot = _mul$$$(_mulTo(res[i * N + j], matT[i * M], matT[j * M]), weights[0])
					for (let m = 1; m < M; m++) {
						_add$$$(dot, _mul$$$(_mulTo(_tmp, matT[i * M + m], matT[j * M + m])), weights[m])
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

	const weightedLeastSquares = (a, M, N, b, weights) => {
		const { length } = a
		if (M * N !== length) { throw new Error("bad length") }
		if (b.length !== M) { throw new Error("bad length") }

		const aTWa = weightedGramMatrix(a, M, N, weights)
		const aTWb = mulVecMat(vecMul(b, weights), a, M, N)
		return solve(aTWa, N, N, aTWb)
	}

	return {
		weightedGramMatrix,
		weightedLeastSquares,
	}
})

module.exports = { defineFor }
