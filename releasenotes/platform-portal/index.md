---
title: "Platform Portal"
space: "Release Notes"
---

## <a name='release-2017-03-20'></a><a href='#release-2017-03-20'>March 20th, 2017</a>

* The Deploy / Operate sections in the Platform Portal were broken on Internet Explorer 11 due to widget incompatability, introduced in the previous release. This was already hot-patched in production on March 16th.

## <a name='release-2017-03-13'></a><a href='#release-2017-03-13'>March 13th, 2017</a>

### Bug fixes
* The highlighted menu state was fixed, the wrong items were highlighted in some instances
* AppStore links clicked from within the Deploy/Operate sections now open in the same tab
* The **Show Profile** link was broken in some parts of the platform
* Clicking **Operate -> Backups** resulted in errors for a Free App
* Various fixes for internal beta program

## <a name='release-2017-03-10'></a><a href='#release-2017-03-10'>March 10th, 2017</a>

* We introduced a new setting in **Node Security**, you can now configure **Monitoring Permissions** separately from **Transport Permissions**. Immediately after this change, we granted all users that had **Transport Permissions** on an environment the **Monitoring Permissions** there as well. From now on, a **Technical Contact** can configure these settings for everyone in the team separately. While we introduced this setting, we revisited the layout of the **Node Security** screen, you now have a simpler interface to change the permissions en each environment.

## <a name='release-2017-03-09'></a><a href='#release-2017-03-09'>March 9th, 2017</a>

### Improvements
* We improved the performance of sprint completion. This should now take significantly less time.
* The App Store now shares the same navigation top bar, and it will therefore now be opened in the same tab.
* We made various small styling improvements.

### Fixes
* We fixed the issue in which completing a sprint from the **Stories** page wouldn't properly update the UI.
* The **getAccounts** call in the **UserManagementAPI** will now sort results consistently on **EmailAddress** when using limit/offset.

## <a name='release-2017-02-21'></a><a href='#release-2017-02-21'>February 21st, 2017</a>

### New Features
* We added the **View App** and **Edit App** buttons. The **View App** button brings you to the deployment URL of your Free App, or, if you have test, acceptance, and production environments, it lets you choose between these environments using a drop-down menu. The **Edit App** button will launch the Desktop Modeler if you have it installed; if you are part of the partner group testing the Web Modeler, then you'll have the choice to directly open your app in the WM.
* We redesigned the interface. The new look sports light colors and a responsive layout. Menu items pertaining to your apps have been moved from the top to the left-hand side. Users with permissions to access restricted parts of the Mendix App Platform can navigate there using the **Profile** menu, which opens when you click your avatar in the top-right corner of the screen.
* We improved the breadcrumbs. A header on top of the Mendix App Platform will show you where you are in the navigation structure.
* The **Feedback** widget can now be used when opened on small screen sizes (for example, on a  smartphone).
* The **Guidance** sidebar has been replaced by the **Intercom** widget.

### Bug fixes
* We fixed the password reset form giving an error if you tried to submit it using the **Enter** key (even though you would receive a link).
* We fixed the **Team** overview flickering every few seconds that occurred after you create a new app.
* We fixed the screen jumping at every key-press that occurred while you were writing a large post on the Buzz.

## <a name='release-2017-02-20'></a><a href='#release-2017-02-20'>February 20th, 2017</a>

* We removed static information from the log lines in Mendix Cloud v3. Every line before contained `tr10000` and `127.0.0.1`. We removed these fields as they were useless.

## <a name='release-2016-10-05'></a><a href='#release-2016-10-05'>October 5th, 2016</a>

* On Webkit-based browsers such as Safari a "connection error" dialog would sometimes pop up while loading the Dev Portal, after which the page would continue to load normally. We now prevent this dialog from appearing so that people can open the Dev Portal uninterrupted.

## <a name='release-2016-05-12'></a><a href='#release-2016-05-12'>May 12th, 2016</a>

* The colors and styling of the Development Portal have been brought in line with the rest of the platform.

## <a name='release-2016-03-24'></a><a href='#release-2016-03-24'>March 4th, 2016</a>

* Fixed the Invite API - it is again possible to invite other users to your app using a custom invitation flow.

## <a name='release-2016-02-18'></a><a href='#release-2016-02-18'>February 8th, 2016</a>

* Advanced Runtime Settings can now be configured for the paid tiers in Mendix Cloud applications. You can find a list of all custom settings here: [Custom Settings](/refguide6/custom-settings)
* The advanced settings LogMinDurationQuery and ClientQueryTimeout have been enabled by default. LogMinDurationQuery will print all database queries that take longer than 10 seconds to the application log and ClientQueryTimeout will cancel database select queries triggered from the Client that take longer than 15 minutes, which is when the http timeout has kicked in so the results can not be delivered and the query can safely be killed. A restart of the application is required for these changes to take effect.

## <a name='release-2016-01-13'></a><a href='#release-2016-01-13'>January 13th, 2016</a>

* The Technical Contact of an application can now assign other people as the Technical Contact using the Node Security tab in the Project Settings on [https://home.mendix.com/](https://home.mendix.com/).

## <a name='release-2015-12-01'></a><a href='#release-2015-12-01'>December 1st, 2015</a>

### Bug fixes
* The Mendix Cloud switched from the Jetty blocking I/O connector to a selector based non-blocking I/O connector for all applications. Due to a bug in the blocking I/O connector HTTP requests could be fired multiple times for long-running (> 2 minutes) requests, which would result in strange results in the Mendix Debugger (ticket 462699). If you want to apply this fix you can simply restart your application.
* Fixed bug that occurs when a which contains a large SVN directory is exposed into an Online Working Copy using Mendix Platform SDK.

## <a name='release-2015-11-30'></a><a href='#release-2015-11-30'>November 30th, 2015</a>

### Improvements
* The story details page now provides more context, by showing comments, tasks and feedback when applicable.
* It is now easier to swap the priority of stories, using the arrow buttons at the left of each story and task.

## <a name='release-2015-10-16'></a><a href='#release-2015-10-16'>October 16th, 2015</a>

### Improvements
* Document links in comments will now open in a new tab, preventing loss of context. 

### Bug fixes
* Fixed issue which prevented downloading of feedback item attachments.
* Fixed issue which hid the tooltip explaining password requirements in the password reset screen.
* Fixed issue causing some messages on the Buzz to be rendered twice when clicking 'Show more'.

## <a name='release-2015-09-17'></a><a href='#release-2015-09-17'>September 17th, 2015</a>

### Bug fixes
* Fixed issue which caused collapsed/expanded state of sprints and stories to be forgotten when switching between the stories overview of a project and a story's details page.

## <a name='release-2015-09-03'></a><a href='#release-2015-09-03'>September 3rd, 2015</a>

### New features
* All expanded items in the backlog can be collapsed at once, by using either the new 'Collapse All' button in the toolbar or the keyboard shortcut <ctrl+space>.
* New stories can be pre-filled with a default set of tasks, which can be defined as a Story Template on the Capture page (click More>Manage story templates).

### Improvements
* The signup process takes less time to complete
* The 'details' link of each story in the backlog is now always visible, making it easier to access to the story details page.

### Bug fix
* Removed the unnecessary confirmation popup at the end of the sign up process.

## <a name='release-2015-08-06'></a><a href='#release-2015-08-06'>August 6th, 2015</a>

### New feature
* We have rolled out our new project creation flow to all users. When creating a new project from the Portal, you are presented with a set of themes and sample apps that you can use as a basis for your new application.

## <a name='release-2015-07-31'></a><a href='#release-2015-07-31'>July 31st, 2015</a>

### Improvement
* Improved project creation performance. Users will now quickly navigate to the project homepage, with the project's Team Server repository being set up in the background.

### Bug fix
* Added limits to search input fields in a number of pages.

## <a name='release-2015-07-24'></a><a href='#release-2015-07-24'>July 24th, 2015</a>

### New functionality
* The status of stories and tasks can now be changed from the story details page

### Bug fix
* Clicking on feedback items on your profile brings you to the proper details page

## <a name='release-2015-07-16'></a><a href='#release-2015-07-16'>July 16th, 2015</a>

* Various small fixes

## <a name='release-2015-07-03'></a><a href='#release-2015-07-03'>July 3rd, 2015</a>

* Improved project creation performance. Creating a new project will now take several seconds less than before.

## <a name='release-2015-06-16'></a><a href='#release-2015-06-16'>June 16th, 2015</a>

* Fixed an issue where in certain cases the input element was not focusable in Internet Explorer, after submitting feedback with the feedback widget  (Ticket #278349)

## <a name='release-2015-06-02'></a><a href='#release-2015-06-02'>June 2nd, 2015</a>

* Various small improvements

## <a name='release-2015-05-29'></a><a href='#release-2015-05-29'>May 29th, 2015</a>

### Fixes
* Some users experienced stability issues when filtering projects on the Buzz. These issues has now been resolved.
* Several small fixes related to the UI and stability of Sprintr

## <a name='release-2015-04-21'></a><a href='#release-2015-04-21'>April 21st, 2015</a>

* Fixed [home.mendix.com](https://home.mendix.com/) stability issue.

## <a name='release-2015-04-16'></a><a href='#release-2015-04-16'>April 16th, 2015</a>

### Improvement
* Added guidance to the Develop page

### Fixes
* Images on the wall can also be opened on Mobile interfaces
* MyProjects overview is once again sorted based on a logic (Tickets #212931, #140834)
* Various performance fixes
* Various styling fixes

## <a name='release-2015-03-31'></a><a href='#release-2015-03-31'>March 31st, 2015</a>

### New features
* The blue toolbar now contains a button for quickly creating new apps, and a shortcut that leads to the Mendix Developer Portal ([https://developers.mendix.com/](https://developers.mendix.com/)).
* Guidance balloons guide new users through a few main features of the Mendix platform.
* The project dashboard has been extended with Team and Development information.
    * The Team Box shows all team members within a project, and allows you to easily invite new team members.
    * The Development Box shows information about the latest main line commit, and provides a shortcut to quickly open the app in the Mendix Business Modeler.

### Improvements
* Several UI improvements, including a new navigation sidebar and a revised Projects page.
* Story / task detail pages contain buttons to quickly navigate back and forth between all stories / tasks within the same context.

## <a name='release-2015-02-26'></a><a href='#release-2015-02-26'>February 26th, 2015</a>

### Improvements
* Searching for a term on the Capture page no longer causes spaces to be added within the results list.
* Various small UX fixes.

## <a name='release-2015-02-19'></a><a href='#release-2015-02-19'>February 19th, 2015</a>

* Various small improvements

## <a name='release-2015-02-05'></a><a href='#release-2015-02-05'>February 5th, 2015</a>

* Various small user interface improvements

## <a name='release-2015-01-22'></a><a href='#release-2015-01-22'>January 22nd, 2015</a>

### Improvement
* Numerous small user interface improvements

### New feature
* For deployment, a new graph was introduced: JVM Process memory usage (read more about this here: [https://tech.mendix.com/linux/2015/01/14/whats-in-my-jvm-memory/](https://tech.mendix.com/linux/2015/01/14/whats-in-my-jvm-memory/))

## <a name='release-2014-12-30'></a><a href='#release-2014-12-30'>December 30th, 2014</a>

### Improvements
* The loading time of the Deploy tab of a project has been decreased dramatically.
* The "Create package from teamserver" button is now always visible. Previously it was only visible for projects that are on Mendix 5, but as most users are on Mendix 5 we dropped this restriction. Users that are not on Mendix 5 or do not have data in their Teamserver repository will be shown a pop up message stating that the feature is only available after an upgrade.

## <a name='release-2014-12-23'></a><a href='#release-2014-12-23'>December 23rd, 2014</a>

### New features
* It's now possible to move a user story to a different project from the Story details page. 
* Trends now include system graphs like disk usage and memory usage; It also includes a new graph with the number of connections to the database.
* Sandbox users may use publish to mobile

### Improvements

#### Capture
* A progress bar will now be shown while a comment is being posted on the Buzz.
* It's now possible to search for a document based on its labels.

#### Develop
* Restructured the Develop tab. Each commit now offers an App Store link to the Business Modeler version with which it was committed. Added a button to open the latest Main line revision in the modeler.
* The Mendix version used is now tracked for each revision individually, rather than per branch. (Feedback 120751)
* App Store links to the Business Modeler from the Develop tab now open in a new browser tab.
* The details screen of a revision in the Develop tab will now show the exact time of the commit to the Team Server. (Feedback 120300)

#### Feedback
* Responding to a feedback item as its submitter will no longer mark the item as 'Handled' (Feedback 108318)
* Added button to manually mark a feedback item as 'Handled', or to mark it as 'Open' again in the feedback details screen. (Feedback 77164)
* Setting a feedback item to 'Under review' will no longer mark it as 'Handled'

#### Invitations
* App and Project invites will now expire after 14 days. (Feedback 90894)
* App and Project invites can now be retracted by the inviter. You can find this functionality in the Pending Invites tab of your Profile. (Feedback 90894)
* You will now see a progress bar while your App and project invites are being sent. (Feedback 79146)
* It is now possible to initiate an invite to the Mendix platform using the Share button on the blue Mendix toolbar.

### Fixes

#### General
* Significantly improved robustness of navigating through the Platform Portal. (Feedback 68886, 78020, 78479, 78550, 78638, 94395)
* Populated lists will no longer erroneously show a message at the bottom stating that they are empty. (Feedback 89679, 89380, 90217, 90532)

#### Profile
* The tabs in the Profile page will now render correctly irrespective of your browser's width. (Feedback  117232)

#### Capture
* If you cancel uploading a file, the Platform will no longer attempt to upload the file anyways. (Feedback 112661)
* Fixed an issue where the first item in the Documents list could not be deselected. (Feedback 115653)

#### Develop
* The 'Open in modeler' functionality in the Develop tab now works correctly again. (Feedback 106471, 122538)

#### Feedback
* Fixed issue which prevented users from viewing images in comments posted by other users to a feedback item. (Feedback 117855, 106590, 82013)
* When opening the details section containing an item's metadata in the Feedback details screen, this will no longer erase a partially typed comment. (Feedback 62772, 107863)
* Fixed issue which caused the page from which feedback was submitted to not be properly registered for Mendix 5.10 and newer. (Ticket 204384)
* Removed erroneously displayed resizing tooltip in the feedback widget's Description field. (Feedback 110995)
* Fixed issue where paging to the last page in the Feedback overview would result in an empty page. (Feedback 69332)

#### Invitations
* Fixed issue which would sometimes make it impossible to select a role for the invitee during the project or App invitation wizard. (Feedback 113294, 114629)
* Email addresses will no longer erroneously be considered invalid if they contain an apostrophe. (Feedback 89526)

#### Company Management
* Fixed issue where creating a security group right after deleting another security group occasionally resulted in an error (Feedback 105421)
* Clicking on a line in the Company Admins overview of the Company Admin will now only open this user's profile if you click directly on his or her name. (Feedback 57009)

#### APIs
* The WebService version of the Stories API now supports empty values for the Points attribute of Story. You can download the new WSDL from the [API Documentation](/apidocs-mxsdk/apidocs/index). (Ticket 102035, 204529, Feedback 88517, 94287)

### Known issues
* Due to changes in AppService definitions in recent Mendix versions, developers using Mendix 5.10 or newer are recommended to use the WebService versions of the Stories and Feedback APIs. These can be found in the [API Documentation](/apidocs-mxsdk/apidocs/index).

### Removed features
* The timeline in the Planning section has been removed.
* Chat functionality has been discontinued in the Platform Portal. As we have to prioritize features carefully in order to deliver the best software we can, we've come to realize that Mendix users don't use the chat functionality very often. In order to focus our time on more heavily used existing or exciting new features, we've decided to discontinue this functionality.
