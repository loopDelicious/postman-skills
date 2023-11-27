import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./index.css";

class Resources extends Component {
  state = {
    resources: [
      {
        title: "Postman Docs",
        link: "https://learning.postman.com/docs/getting-started/introduction/",
      },
      {
        title: "Intro to Postman: 6-part video series",
        link: "https://www.youtube.com/playlist?list=PLM-7VG-sgbtAgGq_pef5y_ruIUBPpUgNJ",
      },
      {
        title: "Postman API Test Automation for Beginners",
        link: "https://www.youtube.com/watch?v=zp5Jh2FIpF0",
      },
      {
        title: "Test examples in Postman: public workspace",
        link: "https://www.postman.com/postman/workspace/test-examples-in-postman/overview",
      },
      {
        title: "Continuous Quality: webinar video",
        link: "https://youtu.be/zrmQAgixMpU",
      },
    ],
  };
  render() {
    return (
      <div className="resources">
        <div className="cta-lower">
          <a href="https://www.postman.com/postman/workspace/15-days-of-postman-for-testers">
            <Button variant="primary" className="btn-primary cta">
              Take the 15-day challenge
            </Button>
          </a>
        </div>
        <div className="resources-contents">
          <h3>Additional Resources</h3>
          <ul className="list-group">
            {this.state.resources.map((resource, i) => (
              <li key={resource.link + i}>
                <a href={resource.link}>{resource.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Resources;
