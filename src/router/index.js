import Login from "../features/login/Login";
import Dashboard from "../features/admin/Dashboard";
import LandingPage from "../features/customer/LandingPage";
import Products from "../features/admin/Products";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
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
]
