const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const _tmp1 = {}
	const _tmp2 = {}

	const {
		__info: { isPrimitive },
		copy: _copy,
		sub: _sub,
		mul: _mul,
		div: _div,
		eq: _eq,
		fromNumber: _fromNumber,
	} = Matrix.Algebra

	const _sub$$$ = _sub.$$$
	const _mulTo = _mul.to
	const _divTo = _div.to
	const _div$$$ = _div.$$$

	const _ZERO = _fromNumber(0)
	const _ONE = _fromNumber(1)

	const { _gaussianElimination } = require('./gaussian-elimination').defineFor(Matrix)

	const _jordanElimination = isPrimitive
		? (mat, M, N) => {
			for (let row = M - 1; row >= 0; row--) {
				const col = row

				const pivot = mat[row * N + col]

				for (let m = row - 1; m >= 0; m--) {
					const p = mat[m * N + col]
					if (p === _ZERO) { continue }

					const s = p / pivot
					for (let n = col; n < N; n++) {
						mat[m * N + n] -= s * mat[row * N + n]
					}
				}

				mat[row * N + col] = _ONE
				for (let n = col + 1; n < N; n++) {
					mat[row * N + n] /= pivot
				}
			}
		}
		: (mat, M, N) => {
			for (let row = M - 1; row >= 0; row--) {
				const col = row

				const pivot = mat[row * N + col]

				for (let m = row - 1; m >= 0; m--) {
					const p = mat[m * N + col]
					if (_eq(p, _ZERO)) { continue }

					const s = _divTo(_tmp1, p, pivot)
					for (let n = col; n < N; n++) {
						_sub$$$(mat[m * N + n], _mulTo(_tmp2, s, mat[row * N + n]))
					}
				}

				_copy(mat[row * N + col], _ONE)
				for (let n = col + 1; n < N; n++) {
					_div$$$(mat[row * N + n], pivot)
				}
			}
		}

	const inverse = isPrimitive
		? (mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }
			const N2 = N * 2

			const augmented = new Array(M * N2)
			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					augmented[m * N2 + n] = mat[m * N + n]
				}
				for (let n = N; n < N2; n++) {
					augmented[m * N2 + n] = _ZERO
				}
				augmented[m * N2 + N + m] = _ONE
			}

			const success = _gaussianElimination(augmented, M, N2, true)
			if (!success) { throw new Error("singular matrix") }

			_jordanElimination(augmented, M, N2)

			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					augmented[m * N + n] = augmented[m * N2 + N + n]
				}
			}
			augmented.length = length
			return augmented
		}
		: (mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }
			const N2 = N * 2

			const augmented = new Array(M * N2)
			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					augmented[m * N2 + n] = mat[m * N + n]
				}
				for (let n = N; n < N2; n++) {
					_copy(augmented[m * N2 + n], _ZERO)
				}
				_copy(augmented[m * N2 + N + m], _ONE)
			}

			const success = _gaussianElimination(augmented, M, N, true)
			if (!success) { throw new Error("singular matrix") }

			_jordanElimination(augmented, M, N2)

			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					_copy(augmented[m * N + n], augmented[m * N2 + N + n])
				}
			}
			augmented.length = length
			return augmented
		}

	return { inverse }
})

module.exports = { defineFor }
