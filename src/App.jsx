import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Salary from "./components/Salary";
import Leave from "./components/Leave";
import Reports from "./components/Reports";
import DailyUpdates from "./components/DailyUpdates";
import Profile from "./components/Profile";
import Login from "./components/Login";
import AccountActivation from "./components/AccountActivation";

import "./App.css";

function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Login aur Account Activation par sidebar/header nahi
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";

  // Page change hone par mobile drawer close
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Body class drawer ke liye
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [sidebarOpen]);

  return (
    <div className={`app-layout ${isAuthPage ? "auth-layout" : ""}`}>

      {/* =================================
          SIDEBAR
      ================================= */}
      {!isAuthPage && (
        <>
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div
            className="mobile-sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          ></div>

          <Sidebar />
        </>
      )}

      <div className="main-area">

        {/* =================================
            HEADER
        ================================= */}
        {!isAuthPage && <Header />}

        {/* =================================
            PAGE CONTENT
        ================================= */}
        <main className="page-content">
          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/attendance" element={<Attendance />} />

            <Route path="/salary" element={<Salary />} />

            <Route
              path="/daily-updates"
              element={<DailyUpdates />}
            />

            <Route path="/leave" element={<Leave />} />

            <Route path="/reports" element={<Reports />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/login" element={<Login />} />

            <Route
              path="/account-activation"
              element={<AccountActivation />}
            />

          </Routes>
        </main>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;