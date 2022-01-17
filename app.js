const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require('./src/page-template.js')

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter Your Github Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

// promptUser().then((answers) => console.log(answers));

const promptProject = portfolioData => {

  console.log(`
=================
Add a New Project
=================
`);

if (!portfolioData.projects) {
  portfolioData.projects = [];
}
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false,
    },
    {
      type: "confirm",
      name: "confirmAddProject",
      message: "Would you like to enter another project?",
      default: false,
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

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });


// const fs = require("fs");
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(userName, githubName);

// fs.writeFile("index.html", pageHTML, err => {
//   if (err) throw new Error (err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i <profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     profileDataArr.forEach(profileItem =>  console.log(profileItem));

// }

// printProfileData(profileDataArgs)
