import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "./context/FirestoreContext";
import AuthProvider from "./context/AuthContext";
import Layout from "./components/Layout";
import StockImages from "./components/StockImages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <Layout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/stockimages' element={<StockImages />} />
          </Routes>
          </Layout>
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
