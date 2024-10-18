---
title: "Apps"
url: /appstore/partner-solutions/apd/rg-three-apps/
---

## Apps Overview

The home page of APD displays the list of licensed applications from the Mendix [Mendix Portal](/developerportal/) in alphabetical order.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/ProjectsDashboard.png" class="no-border" >}}

It is possible to search on an app's name or select one from the overview directly.

Selecting an app in the overview displays the overview of the [Environments](/appstore/partner-solutions/apd/rg-three-environments/) for that app.

In order to find a specific application faster, it is possible to mark it as a favorite by clicking **Favorite** ({{% icon name="star" %}}) on the application tile. Favorite applications are shown first in the overview.

In case an application is not visible in this overview, click **Can’t find your App?** in the upper-right corner.

## Tour Guides and Videos

APD has several tour guides and videos to help you navigate through APD to perform certain tasks. These can be accessed by clicking the documentation icon next to your profile image and selecting **Tour**:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/Documentation.png" class="no-border" >}}

{{% alert color="info" %}}
By default, APD displays the tour guides and videos upon login for new users.
{{% /alert %}}

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/Tour.png" class="no-border" >}}

When starting a tour, a tooltip will appear throughout the APD application with instructions to follow.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/TourStep.png" class="no-border" >}}

## Profile Menu and User Settings

In the profile menu, you can see links to your [Mendix Profile](/community-tools/mendix-profile/) and also the user settings for APD:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/profile_menu.png" class="no-border" >}}

In the user settings, you can configure the home page to be one of the following:

* All your apps (if both drop-down menus are empty)
* A specific app on the [Environments](/appstore/partner-solutions/apd/rg-three-environments/) overview if an app is selected and the **Environment** drop-down menu is empty
* A specific environment of a specific app

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/user_settings.png" class="no-border" >}}

These are the settings available on the **User settings** dialog box:

* **Guide on login** – determines if on login, the tour guide dialog box is opened (the checkbox at the bottom of that dialog box clears this setting)
* **Paging size** – determines the chunk size in statistics and performance grids
* **Statistics period** – determines if the statistics by default open with hourly or daily data
* **Time zone** – determines your time zone for the proper representation of date/time information

Clicking **Delete account** deletes your account, including the [Mendix Studio Pro environments](/appstore/partner-solutions/apd/rg-three-environments/) belonging to your account. After the deletion, you will navigate to the Mendix Portal. Apps are not deleted at this time.

## Cleanups {#cleanups}

The APD manager runs automatic cleanups. These remove monitoring data automatically after a certain period of time. APD manager uses the following periods of time:

* Short – 4 hours (for temporary data like CPU on the dashboard)
* Medium – 1 week (for working data like performance recordings and logs)
* Long – 3 months (for historic data like statistics)

Data can be preserved using the push-pin button, which will prevent automatic cleanup.

Environments are automatically deleted if they are not used for a year.
