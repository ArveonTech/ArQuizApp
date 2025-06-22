import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const LevelPages = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handleClick = (e) => {
    const value = e.currentTarget.value;
    localStorage.setItem("difficulty", value);
    navigate("/main");
  };

  const baseBtn = "rounded-lg w-20 py-2 cursor-pointer hover:text-white transition-colors duration-300 ease-in-out";

  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-700 to-blue-950 min-h-screen flex items-center justify-around">
      <div className="flex flex-col justify-center items-center " data-aos="fade-up">
        <h1 className="text-center text-white text-2xl mb-10">Pilih Tingkat Kesulitan</h1>
        <div className="flex justify-center text-slate-800 gap-10 mb-10">
          <button value="mudah" className={`bg-green-400 ${baseBtn} hover:bg-green-800 `} data-aos="fade-right" onClick={(e) => handleClick(e)}>
            Mudah
          </button>
          <button value="normal" className={`bg-yellow-400 ${baseBtn} hover:bg-yellow-800`} data-aos="fade-up" onClick={(e) => handleClick(e)}>
            Normal
          </button>
          <button value="sulit" className={`bg-red-400 ${baseBtn} hover:bg-red-800`} data-aos="fade-left" onClick={(e) => handleClick(e)}>
            Sulit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelPages;
