/* eslint-disable @stylistic/array-element-newline */

const { memoize } = require('@kmamal/util/function/memoize')
const { swap } = require('@kmamal/util/array/swap')

const M11 = 0
const M12 = 1
const M13 = 2

const M21 = 3
const M22 = 4
const M23 = 5

const M31 = 6
const M32 = 7
const M33 = 8

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
		_clone(_ONE), _clone(_ZERO), _clone(_ZERO),
		_clone(_ZERO), _clone(_ONE), _clone(_ZERO),
		_clone(_ZERO), _clone(_ZERO), _clone(_ONE),
	]

	const isFinite = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => true
		&& _isFinite(m11) && _isFinite(m12) && _isFinite(m13)
		&& _isFinite(m21) && _isFinite(m22) && _isFinite(m23)
		&& _isFinite(m31) && _isFinite(m32) && _isFinite(m33)

	const isNaN = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => false
		|| _isNaN(m11) || _isNaN(m12) || _isNaN(m13)
		|| _isNaN(m21) || _isNaN(m22) || _isNaN(m23)
		|| _isNaN(m31) || _isNaN(m32) || _isNaN(m33)

	const neg = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => [
		_neg(m11), _neg(m12), _neg(m13),
		_neg(m21), _neg(m22), _neg(m23),
		_neg(m31), _neg(m32), _neg(m33),
	]
	const negTo = (dst, [
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => {
		dst.length = 9

		dst[M11] = _neg(m11)
		dst[M12] = _neg(m12)
		dst[M13] = _neg(m13)

		dst[M21] = _neg(m21)
		dst[M22] = _neg(m22)
		dst[M23] = _neg(m23)

		dst[M31] = _neg(m31)
		dst[M32] = _neg(m32)
		dst[M33] = _neg(m33)

		return dst
	}
	const neg$$$ = (m) => {
		const [
			m11, m12, m13,
			m21, m22, m23,
			m31, m32, m33,
		] = m

		m[M11] = _neg(m11)
		m[M12] = _neg(m12)
		m[M13] = _neg(m13)

		m[M21] = _neg(m21)
		m[M22] = _neg(m22)
		m[M23] = _neg(m23)

		m[M31] = _neg(m31)
		m[M32] = _neg(m32)
		m[M33] = _neg(m33)

		return m
	}
	neg.to = negTo
	neg.$$$ = neg$$$

	const add = ([
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => [
		_add(a11, b11), _add(a12, b12), _add(a13, b13),
		_add(a21, b21), _add(a22, b22), _add(a23, b23),
		_add(a31, b31), _add(a32, b32), _add(a33, b33),
	]
	const addTo = (dst, [
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		dst.length = 9

		dst[M11] = _add(a11, b11)
		dst[M12] = _add(a12, b12)
		dst[M13] = _add(a13, b13)

		dst[M21] = _add(a21, b21)
		dst[M22] = _add(a22, b22)
		dst[M23] = _add(a23, b23)

		dst[M31] = _add(a31, b31)
		dst[M32] = _add(a32, b32)
		dst[M33] = _add(a33, b33)

		return dst
	}
	const add$$$ = (a, [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		const [
			a11, a12, a13,
			a21, a22, a23,
			a31, a32, a33,
		] = a

		a[M11] = _add(a11, b11)
		a[M12] = _add(a12, b12)
		a[M13] = _add(a13, b13)

		a[M21] = _add(a21, b21)
		a[M22] = _add(a22, b22)
		a[M23] = _add(a23, b23)

		a[M31] = _add(a31, b31)
		a[M32] = _add(a32, b32)
		a[M33] = _add(a33, b33)

		return a
	}
	add.to = addTo
	add.$$$ = add$$$

	const sub = ([
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => [
		_sub(a11, b11), _sub(a12, b12), _sub(a13, b13),
		_sub(a21, b21), _sub(a22, b22), _sub(a23, b23),
		_sub(a31, b31), _sub(a32, b32), _sub(a33, b33),
	]
	const subTo = (dst, [
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		dst.length = 9

		dst[M11] = _sub(a11, b11)
		dst[M12] = _sub(a12, b12)
		dst[M13] = _sub(a13, b13)

		dst[M21] = _sub(a21, b21)
		dst[M22] = _sub(a22, b22)
		dst[M23] = _sub(a23, b23)

		dst[M31] = _sub(a31, b31)
		dst[M32] = _sub(a32, b32)
		dst[M33] = _sub(a33, b33)

		return dst
	}
	const sub$$$ = (a, [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		const [
			a11, a12, a13,
			a21, a22, a23,
			a31, a32, a33,
		] = a

		a[M11] = _sub(a11, b11)
		a[M12] = _sub(a12, b12)
		a[M13] = _sub(a13, b13)

		a[M21] = _sub(a21, b21)
		a[M22] = _sub(a22, b22)
		a[M23] = _sub(a23, b23)

		a[M31] = _sub(a31, b31)
		a[M32] = _sub(a32, b32)
		a[M33] = _sub(a33, b33)

		return a
	}
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = ([
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => [
		_mul(a11, b11), _mul(a12, b12), _mul(a13, b13),
		_mul(a21, b21), _mul(a22, b22), _mul(a23, b23),
		_mul(a31, b31), _mul(a32, b32), _mul(a33, b33),
	]
	const mulTo = (dst, [
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		dst.length = 9

		dst[M11] = _mul(a11, b11)
		dst[M12] = _mul(a12, b12)
		dst[M13] = _mul(a13, b13)

		dst[M21] = _mul(a21, b21)
		dst[M22] = _mul(a22, b22)
		dst[M23] = _mul(a23, b23)

		dst[M31] = _mul(a31, b31)
		dst[M32] = _mul(a32, b32)
		dst[M33] = _mul(a33, b33)

		return dst
	}
	const mul$$$ = (a, [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		const [
			a11, a12, a13,
			a21, a22, a23,
			a31, a32, a33,
		] = a

		a[M11] = _mul(a11, b11)
		a[M12] = _mul(a12, b12)
		a[M13] = _mul(a13, b13)

		a[M21] = _mul(a21, b21)
		a[M22] = _mul(a22, b22)
		a[M23] = _mul(a23, b23)

		a[M31] = _mul(a31, b31)
		a[M32] = _mul(a32, b32)
		a[M33] = _mul(a33, b33)

		return a
	}
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = ([
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => [
		_div(a11, b11), _div(a12, b12), _div(a13, b13),
		_div(a21, b21), _div(a22, b22), _div(a23, b23),
		_div(a31, b31), _div(a32, b32), _div(a33, b33),
	]
	const divTo = (dst, [
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		dst.length = 9

		dst[M11] = _div(a11, b11)
		dst[M12] = _div(a12, b12)
		dst[M13] = _div(a13, b13)

		dst[M21] = _div(a21, b21)
		dst[M22] = _div(a22, b22)
		dst[M23] = _div(a23, b23)

		dst[M31] = _div(a31, b31)
		dst[M32] = _div(a32, b32)
		dst[M33] = _div(a33, b33)

		return dst
	}
	const div$$$ = (a, [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		const [
			a11, a12, a13,
			a21, a22, a23,
			a31, a32, a33,
		] = a

		a[M11] = _div(a11, b11)
		a[M12] = _div(a12, b12)
		a[M13] = _div(a13, b13)

		a[M21] = _div(a21, b21)
		a[M22] = _div(a22, b22)
		a[M23] = _div(a23, b23)

		a[M31] = _div(a31, b31)
		a[M32] = _div(a32, b32)
		a[M33] = _div(a33, b33)

		return a
	}
	div.to = divTo
	div.$$$ = div$$$

	const transpose = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => [
		m11, m21, m31,
		m12, m22, m32,
		m13, m23, m33,
	]
	const transposeTo = (dst, [
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => {
		dst.length = 9

		dst[M11] = m11
		dst[M12] = m21
		dst[M13] = m31

		dst[M21] = m12
		dst[M22] = m22
		dst[M23] = m32

		dst[M31] = m13
		dst[M32] = m23
		dst[M33] = m33

		return dst
	}
	const transpose$$$ = (m) => {
		swap.$$$(m, M21, M12)
		swap.$$$(m, M31, M13)

		swap.$$$(m, M32, M23)

		return m
	}
	transpose.to = transposeTo
	transpose.$$$ = transpose$$$

	const mulMatVec = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	], [ v1, v2, v3 ]) => [
		_add(_add(_mul(m11, v1), _mul(m12, v2)), _mul(m13, v3)),
		_add(_add(_mul(m21, v1), _mul(m22, v2)), _mul(m23, v3)),
		_add(_add(_mul(m31, v1), _mul(m32, v2)), _mul(m33, v3)),
	]
	const mulMatVecTo = (dst, [
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	], [ v1, v2, v3 ]) => {
		dst.length = 3
		dst[0] = _add(_add(_mul(m11, v1), _mul(m12, v2)), _mul(m13, v3))
		dst[1] = _add(_add(_mul(m21, v1), _mul(m22, v2)), _mul(m23, v3))
		dst[2] = _add(_add(_mul(m31, v1), _mul(m32, v2)), _mul(m33, v3))
		return dst
	}
	const mulMatVec$$$ = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	], v) => {
		const [ v1, v2, v3 ] = v

		v[0] = _add(_add(_mul(m11, v1), _mul(m12, v2)), _mul(m13, v3))
		v[1] = _add(_add(_mul(m21, v1), _mul(m22, v2)), _mul(m23, v3))
		v[2] = _add(_add(_mul(m31, v1), _mul(m32, v2)), _mul(m33, v3))

		return v
	}
	mulMatVec.to = mulMatVecTo
	mulMatVec.$$$ = mulMatVec$$$

	const mulMatMat = ([
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => [
		_add(_add(_mul(a11, b11), _mul(a12, b21)), _mul(a13, b31)),
		_add(_add(_mul(a11, b12), _mul(a12, b22)), _mul(a13, b32)),
		_add(_add(_mul(a11, b13), _mul(a12, b23)), _mul(a13, b33)),

		_add(_add(_mul(a21, b11), _mul(a22, b21)), _mul(a23, b31)),
		_add(_add(_mul(a21, b12), _mul(a22, b22)), _mul(a23, b32)),
		_add(_add(_mul(a21, b13), _mul(a22, b23)), _mul(a23, b33)),

		_add(_add(_mul(a31, b11), _mul(a32, b21)), _mul(a33, b31)),
		_add(_add(_mul(a31, b12), _mul(a32, b22)), _mul(a33, b32)),
		_add(_add(_mul(a31, b13), _mul(a32, b23)), _mul(a33, b33)),
	]
	const mulMatrixTo = (dst, [
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		dst.length = 9

		dst[M11] = _add(_add(_mul(a11, b11), _mul(a12, b21)), _mul(a13, b31))
		dst[M12] = _add(_add(_mul(a11, b12), _mul(a12, b22)), _mul(a13, b32))
		dst[M13] = _add(_add(_mul(a11, b13), _mul(a12, b23)), _mul(a13, b33))

		dst[M21] = _add(_add(_mul(a21, b11), _mul(a22, b21)), _mul(a23, b31))
		dst[M22] = _add(_add(_mul(a21, b12), _mul(a22, b22)), _mul(a23, b32))
		dst[M23] = _add(_add(_mul(a21, b13), _mul(a22, b23)), _mul(a23, b33))

		dst[M31] = _add(_add(_mul(a31, b11), _mul(a32, b21)), _mul(a33, b31))
		dst[M32] = _add(_add(_mul(a31, b12), _mul(a32, b22)), _mul(a33, b32))
		dst[M33] = _add(_add(_mul(a31, b13), _mul(a32, b23)), _mul(a33, b33))

		return dst
	}
	const mulMatMat$$$ = (a, [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => {
		const [
			a11, a12, a13,
			a21, a22, a23,
			a31, a32, a33,
		] = a

		a[M11] = _add(_add(_mul(a11, b11), _mul(a12, b21)), _mul(a13, b31))
		a[M12] = _add(_add(_mul(a11, b12), _mul(a12, b22)), _mul(a13, b32))
		a[M13] = _add(_add(_mul(a11, b13), _mul(a12, b23)), _mul(a13, b33))

		a[M21] = _add(_add(_mul(a21, b11), _mul(a22, b21)), _mul(a23, b31))
		a[M22] = _add(_add(_mul(a21, b12), _mul(a22, b22)), _mul(a23, b32))
		a[M23] = _add(_add(_mul(a21, b13), _mul(a22, b23)), _mul(a23, b33))

		a[M31] = _add(_add(_mul(a31, b11), _mul(a32, b21)), _mul(a33, b31))
		a[M32] = _add(_add(_mul(a31, b12), _mul(a32, b22)), _mul(a33, b32))
		a[M33] = _add(_add(_mul(a31, b13), _mul(a32, b23)), _mul(a33, b33))

		return a
	}
	mulMatMat.to = mulMatrixTo
	mulMatMat.$$$ = mulMatMat$$$

	const eq = ([
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => true
		&& _eq(a11, b11) && _eq(a12, b12) && _eq(a13, b13)
		&& _eq(a21, b21) && _eq(a22, b22) && _eq(a23, b23)
		&& _eq(a31, b31) && _eq(a32, b32) && _eq(a33, b33)

	const neq = ([
		a11, a12, a13,
		a21, a22, a23,
		a31, a32, a33,
	], [
		b11, b12, b13,
		b21, b22, b23,
		b31, b32, b33,
	]) => false
		|| _neq(a11, b11) || _neq(a12, b12) || _neq(a13, b13)
		|| _neq(a21, b21) || _neq(a22, b22) || _neq(a23, b23)
		|| _neq(a31, b31) || _neq(a32, b32) || _neq(a33, b33)

	const scale = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	], s) => [
		_mul(m11, s), _mul(m12, s), _mul(m13, s),
		_mul(m21, s), _mul(m22, s), _mul(m23, s),
		_mul(m31, s), _mul(m32, s), _mul(m33, s),
	]
	const scaleTo = (dst, [
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	], s) => {
		dst.length = 9

		dst[M11] = _mul(m11, s)
		dst[M12] = _mul(m12, s)
		dst[M13] = _mul(m13, s)

		dst[M21] = _mul(m21, s)
		dst[M22] = _mul(m22, s)
		dst[M23] = _mul(m23, s)

		dst[M31] = _mul(m31, s)
		dst[M32] = _mul(m32, s)
		dst[M33] = _mul(m33, s)

		return dst
	}
	const scale$$$ = (m, s) => {
		const [
			m11, m12, m13,
			m21, m22, m23,
			m31, m32, m33,
		] = m

		m[M11] = _mul(m11, s)
		m[M12] = _mul(m12, s)
		m[M13] = _mul(m13, s)

		m[M21] = _mul(m21, s)
		m[M22] = _mul(m22, s)
		m[M23] = _mul(m23, s)

		m[M31] = _mul(m31, s)
		m[M32] = _mul(m32, s)
		m[M33] = _mul(m33, s)

		return m
	}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const minor = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	], i, j) => {
		switch (i) {
			case 0: switch (j) {
				case 0: return _sub(_mul(m22, m33), _mul(m32, m23))
				case 1: return _sub(_mul(m12, m33), _mul(m32, m13))
				case 2: return _sub(_mul(m12, m23), _mul(m22, m13))
				default: return null
			}
			case 1: switch (j) {
				case 0: return _sub(_mul(m21, m33), _mul(m31, m23))
				case 1: return _sub(_mul(m11, m33), _mul(m31, m13))
				case 2: return _sub(_mul(m11, m23), _mul(m21, m13))
				default: return null
			}
			case 2: switch (j) {
				case 0: return _sub(_mul(m21, m32), _mul(m31, m22))
				case 1: return _sub(_mul(m11, m32), _mul(m31, m12))
				case 2: return _sub(_mul(m11, m22), _mul(m21, m12))
				default: return null
			}
			default: return null
		}
	}

	const cofactor = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	], i, j) => {
		switch (i) {
			case 0: switch (j) {
				case 0: return _sub(_mul(m22, m33), _mul(m32, m23))
				case 1: return _neg(_sub(_mul(m12, m33), _mul(m32, m13)))
				case 2: return _sub(_mul(m12, m23), _mul(m22, m13))
				default: return null
			}
			case 1: switch (j) {
				case 0: return _neg(_sub(_mul(m21, m33), _mul(m31, m23)))
				case 1: return _sub(_mul(m11, m33), _mul(m31, m13))
				case 2: return _neg(_sub(_mul(m11, m23), _mul(m21, m13)))
				default: return null
			}
			case 2: switch (j) {
				case 0: return _sub(_mul(m21, m32), _mul(m31, m22))
				case 1: return _neg(_sub(_mul(m11, m32), _mul(m31, m12)))
				case 2: return _sub(_mul(m11, m22), _mul(m21, m12))
				default: return null
			}
			default: return null
		}
	}

	const cofactors = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => [
		_sub(_mul(m22, m33), _mul(m32, m23)),
		_neg(_sub(_mul(m21, m33), _mul(m31, m23))),
		_sub(_mul(m21, m32), _mul(m31, m22)),

		_neg(_sub(_mul(m12, m33), _mul(m32, m13))),
		_sub(_mul(m11, m33), _mul(m31, m13)),
		_neg(_sub(_mul(m11, m32), _mul(m31, m12))),

		_sub(_mul(m12, m23), _mul(m22, m13)),
		_neg(_sub(_mul(m11, m23), _mul(m21, m13))),
		_sub(_mul(m11, m22), _mul(m21, m12)),
	]

	const adjugate = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => [
		_sub(_mul(m22, m33), _mul(m32, m23)),
		_neg(_sub(_mul(m12, m33), _mul(m32, m13))),
		_sub(_mul(m12, m23), _mul(m22, m13)),

		_neg(_sub(_mul(m21, m33), _mul(m31, m23))),
		_sub(_mul(m11, m33), _mul(m31, m13)),
		_neg(_sub(_mul(m11, m23), _mul(m21, m13))),

		_sub(_mul(m21, m32), _mul(m31, m22)),
		_neg(_sub(_mul(m11, m32), _mul(m31, m12))),
		_sub(_mul(m11, m22), _mul(m21, m12)),
	]

	const determinant = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => _add(
		_sub(
			_mul(m11, _sub(_mul(m22, m33), _mul(m32, m23))),
			_mul(m21, _sub(_mul(m12, m33), _mul(m32, m13))),
		),
		_mul(m31, _sub(_mul(m12, m23), _mul(m22, m13))),
	)

	const inverse = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => {
		/* eslint-disable camelcase */
		const _mul_m22_m33 = _mul(m22, m33)
		const _mul_m23_m32 = _mul(m23, m32)
		const _sub__mul_m22_m33__mul_m23_m32 = _sub(_mul_m22_m33, _mul_m23_m32)
		const _mul_m12_m33 = _mul(m12, m33)
		const _mul_m13_m32 = _mul(m13, m32)
		const _sub__mul_m12_m33__mul_m13_m32 = _sub(_mul_m12_m33, _mul_m13_m32)
		const _mul_m12_m23 = _mul(m12, m23)
		const _mul_m13_m22 = _mul(m13, m22)
		const _sub__mul_m12_m23__mul_m13_m22 = _sub(_mul_m12_m23, _mul_m13_m22)
		/* eslint-enable camelcase */

		const det = _add(
			_sub(
				_mul(m11, _sub__mul_m22_m33__mul_m23_m32),
				_mul(m21, _sub__mul_m12_m33__mul_m13_m32),
			),
			_mul(m31, _sub__mul_m12_m23__mul_m13_m22),
		)

		if (_eq(det, _ZERO)) { throw new Error("singular matrix") }
		const invDet = _inverse(det)

		return [
			_mul(invDet, _sub__mul_m22_m33__mul_m23_m32),
			_mul(invDet, _neg(_sub__mul_m12_m33__mul_m13_m32)),
			_mul(invDet, _sub__mul_m12_m23__mul_m13_m22),

			_mul(invDet, _sub(_mul(m23, m31), _mul(m21, m33))),
			_mul(invDet, _sub(_mul(m11, m33), _mul(m13, m31))),
			_mul(invDet, _sub(_mul(m13, m21), _mul(m11, m23))),

			_mul(invDet, _sub(_mul(m21, m32), _mul(m22, m31))),
			_mul(invDet, _sub(_mul(m12, m31), _mul(m11, m32))),
			_mul(invDet, _sub(_mul(m11, m22), _mul(m12, m21))),
		]
	}

	const fromNumbers = (
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	) => [
		_fromNumber(m11), _fromNumber(m12), _fromNumber(m13),
		_fromNumber(m21), _fromNumber(m22), _fromNumber(m23),
		_fromNumber(m31), _fromNumber(m32), _fromNumber(m33),
	]

	const toNumbers = ([
		m11, m12, m13,
		m21, m22, m23,
		m31, m32, m33,
	]) => [
		_toNumber(m11), _toNumber(m12), _toNumber(m13),
		_toNumber(m21), _toNumber(m22), _toNumber(m23),
		_toNumber(m31), _toNumber(m32), _toNumber(m33),
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
