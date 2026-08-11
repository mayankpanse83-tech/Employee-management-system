import React, { useEffect, useState, useRef } from "react";
import "./Attendance.css";

function Attendance() {
  const [selectedTopDate, setSelectedTopDate] = useState(
  new Date().toISOString().split("T")[0]
);
const formatTopDate = (date) => {
  return new Date(date + "T00:00:00").toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
  // =========================
  // TODAY
  // =========================

  const today = new Date();

  // =========================
  // CALENDAR STATES
  // =========================

  const [currentMonth, setCurrentMonth] = useState(
    today.getMonth()
  );

  const [currentYear, setCurrentYear] = useState(
    today.getFullYear()
  );

  const [selectedDate, setSelectedDate] = useState(
    today.getDate()
  );

  // =========================
  // ATTENDANCE STATES
  // =========================

  const [checkInTime, setCheckInTime] = useState(
    localStorage.getItem("checkInTime") || ""
  );

  const [checkOutTime, setCheckOutTime] = useState(
    localStorage.getItem("checkOutTime") || ""
  );

  const [workingSeconds, setWorkingSeconds] = useState(
    Number(localStorage.getItem("workingSeconds")) || 0
  );

  // =========================
  // MONTH NAMES
  // =========================

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // =========================
  // DAYS CALCULATION
  // =========================

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  // =========================
  // DATE STATUS
  // =========================

  const getDateStatus = (day) => {
    // August 2026 ke example statuses

    if (
      currentYear === 2026 &&
      currentMonth === 7
    ) {
      if (
        day === 11 ||
        day === 12 ||
        day === 16
      ) {
        return "leave";
      }

      if (day === 6) {
        return "absent";
      }
    }

    return "present";
  };

  // =========================
  // PREVIOUS MONTH
  // =========================

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }

    setSelectedDate(1);
  };

  // =========================
  // NEXT MONTH
  // =========================

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }

    setSelectedDate(1);
  };

  // =========================
  // LIVE WORKING TIMER
  // =========================

  useEffect(() => {
    if (!checkInTime || checkOutTime) {
      return;
    }

    const timer = setInterval(() => {
      const start = new Date(checkInTime).getTime();
      const now = new Date().getTime();

      const seconds = Math.floor(
        (now - start) / 1000
      );

      setWorkingSeconds(seconds);

      localStorage.setItem(
        "workingSeconds",
        seconds
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [checkInTime, checkOutTime]);

  // =========================
  // FORMAT TIME
  // =========================

  const formatTime = (date) => {
    if (!date) {
      return "--:--";
    }

    return new Date(date).toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  };

  // =========================
  // FORMAT WORKING HOURS
  // =========================

  const formatWorkingTime = (seconds) => {
    const hours = Math.floor(
      seconds / 3600
    );

    const minutes = Math.floor(
      (seconds % 3600) / 60
    );

    const secs = seconds % 60;

    return `${String(hours).padStart(
      2,
      "0"
    )}h ${String(minutes).padStart(
      2,
      "0"
    )}m ${String(secs).padStart(
      2,
      "0"
    )}s`;
  };

  // =========================
  // CHECK IN
  // =========================

  const handleCheckIn = () => {
    if (checkInTime) {
      alert("You are already checked in!");
      return;
    }

    const now = new Date().toISOString();

    setCheckInTime(now);
    setCheckOutTime("");
    setWorkingSeconds(0);

    localStorage.setItem(
      "checkInTime",
      now
    );

    localStorage.removeItem(
      "checkOutTime"
    );

    localStorage.setItem(
      "workingSeconds",
      "0"
    );
  };

  // =========================
  // CHECK OUT
  // =========================

  const handleCheckOut = () => {
    if (!checkInTime) {
      alert("Please Check In first!");
      return;
    }

    if (checkOutTime) {
      alert("You are already checked out!");
      return;
    }

    const now = new Date().toISOString();

    const start = new Date(
      checkInTime
    ).getTime();

    const end = new Date(now).getTime();

    const totalSeconds = Math.floor(
      (end - start) / 1000
    );

    setCheckOutTime(now);

    setWorkingSeconds(
      totalSeconds
    );

    localStorage.setItem(
      "checkOutTime",
      now
    );

    localStorage.setItem(
      "workingSeconds",
      totalSeconds
    );
  };

  // =========================
  // STATUS
  // =========================

  const getStatusText = () => {
    if (
      checkInTime &&
      !checkOutTime
    ) {
      return "Working";
    }

    if (
      checkInTime &&
      checkOutTime
    ) {
      return "Present";
    }

    return "Not Checked In";
  };

  return (
    <div className="attendance-page">

      {/* ================= HEADER ================= */}

      <div className="attendance-header">

        <div>
          <h1>Attendance</h1>

          <p>
            Track your attendance and working hours
          </p>
        </div>

        <div className="header-actions">

          <div className="date-picker-wrapper">

  <button
    className="today-btn"
    onClick={() =>
      document
        .getElementById("attendance-date-picker")
        .showPicker()
    }
  >
    📅 {formatTopDate(selectedTopDate)}
  </button>

  <input
    id="attendance-date-picker"
    type="date"
    value={selectedTopDate}
    onChange={(e) => {
      setSelectedTopDate(e.target.value);
    }}
    className="hidden-date-input"
  />

</div>

          <button className="notification-btn">
            🔔
          </button>

        </div>

      </div>


      {/* ================= CARDS ================= */}

      <div className="attendance-cards">

        {/* STATUS */}

        <div className="attendance-card">

          <div className="card-icon blue">
            🕐
          </div>

          <div>
            <span>Today's Status</span>

            <strong>
              {getStatusText()}
            </strong>

            <small>
              {today.toLocaleDateString(
                "en-IN",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              )}
            </small>
          </div>

        </div>


        {/* CHECK IN */}

        <div className="attendance-card">

          <div className="card-icon green">
            ✓
          </div>

          <div>
            <span>Check In</span>

            <strong>
              {formatTime(checkInTime)}
            </strong>

            <small>
              {checkInTime
                ? "Checked In"
                : "Not Checked In"}
            </small>
          </div>

        </div>


        {/* CHECK OUT */}

        <div className="attendance-card">

          <div className="card-icon orange">
            ↪
          </div>

          <div>
            <span>Check Out</span>

            <strong>
              {formatTime(checkOutTime)}
            </strong>

            <small>
              {checkOutTime
                ? "Checked Out"
                : "Not Checked Out"}
            </small>
          </div>

        </div>


        {/* WORKING HOURS */}

        <div className="attendance-card">

          <div className="card-icon purple">
            ⏱
          </div>

          <div>
            <span>Working Hours</span>

            <strong>
              {formatWorkingTime(
                workingSeconds
              )}
            </strong>

            <small>
              {checkInTime &&
              !checkOutTime
                ? "Timer Running..."
                : "Today's working time"}
            </small>
          </div>

        </div>

      </div>


      {/* ================= CHECK SECTION ================= */}

      <div className="check-section">

        <div>

          <h2>
            Today's Attendance
          </h2>

          <p>

            {!checkInTime &&
              "You have not checked in yet."}

            {checkInTime &&
              !checkOutTime &&
              "You are currently working. Timer is running."}

            {checkInTime &&
              checkOutTime &&
              "Today's attendance has been completed."}

          </p>

        </div>


        <div className="check-buttons">

          <button
            className="check-in"
            onClick={handleCheckIn}
            disabled={!!checkInTime}
          >
            ✓ Check In
          </button>

          <button
            className="check-out"
            onClick={handleCheckOut}
            disabled={
              !checkInTime ||
              !!checkOutTime
            }
          >
            ↪ Check Out
          </button>

        </div>

      </div>


      {/* ================= MAIN GRID ================= */}

      <div className="attendance-grid">


        {/* ================= WEEKLY ================= */}

        <div className="weekly-box">

          <div className="box-header">

            <h2>
              Weekly Working Hours
            </h2>

            <select>
              <option>
                This Week
              </option>

              <option>
                Last Week
              </option>

              <option>
                This Month
              </option>
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
            ].map(
              ([day, value]) => (

                <div
                  className="bar-column"
                  key={day}
                >

                  <div className="bar-background">

                    <div
                      className="bar"
                      style={{
                        height: `${value}%`,
                      }}
                    />

                  </div>

                  <span>
                    {day}
                  </span>

                </div>

              )
            )}

          </div>

        </div>


        {/* ================= CALENDAR ================= */}

        <div className="calendar-box">

          {/* CALENDAR HEADER */}

          <div className="box-header">

            <button
              className="arrow"
              onClick={previousMonth}
            >
              ‹
            </button>

            <h2>
              {monthNames[currentMonth]}{" "}
              {currentYear}
            </h2>

            <button
              className="arrow"
              onClick={nextMonth}
            >
              ›
            </button>

          </div>


          {/* WEEK DAYS */}

          <div className="week-days">

            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>

          </div>


          {/* DYNAMIC CALENDAR */}

          <div className="calendar">

            {/* EMPTY SPACES */}

            {Array.from({
              length: firstDay,
            }).map(
              (_, index) => (
                <div
                  key={`empty-${index}`}
                  className="calendar-empty"
                />
              )
            )}


            {/* DATES */}

            {Array.from({
              length: daysInMonth,
            }).map(
              (_, index) => {

                const day =
                  index + 1;

                const isToday =
                  day ===
                    today.getDate() &&
                  currentMonth ===
                    today.getMonth() &&
                  currentYear ===
                    today.getFullYear();

                const status =
                  getDateStatus(day);

                return (
                  <button
                    key={day}
                    className={`
                      calendar-day
                      ${status}
                      ${
                        selectedDate === day
                          ? "selected"
                          : ""
                      }
                      ${
                        isToday
                          ? "today-date"
                          : ""
                      }
                    `}
                    onClick={() =>
                      setSelectedDate(day)
                    }
                  >
                    {day}
                  </button>
                );
              }
            )}

          </div>


          {/* SELECTED DATE */}

          <div className="selected-date-info">

            Selected Date:

            <strong>
              {selectedDate}{" "}
              {monthNames[currentMonth]}{" "}
              {currentYear}
            </strong>

          </div>


          {/* LEGEND */}

          <div className="legend">

            <div>
              <span className="legend-dot present-dot" />
              Present
            </div>

            <div>
              <span className="legend-dot leave-dot" />
              Leave
            </div>

            <div>
              <span className="legend-dot absent-dot" />
              Absent
            </div>

          </div>

        </div>

      </div>


      {/* ================= LOWER GRID ================= */}

      <div className="lower-grid">


        {/* ================= HISTORY ================= */}

        <div className="history-box">

          <div className="box-header">

            <h2>
              Attendance History
            </h2>

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

                <td>
                  {today.toLocaleDateString(
                    "en-IN",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </td>

                <td>
                  {formatTime(
                    checkInTime
                  )}
                </td>

                <td>
                  {formatTime(
                    checkOutTime
                  )}
                </td>

                <td>
                  {formatWorkingTime(
                    workingSeconds
                  )}
                </td>

                <td>

                  <span className="status present">
                    {checkInTime
                      ? "Present"
                      : "Not Marked"}
                  </span>

                </td>

              </tr>


              <tr>

                <td>
                  31 Jul 2026
                </td>

                <td>
                  09:10 AM
                </td>

                <td>
                  06:05 PM
                </td>

                <td>
                  8h 55m
                </td>

                <td>

                  <span className="status present">
                    Present
                  </span>

                </td>

              </tr>


              <tr>

                <td>
                  30 Jul 2026
                </td>

                <td>
                  --
                </td>

                <td>
                  --
                </td>

                <td>
                  --
                </td>

                <td>

                  <span className="status leave">
                    Leave
                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>


        {/* ================= TIMELINE ================= */}

        <div className="timeline-box">

          <h2>
            Today's Timeline
          </h2>


          <div className="timeline">

            <div className="timeline-item">

              <span className="timeline-dot green-dot" />

              <div>

                <strong>
                  {formatTime(
                    checkInTime
                  )}
                </strong>

                <p>
                  Checked In
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-dot blue-dot" />

              <div>

                <strong>
                  01:00 PM
                </strong>

                <p>
                  Lunch Break
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-dot orange-dot" />

              <div>

                <strong>
                  01:45 PM
                </strong>

                <p>
                  Back to Work
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-dot red-dot" />

              <div>

                <strong>
                  {formatTime(
                    checkOutTime
                  )}
                </strong>

                <p>
                  Checked Out
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;