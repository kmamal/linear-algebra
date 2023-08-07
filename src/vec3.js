const { memoize } = require('@kmamal/util/function/memoize')

const X = 0
const Y = 1
const Z = 2

const _tmp1 = {}
const _tmp2 = {}

const defineFor = memoize((Domain) => {
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
		inverse: _inverse,
		eq: _eq,
		neq: _neq,
		sqrt: _sqrt,
		acos: _acos,
		max: _max,
		min: _min,
		fromNumber: _fromNumber,
		toNumber: _toNumber,
	} = Domain

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
	const _inverse$$$ = _inverse.$$$
	const _sqrt$$$ = _sqrt.$$$
	const _min$$$ = _min.$$$
	const _max$$$ = _max.$$$
	const _acos$$$ = _acos.$$$

	const _MINUS_ONE = _fromNumber(-1)
	const _ZERO = _fromNumber(0)
	const _ONE = _fromNumber(1)
	const _TWO = _fromNumber(2)

	const isFinite = (a) => true
		&& _isFinite(a[X])
		&& _isFinite(a[Y])
		&& _isFinite(a[Z])

	const isNaN = (a) => false
		|| _isNaN(a[X])
		|| _isNaN(a[Y])
		|| _isNaN(a[Z])

	const x = isPrimitive
		? (a) => a[X]
		: (a) => _clone(a[X])
	const xTo = !isPrimitive
		? (_dst, a) => _copy(_dst, a[X])
		: null
	x.to = xTo

	const y = isPrimitive
		? (a) => a[X]
		: (a) => _clone(a[X])
	const yTo = !isPrimitive
		? (_dst, a) => _copy(_dst, a[X])
		: null
	y.to = yTo

	const z = isPrimitive
		? (a) => a[X]
		: (a) => _clone(a[X])
	const zTo = !isPrimitive
		? (_dst, a) => _copy(_dst, a[X])
		: null
	z.to = zTo

	const clone = (a) => [
		a[X],
		a[Y],
		a[Z],
	]
	const copy = (dst, a) => {
		dst[X] = a[X]
		dst[Y] = a[Y]
		dst[Z] = a[Z]
	}

	const neg = isPrimitive
		? (a) => [
			-a[X],
			-a[Y],
			-a[Z],
		]
		: (a) => [
			_neg(a[X]),
			_neg(a[Y]),
			_neg(a[Z]),
		]
	const negTo = isPrimitive
		? (dst, a) => {
			dst[X] = -a[X]
			dst[Y] = -a[Y]
			dst[Z] = -a[Z]
			return dst
		}
		: (dst, a) => {
			_negTo(dst[X], a[X])
			_negTo(dst[Y], a[Y])
			_negTo(dst[Z], a[Z])
			return dst
		}
	const neg$$$ = isPrimitive
		? (a) => {
			a[X] = -a[X]
			a[Y] = -a[Y]
			a[Z] = -a[Z]
			return a
		}
		: (a) => {
			_neg$$$(a[X])
			_neg$$$(a[Y])
			_neg$$$(a[Z])
			return a
		}
	neg.to = negTo
	neg.$$$ = neg$$$

	const abs = isPrimitive
		? (a) => [
			_abs(a[X]),
			_abs(a[Y]),
			_abs(a[Z]),
		]
		: (a) => [
			_abs(a[X]),
			_abs(a[Y]),
			_abs(a[Z]),
		]
	const absTo = isPrimitive
		? (dst, a) => {
			dst[X] = _abs(a[X])
			dst[Y] = _abs(a[Y])
			dst[Z] = _abs(a[Z])
			return dst
		}
		: (dst, a) => {
			_absTo(dst[X], a[X])
			_absTo(dst[Y], a[Y])
			_absTo(dst[Z], a[Z])
			return dst
		}
	const abs$$$ = isPrimitive
		? (a) => {
			a[X] = _abs(a[X])
			a[Y] = _abs(a[Y])
			a[Z] = _abs(a[Z])
			return a
		}
		: (a) => {
			_abs$$$(a[X])
			_abs$$$(a[Y])
			_abs$$$(a[Z])
			return a
		}
	abs.to = absTo
	abs.$$$ = abs$$$

	const add = isPrimitive
		? (a, b) => [
			a[X] + b[X],
			a[Y] + b[Y],
			a[Z] + b[Z],
		]
		: (a, b) => [
			_add(a[X], b[X]),
			_add(a[Y], b[Y]),
			_add(a[Z], b[Z]),
		]
	const addTo = isPrimitive
		? (dst, a, b) => {
			dst[X] = a[X] + b[X]
			dst[Y] = a[Y] + b[Y]
			dst[Z] = a[Z] + b[Z]
			return dst
		}
		: (dst, a, b) => {
			_addTo(dst[X], a[X], b[X])
			_addTo(dst[Y], a[Y], b[Y])
			_addTo(dst[Z], a[Z], b[Z])
			return dst
		}
	const add$$$ = isPrimitive
		? (a, b) => {
			a[X] += b[X]
			a[Y] += b[Y]
			a[Z] += b[Z]
			return a
		}
		: (a, b) => {
			_add$$$(a[X], b[X])
			_add$$$(a[Y], b[Y])
			_add$$$(a[Z], b[Z])
			return a
		}
	add.to = addTo
	add.$$$ = add$$$

	const sub = isPrimitive
		? (a, b) => [
			a[X] - b[X],
			a[Y] - b[Y],
			a[Z] - b[Z],
		]
		: (a, b) => [
			_sub(a[X], b[X]),
			_sub(a[Y], b[Y]),
			_sub(a[Z], b[Z]),
		]
	const subTo = isPrimitive
		? (dst, a, b) => {
			dst[X] = a[X] - b[X]
			dst[Y] = a[Y] - b[Y]
			dst[Z] = a[Z] - b[Z]
			return dst
		}
		: (dst, a, b) => {
			_subTo(dst[X], a[X], b[X])
			_subTo(dst[Y], a[Y], b[Y])
			_subTo(dst[Z], a[Z], b[Z])
			return dst
		}
	const sub$$$ = isPrimitive
		? (a, b) => {
			a[X] -= b[X]
			a[Y] -= b[Y]
			a[Z] -= b[Z]
			return a
		}
		: (a, b) => {
			_sub$$$(a[X], b[X])
			_sub$$$(a[Y], b[Y])
			_sub$$$(a[Z], b[Z])
			return a
		}
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = isPrimitive
		? (a, b) => [
			a[X] * b[X],
			a[Y] * b[Y],
			a[Z] * b[Z],
		]
		: (a, b) => [
			_mul(a[X], b[X]),
			_mul(a[Y], b[Y]),
			_mul(a[Z], b[Z]),
		]
	const mulTo = isPrimitive
		? (dst, a, b) => {
			dst[X] = a[X] * b[X]
			dst[Y] = a[Y] * b[Y]
			dst[Z] = a[Z] * b[Z]
			return dst
		}
		: (dst, a, b) => {
			_mulTo(dst[X], a[X], b[X])
			_mulTo(dst[Y], a[Y], b[Y])
			_mulTo(dst[Z], a[Z], b[Z])
			return dst
		}
	const mul$$$ = isPrimitive
		? (a, b) => {
			a[X] *= b[X]
			a[Y] *= b[Y]
			a[Z] *= b[Z]
			return a
		}
		: (a, b) => {
			_mul$$$(a[X], b[X])
			_mul$$$(a[Y], b[Y])
			_mul$$$(a[Z], b[Z])
			return a
		}
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = isPrimitive
		? (a, b) => [
			a[X] / b[X],
			a[Y] / b[Y],
			a[Z] / b[Z],
		]
		: (a, b) => [
			_div(a[X], b[X]),
			_div(a[Y], b[Y]),
			_div(a[Z], b[Z]),
		]
	const divTo = isPrimitive
		? (dst, a, b) => {
			dst[X] = a[X] / b[X]
			dst[Y] = a[Y] / b[Y]
			dst[Z] = a[Z] / b[Z]
			return dst
		}
		: (dst, a, b) => {
			_divTo(dst[X], a[X], b[X])
			_divTo(dst[Y], a[Y], b[Y])
			_divTo(dst[Z], a[Z], b[Z])
			return dst
		}
	const div$$$ = isPrimitive
		? (a, b) => {
			a[X] /= b[X]
			a[Y] /= b[Y]
			a[Z] /= b[Z]
			return a
		}
		: (a, b) => {
			_div$$$(a[X], b[X])
			_div$$$(a[Y], b[Y])
			_div$$$(a[Z], b[Z])
			return a
		}
	div.to = divTo
	div.$$$ = div$$$

	const dot = isPrimitive
		? (a, b) => _ZERO
			+ a[X] * b[X]
			+ a[Y] * b[Y]
			+ a[Z] * b[Z]
		: (a, b) => _add(
			_add(
				_mul(a[X], b[X]),
				_mul(a[Y], b[Y]),
			),
			_mul(a[Z], b[Z]),
		)
	const dotTo = !isPrimitive
		? (_dst, a, b) => _add$$$(
			_addTo(
				_dst,
				_mul(a[X], b[X]),
				_mul(a[Y], b[Y]),
			),
			_mul(a[Z], b[Z]),
		)
		: null
	dot.to = dotTo

	const cross = isPrimitive
		? (a, b) => [
			a[Y] * b[Z] - a[Z] * b[Y],
			a[Z] * b[X] - a[X] * b[Z],
			a[X] * b[Y] - a[Y] * b[X],
		]
		: (a, b) => [
			_sub(_mul(a[Y], b[Z]), _mul(a[Z], b[Y])),
			_sub(_mul(a[Z], b[X]), _mul(a[X], b[Z])),
			_sub(_mul(a[X], b[Y]), _mul(a[Y], b[X])),
		]

	const angle2 = isPrimitive
		? (a, b) => {
			const cosa = dot(a, b) / (norm(a) * norm(b))
			return _acos(_min(_max(cosa, _MINUS_ONE), _ONE))
		}
		: (a, b) => {
			_mul$$$(normTo(_tmp1, a), normTo(_tmp2, b))
			dotTo(_tmp2, a, b)
			const cosa = _div$$$(_tmp2, _tmp1)
			return _acos$$$(_min$$$(_max$$$(cosa, _MINUS_ONE), _ONE))
		}

	const eq = isPrimitive
		? (a, b) => true
			&& a[X] === b[X]
			&& a[Y] === b[Y]
			&& a[Z] === b[Z]
		: (a, b) => true
			&& _eq(a[X], b[X])
			&& _eq(a[Y], b[Y])
			&& _eq(a[Z], b[Z])

	const neq = isPrimitive
		? (a, b) => false
			|| a[X] !== b[X]
			|| a[Y] !== b[Y]
			|| a[Z] !== b[Z]
		: (a, b) => false
			|| _neq(a[X], b[X])
			|| _neq(a[Y], b[Y])
			|| _neq(a[Z], b[Z])

	const scale = isPrimitive
		? (a, _v) => [
			a[X] * _v,
			a[Y] * _v,
			a[Z] * _v,
		]
		: (a, _v) => [
			_mul(a[X], _v),
			_mul(a[Y], _v),
			_mul(a[Z], _v),
		]
	const scaleTo = isPrimitive
		? (dst, a, _v) => {
			dst[X] = a[X] * _v
			dst[Y] = a[Y] * _v
			dst[Z] = a[Z] * _v
			return dst
		}
		: (dst, a, _v) => {
			_mulTo(dst[X], a[X], _v)
			_mulTo(dst[Y], a[Y], _v)
			_mulTo(dst[Z], a[Z], _v)
			return dst
		}
	const scale$$$ = isPrimitive
		? (a, _v) => {
			a[X] *= _v
			a[Y] *= _v
			a[Z] *= _v
			return a
		}
		: (a, _v) => {
			_mul$$$(a[X], _v)
			_mul$$$(a[Y], _v)
			_mul$$$(a[Z], _v)
			return a
		}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const normSquared = isPrimitive
		? (a) => _ZERO
			+ a[X] ** _TWO
			+ a[Y] ** _TWO
			+ a[Z] ** _TWO
		: (a) => dot(a, a)
	const normSquaredTo = !isPrimitive
		? (_dst, a) => dotTo(_dst, a, a)
		: null

	const norm = isPrimitive
		? (a) => _sqrt(normSquared(a))
		: (a) => _sqrt$$$(normSquared(a))
	const normTo = !isPrimitive
		? (_dst, a) => _sqrt$$$(normSquaredTo(_dst, a))
		: null

	const normalize = isPrimitive
		? (a) => scale(a, _ONE / norm(a))
		: (a) => scale(a, _inverse$$$(normTo(_tmp1, a)))
	const normalizeTo = isPrimitive
		? (dst, a) => scaleTo(dst, a, _ONE / norm(a))
		: (dst, a) => scaleTo(dst, a, _inverse$$$(normTo(_tmp1, a)))
	const normalize$$$ = isPrimitive
		? (a) => scale$$$(a, _ONE / norm(a))
		: (a) => scale$$$(a, _inverse$$$(normTo(_tmp1, a)))
	normalize.to = normalizeTo
	normalize.$$$ = normalize$$$

	const fromNumbers = (_x, _y, _z) => [
		_fromNumber(_x),
		_fromNumber(_y),
		_fromNumber(_z),
	]
	const toNumbers = (a) => [
		_toNumber(a[X]),
		_toNumber(a[Y]),
		_toNumber(a[Z]),
	]

	return {
		...{ X, Y, Z },
		...{ isFinite, isNaN },
		...{ x, y, z, clone, copy },
		...{ neg, abs, add, sub, mul, div },
		...{ dot, cross, angle2 },
		...{ eq, neq },
		...{ scale, norm, normSquared, normalize },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
