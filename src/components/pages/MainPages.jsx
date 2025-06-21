import { useEffect, useState, useMemo } from "react";
import useQuestionData from "../hooks/useQuestion";
import Card from "../templates/card/Card";
import { Link, useNavigate } from "react-router-dom";
import useShuffle from "../hooks/useShuffle";

const MainPages = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState(null);
  const [clearQuiz, setClearQuiz] = useState(false);
  const { questions, error } = useQuestionData(level);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = useMemo(() => useShuffle(questions), [questions]);

  useEffect(() => {
    localStorage.removeItem("answerUser");
    const level = localStorage.getItem("difficulty");
    if (!level) {
      navigate("/level");
    }
    setLevel(level);
  }, []);

  const handleClick = (e) => {
    const currentSoal = data[currentIndex];
    const existingAnswers = JSON.parse(localStorage.getItem("answerUser")) || [];

    const newAnswer = {
      id: currentSoal.id,
      level: currentSoal.level,
      question: currentSoal.question,
      options: currentSoal.options,
      userAnswer: e.target.value,
      correctAnswer: currentSoal.answer,
    };

    localStorage.setItem("answerUser", JSON.stringify([...existingAnswers, newAnswer]));

    if (currentIndex + 1 >= questions.length) {
      setClearQuiz(true);
      return;
    }

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col">
      <div className="flex justify-between items-center pt-5">
        <Link to="/">
          <h1 className="text-2xl text-white ml-10">ArQuizApp</h1>
        </Link>
        <Link to="/">
          <span className="mr-10 text-4xl">🏠</span>
        </Link>
      </div>
      {clearQuiz ? (
        <div className="bg-blue-950 flex-1 flex justify-center items-center">
          <Link to="/result">
            <button className="bg-blue-800  p-4 rounded-2xl cursor-pointer text-white ">Lihat Hasil</button>
          </Link>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto flex justify-center items-center px-10">
          {questions.length > 0 && questions[currentIndex] && <Card data={data[currentIndex]} jumlah={questions} key={currentIndex} i={currentIndex} handleClick={handleClick} />}
        </div>
      )}
    </div>
  );
};

export default MainPages;
