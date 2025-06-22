const { memoize } = require('@kmamal/util/function/memoize')
const { create } = require('@kmamal/util/array/create')
const { uniform } = require('@kmamal/util/random/uniform')

const defineFor = memoize((Matrix) => {
	const {
		bar,
	} = Matrix

	const {
		foo: _foo,
	} = Matrix.Algebra

	const baz = () => {}

	return { baz }
})

module.exports = { defineFor }


const V = require('../vector').defineFor(require('@kmamal/numbers/js'))

const init = ({ mat, M, N, vec }) => {
	const { length } = mat
	if (M * N !== length) { throw new Error("bad length") }
	if (M !== N) { throw new Error("not square") }

	const eigenvector = vec ?? create(N, uniform)
	V.normalize.$$$(eigenvector)
	return {
		mat: Array.from(mat),
		mat2: Array.from(mat),
		M,
		N,
		eigenvector,
		eigenvector2: new Array(N),
	}
}

const iter = (state) => {
	const { mat, mat2, M, N, eigenvector, eigenvector2 } = state
	_mulMatMat(mat2, mat, M, N, mat, M, N)
	_mulMatVec(eigenvector2, mat2, M, N, eigenvector)
	V.normalize.$$$(eigenvector2)
	state.eigenvector = eigenvector2
	state.eigenvector2 = eigenvector
	state.mat = mat2
	state.mat2 = mat
}

const rayleighQuotient = (mat, M, N, vec) => {
	const tmp = new Array(vec.length)
	_mulMatVec(tmp, mat, M, N, vec)
	return V.dot(vec, tmp) / V.dot(vec, vec)
}

const findEigenpairs = (mat, M, N) => {
	const { length } = mat
	if (M * N !== length) { throw new Error("bad length") }
	if (M !== N) { throw new Error("not square") }

	const deflated = Array.from(mat)
	const correction = new Array(M * N)

	const _mat = new Array(M * N)
	const _zero = new Array(M)

	const eigenvectors = new Array(M)
	const eigenvalues = new Array(M)
	for (let i = 0; i < M; i++) {
		const state = init({ mat: deflated, M, N })
		for (let j = 0; j < 100; j++) { iter(state) }
		const { eigenvector } = state
		const eigenvalue = rayleighQuotient(mat, M, N, eigenvector)

		copy$$$(_mat, mat)
		for (let j = 0; j < N; j++) { _mat[j * N + j] -= eigenvalue }
		_mulMatVec(_zero, _mat, M, N, eigenvector)
		if (!isZero(_zero, 1, M)) {
			eigenvectors.length = i
			eigenvalues.length = i
			break
		}

		eigenvectors[i] = eigenvector
		eigenvalues[i] = eigenvalue

		if (i === M - 1) { break }

		_mulMatMat(correction, eigenvector, M, 1, eigenvector, 1, N)
		V.sub.$$$(deflated, V.scale.$$$(correction, eigenvalue))
		console.log(deflated)
	}

	return { eigenvectors, eigenvalues }
}
