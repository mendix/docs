---
title: "Set Up the Navigation Structure"
url: /howto8/general/setting-up-the-navigation-structure/
weight: 3
---
## Introduction

Once you created some pages, it is important that your users can access them. For this, you need to create a navigation menu. The navigation editor of Studio Pro allows you define the navigation menu for different type of apps and devices for example, for responsive, tablet browser, hybrid phone, or native mobile apps. It also allows you to define which page is shown as a default home page depending on the user role.

## Prerequisites

Before starting this how-to make sure you have completed the following prerequisites:

* [Create a basic data layer](/howto8/data-models/create-a-basic-data-layer/)
* [Create your first two Overview and Detail pages](/howto8/front-end/create-your-first-two-overview-and-detail-pages/)

## Setting a Default Home Page {#home}

This section will explain how to set the default home page. 

{{% alert color="info" %}}

Note that the **Default home page** setting is overridden by a **Role-based home page** if you configure it. For more information, see the [Setting a Role-Based Home Page](#role-based-home-page).

{{% /alert %}}

Do the following:

1. Open **Project** > **Navigation**.

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/open-navigation.jpg" class="no-border" >}}

2. Some navigation profiles are open in a tab by default, for example, the **Responsive** one. To open other navigation profiles, do the following:

    1. Click **Add navigation profile**, select the profile type depending on the type of the interface you are working on:

        {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/add-navigation-profile.jpg" class="no-border" >}}

    2. Click **OK**.

3. In **Home pages** > **Default home page**, click **Select**.
4. Select the page you want to use as the default home page. The example below uses *_Web*:

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/select-home-page.jpg" class="no-border" >}}

5. Click **Select**.

{{% alert color="info" %}}

You can also select a microflow as a default home page. Make sure that the microflow contains a *Show Form* activity, otherwise the user will not see anything.

{{% /alert %}}

Now every time a user signs in to the application, the selected page/microflow is shown/triggered.

## Setting a Role-Based Home Page {#role-based-home-page}

In many cases you would like users with different roles to see different home pages. You can use role-based home pages for this. You do not need to configure home pages for every role, because the default home page works as a fall-back mechanism. 

Follow the steps below:

1. Open the **Navigation** editor.
2. Open the profile type depending on the interface type you are working on. 
3. In **Home pages** > **Role-based home pages**, click **Edit**.
4. In the **Role-based home pages** dialog box, click **New**.
5. Select a user role to create a new setting, for example, select the **Administrator** role:

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/select-user-role.png" class="no-border" >}}

6. Click **Select**.
7. After you have selected the user role, click the **Select target** button.

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/select-target.png" class="no-border" >}}

8. Select the home page for selected user role, for example, the **Account_Overview** page:

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/select-page.png" class="no-border" >}}

9. Click **Select**.

Now every time a user with the **Administrator** user signs in to the application, the **Account_Overview** page is shown. Users with other roles will be redirected to the default home page.

## Creating Menu Items

You can create menu items for your navigation. Do the following:

1. Open the **Navigation** editor.
2. Open the profile type depending on the interface type you are working on. 
3. In the **Menu** section, click **New item** to create a top level menu item. 
4. Enter a **Caption** for your menu item. In the example below, the menu item is named *Customer Overview* after a page this menu item will open.
5. Select a page or microflow as a target:

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/new-menu-item.png" class="no-border" >}}

6. Click **OK** to save the menu item.

In the overview of menu items you can see the name of the menu item, the target page/microflow, and the user role are the necessary settings to be configured for the menu item. The user roles are derived from the [page and microflow access settings](/refguide8/module-security/). 

You can restructure the menu by dragging and dropping menu items.

## Adding Navigation Menu to Pages

Now that you have created a menu structure it is time to start using it on pages. Do the following:

1. Open a page.
2. Click **Add widget** and select **Menu bar**:

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/select-menu-bar.png" class="no-border" >}}

3. Select a place on the page to add the widget.

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/add-widget.png" class="no-border" >}}

4. Open the **Properties** pane.
5. In **General** > **Menu source**, select **Project navigation**. This is the navigation structure defined in the navigation editor. (You can also add additional menu structures using menu documents.)

    {{< figure src="/attachments/howto8/general/setting-up-the-navigation-structure/menu-bar-properties.jpg" class="no-border" >}}

6. In **Profile**, select the profile type depending on the device type. **Responsive** is selected by default.  

The menu widget is now showing the navigation items created in the navigation editor.

To avoid adding the menu widget on every page in your project, you can use a layout. With layouts you can define a structure for pages in your project. You can define where the menu should be rendered and you can simply reuse that layout for all or several pages. For more information on how to use layouts, see [How to Use Layouts and Snippets](/howto8/front-end/layouts-and-snippets/).

## Read More

* [Atlas UI](/howto8/front-end/atlas-ui/)
* [Create Your First Two Overview and Detail Pages](/howto8/front-end/create-your-first-two-overview-and-detail-pages/)
* [Use Layouts and Snippets](/howto8/front-end/layouts-and-snippets/)
* [Find the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
