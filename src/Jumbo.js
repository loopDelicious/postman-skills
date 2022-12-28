import { Button } from "react-bootstrap";
import "./index.css";

function Jumbo() {
  return (
    <div className="jumbotron">
      <div className="jumbotron-contents">
        <h1>Level up your Postman tester skills</h1>
        <p>
          These are the recommended Postman skills for API testing
          professionals. Assess your own experience, and continue improving your
          professional capabilities.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </div>
    </div>
  );
}

export default Jumbo;
