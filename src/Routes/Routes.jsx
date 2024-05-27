import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Components/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllProducts from "../Components/AllProducts/AllProducts";
import AddProducts from "../Components/AddProudcts/AddProducts";
import EditProduct from "../Components/EditProduct/EditProduct";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "add-products",
                element: <AddProducts />
            },
            {
                path: "all-products",
                element: <AllProducts />,
                loader: (() => fetch('http://localhost:3000/shoes'))
            },
            {
                path: "edit-product/:id",
                element: <EditProduct />,
                loader: (({params}) => fetch(`http://localhost:3000/shoes/${params.id}`))
            },
            {
                path: "product-details/:id",
                element: <ProductDetails />,
                loader: (({params}) => fetch(`http://localhost:3000/shoes/${params.id}`))
            },
        ]
    },
]);
