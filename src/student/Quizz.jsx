// QuizApp.jsx
import React, { useEffect, useState } from 'react';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);

  const apiKey = 'IbyK0OAutnJ5sWxw007U6U3hZv4Ia8L6LbOgKCGJ';

  useEffect(() => {
    fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&tags=Next.js`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(q => Object.values(q.answers).some(ans => ans !== null));
        setQuestions(filtered);
      });
  }, []);

  const handleAnswer = (answer) => {
    setSelected(answer);
  };

  const handleNext = () => {
    const correct = questions[currentQ]?.correct_answers[`${selected}_correct`] === "true";
    if (correct) setScore(score + 1);
    setSelected(null);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  if (questions.length === 0) {
    return <div className="text-center mt-10 text-lg">Loading questions...</div>;
  }

  if (showScore) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold">Quiz Completed! 🎉</h1>
        <p className="text-lg mt-2">Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  const current = questions[currentQ];

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Question {currentQ + 1} of {questions.length}</h2>
      <p className="mb-6 text-lg">{current.question}</p>
      <div className="space-y-3">
        {Object.entries(current.answers).map(([key, value]) => (
          value && (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              className={`block w-full text-left px-4 py-2 rounded-lg border ${
                selected === key ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {value}
            </button>
          )
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={selected === null}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg disabled:bg-gray-300"
      >
        {currentQ + 1 === questions.length ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default QuizApp;
