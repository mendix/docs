---
title: "Team Server"
url: /refguide7/team-server/
category: "Version Control"
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Written on top of Subversion and delivered as a plugin to the Developer Portal, the Mendix Team Server is designed to make the life of a Mendix developer easier. The Mendix Modeler is tightly integrated with the Team Server, and actions like creating a new app (including a versioned model repository), updating an app, committing changes, and merging model versions are all available from within the Mendix Modeler as a single-click actions.

You can manage Team Server access from the Developer Portal, which allows Mendix to provide you with a efficient ways to combine requirements, implementation, and feedback. When you commit your app model changes to the Team Server from within the Modeler, you can select the user stories (reflecting the requirements) that you have been working on. The Team Server will automatically create links between these user stories and the model changes you made, providing you with a way to navigate from commits to the associated requirements. Furthermore, with these links, Mendix creates a link from a user story to a changeset, which can include a link to a form. While feedback also refers to a form, Mendix can create links between feedback, forms, changesets, and user stories.

The Team Server also connects the capture-and-develop phase of the Agile application lifecycle. When you start working on the next version of your application, you just open the Modeler to see the user stories planned for the current sprint and start working on them. If a user story is based on user feedback, you can directly jump to the form mentioned in the metadata of the feedback and start implementing the requested change. 

## 2 Read More

* [Team Server FAQ](/refguide7/team-server-faq/)
