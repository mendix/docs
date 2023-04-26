---
title: "Team Server FAQ"
url: /refguide7/team-server-faq/
---


## General Questions

### How much does the Team Server cost?

The Team Server (public version) is free of charge for Mendix partners. We may offer a Premium version with additional features in the future.

### How much storage space is provided with the Team Server?

Storage space is unlimited for projects connected to a commercial license. 1 GB free storage is provided for your company account for projects not (yet) connected to a commercial license.

### How do I access the Team Server?

The Team Server is delivered as a plugin to the Developer Portal. Start using the Team Server in your Developer Portal project by activating the plugin or by creating a new Team Server project in the Mendix Desktop Modeler.

### What access controls come standard with the Team Server?

The Team Server gives you all the controls you need to manage who has access. Just toggle access on and off for each Developer Portal project member. Once activated, they can use their MxID to access the Team Server from within the Mendix Desktop Modeler.

### How secure is the Team Server?

Mendix is extremely serious about security. The Mendix cloud environment adheres to all of our existing security principles including access via SSL, and those expressed in the Mendix Information and Security Policy.

### My data is valuable and confidential – what happens to it?

We adhere to strict security standards and regard you to be the sole owner of your data. Only Mendix Cloud Infrastructure Engineers can access data and will only do so for trouble shooting. Your data is backed up for one year, and the backups are retained for one year after project deletion. You can get a backup of your data at any time by using default Subversion tools, or, if your project was deleted, by filing a Support ticket.

### How do I know the Team Server will be consistently available?

The team server runs in the trusted Mendix cloud environment and on a trusted infrastructure provider. Availability follows the same guidelines as all Mendix products and we always have daily backups of all data.

## Usage questions

### How do I merge changes from one development line to another?

The modeler automates most of this process; you can simply merge development lines by selecting model revisions on the team server. The Mendix Desktop Modeler will do the merging and will keep track of consistency. [Read more](/refguide7/version-control/)

### How do I resolve a conflict when two changes cannot be combined?

Resolving a conflict can be done in by using the 'Use mine' and 'Use theirs' button in the version control dock. [Read more](/refguide7/using-version-control-in-the-dm/)

### How can I access the history of my project?

The history of the project is a list of all revisions that have been committed in reverse chronological order. The history form quickly shows you revision number, date, time, author and message of each revision; it can be accessed from within the Mendix Desktop Modeler as well as the Developer Portal. [Read more](/refguide7/using-version-control-in-the-dm/)
