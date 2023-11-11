import Login from "../features/login/Login";
import Dashboard from "../features/admin/Dashboard";
import LandingPage from "../features/customer/LandingPage";

import CategoriesPage from "../features/customer/CategoriesPage";
import AllProducts from "../features/customer/AllProducts";
import ProductItem from "../features/customer/ProductItem";

import Products from "../features/admin/Products";
import Categories from "../features/admin/Categories";
import EditProduct from "../features/admin/EditProduct"; // Import the EditProduct component

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
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/products",
    element: <Products />,
  },
  {
    path: "/admin/categories",
    element: <Categories/>,
  },
  {
    path: "/admin/products/edit/:productId",
    element: <EditProduct />,
  }
]

