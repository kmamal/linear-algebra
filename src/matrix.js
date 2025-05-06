const { memoize } = require('@kmamal/util/function/memoize')
const { map } = require('@kmamal/util/array/map')
const { forEach, forEachTwo, forEachThree } = require('@kmamal/util/array/for-each')
const { combine } = require('@kmamal/util/array/combine')
const { swap } = require('@kmamal/util/array/swap')
const { copy: copyArray } = require('@kmamal/util/array/copy')
const { create } = require('@kmamal/util/array/create')

const mapTo = map.to
const map$$$ = map.$$$
const combineTo = combine.to
const combine$$$ = combine.$$$
const swap$$$ = swap.$$$
const copyArray$$$ = copyArray.$$$

const defineFor = memoize((Algebra) => {
	const _tmp = {}
	const _tmpMat = []

	const {
		__info: { isPrimitive },
		isFinite: _isFinite,
		isNaN: _isNaN,
		clone: _clone,
		copy: _copy,
		neg: _neg,
		abs: _abs,
		add: _add,
		sub: _sub,
		mul: _mul,
		div: _div,
		neq: _neq,
		fromNumber: _fromNumber,
		toNumber: _toNumber,
		toString: _toString,
	} = Algebra

	const _negTo = _neg.to
	const _neg$$$ = _neg.$$$
	const _absTo = _abs.to
	const _abs$$$ = _abs.$$$
	const _addTo = _add.to
	const _add$$$ = _add.$$$
	const _subTo = _sub.to
	const _sub$$$ = _sub.$$$
	const _mulTo = _mul.to
	const _mul$$$ = _mul.$$$
	const _divTo = _div.to
	const _div$$$ = _div.$$$

	const _ZERO = Algebra.fromNumber(0)
	const _ONE = Algebra.fromNumber(1)

	const identity = isPrimitive
		? (N) => {
			const res = new Array(N * N).fill(_ZERO)
			for (let i = 0; i < N; i++) {
				res[i * N + i] = _ONE
			}
			return res
		}
		: (N) => {
			const res = new Array(N * N)
			for (let i = 0; i < N; i++) {
				for (let j = 0; j < N; j++) {
					res[i * N + j] = _clone(i === j ? _ZERO : _ONE)
				}
			}
			return res
		}

	const permutation = isPrimitive
		? (indexes) => {
			const N = indexes.length
			const res = new Array(N * N).fill(_ZERO)
			for (let i = 0; i < N; i++) {
				const index = indexes[i]
				res[i * N + index] = _ONE
			}
			return res
		}
		: (indexes) => {
			const N = indexes.length
			const res = create(N * N, () => _clone(_ZERO))
			for (let i = 0; i < N; i++) {
				const index = indexes[i]
				_copy(res[i * N + index], _ONE)
			}
			return res
		}

	const _row = (dst, mat, M, N, m) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }

		for (let n = 0; n < N; n++) {
			dst[n] = mat[m * N + n]
		}
	}
	const row = isPrimitive
		? (mat, M, N, m) => {
			const res = new Array(N)
			_row(res, mat, M, N, m)
			return res
		}
		: (mat, M, N, m) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			const res = new Array(N)
			for (let n = 0; n < N; n++) {
				res[n] = _clone(mat[m * N + n])
			}
			return res
		}
	const rowTo = isPrimitive
		? (dst, mat, M, N, m) => {
			dst.length = N
			_row(dst, mat, M, N, m)
			return dst
		}
		: (dst, mat, M, N, m) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			dst.length = length
			for (let n = 0; n < N; n++) {
				_copy(dst[n], mat[m * N + n])
			}
			return dst
		}
	const row$$$ = (mat, M, N, m) => {
		for (let n = 0; n < N; n++) {
			mat[n] = mat[m * N + n]
		}
		mat.length = N
		return mat
	}
	row.to = rowTo
	row.$$$ = row$$$

	const _column = (dst, mat, M, N, n) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }

		for (let m = 0; m < M; m++) {
			dst[m] = mat[m * N + n]
		}
	}
	const column = isPrimitive
		? (mat, M, N, n) => {
			const res = new Array(M)
			_column(res, mat, M, N, n)
			return res
		}
		: (mat, M, N, n) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			const res = new Array(M)
			for (let m = 0; m < M; m++) {
				res[m] = _clone(mat[m * N + n])
			}
			return res
		}
	const columnTo = isPrimitive
		? (dst, mat, M, N, n) => {
			dst.length = M
			_column(dst, mat, M, N, n)
			return dst
		}
		: (dst, mat, M, N, n) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			dst.length = length
			for (let m = 0; m < M; m++) {
				_copy(dst[m], mat[m * N + n])
			}
			return dst
		}
	const column$$$ = (mat, M, N, n) => {
		if (n > 0) {
			for (let m = 0; m < M; m++) {
				mat[m] = mat[m * N + n]
			}
		}
		mat.length = M
		return mat
	}
	column.to = columnTo
	column.$$$ = column$$$


	const isFinite = (m) => m.every(_isFinite)
	const isNaN = (m) => m.some(_isNaN)

	const neg = (m) => map(m, _neg)
	const negTo = isPrimitive
		? (dst, m) => mapTo(dst, m, _neg)
		: (dst, m) => forEachTwo(dst, m, _negTo)
	const neg$$$ = isPrimitive
		? (m) => map$$$(m, _neg)
		: (m) => forEach(m, _neg$$$)
	neg.to = negTo
	neg.$$$ = neg$$$

	const abs = (m) => map(m, _abs)
	const absTo = isPrimitive
		? (dst, m) => mapTo(dst, m, _abs)
		: (dst, m) => mapTo(dst, m, _absTo)
	const abs$$$ = isPrimitive
		? (m) => map$$$(m, _abs)
		: (m) => forEach(m, _abs$$$)
	abs.to = absTo
	abs.$$$ = abs$$$

	const add = (a, b) => combine(a, b, _add)
	const addTo = isPrimitive
		? (dst, a, b) => combineTo(dst, a, b, _add)
		: (dst, a, b) => forEachThree(dst, a, b, _addTo)
	const add$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _add)
		: (a, b) => forEachTwo(a, b, _add$$$)
	add.to = addTo
	add.$$$ = add$$$

	const sub = (a, b) => combine(a, b, _sub)
	const subTo = isPrimitive
		? (dst, a, b) => combineTo(dst, a, b, _sub)
		: (dst, a, b) => forEachThree(dst, a, b, _subTo)
	const sub$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _sub)
		: (a, b) => forEachTwo(a, b, _sub$$$)
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = (a, b) => combine(a, b, _mul)
	const mulTo = isPrimitive
		? (dst, a, b) => combineTo(dst, a, b, _mul)
		: (dst, a, b) => forEachThree(dst, a, b, _mulTo)
	const mul$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _mul)
		: (a, b) => forEachTwo(a, b, _mul$$$)
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = (a, b) => combine(a, b, _div)
	const divTo = isPrimitive
		? (dst, a, b) => combineTo(dst, a, b, _div)
		: (dst, a, b) => forEachThree(dst, a, b, _divTo)
	const div$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _div)
		: (a, b) => forEachTwo(a, b, _div$$$)
	div.to = divTo
	div.$$$ = div$$$

	const _transpose = (dst, mat, M, N) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }

		for (let m = 0; m < M; m++) {
			for (let n = 0; n < N; n++) {
				dst[n * M + m] = mat[m * N + n]
			}
		}
		return dst
	}
	const transpose = isPrimitive
		? (mat, M, N) => {
			const res = new Array(mat.length)
			_transpose(res, mat, M, N)
			return res
		}
		: (mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			const res = new Array(length)
			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					res[n * M + m] = _clone(mat[m * N + n])
				}
			}
			return res
		}
	const transposeTo = isPrimitive
		? (dst, mat, M, N) => {
			dst.length = mat.length
			_transpose(dst, mat, M, N)
			return dst
		}
		: (dst, mat, M, N) => {
			const { length } = mat
			if (M * N !== length) { throw new Error("bad length") }

			dst.length = length
			for (let m = 0; m < M; m++) {
				for (let n = 0; n < N; n++) {
					_copy(dst[n * M + m], mat[m * N + n])
				}
			}
			return dst
		}
	const transpose$$$ = (mat, M, N) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }

		if (M === N) {
			for (let m = 1; m < M; m++) {
				for (let n = 0; n < m; n++) {
					swap$$$(mat, n * M + m, m * N + n)
				}
			}
			return mat
		}

		transposeTo(_tmpMat, mat, M, N)
		copyArray$$$(mat, _tmpMat)
		return mat
	}
	transpose.to = transposeTo
	transpose.$$$ = transpose$$$

	const _mulMatVecTestLengths = (mat, M, N, vec, K) => {
		if (M * N !== mat.length) { throw new Error("bad length") }
		if (N !== K) { throw new Error("bad length") }
	}

	const _mulMatVec = (dst, mat, M, N, vec) => {
		const K = vec.length
		_mulMatVecTestLengths(mat, M, N, vec, K)

		for (let m = 0; m < M; m++) {
			let dot = 0
			for (let k = 0; k < K; k++) {
				dot += mat[m * K + k] * vec[k]
			}
			dst[m] = dot
		}
	}
	const mulMatVec = isPrimitive
		? (mat, M, N, vec) => {
			const res = new Array(M)
			_mulMatVec(res, mat, M, N, vec)
			return res
		}
		: (mat, M, N, vec) => {
			const K = vec.length
			_mulMatVecTestLengths(mat, M, N, vec, K)

			const res = new Array(M)
			for (let m = 0; m < M; m++) {
				const dot = _mul(mat[m], vec[0])
				for (let k = 1; k < K; k++) {
					_add$$$(dot, _mulTo(_tmp, mat[m * K + k], vec[k]))
				}
				res[m] = dot
			}
			return res
		}
	const mulMatVecTo = isPrimitive
		? (dst, mat, M, N, vec) => {
			dst.length = M
			_mulMatVec(dst, mat, M, N, vec)
			return dst
		}
		: (dst, mat, M, N, vec) => {
			const K = vec.length
			_mulMatVecTestLengths(mat, M, N, vec, K)

			dst.length = M
			for (let m = 0; m < M; m++) {
				const dot = _mulTo(dst[m], mat[m], vec[0])
				for (let k = 1; k < K; k++) {
					_add$$$(dot, _mulTo(_tmp, mat[m * K + k], vec[k]))
				}
			}
			return dst
		}
	mulMatVec.to = mulMatVecTo

	const _mulVecMat = (dst, vec, mat, M, N) => {
		const K = vec.length
		_mulMatVecTestLengths(mat, N, M, vec, K)

		for (let n = 0; n < N; n++) {
			let dot = vec[0] * mat[n]
			for (let k = 1; k < K; k++) {
				dot += vec[k] * mat[k * N + n]
			}
			dst[n] = dot
		}
	}
	const mulVecMat = isPrimitive
		? (vec, mat, M, N) => {
			const res = new Array(N)
			_mulVecMat(res, vec, mat, M, N)
			return res
		}
		: (vec, mat, M, N) => {
			const K = vec.length
			_mulMatVecTestLengths(mat, N, M, vec, K)

			const res = new Array(N)
			for (let n = 0; n < N; n++) {
				const dot = _mul(vec[0], mat[n])
				for (let k = 1; k < K; k++) {
					_add$$$(dot, _mulTo(_tmp, vec[k], mat[k * N + n]))
				}
				res[n] = dot
			}
			return res
		}
	const mulVecMatTo = isPrimitive
		? (dst, vec, mat, M, N) => {
			dst.length = N
			_mulVecMat(dst, vec, mat, M, N)
			return dst
		}
		: (dst, vec, mat, M, N) => {
			const K = vec.length
			_mulMatVecTestLengths(mat, N, M, vec, K)

			dst.length = N
			for (let n = 0; n < N; n++) {
				const dot = _mulTo(dst[n], vec[0], mat[n])
				for (let k = 1; k < K; k++) {
					_add$$$(dot, _mulTo(_tmp, vec[k], mat[k * N + n]))
				}
			}
			return dst
		}
	mulVecMat.to = mulVecMatTo

	const _mulMatMatTestLengths = (a, AM, AN, b, BM, BN) => {
		if (AM * AN !== a.length) { throw new Error("bad length") }
		if (BM * BN !== b.length) { throw new Error("bad length") }
		if (AN !== BM) { throw new Error("bad length") }
	}
	const _mulMatMat = (dst, a, AM, AN, b, BM, BN) => {
		_mulMatMatTestLengths(a, AM, AN, b, BM, BN)
		const K = AN

		const bT = transposeTo(_tmpMat, b, BM, BN)

		for (let am = 0; am < AM; am++) {
			for (let bn = 0; bn < BN; bn++) {
				let dot = a[am * K] * bT[bn * K]
				for (let k = 1; k < K; k++) {
					dot += a[am * K + k] * bT[bn * K + k]
				}
				dst[am * BN + bn] = dot
			}
		}
	}
	const mulMatMat = isPrimitive
		? (a, AM, AN, b, BM, BN) => {
			const res = new Array(AM * BN)
			_mulMatMat(res, a, AM, AN, b, BM, BN)
			return res
		}
		: (a, AM, AN, b, BM, BN) => {
			_mulMatMatTestLengths(a, AM, AN, b, BM, BN)
			const K = AN

			const bT = transposeTo(_tmpMat, b, BM, BN)

			const res = new Array(AM * BN)
			for (let bn = 0; bn < BN; bn++) {
				for (let am = 0; am < AM; am++) {
					const dot = _mul(a[am * K], bT[bn * K])
					for (let k = 1; k < K; k++) {
						_add$$$(dot, _mulTo(_tmp, a[am * K + k], bT[bn * K + k]))
					}
					res[am * BN + bn] = dot
				}
			}
			return res
		}
	const mulMatMatTo = isPrimitive
		? (dst, a, AM, AN, b, BM, BN) => {
			dst.length = AM * BN
			_mulMatMat(dst, a, AM, AN, b, BM, BN)
			return dst
		}
		: (dst, a, AM, AN, b, BM, BN) => {
			_mulMatMatTestLengths(a, AM, AN, b, BM, BN)
			const K = AN

			const bT = transposeTo(_tmpMat, b, BM, BN)

			dst.length = AM * BN
			for (let bn = 0; bn < BN; bn++) {
				for (let am = 0; am < AM; am++) {
					const dot = _mulTo(dst[am * BN + bn], a[am * K], bT[bn * K])
					for (let k = 1; k < K; k++) {
						_add$$$(dot, _mulTo(_tmp, a[am * K + k], bT[bn * K + k]))
					}
				}
			}
			return dst
		}
	mulMatMat.to = mulMatMatTo

	const eq = isPrimitive
		? (a, b) => {
			const { length } = a
			if (length !== b.length) { return false }
			for (let i = 0; i < length; i++) {
				if (a[i] !== b[i]) { return false }
			}
			return true
		}
		: (a, b) => {
			const { length } = a
			if (length !== b.length) { return false }
			for (let i = 0; i < length; i++) {
				if (_neq(a[i], b[i])) { return false }
			}
			return true
		}

	const neq = isPrimitive
		? (a, b) => {
			const { length } = a
			if (length !== b.length) { return true }
			for (let i = 0; i < length; i++) {
				if (a[i] !== b[i]) { return true }
			}
			return false
		}
		: (a, b) => {
			const { length } = a
			if (length !== b.length) { return true }
			for (let i = 0; i < length; i++) {
				if (_neq(a[i], b[i])) { return true }
			}
			return false
		}

	const scale = (m, s) => map(m, (y) => _mul(y, s))
	const scaleTo = isPrimitive
		? (dst, m, s) => {
			const { length } = m
			dst.length = length
			for (let i = 0; i < length; i++) {
				dst[i] = m[i] * s
			}
			return dst
		}
		: (dst, m, s) => {
			const { length } = m
			dst.length = length
			for (let i = 0; i < length; i++) {
				_mulTo(dst[i], m[i], s)
			}
			return dst
		}
	const scale$$$ = isPrimitive
		? (m, s) => {
			for (let i = 0; i < m.length; i++) {
				m[i] *= s
			}
			return m
		}
		: (m, s) => {
			for (let i = 0; i < m.length; i++) {
				_mul$$$(m[i], s)
			}
			return m
		}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const fromNumbers = (...nums) => map$$$(nums, _fromNumber)
	const toNumbers = (mat) => map(mat, _toNumber)

	const toString = (mat, M, N) => {
		if (mat.length !== M * N) { throw new Error("bad length") }

		const strings = mat.map(_toString)

		const maxWidths = new Array(N).fill(0)
		for (let n = 0; n < N; n++) {
			for (let m = 0; m < M; m++) {
				maxWidths[n] = Math.max(maxWidths[n], strings[m * N + n].length)
			}
		}

		const parts = []
		for (let m = 0; m < M; m++) {
			for (let n = 0; n < N; n++) {
				parts.push(strings[m * N + n].padStart(maxWidths[n]))
				parts.push(' ')
			}
			parts.push('\n')
		}
		return parts.join('')
	}

	return {
		Algebra,
		...{ identity, permutation },
		...{ row, column },
		...{ isFinite, isNaN },
		...{ neg, add, sub, mul, div },
		...{ transpose, mulMatVec, mulVecMat, mulMatMat },
		...{ eq, neq },
		...{ scale },
		...{ fromNumbers, toNumbers },
		...{ toString },
	}
})

module.exports = { defineFor }
