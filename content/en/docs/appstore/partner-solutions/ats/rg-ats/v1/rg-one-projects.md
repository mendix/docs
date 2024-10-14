---
title: "Projects"
url: /appstore/partner-solutions/ats/rg-one-projects/
---

## Introduction

Creating new test cases – especially with recording – is a simple activity, so you can quickly end up with many of them. Moreover, when you test multiple applications or even have different teams, you do not want all data in one place, but you want to separate, structure, and protect the data.

As of version 1.5 ATS supports projects and libraries as a layer on top of all data. All data – may it be test cases, test suites or actions – is enclosed in a project. This provides clear separation between data of different applications. Every user can create a new project and as its owner manage other user’s access to it.

## Action Libraries

An action library is a special type of project which can only contain actions. These actions can be shared with projects without the need to duplicate. Every project can include one or more action libraries and gets read access to all their actions. Thus, you can use them to create test cases in these projects. Your actions can be reused, but are still maintainable in a single place and are protected against unintentional modifications.

## Creation and Setup

Projects and action libraries can be created by users and administrators. A user clicks **Add Project** on the application starting screen. Administrators create new projects/libraries from the project overview page they see after login. Users are automatically added as project administrators when they create a new project/library.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-projects/21168197.png" class="no-border" >}}

**Project type**

Determines whether you create a project or an action library. 

{{% alert color="info" %}}
The type cannot be changed after creation.
{{% /alert %}}

**Name**

The name of the project/library.

**Mendix Project ID**

The project ID of the project that you want to get your stories from.

**Mendix API Key**

The API key that you created in your Mendix Portal project for ATS.

**Project Users**

The users that have access to your project and their role within. '---' means no access. The difference between the *Test Designer* and *Project Administrator* role is that the latter can change all settings on the setup screen.

**Included Action Libraries**

Check action libraries here to make their actions available to be used within your project.

## Switching Between Projects

Since data is separated into projects, you always work inside a project. You cannot work in multiple projects at the same time. However, you can switch between all your projects at any time. To switch between projects you can use the project selector which you find above the navigation menu on the left.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-projects/21168198.png" alt="The project selector dropdown" class="no-border" >}}

## Project Dashboard

The **Project Dashboard** is the first page you see when you open a project.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-projects/dashboard.png" alt="The project dashboard" class="no-border" >}}

There are three sections on the dashboard. The upper-left section (1) shows you the number of all test cases and their results. The lower-left section (2) shows a condensed view of the test results from the last seven days. The right section (3) shows you a detailed view of all the test cases and test suites.

## Mendix Portal integration

Projects in ATS can be connected to Mendix Portal projects. If this is done, ATS will fetch all Sprints and user stories from the project. This allows you to connect your test cases to user stories.
