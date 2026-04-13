import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice.js';

function Question({ questionId }) {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) =>
      state.questionnaire.questions.find(
        (question) => question.id === questionId
      )
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
    <div className="mb-4">
      <p className="font-semibold text-lg mb-2">{question.text}</p>
      <div className="space-y-1">
        {question.answers.map((answer) => (
          <label key={answer.id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={`question-${questionId}`}
              value={answer.id}
              checked={userAnswer === answer.id}
              onChange={() => handleAnswerChange(answer.id)}
              className="w-4 h-4"
            />
            <span>{answer.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Question;
