const { memoize } = require('@kmamal/util/function/memoize')
const { copy: copyArray } = require('@kmamal/util/array/copy')
const { map } = require('@kmamal/util/array/map')
const { forEach, forEachTwo, forEachThree } = require('@kmamal/util/array/for-each')
const { combine } = require('@kmamal/util/array/combine')

const mapTo = map.to
const map$$$ = map.$$$
const combineTo = combine.to
const combine$$$ = combine.$$$

const _tmp = {}

const defineFor = memoize((Algebra) => {
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
	const _inverse$$$ = _inverse.$$$
	const _sqrt$$$ = _sqrt.$$$

	const _ZERO = Algebra.fromNumber(0)
	const _ONE = Algebra.fromNumber(1)

	const unit = isPrimitive
		? (N, index) => {
			const v = new Array(N)
			for (let i = 0; i < N; i++) {
				v[i] = i === index ? _ONE : _ZERO
			}
			return v
		}
		: (N, index) => {
			const v = new Array(N)
			for (let i = 0; i < N; i++) {
				v[i] = _clone(i === index ? _ONE : _ZERO)
			}
			return v
		}

	const isFinite = (v) => v.every(_isFinite)
	const isNaN = (v) => v.some(_isNaN)

	const clone = isPrimitive
		? (v) => [ ...v ]
		: (v) => map(v, _clone)
	const copy = isPrimitive
		? (dst, v) => copyArray(dst, v)
		: (dst, v) => forEachTwo(dst, v, _copy)

	const neg = (v) => map(v, _neg)
	const negTo = isPrimitive
		? (dst, v) => mapTo(dst, v, _neg)
		: (dst, v) => forEachTwo(dst, v, _negTo)
	const neg$$$ = isPrimitive
		? (v) => map$$$(v, _neg)
		: (v) => forEach(v, _neg$$$)
	neg.to = negTo
	neg.$$$ = neg$$$

	const abs = (v) => map(v, _abs)
	const absTo = isPrimitive
		? (dst, v) => mapTo(dst, v, _abs)
		: (dst, v) => forEachTwo(dst, v, _absTo)
	const abs$$$ = isPrimitive
		? (v) => map$$$(v, _abs)
		: (v) => forEach(v, _abs$$$)
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

	const dot = isPrimitive
		? (a, b) => {
			let _res = _ZERO
			for (let i = 0; i < a.length; i++) {
				_res += a[i] * b[i]
			}
			return _res
		}
		: (a, b) => {
			const _res = _mul(a[0], b[0])
			for (let i = 1; i < a.length; i++) {
				_add$$$(_res, _mulTo(_tmp, a[i], b[i]))
			}
			return _res
		}
	const dotTo = !isPrimitive
		? (dst, a, b) => {
			_mulTo(dst, a[0], b[0])
			for (let i = 1; i < a.length; i++) {
				_add$$$(dst, _mulTo(_tmp, a[i], b[i]))
			}
			return dst
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

	const scale = (v, s) => map(v, (y) => _mul(y, s))
	const scaleTo = isPrimitive
		? (dst, v, s) => {
			const { length } = v
			dst.length = length
			for (let i = 0; i < length; i++) {
				dst[i] = v[i] * s
			}
			return dst
		}
		: (dst, v, s) => {
			const { length } = v
			dst.length = length
			for (let i = 0; i < length; i++) {
				_mulTo(dst[i], v[i], s)
			}
			return dst
		}
	const scale$$$ = isPrimitive
		? (v, s) => {
			for (let i = 0; i < v.length; i++) {
				v[i] *= s
			}
			return v
		}
		: (v, s) => {
			for (let i = 0; i < v.length; i++) {
				_mul$$$(v[i], s)
			}
			return v
		}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const normSquared = (v) => dot(v, v)
	const normSquaredTo = !isPrimitive ? (dst, v) => dotTo(dst, v, v) : null
	normSquared.to = normSquaredTo

	const norm = (v) => _sqrt(normSquared(v))
	const normTo = !isPrimitive
		? (dst, v) => _sqrt$$$(normSquaredTo(dst, v))
		: null
	norm.to = normTo

	const normalize = isPrimitive
		? (v) => scale(v, _ONE / norm(v))
		: (v) => scale(v, _inverse$$$(normTo(_tmp, v)))
	const normalizeTo = isPrimitive
		? (dst, v) => scaleTo(dst, v, _ONE / norm(v))
		: (dst, v) => scaleTo(dst, v, _inverse$$$(normTo(_tmp, v)))
	const normalize$$$ = isPrimitive
		? (v) => scale$$$(v, _ONE / norm(v))
		: (v) => scale$$$(v, _inverse$$$(normTo(_tmp, v)))
	normalize.to = normalizeTo
	normalize.$$$ = normalize$$$

	const fromNumbers = (...nums) => map$$$(nums, _fromNumber)
	const toNumbers = (v) => map(v, _toNumber)

	return {
		Algebra,
		...{ unit },
		...{ isFinite, isNaN },
		...{ clone, copy },
		...{ neg, abs, add, sub, mul, div, dot },
		...{ eq, neq },
		...{ scale, norm, normSquared, normalize },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
