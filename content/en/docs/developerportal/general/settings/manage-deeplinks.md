---
title: "Manage Deep Links"
url: /developerportal/general/manage-deeplinks/
weight: 2
description: "Describes how to implement deep links to Mendix Portal pages."
aliases:
    - /developerportal/settings/manage-deeplinks
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

To go directly to the desired element of your app in [Apps](https://sprintr.home.mendix.com/), you can use deep links.

This how-to teaches you how to find the app ID and environment ID, and create deep links.

## 2 Getting the App ID and Environment ID

To get the app ID, do as follows:

1. In [Apps](https://sprintr.home.mendix.com/), open the app.
2. On the navigation pane, go to **Settings**. You can find the app ID on the **General** tab.

    {{< figure src="/attachments/developerportal/general/settings/manage-deeplinks/app-id.png" width="500px" alt="App ID on the Settings page" class="no-border" >}}

To get the environment ID, do as follows:

1. In Apps, open the app.

2. On the navigation pane, go to **Environments**, and then click **Details** ({{% icon name="notes-paper-edit" %}}) by the environment you want to view. You can find the environment ID on the **General** tab.

## 3 Creating a Deep Link in Apps

If you want to provide links directly to a specific element in your app in [Apps](https://sprintr.home.mendix.com/), use the following links, with the specific app ID or environment ID added, as instructed:

* Overview of your apps: `https://sprintr.home.mendix.com/link/myapps`

* Specific app: `https://sprintr.home.mendix.com/link/project/<appID>`

* App settings: `https://sprintr.home.mendix.com/link/settings/<appID>`

* App Buzz: `https://sprintr.home.mendix.com/link/buzz/<appID>`

* App team: `https://sprintr.home.mendix.com/link/team/<appID>`

* Feedback for app: `https://appinsights.mendix.com/link/feedback/<appID>`

    {{% alert color="info" %}}To get the link to a specific feedback item, [open the feedback item](/developerportal/app-insights/feedback/#feedback-details) in Feedback, and click the **Copy Link** icon ({{% icon name="hyperlink" %}}).{{% /alert %}}

* Sprint status of an app: `https://sprintr.home.mendix.com/link/sprint-status/<appID>`

* App specific API keys: `https://sprintr.home.mendix.com/link/apikeys/<appID>`

* App user management: `https://sprintr.home.mendix.com/link/appusermanagement/<appID>`

* Environments for app: `https://cloud.home.mendix.com/link/deploy/<appID>`

* Metrics for app: `https://cloud.home.mendix.com/link/metrics/<appID>`

* Alerts for app: `https://cloud.home.mendix.com/link/monitor/<appID>`

* Alerts for environment: `https://cloud.home.mendix.com/link/monitor/<appID>/<envID>`

* Logs for app: `https://cloud.home.mendix.com/link/logs/<appID>`

## 4 Read More

* [How to Manage General App Settings](/developerportal/collaborate/general-settings/)
