import { useDispatch, useSelector } from 'react-redux';
import { submitQuestionnaire } from './features/questionnaire/questionnaireSlice.js';
import Question from './components/Question.jsx';
import Result from './components/Result.jsx';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state) => state.questionnaire.questions
  );

  const handleSubmit = () => {
    dispatch(submitQuestionnaire());
  };

  return (
    <main className="py-8">
      <div className="container max-w-4xl prose">
        <h1>React Homework 21</h1>

        <h2>Questionnaire</h2>

        {questions.map((question) => (
          <Question key={question.id} questionId={question.id} />
        ))}

        <button onClick={handleSubmit}>Submit</button>

        <Result />
      </div>
    </main>
  );
}

export default App;
