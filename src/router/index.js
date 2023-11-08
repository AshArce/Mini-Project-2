import Login from "../features/login/Login";
import Dashboard from "../features/admin/Dashboard";
import LandingPage from "../features/customer/LandingPage";
import Products from "../features/admin/Products";
import Categories from "../features/admin/Categories";
import EditProduct from "../features/admin/EditProduct"; // Import the EditProduct component

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
  {
    path: "/admin/categories",
    element: <Categories/>,
  },
  {
    path: "/admin/products/edit/:productId",
    element: <EditProduct />,
  }
]
