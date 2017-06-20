---
title: "How to manage Developer Portal deeplinks"
space: "Developer Portal"
category: "How-To's"
description: "This document describes how to use shortcuts in the Developer Portal"
tags: ["Developer Portal","deeplink"]
---

## 1 Introduction

In the Developer Portal you can use deeplinks as a shortcut to go directly to the desired destination. 

**This how-to will teach you how to do the following:**

* Find the AppID, storyID and the feedbackItemNr
* Create deeplinks for your App, story or feedback-item

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You must be a member of the App team
* You must have sufficient permissions

## 3 AppID, storyID, feedbackItemNr

To create a deeplink first you must know the AppID, storyID or the feedbackItemNr, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Select the App you want to create a deeplink for.

**AppID**  
3. Click **General** under the **Settings** category.
   
**StoryID** 
3. Click **Stories** under the **Collaborate** category. The ID is next to **Details** of the story item.

**FeedbackItemNr**
3. Click **Feedback** under the **Collaborate** category. The item number is next to the title of the feedback item.

## 4 Developer Portal Deeplinks

If you want to provide links directly to a specific page on the Developer Portal, follow these steps:

1. Go to your browser.
2. Paste the link in the browser's address bar.
3. Paste the AppID, storyID or the feedbackItemNr after the slash.
 
The following deeplinks can be used:
 
 Specific app: https://sprintr.home.mendix.com/link/project/<appID>
 Stories overview for app: https://sprintr.home.mendix.com/link/capture/<appID>
 Specific story ID: https://sprintr.home.mendix.com/link/story/<storyID>
 Feedback for app: https://sprintr.home.mendix.com/link/feedback/<appID>
 Specific feedback item: https://sprintr.home.mendix.com/link/showfeedback/<feedbackItemNr>
 Environments for app: https://cloud.home.mendix.com/link/deploy/<appID>
 Metrics for app: https://cloud.home.mendix.com/link/metrics/<appID>
 Alerts for app: https://cloud.home.mendix.com/link/monitor/<appID>
 Logs for app: https://cloud.home.mendix.com/link/logs/<appID>

## 4 Related Content

*   [Collaborate](/developerportal/collaborate)
*   [General](/developerportal/settings/general-settings)
*   [Settings](/developerportal/settings)
