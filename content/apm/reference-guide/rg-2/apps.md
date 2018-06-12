---
title: "Apps"
parent: "reference-guide-2"
---

## 1 Apps Overview

The homepage of APM displays the list of licensed applications from the Mendix Developer Portal in alphabetical order.

![](attachments/ProjectsDashboard.png)

It is possible to search on an app's name or select one from the overview directly.

Selecting an app in the overview displays the overview of the [environments](environments) for that app.

In order to find a specific application faster, it is possible to mark it as a favorite by clicking the star icon on the application tile. Favorite applications are shown first in the overview.

In case an application is not visible in this overview, click **Can’t find your App?** in the upper-right corner.

## 2 Tour Guides and Videos

APM has several tour guides and videos to help navigate through APM to perform certain tasks. These can be accessed by clicking the documentation icon next to your profile image and selecting the **Tour** option.

![](attachments/Documentation.png)

{{% alert type="info" %}}
By default, APM displays the tour guides and videos upon login for new users.
{{% /alert %}}

![](attachments/Tour.png)

When starting a tour, a tool tip will appear throughout the APM application with instructions to follow.

![](attachments/TourStep.png)

## 3 Profile Menu and User Settings

In the profile menu, you can see links to your Mendix Profile and also the user settings for APM.

![](attachments/profile_menu.png)

In the user settings, you can configure the home page to be one of the following:

* All your apps (if both drop-down menus are empty)
* A specific app on the Environments overview if an app is selected and the environments drop-down menu is empty
* A specific environment of a specific app

![](attachments/user_settings.png)

These are the settings on the **User settings** dialog box":

* **Guide on login** determines if on login, the tour guide dialog box is opened (the check box at the bottom of that dialog box unchecks this setting)
* **Paging size** determines the chunk size in statistics and performance grids
* **Statistics period** determines if the statistics by default open with hourly or daily data
* **Time zone** determines your time zone for the proper representation of date/time information

Clicking **Delete account** deletes your account, including the Modeler environments belonging to your account. After the deletion, you will navigate to the Mendix Developer Portal. Apps are not deleted at this time.

## 4 Cleanups

The APM manager runs automatic cleanups. These remove monitoring data automatically after a certain period of time. APM manager uses the following periods of time:

* Short – 4 hours (for temporary data like CPU on the dashboard)
* Medium – 1 week (for working data like performance recordings and logs)
* Long – 1 year (for historic data like statistics)

Data can be preserved using the push-pin button. This prevents automatic cleanup.

Environments are automatically deleted if they are not used for a year.

