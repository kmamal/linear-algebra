const { test } = require('@kmamal/testing')
const N = require('@kmamal/numbers/js')
const V4 = require('./vec4').defineFor(N)

const tmp = []

test("vec4.isFinite", (t) => {
	t.equal(V4.isFinite([ 0, 0, 0, 0 ]), true)
	t.equal(V4.isFinite([ 10, -5, 1, 0 ]), true)
	t.equal(V4.isFinite([ 0, 0, 0, Infinity ]), false)
	t.equal(V4.isFinite([ Infinity, 0, -Infinity, 0 ]), false)
	t.equal(V4.isFinite([ 0, 3, 5, NaN ]), false)
	t.equal(V4.isFinite([ 4, NaN, 5, 3 ]), false)
	t.equal(V4.isFinite([ NaN, NaN, NaN, NaN ]), false)
})

test("vec4.isNaN", (t) => {
	t.equal(V4.isNaN([ 0, 0, 0, 0 ]), false)
	t.equal(V4.isNaN([ 10, -5, 1, 0 ]), false)
	t.equal(V4.isNaN([ 0, 0, 0, Infinity ]), false)
	t.equal(V4.isNaN([ Infinity, 0, -Infinity, 0 ]), false)
	t.equal(V4.isNaN([ 7, 2, -1, NaN ]), true)
	t.equal(V4.isNaN([ 6, NaN, 8, 2 ]), true)
	t.equal(V4.isNaN([ NaN, NaN, NaN, NaN ]), true)
})

test("vec4.neg", (t) => {
	t.equal(V4.neg([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.neg([ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(V4.neg([ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("vec4.neg.to", (t) => {
	t.equal(V4.neg.to(tmp, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.neg.to(tmp, [ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(V4.neg.to(tmp, [ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("vec4.neg.$$$", (t) => {
	t.equal(V4.neg.$$$([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.neg.$$$([ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(V4.neg.$$$([ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("vec4.abs", (t) => {
	t.equal(V4.abs([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.abs([ -5, 7, -9, 3 ]), [ 5, 7, 9, 3 ])
	t.equal(V4.abs([ 4, -3, 1, -2 ]), [ 4, 3, 1, 2 ])
})

test("vec4.abs.to", (t) => {
	t.equal(V4.abs.to(tmp, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.abs.to(tmp, [ -5, 7, -9, 3 ]), [ 5, 7, 9, 3 ])
	t.equal(V4.abs.to(tmp, [ 4, -3, 1, -2 ]), [ 4, 3, 1, 2 ])
})

test("vec4.abs.$$$", (t) => {
	t.equal(V4.abs.$$$([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.abs.$$$([ -5, 7, -9, 3 ]), [ 5, 7, 9, 3 ])
	t.equal(V4.abs.$$$([ 4, -3, 1, -2 ]), [ 4, 3, 1, 2 ])
})

test("vec4.add", (t) => {
	t.equal(V4.add([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.add([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.add([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("vec4.add.to", (t) => {
	t.equal(V4.add.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.add.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.add.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("vec4.add.$$$", (t) => {
	t.equal(V4.add.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.add.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.add.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("vec4.sub", (t) => {
	t.equal(V4.sub([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.sub([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(V4.sub([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("vec4.sub.to", (t) => {
	t.equal(V4.sub.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.sub.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(V4.sub.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("vec4.sub.$$$", (t) => {
	t.equal(V4.sub.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.sub.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(V4.sub.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("vec4.mul", (t) => {
	t.equal(V4.mul([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V4.mul([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("vec4.mul.to", (t) => {
	t.equal(V4.mul.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul.to(tmp, [ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul.to(tmp, [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V4.mul.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("vec4.mul.$$$", (t) => {
	t.equal(V4.mul.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul.$$$([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul.$$$([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.mul.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V4.mul.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("vec4.div", (t) => {
	t.equal(V4.div([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V4.div([ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.div([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V4.div([ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("vec4.div.to", (t) => {
	t.equal(V4.div.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V4.div.to(tmp, [ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.div.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V4.div.to(tmp, [ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("vec4.div.$$$", (t) => {
	t.equal(V4.div.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V4.div.$$$([ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(V4.div.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V4.div.$$$([ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("vec4.dot", (t) => {
	t.equal(V4.dot([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), 0)
	t.equal(V4.dot([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), -4)
	t.equal(V4.dot([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), 70)
})

test("vec4.eq", (t) => {
	t.equal(V4.eq([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), true)
	t.equal(V4.eq([ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ]), false)
	t.equal(V4.eq([ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ]), true)
	t.equal(V4.eq([ 1, -1, 1, -1 ], [ 1, 1, 1, -1 ]), false)
	t.equal(V4.eq([ NaN, NaN, NaN, NaN ], [ NaN, NaN, NaN, NaN ]), false)
})

test("vec4.neq", (t) => {
	t.equal(V4.neq([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), false)
	t.equal(V4.neq([ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ]), true)
	t.equal(V4.neq([ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ]), false)
	t.equal(V4.neq([ 1, -1, 1, -1 ], [ 1, 1, 1, -1 ]), true)
	t.equal(V4.neq([ NaN, NaN, NaN, NaN ], [ NaN, NaN, NaN, NaN ]), true)
})

test("vec4.scale", (t) => {
	t.equal(V4.scale([ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(V4.scale([ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(V4.scale([ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(V4.scale([ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(V4.scale([ 0, 0, 0, 1 ], 1), [ 0, 0, 0, 1 ])
	t.equal(V4.scale([ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("vec4.scale.to", (t) => {
	t.equal(V4.scale.to(tmp, [ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(V4.scale.to(tmp, [ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(V4.scale.to(tmp, [ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(V4.scale.to(tmp, [ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(V4.scale.to(tmp, [ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("vec4.scale.$$$", (t) => {
	t.equal(V4.scale.$$$([ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(V4.scale.$$$([ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(V4.scale.$$$([ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(V4.scale.$$$([ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(V4.scale.$$$([ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("vec4.normSquared", (t) => {
	t.equal(V4.normSquared([ 0, 0, 0, 0 ]), 0)
	t.equal(V4.normSquared([ 1, 0, 0, 0 ]), 1)
	t.equal(V4.normSquared([ 0, 1, 0, 0 ]), 1)
	t.equal(V4.normSquared([ 0, 0, 1, 0 ]), 1)
	t.equal(V4.normSquared([ 0, 0, 0, 1 ]), 1)
	t.equal(V4.normSquared([ 0, 0, 0, -1 ]), 1)
	t.equal(V4.normSquared([ 0, 0, 0, 8 ]), 64)
	t.equal(V4.normSquared([ 0, 3, 0, 4 ]), 25)
	t.equal(V4.normSquared([ 0, -4, 0, -3 ]), 25)
})

test("vec4.norm", (t) => {
	t.equal(V4.norm([ 0, 0, 0, 0 ]), 0)
	t.equal(V4.norm([ 1, 0, 0, 0 ]), 1)
	t.equal(V4.norm([ 0, 1, 0, 0 ]), 1)
	t.equal(V4.norm([ 0, 0, 1, 0 ]), 1)
	t.equal(V4.norm([ 0, 0, 0, 1 ]), 1)
	t.equal(V4.norm([ 0, 0, 0, -1 ]), 1)
	t.equal(V4.norm([ 0, 0, 0, 8 ]), 8)
	t.equal(V4.norm([ 0, 3, 0, 4 ]), 5)
	t.equal(V4.norm([ 0, -4, 0, -3 ]), 5)
})

test("vec4.normalize", (t) => {
	t.equal(V4.normalize([ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V4.normalize([ 1, 0, 0, 0 ]), [ 1, 0, 0, 0 ])
	t.equal(V4.normalize([ 0, 1, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V4.normalize([ 0, 0, 1, 0 ]), [ 0, 0, 1, 0 ])
	t.equal(V4.normalize([ 0, 0, 0, 1 ]), [ 0, 0, 0, 1 ])
	t.equal(V4.normalize([ 0, 0, 0, 2 ]), [ 0, 0, 0, 1 ])
	t.equal(V4.normalize([ 0, 2, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V4.normalize([ 0, 0, 0, -4 ]), [ 0, 0, 0, -1 ])
})

test("vec4.normalize.to", (t) => {
	t.equal(V4.normalize.to(tmp, [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V4.normalize.to(tmp, [ 1, 0, 0, 0 ]), [ 1, 0, 0, 0 ])
	t.equal(V4.normalize.to(tmp, [ 0, 1, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V4.normalize.to(tmp, [ 0, 0, 1, 0 ]), [ 0, 0, 1, 0 ])
	t.equal(V4.normalize.to(tmp, [ 0, 0, 0, 1 ]), [ 0, 0, 0, 1 ])
	t.equal(V4.normalize.to(tmp, [ 0, 0, 0, 2 ]), [ 0, 0, 0, 1 ])
	t.equal(V4.normalize.to(tmp, [ 0, 2, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V4.normalize.to(tmp, [ 0, 0, 0, -4 ]), [ 0, 0, 0, -1 ])
})

test("vec4.normalize.$$$", (t) => {
	t.equal(V4.normalize.$$$([ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V4.normalize.$$$([ 1, 0, 0, 0 ]), [ 1, 0, 0, 0 ])
	t.equal(V4.normalize.$$$([ 0, 1, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V4.normalize.$$$([ 0, 0, 1, 0 ]), [ 0, 0, 1, 0 ])
	t.equal(V4.normalize.$$$([ 0, 0, 0, 1 ]), [ 0, 0, 0, 1 ])
	t.equal(V4.normalize.$$$([ 0, 0, 0, 2 ]), [ 0, 0, 0, 1 ])
	t.equal(V4.normalize.$$$([ 0, 2, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V4.normalize.$$$([ 0, 0, 0, -4 ]), [ 0, 0, 0, -1 ])
})
