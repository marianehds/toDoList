import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./view/login/Login.tsx";
import Home from "./view/home/Home.tsx";

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
