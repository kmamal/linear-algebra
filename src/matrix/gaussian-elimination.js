const { memoize } = require('@kmamal/util/function/memoize')
const { swap } = require('@kmamal/util/array/swap')

const swap$$$ = swap.$$$

const defineFor = memoize((Matrix) => {
	const _tmp1 = {}
	const _tmp2 = {}

	const {
		__info: { isPrimitive },
		sub: _sub,
		mul: _mul,
		div: _div,
		eq: _eq,
		neq: _neq,
		fromNumber: _fromNumber,
	} = Matrix.Algebra

	const _sub$$$ = _sub.$$$
	const _mulTo = _mul.to
	const _divTo = _div.to

	const _ZERO = _fromNumber(0)

	const _gaussianElimination = isPrimitive
		? (mat, M, N, earlyReturnIfSingular = false) => {
			let row = 0
			let col = 0
			while (row < M && col < N) {
				let pivot = mat[row * N + col]
				if (pivot === _ZERO) {
					for (let m = row + 1; m < M; m++) {
						const p = mat[m * N + col]
						if (p === _ZERO) { continue }

						pivot = p
						// TODO: The swap would bo faster if the augmented matrix was just a list of rows (see SVD implementation)
						for (let n = col; n < N; n++) {
							swap$$$(mat, row * N + n, m * N + n)
						}

						break
					}

					if (pivot === _ZERO) {
						if (earlyReturnIfSingular) { return false }
						col++
						continue
					}
				}

				for (let m = row + 1; m < M; m++) {
					const q = mat[m * N + col]
					if (q === _ZERO) { continue }

					const s = q / pivot
					for (let n = col; n < N; n++) {
						mat[m * N + n] -= s * mat[row * N + n]
					}
				}

				col++
				row++
			}

			return mat[(M - 1) * N + N / 2 - 1] !== _ZERO
		}
		: (mat, M, N, earlyReturnIfSingular = false) => {
			let row = 0
			let col = 0
			while (row < M && col < N) {
				let pivot = mat[row * N + col]
				if (_eq(pivot, _ZERO)) {
					for (let m = row + 1; m < M; m++) {
						const p = mat[m * N + col]
						if (_eq(p, _ZERO)) { continue }

						pivot = p
						for (let n = col; n < N; n++) {
							swap$$$(mat, row * N + n, m * N + n)
						}

						break
					}

					if (_eq(pivot, _ZERO)) {
						if (earlyReturnIfSingular) { return false }
						col++
						continue
					}
				}

				for (let m = row + 1; m < M; m++) {
					const q = mat[m * N + col]
					if (_eq(q, _ZERO)) { continue }

					const s = _divTo(_tmp2, q, pivot)
					for (let n = col; n < N; n++) {
						_sub$$$(mat[m * N + n], _mulTo(_tmp1, s, mat[row * N + n]))
					}
				}

				col++
				row++
			}

			return _neq(mat[(M - 1) * N + N / 2 - 1], _ZERO)
		}

	return { _gaussianElimination }
})

module.exports = { defineFor }
