import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Salary from "./components/Salary";
import Leave from "./components/Leave";
import Reports from "./components/Reports";

import "./App.css";

function Layout() {
  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar />

      <div className="main-area">

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/reports" element={<Reports />} />
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