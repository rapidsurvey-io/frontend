export default (categoryName, categoryDescription, colourCode) => {
  return {
    categoryName,
    categoryDescription,
    colourCode: colourCode || 'blue'
  }
}
