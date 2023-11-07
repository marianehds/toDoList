import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { Home, Login, Profile } from './view/index'

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
