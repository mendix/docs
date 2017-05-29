---
title: "Team Server"
space: "Mendix 7 Reference Guide"
---

## Team Server

Written on top of Subversion and delivered as a plugin to sprintr, our Team Server is designed to make the life of a Mendix Business Engineer easier. The Business Modeler is tightly integrated with the Team Server and things like creating a new project (including a versioned model repository), updating, committing changes, merging model versions, etc. are all available from within the Business Modeler as a single click action.

The Team Server is delivered as a plugin of sprintr for a reason: it enables you to manage Team Server access from sprintr and it enables us to provide you with a revolutionary way to combine requirements, implementation, and feedback! When you commit application model changes to the Team Server from within the Business Modeler you can select the user stories (reflecting requirements) you have been working on. The Team Server will automatically create links between these user stories and the model changes you made, providing you with a way to navigate from commits to the associated requirements. Furthermore, with these links we create a link from a user story to a changeset, which can include a link to a form (if you changed a form in the changeset). While feedback also refers to a form, we can create links between feedback, forms, changesets, and user stories.

The Team Server also connects the capture and develop phase of the agile application lifecycle. When you start working on the next version of your application you just open the Mendix Business Modeler to see the user stories planned for the current sprint and start working on them. If a user story is based on user feedback, you can directly jump to the form mentioned in the metadata of the feedback and start implementing the requested change.

## Documents in This Category

* [Team Server FAQ](team-server-faq)
* [Version Control](version-control)
    * [Version Control Concepts](version-control-concepts)
    * [Version Control Scenarios](version-control-scenarios)
