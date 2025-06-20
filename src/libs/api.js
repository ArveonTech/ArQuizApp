import axios from "axios";

export const getQuestion = async () => {
  return await axios.get("./question/question.json");
};
