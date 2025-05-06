const { test } = require('@kmamal/testing')
const N = require('@kmamal/numbers/js')
const V = require('./vector').defineFor(N)

const tmp = []

test("vector.isFinite", (t) => {
	t.equal(V.isFinite([ 0, 0, 0, 0 ]), true)
	t.equal(V.isFinite([ 10, -5, 1, 0 ]), true)
	t.equal(V.isFinite([ 0, 0, 0, Infinity ]), false)
	t.equal(V.isFinite([ Infinity, 0, -Infinity, 0 ]), false)
	t.equal(V.isFinite([ 0, 3, 5, NaN ]), false)
	t.equal(V.isFinite([ 4, NaN, 5, 3 ]), false)
	t.equal(V.isFinite([ NaN, NaN, NaN, NaN ]), false)
})

test("vector.isNaN", (t) => {
	t.equal(V.isNaN([ 0, 0, 0, 0 ]), false)
	t.equal(V.isNaN([ 10, -5, 1, 0 ]), false)
	t.equal(V.isNaN([ 0, 0, 0, Infinity ]), false)
	t.equal(V.isNaN([ Infinity, 0, -Infinity, 0 ]), false)
	t.equal(V.isNaN([ 7, 2, -1, NaN ]), true)
	t.equal(V.isNaN([ 6, NaN, 8, 2 ]), true)
	t.equal(V.isNaN([ NaN, NaN, NaN, NaN ]), true)
})

test("vector.neg", (t) => {
	t.equal(V.neg([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.neg([ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(V.neg([ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("vector.neg.to", (t) => {
	t.equal(V.neg.to(tmp, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.neg.to(tmp, [ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(V.neg.to(tmp, [ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("vector.neg.$$$", (t) => {
	t.equal(V.neg.$$$([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.neg.$$$([ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(V.neg.$$$([ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("vector.abs", (t) => {
	t.equal(V.abs([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.abs([ -5, 7, -9, 3 ]), [ 5, 7, 9, 3 ])
	t.equal(V.abs([ 4, -3, 1, -2 ]), [ 4, 3, 1, 2 ])
})

test("vector.abs.to", (t) => {
	t.equal(V.abs.to(tmp, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.abs.to(tmp, [ -5, 7, -9, 3 ]), [ 5, 7, 9, 3 ])
	t.equal(V.abs.to(tmp, [ 4, -3, 1, -2 ]), [ 4, 3, 1, 2 ])
})

test("vector.abs.$$$", (t) => {
	t.equal(V.abs.$$$([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.abs.$$$([ -5, 7, -9, 3 ]), [ 5, 7, 9, 3 ])
	t.equal(V.abs.$$$([ 4, -3, 1, -2 ]), [ 4, 3, 1, 2 ])
})

test("vector.add", (t) => {
	t.equal(V.add([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.add([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V.add([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("vector.add.to", (t) => {
	t.equal(V.add.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.add.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V.add.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("vector.add.$$$", (t) => {
	t.equal(V.add.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.add.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V.add.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("vector.sub", (t) => {
	t.equal(V.sub([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.sub([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(V.sub([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("vector.sub.to", (t) => {
	t.equal(V.sub.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.sub.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(V.sub.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("vector.sub.$$$", (t) => {
	t.equal(V.sub.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.sub.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(V.sub.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("vector.mul", (t) => {
	t.equal(V.mul([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V.mul([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("vector.mul.to", (t) => {
	t.equal(V.mul.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul.to(tmp, [ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul.to(tmp, [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V.mul.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("vector.mul.$$$", (t) => {
	t.equal(V.mul.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul.$$$([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul.$$$([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(V.mul.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V.mul.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("vector.div", (t) => {
	t.equal(V.div([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V.div([ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(V.div([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V.div([ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("vector.div.to", (t) => {
	t.equal(V.div.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V.div.to(tmp, [ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(V.div.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V.div.to(tmp, [ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("vector.div.$$$", (t) => {
	t.equal(V.div.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V.div.$$$([ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(V.div.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(V.div.$$$([ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("vector.dot", (t) => {
	t.equal(V.dot([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), 0)
	t.equal(V.dot([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), -4)
	t.equal(V.dot([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), 70)
})

test("vector.eq", (t) => {
	t.equal(V.eq([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), true)
	t.equal(V.eq([ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ]), false)
	t.equal(V.eq([ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ]), true)
	t.equal(V.eq([ 1, -1, 1, -1 ], [ 1, 1, 1, -1 ]), false)
	t.equal(V.eq([ NaN, NaN, NaN, NaN ], [ NaN, NaN, NaN, NaN ]), false)
})

test("vector.neq", (t) => {
	t.equal(V.neq([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), false)
	t.equal(V.neq([ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ]), true)
	t.equal(V.neq([ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ]), false)
	t.equal(V.neq([ 1, -1, 1, -1 ], [ 1, 1, 1, -1 ]), true)
	t.equal(V.neq([ NaN, NaN, NaN, NaN ], [ NaN, NaN, NaN, NaN ]), true)
})

test("vector.scale", (t) => {
	t.equal(V.scale([ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(V.scale([ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(V.scale([ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(V.scale([ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(V.scale([ 0, 0, 0, 1 ], 1), [ 0, 0, 0, 1 ])
	t.equal(V.scale([ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("vector.scale.to", (t) => {
	t.equal(V.scale.to(tmp, [ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(V.scale.to(tmp, [ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(V.scale.to(tmp, [ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(V.scale.to(tmp, [ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(V.scale.to(tmp, [ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("vector.scale.$$$", (t) => {
	t.equal(V.scale.$$$([ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(V.scale.$$$([ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(V.scale.$$$([ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(V.scale.$$$([ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(V.scale.$$$([ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("vector.normSquared", (t) => {
	t.equal(V.normSquared([ 0, 0, 0, 0 ]), 0)
	t.equal(V.normSquared([ 1, 0, 0, 0 ]), 1)
	t.equal(V.normSquared([ 0, 1, 0, 0 ]), 1)
	t.equal(V.normSquared([ 0, 0, 1, 0 ]), 1)
	t.equal(V.normSquared([ 0, 0, 0, 1 ]), 1)
	t.equal(V.normSquared([ 0, 0, 0, -1 ]), 1)
	t.equal(V.normSquared([ 0, 0, 0, 8 ]), 64)
	t.equal(V.normSquared([ 0, 3, 0, 4 ]), 25)
	t.equal(V.normSquared([ 0, -4, 0, -3 ]), 25)
})

test("vector.norm", (t) => {
	t.equal(V.norm([ 0, 0, 0, 0 ]), 0)
	t.equal(V.norm([ 1, 0, 0, 0 ]), 1)
	t.equal(V.norm([ 0, 1, 0, 0 ]), 1)
	t.equal(V.norm([ 0, 0, 1, 0 ]), 1)
	t.equal(V.norm([ 0, 0, 0, 1 ]), 1)
	t.equal(V.norm([ 0, 0, 0, -1 ]), 1)
	t.equal(V.norm([ 0, 0, 0, 8 ]), 8)
	t.equal(V.norm([ 0, 3, 0, 4 ]), 5)
	t.equal(V.norm([ 0, -4, 0, -3 ]), 5)
})

test("vector.normalize", (t) => {
	t.equal(V.normalize([ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V.normalize([ 1, 0, 0, 0 ]), [ 1, 0, 0, 0 ])
	t.equal(V.normalize([ 0, 1, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V.normalize([ 0, 0, 1, 0 ]), [ 0, 0, 1, 0 ])
	t.equal(V.normalize([ 0, 0, 0, 1 ]), [ 0, 0, 0, 1 ])
	t.equal(V.normalize([ 0, 0, 0, 2 ]), [ 0, 0, 0, 1 ])
	t.equal(V.normalize([ 0, 2, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V.normalize([ 0, 0, 0, -4 ]), [ 0, 0, 0, -1 ])
})

test("vector.normalize.to", (t) => {
	t.equal(V.normalize.to(tmp, [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V.normalize.to(tmp, [ 1, 0, 0, 0 ]), [ 1, 0, 0, 0 ])
	t.equal(V.normalize.to(tmp, [ 0, 1, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V.normalize.to(tmp, [ 0, 0, 1, 0 ]), [ 0, 0, 1, 0 ])
	t.equal(V.normalize.to(tmp, [ 0, 0, 0, 1 ]), [ 0, 0, 0, 1 ])
	t.equal(V.normalize.to(tmp, [ 0, 0, 0, 2 ]), [ 0, 0, 0, 1 ])
	t.equal(V.normalize.to(tmp, [ 0, 2, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V.normalize.to(tmp, [ 0, 0, 0, -4 ]), [ 0, 0, 0, -1 ])
})

test("vector.normalize.$$$", (t) => {
	t.equal(V.normalize.$$$([ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(V.normalize.$$$([ 1, 0, 0, 0 ]), [ 1, 0, 0, 0 ])
	t.equal(V.normalize.$$$([ 0, 1, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V.normalize.$$$([ 0, 0, 1, 0 ]), [ 0, 0, 1, 0 ])
	t.equal(V.normalize.$$$([ 0, 0, 0, 1 ]), [ 0, 0, 0, 1 ])
	t.equal(V.normalize.$$$([ 0, 0, 0, 2 ]), [ 0, 0, 0, 1 ])
	t.equal(V.normalize.$$$([ 0, 2, 0, 0 ]), [ 0, 1, 0, 0 ])
	t.equal(V.normalize.$$$([ 0, 0, 0, -4 ]), [ 0, 0, 0, -1 ])
})
