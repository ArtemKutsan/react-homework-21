import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice.js';

function Question({ questionId }) {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) =>
      state.questionnaire.questions.find((question) => question.id === questionId)
  );
  const userAnswer = useSelector(
    (state) => state.questionnaire.userAnswers[questionId]
  );

  if (!question) {
    return null;
  }

  const handleAnswerChange = (answerId) => {
    dispatch(answerQuestion({ questionId, answerId }));
  };

  return (
    <div>
      <p>{question.text}</p>
      {question.answers.map((answer) => (
        <label key={answer.id}>
          <input
            type="radio"
            name={`question-${questionId}`}
            value={answer.id}
            checked={userAnswer === answer.id}
            onChange={() => handleAnswerChange(answer.id)}
          />
          {answer.text}
        </label>
      ))}
    </div>
  );
}

export default Question;
