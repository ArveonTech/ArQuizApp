import { useEffect, useState, useMemo } from "react";
import useQuestionData from "../hooks/useQuestion";
import Card from "../templates/card/Card";
import { Link, useNavigate } from "react-router-dom";
import useShuffle from "../hooks/useShuffle";
import Countdown from "react-countdown";
import useLevel from "../hooks/useLevel";
import { ToastContainer, toast, Bounce } from "react-toastify";

const MainPages = () => {
  const navigate = useNavigate();
  const { level, deadline } = useLevel();
  const { questions, error } = useQuestionData(level);
  const data = useMemo(() => useShuffle(questions), [questions]);
  const [clearQuiz, setClearQuiz] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    localStorage.removeItem("answerUser");
    const level = localStorage.getItem("difficulty");

    if (!level) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("❌ Ada yang salah, silahkan kembali", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
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

  const renderer = ({ minutes, seconds }) => {
    return (
      <span className="text-red-500 text-3xl mt-10 mx-auto block text-center">
        {(minutes < 10 ? "0" : "") + minutes}:{(seconds < 10 ? "0" : "") + seconds}{" "}
      </span>
    );
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
        <div className="bg-blue-950 flex-1 flex flex-col justify-center items-center">
          <h1 className="text-4xl mb-10 text-red-400">Kuis mu telah berakhir</h1>
          <Link to="/result">
            <button className="bg-blue-800  p-4 rounded-2xl cursor-pointer text-white ">Lihat Hasil</button>
          </Link>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="mb-10">
            <h1 className="text-2xl text-white">Waktu :</h1>
            <p className="countdown-timer-container">{deadline && <Countdown date={deadline} renderer={renderer} onComplete={() => setClearQuiz(true)} />}</p>
          </div>
          <div className="px-10">{questions.length > 0 && questions[currentIndex] && <Card data={data[currentIndex]} jumlah={questions} key={currentIndex} i={currentIndex} handleClick={handleClick} />}</div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
    </div>
  );
};

export default MainPages;
