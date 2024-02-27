import MainLayout from "../Layouts/MainLayout";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
    ],
  },
];

export default mainRoutes;
