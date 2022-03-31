# Charts migration guide

In this guide we would like to give you instructions on how to migrate Charts,
and it's widget to new version.
Don't be afraid this just easy as copy and paste few files and directories and should 
take just couple of minutes.

Again, this steps only required if you're already using Charts widget, and you want to update
this widget to version 2. If you're starting new project you don't need to do any extra steps ---
just download latest Charts widget from marketplace.

To update your Charts widget follow steps below.

## Step 1 - Making backup

So, its good idea to start with backup of your current project.
If something goes wrong, you always may restore previous files and
start again.

In our case we don't need to backup whole project. All we have to do is make a copy of
<YOUR_PROJECT>/widgets directory. Just make a copy and put this copy in some safe place.

## Step 2 - Removing existing Charts widget from the project

So now we have to remove previous version of Charts widget.
To do so, open your project in File Manager. Navigate to <YOUR_PROJECT>/widgets directory
and find file with name "Charts.mpk". Now you have to remove this file.
And we are done! Now all what's left is to install new version of Charts widget.

## Step 3 - Installing new version of Charts widget.

So, now you can open Studio (Pro), go to marketplace and install new version of Charts widget.

After this step, you can press F4 on keyboard or find "Sync with ..." in the menu. This action
will synchronize your project with filesystem. If you see some errors in error tab, do not panic.
This errors appears because Stuido see new version of Charts and all you have to do is do a right
click on any chart, and in context menu click on "Update all widgets" item. This action will
update all chart widgets in your project.

## Step 4 - Testing your project

Congratulations! We successfully updated Charts widget and now we can run our project to make
sure that all works fine and app can do a successful start.
