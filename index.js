//  build a command-line tool that generates an HTML portfolio page from user input.
// Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL
const inquirer = require("inquirer");
const fs = require("fs");

// create a function to generate the HTML
const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <div class="h4 pb-2 mb-4 text-center text-secondary border-bottom border-secondary">
    <h1>My name is ${answers.name}</h1>
    </div>
    <div class="p-3 text-center bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
    <h2>I am from ${answers.location}</h2>
    <h3>One fun fact about myself: ${answers.bio}</h3>
    <h3>Here is my LinkedIn page: ${answers.linkedin}</h3>
    <h3>Or check my portfolio on GitHub: ${answers.github}</h3>
    </div>
</body>
</html>`;
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?",
      validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
    {
      type: "input",
      name: "bio",
      message: "Tell me about yourself.",
      validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn URL?",
      validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub URL?",
      validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
