import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { Login, NotFound, Register, PrivateRoutes } from "./index";



const AppRouter = () => {




    return (
        <Router>
            <Layout>
                <Routes>
                    <Route
                        exact
                        path="/login"
                        element={logged ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        exact
                        path="/register"
                        element={logged ? <Navigate to="/" /> : <Register />}
                    />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>

            <Routes>
                <Route
                    path="/backoffice/*"
                    element={rol === 1 ? <PrivateRoutes /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;

