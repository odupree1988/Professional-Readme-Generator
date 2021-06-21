// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const badge = "https://img.shields.io/badge/License-MESSAGE-success";

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
      type: "choices",
      name: "license",
      message:
        "Choose which license you would like to add to your project. (Required)",
      choices: ["MIT", "Apache", "GNU", "ISC", "None"],
      validate: (licenseChoice) => {
        if (licenseChoice) {
          return true;
        } else {
          console.log("Please choose a license for your project!");
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
        }
      },
    },
    {
      type: 'confirm',
      name: 'contribution',
      message: 'Would you like to add guidelines for contributors?',
      default: false
    },
    {
      type :'confirm',
      name: 'test',
      message: 'Would you like to add a section testing your code?',
      default: false
    }
  ]);
  
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
