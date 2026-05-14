import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";

const AppRoutes = () => {
    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="auth/login"
                    element={<Login />}
                />

                <Route
                    path="auth/register"
                    element={<Register />}
                />

            </Routes>

        </BrowserRouter>

    );
};

export default AppRoutes;