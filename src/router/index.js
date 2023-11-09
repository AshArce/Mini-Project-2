import Login from "../features/login/Login";
import Dashboard from "../features/admin/Dashboard";
import LandingPage from "../features/customer/LandingPage";
import CategoriesPage from "../features/customer/CategoriesPage";
import AllProducts from "../features/customer/AllProducts";
import ProductItem from "../features/customer/ProductItem";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Category",
    element: <CategoriesPage />,
  },
  {
    path: "/products",
    element: <AllProducts />,
  },
  {
    path: "/Products/ProductItem",
    element: <ProductItem />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/Dashboard",
    element: <Dashboard />,
  },
];
