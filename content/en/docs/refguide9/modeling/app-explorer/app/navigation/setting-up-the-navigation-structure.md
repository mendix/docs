---
title: "Setting Up Navigation"
linktitle: "Set Up Navigation"
url: /refguide9/setting-up-the-navigation-structure/
description: "Describes how to configure the navigation structure in Studio Pro."
aliases:
    - /howto9/general/setting-up-the-navigation-structure/
---
## Introduction

Once you created some pages, it is important that your users can access them. For this, you need to create a navigation menu. The navigation editor of Studio Pro allows you define the navigation menu for different type of apps and devices for example, for responsive, tablet browser, hybrid phone, or native mobile apps. It also allows you to define which page is shown as a default home page depending on the user role.

## Setting a Default Home Page {#home}

This section will explain how to set the default home page. 

{{% alert color="info" %}}
Note that the **Default home page** setting is overridden by a **Role-based home page** if you configure it. For more information, see the [Setting a Role-Based Home Page](#role-based-home-page).
{{% /alert %}}

Do the following:

1. Open **App** > **Navigation**.
2. Some navigation profiles are open in a tab by default, for example, the **Responsive** one. To open other navigation profiles, do the following:

    1. Click **Add navigation profile**, select the profile type depending on the type of the interface you are working on:

        {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/add-navigation-profile.jpg" class="no-border" >}}

    2. Click **OK**.

3. In **Home pages** > **Default home page**, click **Select**.
4. Select the page you want to use as the default home page. 
5. Click **Select**.

{{% alert color="info" %}}
For online profiles you can set a microflow as a default home page. Make sure a *Show Page* activity is called from the startup microflow for each possible execution flow, or else the user will see nothing during execution paths where the activity is missing.

For the native mobile profile you can set a nanoflow as a home page, either as a default or as a role-based. For more information, see the [Setting a Nanoflow as a Home Page](#nanoflow-home-page) section below.
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

    {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/select-user-role.png" class="no-border" >}}

6. Click **Select**.
7. After you have selected the user role, click the **Select target** button.

    {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/select-target.png" class="no-border" >}}

8. Select the home page for selected user role, for example, the **Account_Overview** page:

    {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/select-page.png" class="no-border" >}}

9. Click **Select**.

Now every time a user with the **Administrator** user signs in to the application, the **Account_Overview** page is shown. Users with other roles will be redirected to the default home page.

## Setting a Nanoflow as a Home Page {#nanoflow-home-page}

Instead of using a page, you can set a nanoflow as your app's home page as long as you are using a native profile. The nanoflow you selected will be executed during startup and will show your app's starting page. This is a normal nanoflow call, which means that you can implement custom logic that determines which page to show, creates objects, calls subnanoflows, uses JavaScript actions, and more.

To make the best nanoflow home pages, keep the following information in mind:

* The home page nanoflow is executed after the initial synchronization
* While the nanoflow executes the app splash screen stays visible until the nanoflow reaches the first *Show Page* activity
* If a nanoflow contains multiple *Show Page* activities they will be executed in order and each page will be shown respectively (the last page shown will stay open after the nanoflow finishes)
* Make sure a *Show Page* activity is called from the startup nanoflow for each possible execution path, otherwise the app will keep showing the splash screen if the nanoflow finishes without executing a *Show Page* activity
* Home page nanoflows should have no parameters
* An error in the home page nanoflow can lead to an unusable app state — to avoid this, use error handling for activities that can fail, such as microflow calls
* To improve user experience for long-running nanoflows, show a page as early as possible and then continue executing the rest while showing the progress on that page

## Creating Menu Items {#menu-items}

You can create menu items for your navigation. Do the following:

1. Open the **Navigation** editor.
2. Open the profile type depending on the interface type you are working on. 
3. In the **Menu** section, click **New item** to create a top level menu item. 
4. Enter a **Caption** for your menu item. In the example below, the menu item is named *Customer Overview* after a page this menu item will open.
5. Select a page or microflow as a target:

    {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/new-menu-item.png" class="no-border" >}}

6. Click **OK** to save the menu item.

In the overview of menu items you can see the name of the menu item, the target page/microflow, and the user role are the necessary settings to be configured for the menu item. The user roles are derived from the [page and microflow access settings](/refguide9/module-security/). 

You can restructure the menu by dragging and dropping menu items.

## Adding Navigation Menu to Pages

Now that you have created a menu structure, it is time to start using it on pages. Do the following:

1. Open a page.
2. Click **Add widget** and select **Menu bar**:

    {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/select-menu-bar.png" class="no-border" >}}

3. Select a place on the page to add the widget.

    {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/add-widget.png" class="no-border" >}}

4. Open the **Properties** pane.
5. In **General** > **Menu source**, select **Project navigation**. This is the navigation structure defined in the navigation editor. (You can also add additional menu structures using menu documents.)

    {{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/setting-up-the-navigation-structure/menu-bar-properties.png" class="no-border" >}}

6. In **Profile**, select the profile type depending on the device type. **Responsive** is selected by default.  

The menu widget is now showing the navigation items created in the navigation editor.

To avoid adding the menu widget on every page in your app, you can use a layout. With layouts you can define a structure for pages in your app. You can define where the menu should be rendered and you can simply reuse that layout for all or several pages. For more information on how to use layouts, see [How to Use Layouts and Snippets](/howto9/front-end/layouts-and-snippets/).

## Read More

* [Atlas UI](/howto9/front-end/atlas-ui/)
* [Create Your First Two Overview and Detail Pages](/howto9/front-end/create-your-first-two-overview-and-detail-pages/)
