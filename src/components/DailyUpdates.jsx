import React, { useState } from "react";
import "./DailyUpdates.css";

import {
  FaCheckCircle,
  FaClock,
  FaChartLine,
  FaExclamationCircle,
  FaCalendarAlt,
  FaBell,
  FaPaperPlane,
  FaSave,
  FaPlus,
  FaTrash,
  FaEdit,
  FaPaperclip,
  FaTimes,
  FaChevronRight,
  FaFire,
  FaFileAlt,
  FaUserCircle,
} from "react-icons/fa";

function DailyUpdates() {
  const [summary, setSummary] = useState("");

  const [completedTasks, setCompletedTasks] = useState([
    "Dashboard UI design completed",
    "Attendance module testing",
    "Fixed bug in leave application",
  ]);

  const [pendingTasks, setPendingTasks] = useState([
    "Reports module UI",
    "API integration with backend",
  ]);

  const [tomorrowPlan, setTomorrowPlan] = useState(
    "• Complete Reports module UI\n• Integrate Reports APIs\n• Perform module testing"
  );

  const [issues, setIssues] = useState(
    "• Waiting for Reports API\n• Need clarification on data structure\n• No other blockers"
  );

  const [submitted, setSubmitted] = useState(false);

  const [newCompletedTask, setNewCompletedTask] = useState("");
  const [newPendingTask, setNewPendingTask] = useState("");

  const [attachments, setAttachments] = useState([]);

  // Add completed task
  const addCompletedTask = () => {
    if (newCompletedTask.trim() === "") return;

    setCompletedTasks([
      ...completedTasks,
      newCompletedTask,
    ]);

    setNewCompletedTask("");
  };

  // Add pending task
  const addPendingTask = () => {
    if (newPendingTask.trim() === "") return;

    setPendingTasks([
      ...pendingTasks,
      newPendingTask,
    ]);

    setNewPendingTask("");
  };

  // Delete completed task
  const deleteCompletedTask = (index) => {
    setCompletedTasks(
      completedTasks.filter((_, i) => i !== index)
    );
  };

  // Delete pending task
  const deletePendingTask = (index) => {
    setPendingTasks(
      pendingTasks.filter((_, i) => i !== index)
    );
  };

  // File upload
  const handleFiles = (e) => {
    const files = Array.from(e.target.files);

    setAttachments([
      ...attachments,
      ...files,
    ]);
  };

  // Remove attachment
  const removeAttachment = (index) => {
    setAttachments(
      attachments.filter((_, i) => i !== index)
    );
  };

  // Save draft
  const saveDraft = () => {
    alert("Daily update saved as draft!");
  };

  // Submit update
  const submitUpdate = () => {
    if (summary.trim() === "") {
      alert("Please write today's work summary first.");
      return;
    }

    setSubmitted(true);
    alert("Daily update submitted successfully!");
  };

  return (
    <div className="daily-page">

      {/* ================= HEADER ================= */}

      <div className="daily-header">

        <div>
          <h1>Daily Updates</h1>
          <p>
            Submit your daily work progress and keep your manager updated
          </p>
        </div>

        <div className="daily-date">
          <FaCalendarAlt />
          <span>Today, 09 Aug 2026</span>
          <span>⌄</span>
        </div>

      </div>


      {/* ================= TOP SUMMARY ================= */}

      <div className="daily-stats">

        <div className="daily-stat-card">

          <div className="stat-icon green">
            <FaCheckCircle />
          </div>

          <div>
            <p>Completed Tasks</p>
            <h2>{completedTasks.length + 3}</h2>
            <small>↑ 2 from yesterday</small>
          </div>

        </div>


        <div className="daily-stat-card">

          <div className="stat-icon orange">
            <FaClock />
          </div>

          <div>
            <p>Pending Tasks</p>
            <h2>{pendingTasks.length}</h2>
            <small>↓ 1 from yesterday</small>
          </div>

        </div>


        <div className="daily-stat-card">

          <div className="stat-icon purple">
            <FaClock />
          </div>

          <div>
            <p>Working Hours</p>
            <h2>8h 15m</h2>
            <small>↑ 45m from yesterday</small>
          </div>

        </div>


        <div className="daily-stat-card">

          <div className="stat-icon blue">
            <FaChartLine />
          </div>

          <div className="progress-stat">

            <p>Today's Progress</p>

            <h2>80%</h2>

            <div className="small-progress">
              <div style={{ width: "80%" }}></div>
            </div>

          </div>

        </div>


        <div className="daily-stat-card status-card">

          <div className="stat-icon red">
            <FaExclamationCircle />
          </div>

          <div>
            <p>Status</p>

            <h2 className={submitted ? "submitted-text" : ""}>
              {submitted ? "Submitted" : "Not Submitted"}
            </h2>

            <small>
              {submitted
                ? "Just submitted"
                : "Last submitted: Yesterday"}
            </small>

          </div>

        </div>

      </div>


      {/* ================= MAIN GRID ================= */}

      <div className="daily-layout">

        {/* ================= LEFT ================= */}

        <div className="daily-main">


          {/* Work Summary */}

          <div className="daily-card summary-editor">

            <div className="section-heading">

              <div className="section-number purple-bg">
                1.
              </div>

              <div>
                <h3>Today's Work Summary</h3>
                <p>Briefly describe what you worked on today</p>
              </div>

            </div>


            <div className="editor-toolbar">

              <select>
                <option>Normal</option>
                <option>Heading</option>
              </select>

              <button>B</button>
              <button>I</button>
              <button>U</button>

              <span></span>

              <button>☰</button>
              <button>☷</button>
              <button>≡</button>

              <button>🔗</button>

            </div>


            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Write your work summary here..."
              maxLength={1000}
            />

            <div className="character-count">
              {summary.length} / 1000
            </div>

          </div>


          {/* Completed + Pending */}

          <div className="task-columns">


            {/* Completed */}

            <div className="daily-card task-box">

              <div className="task-box-header">

                <div className="section-heading">

                  <div className="section-number green-bg">
                    2.
                  </div>

                  <div>
                    <h3>Completed Tasks</h3>
                    <p>Tasks you have completed today</p>
                  </div>

                </div>

                <button
                  className="add-task-btn"
                  onClick={() => {
                    const task =
                      prompt("Enter completed task:");

                    if (task) {
                      setCompletedTasks([
                        ...completedTasks,
                        task,
                      ]);
                    }
                  }}
                >
                  <FaPlus />
                  Add Task
                </button>

              </div>


              <div className="task-list">

                {completedTasks.map((task, index) => (

                  <div className="update-task completed-task" key={index}>

                    <FaCheckCircle />

                    <span>{task}</span>

                    <button
                      onClick={() =>
                        deleteCompletedTask(index)
                      }
                    >
                      <FaTrash />
                    </button>

                  </div>

                ))}

              </div>


              <button
                className="add-another"
                onClick={() => {
                  const task =
                    prompt("Enter another completed task:");

                  if (task) {
                    setCompletedTasks([
                      ...completedTasks,
                      task,
                    ]);
                  }
                }}
              >
                <FaPlus />
                Add another completed task
              </button>

            </div>


            {/* Pending */}

            <div className="daily-card task-box">

              <div className="task-box-header">

                <div className="section-heading">

                  <div className="section-number red-bg">
                    3.
                  </div>

                  <div>
                    <h3>Pending Tasks</h3>
                    <p>Tasks that are still in progress</p>
                  </div>

                </div>

                <button
                  className="add-task-btn orange-btn"
                  onClick={() => {
                    const task =
                      prompt("Enter pending task:");

                    if (task) {
                      setPendingTasks([
                        ...pendingTasks,
                        task,
                      ]);
                    }
                  }}
                >
                  <FaPlus />
                  Add Task
                </button>

              </div>


              <div className="task-list">

                {pendingTasks.map((task, index) => (

                  <div className="update-task pending-task" key={index}>

                    <span className="empty-circle"></span>

                    <span>{task}</span>

                    <button
                      onClick={() =>
                        deletePendingTask(index)
                      }
                    >
                      <FaTrash />
                    </button>

                  </div>

                ))}

              </div>


              <button
                className="add-another pending-add"
                onClick={() => {
                  const task =
                    prompt("Enter another pending task:");

                  if (task) {
                    setPendingTasks([
                      ...pendingTasks,
                      task,
                    ]);
                  }
                }}
              >
                <FaPlus />
                Add another pending task
              </button>

            </div>

          </div>


          {/* Tomorrow + Issues */}

          <div className="task-columns">


            {/* Tomorrow */}

            <div className="daily-card text-box">

              <div className="section-heading">

                <div className="section-number purple-bg">
                  4.
                </div>

                <div>
                  <h3>Tomorrow's Plan</h3>
                  <p>What are your plans for tomorrow?</p>
                </div>

              </div>

              <textarea
                value={tomorrowPlan}
                onChange={(e) =>
                  setTomorrowPlan(e.target.value)
                }
              />

              <small className="text-limit">
                {tomorrowPlan.length} / 500
              </small>

            </div>


            {/* Issues */}

            <div className="daily-card text-box">

              <div className="section-heading">

                <div className="section-number red-bg">
                  5.
                </div>

                <div>
                  <h3>Issues / Blockers</h3>
                  <p>Are you facing any issues or blockers?</p>
                </div>

              </div>

              <textarea
                value={issues}
                onChange={(e) =>
                  setIssues(e.target.value)
                }
              />

              <small className="text-limit">
                {issues.length} / 500
              </small>

            </div>

          </div>


          {/* Attachments */}

          <div className="daily-card attachment-card">

            <div className="section-heading">

              <div className="section-number blue-bg">
                6.
              </div>

              <div>
                <h3>Attachments <span>(Optional)</span></h3>
                <p>
                  Add screenshots, documents or any other files
                </p>
              </div>

            </div>


            <label className="upload-box">

              <FaPaperclip />

              <div>
                <strong>
                  Drag & drop files here or click to upload
                </strong>

                <p>
                  JPG, PNG, PDF, DOC, ZIP (Max. 10MB)
                </p>
              </div>

              <input
                type="file"
                multiple
                onChange={handleFiles}
              />

            </label>


            {/* Uploaded files */}

            {attachments.length > 0 && (

              <div className="uploaded-files">

                {attachments.map((file, index) => (

                  <div className="uploaded-file" key={index}>

                    <FaFileAlt />

                    <div>
                      <strong>{file.name}</strong>
                      <small>
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </small>
                    </div>

                    <button
                      onClick={() =>
                        removeAttachment(index)
                      }
                    >
                      <FaTimes />
                    </button>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* Bottom Buttons */}

          <div className="submit-area">

            <button
              className="save-btn"
              onClick={saveDraft}
            >
              <FaSave />
              Save Draft
            </button>

            <button
              className="submit-btn"
              onClick={submitUpdate}
            >
              <FaPaperPlane />
              Submit Daily Update
            </button>

          </div>

          <p className="submit-note">
            Your update will be visible to your manager
          </p>


        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="daily-sidebar">


          {/* Today's Progress */}

          <div className="daily-card progress-card">

            <h3>Today's Progress</h3>

            <div className="progress-circle">

              <div>
                <strong>80%</strong>
              </div>

            </div>


            <div className="progress-legend">

              <p>
                <span className="legend-dot green-dot"></span>
                Completed
                <b>6</b>
              </p>

              <p>
                <span className="legend-dot blue-dot"></span>
                In Progress
                <b>2</b>
              </p>

              <p>
                <span className="legend-dot red-dot"></span>
                Not Started
                <b>1</b>
              </p>

            </div>


            <div className="great-progress">
              Great Progress!
            </div>

            <p className="keep-text">
              Keep up the good work! 🚀
            </p>

          </div>


          {/* Streak */}

          <div className="daily-card streak-card">

            <h3>Your Streak</h3>

            <div className="streak-content">

              <FaFire />

              <div>
                <strong>12 Days</strong>
                <p>Keep your streak alive!</p>
              </div>

            </div>

          </div>


          {/* Recent Submissions */}

          <div className="daily-card submissions-card">

            <div className="side-card-header">

              <h3>Recent Submissions</h3>

              <button
                onClick={() =>
                  alert("Showing all submissions")
                }
              >
                View All
              </button>

            </div>


            <div className="submission-item">

              <FaFileAlt />

              <div>
                <strong>07 Aug 2026</strong>
                <span>Submitted</span>
              </div>

              <small>08:45 PM</small>

              <FaChevronRight />

            </div>


            <div className="submission-item">

              <FaFileAlt />

              <div>
                <strong>06 Aug 2026</strong>
                <span>Submitted</span>
              </div>

              <small>09:10 PM</small>

              <FaChevronRight />

            </div>


            <div className="submission-item">

              <FaFileAlt />

              <div>
                <strong>05 Aug 2026</strong>
                <span className="draft-status">Draft</span>
              </div>

              <small>08:30 PM</small>

              <FaChevronRight />

            </div>


            <div className="submission-item">

              <FaFileAlt />

              <div>
                <strong>04 Aug 2026</strong>
                <span>Submitted</span>
              </div>

              <small>09:05 PM</small>

              <FaChevronRight />

            </div>

          </div>


          {/* Manager Feedback */}

          <div className="daily-card feedback-card">

            <div className="side-card-header">

              <h3>Manager's Feedback</h3>

              <span className="approved">
                ✓ Approved
              </span>

            </div>


            <p className="feedback-text">
              Great work on the dashboard! Keep focusing on
              completing the pending tasks.
            </p>


            <div className="manager">

              <div className="manager-avatar">
                <FaUserCircle />
              </div>

              <div>
                <strong>Rajat Verma</strong>
                <span>Manager</span>
              </div>

              <small>07 Aug 2026, 09:15 PM</small>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DailyUpdates;