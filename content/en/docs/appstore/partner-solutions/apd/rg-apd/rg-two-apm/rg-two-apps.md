---
title: "Apps"
url: /appstore/partner-solutions/apd/rg-two-apps/
---

## Apps Overview

The home page of APM displays the list of licensed applications from the Mendix Portal in alphabetical order.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-apps/ProjectsDashboard.png" class="no-border" >}}

It is possible to search on an app's name or select one from the overview directly.

Selecting an app in the overview displays the overview of the [environments](/appstore/partner-solutions/apd/rg-two-environments/) for that app.

In order to find a specific application faster, it is possible to mark it as a favorite by clicking **Favorite** ({{% icon name="star" %}})  on the application tile. Favorite applications are shown first in the overview.

In case an application is not visible in this overview, click **Can’t find your App?** in the upper-right corner.

## Tour Guides and Videos

APM has several tour guides and videos to help navigate through APM to perform certain tasks. These can be accessed by clicking the {{% icon name="question-circle" %}} icon next to your profile image and selecting the **Tour** option.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-apps/Documentation.png" class="no-border" >}}

{{% alert color="info" %}}
By default, APM displays the tour guides and videos upon login for new users.
{{% /alert %}}

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-apps/Tour.png" class="no-border" >}}

When starting a tour, a tool tip will appear throughout the APM application with instructions to follow.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-apps/TourStep.png" class="no-border" >}}

## Profile Menu and User Settings

In the profile menu, you can see links to your Mendix Profile and also the user settings for APM.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-apps/profile_menu.png" class="no-border" >}}

In the user settings, you can configure the home page to be one of the following:

* All your apps (if both drop-down menus are empty)
* A specific app on the Environments overview if an app is selected and the environments drop-down menu is empty
* A specific environment of a specific app

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-apps/user_settings.png" class="no-border" >}}

These are the settings on the **User settings** dialog box":

* **Guide on login** determines if on login, the tour guide dialog box is opened (the checkbox at the bottom of that dialog box unchecks this setting)
* **Paging size** determines the chunk size in statistics and performance grids
* **Statistics period** determines if the statistics by default open with hourly or daily data
* **Time zone** determines your time zone for the proper representation of date/time information

Clicking **Delete account** deletes your account, including Mendix Studio Pro environments belonging to your account. After the deletion, you will navigate to the Mendix Portal. Apps are not deleted at this time.

## Cleanups

The APM manager runs automatic cleanups. These remove monitoring data automatically after a certain period of time. APM manager uses the following periods of time:

* Short – 4 hours (for temporary data like CPU on the dashboard)
* Medium – 1 week (for working data like performance recordings and logs)
* Long – 1 year (for historic data like statistics)

Data can be preserved using the **Pin** ({{% icon name="pin" %}}) button. This prevents automatic cleanup.

Environments are automatically deleted if they are not used for a year.
