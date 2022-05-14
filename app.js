//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

// //console.log(profileDataArgs);
// // this...
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1){
//     console.log(profileDataArr[i]);
//     }
//     console.log('=============');
// // is the same as this
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };
// printProfileData(profileDataArgs)
// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;
// Name: ${userName} 
// Github: ${githubName}

const inquirer = require('inquirer');
const Prompt = require('inquirer/lib/prompts/base');
const { type } = require('os');
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (Required)?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return flase;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log('Please enter your github username!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some infprmation about yourself:'
        }
    ]);
};
const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    ==================
    Add a New Project
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project',
            validate: projectName => {
                if (projectName) {
                    return true
                } else {
                    console.log('Please enter a project name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true
                } else {
                    console.log('Please enter a project description!')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true
                } else {
                    console.log('Please enter a link to this project!')
                    return false
                }
            }   
        },
        {
            type: 'confirm',
            name: 'confirmAddProject?',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

promptUser().then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));
// const fs = require('fs')
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name,github)


// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });