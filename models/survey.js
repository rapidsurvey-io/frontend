export default (surveyId, surveyName, surveyDescription, status, questions, categories) => {
  return {
    surveyId,
    surveyName,
    surveyDescription,
    status,
    questions: questions || [],
    categories: categories || []
  }
}
