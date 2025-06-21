import { useEffect, useState } from "react";
import { getQuestion } from "../../libs/api";

const useQuestionData = (level) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getQuestion();
        const data = response.data.filter((items) => items.level?.toLowerCase() === level?.toLowerCase());
        setQuestions(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [level]);

  return { questions, error };
};
export default useQuestionData;
