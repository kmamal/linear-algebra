const { memoize } = require('@kmamal/util/function/memoize')

const defineFor = memoize((Matrix) => {
	const _tmp1 = {}
	const _tmp2 = {}

	const {
		mulMatVec,
	} = Matrix

	const {
		__info: { isPrimitive },
		copy: _copy,
		sub: _sub,
		mul: _mul,
		div: _div,
	} = Matrix.Algebra

	const _sub$$$ = _sub.$$$
	const _mulTo = _mul.to
	const _divTo = _div.to

	const { inverse } = require('./inverse').defineFor(Matrix)
	const { decomposeLU } = require('./decompose-lu').defineFor(Matrix)

	const solveViaInverse = (a, M, N, b) => {
		const { length } = a
		if (M * N !== length) { throw new Error("bad length") }
		if (M !== N) { throw new Error("not square") }
		if (b.length !== M) { throw new Error("bad length") }

		const ai = inverse(a, M, N)
		return mulMatVec(ai, M, N, b)
	}

	const solveUpperTriangular = isPrimitive
		? (a, M, N, b) => {
			const { length } = a
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }
			if (b.length !== M) { throw new Error("bad length") }

			const x = new Array(N)
			for (let m = N - 1; m >= 0; m--) {
				let q = b[m]
				for (let n = m + 1; n < N; n++) {
					q -= a[m * N + n] * x[n]
				}
				x[m] = q / a[m * N + m]
			}
			return x
		}
		: (a, M, N, b) => {
			const { length } = a
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }
			if (b.length !== M) { throw new Error("bad length") }

			const x = new Array(N)
			for (let m = N - 1; m >= 0; m--) {
				const q = _copy(_tmp1, b[m])
				for (let n = m + 1; n < N; n++) {
					_sub$$$(q, _mulTo(_tmp2, a[m * N + n], b[n]))
				}
				_divTo(x[m], q, a[m * N + m])
			}
			return x
		}

	const solveLowerTriangular = isPrimitive
		? (a, M, N, b) => {
			const { length } = a
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }
			if (b.length !== M) { throw new Error("bad length") }

			const x = new Array(N)
			for (let m = 0; m < M; m++) {
				let q = b[m]
				for (let n = 0; n < m; n++) {
					q -= a[m * N + n] * x[n]
				}
				x[m] = q / a[m * N + m]
			}
			return x
		}
		: (a, M, N, b) => {
			const { length } = a
			if (M * N !== length) { throw new Error("bad length") }
			if (M !== N) { throw new Error("not square") }
			if (b.length !== M) { throw new Error("bad length") }

			const x = new Array(N)
			for (let m = 0; m < M; m++) {
				const q = _copy(_tmp1, b[m])
				for (let n = 0; n < m; n++) {
					_sub$$$(q, _mulTo(_tmp2, a[m * N + n], b[n]))
				}
				_divTo(x[m], q, a[m * N + m])
			}
			return x
		}

	const solveFromLU = ({ L, U, swaps }, M, N, b) => {
		if (M !== N) { throw new Error("not square") }
		if (b.length !== M) { throw new Error("bad length") }

		const pb = new Array(b.length)
		for (let i = 0; i < b.length; i++) {
			pb[i] = b[swaps[i]]
		}

		const y = solveLowerTriangular(L, M, N, pb)
		return solveUpperTriangular(U, M, N, y)
	}

	const solve = (a, M, N, b) => {
		const { length } = a
		if (M * N !== length) { throw new Error("bad length") }
		if (M !== N) { throw new Error("not square") }
		if (b.length !== M) { throw new Error("bad length") }

		const lu = decomposeLU(a, M, N)
		return solveFromLU(lu, M, N, b)
	}

	return {
		solveViaInverse,
		solveUpperTriangular,
		solveLowerTriangular,
		solveFromLU,
		solve,
	}
})

module.exports = { defineFor }
