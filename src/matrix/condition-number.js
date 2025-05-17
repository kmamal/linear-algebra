const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const {
		__info: { isPrimitive },
		div: _div,
	} = Matrix.Algebra

	const { decomposeSVD } = require('./decompose-svd').defineFor(Matrix)

	const conditionNumberFromSVD = isPrimitive
		? ({ singularValues }) => {
			const R = singularValues.length
			return singularValues[0] / singularValues[R - 1]
		}
		: ({ singularValues }) => {
			const R = singularValues.length
			return _div(singularValues[0], singularValues[R - 1])
		}

	const conditionNumber = (mat, M, N) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }

		const svd = decomposeSVD(mat, M, N)
		return conditionNumberFromSVD(svd, M, N)
	}

	return {
		conditionNumberFromSVD,
		conditionNumber,
	}
})

module.exports = { defineFor }
