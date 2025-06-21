import Aos from "aos";
import { useEffect } from "react";

const Card = ({ data, jumlah, i, handleClick }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const buttonBg = ["bg-blue-600", "bg-green-600", "bg-yellow-600", "bg-red-600"];

  return (
    <div className="bg-slate-800 text-slate-100 rounded-2xl shadow-lg p-6 w-full max-w-md" data-aos="fade-up">
      <header className="flex justify-between border-b pb-2">
        <p>Level : {data.level}</p>
        <p>
          Soal : {i + 1} / <span>{jumlah.length}</span>
        </p>
      </header>
      <main className="mt-5">
        <h1 className="text-xl text-justify mb-5">{data.question}</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data.options &&
            data.options.map((op, index) => (
              <button key={index} className={`${buttonBg[index]} text-white py-2 rounded-lg hover:brightness-110 transition cursor-pointer`} value={op} onClick={(e) => handleClick(e)}>
                {op}
              </button>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Card;
