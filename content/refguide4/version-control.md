---
title: "Version Control"
category: "Team Server"
---
Version 3.0 of the Mendix Business Modeler contains a major new feature called Version Control. This feature falls under the umbrella of Application Lifecycle Management. It takes the two aspects of collaboration and revision management to a whole new level and is significantly more powerful than what comes before it. The new version control feature entails a new way of working and these pages are meant to guide you on your way.

Before we look at this new feature, let us first look at how these aspects are dealt with in version 2.x of our technology so that you get a feel for the context and for the problems the new feature solves.

## In version 2.x

In version 2.5 of the Mendix platform collaboration was handled through working on a centralized database. Everyone on the team connects to a PostgreSQL or SqlServer database and works directly on this one copy of the project. There is a locking mechanism to prevent two people from updating the same document at the same time.

An attractive feature is that there is just one copy of the model and that brings with it a certain simplicity. The problem with this approach, however, is that there is just one copy of the model. Every time someone saves a document those changes are stored in the central database. The changes may not form a consistent whole yet because you still have to update some other documents before your new feature is done. If another person of the team opens or refreshes the project at this time he or she will get those changes and all the errors that come with it. There is currently no way to bundle a consistent set of changes that relate to a new feature and 'save' them to the central repository at once. This is especially problematic if you are working on a feature that takes a lot of time to implement.

Other problems with this approach are performance and reliability. Working on a remote database is slower than on a local file and if the internet connection fails during a database operation there is sometimes no way to tell in what state the database is.

Support for dealing with different revisions of your project in versions 2.x is lacking. On a multi-developer project the model itself is on a database server while the resources, such as widgets and Java actions, are in your file system. Often Subversion is used to store the resources which makes it possible to track changes and revert them. The model, being on the database server, lives a life of its own. With discipline, you can make frequent backups (.mpr file) of the database and upload that along with the resources, but this method is not without its problems. The model is a monolithic unit in the eyes of Subversion and changes cannot be inspected or merged from one place to another.

In practice all this means this many reasonable requests can not be met: show me the state of the project last Friday before we started implementing this big new feature; give me the version that is currently online so that I can fix this reported bug; apply the bug fix from the deployed version also to the new version we are working on now; what did person X change last week in this form?

In short, it is time for a new way of collaboration and revision management.

## In version 3.0

In the version 3.0 there is a central repository that contains both the model and the resources. Each person working on the project has a local copy of both model and resources. There are explicit actions to commit local changes to the repository and to retrieve changes by others from the repository. We build on top of Subversion that supports this style of working.

We chose Subversion because of its popularity, maturity and solid Windows support. Building on top of Subversion means that we inherit its reliable protocols for sending and receiving changes. Subversion has a lot of operations that allow us to support advanced features like branching and merging. The Modeler simplifies Subversion commands by providing a layer over them. All common operations can be executed right from the Modeler.

### Features

Let us look at a list of features of this this solution and see how it not only tackles the inadequacies of the current situation but offers a lot more power as well:
Scalable - People work independently on local copies and not on one model. This means that more people can work on the same project without constant interference with each other.

*   _Reliable_ - Subversion handles the sending and retrieving of changes and does a good job of handling unreliable connections.
*   _Consistent_ - Model and resources are both stored in one repository and are always in sync.
*   _Fast_ - Since everyone is working on a local copy many operations no longer depend on an internet connection and are consequently much faster.
*   _Work offline_ - Another welcome consequence of working on local copies is that you can now work without an internet connection.
*   _Simple_ - By providing a interface layer the Modeler simplifies Subversion commands. Often Subversion was already used for resources and now the Modeler takes care of those as well. It automatically ignores, adds, renames and deletes the right files.
*   _Powerful_ - Subversion supports lots of operations out of the box that can handle all advanced scenarios like independent lines of development, porting a fix from one line to another, and reverting changes.

To make all this work the Modeler needed a new file format. Apart from being a necessary change it also brings performance improvements. Memory consumption of both the Modeler and Runtime when opening large projects is cut in half. Also, when deploying a project the runtime reads the model up to five times faster.

### Combining and conflicts

Subversion takes care of a lot of things automatically. What it cannot do is combine changes to the model (.mpr), because that file is simply a big, binary file. The Modeler takes care of combining changes to the model. Whenever you retrieve changes from the repository they are combined with any local changes you have. A lot of the time the changes can be combined without problems. One person creates a new form, the other updates an existing form. Or one person deletes a document and the other changes three other documents. Those changes can easily be combined. Also, the Modeler is smart enough to recognize when a document has been moved somewhere else and has no problem combining someone else's changes into that moved document.

Combining even happens inside documents. You add a tab page to a large form and if another person does the same, you end up with a form with two extra tab pages. The same holds for two people adding different attributes to an entity (or to two different entities). Or someone changing the properties of a microflow action and another rewriting another part of the microflow. In general, the algorithm that combines changes can do a much better job than traditional text-based algorithms because the structure of the model is known.

However, changes that are too close to each other can cause conflicts. If two people both change properties of the same data view, these changes cannot be combined. In this case the form will be marked as conflicted and you have to edit the data view yourself to get the desired end result. Conflicts also happen at the level of the project structure. If you delete a form and another person makes changes to that form, the form will be restored and marked as conflicted. You can then decide whether those changes are still relevant or whether the document should be deleted anyway.

After resolving all conflicts, you can upload your changes that are now combined with those from the repository. Conflicts can be minimized by communication among team members and by uploading and downloading changes often.

### A New Way Of Working

Version Control changes the way you collaborate on a project. Instead of having one model where everyone directly saves all their changes, you work on your own copy of the project and choose an appropriate moment for uploading your changes to the repository and downloading changes from others.

Uploading your changes is called 'committing'. A commit is accompanied by a user-supplied message describing the changes so that you can quickly see what has happened when reviewing commits. Retrieving changes by others is called 'updating' and, like commit, is an explicit action. It can be compared to 'refresh' in the old way of working. However, it does not happen automatically when you open a project.

The fact that commit and update are explicit actions helps you focus on your work without bumping into other people's work all the time. However, it is advisable to commit and update often. It is good to have commits that are small, understandable pieces of work. For example, fixing one bug in the system or implementing one feature. By committing and updating often you also reduce the chance of conflicts because you are confronted with changes by others more quickly.

The new version control feature does away with locking. Anyone can edit any document they like and renaming an item can no longer fail because of documents being locked anymore. The Modeler takes care of combining all changes. Only if changes are too close to each other conflicts can arise. This is the drawback of not having locking. We think the advantages of working independently outweigh this one disadvantage.

Since each revision is stored on the Team Server, you always have not one but dozens of backups of your project. You can always revert changes that you do not like or look at the project as it was a week ago. Together with the reliability and consistency improvements, you can develop with more confidence and we think that this is the best thing about version control.

## Further reading

*   [Concepts](version-control-concepts) - Learn about the terminology of version control.
*   [Scenarios](version-control-scenarios) - See how version control is used in practice in different scenarios.
