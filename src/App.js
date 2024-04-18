import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Products from "./Component/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products />,
    },
  ]);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
