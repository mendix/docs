---
title: "Platform Portal 2014-12-23"
space: "Release Notes"
category: "Platform Portal"
---


***Date: December 23, 2014***

## New features

*   It's now possible to move a user story to a different project from the Story details page. 

*   Trends now include system graphs like disk usage and memory usage; It also includes a new graph with the number of connections to the database.

*   Sandbox users may use publish to mobile

## Improvements

### Capture

*   A progress bar will now be shown while a comment is being posted on the Buzz.

*   It's now possible to search for a document based on its labels.

### Develop

*   Restructured the Develop tab. Each commit now offers an App Store link to the Business Modeler version with which it was committed. Added a button to open the latest Main line revision in the modeler.
*   The Mendix version used is now tracked for each revision individually, rather than per branch. (Feedback 120751)
*   App Store links to the Business Modeler from the Develop tab now open in a new browser tab.
*   The details screen of a revision in the Develop tab will now show the exact time of the commit to the Team Server. (Feedback 120300)

### Feedback

*   Responding to a feedback item as its submitter will no longer mark the item as 'Handled' (Feedback 108318)
*   Added button to manually mark a feedback item as 'Handled', or to mark it as 'Open' again in the feedback details screen. (Feedback 77164)
*   Setting a feedback item to 'Under review' will no longer mark it as 'Handled'

### Invitations

*   App and Project invites will now expire after 14 days. (Feedback 90894)
*   App and Project invites can now be retracted by the inviter. You can find this functionality in the Pending Invites tab of your Profile. (Feedback 90894)
*   You will now see a progress bar while your App and project invites are being sent. (Feedback 79146)
*   It is now possible to initiate an invite to the Mendix platform using the Share button on the blue Mendix toolbar.

## Fixes

### General

*   Significantly improved robustness of navigating through the Platform Portal. (Feedback 68886, 78020, 78479, 78550, 78638, 94395)
*   Populated lists will no longer erroneously show a message at the bottom stating that they are empty. (Feedback 89679, 89380, 90217, 90532)

### Profile

*   The tabs in the Profile page will now render correctly irrespective of your browser's width. (Feedback  117232)

### Capture

*   If you cancel uploading a file, the Platform will no longer attempt to upload the file anyways. (Feedback 112661)
*   Fixed an issue where the first item in the Documents list could not be deselected. (Feedback 115653)

### Develop

*   The 'Open in modeler' functionality in the Develop tab now works correctly again. (Feedback 106471, 122538)

### Feedback

*   Fixed issue which prevented users from viewing images in comments posted by other users to a feedback item. (Feedback 117855, 106590, 82013)
*   When opening the details section containing an item's metadata in the Feedback details screen, this will no longer erase a partially typed comment. (Feedback 62772, 107863)
*   Fixed issue which caused the page from which feedback was submitted to not be properly registered for Mendix 5.10 and newer. (Ticket 204384)
*   Removed erroneously displayed resizing tooltip in the feedback widget's Description field. (Feedback 110995)
*   Fixed issue where paging to the last page in the Feedback overview would result in an empty page. (Feedback 69332)

### Invitations

*   Fixed issue which would sometimes make it impossible to select a role for the invitee during the project or App invitation wizard. (Feedback 113294, 114629)
*   Email addresses will no longer erroneously be considered invalid if they contain an apostrophe. (Feedback 89526)

### Company Management

*   Fixed issue where creating a security group right after deleting another security group occasionally resulted in an error (Feedback 105421)
*   Clicking on a line in the Company Admins overview of the Company Admin will now only open this user's profile if you click directly on his or her name. (Feedback 57009)

### APIs

*   The WebService version of the Stories API now supports empty values for the Points attribute of Story. You can download the new WSDL from [apidocs.mendix.com](http://apidocs.mendix.com). (Ticket 102035, 204529, Feedback 88517, 94287)

## Known issues

*   Due to changes in AppService definitions in recent Mendix versions, developers using Mendix 5.10 or newer are recommended to use the WebService versions of the Stories and Feedback APIs. These can be found at [apidocs.mendix.com](http://apidocs.mendix.com/).

## Removed features

*   The timeline in the Planning section has been removed.
*   Chat functionality has been discontinued in the Platform Portal. As we have to prioritize features carefully in order to deliver the best software we can, we've come to realize that Mendix users don't use the chat functionality very often. In order to focus our time on more heavily used existing or exciting new features, we've decided to discontinue this functionality.
