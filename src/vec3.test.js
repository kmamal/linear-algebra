const { test } = require('@kmamal/testing')
const N = require('@kmamal/numbers/js')
const V3 = require('./vec3').defineFor(N)

const floatEqual = (t, actual, expected, tollerance = 1e-5) => t.ok(
	Math.abs(actual - expected) < tollerance,
	{ actual, expected },
)

const tmp = []

test("vec3.isFinite", (t) => {
	t.equal(V3.isFinite([ 0, 0, 0 ]), true)
	t.equal(V3.isFinite([ 10, -5, 0 ]), true)
	t.equal(V3.isFinite([ 0, 0, Infinity ]), false)
	t.equal(V3.isFinite([ Infinity, 0, -Infinity ]), false)
	t.equal(V3.isFinite([ 0, 3, NaN ]), false)
	t.equal(V3.isFinite([ 4, NaN, 5 ]), false)
	t.equal(V3.isFinite([ NaN, NaN, NaN ]), false)
})

test("vec3.isNaN", (t) => {
	t.equal(V3.isNaN([ 0, 0, 0 ]), false)
	t.equal(V3.isNaN([ 10, -5, 0 ]), false)
	t.equal(V3.isNaN([ 0, 0, Infinity ]), false)
	t.equal(V3.isNaN([ Infinity, 0, -Infinity ]), false)
	t.equal(V3.isNaN([ 7, 2, NaN ]), true)
	t.equal(V3.isNaN([ 6, NaN, 8 ]), true)
	t.equal(V3.isNaN([ NaN, NaN, NaN ]), true)
})

test("vec3.neg", (t) => {
	t.equal(V3.neg([ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.neg([ -5, 7, -9 ]), [ 5, -7, 9 ])
	t.equal(V3.neg([ 4, -3, 1 ]), [ -4, 3, -1 ])
})

test("vec3.neg.to", (t) => {
	t.equal(V3.neg.to(tmp, [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.neg.to(tmp, [ -5, 7, -9 ]), [ 5, -7, 9 ])
	t.equal(V3.neg.to(tmp, [ 4, -3, 1 ]), [ -4, 3, -1 ])
})

test("vec3.neg.$$$", (t) => {
	t.equal(V3.neg.$$$([ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.neg.$$$([ -5, 7, -9 ]), [ 5, -7, 9 ])
	t.equal(V3.neg.$$$([ 4, -3, 1 ]), [ -4, 3, -1 ])
})

test("vec3.abs", (t) => {
	t.equal(V3.abs([ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.abs([ -5, 7, -9 ]), [ 5, 7, 9 ])
	t.equal(V3.abs([ 4, -3, 1 ]), [ 4, 3, 1 ])
})

test("vec3.abs.to", (t) => {
	t.equal(V3.abs.to(tmp, [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.abs.to(tmp, [ -5, 7, -9 ]), [ 5, 7, 9 ])
	t.equal(V3.abs.to(tmp, [ 4, -3, 1 ]), [ 4, 3, 1 ])
})

test("vec3.abs.$$$", (t) => {
	t.equal(V3.abs.$$$([ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.abs.$$$([ -5, 7, -9 ]), [ 5, 7, 9 ])
	t.equal(V3.abs.$$$([ 4, -3, 1 ]), [ 4, 3, 1 ])
})

test("vec3.add", (t) => {
	t.equal(V3.add([ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.add([ 1, -1, 1 ], [ -1, 1, -1 ]), [ 0, 0, 0 ])
	t.equal(V3.add([ 1, 2, 3 ], [ 4, 5, 6 ]), [ 5, 7, 9 ])
})

test("vec3.add.to", (t) => {
	t.equal(V3.add.to(tmp, [ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.add.to(tmp, [ 1, -1, 1 ], [ -1, 1, -1 ]), [ 0, 0, 0 ])
	t.equal(V3.add.to(tmp, [ 1, 2, 3 ], [ 4, 5, 6 ]), [ 5, 7, 9 ])
})

test("vec3.add.$$$", (t) => {
	t.equal(V3.add.$$$([ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.add.$$$([ 1, -1, 1 ], [ -1, 1, -1 ]), [ 0, 0, 0 ])
	t.equal(V3.add.$$$([ 1, 2, 3 ], [ 4, 5, 6 ]), [ 5, 7, 9 ])
})

test("vec3.sub", (t) => {
	t.equal(V3.sub([ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.sub([ 1, -1, 1 ], [ -1, 1, -1 ]), [ 2, -2, 2 ])
	t.equal(V3.sub([ 1, 2, 3 ], [ 4, 5, 6 ]), [ -3, -3, -3 ])
})

test("vec3.sub.to", (t) => {
	t.equal(V3.sub.to(tmp, [ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.sub.to(tmp, [ 1, -1, 1 ], [ -1, 1, -1 ]), [ 2, -2, 2 ])
	t.equal(V3.sub.to(tmp, [ 1, 2, 3 ], [ 4, 5, 6 ]), [ -3, -3, -3 ])
})

test("vec3.sub.$$$", (t) => {
	t.equal(V3.sub.$$$([ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.sub.$$$([ 1, -1, 1 ], [ -1, 1, -1 ]), [ 2, -2, 2 ])
	t.equal(V3.sub.$$$([ 1, 2, 3 ], [ 4, 5, 6 ]), [ -3, -3, -3 ])
})

test("vec3.mul", (t) => {
	t.equal(V3.mul([ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.mul([ 0, 0, 0 ], [ 1, 1, 1 ]), [ 0, 0, 0 ])
	t.equal(V3.mul([ 1, 1, 1 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.mul([ 1, -1, 1 ], [ -1, 1, -1 ]), [ -1, -1, -1 ])
	t.equal(V3.mul([ 1, 2, 3 ], [ 5, 6, 7 ]), [ 5, 12, 21 ])
})

test("vec3.mul.to", (t) => {
	t.equal(V3.mul.to(tmp, [ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.mul.to(tmp, [ 0, 0, 0 ], [ 1, 1, 1 ]), [ 0, 0, 0 ])
	t.equal(V3.mul.to(tmp, [ 1, 1, 1 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.mul.to(tmp, [ 1, -1, 1 ], [ -1, 1, -1 ]), [ -1, -1, -1 ])
	t.equal(V3.mul.to(tmp, [ 1, 2, 3 ], [ 5, 6, 7 ]), [ 5, 12, 21 ])
})

test("vec3.mul.$$$", (t) => {
	t.equal(V3.mul.$$$([ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.mul.$$$([ 0, 0, 0 ], [ 1, 1, 1 ]), [ 0, 0, 0 ])
	t.equal(V3.mul.$$$([ 1, 1, 1 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.mul.$$$([ 1, -1, 1 ], [ -1, 1, -1 ]), [ -1, -1, -1 ])
	t.equal(V3.mul.$$$([ 1, 2, 3 ], [ 5, 6, 7 ]), [ 5, 12, 21 ])
})

test("vec3.div", (t) => {
	t.equal(V3.div([ 0, 0, 0 ], [ 0, 0, 0 ]), [ NaN, NaN, NaN ])
	t.equal(V3.div([ 0, 0, 0 ], [ 1, 2, 3 ]), [ 0, 0, 0 ])
	t.equal(V3.div([ 1, -1, 1 ], [ -1, 1, -1 ]), [ -1, -1, -1 ])
	t.equal(V3.div([ 2, 4, 6 ], [ 1, 2, 3 ]), [ 2, 2, 2 ])
})

test("vec3.div.to", (t) => {
	t.equal(V3.div.to(tmp, [ 0, 0, 0 ], [ 0, 0, 0 ]), [ NaN, NaN, NaN ])
	t.equal(V3.div.to(tmp, [ 0, 0, 0 ], [ 1, 2, 3 ]), [ 0, 0, 0 ])
	t.equal(V3.div.to(tmp, [ 1, -1, 1 ], [ -1, 1, -1 ]), [ -1, -1, -1 ])
	t.equal(V3.div.to(tmp, [ 2, 4, 6 ], [ 1, 2, 3 ]), [ 2, 2, 2 ])
})

test("vec3.div.$$$", (t) => {
	t.equal(V3.div.$$$([ 0, 0, 0 ], [ 0, 0, 0 ]), [ NaN, NaN, NaN ])
	t.equal(V3.div.$$$([ 0, 0, 0 ], [ 1, 2, 3 ]), [ 0, 0, 0 ])
	t.equal(V3.div.$$$([ 1, -1, 1 ], [ -1, 1, -1 ]), [ -1, -1, -1 ])
	t.equal(V3.div.$$$([ 2, 4, 6 ], [ 1, 2, 3 ]), [ 2, 2, 2 ])
})

test("vec3.dot", (t) => {
	t.equal(V3.dot([ 0, 0, 0 ], [ 0, 0, 0 ]), 0)
	t.equal(V3.dot([ 1, -1, 1 ], [ -1, 1, -1 ]), -3)
	t.equal(V3.dot([ 1, 2, 3 ], [ 4, 5, 6 ]), 32)
})

test("vec3.cross", (t) => {
	t.equal(V3.cross([ 0, 0, 0 ], [ 0, 0, 0 ]), [ 0, 0, 0 ])
	t.equal(V3.cross([ 1, 0, 0 ], [ 0, 1, 0 ]), [ 0, 0, 1 ])
	t.equal(V3.cross([ 1, 1, 0 ], [ 0, 0, 1 ]), [ 1, -1, 0 ])
})

test("vec3.angle2", (t) => {
	t.equal(V3.angle2([ 0, 0, 0 ], [ 0, 0, 0 ]), NaN)
	t.equal(V3.angle2([ 1, 1, 1 ], [ 0, 0, 0 ]), NaN)
	floatEqual(t, V3.angle2([ 1, 1, 1 ], [ 1, 1, 1 ]), 0)
	floatEqual(t, V3.angle2([ 0, 0, 1 ], [ 0, 0, -1 ]), Math.PI)
	floatEqual(t, V3.angle2([ 1, 1, 1 ], [ -1, -1, -1 ]), Math.PI)
	floatEqual(t, V3.angle2([ 1, 0, 0 ], [ 0, 0, 1 ]), Math.PI / 2)
})

test("vec3.eq", (t) => {
	t.equal(V3.eq([ 0, 0, 0 ], [ 0, 0, 0 ]), true)
	t.equal(V3.eq([ 1, 0, 0 ], [ 0, 0, 0 ]), false)
	t.equal(V3.eq([ 2, 3, 4 ], [ 2, 3, 4 ]), true)
	t.equal(V3.eq([ 1, -1, 1 ], [ -1, 1, 1 ]), false)
	t.equal(V3.eq([ NaN, NaN, NaN ], [ NaN, NaN, NaN ]), false)
})

test("vec3.neq", (t) => {
	t.equal(V3.neq([ 0, 0, 0 ], [ 0, 0, 0 ]), false)
	t.equal(V3.neq([ 1, 0, 0 ], [ 0, 0, 0 ]), true)
	t.equal(V3.neq([ 2, 3, 4 ], [ 2, 3, 4 ]), false)
	t.equal(V3.neq([ 1, -1, 1 ], [ -1, 1, 1 ]), true)
	t.equal(V3.neq([ NaN, NaN, NaN ], [ NaN, NaN, NaN ]), true)
})

test("vec3.scale", (t) => {
	t.equal(V3.scale([ 0, 0, 0 ], 1), [ 0, 0, 0 ])
	t.equal(V3.scale([ 1, 0, 0 ], 1), [ 1, 0, 0 ])
	t.equal(V3.scale([ 0, 1, 0 ], 1), [ 0, 1, 0 ])
	t.equal(V3.scale([ 0, 0, 1 ], 1), [ 0, 0, 1 ])
	t.equal(V3.scale([ 3, 4, 5 ], 2), [ 6, 8, 10 ])
})

test("vec3.scale.to", (t) => {
	t.equal(V3.scale.to(tmp, [ 0, 0, 0 ], 1), [ 0, 0, 0 ])
	t.equal(V3.scale.to(tmp, [ 1, 0, 0 ], 1), [ 1, 0, 0 ])
	t.equal(V3.scale.to(tmp, [ 0, 1, 0 ], 1), [ 0, 1, 0 ])
	t.equal(V3.scale.to(tmp, [ 0, 0, 1 ], 1), [ 0, 0, 1 ])
	t.equal(V3.scale.to(tmp, [ 3, 4, 5 ], 2), [ 6, 8, 10 ])
})

test("vec3.scale.$$$", (t) => {
	t.equal(V3.scale.$$$([ 0, 0, 0 ], 1), [ 0, 0, 0 ])
	t.equal(V3.scale.$$$([ 1, 0, 0 ], 1), [ 1, 0, 0 ])
	t.equal(V3.scale.$$$([ 0, 1, 0 ], 1), [ 0, 1, 0 ])
	t.equal(V3.scale.$$$([ 0, 0, 1 ], 1), [ 0, 0, 1 ])
	t.equal(V3.scale.$$$([ 3, 4, 5 ], 2), [ 6, 8, 10 ])
})

test("vec3.normSquared", (t) => {
	t.equal(V3.normSquared([ 0, 0, 0 ]), 0)
	t.equal(V3.normSquared([ 1, 0, 0 ]), 1)
	t.equal(V3.normSquared([ 0, 1, 0 ]), 1)
	t.equal(V3.normSquared([ 0, 0, 1 ]), 1)
	t.equal(V3.normSquared([ 0, 0, -1 ]), 1)
	t.equal(V3.normSquared([ 0, 0, 8 ]), 64)
	t.equal(V3.normSquared([ 3, 0, 4 ]), 25)
	t.equal(V3.normSquared([ 0, -4, -3 ]), 25)
})

test("vec3.norm", (t) => {
	t.equal(V3.norm([ 0, 0, 0 ]), 0)
	t.equal(V3.norm([ 1, 0, 0 ]), 1)
	t.equal(V3.norm([ 0, 1, 0 ]), 1)
	t.equal(V3.norm([ 0, 0, 1 ]), 1)
	t.equal(V3.norm([ 0, 0, -1 ]), 1)
	t.equal(V3.norm([ 0, 0, 8 ]), 8)
	t.equal(V3.norm([ 3, 0, 4 ]), 5)
	t.equal(V3.norm([ 0, -4, -3 ]), 5)
})

test("vec3.normalize", (t) => {
	t.equal(V3.normalize([ 0, 0, 0 ]), [ NaN, NaN, NaN ])
	t.equal(V3.normalize([ 1, 0, 0 ]), [ 1, 0, 0 ])
	t.equal(V3.normalize([ 0, 1, 0 ]), [ 0, 1, 0 ])
	t.equal(V3.normalize([ 0, 0, 1 ]), [ 0, 0, 1 ])
	t.equal(V3.normalize([ 0, 0, 2 ]), [ 0, 0, 1 ])
	t.equal(V3.normalize([ 0, 2, 0 ]), [ 0, 1, 0 ])
	t.equal(V3.normalize([ 0, 0, -4 ]), [ 0, 0, -1 ])
})

test("vec3.normalize.to", (t) => {
	t.equal(V3.normalize.to(tmp, [ 0, 0, 0 ]), [ NaN, NaN, NaN ])
	t.equal(V3.normalize.to(tmp, [ 1, 0, 0 ]), [ 1, 0, 0 ])
	t.equal(V3.normalize.to(tmp, [ 0, 1, 0 ]), [ 0, 1, 0 ])
	t.equal(V3.normalize.to(tmp, [ 0, 0, 1 ]), [ 0, 0, 1 ])
	t.equal(V3.normalize.to(tmp, [ 0, 0, 2 ]), [ 0, 0, 1 ])
	t.equal(V3.normalize.to(tmp, [ 0, 2, 0 ]), [ 0, 1, 0 ])
	t.equal(V3.normalize.to(tmp, [ 0, 0, -4 ]), [ 0, 0, -1 ])
})

test("vec3.normalize.$$$", (t) => {
	t.equal(V3.normalize.$$$([ 0, 0, 0 ]), [ NaN, NaN, NaN ])
	t.equal(V3.normalize.$$$([ 1, 0, 0 ]), [ 1, 0, 0 ])
	t.equal(V3.normalize.$$$([ 0, 1, 0 ]), [ 0, 1, 0 ])
	t.equal(V3.normalize.$$$([ 0, 0, 1 ]), [ 0, 0, 1 ])
	t.equal(V3.normalize.$$$([ 0, 0, 2 ]), [ 0, 0, 1 ])
	t.equal(V3.normalize.$$$([ 0, 2, 0 ]), [ 0, 1, 0 ])
	t.equal(V3.normalize.$$$([ 0, 0, -4 ]), [ 0, 0, -1 ])
})
