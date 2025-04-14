import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ViewProfile from "../Pages/ViewProfile/ViewProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes>
                    <Dashboard></Dashboard>
                </PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/clubMembers')
            },
            {
                path: '/viewProfile',
                element: <PrivateRoutes>
                    <ViewProfile></ViewProfile>
                </PrivateRoutes>
            }
        ]
    }
])

export default router;