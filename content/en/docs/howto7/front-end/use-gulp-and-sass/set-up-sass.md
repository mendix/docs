---
title: "Set Up Gulp & Sass"
url: /howto7/front-end/set-up-sass/
weight: 1
tags: ["gulp", "sass", "ux", "front end"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1  Introduction

Styling in a Mendix app is easy to do once you get the hang of it. But before you can start using Sass for your app, you first need to install and download a few things.

This how-to will teach you how to do the following:

* Prepare your app
* Set up your Sass files
* Work with Sass

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

1. Install [Visual Studio Code (VSC)](https://code.visualstudio.com/).
2.  On the [Gulp for Mendix theming](https://github.com/mendix/ux-theming) GitHub project, click **Releases**:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/releases.png" >}}

3.  Download the *Gulp.zip* file:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/gulp.png" >}}

4.  Install Node.js for task-running and automation through gulp. Install the latest LTS version from [Node.js](https://nodejs.org/en/):

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/node.png" >}}

5. Install version **1.7.15** of [TortoiseSVN](https://osdn.net/projects/tortoisesvn/storage/Archive/1.7.15/Application/).

## 3 Preparing Your App

To prepare your app, follow these steps:

1. Open the [app directory](/howto7/general/show-project-directory/) (via **Project** > **Show Project Directory in Explorer** in Studio Pro).
2.  Unpack the *Gulp.zip* file into your main app folder. You will then see a *Gulpfile* and *package* file that look like this:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/unpack.png" >}}

	After you have unpacked the *Gulp.zip* into your app folder, you can remove the *zip* file.
3.  Open **Windows PowerShell**:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/powershell.png" >}}

4.  Copy the address as text from your main app folder and paste it into Powershell (your app folder cannot contain spaces and should not be too long):

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/copy.png" >}}

5.  Provide the directory for your app folder in PowerShell: `cd ‘directory for your app folder’`
6.  Write `npm install` or use `npm install gulp-cli -g`:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/write-install.png" >}}

	If you use `npm install`, you may receive an error. PowerShell will tell you to use `npm run dev` instead. If that does not work, use `npm install run`.

	{{% alert color="info" %}}You should do this for each new app! That way, you will not have to repeat the installation step whenever you reopen the app and Powershell.
	{{% /alert %}}

7.  Write `gulp dev`. Your screen should then look like this:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/gulp-dev.png" >}}

	At this point, you are ready to start working with Sass.

8.  You also need to add the following selected items into the ignore list of TortoiseSVN for each new app. If you do not, your app will take too long to commit a change:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/selected-ignore.png" >}}

	To do that, right-click each item and select **TortoiseSVN** > **Add to ignore list**:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/add-ignore.png" >}}

	You will receive a confirmation when the items have been added to the ignore list. You can also double-check via TortoiseSVN:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/check-ignore.png" >}}
	
	If you need to remove an item from the ignore list, right-click it and select **TortoiseSVN** > **Remove from ignore list**.

9.  Open your app in Studio Pro, then click **Run Locally** and **View**:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/run-view.png" >}}

## 4  Setting Up Your Sass Files

Final steps! Read below to open and work with Sass:

1. Open the main app folder and go to **theme** \> **styles** \> **sass** \> **custom**.
2. Double-click either the *custom.scss* or *\_custom-variables.scss* file, which will open in VSC:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/custom-variables.png" >}}

	If you open the **custom** file, you will see the following screen:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/import.png" >}}

3. Click **Open Folder** in the **EXPLORER** and then select the **sass** folder:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/sass-folder.png" >}}

4. Remove the **Welcome**, since you will not need this:

	{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/welcome.png" >}}

### 4.1  Keeping Your Sass in the Custom Folder

it is important to keep in mind that you are only working in the **custom** folder. You will not make any changes in the **lib** folder, but you can use that as a reference. You will only use the contents of the *\_variables.scss* file to get the variables you need and copy them in your *\_custom-variables.scss* file. The variables can differ from the default font sizes, colors, background colors, heights, and so on. In the *\_custom-variables.scss* file, you can also make your own variables, for example `$brand-blue: \#48B0F7;`.

You can now work on the Sass structure and organize everything neatly by creating sub-folders and files in the **custom** folder. You can also look in the **lib** folder to get an idea of which folders and files you will most likely use in your app.

When you create a new Sass file, follow this naming guideline: *\_{namefilehere}.scss*. For example:

{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/name-example.png" >}}

### 4.2 Importing New Sub-Folders & Files

Before you can see any changes in your app with your new Sass, you need to import the folders and files first. If you open *custom.scss*, you will see this:

`@import "custom-variables";`

To import all the sub-folders and files you have created, write this:

```
\@import "custom-variables";
// base
\@import "base/login";
```

After you import everything, you are finally ready to Sass! 

## 5 Working with Sass

Here is an example of custom Sass:

```
.pageheader-title {
color: red;
}

.pageheader-subtitle {
color: green;
}
```

To implement this in your app, open the app in Mendix Studio Pro. You can find the defined class names in almost every element (for example, titles and subtitles). In this example, double-click the title **Event App** in Studio Pro, and you can see that the name has the standard class name for Studio Pro. 

{{< figure src="/attachments/howto7/front-end/use-gulp-and-sass/set-up-sass/class-name.png" >}}

You can remove **spacing-outer-bottom-medium**, as that is a variable that contains defined styling code. If you do not remove this, you will probably have trouble later in the app if you, for example, want to position your title somewhere else. 

{{% alert color="info" %}}
The inline styling is not made use of in this example. That is because the inline styling will always overrule your code in VSC. 
{{% /alert %}}

### 5.1 Seeing Your Changes

When you add, remove, or change something in Studio Pro, you need to save your changes and run the app  locally to see your styling changes in the browser.

For example, when you set a color for your title and subtitle, click **Run Locally** then **View**. When browser automatically opens, you will see the following URL:

`http://localhost:8080/index.html?profile=Responsive`

You then need to replace the `8080` with `3000` in order to sync the browser with your VSC changes. That means the URL should be this:

`http://localhost:3000/index.html?profile=Responsive`

{{% alert color="info" %}}
If you use a Mac laptop, you can open this URL: `http://windows-10:3000`.
{{% /alert %}}

You can test this by changing the color of `.pageheader-subtitle` from green to blue in the example above. If you have correctly synced with the browser, you can already see that the subtitle color changes into blue.

## 6 Summary

Practice the routine above a few times and you will master it in no time. In addition, keep the following summary in mind:

* Make sure Powershell is working properly, or else your code will not be registered Studio Pro
* Use the following to install gulp for each new app:
	* `npm install`
	* `npm install dev`
	* `npm install gulp-cli -g`
	* If the above do not work, you can also use `npm run dev`, though keep in mind you are not installing the gulp
* Make sure the app is running locally in Studio Pro (you will not be able to see yoru changes if the app is not running)
* If you change or add something in Studio Pro, save it and run the app again
* Make sure you are working in the right folder (which in VSC is always **sass** > **custom**; you should not work in **lib**)
* Do not make use of inline styling via Studio Pro
* Be sure to change the portal of `localhost:8080` into `localhost:3000`
* Add the following items to the TortoiseSVN ignore list:
	* *node_modules*
	* *Gulpfile*
	* *package*

Have fun styling!

## 7 Read More

* [How to Start Styling with Gulp & Sass](/howto7/front-end/style-with-gulp-and-sass/)