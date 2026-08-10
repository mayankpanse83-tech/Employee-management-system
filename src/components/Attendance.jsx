import React, { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [selectedDate, setSelectedDate] = useState(1);

  const attendanceData = {
    1: "present",
    2: "present",
    3: "present",
    4: "present",
    5: "present",
    6: "absent",
    7: "present",
    8: "present",
    9: "present",
    10: "present",
    11: "leave",
    12: "leave",
    13: "present",
    14: "present",
    15: "present",
    16: "leave",
    17: "present",
    18: "present",
    19: "present",
    20: "present",
    21: "present",
    22: "present",
    23: "present",
    24: "present",
    25: "present",
    26: "present",
    27: "present",
    28: "present",
    29: "present",
    30: "present",
    31: "present",
  };

  const getStatusText = () => {
    const status = attendanceData[selectedDate];

    if (status === "present") return "Present";
    if (status === "leave") return "Leave";
    if (status === "absent") return "Absent";

    return "No Record";
  };

  const handleCheckIn = () => {
    setCheckedIn(true);
    setCheckedOut(false);
  };

  const handleCheckOut = () => {
    if (!checkedIn) {
      alert("Please Check In first!");
      return;
    }

    setCheckedOut(true);
  };

  const calendarDays = [];

  for (let i = 1; i <= 31; i++) {
    calendarDays.push(
      <button
        key={i}
        className={`
          calendar-day
          ${attendanceData[i]}
          ${selectedDate === i ? "selected" : ""}
        `}
        onClick={() => setSelectedDate(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="attendance-page">

      {/* HEADER */}

      <div className="attendance-header">
        <div>
          <h1>Attendance</h1>
          <p>
            Track your attendance and working hours
          </p>
        </div>

        <div className="header-actions">
          <button className="today-btn">
            📅 August 2026
          </button>

          <button className="notification-btn">
            🔔
          </button>
        </div>
      </div>

      {/* TOP CARDS */}

      <div className="attendance-cards">

        <div className="attendance-card">
          <div className="card-icon blue">
            🕐
          </div>

          <div>
            <span>Today's Status</span>
            <strong>{getStatusText()}</strong>
            <small>01 August 2026</small>
          </div>
        </div>

        <div className="attendance-card">
          <div className="card-icon green">
            ✓
          </div>

          <div>
            <span>Check In</span>
            <strong>
              {checkedIn ? "09:00 AM" : "--:--"}
            </strong>
            <small>Office Time</small>
          </div>
        </div>

        <div className="attendance-card">
          <div className="card-icon orange">
            ↪
          </div>

          <div>
            <span>Check Out</span>
            <strong>
              {checkedOut ? "06:00 PM" : "--:--"}
            </strong>
            <small>Office Time</small>
          </div>
        </div>

        <div className="attendance-card">
          <div className="card-icon purple">
            ⏱
          </div>

          <div>
            <span>Working Hours</span>
            <strong>
              {checkedOut ? "9h 00m" : "0h 00m"}
            </strong>
            <small>Today's working time</small>
          </div>
        </div>

      </div>

      {/* CHECK IN SECTION */}

      <div className="check-section">

        <div>
          <h2>Today's Attendance</h2>

          <p>
            {checkedIn
              ? checkedOut
                ? "You have completed today's attendance."
                : "You are currently working."
              : "You have not checked in yet."}
          </p>
        </div>

        <div className="check-buttons">

          <button
            className="check-in"
            onClick={handleCheckIn}
            disabled={checkedIn}
          >
            ✓ Check In
          </button>

          <button
            className="check-out"
            onClick={handleCheckOut}
            disabled={checkedOut}
          >
            ↪ Check Out
          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="attendance-grid">

        {/* WEEKLY HOURS */}

        <div className="weekly-box">

          <div className="box-header">
            <h2>Weekly Working Hours</h2>

            <select>
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
          </div>

          <div className="chart">

            {[
              ["Mon", 70],
              ["Tue", 85],
              ["Wed", 75],
              ["Thu", 92],
              ["Fri", 80],
              ["Sat", 60],
              ["Sun", 0],
            ].map(([day, value]) => (

              <div className="bar-column" key={day}>

                <div className="bar-background">

                  <div
                    className="bar"
                    style={{
                      height: `${value}%`,
                    }}
                  ></div>

                </div>

                <span>{day}</span>

              </div>

            ))}

          </div>

        </div>

        {/* CALENDAR */}

        <div className="calendar-box">

          <div className="box-header">

            <button className="arrow">
              ‹
            </button>

            <h2>August 2026</h2>

            <button className="arrow">
              ›
            </button>

          </div>

          <div className="week-days">

            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>

          </div>

          <div className="calendar">

            {calendarDays}

          </div>

          {/* LEGEND */}

          <div className="legend">

            <div>
              <span className="legend-dot present-dot"></span>
              Present
            </div>

            <div>
              <span className="legend-dot leave-dot"></span>
              Leave
            </div>

            <div>
              <span className="legend-dot absent-dot"></span>
              Absent
            </div>

          </div>

        </div>

      </div>

      {/* LOWER SECTION */}

      <div className="lower-grid">

        {/* HISTORY */}

        <div className="history-box">

          <div className="box-header">
            <h2>Attendance History</h2>

            <button className="view-btn">
              View All
            </button>
          </div>

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Hours</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>01 Aug 2026</td>
                <td>09:00 AM</td>
                <td>06:00 PM</td>
                <td>9h</td>
                <td>
                  <span className="status present">
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td>31 Jul 2026</td>
                <td>09:10 AM</td>
                <td>06:05 PM</td>
                <td>8h 55m</td>
                <td>
                  <span className="status present">
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td>30 Jul 2026</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>
                  <span className="status leave">
                    Leave
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* TIMELINE */}

        <div className="timeline-box">

          <h2>Today's Timeline</h2>

          <div className="timeline">

            <div className="timeline-item">

              <span className="timeline-dot green-dot"></span>

              <div>
                <strong>
                  {checkedIn ? "09:00 AM" : "--:--"}
                </strong>

                <p>Checked In</p>
              </div>

            </div>

            <div className="timeline-item">

              <span className="timeline-dot blue-dot"></span>

              <div>
                <strong>01:00 PM</strong>
                <p>Lunch Break</p>
              </div>

            </div>

            <div className="timeline-item">

              <span className="timeline-dot orange-dot"></span>

              <div>
                <strong>01:45 PM</strong>
                <p>Back to Work</p>
              </div>

            </div>

            <div className="timeline-item">

              <span className="timeline-dot red-dot"></span>

              <div>
                <strong>
                  {checkedOut ? "06:00 PM" : "--:--"}
                </strong>

                <p>Checked Out</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;