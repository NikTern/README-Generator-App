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
    type: 'input',
    message: 'License:',
    name: 'license',
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
            let md = generateMarkdown(response)
            writeReadMe(`${response.title}.md`, md)
        })}

// Function call to initialize app
init();
