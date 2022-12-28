import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "./ItemList.css";

const items = [
  "Make calls to REST, GraphQL, and other protocol endpoints",
  "Debug unexpected API behavior",
  "Write Postman tests using Chai.js BDD assertions",
  "Organize multiple Postman assertions in tests grouped by topic and feature",
  "Validate a server response against a pre-defined schema",
  "Set variables dynamically like for query parameters, headers, and body",
  "Set up environments to store profile and configuration details",
  "Authentication using authorization helpers",
  "Authentication using cookies",
  "Write custom scripts to generate, transform, and retrieve data",
  "Write conditional and dynamic tests using variables",
  "Use API calls and scripts to replicate a user scenario",
  "Use test retries and timeouts",
  "Increase test scenarios by using an external data file or generating random test data",
  "Use external libraries in the scripting areas of Postman",
  "Stub the network calls the application or third parties make using mock servers",
  "Output test results for others to review as HTML, data visualizations, or other means",
  "Record and observe the network calls an application makes using the Interceptor or proxy",
  "Run Postman tests on Postman Cloud or as part of a CI/CD pipeline",
  "Install and use Newman to run tests using command line arguments and environments",
  "Set up third party integrations for Source Control, Deployment, CI, Analytics, or Notifications",
];

class ItemList extends Component {
  state = {
    checkboxCount: 0,
  };

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
      this.setState({
        checkboxCount: parseInt(this.state.checkboxCount) - 1,
      });
    } else {
      this.selectedCheckboxes.add(label);
      this.setState({
        checkboxCount: parseInt(this.state.checkboxCount) + 1,
      });
    }
  };

  // handleFormSubmit = (formSubmitEvent) => {
  //   formSubmitEvent.preventDefault();

  //   for (const checkbox of this.selectedCheckboxes) {
  //     console.log(checkbox, "is selected.");
  //   }
  // };

  createCheckbox = (label, index) => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label + index}
    />
  );

  createCheckboxes = () => items.map(this.createCheckbox);

  render() {
    let completionPercentage = Math.floor(
      (this.state.checkboxCount / this.createCheckboxes().length) * 100
    );
    let itemMessage;
    if (this.state.checkboxCount == 0) {
      itemMessage = "You're just getting started";
    }
    if (completionPercentage > 0 && completionPercentage < 25) {
      itemMessage = "Needs improvement";
    }
    if (completionPercentage >= 25 && completionPercentage < 50) {
      itemMessage = "You're on your way";
    }
    if (completionPercentage >= 50 && completionPercentage < 100) {
      itemMessage = "Approaching expert status";
    }
    if (completionPercentage == 100) {
      itemMessage = "You did it!";
    }

    return (
      <div className="container item-list">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              {/* <button className="btn btn-default" type="submit">
                Save
              </button> */}
            </form>
          </div>
        </div>
        <p className="item-counter">
          {this.state.checkboxCount} / {this.createCheckboxes().length}
        </p>
        <p className="item-counter">({completionPercentage}% completed)</p>
        <p className="item-counter">{itemMessage}</p>
      </div>
    );
  }
}

export default ItemList;
