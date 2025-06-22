import { useState, useEffect } from "react";

const useLevel = () => {
  const [level, setLevel] = useState(null);
  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    localStorage.removeItem("answerUser");
    const level = localStorage.getItem("difficulty");

    if (level) {
      let duration;
      if (level === "mudah") duration = 300000;
      else if (level === "normal") duration = 360000;
      else if (level === "sulit") duration = 420000;

      setDeadline(Date.now() + duration);
    }

    setLevel(level);
  }, []);

  return { level, deadline };
};

export default useLevel;
