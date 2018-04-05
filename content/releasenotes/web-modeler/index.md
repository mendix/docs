---
title: "Web Modeler"
---

{{% alert type="info" %}}

These release notes are for the [beta](../beta-features/index) version of the Web Modeler, Mendix's web-based development environment for business developers. We welcome users to provide feedback on issues or share suggestions for improvements.

{{% /alert %}}

## 2018

### March 27th, 2018 13:35:25 GMT

#### Improvements

* In the page editor, the following widgets are now rendered in their full glory (meaning, when you add them to your model using the Desktop Modeler):
  * Data grids
  * Template grids
  * Reference set selectors
  * Input reference set selectors
  * Table widgets
  * Header widgets from your layouts
  * Report widgets
  * Snippets
  * Widgets specific to the login page
* At this stage *all* the Mendix widgets supported by the Desktop Modeler are now rendered in the Web Modeler. This will further streamline collaboration between users of our two Modelers. It also enables you to use the Web Modeler live in meetings (for example, in frequent iterations during the app development cycle).
* Input widgets set to read-only will now render as such in the Web Modeler's page editor. For example, if you configure a text box widget to be rendered as a control or as a text widget, it will now render the same way in the Web Modeler as for an end-user, regardless of editability.
* In the microflow editor, you are now able to connect annotations with microflow activities. In this way, the valuable information often contained in annotations will always be in context, even when the activity is moved during the construction of the microflow. This will benefit users in understanding and maintaining microflows.
* We added support for the release of Desktop Modeler version 7.13.1.

#### Fixes

* We fixed the "Something went wrong" messages that appeared when creating new enumeration items and new microflows.
* The Web Modeler will now start even if the App Store cannot be reached.

### March 5th, 2018 15:10:44 GMT

#### Improvements

* We've added tooltips to various controls to make things easier for new users to comprehend.
* The header of the page editor toolbox is "sticky" now, so it does not scroll along with the **Toolbox** contents. This makes it easier for users to browse widgets and/or building blocks. 
* The order of the editors in the left sidebar menu has been improved to better match user expectations and improve overall modeling experience.
* In both the domain model editor and microflow editor, after dragging an item from the toolbox, the side panel will not toggle to the **Properties** pane. Instead it will keep displaying the **Toolbox**. This improves modeling speed, as we have witnessed in various user tests.
* An animation is now shown as custom widgets are updated on the **App Settings** page to inform the user that the widget is being updated in the background.
* Based on user feedback, we improved the guided product introduction tour, available when you select **Start Your First App** from the **Introduction Tour** category in the [Mendix Developer Portal](https://sprintr.home.mendix.com/) when you create a new app.
* We improved the drawing and auto-resizing of microflows when a user removes one or more activities from a microflow.
* In the microflow editor, the **Refresh In Client** property for **Create Object** and **Change Object** activities now has the default value **True**. This prevents the consequences of users accidentally not setting this property, as witnessed in many user tests.
* Java actions and connectors may be part of your microflows (for example, when added to your model using the Desktop Modeler). If so, they are now fully rendered in the Web Modeler's microflow editor. Also, the return type of a Java action is now available for use in microflows.
* We added support for [Desktop Modeler 7.12.0](../desktop-modeler/7.12). The minimum (and only) supported version is now Desktop Modeler 7.12.0.
* A maintenance page is now shown when the Web Modeler is unavailable due to maintenance activities by Mendix. 
  
#### Fixes

* Only the filtering of non-form page templates is now allowed while creating edit pages.
* The Web Modeler now handles conversion and custom widget requests better. 
  
### February 7th, 2018 16:28:00 GMT

#### Improvements

* In all dialog boxes, you can now use the <kbd>Ctrl</kbd> + <kbd>Enter</kbd> shortcut to confirm your choices and close the dialog box. For simple dialog boxes containing only one field, pressing only <kbd>Enter</kbd> works to confirm and close the dialog box.
* In the domain model editor, it is now possible to swap the direction of an association by using the **Swap Direction** button or icon. If you are unsure which direction an association between two entities should have, you can now create it either way. Then, if the **Multiplicity** property does not contain the option you need, you can switch the association direction to configure it correctly. This will save you time when setting up your domain model.
* We introduced a feature to the domain model editor that arranges the position of entities automatically. When your view is becoming cluttered with entity objects and association lines, click the **Auto arrange entities** icon in the upper-left corner of the editor. We’ll then use an algorithm to determine the best possible placement of items on your screen. Still not happy with the result? Click the icon again to see if we can come up with something better.
* In both the microflow editor and domain model editor, the canvas will now follow the cursor if it is moved outside the visible area. This makes it easy to work with more extensive microflows and domain models.

#### Fixes

* In the page editor, the **Create** button on the **Create New Attribute** dialog box now functions properly, even when used after clicking **Add parameter** (which is used, for example, for the **Caption** property of a widget).

### January 29th, 2018 16:10:52 GMT

#### Improvements

* In the page editor, you can now configure the page size of list views by changing the value of the **Page Size** property. The WYSIWYG editor will instantly render the number of rows you entered.
* When you create a page from an entity context that contains an Atlas UI data view, you will now see a new check box in the **Create new page** wizard: **Pre-fill page contents based on the `<name>` entity**. When you check this box, page content will pre-fill automatically. This speeds up initial app development by automagically adding and wiring the appropriate widgets for the entity specified.
* When using exclusive splits in the microflow editor, we now auto-configure the last split condition of an exclusive split. This will save you time and keep you from unintentionally omitting that condition.
* You can now easily jump to the microflow that serves as the data source for your data widget by clicking the arrow icon that is located right next to the **Data Source** property.
* We added support for [Desktop Modeler 7.11.0](../desktop-modeler/7.11). The minimum (and only) supported version is now Desktop Modeler 7.11.0.

## 2017

### December 18th, 2017 10:43:36 GMT

#### Improvements

* You can now use the radio buttons widget in the page editor.
* For an **Exclusive Split**, you can now configure split cases using the **Add case** button in the **Properties** pane of the microflow editor.
* We added a progress bar to the steps in the guided product introduction tour that is available when you select **Start Your First App** when creating an app in the [Mendix Developer Portal](https://sprintr.home.mendix.com/).
* We added support for the forthcoming release of Mendix 7.10.

#### Fixes

* The Web Modeler failed to load on Safari 10. We fixed several minor runtime issues for this.
* We made a general security fix.

### December 1st, 2017 09:53:20 GMT

#### Improvements

* We introduced a help menu and improved the dialog box for syncing with the Desktop Modeler.
* We added support for [Desktop Modeler 7.9.0](../desktop-modeler/7.9). The minimum (and only) supported version is now [Desktop Modeler 7.9.0](../desktop-modeler/7.9).
* You are now able to configure **Close Page** and **Show Home Page** activities in the microflow editor.
* Your SCSS is no longer compiled to CSS when opening the Web Modeler, so you won't have styling changes when you sync with the Desktop Modeler without having changed any styling in the Web Modeler.

### November 20th, 2017

#### Improvements

* You are now able to configure splits with enumerations in the microflow editor. This adds a host of opportunities for adding logic to your app!

#### Fixes

* We fixed the issue where following the user guidance could lead to a consistency error when deploying.

### November 14th, 2017

#### Improvements

* We dropped support for [Desktop Modeler 7.7.1](../desktop-modeler/7.7). The minimum (and only) supported version is now [Desktop Modeler 7.8.0](../desktop-modeler/7.8).
* You are now able to combine multiple flows using a **Merge** in the microflow editor
* You are now able to delete sequence flows and annotation flows in the microflow editor.
* We improved texts of the **Publish** dialog box for initial deployments.
* You can now configure an **Exclusive Split** activity and drag in a new **End Event** from the **Toolbox** in the microflow editor to create additional split cases.

### November 8th, 2017

#### Improvements

* You can now configure a **Show Message** activity in the microflow editor.
* The Web Modeler now shows the default user avatar in the main menu bar if the profile service is down and the actual user profile cannot be retrieved.

#### Fixes

* We fixed the issue that redirected the user to the `project/null` URL while syncing with the Desktop Modeler or during model conversion.

### November 2nd, 2017

#### Improvements

* We improved the text of the guided product introduction tour.

#### Fixes

* We fixed the **Locked by** pop-up window so that the username of the person who locked the app is shown.

### October 26th, 2017

#### Improvements

* We added support for [Desktop Modeler 7.8.0](../desktop-modeler/7.8).

#### Fixes

* We fixed the issue where apps could not be opened in the Web Modeler if they weren't created from an Atlas UI template through the Developer Portal app creation flow.
* We fixed the browser detection for browsers that do not support ES2015 syntax or that do not provide certain ES5 APIs.

### October 19th, 2017

#### Improvements

* We introduced guidance for first-time users. A guided product introduction tour is now shown when you select **Start Your First App** from the **Introduction Tour** category when creating an app in the [Mendix Developer Portal](https://sprintr.home.mendix.com/).
* You can now clear the selected icon for buttons and dynamic image widgets in the page editor.
* You can now configure the data source of the **Dynamic Image** viewer. Also, the **On Click Action** of both the **Dynamic image** and static **Image** viewers can be configured in the page editor.
* You can now upload new images for image widgets in the page editor.
* False positive changes in *entry-prefix.css* no longer occur when syncing with the Desktop Modeler.

#### Fixes

* We fixed clearing the error in **End Event** properties after selecting **Undo** in the microflow editor.
* We fixed the issue where the model conversion wouldn't finish.

### October 3rd, 2017

#### Improvements

* You are now able to reconnect microflow objects in the microflow editor.
* You are now able to delete all microflow objects (along with deleting them using the keyboard) in the microflow editor.
* Along with all of its button cousins, we now support the creation and configuration of link buttons. You can find the new **Open Link** button in your **Toolbox**. An old favorite from the Desktop Modeler, link buttons allow you to, for example, redirect the browser to a new page, an email form, or the call/messaging apps on your phone.
* We added support for [Desktop Modeler 7.7.1](../desktop-modeler/7.7)

#### Fixes

* We fixed the problem that prevented configuring an add-on widget when one of its properties used a relative path in its `entityProperty` configuration.

### September 5th, 2017

#### Improvements

* Entity access will no longer be out of date when adding or removing attributes, associations, and entities, so you won't need to go to the Desktop Modeler anymore to fix this problem. Deployment in the Web Modeler will succeed after the aforementioned actions.
* We improved the publish-application flow by updating some messages in the **Publish** dialog box.
* Menu bars and navigation trees configured with a custom menu document are now displayed.
* We implemented a page where you can upgrade the model to the newest version. You will see this page every time the minimum supported version for the Web Modeler is updated so that you can keep using the Web Modeler.
* You can now add and configure an **Exclusive Split** for Boolean conditions (based on variable or attribute values) in the microflow editor.

#### Fixes

* We fixed the issue in the microflow editor elements that was causing synchronization with the Desktop Modeler to fail.

### August 28th, 2017

#### Improvements

* You can now edit text widgets inline in the page editor. Double-click a text to start editing it, and then press <kbd>Enter</kbd> to confirm. Use <kbd>Shift</kbd> + <kbd>Enter</kbd> to add another line.
* We added support for [Desktop Modeler 7.6.0](../desktop-modeler/7.6).

#### Fixes

* Pressing <kbd>Delete</kbd> no longer tries to remove the currently selected element when the focus is on an input box or search field.

### August 15th, 2017

#### Improvements

* You can now change the (default) image for an image widget as well as configure the width and height of image widgets in the page editor.
* We implemented basic keyboard support for the modal dialog boxes. You can use <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> to jump to the next input field or button inside a modal dialog box. You can also use <kbd>Esc</kbd> to close the dialog box.

#### Fixes

* We added keyboard support for undo, redo, and delete operations.
* You can now add annotations to your microflows in the microflow editor.
* We fixed the initial layout selection in the **Create new page** wizard.
* We added an information message to the **Checks** panel to clarify for the user that the list with consistency errors will be refreshed only after the next publishing of the app.
* We fixed the issue that caused an image to be accidentally copied to your project multiple times when using a page template or building block. This caused a consistency error that could not be solved in the Web Modeler.

### July 25th, 2017

#### Improvements

* You can now use enumerations to set the initial values of members in the microflow editor.
* When an input widget is not yet wrapped in a data view or list view, you can now easily wrap it with a new data view in the page editor.
* We now also load styling for new custom widgets when inserting a building block that contains them in the page editor.
* It is now possible to remove custom widget packages from a project. All existing widget instances will be removed from all the pages automatically (where applicable).

#### Fixes

* We fixed the Desktop Modeler links not opening the correct projects.

### July 13th, 2017

#### Fixes

* The initial deployment of an app is no longer represented as if the user started it in the deploy pop-up window.
* We fixed the bug that removed the current value of the text widget after adding a parameter in the page editor **Toolbox**.

### July 12th, 2017

* Hello world! The Mendix Web Modeler is now available in public beta. Start building beautiful apps at speed and collaborate with non-technical domain experts using the Modeler's WYSIWYG page editor and visual modeling capabilities.
* We welcome users to provide feedback on issues or share suggestions for improvements.
