const { memoize } = require('@kmamal/util/function/memoize')
const { every } = require('@kmamal/util/array/every')
const { map } = require('@kmamal/util/array/map')
const { combine } = require('@kmamal/util/array/combine')

const mapTo = map.to
const map$$$ = map.$$$
const combineTo = combine.to
const combine$$$ = combine.$$$

const _tmp = {}

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
		neq: _neq,
		sqrt: _sqrt,
		_fromNumber,
		_toNumber,
	} = Domain

	const _neg$$$ = _neg.$$$
	const _abs$$$ = _abs.$$$
	const _add$$$ = _add.$$$
	const _sub$$$ = _sub.$$$
	const _mulTo = _mul.to
	const _mul$$$ = _mul.$$$
	const _div$$$ = _div.$$$
	const _inverse$$$ = _inverse.$$$
	const _sqrt$$$ = _sqrt.$$$

	const _ZERO = Domain.fromNumber(0)
	const _ONE = Domain.fromNumber(1)

	const isFinite = (x) => every(x, _isFinite)
	const isNaN = (x) => every(x, _isNaN)

	const neg = (x) => map(x, _neg)
	const negTo = (dst, x) => mapTo(dst, x, _neg)
	const neg$$$ = isPrimitive
		? (x) => map$$$(x, _neg)
		: (x) => map(x, _neg$$$)
	neg.to = negTo
	neg.$$$ = neg$$$

	const abs = (x) => map(x, _abs)
	const absTo = (dst, x) => mapTo(dst, x, _abs)
	const abs$$$ = isPrimitive
		? (x) => map$$$(x, _abs)
		: (x) => map(x, _abs$$$)
	abs.to = absTo
	abs.$$$ = abs$$$

	const add = (a, b) => combine(a, b, _add)
	const addTo = (dst, a, b) => combineTo(dst, a, b, _add)
	const add$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _add)
		: (a, b) => combine(a, b, _add$$$)
	add.to = addTo
	add.$$$ = add$$$

	const sub = (a, b) => combine(a, b, _sub)
	const subTo = (dst, a, b) => combineTo(dst, a, b, _sub)
	const sub$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _sub)
		: (a, b) => combine(a, b, _sub$$$)
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = (a, b) => combine(a, b, _mul)
	const mulTo = (dst, a, b) => combineTo(dst, a, b, _mul)
	const mul$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _mul)
		: (a, b) => combine(a, b, _mul$$$)
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = (a, b) => combine(a, b, _div)
	const divTo = (dst, a, b) => combineTo(dst, a, b, _div)
	const div$$$ = isPrimitive
		? (a, b) => combine$$$(a, b, _div)
		: (a, b) => combine(a, b, _div$$$)
	div.to = divTo
	div.$$$ = div$$$

	const dot = isPrimitive
		? (a, b) => {
			const length = Math.max(a.length, b.length)
			let _res = _ZERO
			for (let i = 0; i < length; i++) {
				_res += a[i] * b[i]
			}
			return _res
		}
		: (a, b) => {
			const length = Math.max(a.length, b.length)
			const _res = _clone(_ZERO)
			for (let i = 0; i < length; i++) {
				_add$$$(_res, _mulTo(_tmp, a[i], b[i]))
			}
			return _res
		}
	const dotTo = !isPrimitive
		? (_dst, a, b) => {
			const length = Math.max(a.length, b.length)
			_copy(_dst, _ZERO)
			for (let i = 0; i < length; i++) {
				_add$$$(_dst, _mulTo(_tmp, a[i], b[i]))
			}
			return _dst
		}
		: null
	dot.to = dotTo

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

	const scale = (x, _v) => map(x, (y) => _mul(y, _v))
	const scaleTo = isPrimitive
		? (dst, x, _v) => {
			for (let i = 0; i < x.length; i++) {
				dst[i] = x[i] * _v
			}
			return dst
		}
		: (dst, x, _v) => {
			for (let i = 0; i < x.length; i++) {
				_mulTo(dst[i], x[i], _v)
			}
			return dst
		}
	const scale$$$ = isPrimitive
		? (x, _v) => {
			for (let i = 0; i < x.length; i++) {
				x[i] *= _v
			}
			return x
		}
		: (x, _v) => {
			for (let i = 0; i < x.length; i++) {
				_mul$$$(x[i], _v)
			}
			return x
		}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const normSquared = (x) => dot(x, x)
	const normSquaredTo = !isPrimitive ? (_dst, x) => dotTo(_dst, x, x) : null
	normSquared.to = normSquaredTo

	const norm = (x) => _sqrt(normSquared(x))
	const normTo = !isPrimitive
		? (_dst, x) => _sqrt$$$(normSquaredTo(_dst, x))
		: null
	norm.to = normTo

	const normalize = isPrimitive
		? (a) => scale(a, _ONE / norm(a))
		: (a) => scale(a, _inverse$$$(normTo(_tmp, a)))
	const normalizeTo = isPrimitive
		? (dst, a) => scaleTo(dst, a, _ONE / norm(a))
		: (dst, a) => scaleTo(dst, a, _inverse$$$(normTo(_tmp, a)))
	const normalize$$$ = isPrimitive
		? (a) => scale$$$(a, _ONE / norm(a))
		: (a) => scale$$$(a, _inverse$$$(normTo(_tmp, a)))
	normalize.to = normalizeTo
	normalize.$$$ = normalize$$$

	const fromNumbers = (...nums) => map$$$(nums, _fromNumber)
	const toNumbers = (vec) => map(vec, _toNumber)

	return {
		...{ isFinite, isNaN },
		...{ neg, abs, add, sub, mul, div, dot },
		...{ eq, neq },
		...{ scale, norm, normSquared, normalize },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
