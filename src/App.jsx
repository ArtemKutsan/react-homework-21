import { useDispatch, useSelector } from 'react-redux';
import { submitQuestionnaire } from './features/questionnaire/questionnaireSlice.js';
import Question from './components/Question.jsx';
import Result from './components/Result.jsx';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state) => state.questionnaire.questions
  );

  const handleSubmit = () => {
    dispatch(submitQuestionnaire());
  };

  return (
    <main className="py-8 px-4">
      <div className="container max-w-xl mx-auto prose">
        <h1>React Homework 21</h1>

        <h2>Questionnaire</h2>

        {questions.map((question) => (
          <Question key={question.id} questionId={question.id} />
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-600 transition"
        >
          Submit
        </button>

        <Result />
      </div>
    </main>
  );
}

export default App;
