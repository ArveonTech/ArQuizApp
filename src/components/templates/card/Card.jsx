const Card = ({ data, i }) => {
  return (
    <div className="bg-slate-800 text-slate-100 rounded-2xl shadow-lg p-6 w-full max-w-md">
      <header className="flex justify-between border-b pb-2">
        <p>Level : {data.level}</p>
        <p>
          Soal : {i + 1} / <span>{i + 1}</span>
        </p>
      </header>
      <main className="mt-5">
        <h1 className="text-xl text-justify mb-5">{data.question}</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">Tombol 1</button>
          <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer">Tombol 2</button>
          <button className="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer">Tombol 3</button>
          <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition cursor-pointer">Tombol 4</button>
        </div>
      </main>
    </div>
  );
};

export default Card;
