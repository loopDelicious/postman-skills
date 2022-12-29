import { Button } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbo() {
  return (
    <div className="jumbotron">
      <div className="jumbotron-contents">
        <h1>Level up your Postman skills</h1>
        <p>
          <b>For API testing professionals:</b> Assess your Postman experience
          in the quiz below, or skip ahead to the intermediate test challenge
        </p>
        <p>
          <a href="https://www.postman.com/postman/workspace/15-days-of-postman-for-testers">
            <Button variant="primary" className="btn-primary cta">
              Take the 15-day challenge
            </Button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Jumbo;
