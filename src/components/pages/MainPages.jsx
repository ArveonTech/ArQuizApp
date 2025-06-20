import useQuestionData from "../hooks/useQuestion";
import Card from "../templates/card/Card";

const MainPages = () => {
  const { questions, error } = useQuestionData();

  return (
    <>
      <div className="bg-blue-950 flex gap-10 flex-wrap justify-center">{questions && questions.map((data, i) => <Card data={data} i={i} key={i} />)}</div>
    </>
  );
};

export default MainPages;
