const { memoize } = require('@kmamal/util/function/memoize')
const { create } = require('@kmamal/util/array/create')
const { swap } = require('@kmamal/util/array/swap')
const { isNear } = require('@kmamal/util/number/is-near')

const swap$$$ = swap.$$$

const defineFor = memoize((Matrix) => {
	const {
		mulMatMat,
	} = Matrix

	const {
		foo: _foo,
	} = Matrix.Algebra

	const Vector = require('../vector').defineFor(Matrix.Algebra)

	const decomposeSVD = (mat, M, N) => {
		const { length } = mat
		if (M * N !== length) { throw new Error("bad length") }

		const columnsOfUS = create(N, () => new Array(M))
		const squaredNorms = new Array(N).fill(0)
		for (let m = 0; m < M; m++) {
			for (let n = 0; n < N; n++) {
				const x = mat[m * N + n]
				columnsOfUS[n][m] = x
				squaredNorms[n] += x * x
			}
		}
		const rowsOfVt = create(N, (i) => Vector.unit(N, i))

		let rank = N
		for (;;) {
			let didStuff = false

			for (let i = 0; i < rank - 1; i++) {
				if (isNear(squaredNorms[i], 0)) {
					rank--
					if (i !== rank) {
						swap$$$(columnsOfUS, i, rank)
						swap$$$(squaredNorms, i, rank)
						swap$$$(rowsOfVt, i, rank)
					}
					didStuff = true
					i--
					continue
				}

				for (let j = i + 1; j < rank; j++) {
					if (isNear(squaredNorms[j], 0)) {
						rank--
						if (j !== rank) {
							swap$$$(columnsOfUS, j, rank)
							swap$$$(squaredNorms, j, rank)
							swap$$$(rowsOfVt, j, rank)
						}
						didStuff = true
						j--
						continue
					}

					const dot = Vector.dot(columnsOfUS[i], columnsOfUS[j])
					const cosine = dot / Math.sqrt(squaredNorms[i] * squaredNorms[j])

					if (isNear(cosine, 0)) {
						if (squaredNorms[i] < squaredNorms[j]) {
							swap$$$(columnsOfUS, i, j)
							swap$$$(squaredNorms, i, j)
							swap$$$(rowsOfVt, i, j)
							didStuff = true
						}
						continue
					}

					const b = (squaredNorms[i] - squaredNorms[j]) / (2 * dot)
					const sb = Math.sign(b)
					const t = sb / (Math.abs(b) + Math.sqrt(1 + b * b))
					const c = 1 / Math.sqrt(1 + t * t)
					const s = c * t

					squaredNorms[i] = 0
					squaredNorms[j] = 0
					for (let k = 0; k < M; k++) {
						const xi = c * columnsOfUS[i][k] + s * columnsOfUS[j][k]
						const xj = c * columnsOfUS[j][k] - s * columnsOfUS[i][k]
						columnsOfUS[i][k] = xi
						columnsOfUS[j][k] = xj
						squaredNorms[i] += xi * xi
						squaredNorms[j] += xj * xj
					}
					for (let k = 0; k < N; k++) {
						const yi = c * rowsOfVt[i][k] + s * rowsOfVt[j][k]
						const yj = c * rowsOfVt[j][k] - s * rowsOfVt[i][k]
						rowsOfVt[i][k] = yi
						rowsOfVt[j][k] = yj
					}

					if (squaredNorms[i] < squaredNorms[j]) {
						swap$$$(columnsOfUS, i, j)
						swap$$$(squaredNorms, i, j)
						swap$$$(rowsOfVt, i, j)
					}

					didStuff = true
				}
			}

			if (!didStuff) { break }
		}

		const U = new Array(M * rank)
		const singularValues = new Array(rank)
		const Vt = new Array(rank * N)

		for (let r = 0; r < rank; r++) {
			for (let n = 0; n < N; n++) {
				Vt[r * N + n] = rowsOfVt[r][n]
			}

			const norm = Math.sqrt(squaredNorms[r])
			singularValues[r] = norm

			for (let m = 0; m < M; m++) {
				U[m * rank + r] = columnsOfUS[r][m] / norm
			}
		}

		return { U, singularValues, Vt }
	}

	const recoverOriginalFromSVD = ({ U, singularValues, Vt }, M, N, _R) => {
		const maxR = singularValues.length
		const R = _R ? Math.min(maxR, _R) : maxR

		const US = Array.from(U)
		for (let r = 0; r < R; r++) {
			const s = singularValues[r]
			for (let m = 0; m < M; m++) {
				US[m * R + r] *= s
			}
		}
		return mulMatMat(US, M, R, Vt, R, N)
	}

	return {
		decomposeSVD,
		recoverOriginalFromSVD,
	}
})

module.exports = { defineFor }
