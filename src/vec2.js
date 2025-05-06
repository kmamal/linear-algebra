const { memoize } = require('@kmamal/util/function/memoize')

const X = 0
const Y = 1

const _tmp1 = {}
const _tmp2 = {}

const defineFor = memoize((Algebra) => {
	const {
		__info: { isPrimitive },
		NaN: _NAN,
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
		atan2: _atan2,
		max: _max,
		min: _min,
		fromNumber: _fromNumber,
		toNumber: _toNumber,
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
	const _min$$$ = _min.$$$
	const _max$$$ = _max.$$$
	const _acos$$$ = _acos.$$$

	const _MINUS_ONE = _fromNumber(-1)
	const _ZERO = _fromNumber(0)
	const _ONE = _fromNumber(1)
	const _TWO = _fromNumber(2)

	const isFinite = ([ x, y ]) => true
		&& _isFinite(x)
		&& _isFinite(y)

	const isNaN = ([ x, y ]) => false
		|| _isNaN(x)
		|| _isNaN(y)

	const clone = isPrimitive
		? ([ x, y ]) => [
			x,
			y,
		]
		: ([ x, y ]) => [
			_clone(x),
			_clone(y),
		]
	const copy = isPrimitive
		? (dst, [ x, y ]) => {
			dst[X] = x
			dst[Y] = y
		}
		: (dst, [ x, y ]) => {
			_copy(dst[X], x)
			_copy(dst[Y], y)
		}

	const neg = isPrimitive
		? ([ x, y ]) => [
			-x,
			-y,
		]
		: ([ x, y ]) => [
			_neg(x),
			_neg(y),
		]
	const negTo = isPrimitive
		? (dst, [ x, y ]) => {
			dst[X] = -x
			dst[Y] = -y
			return dst
		}
		: (dst, [ x, y ]) => {
			_negTo(dst[X], x)
			_negTo(dst[Y], y)
			return dst
		}
	const neg$$$ = isPrimitive
		? (v) => {
			const [ x, y ] = v
			v[X] = -x
			v[Y] = -y
			return v
		}
		: (v) => {
			const [ x, y ] = v
			_neg$$$(x)
			_neg$$$(y)
			return v
		}
	neg.to = negTo
	neg.$$$ = neg$$$

	const abs = ([ x, y ]) => [
		_abs(x),
		_abs(y),
	]
	const absTo = isPrimitive
		? (dst, [ x, y ]) => {
			dst[X] = _abs(x)
			dst[Y] = _abs(y)
			return dst
		}
		: (dst, [ x, y ]) => {
			_absTo(dst[X], x)
			_absTo(dst[Y], y)
			return dst
		}
	const abs$$$ = isPrimitive
		? (v) => {
			const [ x, y ] = v
			v[X] = _abs(x)
			v[Y] = _abs(y)
			return v
		}
		: (v) => {
			const [ x, y ] = v
			_abs$$$(x)
			_abs$$$(y)
			return v
		}
	abs.to = absTo
	abs.$$$ = abs$$$

	const add = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => [
			ax + bx,
			ay + by,
		]
		: ([ ax, ay ], [ bx, by ]) => [
			_add(ax, bx),
			_add(ay, by),
		]
	const addTo = isPrimitive
		? (dst, [ ax, ay ], [ bx, by ]) => {
			dst[X] = ax + bx
			dst[Y] = ay + by
			return dst
		}
		: (dst, [ ax, ay ], [ bx, by ]) => {
			_addTo(dst[X], ax, bx)
			_addTo(dst[Y], ay, by)
			return dst
		}
	const add$$$ = isPrimitive
		? (a, [ bx, by ]) => {
			a[X] += bx
			a[Y] += by
			return a
		}
		: (a, [ bx, by ]) => {
			const [ ax, ay ] = a
			_add$$$(ax, bx)
			_add$$$(ay, by)
			return a
		}
	add.to = addTo
	add.$$$ = add$$$

	const sub = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => [
			ax - bx,
			ay - by,
		]
		: ([ ax, ay ], [ bx, by ]) => [
			_sub(ax, bx),
			_sub(ay, by),
		]
	const subTo = isPrimitive
		? (dst, [ ax, ay ], [ bx, by ]) => {
			dst[X] = ax - bx
			dst[Y] = ay - by
			return dst
		}
		: (dst, [ ax, ay ], [ bx, by ]) => {
			_subTo(dst[X], ax, bx)
			_subTo(dst[Y], ay, by)
			return dst
		}
	const sub$$$ = isPrimitive
		? (a, [ bx, by ]) => {
			a[X] -= bx
			a[Y] -= by
			return a
		}
		: (a, [ bx, by ]) => {
			const [ ax, ay ] = a
			_sub$$$(ax, bx)
			_sub$$$(ay, by)
			return a
		}
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => [
			ax * bx,
			ay * by,
		]
		: ([ ax, ay ], [ bx, by ]) => [
			_mul(ax, bx),
			_mul(ay, by),
		]
	const mulTo = isPrimitive
		? (dst, [ ax, ay ], [ bx, by ]) => {
			dst[X] = ax * bx
			dst[Y] = ay * by
			return dst
		}
		: (dst, [ ax, ay ], [ bx, by ]) => {
			_mulTo(dst[X], ax, bx)
			_mulTo(dst[Y], ay, by)
			return dst
		}
	const mul$$$ = isPrimitive
		? (a, [ bx, by ]) => {
			a[X] *= bx
			a[Y] *= by
			return a
		}
		: (a, [ bx, by ]) => {
			const [ ax, ay ] = a
			_mul$$$(ax, bx)
			_mul$$$(ay, by)
			return a
		}
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => [
			ax / bx,
			ay / by,
		]
		: ([ ax, ay ], [ bx, by ]) => [
			_div(ax, bx),
			_div(ay, by),
		]
	const divTo = isPrimitive
		? (dst, [ ax, ay ], [ bx, by ]) => {
			dst[X] = ax / bx
			dst[Y] = ay / by
			return dst
		}
		: (dst, [ ax, ay ], [ bx, by ]) => {
			_divTo(dst[X], ax, bx)
			_divTo(dst[Y], ay, by)
			return dst
		}
	const div$$$ = isPrimitive
		? (a, [ bx, by ]) => {
			a[X] /= bx
			a[Y] /= by
			return a
		}
		: (a, [ bx, by ]) => {
			const [ ax, ay ] = a
			_div$$$(ax, bx)
			_div$$$(ay, by)
			return a
		}
	div.to = divTo
	div.$$$ = div$$$

	const dot = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => _ZERO
			+ ax * bx
			+ ay * by
		: ([ ax, ay ], [ bx, by ]) => _add(
			_mulTo(_tmp1, ax, bx),
			_mulTo(_tmp2, ay, by),
		)
	const dotTo = !isPrimitive
		? (dst, [ ax, ay ], [ bx, by ]) => _addTo(
			dst,
			_mulTo(_tmp1, ax, bx),
			_mulTo(_tmp2, ay, by),
		)
		: null
	dot.to = dotTo

	const cross = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => _ZERO
			+ ax * by
			- ay * bx
		: ([ ax, ay ], [ bx, by ]) => _sub(
			_mulTo(_tmp1, ax, by),
			_mulTo(_tmp2, ay, bx),
		)
	const crossTo = !isPrimitive
		? (dst, [ ax, ay ], [ bx, by ]) => _subTo(
			dst,
			_mulTo(_tmp1, ax, by),
			_mulTo(_tmp2, ay, bx),
		)
		: null
	cross.to = crossTo

	const angle = isPrimitive
		? ([ x, y ]) => {
			if (x === _ZERO && y === _ZERO) { return _NAN }
			return _atan2(y, x)
		}
		: ([ x, y ]) => {
			if (_eq(x, _ZERO) && _eq(y, _ZERO)) { return _NAN }
			return _atan2(y, x)
		}

	const angle2 = isPrimitive
		? (a, b) => {
			const cosa = dot(a, b) / (norm(a) * norm(b))
			return _acos(_min(_max(cosa, _MINUS_ONE), _ONE))
		}
		: (a, b) => {
			_mul$$$(normTo(_tmp1, a), normTo(_tmp2, b))
			dotTo(_tmp2, a, b)
			const cosa = _div(_tmp2, _tmp1)
			return _acos$$$(_min$$$(_max$$$(cosa, _MINUS_ONE), _ONE))
		}

	const eq = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => true
			&& ax === bx
			&& ay === by
		: ([ ax, ay ], [ bx, by ]) => true
			&& _eq(ax, bx)
			&& _eq(ay, by)

	const neq = isPrimitive
		? ([ ax, ay ], [ bx, by ]) => false
			|| ax !== bx
			|| ay !== by
		: ([ ax, ay ], [ bx, by ]) => false
			|| _neq(ax, bx)
			|| _neq(ay, by)

	const scale = isPrimitive
		? ([ x, y ], s) => [
			x * s,
			y * s,
		]
		: ([ x, y ], s) => [
			_mul(x, s),
			_mul(y, s),
		]
	const scaleTo = isPrimitive
		? (dst, [ x, y ], s) => {
			dst[X] = x * s
			dst[Y] = y * s
			return dst
		}
		: (dst, [ x, y ], s) => {
			_mulTo(dst[X], x, s)
			_mulTo(dst[Y], y, s)
			return dst
		}
	const scale$$$ = isPrimitive
		? (v, s) => {
			v[X] *= s
			v[Y] *= s
			return v
		}
		: (v, s) => {
			const [ x, y ] = v
			_mul$$$(x, s)
			_mul$$$(y, s)
			return v
		}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const normSquared = isPrimitive
		? ([ x, y ]) => _ZERO
			+ x ** _TWO
			+ y ** _TWO
		: (v) => dot(v, v)
	const normSquaredTo = !isPrimitive
		? (dst, v) => dotTo(dst, v, v)
		: null

	const norm = isPrimitive
		? (v) => _sqrt(normSquared(v))
		: (v) => _sqrt$$$(normSquared(v))
	const normTo = !isPrimitive
		? (dst, v) => _sqrt$$$(normSquaredTo(dst, v))
		: null

	const normalize = isPrimitive
		? (v) => scale(v, _ONE / norm(v))
		: (v) => scale(v, _inverse$$$(normTo(_tmp1, v)))
	const normalizeTo = isPrimitive
		? (dst, v) => scaleTo(dst, v, _ONE / norm(v))
		: (dst, v) => scaleTo(dst, v, _inverse$$$(normTo(_tmp1, v)))
	const normalize$$$ = isPrimitive
		? (v) => scale$$$(v, _ONE / norm(v))
		: (v) => scale$$$(v, _inverse$$$(normTo(_tmp1, v)))
	normalize.to = normalizeTo
	normalize.$$$ = normalize$$$

	const fromNumbers = (_x, _y) => [
		_fromNumber(_x),
		_fromNumber(_y),
	]
	const toNumbers = ([ x, y ]) => [
		_toNumber(x),
		_toNumber(y),
	]

	return {
		Algebra,
		...{ X, Y },
		...{ isFinite, isNaN },
		...{ clone, copy },
		...{ neg, abs, add, sub, mul, div },
		...{ dot, cross, angle, angle2 },
		...{ eq, neq },
		...{ scale, norm, normSquared, normalize },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
