import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "./ItemList.css";
// import items from "./resources.json";

const items = [
  {
    item: "Make calls to REST, GraphQL, and other protocol endpoints",
    resources: [
      {
        title: "How to Send API Requests",
        link: "https://youtu.be/8mBmLDbpIH8",
      },
      {
        title: "GraphQL in Postman",
        link: "https://youtu.be/7pUbezVADQs",
      },
    ],
  },
  {
    item: "Debug unexpected API behaviors",
    resources: [
      {
        title: "How to Inspect API Responses",
        link: "https://youtu.be/31wBZyBdbgw",
      },
      {
        title: "Debugging with the Console",
        link: "https://youtu.be/YCsURct9wCk",
      },
    ],
  },
  {
    item: "Find answers to your Postman questions",
    resources: [
      {
        title: "Postman Docs",
        link: "https://learning.postman.com/",
      },
      {
        title: "Community Forum",
        link: "https://community.postman.com/",
      },
    ],
  },
  {
    item: "Write Postman tests using Chai.js BDD assertions",
    resources: [
      {
        title: "Writing Tests in Postman - with Examples",
        link: "https://youtu.be/oXW-C2bM0wE",
      },
      {
        title: "Test examples in Postman",
        link: "https://www.postman.com/postman/workspace/test-examples-in-postman/overview",
      },
    ],
  },
  {
    item: "Organize multiple Postman assertions in tests grouped by topic and feature",
    resources: [
      {
        title: "Using multiple assertions",
        link: "https://learning.postman.com/docs/writing-scripts/script-references/test-examples/#using-multiple-assertions",
      },
    ],
  },
  {
    item: "Validate a server response against a pre-defined schema",
    resources: [
      {
        title: "Validating response structure",
        link: "https://www.postman.com/postman/workspace/test-examples-in-postman/request/1559645-d05d52f0-056e-4680-939e-1be3755e08cd",
      },
      {
        title: "Validating APIs",
        link: "https://learning.postman.com/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/",
      },
    ],
  },
  {
    item: "Set variables dynamically like for query parameters, headers, and body",
    resources: [
      {
        title: "Add query params dynamically",
        link: "https://www.postman.com/postman/workspace/postman-answers/collection/13455110-5cd6562d-5712-4709-8f20-291bc847a670?ctx=documentation",
      },
      {
        title: "Set request body dynamically",
        link: "https://www.postman.com/postman/workspace/postman-answers/collection/9215231-b9133e48-73c3-4aa4-b189-e038ee4c5e00?ctx=documentation",
      },
      {
        title: "Set path param dynamically",
        link: "https://www.postman.com/postman/workspace/postman-answers/collection/9215231-33d1fd93-db48-4cba-8c2c-fcf96a013e70?ctx=documentation",
      },
    ],
  },
  {
    item: "Set up environments to store profile and configuration details",
    resources: [
      {
        title: "Managing environments",
        link: "https://learning.postman.com/docs/sending-requests/managing-environments/",
      },
    ],
  },
  {
    item: "Authentication using authorization helpers",
    resources: [
      {
        title: "Authorizing requests",
        link: "https://learning.postman.com/docs/sending-requests/authorization/",
      },
    ],
  },
  {
    item: "Authentication using cookies",
    resources: [
      {
        title: "Using cookies",
        link: "https://learning.postman.com/docs/sending-requests/cookies/",
      },
      {
        title: "Syncing Cookies for Authentication",
        link: "https://youtu.be/jfgFNw5SoUg",
      },
    ],
  },
  {
    item: "Write custom scripts to generate, transform, and retrieve data",
    resources: [
      {
        title: "Scripting in Postman",
        link: "https://learning.postman.com/docs/writing-scripts/intro-to-scripts/",
      },
    ],
  },
  {
    item: "Write conditional and dynamic tests using variables",
    resources: [
      {
        title: "Building request workflows",
        link: "https://learning.postman.com/docs/running-collections/building-workflows/",
      },
      {
        title: "Conditionally skip tests and requests",
        link: "https://www.postman.com/postman/workspace/15-days-of-postman-for-testers/documentation/1559645-60e4a553-2b1f-4248-a9cf-c77838c19a55",
      },
    ],
  },
  {
    item: "Use API calls and scripts to replicate a user scenario",
    resources: [
      {
        title: "Scenario testing",
        link: "https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/documentation/1559645-e9968036-7ad8-4daa-97c3-331184213392",
      },
    ],
  },
  {
    item: "Use test retries and timeouts",
    resources: [
      {
        title: "Configure test retries and timeouts",
        link: "https://www.postman.com/postman/workspace/15-days-of-postman-for-testers/documentation/1559645-60e4a553-2b1f-4248-a9cf-c77838c19a55",
      },
    ],
  },
  {
    item: "Increase test scenarios by using an external data file or generating random test data",
    resources: [
      {
        title: "Loop through a data file",
        link: "https://youtu.be/RH8b3gbujPY",
      },
    ],
  },
  {
    item: "Use external libraries in the scripting areas of Postman",
    resources: [
      {
        title: "Adding external libraries",
        link: "https://www.postman.com/postman/workspace/postman-answers/collection/13455110-7a6c90f0-0062-4089-b206-27c803dc1c37?ctx=documentation",
      },
    ],
  },
  {
    item: "Stub the network calls the application or third parties make using mock servers",
    resources: [
      {
        title: "Mock servers",
        link: "https://youtu.be/n_7UUghLpco",
      },
    ],
  },
  {
    item: "Output test results for others to review as HTML, data visualizations, or other means",
    resources: [
      {
        title: "Using Newman custom reporters",
        link: "https://learning.postman.com/docs/running-collections/using-newman-cli/newman-custom-reporters/",
      },
      {
        title: "Sample visualizers",
        link: "https://www.postman.com/postman/workspace/sample-visualizations/overview",
      },
    ],
  },
  {
    item: "Record and observe the network calls an application makes using the Interceptor or proxy",
    resources: [
      {
        title: "Capture API calls with a proxy",
        link: "https://youtu.be/bjrCHUITZ3k",
      },
    ],
  },
  {
    item: "Run Postman tests on Postman Cloud or as part of a CI/CD pipeline",
    resources: [
      {
        title: "Integrate CircleCI in Postman",
        link: "https://youtu.be/9a0t9rhauAQ",
      },
      {
        title: "CI with Postman API",
        link: "https://learning.postman.com/docs/running-collections/using-newman-cli/continuous-integration/",
      },
    ],
  },
  {
    item: "Install and use Newman to run tests using command line arguments and environments",
    resources: [
      {
        title: "Command line integration with Newman",
        link: "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/",
      },
      {
        title: "Manage CLI Environment Variables",
        link: "https://youtu.be/n8O2KP-Zx8I",
      },
    ],
  },
  {
    item: "Set up third party integrations for Source Control, Deployment, CI, Analytics, or Notifications",
    resources: [
      {
        title: "Integrating with Postman",
        link: "https://learning.postman.com/docs/integrations/intro-integrations/",
      },
    ],
  },
];

class ItemList extends Component {
  state = {
    checkboxCount: 0,
  };

  componentDidMount = () => {
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

  createCheckbox = (label, index) => {
    let resourceItems = label.resources.map((resource, index) => (
      <a
        href={resource.link}
        key={resource.title + index}
        title={resource.title}
      >
        {index + 1}
        {index < label.resources.length - 1 ? "," : ""}&nbsp;
      </a>
    ));
    let fullLabel = (
      <div className="labelWithResources">
        &nbsp; {label.item} - {resourceItems}
      </div>
    );
    return (
      <div>
        <Checkbox
          label={fullLabel}
          handleCheckboxChange={this.toggleCheckbox}
          key={label.item + index}
        />
      </div>
    );
  };

  createCheckboxes = () => items.map(this.createCheckbox);

  render() {
    let completionPercentage = Math.floor(
      (this.state.checkboxCount / this.createCheckboxes().length) * 100
    );
    let itemMessage;
    if (this.state.checkboxCount === 0) {
      itemMessage = "📚 Just getting started";
    }
    if (completionPercentage > 0 && completionPercentage < 25) {
      itemMessage = "🤓 Needs improvement";
    }
    if (completionPercentage >= 25 && completionPercentage < 50) {
      itemMessage = "🏅 You're on your way";
    }
    if (completionPercentage >= 50 && completionPercentage < 100) {
      itemMessage = "🏆 Approaching expert status";
    }
    if (completionPercentage === 100) {
      itemMessage = "🚀 You did it!";
    }

    return (
      <div className="container item-list">
        <div className="item-summary">
          <h4>✅ &nbsp; Which Postman skills do you have experience with?</h4>
        </div>
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
        <h6 className="item-counter">
          {this.state.checkboxCount} / {this.createCheckboxes().length}&nbsp; (
          {completionPercentage}%) &nbsp; &nbsp; {itemMessage}
        </h6>
      </div>
    );
  }
}

export default ItemList;
