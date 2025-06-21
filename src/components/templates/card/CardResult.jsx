const CardResult = ({ data }) => {
  const { question, userAnswer, correctAnswer } = data;

  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className={`bg-white p-4 rounded-xl shadow-md mb-4 border-l-8 w-72 h-auto ${isCorrect ? "border-green-500" : "border-red-500"}`}>
      <h2 className="font-semibold text-gray-800">{question}</h2>
      <p className={`mt-2 font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>Jawaban Kamu: {userAnswer}</p>
      {!isCorrect && <p className="text-gray-700">Jawaban Benar: {correctAnswer}</p>}
    </div>
  );
};

export default CardResult;
