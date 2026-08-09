import React, { useState } from "react";
import "./Attendance.css";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaClock,
  FaCalendarCheck,
  FaSearch,
  FaDownload,
} from "react-icons/fa";

function Attendance() {
  const [checkedIn, setCheckedIn] = useState(false);
const [checkInTime, setCheckInTime] = useState("--:--");
const [checkOutTime, setCheckOutTime] = useState("--:--");

const handleCheckIn = () => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  setCheckedIn(true);
  setCheckInTime(time);
};

const handleCheckOut = () => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  setCheckedIn(false);
  setCheckOutTime(time);
};
  return (
    <div className="attendance-page">

      {/* Page Header */}

      <div className="page-header">
        <div>
          <h1>Attendance</h1>
          <p>Manage employee attendance records</p>
        </div>

        <button className="export-btn">
          <FaDownload /> Export Report
        </button>
      </div>

      {/* Today's Attendance */}
<div className="attendance-top">

  <div>
    <h2>Today's Attendance</h2>

    <span className={checkedIn ? "status present" : "status leave"}>
      {checkedIn ? "Present" : "Not Checked In"}
    </span>
  </div>

  {!checkedIn ? (
    <button className="checkin-btn" onClick={handleCheckIn}>
      Check In
    </button>
  ) : (
    <button className="checkout-btn" onClick={handleCheckOut}>
      Check Out
    </button>
  )}

</div>
<div className="attendance-info">

  <div className="info-box">
    <h4>Check In</h4>
    <p>{checkInTime}</p>
  </div>

  <div className="info-box">
    <h4>Working Hours</h4>
    <p>08h 30m</p>
  </div>

  <div className="info-box">
    <h4>Check Out</h4>
    <p>{checkOutTime}</p>
  </div>

</div>

      {/* Summary Cards */}

      <div className="summary-grid">

        <div className="summary-card">
          <h3>Present</h3>
          <h2>22</h2>
          <span>This Month</span>
        </div>

        <div className="summary-card">
          <h3>Absent</h3>
          <h2>1</h2>
          <span>This Month</span>
        </div>

        <div className="summary-card">
          <h3>Leave</h3>
          <h2>2</h2>
          <span>This Month</span>
        </div>

        <div className="summary-card">
          <h3>Late Entry</h3>
          <h2>1</h2>
          <span>This Month</span>
        </div>

      </div>

      {/* Search */}

      <div className="search-bar">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search attendance..."
          />
        </div>

        <select>
          <option>All Employees</option>
          <option>Present</option>
          <option>Absent</option>
          <option>Leave</option>
        </select>

      </div>

      {/* Part 2 yahan se start hoga */}
            {/* Weekly Working Hours */}

      <div className="attendance-grid">

        <div className="chart-card">

          <div className="card-header">
            <h3>Weekly Working Hours</h3>

            <select>
              <option>This Week</option>
            </select>
          </div>

          <div className="chart">

            <div className="bar">
              <div className="fill" style={{ height: "75%" }}></div>
              <span>Mon</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ height: "90%" }}></div>
              <span>Tue</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ height: "80%" }}></div>
              <span>Wed</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ height: "100%" }}></div>
              <span>Thu</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ height: "85%" }}></div>
              <span>Fri</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ height: "60%" }}></div>
              <span>Sat</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ height: "0%" }}></div>
              <span>Sun</span>
            </div>

          </div>

        </div>

        {/* Calendar */}

        <div className="calendar-card">

          <div className="card-header">
            <h3>August 2026</h3>
          </div>

          <div className="calendar">

            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>

            <span></span>
            <span></span>

            <span className="present-day">1</span>
            <span className="present-day">2</span>
            <span className="present-day">3</span>
            <span className="present-day">4</span>
            <span className="present-day">5</span>

            <span className="present-day">6</span>
            <span className="present-day">7</span>
            <span className="present-day">8</span>
            <span className="present-day">9</span>
            <span className="present-day">10</span>
            <span className="leave-day">11</span>
            <span className="leave-day">12</span>

            <span className="present-day">13</span>
            <span className="present-day">14</span>
            <span className="present-day">15</span>
            <span className="absent-day">16</span>
            <span className="present-day">17</span>
            <span className="present-day">18</span>
            <span className="present-day">19</span>

            <span className="present-day">20</span>
            <span className="present-day">21</span>
            <span className="present-day active-day">22</span>
            <span className="present-day">23</span>
            <span className="present-day">24</span>
            <span className="present-day">25</span>
            <span className="present-day">26</span>

            <span className="present-day">27</span>
            <span className="present-day">28</span>
            <span className="present-day">29</span>
            <span className="present-day">30</span>
            <span className="present-day">31</span>

          </div>

        </div>

      </div>

      {/* Part 3 yahan se start hoga */}
            {/* Attendance History + Timeline */}

      <div className="bottom-grid">

        {/* Attendance History */}

        <div className="history-card">

          <div className="card-header">
            <h3>Attendance History</h3>

            <button className="view-btn">
              View All
            </button>
          </div>

          <table className="attendance-table">

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
                <td>26 Aug 2026</td>
                <td>09:15 AM</td>
                <td>06:30 PM</td>
                <td>09h 15m</td>
                <td>
                  <span className="status present">
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td>25 Aug 2026</td>
                <td>09:05 AM</td>
                <td>06:20 PM</td>
                <td>09h 10m</td>
                <td>
                  <span className="status present">
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td>24 Aug 2026</td>
                <td>09:40 AM</td>
                <td>06:15 PM</td>
                <td>08h 35m</td>
                <td>
                  <span className="status late">
                    Late
                  </span>
                </td>
              </tr>

              <tr>
                <td>23 Aug 2026</td>
                <td>--</td>
                <td>--</td>
                <td>0h</td>
                <td>
                  <span className="status leave">
                    Leave
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* Today's Timeline */}

        <div className="timeline-card">

          <h3>Today's Timeline</h3>

          <div className="timeline">

            <div className="timeline-item">
              <div className="dot green"></div>

              <div>
                <h4>09:15 AM</h4>
                <p>Checked In</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot orange"></div>

              <div>
                <h4>01:00 PM</h4>
                <p>Lunch Break</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot blue"></div>

              <div>
                <h4>01:30 PM</h4>
                <p>Back To Work</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot gray"></div>

              <div>
                <h4>06:30 PM</h4>
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