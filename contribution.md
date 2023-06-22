# Welcome to TCET Open Source contributing guide 

Thank you for investing your time in contributing to our project!

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, and merging the PR.

Use the table of contents icon on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)


## Getting started

To navigate our codebase with confidence, see our [Github Repository](https://github.com/tcet-opensource/erp-backend)

### Issues

#### Create a new issue

If you spot a problem with the repository, [search if an issue already exists](https://github.com/tcet-opensource/erp-backend/issues). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/tcet-opensource/erp-backend/issues/new).

#### Solve an issue

Scan through our [existing issues](https://github.com/tcet-opensource/erp-backend/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](https://github.com/tcet-opensource/erp-backend/labels) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI

Click **Make a contribution** at the bottom of erp-backend to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review.


#### Make changes locally

1. for External Contributors , Fork the repository
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to fork the repo
- Using the command line:
  - [Fork the repo](https://github.com/tcet-opensource/erp-backend/fork), so that you can make your changes without affecting the original project until you're ready to merge them.
- Clone the Repository for Internal Contributors 
&nbsp;
`git clone -b development https://github.com/tcet-opensource/erp-backend.git`
2. Install or update to **Node.js**, at the version specified in `.node-version`. For more information, see [the development guide](https://github.com/tcet-opensource/erp-backend#tcet-erp-system).
3. Switch to Development Branch and create a working branch for each issue and start with your changes.
4. Test your changes: After making your changes, it is crucial to thoroughly test them to ensure they function as intended and do not introduce any new bugs. Run any relevant tests or simulations and verify that the modified code performs correctly.


#### Commit your changes
1. Stage your changes: Use the git add command to stage the modified files for the commit. This marks the changes as ready to be included in the next commit.
`git add <file1> <file2> ...`
2. Commit your changes: Create a commit to record your modifications with a meaningful commit message. This helps in tracking and understanding the purpose of the changes.
#### Push your Changes
- After committing your changes, you push them to a remote repository (in this case, your forked repository on GitHub) using the git push command. Pushing your changes uploads them to the remote repository, making them visible to others and allowing you to share your work.
 `git push origin <branch name>`


### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Don't forget to link PR to issue by using "#" issue number , if you are solving one.
- Once you submit your PR, a team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using suggested changes or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as resolved
- If you run into any merge issues, checkout this [git merge conflicts](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations , The TCET Open Source team thanks you.

