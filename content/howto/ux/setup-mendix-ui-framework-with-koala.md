---
title: "Set Up the Mendix UI Framework with Koala"
category: "UX"
parent: "setup-mendix-ui-framework"
tags: ["UI Framework", "Styling", "Koala"]
---

## 1 Introduction

In this how-to we will go through how to setup the [Mendix UI Framework](https://ux.mendix.com/) with the program called Koala.

**After completing this how-to you will know:**

*   How to create a new App
*   How to setup Koala and the [Mendix UI Framework](https://ux.mendix.com/)
*   How to make your first styling changes

## 2 Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   Download the latest [Mendix Modeler](https://appstore.mendix.com)
*   Download [Koala](http://koala-app.com/) ([or use a different compiler](http://sass-lang.com/install))
*   Download text editor [Sublime Text](http://www.sublimetext.com/)

## 3 Creating a New App in the Mendix Desktop Modeler

In this chapter we will create a new app and select a starter app from the New App selector.

1.  Open the **Mendix Modeler**.
2.  Create a **New App** from the **My Apps** screen in the Mendix Desktop Modeler.

    ![](attachments/18448712/18581487.png)

3.  Select a starter app on which to base your app.

    ![](attachments/18448712/18581488.png)

4.  You can now deploy your app or just head over to section 3 to configure Koala.

## 4 Configuring Koala

The Mendix UI Framework uses **Sass**, which relies on Ruby. However, you can install [Koala](http://koala-app.com/) to run Sass in a self-contained Ruby environment, letting you effortlessly manage all of your Sass projects with a handful of clicks. This way you don't have to worry about using the terminal. You can still do this if you are familiar with Sass and terminal.

1.  Open your **App Project Folder** in Koala by clicking on the plus button in the left sidebar at the top (or drag your folder in Koala).

    ![](attachments/18448712/18581486.png)
2.  Select the **project directory** from your newly created App. Koala automatically detects the Sass and CSS files and you are ready. Koala automatically compiles the files you want to adjust.

    ![](attachments/18448712/18581485.png)

## 5 Configuring Your Text Editor

1.  Open the **Project Directory** from your App in your desired text editor.

    ![](attachments/18448712/18581502.png)
2.  The **theme** folder is where you can find the theme that was selected when creating the New App. The folder theme\styles\sass\custom will be used to make our own changes. Let's change the background for our sidebar!
3.  Open up the file <u>**custom-variables.scss**</u> .

     ![](attachments/18448712/18581503.png)
    Let's take a look at **Step 2** in the **custom-variables.scss** file. As the comments suggest we can adjust the background-color for the sidebar.
4.  Change the color from white (#FFF) to red (#FF0000) and save the file.

    ![](attachments/18448712/18581504.png)

5.  Deploy (or redeploy) your app and see the change you made to the sidebar!

    ![](attachments/18448712/18581499.png)

    As you can see our sidebar is now red, not the best look and feel but it works!

## 6 Related Content

* [How to Create Your First Two Overview and Detail Pages](create-your-first-two-overview-and-detail-pages)
* [How to Filter Data on an Overview Page](filtering-data-on-an-overview-page)
* [How to Find the Root Cause of Runtime Errors](../monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors)
* [How to Use Layouts and Snippets](layouts-and-snippets)
* [How to Perform the Scout and Windows 10 Workaround](perform-scout-and-windows-10-workaround)
* [How to Set Up the Navigation Structure](setting-up-the-navigation-structure)
* [How to Set Up the Mendix UI Framework with Just CSS](setup-mendix-ui-framework-with-just-css)
* [How to Set Up the Mendix UI Framework with Scout](setup-mendix-ui-framework-with-scout)
* [How to Set Up the Mendix UI Framework](setup-mendix-ui-framework)
