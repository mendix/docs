---
title: "Set Up the Navigation Structure"
url: /howto7/general/setting-up-the-navigation-structure/
weight: 30
---
Once you've created some pages you want to give users the ability to access them. The easiest way to do this is by using a navigation menu. The navigation editor of the Desktop Modeler allows you define navigation menus for desktop, tablet and phone interfaces. It also allows you to define which page is shown as a default home page depending on the user role.

## 1 Preparation

Before starting this how-to make sure you have completed the following prerequisites:

* [Creating a basic data layer](/howto7/data-models/create-a-basic-data-layer/)
* [Creating your first two Overview and Detail pages](/howto7/front-end/create-your-first-two-overview-and-detail-pages/)

## 2 Setting a Default Home Page

This section will explain how to set the default home page. Please note that this setting is overridden by the role based home page if you decide to configure that.

1. Open the **Navigation** editor.

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581313.png" class="no-border" >}}

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581311.png" class="no-border" >}}

2. Select either **Responsive**, **Tablet browser**, or **Phone browser** navigation, depending on the device interface you're working on.
3. Next to **Home pages** > **Default home page**, click **Select**.
4. Select the page you want to use as default home page. In this case, *Homepage* is used.

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581309.png" class="no-border" >}}

5. Click **Select**.

    {{% alert color="info" %}}You can also select a microflow as default home page. Make sure that the microflow contains a 'Show Form' activity, otherwise the user won't see anything.{{% /alert %}}

    Now every time a user signs in to the application, the selected page/microflow is shown/triggered.

## 3 Setting a Role Based Home Page {#Setupthenavigationstructure-Settherolebasedhomepage}

In many cases you want users with different roles to see different home pages. This can be easily achieved with Mendix by use of Role-based home pages. You don't need to configure home pages for every role, because the default home page works as a fall-back mechanism. This section will explain how to set role based home pages.

1. Open the **Navigation** editor.
2. Select either **Responsive**, **Tablet browser**, or **Phone browser** navigation, depending on the device interface you're working on.
3. Next to **Home pages** > **Role-based home pages**, click **Edit**.
4. In the **Role-based home pages** wizard, click **New**.
5. Select a user role to create a new setting. In this case, we select **Administrator**.

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581306.png" class="no-border" >}}

6. Click **Select**.
7. Select the role and click **Select target**.

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581305.png" class="no-border" >}}

8. Select the page **Account_Overview** and click **Select**.

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581304.png" class="no-border" >}}

    Now every time a user with the **Administrator** user role signs in to the application, the corresponding page 'Account_Overview' is shown. Users with different roles will be redirected to the default home page.

## 4 Creating menu items {#Setupthenavigationstructure-Createmenuitems}

This section will explain how to create menu items.

1. Open the **Navigation** editor.
2. Select either **Responsive**, **Tablet browser**, or **Phone browser** navigation, depending on the device interface you're working on.
3. Locate the **Menu** section.
4. Click **New item** to create a top level menu item. You can also select an existing menu item and click **New subitem** to create a sub-menu item.
5. Enter a **caption**. In this case, enter *Customer Overview*.
6. Select a page or microflow as target. In this case, we select the page _CustomerOverview.

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581302.png" class="no-border" >}}

7. Save the menu item by clicking **OK**.

    In the overview of menu items you can see the caption of the menu item, the target form or microflow and which user role is needed to be able to see the menu item. The user roles are derived from the page and microflow access settings in the security model. You can restructure the menu by dragging and dropping menu items.

## 5 Adding navigation menu to pages {#Setupthenavigationstructure-Addnavigationmenutopages}

Now that you've created a menu structure it's time to start using it on pages.

1. Open a page in the **Page Editor**.
2. Click **Add widget** and select **Menu bar**:

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581316.png" class="no-border" >}}

3. Click once in an empty place holder on the page to insert the widget.

    {{< figure src="/attachments/howto7/general/setting-up-the-navigation-structure/18581315.png" class="no-border" >}}

4. Double click the widget to open its properties.
5. Select **Project navigation** as menu source. This is the navigation structure defined in the navigation editor. You can also add additional menu structures by use of menu documents and use them instead.
6. Select **Desktop**, **Tablet**, or **Phone** as menu, depending on the device interface you're working on.
7. Click **OK** to save the properties. The menu widget is now showing the navigation items created in the navigation editor.

    To prevent repeating the previous steps for every page in your app, Studio Pro supports something called layouts. With layouts you can define a base structure for pages in your app. In a layout you can define where the menu should be rendered and you can simply reuse that layout for the desired pages. You can find out how to use layouts in the following document: [How to Use Layouts and Snippets](/howto7/front-end/layouts-and-snippets/).

## 6 Read More

* [Atlas UI](/howto7/front-end/atlas-ui/)
* [How to Create Your First Two Overview and Detail Pages](/howto7/front-end/create-your-first-two-overview-and-detail-pages/)
* [How to Use Layouts and Snippets](/howto7/front-end/layouts-and-snippets/)
* [How to Find the Root Cause of Runtime Errors](/howto7/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
