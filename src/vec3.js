const { memoize } = require('@kmamal/util/function/memoize')

const X = 0
const Y = 1
const Z = 2

const _tmp1 = {}
const _tmp2 = {}

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
		eq: _eq,
		neq: _neq,
		sqrt: _sqrt,
		acos: _acos,
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

	const isFinite = ([ x, y, z ]) => true
		&& _isFinite(x)
		&& _isFinite(y)
		&& _isFinite(z)

	const isNaN = ([ x, y, z ]) => false
		|| _isNaN(x)
		|| _isNaN(y)
		|| _isNaN(z)

	const clone = isPrimitive
		? ([ x, y, z ]) => [
			x,
			y,
			z,
		]
		: ([ x, y, z ]) => [
			_clone(x),
			_clone(y),
			_clone(z),
		]
	const copy = isPrimitive
		? (dst, [ x, y, z ]) => {
			dst[X] = x
			dst[Y] = y
			dst[Z] = z
		}
		: (dst, [ x, y, z ]) => {
			_copy(dst[X], x)
			_copy(dst[Y], y)
			_copy(dst[Z], z)
		}

	const neg = isPrimitive
		? ([ x, y, z ]) => [
			-x,
			-y,
			-z,
		]
		: ([ x, y, z ]) => [
			_neg(x),
			_neg(y),
			_neg(z),
		]
	const negTo = isPrimitive
		? (dst, [ x, y, z ]) => {
			dst[X] = -x
			dst[Y] = -y
			dst[Z] = -z
			return dst
		}
		: (dst, [ x, y, z ]) => {
			_negTo(dst[X], x)
			_negTo(dst[Y], y)
			_negTo(dst[Z], z)
			return dst
		}
	const neg$$$ = isPrimitive
		? (v) => {
			const [ x, y, z ] = v
			v[X] = -x
			v[Y] = -y
			v[Z] = -z
			return v
		}
		: (v) => {
			const [ x, y, z ] = v
			_neg$$$(x)
			_neg$$$(y)
			_neg$$$(z)
			return v
		}
	neg.to = negTo
	neg.$$$ = neg$$$

	const abs = isPrimitive
		? ([ x, y, z ]) => [
			_abs(x),
			_abs(y),
			_abs(z),
		]
		: ([ x, y, z ]) => [
			_abs(x),
			_abs(y),
			_abs(z),
		]
	const absTo = isPrimitive
		? (dst, [ x, y, z ]) => {
			dst[X] = _abs(x)
			dst[Y] = _abs(y)
			dst[Z] = _abs(z)
			return dst
		}
		: (dst, [ x, y, z ]) => {
			_absTo(dst[X], x)
			_absTo(dst[Y], y)
			_absTo(dst[Z], z)
			return dst
		}
	const abs$$$ = isPrimitive
		? (v) => {
			const [ x, y, z ] = v
			v[X] = _abs(x)
			v[Y] = _abs(y)
			v[Z] = _abs(z)
			return v
		}
		: (v) => {
			const [ x, y, z ] = v
			_abs$$$(x)
			_abs$$$(y)
			_abs$$$(z)
			return v
		}
	abs.to = absTo
	abs.$$$ = abs$$$

	const add = isPrimitive
		? ([ ax, ay, az ], [ bx, by, bz ]) => [
			ax + bx,
			ay + by,
			az + bz,
		]
		: ([ ax, ay, az ], [ bx, by, bz ]) => [
			_add(ax, bx),
			_add(ay, by),
			_add(az, bz),
		]
	const addTo = isPrimitive
		? (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			dst[X] = ax + bx
			dst[Y] = ay + by
			dst[Z] = az + bz
			return dst
		}
		: (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			_addTo(dst[X], ax, bx)
			_addTo(dst[Y], ay, by)
			_addTo(dst[Z], az, bz)
			return dst
		}
	const add$$$ = isPrimitive
		? (a, [ bx, by, bz ]) => {
			a[X] += bx
			a[Y] += by
			a[Z] += bz
			return a
		}
		: (a, [ bx, by, bz ]) => {
			const [ ax, ay, az ] = a
			_add$$$(ax, bx)
			_add$$$(ay, by)
			_add$$$(az, bz)
			return a
		}
	add.to = addTo
	add.$$$ = add$$$

	const sub = isPrimitive
		? ([ ax, ay, az ], [ bx, by, bz ]) => [
			ax - bx,
			ay - by,
			az - bz,
		]
		: ([ ax, ay, az ], [ bx, by, bz ]) => [
			_sub(ax, bx),
			_sub(ay, by),
			_sub(az, bz),
		]
	const subTo = isPrimitive
		? (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			dst[X] = ax - bx
			dst[Y] = ay - by
			dst[Z] = az - bz
			return dst
		}
		: (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			_subTo(dst[X], ax, bx)
			_subTo(dst[Y], ay, by)
			_subTo(dst[Z], az, bz)
			return dst
		}
	const sub$$$ = isPrimitive
		? (a, [ bx, by, bz ]) => {
			a[X] -= bx
			a[Y] -= by
			a[Z] -= bz
			return a
		}
		: (a, [ bx, by, bz ]) => {
			const [ ax, ay, az ] = a
			_sub$$$(ax, bx)
			_sub$$$(ay, by)
			_sub$$$(az, bz)
			return a
		}
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = isPrimitive
		? ([ ax, ay, az ], [ bx, by, bz ]) => [
			ax * bx,
			ay * by,
			az * bz,
		]
		: ([ ax, ay, az ], [ bx, by, bz ]) => [
			_mul(ax, bx),
			_mul(ay, by),
			_mul(az, bz),
		]
	const mulTo = isPrimitive
		? (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			dst[X] = ax * bx
			dst[Y] = ay * by
			dst[Z] = az * bz
			return dst
		}
		: (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			_mulTo(dst[X], ax, bx)
			_mulTo(dst[Y], ay, by)
			_mulTo(dst[Z], az, bz)
			return dst
		}
	const mul$$$ = isPrimitive
		? (a, [ bx, by, bz ]) => {
			a[X] *= bx
			a[Y] *= by
			a[Z] *= bz
			return a
		}
		: (a, [ bx, by, bz ]) => {
			const [ ax, ay, az ] = a
			_mul$$$(ax, bx)
			_mul$$$(ay, by)
			_mul$$$(az, bz)
			return a
		}
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = isPrimitive
		? ([ ax, ay, az ], [ bx, by, bz ]) => [
			ax / bx,
			ay / by,
			az / bz,
		]
		: ([ ax, ay, az ], [ bx, by, bz ]) => [
			_div(ax, bx),
			_div(ay, by),
			_div(az, bz),
		]
	const divTo = isPrimitive
		? (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			dst[X] = ax / bx
			dst[Y] = ay / by
			dst[Z] = az / bz
			return dst
		}
		: (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			_divTo(dst[X], ax, bx)
			_divTo(dst[Y], ay, by)
			_divTo(dst[Z], az, bz)
			return dst
		}
	const div$$$ = isPrimitive
		? (a, [ bx, by, bz ]) => {
			a[X] /= bx
			a[Y] /= by
			a[Z] /= bz
			return a
		}
		: (a, [ bx, by, bz ]) => {
			const [ ax, ay, az ] = a
			_div$$$(ax, bx)
			_div$$$(ay, by)
			_div$$$(az, bz)
			return a
		}
	div.to = divTo
	div.$$$ = div$$$

	const dot = isPrimitive
		? ([ ax, ay, az ], [ bx, by, bz ]) => _ZERO
			+ ax * bx
			+ ay * by
			+ az * bz
		: ([ ax, ay, az ], [ bx, by, bz ]) => {
			const res = {}
			_mulTo(res, ax, bx)
			_add$$$(res, _mulTo(_tmp1, ay, by))
			_add$$$(res, _mulTo(_tmp1, az, bz))
			return res
		}
	const dotTo = !isPrimitive
		? (dst, [ ax, ay, az ], [ bx, by, bz ]) => {
			_mulTo(dst, ax, bx)
			_add$$$(dst, _mulTo(_tmp1, ay, by))
			_add$$$(dst, _mulTo(_tmp1, az, bz))
			return dst
		}
		: null
	dot.to = dotTo

	const cross = isPrimitive
		? ([ ax, ay, az ], [ bx, by, bz ]) => [
			ay * bz - az * by,
			az * bx - ax * bz,
			ax * by - ay * bx,
		]
		: ([ ax, ay, az ], [ bx, by, bz ]) => [
			_sub(_mulTo(_tmp1, ay, bz), _mulTo(_tmp2, az, by)),
			_sub(_mulTo(_tmp1, az, bx), _mulTo(_tmp2, ax, bz)),
			_sub(_mulTo(_tmp1, ax, by), _mulTo(_tmp2, ay, bx)),
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
		? ([ ax, ay, az ], [ bx, by, bz ]) => true
			&& ax === bx
			&& ay === by
			&& az === bz
		: ([ ax, ay, az ], [ bx, by, bz ]) => true
			&& _eq(ax, bx)
			&& _eq(ay, by)
			&& _eq(az, bz)

	const neq = isPrimitive
		? ([ ax, ay, az ], [ bx, by, bz ]) => false
			|| ax !== bx
			|| ay !== by
			|| az !== bz
		: ([ ax, ay, az ], [ bx, by, bz ]) => false
			|| _neq(ax, bx)
			|| _neq(ay, by)
			|| _neq(az, bz)

	const scale = isPrimitive
		? ([ x, y, z ], s) => [
			x * s,
			y * s,
			z * s,
		]
		: ([ x, y, z ], s) => [
			_mul(x, s),
			_mul(y, s),
			_mul(z, s),
		]
	const scaleTo = isPrimitive
		? (dst, [ x, y, z ], s) => {
			dst[X] = x * s
			dst[Y] = y * s
			dst[Z] = z * s
			return dst
		}
		: (dst, [ x, y, z ], s) => {
			_mulTo(dst[X], x, s)
			_mulTo(dst[Y], y, s)
			_mulTo(dst[Z], z, s)
			return dst
		}
	const scale$$$ = isPrimitive
		? (v, s) => {
			v[X] *= s
			v[Y] *= s
			v[Z] *= s
			return v
		}
		: (v, s) => {
			const [ x, y, z ] = v
			_mul$$$(x, s)
			_mul$$$(y, s)
			_mul$$$(z, s)
			return v
		}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const normSquared = isPrimitive
		? ([ x, y, z ]) => _ZERO
			+ x ** _TWO
			+ y ** _TWO
			+ z ** _TWO
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

	const fromNumbers = (_x, _y, _z) => [
		_fromNumber(_x),
		_fromNumber(_y),
		_fromNumber(_z),
	]
	const toNumbers = ([ x, y, z ]) => [
		_toNumber(x),
		_toNumber(y),
		_toNumber(z),
	]

	return {
		Algebra,
		...{ X, Y, Z },
		...{ isFinite, isNaN },
		...{ clone, copy },
		...{ neg, abs, add, sub, mul, div },
		...{ dot, cross, angle2 },
		...{ eq, neq },
		...{ scale, norm, normSquared, normalize },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
