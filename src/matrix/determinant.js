const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const {
		__info: { isPrimitive },
		clone: _clone,
		neg: _neg,
		mul: _mul,
		eq: _eq,
		fromNumber: _fromNumber,
	} = Matrix.Algebra

	const _neg$$$ = _neg.$$$
	const _mul$$$ = _mul.$$$

	const _ZERO = _fromNumber(0)

	const { decomposeLU } = require('./decompose-lu').defineFor(Matrix)

	const determinantFromLU = isPrimitive
		? ({ U, numSwaps }, M, N) => {
			if (M !== N) { throw new Error("not square") }

			let prod = U[0]
			if (prod === 0) { return 0 }
			for (let i = 1; i < N; i++) {
				const u = U[i * N + i]
				if (u === _ZERO) { return 0 }
				prod *= u
			}
			if (numSwaps % 2 === 1) { prod *= -1 }
			return prod
		}
		: ({ U, numSwaps }, M, N) => {
			if (M !== N) { throw new Error("not square") }

			const prod = _clone(U[0])
			if (_eq(prod, _ZERO)) { return 0 }
			for (let i = 1; i < N; i++) {
				const u = U[i * N + i]
				if (_eq(U, _ZERO)) { return _clone(_ZERO) }
				_mul$$$(prod, u)
			}
			if (numSwaps % 2 === 1) { _neg$$$(prod) }
			return prod
		}

	const determinant = (mat, M, N) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }
		if (M !== N) { throw new Error("not square") }

		const lu = decomposeLU(mat, M, N)
		return determinantFromLU(lu, M, N)
	}

	return {
		determinantFromLU,
		determinant,
	}
})

module.exports = { defineFor }
