import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about-us";
import AllProductsPage from "./pages/products/";
import ProductPage from "./pages/products/product";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/products", element: <AllProductsPage /> },
  { path: "/products/:id", element: <ProductPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
