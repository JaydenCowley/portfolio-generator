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
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));
// const fs = require('fs')
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name,github)


// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });