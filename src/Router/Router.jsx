import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ViewProfile from "../Pages/ViewProfile/ViewProfile";
import CommitteeMembers from "../Pages/CommitteeMembers/CommitteeMembers";
import AddMember from "../Pages/AddMember/AddMember";
import ClubMembers from "../Pages/ClubMembers/ClubMembers";

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
                loader: () => fetch('https://pccc-identity-portal-server.onrender.com/clubMembers')
            },
            {
                path: '/viewProfile',
                element: <PrivateRoutes>
                    <ViewProfile></ViewProfile>
                </PrivateRoutes>
            },
            {
                path: '/committeeMembers',
                element: <PrivateRoutes>
                    <CommitteeMembers></CommitteeMembers>
                </PrivateRoutes>,
                loader: () => fetch('https://pccc-identity-portal-server.onrender.com/committeeMembers')
            },
            {
                path: '/addMember',
                element: <PrivateRoutes>
                    <AddMember></AddMember>
                </PrivateRoutes>
            },
            {
                path: '/members',
                element: <PrivateRoutes>
                    <ClubMembers></ClubMembers>
                </PrivateRoutes>
            }
        ]
    }
])

export default router;