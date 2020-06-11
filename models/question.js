import generator from 'shortid'

export default (categoryName, questionName, questionDescription, responseType, responses) => {
  return {
    questionId: generator.generate(),
    categoryName,
    questionName,
    questionDescription,
    responseType: responseType || 1,
    responses: responses || []
  }
}
