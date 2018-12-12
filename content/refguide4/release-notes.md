---
title: "Release Notes"
---
The Spring 2012 Release of the Mendix App Platform includes a new unified and redesigned platform experience enabling social productivity, enhanced enterprise integration with app mash-ups, and a new, highly efficient way to build mobile apps for the Enterprise; plus we have improved performance and added all kinds of other features large and small.

Here are the highlights:

## Mobile for the Enterprise

Build mobile user interfaces on top of existing data and logic with just a few clicks. Creating mobile apps and extending existing web apps with mobile capabilities is no longer a separate project – just a smaller screen.

Mobile the Mendix way:

*   Build mobile web apps in hours.
*   Re-use all existing logic and data.
*   1-click deploy to the cloud.
*   From feedback to new app version in minutes.

## One Platform for All

With the Spring 2012 Release we brought together all of the platform components under one roof and user interface. As a result you'll be able to plan projects, design and build apps, test, deploy and monitor them – and even collect and process end user feedback all from the same platform.

## Social Productivity

Social collaboration features are now built into the Mendix App Platform. Social activity streams make it easy to fully engage all stakeholders throughout the lifecycle of your project. End users are more than customers – they're part of the project team. Plus we included new integrated chat functionality in this release to enable even more real-time collaboration.

## Enterprise Integration & App Mash-up

Easily integrate with other Enterprise Apps without the need to move data from one database to another. Mendix can now access information from other apps without having to pull data into your Mendix database. This improves performance and makes integrating with external systems a snap.

Enterprise Integration the Mendix way:

*   Secure: no data replication
*   Smart: advanced, automated memory management
*   Fast: no difference with app data
*   Easy: no added complexity

## Performance

For the Spring 2012 release, we substantially improved the out-of-the-box performance of Mendix and Mendix apps. All your existing apps will benefit from day 1! Besides that we introduced a number of additional options in Microflows to give you even less need for Custom Java Actions.

In short:

*   Less database interactions by using in-memory creates, resulting in substantial performance improvements for complex microflows.
*   Balance speed & memory usage by using offset & limit in microflow retrieves and batch commits. This functionality replaces most of the current needs for Custom Java actions!
*   Web service calls have been improved by adding the option to store (complex) results in a variable and by providing an optional limit to the number of objects to map.
*   The speed of the deployment process has been improved too. Iterating over working apps has never been so fast!

## Full Release Notes

### Persistence

#### Non-persistable entities

There is a new concept 'persistable' in the domain model. An entity that is not persistable cannot be stored in the database; a table is not even created for non-persistable entities (NPE). All objects of NPEs live in memory.
You can now call a web service and store its results only in memory (not in the database). This keeps the database cleaner and helps performance.

Non-persistable entities are drawn in a different color (orange). NPEs have certain limitations. They cannot have:

*   access rules with XPath
*   indexes
*   validation rules

They are not allowed in places that rely on database queries, such as data sets, and XPaths. The Modeler will check this for you.

#### Persistable entities

Note that objects of normal (persistable, blue) entities are not stored in the database immediately anymore. When you create an object in a microflow or click a new 'New' button (see below) the object is created in memory.

#### Associations

Associations between non-persistable entities and persistable entities must start in the non-persistable entity and have owner 'default'.

#### Image

You can assign an image to entities. These images are purely for your own documentation. For example, you can assign an SAP icon to entities that originate from a SAP web service.

#### Import web service / XML file wizard

A new button in the toolbar of the domain model editor helps you to import web service operations and XML files. It starts a wizard that lets you choose between web service and XML file, existing or new and finally generates domain model entities, an import mapping (for the result of the web service operation or XML file) and optionally a microflow that calls the web service or imports an XML file.

### Mobile Forms

There is a new document type 'mobile form'. Mobile forms are meant to be displayed on mobile phones. In many ways they are similar to web forms.

#### Layout and widgets

A mobile form has a heading that shows a title and allows for the placement of two buttons. There is also a footer that either contains a menu bar (based on mobile navigation), custom content (for example, a table with buttons) or nothing (hidden).
The set of available widgets is:

*   Data view: the familiar data view but with less properties
*   List view: similar to the template grid in web forms. Supports paging through a "load more..." button, sorting, and searching
*   Section: a visual group with an optional header.
*   Navigation list: a fixed list of items that point to either a form or a microflow.
*   Input widgets: text box, text area, drop down, check box, date picker, reference selector, reference set selector.
*   Various buttons: microflow, save, cancel, link, back, drop-down, sign out
*   Other: label, image viewer

#### Navigation

In the project explorer under 'Project' you can find a new node 'Mobile'. There you can enable the mobile client for your project and configure navigation. The navigation items can be shown in the footer of a form.

#### Hosting an application with mobile forms

You can configure the web server (IIS, Apache, nginx) to redirect to index-mobile.html. If you are running on your own machine you can go to index-mobile.html by hand or use the enhanced open browser button or menu items.

#### New form editor

The form editor has been rebuilt from the ground up. It offers a number of cool new features:

*   Keyboard support: navigate around the form with arrow keys.
*   Edit forms in addition to property grid: press Enter to edit the properties of the currently selected widget/element.
*   Easily selectable rows and columns: rows and columns have visible handles now.
*   Drag & drop table rows and columns.
*   Copy and paste table rows and columns
*   Context-menu key (or Shift-F10) is supported: for keyboard aficionados
*   Inline editing of captions: no need to look at the property grid while typing!

### Minor microflow features

#### Commit object(s)

You can commit multiple objects at once using the commit action. It saves you from drawing a loop and it is very efficient (just as efficient as a batch commit in Java).

#### Delete object(s)

You can delete multiple objects at once using the delete action. Again, you do not need a loop and it is much faster.

#### Persistent create deprecated

When you convert a project, all existing create actions are deprecated. This will give you one warning. Right-clicking the warning allows you to find all occurrences of the create action and it offers a quick conversion.

The old (persistent) create immediately inserted an object in the database. The new create action only creates the object in memory. In obscure cases you can detect the difference between the old and the new create action. For example, if you look at the database after the create action but before a corresponding commit action, the object will not be in the database if you used the new create action. Because we cannot guarantee 100% backward compatibility we do not convert the persistent create actions automatically.

You cannot introduce new persistent create actions. You can only make the new create action.

#### New create action

The new create action only creates the object in memory and does not insert a line into the database yet. You can now specify initial values for the fields of the new object from the create action. This saves you from adding a separate change action after creating an object.

#### Call web service / import XML

Both call web service and import XML offer the option to store a resulting list of objects in a variable now. You no longer need to add a parameter to your mapping and associate all results with that parameter, just so you can discover the imported objects again.

Whether to commit the imported objects to the database is an option now. Also, you can limit the number of objects that are returned.

#### Retrieve action

Retrieve by association now allows following association in 'reverse'.

When retrieving from the database you can specify an offset and a limit. This allows you to iterate of huge collections of objects without running out of memory.

#### New list operations

There are two new list operations: find and filter. They both look through a list for elements that have an attribute set to a given value. 'Find' returns the first object that matches, 'filter' returns all of them.

### Minor form features

We renamed form to 'web form' to emphasize the distinction between web forms and mobile forms.

#### Persistent 'New' button deprecated

All New buttons in a converted project are "persistent New buttons". The persistent New button creates an object and stores it in the database immediately. The new 'New' button only creates an object in memory.

A warning indicates the existence of persistent 'New' buttons. Right-clicking this warning shows you options to find all persistent New buttons and to convert them all to new 'New' buttons. Just like with microflow create actions, you only notice the difference between the old and the new 'New' button if you inspect the database after the create (and before a commit) and expect the object to be there.

#### Data sources

We introduced the concept of 'data source' for widgets operating on entities: data view, data grid, reference set selector, image viewer. The data source specifies where the data for the widget comes from: the database, a microflow etcetera.

Different widgets have different allowed data sources. For example, a data grid can be filled from the database, by a microflow (NEW) or by following an association of the enclosing object (NEW, for non-persistent entities).

The data source also determines which features of the widget are enabled. Having a sort bar or a search bar is only possible for the database data source option, because those features rely on XPath (and thus SQL in the end).

A new data source wizard helps you to configure the data source. It can even create microflows for you!

### Performance improvements

#### Creating a deployment archive is faster

The Modeler generates forms now. This means the runtime does not have to be started for generating forms, improving performance significantly.

#### Batching

The batch API has been deprecated. Because objects are not immediately inserted into the database and the new action to commit multiple objects action, you can get the same performance from microflows and Java without using the batch API.

#### Creating objects is faster

The create action no longer inserts a row into the database and this means there is one less round trip to the database. In microflows that perform a lot of operations you will definitely notice the speedup.

### Other minor features

#### Hide completed stories

The Stories dock can hide completed stories so that you can focus on what really needs to be done.

#### Quickly open browser

You can quickly open the web browser to show your application by using the F9 shortcut key. Use Ctrl+F9 if you want to preview the mobile interface of your app!

#### Automatically update condition settings

When adding or deleting an enumeration value, the corresponding condition settings (visibility/editablity) are automatically updated. When adding a value you even get to choose what value you want to update with.

#### Exception handling

If the Modeler encounters an exception, you can now easily send the stack trace and a short description of what you were doing directly to the developers. Please send us this feedback and help us improve the Modeler!
