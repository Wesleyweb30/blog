import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./page/home";
import AboutPage from "./page/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "about",
    element: <AboutPage/>
  },
]);

export default function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
