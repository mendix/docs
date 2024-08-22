---
title: "Contribute to a Mendix GitHub Repository"
url: /howto8/collaboration-requirements-management/contribute-to-a-github-repository/
weight: 20
aliases:
    - /howto8/collaboration-project-management/contribute-to-a-github-repository.html
    - /howto8/collaboration-project-management/contribute-to-a-github-repository
---

## Introduction

We like to work with our community, and we encourage you to create and contribute using pull requests!

This how-to teaches you how to do the following:

* Contribute to a Mendix GitHub Repository according to Mendix guidelines

## Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a [GitHub account](https://github.com/join)
* Have a [Mendix account](https://home.mendix.com/)
* Fork a repository on GitHub (for details, see [Fork a Repo](https://help.github.com/articles/fork-a-repo/))

## Making Changes to an Existing Repository

To make changes to an existing repository, follow these guidelines:

* Create a new branch from where you want to base your work on your fork (this is usually the repository's production branch)
* To quickly create a branch based on production, use `git checkout -b fix/production/my_contribution production`
    * Avoiding working directly on the production branch is advised
* Make commits of logical units
* Check for unnecessary whitespace with `git diff --check` before committing.
* Make sure you have added the necessary tests for your changes
* Run all the tests to assure nothing was accidentally broken

## Submitting Changes

To submit changes, follow these guidelines:

* Push your changes to the branch in your fork of the repository
* Submit a pull request to the appropriate repository in the Mendix organization (for more information, see [About Pull Requests](https://help.github.com/articles/using-pull-requests/))
* Mention the ID's for any issues that are fixed by the changes (for more information, see [Closing Issues Using Keywords](https://help.github.com/articles/closing-issues-via-commit-messages#closing-issues-with-pull-requests))
* After feedback has been given, Mendix expects a response within two weeks
    * After two weeks, we may close the pull request if it isn't showing any activity

## Read More

* [Start Your Own Repository](/howto8/collaboration-requirements-management/starting-your-own-repository/)
* [Version Control](/refguide8/version-control/)
* [Share the Development Database](/howto8/collaboration-requirements-management/sharing-the-development-database/)
