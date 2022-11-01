# Brians Tech Blog App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

The following is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site is built completely from scratch and deployed to Heroku. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
* [Tools](#tools)
* [Mock Up](#Mock-Up)
* [Instructions](#Instructions)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Technical Acceptance Criteria](#Technical-Acceptance-Criteria)
* [Deployment](#Deployment)
* [Application Quality](#Application-Quality)
* [Repository Quality](#Repository-Quality)
* [Submission](#Submission)

### Tools
1. JavaScript
2. [MySQL2](https://www.npmjs.com/package/mysql2)
3. [Node.js](https://nodejs.org/en/)
4. [Express.js](https://www.npmjs.com/package/express)
5. [Dotenv](https://www.npmjs.com/package/dotenv)
6. [Sequelize](https://www.npmjs.com/package/sequelize)

### Mock Up
![Team Generator HTML Webpage Screenshot](./assets/images/14-mvc-homework-demo-01.gif)

## Instructions
1. Clone the main project, then open the cloned file.
2. Make sure you are in the main project folder using the 'cd' command.
3. Open command prompt and run: npm install
4. Create a `.env` in the root directory
5. Create the following three variables in the `.env` file:
- `DB_NAME=ecommerce_db`
- `DB_USER=`[MySQL username]
- `DB_PW=`[MySQL password]
6. Open MySQL CLI: `mysql -u root -p`
7. Run: `source db/schema.sql` to create the database.
8. Quit MySQL: `quit`
9. Run Tests: `npm run test`
8. Run: `npm run seed` to seed the databse.
9. Run: `npm start`
10. UserName: 'password'
11. Password: 'password'

### User Story
* AS A developer who writes about tech
* I WANT a CMS-style blog site
* SO THAT I can publish articles, blog posts, and my thoughts and opinions

### Acceptance Criteria:
* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
* THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* WHEN I click on the homepage option
* THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
* THEN I am prompted to either sign up or sign in
* WHEN I choose to sign up
* THEN I am prompted to create a username and password
* WHEN I click on the sign-up button
* THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
* THEN I am prompted to enter my username and password
* WHEN I am signed in to the site
* THEN I see navigation links for the homepage, the dashboard, and the option to log out
* WHEN I click on the homepage option in the navigation
* THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* WHEN I click on an existing blog post
* THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* WHEN I enter a comment and click on the submit button while signed in
* THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* WHEN I click on the dashboard option in the navigation
* THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* WHEN I click on the button to add a new blog post
* THEN I am prompted to enter both a title and contents for my blog post
* WHEN I click on the button to create a new blog post
* THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
* WHEN I click on one of my existing posts in the dashboard
* THEN I am able to delete or update my post and taken back to an updated dashboard
* WHEN I click on the logout option in the navigation
* THEN I am signed out of the site
* WHEN I am idle on the site for more than a set time
* THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

### Technical Acceptance Criteria
* Satisfies all of the preceding acceptance criteria plus the following:
* Application’s folder structure follows the Model-View-Controller paradigm.
* Uses the express-handlebarsLinks to an external site. package to use Handlebars.js for your Views.
* Application must be deployed to Heroku.

### Deployment
* Application deployed at live URL.
* Application loads with no errors.
* Application GitHub URL submitted.
* GitHub repository contains application code.

### Application Quality
* User experience is intuitive and easy to navigate.
* User interface style is clean and polished.
* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README with description and a link to a deployed application.

### Submission
* Date Submitted: November 1, 2022
* You are required to submit BOTH of the following for review: 
1. The URL of the functional, deployed application: https://brians-tech-blog-app.herokuapp.com/
2. The URL of the GitHub repository. Give the repository a unique name and include a README describing the project: https://github.com/bslockhart/brians-tech-blog-app