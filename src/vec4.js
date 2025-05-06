const { memoize } = require('@kmamal/util/function/memoize')

const X = 0
const Y = 1
const Z = 2
const W = 3

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
		eq: _eq,
		neq: _neq,
		sqrt: _sqrt,
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

	const _ZERO = _fromNumber(0)
	const _ONE = _fromNumber(1)
	const _TWO = _fromNumber(2)

	const isFinite = ([ x, y, z, w ]) => true
		&& _isFinite(x)
		&& _isFinite(y)
		&& _isFinite(z)
		&& _isFinite(w)

	const isNaN = ([ x, y, z, w ]) => false
		|| _isNaN(x)
		|| _isNaN(y)
		|| _isNaN(z)
		|| _isNaN(w)

	const clone = isPrimitive
		? ([ x, y, z, w ]) => [
			x,
			y,
			z,
			w,
		]
		: ([ x, y, z, w ]) => [
			_clone(x),
			_clone(y),
			_clone(z),
			_clone(w),
		]
	const copy = isPrimitive
		? (dst, [ x, y, z, w ]) => {
			dst[X] = x
			dst[Y] = y
			dst[Z] = z
			dst[W] = w
		}
		: (dst, [ x, y, z, w ]) => {
			_copy(dst[X], x)
			_copy(dst[Y], y)
			_copy(dst[Z], z)
			_copy(dst[W], w)
		}

	const neg = isPrimitive
		? ([ x, y, z, w ]) => [
			-x,
			-y,
			-z,
			-w,
		]
		: ([ x, y, z, w ]) => [
			_neg(x),
			_neg(y),
			_neg(z),
			_neg(w),
		]
	const negTo = isPrimitive
		? (dst, [ x, y, z, w ]) => {
			dst[X] = -x
			dst[Y] = -y
			dst[Z] = -z
			dst[W] = -w
			return dst
		}
		: (dst, [ x, y, z, w ]) => {
			_negTo(dst[X], x)
			_negTo(dst[Y], y)
			_negTo(dst[Z], z)
			_negTo(dst[W], w)
			return dst
		}
	const neg$$$ = isPrimitive
		? (v) => {
			const [ x, y, z, w ] = v
			v[X] = -x
			v[Y] = -y
			v[Z] = -z
			v[W] = -w
			return v
		}
		: (v) => {
			const [ x, y, z, w ] = v
			_neg$$$(x)
			_neg$$$(y)
			_neg$$$(z)
			_neg$$$(w)
			return v
		}
	neg.to = negTo
	neg.$$$ = neg$$$

	const abs = ([ x, y, z, w ]) => [
		_abs(x),
		_abs(y),
		_abs(z),
		_abs(w),
	]
	const absTo = isPrimitive
		? (dst, [ x, y, z, w ]) => {
			dst[X] = _abs(x)
			dst[Y] = _abs(y)
			dst[Z] = _abs(z)
			dst[W] = _abs(w)
			return dst
		}
		: (dst, [ x, y, z, w ]) => {
			_absTo(dst[X], x)
			_absTo(dst[Y], y)
			_absTo(dst[Z], z)
			_absTo(dst[W], w)
			return dst
		}
	const abs$$$ = isPrimitive
		? (v) => {
			const [ x, y, z, w ] = v
			v[X] = _abs(x)
			v[Y] = _abs(y)
			v[Z] = _abs(z)
			v[W] = _abs(w)
			return v
		}
		: (v) => {
			const [ x, y, z, w ] = v
			_abs$$$(x)
			_abs$$$(y)
			_abs$$$(z)
			_abs$$$(w)
			return v
		}
	abs.to = absTo
	abs.$$$ = abs$$$

	const add = isPrimitive
		? ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			ax + bx,
			ay + by,
			az + bz,
			aw + bw,
		]
		: ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			_add(ax, bx),
			_add(ay, by),
			_add(az, bz),
			_add(aw, bw),
		]
	const addTo = isPrimitive
		? (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			dst[X] = ax + bx
			dst[Y] = ay + by
			dst[Z] = az + bz
			dst[W] = aw + bw
			return dst
		}
		: (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			_addTo(dst[X], ax, bx)
			_addTo(dst[Y], ay, by)
			_addTo(dst[Z], az, bz)
			_addTo(dst[W], aw, bw)
			return dst
		}
	const add$$$ = isPrimitive
		? (a, [ bx, by, bz, bw ]) => {
			a[X] += bx
			a[Y] += by
			a[Z] += bz
			a[W] += bw
			return a
		}
		: (a, [ bx, by, bz, bw ]) => {
			const [ ax, ay, az, aw ] = a
			_add$$$(ax, bx)
			_add$$$(ay, by)
			_add$$$(az, bz)
			_add$$$(aw, bw)
			return a
		}
	add.to = addTo
	add.$$$ = add$$$

	const sub = isPrimitive
		? ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			ax - bx,
			ay - by,
			az - bz,
			aw - bw,
		]
		: ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			_sub(ax, bx),
			_sub(ay, by),
			_sub(az, bz),
			_sub(aw, bw),
		]
	const subTo = isPrimitive
		? (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			dst[X] = ax - bx
			dst[Y] = ay - by
			dst[Z] = az - bz
			dst[W] = aw - bw
			return dst
		}
		: (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			_subTo(dst[X], ax, bx)
			_subTo(dst[Y], ay, by)
			_subTo(dst[Z], az, bz)
			_subTo(dst[W], aw, bw)
			return dst
		}
	const sub$$$ = isPrimitive
		? (a, [ bx, by, bz, bw ]) => {
			a[X] -= bx
			a[Y] -= by
			a[Z] -= bz
			a[W] -= bw
			return a
		}
		: (a, [ bx, by, bz, bw ]) => {
			const [ ax, ay, az, aw ] = a
			_sub$$$(ax, bx)
			_sub$$$(ay, by)
			_sub$$$(az, bz)
			_sub$$$(aw, bw)
			return a
		}
	sub.to = subTo
	sub.$$$ = sub$$$

	const mul = isPrimitive
		? ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			ax * bx,
			ay * by,
			az * bz,
			aw * bw,
		]
		: ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			_mul(ax, bx),
			_mul(ay, by),
			_mul(az, bz),
			_mul(aw, bw),
		]
	const mulTo = isPrimitive
		? (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			dst[X] = ax * bx
			dst[Y] = ay * by
			dst[Z] = az * bz
			dst[W] = aw * bw
			return dst
		}
		: (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			_mulTo(dst[X], ax, bx)
			_mulTo(dst[Y], ay, by)
			_mulTo(dst[Z], az, bz)
			_mulTo(dst[W], aw, bw)
			return dst
		}
	const mul$$$ = isPrimitive
		? (a, [ bx, by, bz, bw ]) => {
			a[X] *= bx
			a[Y] *= by
			a[Z] *= bz
			a[W] *= bw
			return a
		}
		: (a, [ bx, by, bz, bw ]) => {
			const [ ax, ay, az, aw ] = a
			_mul$$$(ax, bx)
			_mul$$$(ay, by)
			_mul$$$(az, bz)
			_mul$$$(aw, bw)
			return a
		}
	mul.to = mulTo
	mul.$$$ = mul$$$

	const div = isPrimitive
		? ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			ax / bx,
			ay / by,
			az / bz,
			aw / bw,
		]
		: ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => [
			_div(ax, bx),
			_div(ay, by),
			_div(az, bz),
			_div(aw, bw),
		]
	const divTo = isPrimitive
		? (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			dst[X] = ax / bx
			dst[Y] = ay / by
			dst[Z] = az / bz
			dst[W] = aw / bw
			return dst
		}
		: (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			_divTo(dst[X], ax, bx)
			_divTo(dst[Y], ay, by)
			_divTo(dst[Z], az, bz)
			_divTo(dst[W], aw, bw)
			return dst
		}
	const div$$$ = isPrimitive
		? (a, [ bx, by, bz, bw ]) => {
			a[X] /= bx
			a[Y] /= by
			a[Z] /= bz
			a[W] /= bw
			return a
		}
		: (a, [ bx, by, bz, bw ]) => {
			const [ ax, ay, az, aw ] = a
			_div$$$(ax, bx)
			_div$$$(ay, by)
			_div$$$(az, bz)
			_div$$$(aw, bw)
			return a
		}
	div.to = divTo
	div.$$$ = div$$$

	const dot = isPrimitive
		? ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => _ZERO
			+ ax * bx
			+ ay * by
			+ az * bz
			+ aw * bw
		: ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			const res = {}
			_mulTo(res, ax, bx)
			_add$$$(res, _mulTo(_tmp, ay, by))
			_add$$$(res, _mulTo(_tmp, az, bz))
			_add$$$(res, _mulTo(_tmp, aw, bw))
			return res
		}
	const dotTo = !isPrimitive
		? (dst, [ ax, ay, az, aw ], [ bx, by, bz, bw ]) => {
			_mulTo(dst, ax, bx)
			_add$$$(dst, _mulTo(_tmp, ay, by))
			_add$$$(dst, _mulTo(_tmp, az, bz))
			_add$$$(dst, _mulTo(_tmp, aw, bw))
			return dst
		}
		: null
	dot.to = dotTo

	const eq = isPrimitive
		? ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => true
			&& ax === bx
			&& ay === by
			&& az === bz
			&& aw === bw
		: ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => true
			&& _eq(ax, bx)
			&& _eq(ay, by)
			&& _eq(az, bz)
			&& _eq(aw, bw)

	const neq = isPrimitive
		? ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => false
			|| ax !== bx
			|| ay !== by
			|| az !== bz
			|| aw !== bw
		: ([ ax, ay, az, aw ], [ bx, by, bz, bw ]) => false
			|| _neq(ax, bx)
			|| _neq(ay, by)
			|| _neq(az, bz)
			|| _neq(aw, bw)

	const scale = isPrimitive
		? ([ x, y, z, w ], s) => [
			x * s,
			y * s,
			z * s,
			w * s,
		]
		: ([ x, y, z, w ], s) => [
			_mul(x, s),
			_mul(y, s),
			_mul(z, s),
			_mul(w, s),
		]
	const scaleTo = isPrimitive
		? (dst, [ x, y, z, w ], s) => {
			dst[X] = x * s
			dst[Y] = y * s
			dst[Z] = z * s
			dst[W] = w * s
			return dst
		}
		: (dst, [ x, y, z, w ], s) => {
			_mulTo(dst[X], x, s)
			_mulTo(dst[Y], y, s)
			_mulTo(dst[Z], z, s)
			_mulTo(dst[W], w, s)
			return dst
		}
	const scale$$$ = isPrimitive
		? (v, s) => {
			v[X] *= s
			v[Y] *= s
			v[Z] *= s
			v[W] *= s
			return v
		}
		: (v, s) => {
			_mul$$$(v[X], s)
			_mul$$$(v[Y], s)
			_mul$$$(v[Z], s)
			_mul$$$(v[W], s)
			return v
		}
	scale.to = scaleTo
	scale.$$$ = scale$$$

	const normSquared = isPrimitive
		? ([ x, y, z, w ]) => _ZERO
			+ x ** _TWO
			+ y ** _TWO
			+ z ** _TWO
			+ w ** _TWO
		: (v) => dot(v, v)
	const normSquaredTo = !isPrimitive
		? (_dst, v) => dotTo(_dst, v, v)
		: null

	const norm = isPrimitive
		? (v) => _sqrt(normSquared(v))
		: (v) => _sqrt$$$(normSquared(v))
	const normTo = !isPrimitive
		? (_dst, v) => _sqrt$$$(normSquaredTo(_dst, v))
		: null

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

	const fromNumbers = (_x, _y, _z, _w) => [
		_fromNumber(_x),
		_fromNumber(_y),
		_fromNumber(_z),
		_fromNumber(_w),
	]

	const toNumbers = ([ x, y, z, w ]) => [
		_toNumber(x),
		_toNumber(y),
		_toNumber(z),
		_toNumber(w),
	]

	return {
		Algebra,
		...{ X, Y, Z, W },
		...{ isFinite, isNaN },
		...{ clone, copy },
		...{ neg, abs, add, sub, mul, div },
		...{ dot },
		...{ eq, neq },
		...{ scale, norm, normSquared, normalize },
		...{ fromNumbers, toNumbers },
	}
})

module.exports = { defineFor }
