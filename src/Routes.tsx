import { createBrowserRouter, Navigate } from "react-router-dom";
import Menu from "./pages/Menu/Index";
import FightRoom from "./pages/FightRoom/Index";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/menu' replace />
    }, {
        path: '/menu',
        element: <Menu />
    }, {
        path: '/fight',
        element: <FightRoom /> 
    }
]);

export default Router;