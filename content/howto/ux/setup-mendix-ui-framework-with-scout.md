---
title: "Set Up the Mendix UI Framework with Scout"
parent: "setup-mendix-ui-framework"
tags: ["UI Framework", "Styling", "Scout"]
---

## 1 Introduction

In this how-to we will go through how to setup the [Mendix UI Framework](https://ux.mendix.com/) with the program called Scout.

**After completing this how-to you will know:**

*   How to create a new App
*   How to setup Scout and the [Mendix UI Framework](https://ux.mendix.com/)
*   How to make your first styling changes

## 2 Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   Download the latest [Mendix Desktop Modeler](https://appstore.mendix.com)
*   Download [Scout](http://mhs.github.io/scout-app/) ([or use a different compiler](http://sass-lang.com/install))
*   Download text editor [Sublime Text](http://www.sublimetext.com/)

## 3 Creating a new App in the Mendix Desktop Modeler

In this chapter we will create a new app based on a starter app from the New App selector.

1.  Open the **Mendix Desktop Modeler**.
2.  Create a **New App** from the **My Apps** screen in the Mendix Desktop Modeler.

     ![](attachments/18448706/18581412.png)
3.  Select a starter app for your app.

    ![](attachments/18448706/18581411.png)
4.  You can now deploy your app or just head over to section 3 to configure Scout.

## 4 Configuring Scout

**Windows 10 users need to use the following workaround. Click [here](perform-scout-and-windows-10-workaround) for the workaround.**

The Mendix UI Framework uses **Sass**, which relies on Ruby. However, you can install [Scout](http://mhs.github.io/scout-app/) to run Sass in a self-contained Ruby environment, letting you effortlessly manage all of your Sass projects with a handful of clicks. This way you don't have to worry about using the terminal. You can still do this if you are familiar with Sass and terminal.

1.  Open your **App Project Folder** in Scout by clicking on the plus button in the left sidebar all the way at the bottom.

    ![](attachments/18448706/18581409.png)
2.  Select the **project directory** from your newly created App.

    ![](attachments/18448706/18581408.png)
3.  Choose the **Input** and **Output** folder by clicking on **Choose**.

    ![](attachments/18448706/18581407.png)
4.  Select the **styles/sass** folder for your **Input** folder.
    Input path should be: C:\Mendix Projects\Mendix-App\theme\styles\sass

     ![](attachments/18448706/18581399.png)
5.  Select the **styles/css** folder for your **Output** folder.
    Input path should be: C:\Mendix Projects\Mendix-App\theme\styles\css

     ![](attachments/18448706/18581398.png)
6.  After selecting the Input and Output folder you can press **Play** in the left sidebar next to your Project Folder name.

    ![](attachments/18448706/18581405.png)
    Scout is now set to compile the changes you want to make for your own or existing theme.

## 5 Configuring Your Text Editor

1.  Open the **Project Directory** from your App in your desired text editor.

    ![](attachments/18448706/18581397.png)
2.  The **theme** folder is where you can find the theme that was selected when creating a New App. The folder theme\styles\custom will be used to make our own changes. Let's change the background for our sidebar!
3.  Open up the file **custom-variables.scss**.

     ![](attachments/18448706/18581396.png)
    Let's take a look at **Step 2** in the **custom-variables.scss** file. As the comments suggest we can adjust the background-color for the sidebar. 
4.  Change the color from white (#FFF) to red (#FF0000).

    ![](attachments/18448706/18581395.png)

5.  Now **save** the file and switch to Scout. You should now see a change in the **Log** tab. The log should say that the file custom.css has been overwritten. Scout compiles a CSS file from all your SASS files.

    ![](attachments/18448706/18581401.png)

6.  Deploy (or redeploy) your app and see the change you made to the sidebar!

    ![](attachments/18448706/18581400.png)

    As you can see our sidebar is now red, not the best look and feel but it works!

## 6 Related Content

*   [How to Create Your First Two Overview & Detail Pages](create-your-first-two-overview-and-detail-pages)
*   [How to Filter Data on an Overview Page](filtering-data-on-an-overview-page)
*   [How to Find the Root Cause of Runtime Errors](../monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors)
*   [How to Use Layouts and Snippets](layouts-and-snippets)
*   [How to Perform Scout and Windows 10 Workaround](perform-scout-and-windows-10-workaround)
*   [How to Set Up the Navigation Structure](setting-up-the-navigation-structure)
*   [How to Set Up the Mendix UI Framework with just CSS](setup-mendix-ui-framework-with-just-css)
*   [How to Set Up the Mendix UI Framework with Koala](setup-mendix-ui-framework-with-koala)
