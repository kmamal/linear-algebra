/* eslint-disable @stylistic/array-element-newline */

const { memoize } = require('@kmamal/util/function/memoize')
const { swap } = require('@kmamal/util/array/swap')

const M11 = 0
const M12 = 1
const M21 = 2
const M22 = 3

const defineFor = memoize((Algebra) => {
	const {
		isFinite: _isFinite,
		isNaN: _isNaN,
		clone: _clone,
		neg: _neg,
		add: _add,
		sub: _sub,
		mul: _mul,
		div: _div,
		inverse: _inverse,
		eq: _eq,
		neq: _neq,
		fromNumber: _fromNumber,
		toNumber: _toNumber,
	} = Algebra

	const _ZERO = _fromNumber(0)
	const _ONE = _fromNumber(1)

	const identity = () => [
		_clone(_ONE), _clone(_ZERO),
		_clone(_ZERO), _clone(_ONE),
	]

	const isFinite = ([
		m11, m12,
		m21, m22,
	]) => true
		&& _isFinite(m11) && _isFinite(m12)
		&& _isFinite(m21) && _isFinite(m22)

	const isNaN = ([
		m11, m12,
		m21, m22,
	]) => false
		|| _isNaN(m11) || _isNaN(m12)
		|| _isNaN(m21) || _isNaN(m22)

	const neg = ([
		m11, m12,
		m21, m22,
	]) => [
		_neg(m11), _neg(m12),
		_neg(m21), _neg(m22),
	]
	const negTo = (dst, [
		m11, m12,
		m21, m22,
	]) => {
		dst.length = 4

		dst[M11] = _neg(m11)
		dst[M12] = _neg(m12)

		dst[M21] = _neg(m21)
		dst[M22] = _neg(m22)

		return dst
	}
	const neg$$$ = (m) => {
		const [
			m11, m12,
			m21, m22,
		] = m

		m[M11] = _neg(m11)
		m[M12] = _neg(m12)

		m[M21] = _neg(m21)
		m[M22] = _neg(m22)

		return m
	}
	neg.to = negTo
	neg.$$$ = neg$$$

	const add = ([
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => [
		_add(a11, b11), _add(a12, b12),
		_add(a21, b21), _add(a22, b22),
	]
	const addTo = (dst, [
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => {
		dst.length = 4

		dst[M11] = _add(a11, b11)
		dst[M12] = _add(a12, b12)

		dst[M21] = _add(a21, b21)
		dst[M22] = _add(a22, b22)

		return dst
	}
	const add$$$ = (a, [
		b11, b12,
		b21, b22,
	]) => {
		const [
			a11, a12,
			a21, a22,
		] = a

		a[M11] = _add(a11, b11)
		a[M12] = _add(a12, b12)

		a[M21] = _add(a21, b21)
		a[M22] = _add(a22, b22)

		return a
	}
	add.to = addTo
	add.$$$ = add$$$

	const sub = ([
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => [
		_sub(a11, b11), _sub(a12, b12),
		_sub(a21, b21), _sub(a22, b22),
	]
	const subTo = (dst, [
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => {
		dst.length = 4

		dst[M11] = _sub(a11, b11)
		dst[M12] = _sub(a12, b12)

		dst[M21] = _sub(a21, b21)
		dst[M22] = _sub(a22, b22)

		return dst
	}
	const sub$$$ = (a, [
		b11, b12,
		b21, b22,
	]) => {
		const [
			a11, a12,
			a21, a22,
		] = a

		a[M11] = _sub(a11, b11)
		a[M12] = _sub(a12, b12)

		a[M21] = _sub(a21, b21)
		a[M22] = _sub(a22, b22)

		return a
	}
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = ([
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => [
		_mul(a11, b11), _mul(a12, b12),
		_mul(a21, b21), _mul(a22, b22),
	]
	const mulTo = (dst, [
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => {
		dst.length = 4

		dst[M11] = _mul(a11, b11)
		dst[M12] = _mul(a12, b12)

		dst[M21] = _mul(a21, b21)
		dst[M22] = _mul(a22, b22)

		return dst
	}
	const mul$$$ = (a, [
		b11, b12,
		b21, b22,
	]) => {
		const [
			a11, a12,
			a21, a22,
		] = a

		a[M11] = _mul(a11, b11)
		a[M12] = _mul(a12, b12)

		a[M21] = _mul(a21, b21)
		a[M22] = _mul(a22, b22)

		return a
	}
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = ([
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => [
		_div(a11, b11), _div(a12, b12),
		_div(a21, b21), _div(a22, b22),
	]
	const divTo = (dst, [
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => {
		dst.length = 4

		dst[M11] = _div(a11, b11)
		dst[M12] = _div(a12, b12)

		dst[M21] = _div(a21, b21)
		dst[M22] = _div(a22, b22)

		return dst
	}
	const div$$$ = (a, [
		b11, b12,
		b21, b22,
	]) => {
		const [
			a11, a12,
			a21, a22,
		] = a

		a[M11] = _div(a11, b11)
		a[M12] = _div(a12, b12)

		a[M21] = _div(a21, b21)
		a[M22] = _div(a22, b22)

		return a
	}
	div.to = divTo
	div.$$$ = div$$$

	const transpose = ([
		m11, m12,
		m21, m22,
	]) => [
		m11, m21,
		m12, m22,
	]
	const transposeTo = (dst, [
		m11, m12,
		m21, m22,
	]) => {
		dst.length = 4

		dst[M11] = m11
		dst[M12] = m21

		dst[M21] = m12
		dst[M22] = m22

		return dst
	}
	const transpose$$$ = (m) => {
		swap.$$$(m, M21, M12)
		return m
	}
	transpose.to = transposeTo
	transpose.$$$ = transpose$$$

	const mulMatVec = ([
		m11, m12,
		m21, m22,
	], [ v1, v2 ]) => [
		_add(_mul(m11, v1), _mul(m12, v2)),
		_add(_mul(m21, v1), _mul(m22, v2)),
	]
	const mulMatVecTo = (dst, [
		m11, m12,
		m21, m22,
	], [ v1, v2 ]) => {
		dst.length = 2
		dst[0] = _add(_mul(m11, v1), _mul(m12, v2))
		dst[1] = _add(_mul(m21, v1), _mul(m22, v2))
		return dst
	}
	const mulMatVec$$$ = ([
		m11, m12,
		m21, m22,
	], v) => {
		const [ v1, v2 ] = v
		v[0] = _add(_mul(m11, v1), _mul(m12, v2))
		v[1] = _add(_mul(m21, v1), _mul(m22, v2))
		return v
	}
	mulMatVec.to = mulMatVecTo
	mulMatVec.$$$ = mulMatVec$$$

	const mulMatMat = ([
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => [
		_add(_mul(a11, b11), _mul(a12, b21)),
		_add(_mul(a11, b12), _mul(a12, b22)),

		_add(_mul(a21, b11), _mul(a22, b21)),
		_add(_mul(a21, b12), _mul(a22, b22)),
	]
	const mulMatrixTo = (dst, [
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => {
		dst.length = 4

		dst[M11] = _add(_mul(a11, b11), _mul(a12, b21))
		dst[M12] = _add(_mul(a11, b12), _mul(a12, b22))

		dst[M21] = _add(_mul(a21, b11), _mul(a22, b21))
		dst[M22] = _add(_mul(a21, b12), _mul(a22, b22))

		return dst
	}
	const mulMatMat$$$ = (a, [
		b11, b12,
		b21, b22,
	]) => {
		const [
			a11, a12,
			a21, a22,
		] = a

		a[M11] = _add(_mul(a11, b11), _mul(a12, b21))
		a[M12] = _add(_mul(a11, b12), _mul(a12, b22))

		a[M21] = _add(_mul(a21, b11), _mul(a22, b21))
		a[M22] = _add(_mul(a21, b12), _mul(a22, b22))

		return a
	}
	mulMatMat.to = mulMatrixTo
	mulMatMat.$$$ = mulMatMat$$$

	const eq = ([
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => true
		&& _eq(a11, b11) && _eq(a12, b12)
		&& _eq(a21, b21) && _eq(a22, b22)

	const neq = ([
		a11, a12,
		a21, a22,
	], [
		b11, b12,
		b21, b22,
	]) => false
		|| _neq(a11, b11) || _neq(a12, b12)
		|| _neq(a21, b21) || _neq(a22, b22)

	const scale = ([
		m11, m12,
		m21, m22,
	], s) => [
		_mul(m11, s), _mul(m12, s),
		_mul(m21, s), _mul(m22, s),
	]
	const scaleTo = (dst, [
		m11, m12,
		m21, m22,
	], s) => {
		dst.length = 4

		dst[M11] = _mul(m11, s)
		dst[M12] = _mul(m12, s)

		dst[M21] = _mul(m21, s)
		dst[M22] = _mul(m22, s)

		return dst
	}
	const scale$$$ = (m, s) => {
		const [
			m11, m12,
			m21, m22,
		] = m

		m[M11] = _mul(m11, s)
		m[M12] = _mul(m12, s)

		m[M21] = _mul(m21, s)
		m[M22] = _mul(m22, s)

		return m
	}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const minor = (m, i, j) => m[(1 - i) * 2 + (1 - j)]

	const cofactor = (m, i, j) => {
		const factor = minor(m, i, j)
		return i + j % 2 ? neg(factor) : factor
	}

	const cofactors = ([
		m11, m12,
		m21, m22,
	]) => [
		m22, _neg(m21),
		_neg(m12), m11,
	]

	const adjugate = ([
		m11, m12,
		m21, m22,
	]) => [
		m22, _neg(m12),
		_neg(m21), m11,
	]

	const determinant = ([
		m11, m12,
		m21, m22,
	]) => _sub(_mul(m11, m22), _mul(m12, m21))

	const inverse = (m) => {
		const det = determinant(m)

		if (_eq(det, _ZERO)) { throw new Error("singular matrix") }
		const invDet = _inverse(det)

		const [
			m11, m12,
			m21, m22,
		] = m

		return [
			_mul(invDet, m22),
			_mul(invDet, _neg(m12)),

			_mul(invDet, _neg(m21)),
			_mul(invDet, m11),
		]
	}

	const fromNumbers = (
		m11, m12,
		m21, m22,
	) => [
		_fromNumber(m11), _fromNumber(m12),
		_fromNumber(m21), _fromNumber(m22),
	]

	const toNumbers = ([
		m11, m12,
		m21, m22,
	]) => [
		_toNumber(m11), _toNumber(m12),
		_toNumber(m21), _toNumber(m22),
	]

	return {
		Algebra,
		...{ identity },
		...{ isFinite, isNaN },
		...{ neg, add, sub, mul, div },
		...{ transpose, mulMatVec, mulMatMat },
		...{ eq, neq },
		...{ scale },
		...{ minor, cofactor, cofactors, adjugate, determinant, inverse },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
