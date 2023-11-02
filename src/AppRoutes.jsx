import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./view/home/home.tsx";
import Login from "./view/login/login.tsx";
import Profile from "./view/profile/profile.tsx";

const AppRoutes = () => {
return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
    </Router>
);
};

export default AppRoutes;
