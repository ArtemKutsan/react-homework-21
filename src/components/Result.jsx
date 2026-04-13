import { useSelector } from 'react-redux';

function Result() {
  const submitted = useSelector(
    (state) => state.questionnaire.submitted
  );
  const score = useSelector(
    (state) => state.questionnaire.score
  );

  if (!submitted) {
    return null;
  }

  return (
    <div>
      <p>Your Score: {score}</p>
    </div>
  );
}

export default Result;
