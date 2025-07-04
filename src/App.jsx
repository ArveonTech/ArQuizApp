import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPages from "./components/pages/NotFoundPages";
import IntroPages from "./components/pages/IntroPages";
import MainPages from "./components/pages/MainPages";
import LevelPages from "./components/pages/LevelPages";
import ResultPages from "./components/pages/ResultPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPages />,
  },
  {
    path: "/level",
    element: <LevelPages />,
  },
  {
    path: "/main",
    element: <MainPages />,
  },
  {
    path: "/result",
    element: <ResultPages />,
  },
  {
    path: "*",
    element: <NotFoundPages />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
