import { useEffect, useState } from "react";
import { getQuestion } from "../../libs/api";

const useQuestionData = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getQuestion();
        setQuestions(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { questions, error };
};
export default useQuestionData;
