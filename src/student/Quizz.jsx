import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);
  const [flagged, setFlagged] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  const apiKey = 'IbyK0OAutnJ5sWxw007U6U3hZv4Ia8L6LbOgKCGJ';

  useEffect(() => {
    fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=12&tags=Next.js`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(q => Object.values(q.answers).some(ans => ans !== null));
        setQuestions(filtered);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowScore(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
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

  const handleFlag = () => {
    if (!flagged.includes(currentQ)) {
      setFlagged([...flagged, currentQ]);
    } else {
      setFlagged(flagged.filter(i => i !== currentQ));
    }
  };

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  if (questions.length === 0) {
    return <div className="text-center mt-10 text-xl font-semibold">Loading questions...</div>;
  }

  if (showScore) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-lime-200">
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-10 text-center w-full max-w-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <h1 className="text-3xl font-bold text-green-600">Quiz Completed!</h1>
          <p className="mt-4 text-lg">Your Score: <span className="text-2xl">{score}/{questions.length}</span></p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Restart
          </button>
        </motion.div>
      </div>
    );
  }

  const current = questions[currentQ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-blue-200 px-4 py-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl flex overflow-hidden">
        {/* Left Panel */}
        <div className="bg-sky-100 w-1/4 p-4 flex flex-col justify-between">
          <div>
            <div className="text-xl font-bold mb-6 text-center text-blue-800">Sections</div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-3">Section 1</button>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-3">Section 2</button>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-3">Section 3</button>
            <button
              onClick={handleFlag}
              className={`w-full py-2 rounded-lg mt-2 font-medium ${
                flagged.includes(currentQ) ? 'bg-red-500 text-white' : 'bg-red-100 text-red-600'
              }`}
            >
              {flagged.includes(currentQ) ? 'Unflag' : 'Flagged'}
            </button>
          </div>

          {/* Palette */}
          <div className="mt-6 grid grid-cols-4 gap-2">
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQ(idx)}
                className={`rounded-full w-10 h-10 font-medium ${
                  idx === currentQ
                    ? 'bg-green-500 text-white'
                    : flagged.includes(idx)
                    ? 'bg-red-400 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Main Quiz Panel */}
        <div className="w-3/4 p-6 relative">
          {/* Timer */}
          <div className="absolute top-4 right-6 bg-white px-4 py-2 rounded-lg shadow text-green-700 font-bold">
            ⏰ Time left: {formatTime()}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Question {currentQ + 1} / {questions.length}
          </h2>
          <p className="text-gray-700 mb-6">{current.question}</p>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(current.answers).map(([key, value]) => (
              value && (
                <button
                  key={key}
                  onClick={() => handleAnswer(key)}
                  className={`px-4 py-3 rounded-lg border text-left ${
                    selected === key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {value}
                </button>
              )
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentQ(prev => Math.max(0, prev - 1))}
              className="bg-yellow-500 text-white px-5 py-2 rounded-lg disabled:bg-gray-300"
              disabled={currentQ === 0}
            >
              ⬅️ Back
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className={`px-6 py-2 rounded-lg text-white font-semibold ${
                selected === null
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {currentQ + 1 === questions.length ? 'Finish' : 'Next ➡️'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;