---
title: "Manage Developer Portal Deep Links"
category: "How-To's"
menu_order: 50
description: "This document describes how to use shortcuts and deep links in the Developer Portal."
tags: ["Developer Portal","deeplink"]
---

## 1 Introduction

In the Developer Portal, you can use deep links as a shortcut to go directly to the desired destination. 

**This how-to will teach you how to do the following:**

* Find the AppID, storyID, and feedbackItemNr
* Create deep links for your app, story, or feedback item

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Be a member of the app team
* Have sufficient permissions (for details, see [Security - Node Permissions](../settings/node-permissions))

## 3 AppID, storyID, feedbackItemNr

To find out the AppID, storyID or the feedbackItemNr (which you need to create a deep link), follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Select the app for which you want to create the deep link.
3. For the **AppID**, click **General** under the **Settings** category.
4. For the **StoryID**, click **Stories** under the **Collaborate** category. The ID is next to **Details** of the story item.
5. For the **FeedbackItemNr**, click **Feedback** under the **Collaborate** category. The item number is next to the title of the feedback item.

## 4 Developer Portal Deep Links

If you want to provide links directly to a specific page on the Developer Portal, follow these steps:

1. Go to your browser.
2. Paste the link in the browser's address bar.
3. Paste the AppID, storyID or the feedbackItemNr after the final slash.
 
The following deep links can be used:
 
* Specific app: `https://sprintr.home.mendix.com/link/project/<appID>`
* Stories overview for app: `https://sprintr.home.mendix.com/link/capture/<appID>`
* Specific story ID: `https://sprintr.home.mendix.com/link/story/<storyID>`
* Feedback for app: `https://sprintr.home.mendix.com/link/feedback/<appID>`
* Specific feedback item: `https://sprintr.home.mendix.com/link/showfeedback/<feedbackItemNr>`
* Environments for app: `https://cloud.home.mendix.com/link/deploy/<appID>`
* Metrics for app: `https://cloud.home.mendix.com/link/metrics/<appID>`
* Alerts for app: `https://cloud.home.mendix.com/link/monitor/<appID>`
* Logs for app: `https://cloud.home.mendix.com/link/logs/<appID>`

## 4 Related Content

* [Collaborate](/developerportal/collaborate)
* [Developer Portal](/developerportal/general)
* [Mendix Cloud Status](/developerportal/deploy/mendix-cloud-status)
* [Operate](/developerportal/operate)
* [Settings](/developerportal/settings)
