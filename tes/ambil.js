import fetch from 'node-fetch'

export default async function(url){
	let data = await fetch(url)
	data = await data.text()
	return data
}