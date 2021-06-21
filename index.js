// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// const { validate } = require("json-schema");
const readMeMd = require("./src/readme-template");
const { writeFile } = require("./utils/generate-markdown");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a title for your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message:"Choose which license you would like to add to your project. (Required)",
      choices: ["MIT", "Apache", "GNU", "ISC", "None"],
      validate: (licenseChoice) => {
        if (licenseChoice) {
          return true;
        } else {
          console.log("Please choose a license for your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message:
        "Provide some instructions on the installation of your project. (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please provide some information on installation!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Enter some instructions on how to use your project. (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log(
            "Please add instructions on how to use your project. (Required)"
          );
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "contribution",
      message: "Would you like to add guidelines for contributors?",
      default: false,
    },
    {
      type: "confirm",
      name: "test",
      message: "Would you like to add a section testing your code?",
      default: false,
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address. (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
  ]);
};

promptUser()
  .then((readMeData) => {
    return readMeMd(readMeData);
  })
  .then((readMeMarkDown) => {
    return writeFile(readMeMarkDown);
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
