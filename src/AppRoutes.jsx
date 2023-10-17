import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./view/login/login.tsx";
import Home from "./view/home/home.tsx";

const AppRoutes = () => {
return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
);
};

export default AppRoutes;
