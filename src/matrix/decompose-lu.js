const { memoize } = require('@kmamal/util/function/memoize')
const { create } = require('@kmamal/util/array/create')
const { swap } = require('@kmamal/util/array/swap')
const { isNear } = require('@kmamal/util/number/is-near')

const swap$$$ = swap.$$$

const defineFor = memoize((Matrix) => {
	const _tmp1 = {}
	const _tmp2 = {}
	const _tmpMat = []

	const {
		identity,
		transpose,
	} = Matrix

	const transposeTo = transpose.to

	const {
		__info: { isPrimitive },
		add: _add,
		sub: _sub,
		mul: _mul,
		div: _div,
		eq: _eq,
		fromNumber: _fromNumber,
	} = Matrix.Algebra

	const _add$$$ = _add.$$$
	const _sub$$$ = _sub.$$$
	const _mulTo = _mul.to
	const _divTo = _div.to

	const _ZERO = _fromNumber(0)


	const decomposeLU = isPrimitive
		? (mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }

			const upper = Array.from(mat)
			const lower = identity(M)
			const swaps = create(M, (x) => x)
			let numSwaps = 0

			let row = 0
			let col = 0
			while (col < N) {
				let pivot = upper[row * N + col]
				if (isNear(pivot, _ZERO)) {
					upper[row * N + col] = _ZERO
					pivot = _ZERO
				}
				if (pivot === _ZERO) {
					for (let m = row + 1; m < M; m++) {
						const p = upper[m * N + col]
						if (p === _ZERO) { continue }
						if (isNear(p, _ZERO)) {
							upper[m * N + col] = _ZERO
							pivot = _ZERO
							continue
						}

						pivot = p
						for (let n = 0; n < row; n++) {
							swap$$$(lower, row * N + n, m * N + n)
						}
						for (let n = col; n < N; n++) {
							swap$$$(upper, row * N + n, m * N + n)
						}
						swap$$$(swaps, row, m)
						numSwaps++

						break
					}

					if (pivot === _ZERO) {
						col++
						continue
					}
				}

				for (let m = row + 1; m < M; m++) {
					const q = upper[m * N + col]
					if (q === _ZERO) { continue }
					if (isNear(q, _ZERO)) {
						upper[m * N + col] = _ZERO
						continue
					}

					const s = q / pivot
					upper[m * N + col] = _ZERO
					for (let n = col + 1; n < N; n++) {
						const diff = upper[m * N + n] - s * upper[row * N + n]
						upper[m * N + n] = isNear(diff, _ZERO) ? _ZERO : diff
					}
					lower[m * N + row] = s
				}

				row++
				col++
			}

			return {
				U: upper,
				L: lower,
				swaps,
				numSwaps,
			}
		}
		: (mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }

			const upper = Array.from(mat)
			const lower = identity(M)
			const swaps = create(M, (x) => x)
			let numSwaps = 0

			let row = 0
			let col = 0
			while (row < M && col < N) {
				let pivot = upper[row * N + col]
				if (_eq(pivot, _ZERO)) {
					for (let m = row + 1; m < M; m++) {
						const p = upper[m * N + col]
						if (_eq(p, _ZERO)) { continue }

						pivot = p
						for (let n = 0; n < col; n++) {
							swap$$$(lower, row * N + n, m * N + n)
						}
						for (let n = col; n < N; n++) {
							swap$$$(upper, row * N + n, m * N + n)
						}
						swap$$$(swaps, row, m)
						numSwaps++

						break
					}

					if (_eq(pivot, _ZERO)) {
						col++
						continue
					}
				}

				for (let m = row + 1; m < M; m++) {
					const q = upper[m * N + col]
					if (_eq(q, _ZERO)) { continue }

					const s = _divTo(_tmp2, q, pivot)
					for (let n = col; n < N; n++) {
						_sub$$$(upper[m * N + n], _mulTo(_tmp1, s, upper[row * N + n]))
					}
					lower[m * N + col] = s
				}

				row++
				col++
			}

			return {
				U: upper,
				L: lower,
				swaps,
				numSwaps,
			}
		}


	const _recoverOriginalFromLUTestLengths = (L, U, swaps, M, N) => {
		if (M * N !== L.length) { throw new Error("bad length") }
		if (M * N !== U.length) { throw new Error("bad length") }
		if (M !== N) { throw new Error("not square") }
		if (M !== swaps.length) { throw new Error("bad length") }
	}

	const _recoverOriginalFromLU = (dst, { L, U, swaps }, M, N) => {
		_recoverOriginalFromLUTestLengths(L, U, swaps, M, N)

		const Ut = transposeTo(_tmpMat, U, M, N)

		for (let m = 0; m < M; m++) {
			for (let n = 0; n < N; n++) {
				let dot = L[m * N] * Ut[n * M]
				const mnMax = M // Math.min(m, n) + 1
				for (let i = 1; i < mnMax; i++) {
					dot += L[m * N + i] * Ut[n * M + i]
				}
				const pm = swaps[m]
				dst[pm * N + n] = dot
			}
		}
	}

	const recoverOriginalFromLU = isPrimitive
		? (lu, M, N) => {
			const res = new Array(M * N)
			_recoverOriginalFromLU(res, lu, M, N)
			return res
		}
		: ({ L, U, swaps }, M, N) => {
			_recoverOriginalFromLUTestLengths(L, U, swaps, M, N)

			const Ut = transposeTo(_tmpMat, U, M, N)

			const res = new Array(M * N)
			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					const pm = swaps[m]
					const dot = _mulTo(res[pm * N + n], L[m * N], Ut[n * M])
					const mnMax = Math.min(m, n) + 1
					for (let i = 1; i < mnMax; i++) {
						_add$$$(dot, _mulTo(_tmp1, L[m * N + i], Ut[n * M + i]))
					}
				}
			}

			return res
		}

	const recoverOriginalFromLUTo = isPrimitive
		? (dst, lu, M, N) => {
			dst.length = M * N
			_recoverOriginalFromLU(dst, lu, M, N)
			return dst
		}
		: (dst, { L, U, swaps }, M, N) => {
			_recoverOriginalFromLUTestLengths(L, U, swaps, M, N)

			const Ut = transposeTo(_tmpMat, U, M, N)

			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					const pm = swaps[m]
					const dot = _mulTo(dst[pm * N + n], L[m * N], Ut[n * M])
					const mnMax = Math.min(m, n) + 1
					for (let i = 1; i < mnMax; i++) {
						_add$$$(dot, _mulTo(_tmp1, L[m * N + i], Ut[n * M + i]))
					}
				}
			}

			return dst
		}

	recoverOriginalFromLU.to = recoverOriginalFromLUTo


	return {
		decomposeLU,
		recoverOriginalFromLU,
	}
})

module.exports = { defineFor }
