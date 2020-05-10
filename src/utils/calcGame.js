
export const getResults = async (funcMatrix, conditions) => {
  let results = {}

  for (let key of Object.keys(conditions)) {
    if (conditions[key]) {
      const res = await funcMatrix[key].func()
      results = {
        ...results,
        [key]: res.data[funcMatrix[key].name]
      }
    }
  }

  return results

}