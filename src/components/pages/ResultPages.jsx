import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardResult from "../templates/card/CardResult";
import AOS from "aos";
import "aos/dist/aos.css";

const ResultPages = () => {
  const navigate = useNavigate();
  const rawData = localStorage.getItem("answerUser");
  const dataSet = rawData ? JSON.parse(rawData) : [];
  const level = localStorage.getItem("difficulty");
  const expectedLength = level === "easy" ? 10 : level === "medium" ? 20 : level === "hard" ? 30 : null;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // validasi dataSet & jumlah soal
    if (!dataSet || !expectedLength || dataSet.length !== expectedLength) {
      navigate("/");
    }
  }, []);

  if (!dataSet) {
    navigate("/");
  }

  const handleClick = () => {
    localStorage.removeItem("difficulty");
  };

  return (
    <div className="bg-blue-700 min-h-screen flex flex-col justify-center p-10">
      <h1 className="text-white text-2xl text-center pt-10 mb-10" data-aos="fade-up">
        ✅ Hasil Kuis
      </h1>
      <div className="flex flex-wrap justify-center gap-10" data-aos="fade-up">
        {dataSet && dataSet.map((data, i) => <CardResult data={data} key={i} />)}
      </div>
      <Link to="/">
        <button className="block mt-10 bg-green-600 w-20 mx-auto rounded-2xl text-white p-2 cursor-pointer hover:bg-green-800" onClick={() => handleClick()}>
          Kembali
        </button>
      </Link>
    </div>
  );
};

export default ResultPages;
