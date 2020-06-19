export default (surveyId, surveyName, surveyDescription, status, questions, categories, creatorIdentifier) => {
  return {
    surveyId,
    surveyName,
    surveyDescription,
    status,
    questions: questions || [],
    categories: categories || [],
    owner: creatorIdentifier
  }
}
