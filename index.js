const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },

      {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
      },
      {
        type: "input",
        name: "description",
        message: "Briefly, describe your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Tell us how to install your project:",
      },

      {
        type: "input",
        name: "usage",
        message: "Explain how to use your project:",
      },

      {
        type: "input",
        name: "tests",
        message: "Describe the testing process:",
      },

      {
        type: "list",
        name: "license",
        message: "What License do you need for your project?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },

      {
        type: "input",
        name: "contributing",
        message: "What are the guidelines to contribute on this project?",
      },

      {
        type: "input",
        name: "questions",
        message: "Please write any questions you have for your users:",
      },

      {
        type: "input",
        name: "github",
        message: "What is your github user name?",
      },

      {
        type: "input",
        name: "email",
        message: "Enter your email address:",
      },
    ])

    .then((answers) => {
      const readmeContent = generateMarkdown(answers);

      writeToFile("./created/README.md", readmeContent);
    }),
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File is created")
  );
}

// function to initialize program
function init() {}

// function call to initialize program
init();
