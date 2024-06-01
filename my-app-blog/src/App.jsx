import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import {
  QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Layout from "./components/layout";


/**Rotas 
 * 
 * 
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "about",
        element: <AboutPage/>
      },
    ]
  },
  
]);


const queryClient = new QueryClient()

export default function App() {
  return (
    <>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
    </>
  )
}
