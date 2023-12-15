import * as React from "react"
import "../styles/timeline.css"

const Timeline = () => {
  return (
    <>
      <h2 className="heading">My Timeline</h2>
      <div className="timeline-main">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content-left">
                <span className="date">01-Apr-2016</span>
                <p className="text-content">
                  Completed 10th, ICSE{" "}
                  <span className="text-gray-400">@Vikaasa School</span>
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content-right">
                <span className="date">01-Apr-2018</span>
                <p>
                  Completed 12th, ISC
                  <br />
                  <span className="text-gray-400">@Vikaasa School</span>
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content-left">
                <span className="date">18-Oct-2021</span>
                <p className="text-content">
                  Joined <span className="text-gray-400">@Vuram</span>
                  <br />
                  as an Intern
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content-right">
                <span className="date">01-May-2022</span>
                <p>
                  Graduated BE
                  <br />
                  in CSE <span className="text-gray-400">@VCET</span>
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content-left">
                <span className="date">01-Jul-2022</span>
                <p className="text-content">
                  Continued as an
                  <br />
                  Intern with <span className="text-gray-400">@Workhall</span>
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content-right">
                <span className="date">01-Aug-2022</span>
                <p>
                  Moved to Full Time{" "}
                  <span className="text-gray-400">@Workhall</span> as Associate
                  Software Engineer
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line" style={{ marginTop: "2.5rem" }} />
    </>
  )
}

export default Timeline
