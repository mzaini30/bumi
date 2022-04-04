#!/usr/bin/env node

import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import {uglify} from 'rollup-plugin-uglify'
import {rollup} from 'rollup'
import {readFileSync, writeFileSync} from 'fs'

const namaFile = process.argv[2]
const namaVariabel = process.argv[3]

const outputFile = namaFile.replace(/(\.js)$/, '.min.js')
											 .replace(/(\.mjs)$/, '.min.js')
											 .replace(/(\.cjs)$/, '.min.js')

const inputOptions = {
	input: namaFile,
	plugins: [nodeResolve(), commonjs()]
}
const outputOptions = {
	file: outputFile,
	format: 'umd',
	name: namaVariabel,
	plugins: [uglify()]
}

async function build(){
	const bundle = await rollup(inputOptions)
	const {output} = await bundle.generate(outputOptions)
	const selesai = await bundle.write(outputOptions)
	if (selesai) {
		const hasilnya = readFileSync(outputFile).toString()
		const tambahan = `// Nama variabel: ${namaVariabel}`
		const jadinya = `${tambahan}\n${hasilnya}`
		writeFileSync(outputFile, jadinya)
	}
	await bundle.close()
}
build()