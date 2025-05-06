/* eslint-disable @stylistic/array-element-newline */

const { memoize } = require('@kmamal/util/function/memoize')
const { swap } = require('@kmamal/util/array/swap')

const M11 = 0
const M12 = 1
const M13 = 2
const M14 = 3
const M21 = 4
const M22 = 5
const M23 = 6
const M24 = 7
const M31 = 8
const M32 = 9
const M33 = 10
const M34 = 11
const M41 = 12
const M42 = 13
const M43 = 14
const M44 = 15

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

	const _add3 = (a, b, c) => _add(_add(a, b), c)

	const _ZERO = _fromNumber(0)
	const _ONE = _fromNumber(1)

	const identity = () => [
		_clone(_ONE), _clone(_ZERO), _clone(_ZERO), _clone(_ZERO),
		_clone(_ZERO), _clone(_ONE), _clone(_ZERO), _clone(_ZERO),
		_clone(_ZERO), _clone(_ZERO), _clone(_ONE), _clone(_ZERO),
		_clone(_ZERO), _clone(_ZERO), _clone(_ZERO), _clone(_ONE),
	]

	const isFinite = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => true
		&& _isFinite(m11) && _isFinite(m12) && _isFinite(m13) && _isFinite(m14)
		&& _isFinite(m21) && _isFinite(m22) && _isFinite(m23) && _isFinite(m24)
		&& _isFinite(m31) && _isFinite(m32) && _isFinite(m33) && _isFinite(m34)
		&& _isFinite(m41) && _isFinite(m42) && _isFinite(m43) && _isFinite(m44)

	const isNaN = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => false
		|| _isNaN(m11) || _isNaN(m12) || _isNaN(m13) || _isNaN(m14)
		|| _isNaN(m21) || _isNaN(m22) || _isNaN(m23) || _isNaN(m24)
		|| _isNaN(m31) || _isNaN(m32) || _isNaN(m33) || _isNaN(m34)
		|| _isNaN(m41) || _isNaN(m42) || _isNaN(m43) || _isNaN(m44)

	const neg = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => [
		_neg(m11), _neg(m12), _neg(m13), _neg(m14),
		_neg(m21), _neg(m22), _neg(m23), _neg(m24),
		_neg(m31), _neg(m32), _neg(m33), _neg(m34),
		_neg(m41), _neg(m42), _neg(m43), _neg(m44),
	]
	const negTo = (dst, [
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => {
		dst.length = 16

		dst[M11] = _neg(m11)
		dst[M12] = _neg(m12)
		dst[M13] = _neg(m13)
		dst[M14] = _neg(m14)

		dst[M21] = _neg(m21)
		dst[M22] = _neg(m22)
		dst[M23] = _neg(m23)
		dst[M24] = _neg(m24)

		dst[M31] = _neg(m31)
		dst[M32] = _neg(m32)
		dst[M33] = _neg(m33)
		dst[M34] = _neg(m34)

		dst[M41] = _neg(m41)
		dst[M42] = _neg(m42)
		dst[M43] = _neg(m43)
		dst[M44] = _neg(m44)

		return dst
	}
	const neg$$$ = (m) => {
		const [
			m11, m12, m13, m14,
			m21, m22, m23, m24,
			m31, m32, m33, m34,
			m41, m42, m43, m44,
		] = m

		m[M11] = _neg(m11)
		m[M12] = _neg(m12)
		m[M13] = _neg(m13)
		m[M14] = _neg(m14)

		m[M21] = _neg(m21)
		m[M22] = _neg(m22)
		m[M23] = _neg(m23)
		m[M24] = _neg(m24)

		m[M31] = _neg(m31)
		m[M32] = _neg(m32)
		m[M33] = _neg(m33)
		m[M34] = _neg(m34)

		m[M41] = _neg(m41)
		m[M42] = _neg(m42)
		m[M43] = _neg(m43)
		m[M44] = _neg(m44)

		return m
	}
	neg.to = negTo
	neg.$$$ = neg$$$

	const add = ([
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => [
		_add(a11, b11), _add(a12, b12), _add(a13, b13), _add(a14, b14),
		_add(a21, b21), _add(a22, b22), _add(a23, b23), _add(a24, b24),
		_add(a31, b31), _add(a32, b32), _add(a33, b33), _add(a34, b34),
		_add(a41, b41), _add(a42, b42), _add(a43, b43), _add(a44, b44),
	]
	const addTo = (dst, [
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		dst.length = 16

		dst[M11] = _add(a11, b11)
		dst[M12] = _add(a12, b12)
		dst[M13] = _add(a13, b13)
		dst[M14] = _add(a14, b14)

		dst[M21] = _add(a21, b21)
		dst[M22] = _add(a22, b22)
		dst[M23] = _add(a23, b23)
		dst[M24] = _add(a24, b24)

		dst[M31] = _add(a31, b31)
		dst[M32] = _add(a32, b32)
		dst[M33] = _add(a33, b33)
		dst[M34] = _add(a34, b34)

		dst[M41] = _add(a41, b41)
		dst[M42] = _add(a42, b42)
		dst[M43] = _add(a43, b43)
		dst[M44] = _add(a44, b44)

		return dst
	}
	const add$$$ = (a, [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		const [
			a11, a12, a13, a14,
			a21, a22, a23, a24,
			a31, a32, a33, a34,
			a41, a42, a43, a44,
		] = a

		a[M11] = _add(a11, b11)
		a[M12] = _add(a12, b12)
		a[M13] = _add(a13, b13)
		a[M14] = _add(a14, b14)

		a[M21] = _add(a21, b21)
		a[M22] = _add(a22, b22)
		a[M23] = _add(a23, b23)
		a[M24] = _add(a24, b24)

		a[M31] = _add(a31, b31)
		a[M32] = _add(a32, b32)
		a[M33] = _add(a33, b33)
		a[M34] = _add(a34, b34)

		a[M41] = _add(a41, b41)
		a[M42] = _add(a42, b42)
		a[M43] = _add(a43, b43)
		a[M44] = _add(a44, b44)

		return a
	}
	add.to = addTo
	add.$$$ = add$$$

	const sub = ([
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => [
		_sub(a11, b11), _sub(a12, b12), _sub(a13, b13), _sub(a14, b14),
		_sub(a21, b21), _sub(a22, b22), _sub(a23, b23), _sub(a24, b24),
		_sub(a31, b31), _sub(a32, b32), _sub(a33, b33), _sub(a34, b34),
		_sub(a41, b41), _sub(a42, b42), _sub(a43, b43), _sub(a44, b44),
	]
	const subTo = (dst, [
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		dst.length = 16

		dst[M11] = _sub(a11, b11)
		dst[M12] = _sub(a12, b12)
		dst[M13] = _sub(a13, b13)
		dst[M14] = _sub(a14, b14)

		dst[M21] = _sub(a21, b21)
		dst[M22] = _sub(a22, b22)
		dst[M23] = _sub(a23, b23)
		dst[M24] = _sub(a24, b24)

		dst[M31] = _sub(a31, b31)
		dst[M32] = _sub(a32, b32)
		dst[M33] = _sub(a33, b33)
		dst[M34] = _sub(a34, b34)

		dst[M41] = _sub(a41, b41)
		dst[M42] = _sub(a42, b42)
		dst[M43] = _sub(a43, b43)
		dst[M44] = _sub(a44, b44)

		return dst
	}
	const sub$$$ = (a, [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		const [
			a11, a12, a13, a14,
			a21, a22, a23, a24,
			a31, a32, a33, a34,
			a41, a42, a43, a44,
		] = a

		a[M11] = _sub(a11, b11)
		a[M12] = _sub(a12, b12)
		a[M13] = _sub(a13, b13)
		a[M14] = _sub(a14, b14)

		a[M21] = _sub(a21, b21)
		a[M22] = _sub(a22, b22)
		a[M23] = _sub(a23, b23)
		a[M24] = _sub(a24, b24)

		a[M31] = _sub(a31, b31)
		a[M32] = _sub(a32, b32)
		a[M33] = _sub(a33, b33)
		a[M34] = _sub(a34, b34)

		a[M41] = _sub(a41, b41)
		a[M42] = _sub(a42, b42)
		a[M43] = _sub(a43, b43)
		a[M44] = _sub(a44, b44)

		return a
	}
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = ([
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => [
		_mul(a11, b11), _mul(a12, b12), _mul(a13, b13), _mul(a14, b14),
		_mul(a21, b21), _mul(a22, b22), _mul(a23, b23), _mul(a24, b24),
		_mul(a31, b31), _mul(a32, b32), _mul(a33, b33), _mul(a34, b34),
		_mul(a41, b41), _mul(a42, b42), _mul(a43, b43), _mul(a44, b44),
	]
	const mulTo = (dst, [
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		dst.length = 16

		dst[M11] = _mul(a11, b11)
		dst[M12] = _mul(a12, b12)
		dst[M13] = _mul(a13, b13)
		dst[M14] = _mul(a14, b14)

		dst[M21] = _mul(a21, b21)
		dst[M22] = _mul(a22, b22)
		dst[M23] = _mul(a23, b23)
		dst[M24] = _mul(a24, b24)

		dst[M31] = _mul(a31, b31)
		dst[M32] = _mul(a32, b32)
		dst[M33] = _mul(a33, b33)
		dst[M34] = _mul(a34, b34)

		dst[M41] = _mul(a41, b41)
		dst[M42] = _mul(a42, b42)
		dst[M43] = _mul(a43, b43)
		dst[M44] = _mul(a44, b44)

		return dst
	}
	const mul$$$ = (a, [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		const [
			a11, a12, a13, a14,
			a21, a22, a23, a24,
			a31, a32, a33, a34,
			a41, a42, a43, a44,
		] = a

		a[M11] = _mul(a11, b11)
		a[M12] = _mul(a12, b12)
		a[M13] = _mul(a13, b13)
		a[M14] = _mul(a14, b14)

		a[M21] = _mul(a21, b21)
		a[M22] = _mul(a22, b22)
		a[M23] = _mul(a23, b23)
		a[M24] = _mul(a24, b24)

		a[M31] = _mul(a31, b31)
		a[M32] = _mul(a32, b32)
		a[M33] = _mul(a33, b33)
		a[M34] = _mul(a34, b34)

		a[M41] = _mul(a41, b41)
		a[M42] = _mul(a42, b42)
		a[M43] = _mul(a43, b43)
		a[M44] = _mul(a44, b44)

		return a
	}
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = ([
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => [
		_div(a11, b11), _div(a12, b12), _div(a13, b13), _div(a14, b14),
		_div(a21, b21), _div(a22, b22), _div(a23, b23), _div(a24, b24),
		_div(a31, b31), _div(a32, b32), _div(a33, b33), _div(a34, b34),
		_div(a41, b41), _div(a42, b42), _div(a43, b43), _div(a44, b44),
	]
	const divTo = (dst, [
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		dst.length = 16

		dst[M11] = _div(a11, b11)
		dst[M12] = _div(a12, b12)
		dst[M13] = _div(a13, b13)
		dst[M14] = _div(a14, b14)

		dst[M21] = _div(a21, b21)
		dst[M22] = _div(a22, b22)
		dst[M23] = _div(a23, b23)
		dst[M24] = _div(a24, b24)

		dst[M31] = _div(a31, b31)
		dst[M32] = _div(a32, b32)
		dst[M33] = _div(a33, b33)
		dst[M34] = _div(a34, b34)

		dst[M41] = _div(a41, b41)
		dst[M42] = _div(a42, b42)
		dst[M43] = _div(a43, b43)
		dst[M44] = _div(a44, b44)

		return dst
	}
	const div$$$ = (a, [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		const [
			a11, a12, a13, a14,
			a21, a22, a23, a24,
			a31, a32, a33, a34,
			a41, a42, a43, a44,
		] = a

		a[M11] = _div(a11, b11)
		a[M12] = _div(a12, b12)
		a[M13] = _div(a13, b13)
		a[M14] = _div(a14, b14)

		a[M21] = _div(a21, b21)
		a[M22] = _div(a22, b22)
		a[M23] = _div(a23, b23)
		a[M24] = _div(a24, b24)

		a[M31] = _div(a31, b31)
		a[M32] = _div(a32, b32)
		a[M33] = _div(a33, b33)
		a[M34] = _div(a34, b34)

		a[M41] = _div(a41, b41)
		a[M42] = _div(a42, b42)
		a[M43] = _div(a43, b43)
		a[M44] = _div(a44, b44)

		return a
	}
	div.to = divTo
	div.$$$ = div$$$

	const transpose = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => [
		m11, m21, m31, m41,
		m12, m22, m32, m42,
		m13, m23, m33, m43,
		m14, m24, m34, m44,
	]
	const transposeTo = (dst, [
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => {
		dst.length = 16

		dst[M11] = m11
		dst[M12] = m21
		dst[M13] = m31
		dst[M14] = m41

		dst[M21] = m12
		dst[M22] = m22
		dst[M23] = m32
		dst[M24] = m42

		dst[M31] = m13
		dst[M32] = m23
		dst[M33] = m33
		dst[M34] = m43

		dst[M41] = m14
		dst[M42] = m24
		dst[M43] = m34
		dst[M44] = m44

		return dst
	}
	const transpose$$$ = (m) => {
		swap.$$$(m, M21, M12)
		swap.$$$(m, M31, M13)
		swap.$$$(m, M41, M14)

		swap.$$$(m, M32, M23)
		swap.$$$(m, M42, M24)

		swap.$$$(m, M43, M34)

		return m
	}
	transpose.to = transposeTo
	transpose.$$$ = transpose$$$

	const mulMatVec = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	], [ v1, v2, v3, v4 ]) => [
		_add(_add(_add(_mul(m11, v1), _mul(m12, v2)), _mul(m13, v3)), _mul(m14, v4)),
		_add(_add(_add(_mul(m21, v1), _mul(m22, v2)), _mul(m23, v3)), _mul(m24, v4)),
		_add(_add(_add(_mul(m31, v1), _mul(m32, v2)), _mul(m33, v3)), _mul(m34, v4)),
		_add(_add(_add(_mul(m41, v1), _mul(m42, v2)), _mul(m43, v3)), _mul(m44, v4)),
	]
	const mulMatVecTo = (dst, [
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	], [ v1, v2, v3, v4 ]) => {
		dst.length = 4
		dst[0] = _add(_add(_add(_mul(m11, v1), _mul(m12, v2)), _mul(m13, v3)), _mul(m14, v4))
		dst[1] = _add(_add(_add(_mul(m21, v1), _mul(m22, v2)), _mul(m23, v3)), _mul(m24, v4))
		dst[2] = _add(_add(_add(_mul(m31, v1), _mul(m32, v2)), _mul(m33, v3)), _mul(m34, v4))
		dst[3] = _add(_add(_add(_mul(m41, v1), _mul(m42, v2)), _mul(m43, v3)), _mul(m44, v4))
		return dst
	}
	const mulMatVec$$$ = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	], v) => {
		const [ v1, v2, v3, v4 ] = v

		v[0] = _add(_add(_add(_mul(m11, v1), _mul(m12, v2)), _mul(m13, v3)), _mul(m14, v4))
		v[1] = _add(_add(_add(_mul(m21, v1), _mul(m22, v2)), _mul(m23, v3)), _mul(m24, v4))
		v[2] = _add(_add(_add(_mul(m31, v1), _mul(m32, v2)), _mul(m33, v3)), _mul(m34, v4))
		v[3] = _add(_add(_add(_mul(m41, v1), _mul(m42, v2)), _mul(m43, v3)), _mul(m44, v4))

		return v
	}
	mulMatVec.to = mulMatVecTo
	mulMatVec.$$$ = mulMatVec$$$

	const mulMatMat = ([
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => [
		_add(_add(_add(_mul(a11, b11), _mul(a12, b21)), _mul(a13, b31)), _mul(a14, b41)),
		_add(_add(_add(_mul(a11, b12), _mul(a12, b22)), _mul(a13, b32)), _mul(a14, b42)),
		_add(_add(_add(_mul(a11, b13), _mul(a12, b23)), _mul(a13, b33)), _mul(a14, b43)),
		_add(_add(_add(_mul(a11, b14), _mul(a12, b24)), _mul(a13, b34)), _mul(a14, b44)),

		_add(_add(_add(_mul(a21, b11), _mul(a22, b21)), _mul(a23, b31)), _mul(a24, b41)),
		_add(_add(_add(_mul(a21, b12), _mul(a22, b22)), _mul(a23, b32)), _mul(a24, b42)),
		_add(_add(_add(_mul(a21, b13), _mul(a22, b23)), _mul(a23, b33)), _mul(a24, b43)),
		_add(_add(_add(_mul(a21, b14), _mul(a22, b24)), _mul(a23, b34)), _mul(a24, b44)),

		_add(_add(_add(_mul(a31, b11), _mul(a32, b21)), _mul(a33, b31)), _mul(a34, b41)),
		_add(_add(_add(_mul(a31, b12), _mul(a32, b22)), _mul(a33, b32)), _mul(a34, b42)),
		_add(_add(_add(_mul(a31, b13), _mul(a32, b23)), _mul(a33, b33)), _mul(a34, b43)),
		_add(_add(_add(_mul(a31, b14), _mul(a32, b24)), _mul(a33, b34)), _mul(a34, b44)),

		_add(_add(_add(_mul(a41, b11), _mul(a42, b21)), _mul(a43, b31)), _mul(a44, b41)),
		_add(_add(_add(_mul(a41, b12), _mul(a42, b22)), _mul(a43, b32)), _mul(a44, b42)),
		_add(_add(_add(_mul(a41, b13), _mul(a42, b23)), _mul(a43, b33)), _mul(a44, b43)),
		_add(_add(_add(_mul(a41, b14), _mul(a42, b24)), _mul(a43, b34)), _mul(a44, b44)),
	]
	const mulMatrixTo = (dst, [
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		dst.length = 16

		dst[M11] = _add(_add(_add(_mul(a11, b11), _mul(a12, b21)), _mul(a13, b31)), _mul(a14, b41))
		dst[M12] = _add(_add(_add(_mul(a11, b12), _mul(a12, b22)), _mul(a13, b32)), _mul(a14, b42))
		dst[M13] = _add(_add(_add(_mul(a11, b13), _mul(a12, b23)), _mul(a13, b33)), _mul(a14, b43))
		dst[M14] = _add(_add(_add(_mul(a11, b14), _mul(a12, b24)), _mul(a13, b34)), _mul(a14, b44))

		dst[M21] = _add(_add(_add(_mul(a21, b11), _mul(a22, b21)), _mul(a23, b31)), _mul(a24, b41))
		dst[M22] = _add(_add(_add(_mul(a21, b12), _mul(a22, b22)), _mul(a23, b32)), _mul(a24, b42))
		dst[M23] = _add(_add(_add(_mul(a21, b13), _mul(a22, b23)), _mul(a23, b33)), _mul(a24, b43))
		dst[M24] = _add(_add(_add(_mul(a21, b14), _mul(a22, b24)), _mul(a23, b34)), _mul(a24, b44))

		dst[M31] = _add(_add(_add(_mul(a31, b11), _mul(a32, b21)), _mul(a33, b31)), _mul(a34, b41))
		dst[M32] = _add(_add(_add(_mul(a31, b12), _mul(a32, b22)), _mul(a33, b32)), _mul(a34, b42))
		dst[M33] = _add(_add(_add(_mul(a31, b13), _mul(a32, b23)), _mul(a33, b33)), _mul(a34, b43))
		dst[M34] = _add(_add(_add(_mul(a31, b14), _mul(a32, b24)), _mul(a33, b34)), _mul(a34, b44))

		dst[M41] = _add(_add(_add(_mul(a41, b11), _mul(a42, b21)), _mul(a43, b31)), _mul(a44, b41))
		dst[M42] = _add(_add(_add(_mul(a41, b12), _mul(a42, b22)), _mul(a43, b32)), _mul(a44, b42))
		dst[M43] = _add(_add(_add(_mul(a41, b13), _mul(a42, b23)), _mul(a43, b33)), _mul(a44, b43))
		dst[M44] = _add(_add(_add(_mul(a41, b14), _mul(a42, b24)), _mul(a43, b34)), _mul(a44, b44))

		return dst
	}
	const mulMatMat$$$ = (a, [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => {
		const [
			a11, a12, a13, a14,
			a21, a22, a23, a24,
			a31, a32, a33, a34,
			a41, a42, a43, a44,
		] = a

		a[M11] = _add(_add(_add(_mul(a11, b11), _mul(a12, b21)), _mul(a13, b31)), _mul(a14, b41))
		a[M12] = _add(_add(_add(_mul(a11, b12), _mul(a12, b22)), _mul(a13, b32)), _mul(a14, b42))
		a[M13] = _add(_add(_add(_mul(a11, b13), _mul(a12, b23)), _mul(a13, b33)), _mul(a14, b43))
		a[M14] = _add(_add(_add(_mul(a11, b14), _mul(a12, b24)), _mul(a13, b34)), _mul(a14, b44))

		a[M21] = _add(_add(_add(_mul(a21, b11), _mul(a22, b21)), _mul(a23, b31)), _mul(a24, b41))
		a[M22] = _add(_add(_add(_mul(a21, b12), _mul(a22, b22)), _mul(a23, b32)), _mul(a24, b42))
		a[M23] = _add(_add(_add(_mul(a21, b13), _mul(a22, b23)), _mul(a23, b33)), _mul(a24, b43))
		a[M24] = _add(_add(_add(_mul(a21, b14), _mul(a22, b24)), _mul(a23, b34)), _mul(a24, b44))

		a[M31] = _add(_add(_add(_mul(a31, b11), _mul(a32, b21)), _mul(a33, b31)), _mul(a34, b41))
		a[M32] = _add(_add(_add(_mul(a31, b12), _mul(a32, b22)), _mul(a33, b32)), _mul(a34, b42))
		a[M33] = _add(_add(_add(_mul(a31, b13), _mul(a32, b23)), _mul(a33, b33)), _mul(a34, b43))
		a[M34] = _add(_add(_add(_mul(a31, b14), _mul(a32, b24)), _mul(a33, b34)), _mul(a34, b44))

		a[M41] = _add(_add(_add(_mul(a41, b11), _mul(a42, b21)), _mul(a43, b31)), _mul(a44, b41))
		a[M42] = _add(_add(_add(_mul(a41, b12), _mul(a42, b22)), _mul(a43, b32)), _mul(a44, b42))
		a[M43] = _add(_add(_add(_mul(a41, b13), _mul(a42, b23)), _mul(a43, b33)), _mul(a44, b43))
		a[M44] = _add(_add(_add(_mul(a41, b14), _mul(a42, b24)), _mul(a43, b34)), _mul(a44, b44))

		return a
	}
	mulMatMat.to = mulMatrixTo
	mulMatMat.$$$ = mulMatMat$$$

	const eq = ([
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => true
		&& _eq(a11, b11) && _eq(a12, b12) && _eq(a13, b13) && _eq(a14, b14)
		&& _eq(a21, b21) && _eq(a22, b22) && _eq(a23, b23) && _eq(a24, b24)
		&& _eq(a31, b31) && _eq(a32, b32) && _eq(a33, b33) && _eq(a34, b34)
		&& _eq(a41, b41) && _eq(a42, b42) && _eq(a43, b43) && _eq(a44, b44)

	const neq = ([
		a11, a12, a13, a14,
		a21, a22, a23, a24,
		a31, a32, a33, a34,
		a41, a42, a43, a44,
	], [
		b11, b12, b13, b14,
		b21, b22, b23, b24,
		b31, b32, b33, b34,
		b41, b42, b43, b44,
	]) => false
		|| _neq(a11, b11) || _neq(a12, b12) || _neq(a13, b13) || _neq(a14, b14)
		|| _neq(a21, b21) || _neq(a22, b22) || _neq(a23, b23) || _neq(a24, b24)
		|| _neq(a31, b31) || _neq(a32, b32) || _neq(a33, b33) || _neq(a34, b34)
		|| _neq(a41, b41) || _neq(a42, b42) || _neq(a43, b43) || _neq(a44, b44)

	const scale = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	], s) => [
		_mul(m11, s), _mul(m12, s), _mul(m13, s), _mul(m14, s),
		_mul(m21, s), _mul(m22, s), _mul(m23, s), _mul(m24, s),
		_mul(m31, s), _mul(m32, s), _mul(m33, s), _mul(m34, s),
		_mul(m41, s), _mul(m42, s), _mul(m43, s), _mul(m44, s),
	]
	const scaleTo = (dst, [
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	], s) => {
		dst.length = 16

		dst[M11] = _mul(m11, s)
		dst[M12] = _mul(m12, s)
		dst[M13] = _mul(m13, s)
		dst[M14] = _mul(m14, s)

		dst[M21] = _mul(m21, s)
		dst[M22] = _mul(m22, s)
		dst[M23] = _mul(m23, s)
		dst[M24] = _mul(m24, s)

		dst[M31] = _mul(m31, s)
		dst[M32] = _mul(m32, s)
		dst[M33] = _mul(m33, s)
		dst[M34] = _mul(m34, s)

		dst[M41] = _mul(m41, s)
		dst[M42] = _mul(m42, s)
		dst[M43] = _mul(m43, s)
		dst[M44] = _mul(m44, s)

		return dst
	}
	const scale$$$ = (m, s) => {
		const [
			m11, m12, m13, m14,
			m21, m22, m23, m24,
			m31, m32, m33, m34,
			m41, m42, m43, m44,
		] = m

		m[M11] = _mul(m11, s)
		m[M12] = _mul(m12, s)
		m[M13] = _mul(m13, s)
		m[M14] = _mul(m14, s)

		m[M21] = _mul(m21, s)
		m[M22] = _mul(m22, s)
		m[M23] = _mul(m23, s)
		m[M24] = _mul(m24, s)

		m[M31] = _mul(m31, s)
		m[M32] = _mul(m32, s)
		m[M33] = _mul(m33, s)
		m[M34] = _mul(m34, s)

		m[M41] = _mul(m41, s)
		m[M42] = _mul(m42, s)
		m[M43] = _mul(m43, s)
		m[M44] = _mul(m44, s)

		return m
	}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const determinant = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => {
		/* eslint-disable camelcase */
		const _mul_m33_m44 = _mul(m33, m44)
		const _mul_m34_m43 = _mul(m34, m43)
		const _sub__mul_m33_m44__mul_m34_m43 = _sub(_mul_m33_m44, _mul_m34_m43)
		const _sub__mul_m34_m43__mul_m33_m44 = _neg(_sub__mul_m33_m44__mul_m34_m43)
		const _mul_m34_m42 = _mul(m34, m42)
		const _mul_m32_m44 = _mul(m32, m44)
		const _sub__mul_m34_m42__mul_m32_m44 = _sub(_mul_m34_m42, _mul_m32_m44)
		const _sub__mul_m32_m44__mul_m34_m42 = _neg(_sub__mul_m34_m42__mul_m32_m44)
		const _mul_m32_m43 = _mul(m32, m43)
		const _mul_m33_m42 = _mul(m33, m42)
		const _sub__mul_m32_m43__mul_m33_m42 = _sub(_mul_m32_m43, _mul_m33_m42)
		const _sub__mul_m33_m42__mul_m32_m43 = _neg(_sub__mul_m32_m43__mul_m33_m42)
		const _det_part_1 = _add3(
			_mul(m22, _sub__mul_m33_m44__mul_m34_m43),
			_mul(m23, _sub__mul_m34_m42__mul_m32_m44),
			_mul(m24, _sub__mul_m32_m43__mul_m33_m42),
		)
		const _det_part_2 = _add3(
			_mul(m12, _sub__mul_m34_m43__mul_m33_m44),
			_mul(m13, _sub__mul_m32_m44__mul_m34_m42),
			_mul(m14, _sub__mul_m33_m42__mul_m32_m43),
		)
		const _mul_m12_m23 = _mul(m12, m23)
		const _mul_m13_m22 = _mul(m13, m22)
		const _sub__mul_m12_m23__mul_m13_m22 = _sub(_mul_m12_m23, _mul_m13_m22)
		const _sub__mul_m13_m22__mul_m12_m23 = _neg(_sub__mul_m12_m23__mul_m13_m22)
		const _mul_m14_m22 = _mul(m14, m22)
		const _mul_m12_m24 = _mul(m12, m24)
		const _sub__mul_m14_m22__mul_m12_m24 = _sub(_mul_m14_m22, _mul_m12_m24)
		const _sub__mul_m12_m24__mul_m14_m22 = _neg(_sub__mul_m14_m22__mul_m12_m24)
		const _mul_m13_m24 = _mul(m13, m24)
		const _mul_m14_m23 = _mul(m14, m23)
		const _sub__mul_m13_m24__mul_m14_m23 = _sub(_mul_m13_m24, _mul_m14_m23)
		const _sub__mul_m14_m23__mul_m13_m24 = _neg(_sub__mul_m13_m24__mul_m14_m23)
		const _det_part_3 = _add3(
			_mul(m42, _sub__mul_m13_m24__mul_m14_m23),
			_mul(m44, _sub__mul_m12_m23__mul_m13_m22),
			_mul(m44, _sub__mul_m14_m22__mul_m12_m24),
		)
		const _det_part_4 = _add3(
			_mul(m32, _sub__mul_m14_m23__mul_m13_m24),
			_mul(m34, _sub__mul_m13_m22__mul_m12_m23),
			_mul(m34, _sub__mul_m12_m24__mul_m14_m22),
		)
		/* eslint-enable camelcase */

		return _add(
			_add(_mul(m11, _det_part_1), _mul(m21, _det_part_2)),
			_add(_mul(m31, _det_part_3), _mul(m41, _det_part_4)),
		)
	}

	const inverse = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => {
		/* eslint-disable camelcase */
		const _mul_m33_m44 = _mul(m33, m44)
		const _mul_m34_m43 = _mul(m34, m43)
		const _sub__mul_m33_m44__mul_m34_m43 = _sub(_mul_m33_m44, _mul_m34_m43)
		const _sub__mul_m34_m43__mul_m33_m44 = _neg(_sub__mul_m33_m44__mul_m34_m43)
		const _mul_m34_m42 = _mul(m34, m42)
		const _mul_m32_m44 = _mul(m32, m44)
		const _sub__mul_m34_m42__mul_m32_m44 = _sub(_mul_m34_m42, _mul_m32_m44)
		const _sub__mul_m32_m44__mul_m34_m42 = _neg(_sub__mul_m34_m42__mul_m32_m44)
		const _mul_m32_m43 = _mul(m32, m43)
		const _mul_m33_m42 = _mul(m33, m42)
		const _sub__mul_m32_m43__mul_m33_m42 = _sub(_mul_m32_m43, _mul_m33_m42)
		const _sub__mul_m33_m42__mul_m32_m43 = _neg(_sub__mul_m32_m43__mul_m33_m42)
		const _det_part_1 = _add3(
			_mul(m22, _sub__mul_m33_m44__mul_m34_m43),
			_mul(m23, _sub__mul_m34_m42__mul_m32_m44),
			_mul(m24, _sub__mul_m32_m43__mul_m33_m42),
		)
		const _det_part_2 = _add3(
			_mul(m12, _sub__mul_m34_m43__mul_m33_m44),
			_mul(m13, _sub__mul_m32_m44__mul_m34_m42),
			_mul(m14, _sub__mul_m33_m42__mul_m32_m43),
		)
		const _mul_m12_m23 = _mul(m12, m23)
		const _mul_m13_m22 = _mul(m13, m22)
		const _sub__mul_m12_m23__mul_m13_m22 = _sub(_mul_m12_m23, _mul_m13_m22)
		const _sub__mul_m13_m22__mul_m12_m23 = _neg(_sub__mul_m12_m23__mul_m13_m22)
		const _mul_m14_m22 = _mul(m14, m22)
		const _mul_m12_m24 = _mul(m12, m24)
		const _sub__mul_m14_m22__mul_m12_m24 = _sub(_mul_m14_m22, _mul_m12_m24)
		const _sub__mul_m12_m24__mul_m14_m22 = _neg(_sub__mul_m14_m22__mul_m12_m24)
		const _mul_m13_m24 = _mul(m13, m24)
		const _mul_m14_m23 = _mul(m14, m23)
		const _sub__mul_m13_m24__mul_m14_m23 = _sub(_mul_m13_m24, _mul_m14_m23)
		const _sub__mul_m14_m23__mul_m13_m24 = _neg(_sub__mul_m13_m24__mul_m14_m23)
		const _det_part_3 = _add3(
			_mul(m42, _sub__mul_m13_m24__mul_m14_m23),
			_mul(m44, _sub__mul_m12_m23__mul_m13_m22),
			_mul(m44, _sub__mul_m14_m22__mul_m12_m24),
		)
		const _det_part_4 = _add3(
			_mul(m32, _sub__mul_m14_m23__mul_m13_m24),
			_mul(m34, _sub__mul_m13_m22__mul_m12_m23),
			_mul(m34, _sub__mul_m12_m24__mul_m14_m22),
		)
		/* eslint-enable camelcase */

		const det = _add(
			_add(_mul(m11, _det_part_1), _mul(m21, _det_part_2)),
			_add(_mul(m31, _det_part_3), _mul(m41, _det_part_4)),
		)

		if (_eq(det, _ZERO)) { throw new Error("singular matrix") }
		const invDet = _inverse(det)

		/* eslint-disable camelcase */
		const _mul_m31_m44 = _mul(m31, m44)
		const _mul_m34_m41 = _mul(m34, m41)
		const _sub__mul_m31_m44__mul_m34_m41 = _sub(_mul_m31_m44, _mul_m34_m41)
		const _sub__mul_m34_m41__mul_m31_m44 = _neg(_sub__mul_m31_m44__mul_m34_m41)
		const _mul_m33_m41 = _mul(m33, m41)
		const _mul_m31_m43 = _mul(m31, m43)
		const _sub__mul_m33_m41__mul_m31_m43 = _sub(_mul_m33_m41, _mul_m31_m43)
		const _sub__mul_m31_m43__mul_m33_m41 = _neg(_sub__mul_m33_m41__mul_m31_m43)
		const _mul_m31_m42 = _mul(m31, m42)
		const _mul_m32_m41 = _mul(m32, m41)
		const _sub__mul_m31_m42__mul_m32_m41 = _sub(_mul_m31_m42, _mul_m32_m41)
		const _sub__mul_m32_m41__mul_m31_m42 = _neg(_sub__mul_m31_m42__mul_m32_m41)
		const _mul_m11_m24 = _mul(m11, m24)
		const _mul_m14_m21 = _mul(m14, m21)
		const _sub__mul_m11_m24__mul_m14_m21 = _sub(_mul_m11_m24, _mul_m14_m21)
		const _sub__mul_m14_m21__mul_m11_m24 = _neg(_sub__mul_m11_m24__mul_m14_m21)
		const _mul_m13_m21 = _mul(m13, m21)
		const _mul_m11_m23 = _mul(m11, m23)
		const _sub__mul_m13_m21__mul_m11_m23 = _sub(_mul_m13_m21, _mul_m11_m23)
		const _sub__mul_m11_m23__mul_m13_m21 = _neg(_sub__mul_m13_m21__mul_m11_m23)
		const _mul_m11_m22 = _mul(m11, m22)
		const _mul_m12_m21 = _mul(m12, m21)
		const _sub__mul_m11_m22__mul_m12_m21 = _sub(_mul_m11_m22, _mul_m12_m21)
		const _sub__mul_m12_m21__mul_m11_m22 = _neg(_sub__mul_m11_m22__mul_m12_m21)
		/* eslint-enable camelcase */

		return [
			_mul(invDet, _det_part_1),
			_mul(invDet, _det_part_2),
			_mul(invDet, _add3(
				_mul(m42, _sub__mul_m13_m24__mul_m14_m23),
				_mul(m43, _sub__mul_m14_m22__mul_m12_m24),
				_mul(m44, _sub__mul_m12_m23__mul_m13_m22),
			)),
			_mul(invDet, _add3(
				_mul(m32, _sub__mul_m14_m23__mul_m13_m24),
				_mul(m33, _sub__mul_m12_m24__mul_m14_m22),
				_mul(m34, _sub__mul_m13_m22__mul_m12_m23),
			)),

			_mul(invDet, _add3(
				_mul(m21, _sub__mul_m34_m43__mul_m33_m44),
				_mul(m23, _sub__mul_m31_m44__mul_m34_m41),
				_mul(m24, _sub__mul_m33_m41__mul_m31_m43),
			)),
			_mul(invDet, _add3(
				_mul(m11, _sub__mul_m33_m44__mul_m34_m43),
				_mul(m13, _sub__mul_m34_m41__mul_m31_m44),
				_mul(m14, _sub__mul_m31_m43__mul_m33_m41),
			)),
			_mul(invDet, _add3(
				_mul(m41, _sub__mul_m14_m23__mul_m13_m24),
				_mul(m43, _sub__mul_m11_m24__mul_m14_m21),
				_mul(m44, _sub__mul_m13_m21__mul_m11_m23),
			)),
			_mul(invDet, _add3(
				_mul(m31, _sub__mul_m13_m24__mul_m14_m23),
				_mul(m33, _sub__mul_m14_m21__mul_m11_m24),
				_mul(m34, _sub__mul_m11_m23__mul_m13_m21),
			)),

			_mul(invDet, _add3(
				_mul(m21, _sub__mul_m32_m44__mul_m34_m42),
				_mul(m22, _sub__mul_m34_m41__mul_m31_m44),
				_mul(m24, _sub__mul_m31_m42__mul_m32_m41),
			)),
			_mul(invDet, _add3(
				_mul(m11, _sub__mul_m34_m42__mul_m32_m44),
				_mul(m12, _sub__mul_m31_m44__mul_m34_m41),
				_mul(m14, _sub__mul_m32_m41__mul_m31_m42),
			)),
			_mul(invDet, _add3(
				_mul(m41, _sub__mul_m12_m24__mul_m14_m22),
				_mul(m42, _sub__mul_m14_m21__mul_m11_m24),
				_mul(m44, _sub__mul_m11_m22__mul_m12_m21),
			)),
			_mul(invDet, _add3(
				_mul(m31, _sub__mul_m14_m22__mul_m12_m24),
				_mul(m32, _sub__mul_m11_m24__mul_m14_m21),
				_mul(m34, _sub__mul_m12_m21__mul_m11_m22),
			)),

			_mul(invDet, _add3(
				_mul(m21, _sub__mul_m33_m42__mul_m32_m43),
				_mul(m22, _sub__mul_m31_m43__mul_m33_m41),
				_mul(m23, _sub__mul_m32_m41__mul_m31_m42),
			)),
			_mul(invDet, _add3(
				_mul(m11, _sub__mul_m32_m43__mul_m33_m42),
				_mul(m12, _sub__mul_m33_m41__mul_m31_m43),
				_mul(m13, _sub__mul_m31_m42__mul_m32_m41),
			)),
			_mul(invDet, _add3(
				_mul(m41, _sub__mul_m13_m22__mul_m12_m23),
				_mul(m42, _sub__mul_m11_m23__mul_m13_m21),
				_mul(m43, _sub__mul_m12_m21__mul_m11_m22),
			)),
			_mul(invDet, _add3(
				_mul(m31, _sub__mul_m12_m23__mul_m13_m22),
				_mul(m32, _sub__mul_m13_m21__mul_m11_m23),
				_mul(m33, _sub__mul_m11_m22__mul_m12_m21),
			)),
		]
	}

	const fromNumbers = (
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	) => [
		_fromNumber(m11), _fromNumber(m12), _fromNumber(m13), _fromNumber(m14),
		_fromNumber(m21), _fromNumber(m22), _fromNumber(m23), _fromNumber(m24),
		_fromNumber(m31), _fromNumber(m32), _fromNumber(m33), _fromNumber(m34),
		_fromNumber(m41), _fromNumber(m42), _fromNumber(m43), _fromNumber(m44),
	]

	const toNumbers = ([
		m11, m12, m13, m14,
		m21, m22, m23, m24,
		m31, m32, m33, m34,
		m41, m42, m43, m44,
	]) => [
		_toNumber(m11), _toNumber(m12), _toNumber(m13), _toNumber(m14),
		_toNumber(m21), _toNumber(m22), _toNumber(m23), _toNumber(m24),
		_toNumber(m31), _toNumber(m32), _toNumber(m33), _toNumber(m34),
		_toNumber(m41), _toNumber(m42), _toNumber(m43), _toNumber(m44),
	]

	return {
		Algebra,
		...{ identity },
		...{ isFinite, isNaN },
		...{ neg, add, sub, mul, div },
		...{ transpose, mulMatVec, mulMatMat },
		...{ eq, neq },
		...{ scale },
		...{ determinant, inverse },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
