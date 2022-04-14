---
title: "Charts"
url: /appstore/modules/charts/
category: "Modules"
description: "Describes the configuration and usage of the Charts module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "charts", "platform support", "area chart", "bar chart", "bubble chart", "column chart", "heatmap chart", "line chart", "pie chart", "time series chart"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="danger" %}} **TODO:** Add introduction {{% /alert%}}

## Migration from Charts v1 and v2 to Charts Module

In this guide we would like to give you instructions on how to migrate Charts,
and it's widget to new version.
Don't be afraid this just easy as copy and paste few files and directories and should 
take just couple of minutes.

Again, this steps only required if you're already using Charts widget, and you want to update
this widget to version 2. If you're starting new project you don't need to do any extra steps ---
just download latest Charts widget from marketplace.

To update your Charts widget follow steps below.

### Step 1 - Making backup

So, its good idea to start with backup of your current project.
If something goes wrong, you always may restore previous files and
start again.

In our case we don't need to back up whole project. All we have to do is make a copy of
**<YOUR_PROJECT>/widgets** directory.

{{% alert color="info" %}} **Note:** You can use **App** > **Show App Directory in Explorer** command from app menu to open you project in file manager. {{% /alert%}}



For now you can just make **widgets** copy in project folder:

{{< figure src="/attachments/appstore/modules/charts/copy-widgets-folder.png" alt="File manager window with list of Mendix project files and directories and two directories is being selected: widgets and widgets - Copy" >}}

Now we should have two folders: **widgets** and **widgets - Copy**.

If something go wrong, you can delete current "widgets" folder and rename "widgets - Copy" to "widgets".

### Step 2 - Removing existing Charts widget from the project

So now we have to remove previous version of Charts widget.
To do so, open your project in File Manager. Navigate to **<YOUR_PROJECT>/widgets** directory
and find file with name **Charts.mpk**. Now you have to remove this file.

{{< figure src="/attachments/appstore/modules/charts/delete-chart-widget.png" alt="File manager window with list of widgets. Charts.mpk file is selected with open context menu next to it. Delete item is hovered." >}}

And we are done! Now all what's left is to install new version of Charts widget.



{{% alert color="info" %}}

**Note**: if you using AnyChart widget in your project we highly recommend you to migrate your charts to new charts module — it has better developer experience and give you advanced set of chart widgets to visualize your data.

{{% /alert %}}


### Step 3 - Installing Charts module from marketplace

So, now you can open Studio Pro, go to marketplace and install brand new Charts module.

<!-- Add screenshots of marketplace with Charts module -->

After this step you need to synchronize open project and file system. You can do it by pressing **F4** on the keyboard or through the app menu by running **App** > **Synchronize App Directory** command. This action will notify Studio Pro about new Chart widgets. 

If you see some errors in error tab, do not panic — errors appears quite often when you migrate your widget to new version. One of this errors will be about new widget version.

{{% alert color="warning" %}}

**Warning**: Although new widgets from charts module has same settings and behaviour, they also introduce some breaking changes. The main breaking change is **Data Source** property. That means that migration process can't be fully automated and it's up to you as a developer to update each widget individually.

{{% /alert %}}

Go to next section to see example of updating settings for the column chart.

### Step 4 - Updating chart widgets

This step assume that you go over all chart widgets in your project and update them one by one.

The easiest way is by dropping new charts widget right next to your existing widget, copying or changing settings and then removing old widget. If you prefer step-by-step guide:

1. Go to old chart widget.
2. Add new version fo the widget of the same chart type.
3. Copy properties from old widget to the new widget.
4. Remove old widget.
5. If there any other old chart widgets in your project, repeat steps 1-5.



{{% alert color="warning" %}}

**Warning**: If your project was created in Studio Pro version < v9.18.0 then you probably may see some additional errors in **Errors List** tab from **Atlas_Web_Content** module. They coming from some page templates that we shipping by default with Studio Pro distribution. Simplest solution would be go to the template and remove all chart widgets from the template. If you are using this templates in your app, then just repeat steps in "Updating chart widgets" section.

{{% /alert %}}

### Step 5 - Testing your project

Congratulations! We successfully updated Charts widget and now we can run our project to make
sure that all works fine and app can do a successful start.
