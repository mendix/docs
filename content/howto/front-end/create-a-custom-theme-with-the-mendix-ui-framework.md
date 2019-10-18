---
title: "Create a Custom Theme with the Mendix UI Framework"
category: "Front-End"
menu_order: 40
tags: ["Front-End"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This how-to presents creating a custom theme with the Mendix UI Framework.

**This how-to will teach you how to do the following:**

* Create a new app
* Set up [Scout](https://github.com/scout-app/scout-app) and the [Mendix UI Framework](https://ux.mendix.com/)
* Change the custom variables
* Create a custom theme

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Download the latest version of [Mendix Studio Pro](https://appstore.mendix.com/)
* Download [Scout](http://mhs.github.io/scout-app/) (or use a different compiler, such as [Sass](http://sass-lang.com/install))
* Download your preferred text editor (such as [Sublime Text](http://www.sublimetext.com/))

## 3 Creating a New App in Mendix Studio Pro

To create a new app and select a theme from the **New App** selector, follow these steps:

1. Open Mendix Studio Pro to the **My Apps** screen.
2. Click **New App**.
3.  Select the Mendix theme for your app:

	![](attachments/18448711/18581484.png)

## 4 Configuring Scout

To be able to make changes to the theme, Mendix suggests using [Sass](http://sass-lang.com/) instead of traditional CSS. The Mendix UI Framework uses Sass, which relies on Ruby. However, you can install Scout to run Sass in a self-contained Ruby environment, letting you effortlessly manage all of your Sass projects with a handful of clicks. This way you don't have to worry about using the terminal (although you can still do this if you are familiar with Sass and the terminal).

To configure Scout, follow these steps:

1.  Open your app's project folder in Scout by clicking the plus ("+") button in the bottom-left corner of the screen:
  
    ![](attachments/18448706/18581409.png)

2.  Select the project directory from your newly created app:

    ![](attachments/18448706/18581408.png)

3.  Choose the **Input Folder** and **Output Folder** by clicking **Choose**:

    ![](attachments/18448706/18581407.png)

4.  Select the **styles/sass** folder for your **Input** folder. The input path should be: *C:\Mendix Projects\Mendix-App\theme\styles\sass*:

    ![](attachments/18448706/18581399.png)

5.  Select the **styles/css** folder for your **Output** folder. The input path should be: *C:\Mendix Projects\Mendix-App\theme\styles\css*:

    ![](attachments/18448706/18581398.png)

6.  After selecting the input and output folders, press the play button in the left sidebar next to your project folder name. Scout is now set to compile the changes, so we can create a custom theme.

    ![](attachments/18448706/18581405.png) 

## 5 Configuring Your Text Editor

1.  Open the project directory from your app in your desired text editor:

    ![](attachments/18448706/18581397.png)

2. The **theme** folder is where you can find the theme that was selected when creating a new app. The  **theme\styles\custom** folder will be used to make our changes.
3. Open the **_custom-variables.scss** file, which contains the default variables we can use to easily change the basic colors of the app (think of variables as a way to store information that you want to reuse throughout your stylesheet):
    * **Step 1** contains the default colors such as primary, success, and danger, which are used for buttons, labels, links, text, and other elements
    * **Step 2** contains the colors and heights for your navigation bar, sidebar, and layout
    * **Step 3** contains the default layout spacing
    
    Below these three steps, there are topics such as **Typography**, **Forms**, **Buttons**, **Grids**, **Tabs**, **Mobile**, and other sections.

     ![](attachments/18448706/18581396.png) 

## 6 Creating a Custom Theme

In this section, you are going to create a custom theme.

### 6.1 Changing the the Color-Primary to Modify the Topbar and Buttons

![](attachments/18448711/18581480.jpg)

To change the topbar background-color and primary buttons, adjust the following line in the *_custom-variables.scss* file that can be found in *theme\styles\custom*: `$color-primary: #4280cb;` (line 10). Why do we want to change this color, and how do we know this color is used for the topbar, primary buttons, and other CSS elements? For example, when you search for `color-primary` in the *_custom-variables.scss* file, you will find these two lines:

* `$color-topbar-bg: $color-primary;` (line 42)
* `$color-btn-bg-primary: $color-primary;` (line 231)

If you look in your *_custom-variables.scss* file, you will notice that other CSS elements use the `$color-primary` variable. All of these elements will also be changed, because when you change one variable, you are able to modify other elements in your theme, which saves a lot of time in maintaining your theme.

In our app, `color-primary` has the color blue, but you want the primary color to be dark blue. You can now adjust `$color-primary` on line 10 to `#232f3e`.

![](attachments/18448711/18581477.png) 

When you save your file after changing `color-primary`, you will see a change in Scout similar to this example:

![](attachments/18448711/18581482.png) 

Scout detected a change to the *_custom-variables.scss* file and compiled the CSS files. If you don't want to use Sass, you can use these CSS files.

Re-deploy your app, which will now look like this:

![](attachments/18448711/18581473.png)

As you see, the background color for the topbar and primary buttons has been changed.

### 6.2 Changing the Secondary Background Color

Your custom app has a gray background, but you want a white background. We can easily change this by editing a line in the *_custom-variables.scss* file.

This is the background color for specific pages such as the dashboard (also used as a utility class): `$color-layout-bg-secondary: #EFF4F7;` (line 38). The `$color-layout-bg-secondary` variable is used for several page templates. For example, in the *theme\styles\sass\pagetemplates\responsive\_page-dashboard.scss*  file, `$color-layout-bg-secondary` is used as the default background color for all of the dashboard templates. With this variable, you can easily change all of your background colors to white.

You can now adjust `$color-layout-bg-secondary` (line 38) to the `#FFF` background color:

![](attachments/18448711/18581479.png)  

### 6.3 Changing the Sidebar and Navigation Colors

You can adjust your sidebar and navigation in a similar way. Your app is now very dark, so it would be wise to change the sidebar background color. You can use a gray background color.

This is the sidebar: `$color-sidebar-bg: $color-inverse;` (line 45). Change this to `$color-sidebar-bg: #f9f9f9;`:

![](attachments/18448711/18581475.png)

Now, when you search for `$color-sidebar-bg`, the navigation part will show in the *_custom-variables.scss* file. Because the navigation gets the same variable as the background color (`$color-sidebar-bg`), you won't have to change the background color here.

Re-deploy your app, which will now look like this:

![](attachments/18448711/18581474.png)

You now have a different background color, but the navigation text is impossible to read because it is also white. You are going to make the text color, text hover color, text active color, and sub-text item color darker by using the `$color-inverse` variable. The color inverse is usually the darkest variable in a theme(but you could also choose a different hover color).

These are the text colors:

* `$color-navsidebar-text:  $color-text-white-secondary;` (line 396)
* `$color-navsidebar-text-hover:  $color-text-white;` (line 397)
* `$color-navsidebar-text-active:  $color-text-white;` (line 398)

Change the above variables as well as the `sub-text` variables to `$color-inverse`:

![](attachments/18448711/18581470.png)

Re-deploy your app, which will now look like this:

![](attachments/18448711/18581467.png)

This should give you a better understanding of how variables work and of the theme structure. In the next section, we will change the logo in Studio Pro and make a small theming adjustment.

### 6.4 Changing the Logo in Studio Pro

Use this logo to replace "Company Name" in the topbar:

![](attachments/18448711/18581471.png)

In Studio Pro, go to the **Sidebar_Full_Responsive** layout and replace the image. Leave the caption blank, because the caption "go shopping" is already in the new image.

Re-deploy your app to see the shiny new logo:

![](attachments/18448711/18581468.png)

## 7 Read More

* [Layouts and Snippets](layouts-and-snippets)
* [Set Up Mendix UI Framework with Just CSS](setup-mendix-ui-framework-with-just-css)
* [Set Up the Navigation Structure](../general/setting-up-the-navigation-structure)
* [Set Up the Mendix UI Framework with Scout](setup-mendix-ui-framework-with-scout)
* [Set Up the Mendix UI Framework with Koala](setup-mendix-ui-framework-with-koala)
* [Create Your First Two Overview & Detail Pages](create-your-first-two-overview-and-detail-pages)
* [Find the Root Cause of Runtime Errors](../monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors)
