import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./view/Home/login.tsx";

const AppRoutes = () => {
return (
    <Router>
    <Routes>
        <Route element={<Login />} />
        <Route path="/" element={<Login />} />
    </Routes>
    </Router>
);
};

export default AppRoutes;
