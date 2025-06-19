import Squares from "../templates/background/BgSquare";

const IntroPages = () => {
  return (
    <>
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#00Bfff"
        hoverFillColor="#1E90FF"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-3xl mb-5">Quizz App</h1>
        <button className="bg-blue-600 rounded-2xl py-2 w-20 text-white  cursor-pointer block mx-auto">Start</button>
      </div>
    </>
  );
};

export default IntroPages;
