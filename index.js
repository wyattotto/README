// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require(`fs`)
const MrkDown = require('./MrkDown.js');
const { resolve } = require('path');
const filename = 'README.md'
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: "What is your GitHub Username?",
        name: "username",

    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your Project?",
    },
    {
        type: "input",
        name: "installation",
        message:"Enter Installation instructions here."
    },
    {
        type: "input",
        name: "usage",
        message:"Provide some examples of usage for you project."  
    },
    {
        type: "input",
        name: "contributing",
        message:"State guidelines on how others can help contribute to the project."
    },
    {
        type: "input",
        name: "test",
        message:"Provide any test written for your project & how to run them."
    },
    {
        type: "input",
        name: "email",
        message:"What is your email address?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
        choices: ['MIT', 'PDDL (Public Domain Dedication and License)', 'CC--0', 'Mozilla Public License 2.0'],
    },
]

const prompt = inquirer.createPromptModule();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, MrkDown.generateMarkdown(data), err => {
        if (err){reject (err);}
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        console.log("Your Readme is being written as we speak!")
        writeToFile(filename, data);

    })
    
}
// Function call to initialize app
init();
