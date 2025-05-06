const { test } = require('@kmamal/testing')
const N = require('@kmamal/numbers/js')
const M2 = require('./mat2').defineFor(N)

const tmp = []

test("mat2.isFinite", (t) => {
	t.equal(M2.isFinite([ 0, 0, 0, 0 ]), true)
	t.equal(M2.isFinite([ 10, -5, 1, 0 ]), true)
	t.equal(M2.isFinite([ 0, 0, 0, Infinity ]), false)
	t.equal(M2.isFinite([ Infinity, 0, -Infinity, 0 ]), false)
	t.equal(M2.isFinite([ 0, 3, 5, NaN ]), false)
	t.equal(M2.isFinite([ 4, NaN, 5, 3 ]), false)
	t.equal(M2.isFinite([ NaN, NaN, NaN, NaN ]), false)
})

test("mat2.isNaN", (t) => {
	t.equal(M2.isNaN([ 0, 0, 0, 0 ]), false)
	t.equal(M2.isNaN([ 10, -5, 1, 0 ]), false)
	t.equal(M2.isNaN([ 0, 0, 0, Infinity ]), false)
	t.equal(M2.isNaN([ Infinity, 0, -Infinity, 0 ]), false)
	t.equal(M2.isNaN([ 7, 2, -1, NaN ]), true)
	t.equal(M2.isNaN([ 6, NaN, 8, 2 ]), true)
	t.equal(M2.isNaN([ NaN, NaN, NaN, NaN ]), true)
})

test("mat2.neg", (t) => {
	t.equal(M2.neg([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.neg([ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("mat2.neg.to", (t) => {
	t.equal(M2.neg.to(tmp, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.neg.to(tmp, [ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(M2.neg.to(tmp, [ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("mat2.neg.$$$", (t) => {
	t.equal(M2.neg.$$$([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.neg.$$$([ -5, 7, -9, 3 ]), [ 5, -7, 9, -3 ])
	t.equal(M2.neg.$$$([ 4, -3, 1, -2 ]), [ -4, 3, -1, 2 ])
})

test("mat2.add", (t) => {
	t.equal(M2.add([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.add([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.add([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("mat2.add.to", (t) => {
	t.equal(M2.add.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.add.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.add.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("mat2.add.$$$", (t) => {
	t.equal(M2.add.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.add.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.add.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 6, 8, 10, 12 ])
})

test("mat2.sub", (t) => {
	t.equal(M2.sub([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.sub([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(M2.sub([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("mat2.sub.to", (t) => {
	t.equal(M2.sub.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.sub.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(M2.sub.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("mat2.sub.$$$", (t) => {
	t.equal(M2.sub.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.sub.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ 2, -2, 2, -2 ])
	t.equal(M2.sub.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ -4, -4, -4, -4 ])
})

test("mat2.mul", (t) => {
	t.equal(M2.mul([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(M2.mul([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("mat2.mul.to", (t) => {
	t.equal(M2.mul.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul.to(tmp, [ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul.to(tmp, [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(M2.mul.to(tmp, [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("mat2.mul.$$$", (t) => {
	t.equal(M2.mul.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul.$$$([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul.$$$([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mul.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(M2.mul.$$$([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]), [ 5, 12, 21, 32 ])
})

test("mat2.div", (t) => {
	t.equal(M2.div([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(M2.div([ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.div([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(M2.div([ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("mat2.div.to", (t) => {
	t.equal(M2.div.to(tmp, [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(M2.div.to(tmp, [ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.div.to(tmp, [ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(M2.div.to(tmp, [ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("mat2.div.$$$", (t) => {
	t.equal(M2.div.$$$([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), [ NaN, NaN, NaN, NaN ])
	t.equal(M2.div.$$$([ 0, 0, 0, 0 ], [ 1, 2, 3, 4 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.div.$$$([ 1, -1, 1, -1 ], [ -1, 1, -1, 1 ]), [ -1, -1, -1, -1 ])
	t.equal(M2.div.$$$([ 2, 4, 6, 8 ], [ 1, 2, 3, 4 ]), [ 2, 2, 2, 2 ])
})

test("mat2.transpose", (t) => {
	t.equal(M2.transpose([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.transpose([ 1, 2, 3, 4 ]), [ 1, 3, 2, 4 ])
})

test("mat2.transpose.to", (t) => {
	t.equal(M2.transpose.to(tmp, [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.transpose.to(tmp, [ 1, 2, 3, 4 ]), [ 1, 3, 2, 4 ])
})

test("mat2.transpose.$$$", (t) => {
	t.equal(M2.transpose.$$$([ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.transpose.$$$([ 1, 2, 3, 4 ]), [ 1, 3, 2, 4 ])
})

test("mat2.mulMatVec", (t) => {
	t.equal(M2.mulMatVec([ 0, 0, 0, 0 ], [ 1, 1 ]), [ 0, 0 ])
	t.equal(M2.mulMatVec([ 1, 1, 1, 1 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(M2.mulMatVec([ 1, 0, 0, 1 ], [ 2, 3 ]), [ 2, 3 ])
	t.equal(M2.mulMatVec([ 0, 1, 1, 0 ], [ 2, 3 ]), [ 3, 2 ])
	t.equal(M2.mulMatVec([ 2, 3, 4, 5 ], [ 6, 7 ]), [ 33, 59 ])
})

test("mat2.mulMatVec.to", (t) => {
	t.equal(M2.mulMatVec.to(tmp, [ 0, 0, 0, 0 ], [ 1, 1 ]), [ 0, 0 ])
	t.equal(M2.mulMatVec.to(tmp, [ 1, 1, 1, 1 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(M2.mulMatVec.to(tmp, [ 1, 0, 0, 1 ], [ 2, 3 ]), [ 2, 3 ])
	t.equal(M2.mulMatVec.to(tmp, [ 0, 1, 1, 0 ], [ 2, 3 ]), [ 3, 2 ])
	t.equal(M2.mulMatVec.to(tmp, [ 2, 3, 4, 5 ], [ 6, 7 ]), [ 33, 59 ])
})

test("mat2.mulMatVec.$$$", (t) => {
	t.equal(M2.mulMatVec.$$$([ 0, 0, 0, 0 ], [ 1, 1 ]), [ 0, 0 ])
	t.equal(M2.mulMatVec.$$$([ 1, 1, 1, 1 ], [ 0, 0 ]), [ 0, 0 ])
	t.equal(M2.mulMatVec.$$$([ 1, 0, 0, 1 ], [ 2, 3 ]), [ 2, 3 ])
	t.equal(M2.mulMatVec.$$$([ 0, 1, 1, 0 ], [ 2, 3 ]), [ 3, 2 ])
	t.equal(M2.mulMatVec.$$$([ 2, 3, 4, 5 ], [ 6, 7 ]), [ 33, 59 ])
})

test("mat2.mulMatMat", (t) => {
	t.equal(M2.mulMatMat([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mulMatMat([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mulMatMat([ 1, 0, 0, 1 ], [ 2, 3, 4, 5 ]), [ 2, 3, 4, 5 ])
	t.equal(M2.mulMatMat([ 2, 3, 4, 5 ], [ 1, 0, 0, 1 ]), [ 2, 3, 4, 5 ])
	t.equal(M2.mulMatMat([ 0, 1, 1, 0 ], [ 2, 3, 4, 5 ]), [ 4, 5, 2, 3 ])
	t.equal(M2.mulMatMat([ 2, 3, 4, 5 ], [ 6, 7, 8, 9 ]), [ 36, 41, 64, 73 ])
})

test("mat2.mulMatMat.to", (t) => {
	t.equal(M2.mulMatMat.to(tmp, [ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mulMatMat.to(tmp, [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mulMatMat.to(tmp, [ 1, 0, 0, 1 ], [ 2, 3, 4, 5 ]), [ 2, 3, 4, 5 ])
	t.equal(M2.mulMatMat.to(tmp, [ 2, 3, 4, 5 ], [ 1, 0, 0, 1 ]), [ 2, 3, 4, 5 ])
	t.equal(M2.mulMatMat.to(tmp, [ 0, 1, 1, 0 ], [ 2, 3, 4, 5 ]), [ 4, 5, 2, 3 ])
	t.equal(M2.mulMatMat.to(tmp, [ 2, 3, 4, 5 ], [ 6, 7, 8, 9 ]), [ 36, 41, 64, 73 ])
})

test("mat2.mulMatMat.$$$", (t) => {
	t.equal(M2.mulMatMat.$$$([ 0, 0, 0, 0 ], [ 1, 1, 1, 1 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mulMatMat.$$$([ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ]), [ 0, 0, 0, 0 ])
	t.equal(M2.mulMatMat.$$$([ 1, 0, 0, 1 ], [ 2, 3, 4, 5 ]), [ 2, 3, 4, 5 ])
	t.equal(M2.mulMatMat.$$$([ 2, 3, 4, 5 ], [ 1, 0, 0, 1 ]), [ 2, 3, 4, 5 ])
	t.equal(M2.mulMatMat.$$$([ 0, 1, 1, 0 ], [ 2, 3, 4, 5 ]), [ 4, 5, 2, 3 ])
	t.equal(M2.mulMatMat.$$$([ 2, 3, 4, 5 ], [ 6, 7, 8, 9 ]), [ 36, 41, 64, 73 ])
})

test("mat2.eq", (t) => {
	t.equal(M2.eq([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), true)
	t.equal(M2.eq([ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ]), false)
	t.equal(M2.eq([ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ]), true)
	t.equal(M2.eq([ 1, -1, 1, -1 ], [ 1, 1, 1, -1 ]), false)
	t.equal(M2.eq([ NaN, NaN, NaN, NaN ], [ NaN, NaN, NaN, NaN ]), false)
})

test("mat2.neq", (t) => {
	t.equal(M2.neq([ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]), false)
	t.equal(M2.neq([ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ]), true)
	t.equal(M2.neq([ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ]), false)
	t.equal(M2.neq([ 1, -1, 1, -1 ], [ 1, 1, 1, -1 ]), true)
	t.equal(M2.neq([ NaN, NaN, NaN, NaN ], [ NaN, NaN, NaN, NaN ]), true)
})

test("mat2.scale", (t) => {
	t.equal(M2.scale([ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(M2.scale([ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(M2.scale([ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(M2.scale([ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(M2.scale([ 0, 0, 0, 1 ], 1), [ 0, 0, 0, 1 ])
	t.equal(M2.scale([ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("mat2.scale.to", (t) => {
	t.equal(M2.scale.to(tmp, [ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(M2.scale.to(tmp, [ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(M2.scale.to(tmp, [ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(M2.scale.to(tmp, [ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(M2.scale.to(tmp, [ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("mat2.scale.$$$", (t) => {
	t.equal(M2.scale.$$$([ 0, 0, 0, 0 ], 1), [ 0, 0, 0, 0 ])
	t.equal(M2.scale.$$$([ 1, 0, 0, 0 ], 1), [ 1, 0, 0, 0 ])
	t.equal(M2.scale.$$$([ 0, 1, 0, 0 ], 1), [ 0, 1, 0, 0 ])
	t.equal(M2.scale.$$$([ 0, 0, 1, 0 ], 1), [ 0, 0, 1, 0 ])
	t.equal(M2.scale.$$$([ 3, 4, 5, 6 ], 2), [ 6, 8, 10, 12 ])
})

test("mat2.inverse", (t) => {
	t.throws(() => { M2.inverse([ 0, 0, 0, 0 ]) })
	t.equal(M2.inverse([ 1, 0, 0, 1 ]), [ 1, 0, 0, 1 ])
	t.equal(M2.inverse([ 0, 1, 1, 0 ]), [ 0, 1, 1, 0 ])
	t.equal(M2.inverse([ 2, 0, 0, 2 ]), [ 0.5, 0, 0, 0.5 ])
	t.equal(M2.inverse([ 1, 2, 3, 4 ]), [ -2, 1, 3 / 2, -1 / 2 ])
})
