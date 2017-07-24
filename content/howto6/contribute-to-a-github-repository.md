---
title: "Contribute to a GitHub Repository"
category: "Collaboration & Project Management"
tags: []
---
## 1 Introduction

We like to work with our community, and we encourage you to create and contribute using pull requests!

**After using this how-to, you will know how to do the following:**  

* Contribute to a GitHub repository according to our guidelines

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a [GitHub account](https://github.com/join)
* Have a [Mendix account](https://home.mendix.com/)
* Fork a repository on GitHub (for details, see here: [https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)

## 3 Making Changes to an Existing Repository

To make changes to an existing repository, follow these guidelines:

* Create a new branch from where you want to base your work on your fork (this is usually the repository's master branch)
* To quickly create a branch based on master, use `git checkout -b fix/master/my_contribution master`
    * Avoiding working directly on the master branch is adivsed
* Make commits of logical units
* Check for unnecessary whitespace with `git diff --check` before committing.
* Make sure you have added the necessary tests for your changes
* Run all the tests to assure nothing was accidentally broken

## 4 Submitting Changes

To submit changes, follow these guidelines:

* Push your changes to the branch in your fork of the repository
* Submit a pull request to the appropriate repository in the Mendix organization (for more information, see: [https://help.github.com/articles/using-pull-requests/](https://help.github.com/articles/using-pull-requests/))
* Mention the ID's for any issues that are fixed by the changes (for more information, see [https://help.github.com/articles/closing-issues-via-commit-messages#closing-issues-with-pull-requests](https://help.github.com/articles/closing-issues-via-commit-messages#closing-issues-with-pull-requests))
* After feedback has been given, Mendix expects a response within two weeks
    * After two weeks, we may close the pull request if it isn't showing any activity

## 5 Related Content

* [Managing Your Application Requirements with Mendix](/developerportal/howto/managing-your-application-requirements-with-mendix)
* [Starting Your Own Repository](starting-your-own-repository)
* [Using Team Server – Version Control](using-team-server-version-control)
* [Gathering User Feedback](/developerportal/howto/gathering-user-feedback)
* [Sharing the Development Database](sharing-the-development-database)
