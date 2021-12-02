const resetID = (array, idType) => {
	return array.map((item, index) => {
		return {...item, [idType]: index}
	})
}

module.exports = {resetID}