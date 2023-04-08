# TCET ERP System

TCET ERP System is a project that aims to simplify and automate daily operation in TCET.

This ERP system will be used to manage various aspects of the operations of colleges, including admissions, registration, student records, financial aid, course scheduling, and fees. The ERP system would typically consist of multiple integrated modules that support these functions.

  - **Technology stack**: We will be using node.js and express for the backend along with NoSQL, that is, MongoDB as the database due to the modular nature of this project.

## Dependencies

All the dependencies used in this project will be listed in the `package.json` file from the root directory.

## Installation

To start working on this project, follow the steps given above until you complete Step 4, then make a MongoDB Atlas database, get the connection URI, and save it as `DB_URL` in your `.env` file. Also, make sure to use
```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));
```
 to generate a token secret that you will use for JWT authentication, save it as `TOKEN_SECRET` in your `.env` file.

 Once you are done with this, install the packages through `npm i` and run the server with `npm run serverstart` or `npm run serverstartWin` depending on your operating system.

## Contributing

1. Choose an issue, bug, exploit, or feature to work on: Start by identifying an issue or feature in the repository that you would like to work on. If you can't find an existing issue or feature, you can create a new one.

2. Fork the repository: Once you have identified an issue or feature to work on, you will need to fork the repository. This creates a copy of the repository in your own GitHub account.

3. Clone the repository: Next, you will need to clone the repository to your local machine. You can do this by using the git clone command and specifying the URL of the repository.

4. Create a new branch: Before making any changes, you should create a new branch in your local repository. This will keep your changes separate from the main branch of the repository and make it easier to submit a pull request later on.

5. Make your changes: Now you can make your changes to the code in your local branch. Be sure to follow the project's coding style and conventions.

6. Test your changes: Once you have made your changes, be sure to test them thoroughly to ensure that they work as intended and do not introduce new issues or bugs.

7. Commit your changes: Once you are satisfied with your changes, commit them to your local branch using the git commit command.

8. Push your changes: Once you have committed your changes, push them to your forked repository on GitHub using the git push command.

9. Open a pull request: Finally, open a pull request to merge your changes into the main branch of the repository. Be sure to describe your changes and explain why they are necessary or beneficial. Note that the project maintainers may request changes or reject your pull request, so your first pull request is not guaranteed to be accepted.

> It's also worth noting that you should communicate with the project maintainers and other contributors to ensure that your changes align with the project's goals and direction.

