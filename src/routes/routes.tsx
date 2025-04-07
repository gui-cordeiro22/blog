// Dependencies
import React, { FunctionComponent, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { RouteValidator } from "./route-validator";

// Pages
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../components/pages/about"));
const Login = lazy(() => import("../components/pages/login"));
const Register = lazy(() => import("../pages/register"));

export const ApplicationRoutes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteValidator component={Home} />} />

        <Route path="/sobre" element={<RouteValidator component={About} />} />

        <Route path="/login" element={<RouteValidator component={Login} />} />

        <Route
          path="/cadastro"
          element={<RouteValidator component={Register} />}
        />

        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
    </BrowserRouter>
  );
};
