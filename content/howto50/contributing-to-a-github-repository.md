---
title: "Contributing to a GitHub repository"
category: 'Collaboration & Project Management'
---

We like to work with our community and encourage you to create and contribute using pull requests!

## 1. Preparation

*   Make sure you have a [GitHub account](https://github.com/join)
*   Make sure you have a [Mendix account](https://home.mendix.com/)
*   [Fork](https://help.github.com/articles/fork-a-repo/) the repository on GitHub

## 2\. Making changes to an existing repository

*   Create a new branch from where you want to base your work on your fork. (This is usually the repository's master branch.)
*   To quickly create a branch based on master; git checkout -b fix/master/my_contribution master. It is advised to avoid working directly on the master branch.
*   Make commits of logical units.
*   Check for unnecessary whitespace with git diff --check before committing.
*   Make sure you have added the necessary tests for your changes.
*   Run all the tests to assure nothing else was accidentally broken.

## 3\. Submitting Changes

*   Push your changes to the branch in your fork of the repository.
*   [Submit a pull request](https://help.github.com/articles/using-pull-requests/) to the appropriate repository in the Mendix organization.
*   Mention the id's for any issues that are fixed by the changes [Closing issues with Pull Requests](https://help.github.com/articles/closing-issues-via-commit-messages#closing-issues-with-pull-requests)
*   After feedback has been given we expect responses within two weeks. After two weeks we may close the pull request if it isn't showing any activity.

## 4\. Related content

*   [Managing your Application Requirements with Mendix](/developerportal/collaborate/stories)
*   [Starting your own repository](starting-your-own-repository)
*   [Contributing to a GitHub repository](contributing-to-a-github-repository)
*   [Using Team Server - Version Control](using-team-server-version-control)
*   [How to Use the Mendix Feedback Widget](/developerportal/collaborate/use-feedback-widget)
