const { test } = require('@kmamal/testing')
const N = require('@kmamal/numbers/js')
const V2 = require('./vec2').defineFor(N)

const floatEqual = (t, actual, expected, tollerance = 1e-5) => t.ok(
	Math.abs(actual - expected) < tollerance,
	{ actual, expected },
)

const tmp = []

test("vec2.isFinite", (t) => {
	t.equal(V2.isFinite([ 0, 0 ]), true)
	t.equal(V2.isFinite([ 10, -5 ]), true)
	t.equal(V2.isFinite([ Infinity, 0 ]), false)
	t.equal(V2.isFinite([ Infinity, -Infinity ]), false)
	t.equal(V2.isFinite([ NaN, 3 ]), false)
	t.equal(V2.isFinite([ 4, NaN ]), false)
	t.equal(V2.isFinite([ NaN, NaN ]), false)
})

test("vec2.isNaN", (t) => {
	t.equal(V2.isNaN([ 0, 0 ]), false)
	t.equal(V2.isNaN([ 10, -5 ]), false)
	t.equal(V2.isNaN([ Infinity, 0 ]), false)
	t.equal(V2.isNaN([ Infinity, -Infinity ]), false)
	t.equal(V2.isNaN([ NaN, 2 ]), true)
	t.equal(V2.isNaN([ 6, NaN ]), true)
	t.equal(V2.isNaN([ NaN, NaN ]), true)
})

test("vec2.neg", (t) => {
	t.equal(V2.neg([ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.neg([ -5, 7 ]), [ 5, -7 ])
	t.equal(V2.neg([ 4, -3 ]), [ -4, 3 ])
	t.equal(V2.neg([ -2, -6 ]), [ 2, 6 ])
})

test("vec2.neg.to", (t) => {
	t.equal(V2.neg.to(tmp, [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.neg.to(tmp, [ -5, 7 ]), [ 5, -7 ])
	t.equal(V2.neg.to(tmp, [ 4, -3 ]), [ -4, 3 ])
	t.equal(V2.neg.to(tmp, [ -2, -6 ]), [ 2, 6 ])
})

test("vec2.neg.$$$", (t) => {
	t.equal(V2.neg.$$$([ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.neg.$$$([ -5, 7 ]), [ 5, -7 ])
	t.equal(V2.neg.$$$([ 4, -3 ]), [ -4, 3 ])
	t.equal(V2.neg.$$$([ -2, -6 ]), [ 2, 6 ])
})

test("vec2.abs", (t) => {
	t.equal(V2.abs([ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.abs([ -5, 7 ]), [ 5, 7 ])
	t.equal(V2.abs([ 4, -3 ]), [ 4, 3 ])
	t.equal(V2.abs([ -2, -6 ]), [ 2, 6 ])
})

test("vec2.abs.to", (t) => {
	t.equal(V2.abs.to(tmp, [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.abs.to(tmp, [ -5, 7 ]), [ 5, 7 ])
	t.equal(V2.abs.to(tmp, [ 4, -3 ]), [ 4, 3 ])
	t.equal(V2.abs.to(tmp, [ -2, -6 ]), [ 2, 6 ])
})

test("vec2.abs.$$$", (t) => {
	t.equal(V2.abs.$$$([ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.abs.$$$([ -5, 7 ]), [ 5, 7 ])
	t.equal(V2.abs.$$$([ 4, -3 ]), [ 4, 3 ])
	t.equal(V2.abs.$$$([ -2, -6 ]), [ 2, 6 ])
})

test("vec2.add", (t) => {
	t.equal(V2.add([ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.add([ 1, -1 ], [ -1, 1 ]), [ 0, 0 ])
	t.equal(V2.add([ 1, 2 ], [ 3, 4 ]), [ 4, 6 ])
})

test("vec2.add.to", (t) => {
	t.equal(V2.add.to(tmp, [ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.add.to(tmp, [ 1, -1 ], [ -1, 1 ]), [ 0, 0 ])
	t.equal(V2.add.to(tmp, [ 1, 2 ], [ 3, 4 ]), [ 4, 6 ])
})

test("vec2.add.$$$", (t) => {
	t.equal(V2.add.$$$([ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.add.$$$([ 1, -1 ], [ -1, 1 ]), [ 0, 0 ])
	t.equal(V2.add.$$$([ 1, 2 ], [ 3, 4 ]), [ 4, 6 ])
})

test("vec2.sub", (t) => {
	t.equal(V2.sub([ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.sub([ 1, -1 ], [ -1, 1 ]), [ 2, -2 ])
	t.equal(V2.sub([ 1, 2 ], [ 3, 4 ]), [ -2, -2 ])
})

test("vec2.sub.to", (t) => {
	t.equal(V2.sub.to(tmp, [ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.sub.to(tmp, [ 1, -1 ], [ -1, 1 ]), [ 2, -2 ])
	t.equal(V2.sub.to(tmp, [ 1, 2 ], [ 3, 4 ]), [ -2, -2 ])
})

test("vec2.sub.$$$", (t) => {
	t.equal(V2.sub.$$$([ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.sub.$$$([ 1, -1 ], [ -1, 1 ]), [ 2, -2 ])
	t.equal(V2.sub.$$$([ 1, 2 ], [ 3, 4 ]), [ -2, -2 ])
})

test("vec2.mul", (t) => {
	t.equal(V2.mul([ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.mul([ 0, 0 ], [ 1, 1 ]), [ 0, 0 ])
	t.equal(V2.mul([ 1, 1 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.mul([ 1, -1 ], [ -1, 1 ]), [ -1, -1 ])
	t.equal(V2.mul([ 1, 2 ], [ 5, 6 ]), [ 5, 12 ])
})

test("vec2.mul.to", (t) => {
	t.equal(V2.mul.to(tmp, [ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.mul.to(tmp, [ 0, 0 ], [ 1, 1 ]), [ 0, 0 ])
	t.equal(V2.mul.to(tmp, [ 1, 1 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.mul.to(tmp, [ 1, -1 ], [ -1, 1 ]), [ -1, -1 ])
	t.equal(V2.mul.to(tmp, [ 1, 2 ], [ 5, 6 ]), [ 5, 12 ])
})

test("vec2.mul.$$$", (t) => {
	t.equal(V2.mul.$$$([ 0, 0 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.mul.$$$([ 0, 0 ], [ 1, 1 ]), [ 0, 0 ])
	t.equal(V2.mul.$$$([ 1, 1 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(V2.mul.$$$([ 1, -1 ], [ -1, 1 ]), [ -1, -1 ])
	t.equal(V2.mul.$$$([ 1, 2 ], [ 5, 6 ]), [ 5, 12 ])
})

test("vec2.div", (t) => {
	t.equal(V2.div([ 0, 0 ], [ 0, 0 ]), [ NaN, NaN ])
	t.equal(V2.div([ 0, 0 ], [ 1, 2 ]), [ 0, 0 ])
	t.equal(V2.div([ 1, -1 ], [ -1, 1 ]), [ -1, -1 ])
	t.equal(V2.div([ 2, 4 ], [ 1, 2 ]), [ 2, 2 ])
})

test("vec2.div.to", (t) => {
	t.equal(V2.div.to(tmp, [ 0, 0 ], [ 0, 0 ]), [ NaN, NaN ])
	t.equal(V2.div.to(tmp, [ 0, 0 ], [ 1, 2 ]), [ 0, 0 ])
	t.equal(V2.div.to(tmp, [ 1, -1 ], [ -1, 1 ]), [ -1, -1 ])
	t.equal(V2.div.to(tmp, [ 2, 4 ], [ 1, 2 ]), [ 2, 2 ])
})

test("vec2.div.$$$", (t) => {
	t.equal(V2.div.$$$([ 0, 0 ], [ 0, 0 ]), [ NaN, NaN ])
	t.equal(V2.div.$$$([ 0, 0 ], [ 1, 2 ]), [ 0, 0 ])
	t.equal(V2.div.$$$([ 1, -1 ], [ -1, 1 ]), [ -1, -1 ])
	t.equal(V2.div.$$$([ 2, 4 ], [ 1, 2 ]), [ 2, 2 ])
})

test("vec2.dot", (t) => {
	t.equal(V2.dot([ 0, 0 ], [ 0, 0 ]), 0)
	t.equal(V2.dot([ 1, -1 ], [ -1, 1 ]), -2)
	t.equal(V2.dot([ 1, 2 ], [ 3, 4 ]), 11)
})

test("vec2.cross", (t) => {
	t.equal(V2.cross([ 0, 0 ], [ 0, 0 ]), 0)
	t.equal(V2.cross([ 1, -1 ], [ -1, 1 ]), 0)
	t.equal(V2.cross([ 1, 2 ], [ 3, 4 ]), -2)
})

test("vec2.angle", (t) => {
	t.equal(V2.angle([ 0, 0 ]), NaN)
	floatEqual(t, V2.angle([ 1, 0 ]), 0)
	floatEqual(t, V2.angle([ 1, 1 ]), Math.PI / 4)
	floatEqual(t, V2.angle([ 0, 1 ]), Math.PI / 2)
	floatEqual(t, V2.angle([ -1, 1 ]), 3 * Math.PI / 4)
	floatEqual(t, V2.angle([ -1, 0 ]), Math.PI)
})

test("vec2.angle2", (t) => {
	t.equal(V2.angle2([ 0, 0 ], [ 0, 0 ]), NaN)
	t.equal(V2.angle2([ 1, 1 ], [ 0, 0 ]), NaN)
	floatEqual(t, V2.angle2([ 1, 1 ], [ 1, 1 ]), 0)
	floatEqual(t, V2.angle2([ 1, 0 ], [ -1, 0 ]), Math.PI)
	floatEqual(t, V2.angle2([ 1, 1 ], [ -1, -1 ]), Math.PI)
	floatEqual(t, V2.angle2([ 1, 0 ], [ 0, 1 ]), Math.PI / 2)
	floatEqual(t, V2.angle2([ 0, 1 ], [ 1, 0 ]), Math.PI / 2)
})

test("vec2.eq", (t) => {
	t.equal(V2.eq([ 0, 0 ], [ 0, 0 ]), true)
	t.equal(V2.eq([ 1, 0 ], [ 0, 0 ]), false)
	t.equal(V2.eq([ 2, 3 ], [ 2, 3 ]), true)
	t.equal(V2.eq([ 1, -1 ], [ -1, 1 ]), false)
	t.equal(V2.eq([ NaN, NaN ], [ NaN, NaN ]), false)
})

test("vec2.neq", (t) => {
	t.equal(V2.neq([ 0, 0 ], [ 0, 0 ]), false)
	t.equal(V2.neq([ 1, 0 ], [ 0, 0 ]), true)
	t.equal(V2.neq([ 2, 3 ], [ 2, 3 ]), false)
	t.equal(V2.neq([ 1, -1 ], [ -1, 1 ]), true)
	t.equal(V2.neq([ NaN, NaN ], [ NaN, NaN ]), true)
})

test("vec2.scale", (t) => {
	t.equal(V2.scale([ 0, 0 ], 1), [ 0, 0 ])
	t.equal(V2.scale([ 1, 0 ], 1), [ 1, 0 ])
	t.equal(V2.scale([ 0, 1 ], 1), [ 0, 1 ])
	t.equal(V2.scale([ 3, 4 ], 2), [ 6, 8 ])
})

test("vec2.scale.to", (t) => {
	t.equal(V2.scale.to(tmp, [ 0, 0 ], 1), [ 0, 0 ])
	t.equal(V2.scale.to(tmp, [ 1, 0 ], 1), [ 1, 0 ])
	t.equal(V2.scale.to(tmp, [ 0, 1 ], 1), [ 0, 1 ])
	t.equal(V2.scale.to(tmp, [ 3, 4 ], 2), [ 6, 8 ])
})

test("vec2.scale.$$$", (t) => {
	t.equal(V2.scale.$$$([ 0, 0 ], 1), [ 0, 0 ])
	t.equal(V2.scale.$$$([ 1, 0 ], 1), [ 1, 0 ])
	t.equal(V2.scale.$$$([ 0, 1 ], 1), [ 0, 1 ])
	t.equal(V2.scale.$$$([ 3, 4 ], 2), [ 6, 8 ])
})

test("vec2.normSquared", (t) => {
	t.equal(V2.normSquared([ 0, 0 ]), 0)
	t.equal(V2.normSquared([ 1, 0 ]), 1)
	t.equal(V2.normSquared([ 0, 1 ]), 1)
	t.equal(V2.normSquared([ -1, 0 ]), 1)
	t.equal(V2.normSquared([ 8, 0 ]), 64)
	t.equal(V2.normSquared([ 3, 4 ]), 25)
	t.equal(V2.normSquared([ -4, -3 ]), 25)
})

test("vec2.norm", (t) => {
	t.equal(V2.norm([ 0, 0 ]), 0)
	t.equal(V2.norm([ 1, 0 ]), 1)
	t.equal(V2.norm([ 0, 1 ]), 1)
	t.equal(V2.norm([ -1, 0 ]), 1)
	t.equal(V2.norm([ 8, 0 ]), 8)
	t.equal(V2.norm([ 3, 4 ]), 5)
	t.equal(V2.norm([ -4, -3 ]), 5)
})

test("vec2.normalize", (t) => {
	t.equal(V2.normalize([ 0, 0 ]), [ NaN, NaN ])
	t.equal(V2.normalize([ 1, 0 ]), [ 1, 0 ])
	t.equal(V2.normalize([ 0, 1 ]), [ 0, 1 ])
	t.equal(V2.normalize([ 2, 0 ]), [ 1, 0 ])
	t.equal(V2.normalize([ 0, -4 ]), [ 0, -1 ])
})

test("vec2.normalize.to", (t) => {
	t.equal(V2.normalize.to(tmp, [ 0, 0 ]), [ NaN, NaN ])
	t.equal(V2.normalize.to(tmp, [ 1, 0 ]), [ 1, 0 ])
	t.equal(V2.normalize.to(tmp, [ 0, 1 ]), [ 0, 1 ])
	t.equal(V2.normalize.to(tmp, [ 2, 0 ]), [ 1, 0 ])
	t.equal(V2.normalize.to(tmp, [ 0, -4 ]), [ 0, -1 ])
})

test("vec2.normalize.$$$", (t) => {
	t.equal(V2.normalize.$$$([ 0, 0 ]), [ NaN, NaN ])
	t.equal(V2.normalize.$$$([ 1, 0 ]), [ 1, 0 ])
	t.equal(V2.normalize.$$$([ 0, 1 ]), [ 0, 1 ])
	t.equal(V2.normalize.$$$([ 2, 0 ]), [ 1, 0 ])
	t.equal(V2.normalize.$$$([ 0, -4 ]), [ 0, -1 ])
})
