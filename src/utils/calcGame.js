const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getMax = (data, condition) => {
  if (condition !== 'noun') return data.length-1
  else return data
}

const createData = (data, condition) => {
  if (condition !== 'character') return data

  const newData = [...data, ...data.filter(char => char.main)]

  return newData
}

const getCondition = async(basicData, condition, getNoun) => {

  const data = createData(basicData, condition)

  const maxNumber = getMax(data, condition)

  const var1 = getRandom(0, maxNumber)

  if (condition === 'character') {
    const var2 = getRandom(0, maxNumber)
    //если тот же самый, то второго нету
    return {[condition]: [data[var1], data[var2]]}
  }
  if (condition === 'noun') {
    const noun = await getNoun({variables: {id: var1}})
    return {[condition]: [noun.data.getNoun]}
  }
  
  return {[condition]: [data[var1]]}

}

export const getResults = async (masterData, conditions, getNounFuction) => {
  let results = {}

//console.log('calcGame', masterData)
  for (let key of Object.keys(conditions)) {
    if (conditions[key]) {
      const res = await getCondition(masterData[key], key, getNounFuction)
      results = {
        ...results,
        ...res
      }
    }
  }

  return results

}