// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ 
{
    type: 'input',
    message: 'Project title:',
    name: 'title',
},
{
    type: 'input',
    message: 'Project description:',
    name: 'description',
},
{
    type: 'input',
    message: 'Table of Contents:',
    name: 'contents',
},
{
    type: 'input',
    message: 'Installation:',
    name: 'installation',
},
{
    type: 'input',
    message: 'Usage:',
    name: 'usage',
},
{
    type: 'list',
    message: 'License:',
    name: 'license',
    choices: ["No License", "Apache 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License"]
},
{
    type: 'input',
    message: 'Contributing:',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Tests:',
    name: 'tests',
},
{
    type: 'input',
    message: 'Questions:',
    name: 'questions',
}];

// TODO: Create a function to write README file
function writeReadMe(filename, data){
    fs.writeFile(`${filename}`, data, (err) =>
        err ? console.log(err) : console.log("successfully created README file!")
    )
}

// TODO: Create a function to initialize app
function init(){
    inquirer
        .prompt(questions)
        .then((response) => {
            //generate markdown based on response
            let md = generateMarkdown(response)
            //create new readme file
            writeReadMe(`${response.title}.md`, md)
        })}

// Function call to initialize app
init();