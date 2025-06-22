const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const {
		mulVecMat,
	} = Matrix

	const {
		__info: { isPrimitive },
		add: _add,
	} = Matrix.Algebra

	const _add$$$ = _add.$$$

	const { solve } = require('./solve').defineFor(Matrix)

	const {
		gramMatrix,
		leastSquaresFromSVD,
	} = require('./least-squares').defineFor(Matrix)
	const { decomposeSVD } = require('./decompose-svd').defineFor(Matrix)

	const gramMatrixPlusRidge = isPrimitive
		? (mat, M, N, lambda) => {
			const gram = gramMatrix(mat, M, N)
			for (let i = 0; i < N; i++) {
				gram[i * N + i] += lambda
			}
			return gram
		}
		: (mat, M, N, lambda) => {
			const gram = gramMatrix(mat, M, N)
			for (let i = 0; i < N; i++) {
				_add$$$(gram[i * N + i], lambda)
			}
			return gram
		}

	const ridgeViaNormalEquations = (a, M, N, b, lambda) => {
		const { length } = a
		if (M * N !== length) { throw new Error("bad length") }
		if (b.length !== M) { throw new Error("bad length") }

		const aTa = gramMatrixPlusRidge(a, M, N, lambda)
		const aTb = mulVecMat(b, a, M, N)
		return solve(aTa, N, N, aTb)
	}

	const ridgeFromSVD = (svd, M, N, b, lambda) => {
		const { singularValues, ...rest } = svd
		const R = singularValues.length
		const ridgedValues = new Array(R)
		for (let i = 0; i < R; i++) {
			const sigma = singularValues[i]
			ridgedValues[i] = (sigma ** 2 + lambda) / sigma
		}
		const ridgedSvd = { ...rest, singularValues: ridgedValues }

		return leastSquaresFromSVD(ridgedSvd, M, N, b)
	}

	const ridge = (a, M, N, b, lambda) => {
		const { length } = a
		if (M * N !== length) { throw new Error("bad length") }
		if (b.length !== M) { throw new Error("bad length") }

		const svd = decomposeSVD(a, M, N)
		return ridgeFromSVD(svd, M, N, b, lambda)
	}

	return {
		gramMatrixPlusRidge,
		ridgeViaNormalEquations,
		ridgeFromSVD,
		ridge,
	}
})

module.exports = { defineFor }
