import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Employees from "./components/Employees";
import DailyUpdates from "./components/DailyUpdates";
import Tasks from "./components/Tasks";
import Leave from "./components/Leave";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main-content">

        <Header />

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/attendance"
            element={<Attendance />}
          />

          <Route
            path="/employees"
            element={<Employees />}
          />

          <Route
            path="/daily-updates"
            element={<DailyUpdates />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

          <Route
            path="/leave"
            element={<Leave />}
          />

        </Routes>

      </div>

    </div>
  );
}

export default App;