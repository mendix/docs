---
title: "Contribute to a GitHub Repo"
url: /community-tools/contribute-to-a-github-repository/
weight: 6
description: "Describes how to contribute to a Mendix GitHub Repository according to Mendix guidelines."
aliases:
    - /developerportal/community-tools/contribute-to-a-github-repository/
---

## Introduction

We like to work with our community, and we encourage you to create and contribute using pull requests!

This how-to teaches you how to do the following:

* Contribute to a Mendix GitHub repository according to Mendix guidelines

## Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a [GitHub account](https://github.com/join)
* Have a [Mendix account](https://home.mendix.com/)
* Fork a repository on GitHub (for details, see [Fork a Repo](https://help.github.com/articles/fork-a-repo/))

## Making Changes to an Existing Repository

To make changes to an existing repository, follow these guidelines:

* Create a new branch from where you want to base your work on your fork (this is usually the repository's **production** branch)
* To quickly create a branch based on **production**, use `git checkout -b fix/production/my_contribution production`
    * Avoid working directly on the **production** branch
* Make commits of logical units
* Check for unnecessary whitespace with `git diff --check` before committing
* Make sure you have added the necessary tests for your changes
* Run all the tests to assure nothing was accidentally broken

## Submitting Changes

To submit changes, follow these guidelines:

* Push your changes to the branch in your fork of the repository
* Submit a pull request to the appropriate repository in the Mendix organization (for more information, see [About Pull Requests](https://help.github.com/articles/using-pull-requests/))
* Mention the numbers of any issues that are fixed by the changes (for more information, see [Closing Issues Using Keywords](https://help.github.com/articles/closing-issues-via-commit-messages#closing-issues-with-pull-requests))
* After feedback has been given, Mendix expects a response within two weeks (after two weeks, we may close the pull request if it is not showing any activity)

## Read More

* [Epics](/developerportal/project-management/epics/)
