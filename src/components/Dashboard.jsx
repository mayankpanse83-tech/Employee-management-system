// Dashboard.jsx

import React from "react";
import "./Dashboard.css";
import StatsCard from "./StatsCard";
import Card from "./card";
import RecentActivity from "./RecentActivity";
import {
  FaClipboardCheck,
  FaTasks,
  FaWallet,
  FaChartPie,
  FaCalendarCheck,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Welcome */}

      <div className="welcome">
        <div>
          <h1>Good Morning, Mayank!!</h1>
          <p>Have a productive day ahead.</p>
        </div>

        <div className="date">
          📅 Saturday, 01 August 2026
        </div>
      </div>

      {/* Top Cards */}

      <div className="topGrid">

        {/* Attendance */}

        <div className="attendanceCard">

          <div className="attendanceHeader">
            <h3>Today's Attendance</h3>

            <button>Check Out</button>

          </div>

          <h2 className="present">
            ✔ Present
          </h2>

          <div className="attendanceInfo">

            <div>
              <span>Check In</span>
              <h3>09:15 AM</h3>
            </div>

            <div>
              <span>Working For</span>
              <h3>03h 20m</h3>
            </div>

            <div>
              <span>Check Out</span>
              <h3>-- : --</h3>
            </div>

          </div>

        </div>

        {/* Card */}

        <div className="smallCard">

          <div className="icon blue">
            <FaTasks />
          </div>

          <h2>5</h2>

          <p>Pending</p>

          <div className="progress">
            <div style={{ width: "60%" }}></div>
          </div>

          <a href="/">View Tasks →</a>

        </div>

        <div className="smallCard">

          <div className="icon green">
            <FaCalendarCheck />
          </div>

          <h2>12</h2>

          <p>Pending</p>

          <div className="progress">
            <div
              className="greenBar"
              style={{ width: "80%" }}
            ></div>
          </div>

          <a href="/">View Leave →</a>

        </div>

        <div className="smallCard">

          <div className="icon orange">
            <FaWallet />
          </div>

          <h2>₹35,000</h2>

          <p>Paid</p>

          <a href="/">View Payslip →</a>

        </div>

        <div className="smallCard">

          <div className="icon purple">
            <FaChartPie />
          </div>

          <h2>96%</h2>

          <p>Attendance</p>

          <a href="/">View Reports →</a>

        </div>

      </div>

      {/* Middle */}

      <div className="middleGrid">

        {/* Today's Task */}

        <div className="card">

          <div className="cardHead">

            <h3>Today's Tasks</h3>

            <a href="/">View All</a>

          </div>

          <div className="task">

            <div>

              <h4>
                Complete Dashboard UI
                <span className="high">
                  High
                </span>
              </h4>

              <p>Design and develop dashboard page</p>

            </div>

            <div className="progress">

              <div style={{ width: "70%" }}></div>

            </div>

          </div>

          <div className="task">

            <div>

              <h4>
                API Integration
                <span className="medium">
                  Medium
                </span>
              </h4>

              <p>Integrate all dashboard APIs</p>

            </div>

            <div className="progress">

              <div style={{ width: "40%" }}></div>

            </div>

          </div>

          <div className="task">

            <div>

              <h4>
                Team Meeting
                <span className="low">
                  Low
                </span>
              </h4>

              <p>Project discussion with team</p>

            </div>

          </div>

        </div>

        {/* Daily Update */}

        <div className="card">

          <div className="cardHead">

            <h3>Daily Update</h3>

            <a href="/">Edit</a>

          </div>

          <div className="update">

            <p>
              <FaCheckCircle className="greenText" />
              Completed API Integration
            </p>

            <p>
              <FaExclamationCircle className="orangeText" />
              Dashboard Testing
            </p>

            <p>
              <FaClipboardCheck className="blueText" />
              Work on Task Module
            </p>

          </div>

        </div>

        {/* Attendance */}

        <div className="card">

          <div className="cardHead">

            <h3>Attendance Summary</h3>

          </div>

          <div className="circle">

            <div className="outer">

              <div className="inner">

                <h2>96%</h2>

              </div>

            </div>

          </div>

          <ul>

            <li>✔ Present : 20</li>

            <li>❌ Absent : 1</li>

            <li>🟠 Leave : 2</li>

            <li>🕒 Late : 1</li>

          </ul>

        </div>

      </div>

      {/* Bottom */}

      <div className="bottomGrid">

        {/* Leave */}

        <div className="card">

          <div className="cardHead">

            <h3>Leave Summary</h3>

          </div>

          <div className="leaveCircle">

            <div className="outer">

              <div className="inner">

                <h2>12</h2>

              </div>

            </div>

          </div>

          <p>Available Leave : 12 Days</p>

          <p>Used : 6 Days</p>

          <p>Pending : 1 Day</p>

        </div>

        {/* Salary */}

        <div className="card salary">

          <div className="cardHead">

            <h3>Salary Overview</h3>

          </div>

          <h1>₹35,000</h1>

          <span className="paid">
            Paid
          </span>

          <p>Next Salary : 31 Aug 2026</p>

        </div>

        {/* Reports */}

        <div className="card">

          <div className="cardHead">

            <h3>Reports Overview</h3>

          </div>

          <div className="report">

            <span>Attendance</span>

            <div className="progress">
              <div style={{ width: "96%" }}></div>
            </div>

          </div>

          <div className="report">

            <span>Tasks Completed</span>

            <div className="progress">
              <div style={{ width: "84%" }}></div>
            </div>

          </div>

          <div className="report">

            <span>Daily Updates</span>

            <div className="progress">
              <div style={{ width: "70%" }}></div>
            </div>

          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="card recent">

        <div className="cardHead">

          <h3>Recent Activity</h3>

          <a href="/">View All</a>

        </div>

        <div className="activity">

          <div>
            ✔ Checked In
            <span>09:15 AM</span>
          </div>

          <div>
            📄 Daily Update
            <span>06:20 PM</span>
          </div>

          <div>
            ✅ Task Completed
            <span>05:45 PM</span>
          </div>

          <div>
            📅 Leave Applied
            <span>Yesterday</span>
          </div>

          <div>
            ✔ Leave Approved
            <span>2 Days Ago</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;