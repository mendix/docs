---
title: "On Click Event and Events Section"
url: /refguide/on-click-event/
weight: 130
aliases:
    - /refguide/opening-pages.html
    - /refguide/starting-microflows.html
    - /refguide/opening-pages
    - /refguide/starting-microflows
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Events specify actions which can be triggered when the end-user interacts with a widget. This interaction can occur in a number of ways:

* [On click](#on-click) – this is the most common interaction and can be used with many widgets
* [On change](#on-change) – for input elements
* [On enter](#on-enter) – for input elements
* [On leave](#on-leave) – for input elements

## Triggering Actions

### On Click {#on-click}

An **On click** event specifies an event that is executed when a user clicks a widget. Often the **On click** property is a part of the **Events** section in properties. For example, you can specify that when a user clicks a customer's profile image, the page with this customer's details will open:

{{< figure src="/attachments/refguide/modeling/pages/on-click-event/on-click-event-example.png"   width="350"  class="no-border" >}}

An on-click event is common for many widgets (for example, image, buttons, list view). 

The **On click** property specifies what [action](#actions) is executed when a user click a widget.

#### Disabled During Action

This property is only shown when **Call a microflow** or **Call a nanoflow** is selected as the on-click event. Selecting **Disabled during action** disables the button until the action is completed or failed.

### On Change {#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

### On Enter {#on-enter}

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

### On Leave {#on-leave}

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

## Event Actions {#actions}

When an event is triggered, you can choose what action is triggered. Possible options are the following ones:

* [Do nothing](#do-nothing) *(default)* 
* [Show a page](#show-page) 
* [Call a microflow](#call-microflow) 
* [Call a nanoflow](#call-nanoflow) 
* [Open link](#open-link) 
* [Create object](#create-object) 
* [Save changes](#save-changes) 
* [Cancel changes](#cancel-changes) 
* [Close page](#close-page) 
* [Delete object(s)](#delete-objects) 
* [Synchronize](#synchronize) 
* [Sign out](#sign-out) 
* [Call workflow](#call-workflow)
* [Show user task page](#show-user-task-page)
* [Show workflow admin page](#show-workflow-page)
* [Complete user task](#complete-task)

### Do Nothing {#do-nothing}

No action is taken. This option is useful for setting up a page without defining the underlying functionality yet.

### Show a Page {#show-page}

The **Show a page** event opens the specified page. Select the page which opens using the options below:

* **Page** – a [page](/refguide/page/) that should open.
  
* **Page settings** – opens a dialog box enabling you to configure the page in more detail (including the page title).

* **Page for specializations** – allows you to configure a different page for each specialization of the context object. If this action is placed inside a data view, it is possible to configure different page (or pages) for each specialization of the data view object. If this action is placed in a data grid, it is possible to configure different pages for each specialization of the data grid entity. This setting is not shown when there is not a context object or when the context object has no specializations.

#### Page Settings {#page-settings}

**Page settings** opens a dialog box enabling you to configure the page in more detail:

* **Page** – a [page](/refguide/page/) that should open.
  
* **Page title** – the page you open can be given a unique title, depending on where you open it from. This allows you to re-use the same page for different purposes. For example, by setting the title to **New Customer** from one button and **Edit Customer** from another, you can use the same page for editing new and existing customers.

  This option is activated by checking the **Override page title** checkbox.

* **Page arguments** – a list of parameters of the selected page and the objects that will be passed to each of them.

#### Page Arguments

**Page arguments** are automatically configured based on the parameters of the selected page and the available arguments. In general, arguments are taken from any enclosing data widget. If the data widget enclosing the widget calling a page is inside another (nested) data widget, then objects from that data widget and any others in which it is nested can also be passed.

### Call a Microflow {#call-microflow}

The **Call a microflow** event executes the specified microflow.

{{% alert color="info" %}}
When setting **Call a microflow** as an action for the **On change**, **On enter**, or **On leave** event of a widget, note that microflows require some time to complete. Any changes to the current form made in the meantime (for example, changing values in input elements) will be overwritten by the results of the microflow.
Therefore, it is not recommended to change entities/attributes on the current page in a microflow triggered by an **On change**, **On enter**, or **On leave** event.
{{%/alert %}}

The following settings are specific for this event:

#### Microflow {#microflow}

The [microflow](/refguide/microflow/) that should be executed.

You can either select an existing microflow or create a new microflow by clicking the **New** button from the **Select Microflow** dialog box.

In Studio Pro 10.4.0 and above, when creating a new microflow, a dialog box is shown where you can set the name and select parameters for the new microflow. You can choose the data view, snippet, page parameter, or available selection from which the parameter must be created in the new microflow:

{{< figure src="/attachments/refguide/modeling/pages/on-click-event/configure-new-microflow-with-parameter.png" width="650px" class="no-border" >}}

If there is nothing to pass to the new microflow, then a dialog box is shown where you can only specify the name of the microflow:

{{< figure src="/attachments/refguide/modeling/pages/on-click-event/configure-new-microflow-no-parameter.png" class="no-border" >}}

#### Microflow Settings {#microflow-settings}

**Microflow settings** opens a dialog box enabling you to specify what parameters will be passed to the microflow and how the microflow will be run.

{{< figure src="/attachments/refguide/modeling/pages/on-click-event/microflow-settings.png" alt="Microflow settings dialog" width="550px" class="no-border" >}}

##### Microflow

This duplicates the [Microflow](#microflow) specified above.

##### Microflow Arguments

**Microflow arguments** are automatically configured based on the parameters of the selected microflow and the available arguments. In general arguments are taken from any enclosing data widget. If the data widget enclosing the widget calling a microflow is inside another (nested) data widget, then objects from that data widget and any others in which it is nested can also be passed.

If the microflow is triggered within a grid and has an object list parameter, the objects which are passed in the list depend on the selection mode of the grid. Simple multi-selection allows for either all rows or selection, and defaults to selection. This can be configured via the drop-down menu in the microflow settings page. A grid with single selection always passes all rows to the microflow.

##### Microflow Call Type

**Microflow call type** specifies whether the microflow is executed synchronously or asynchronously.

* **Synchronous** *(default)* – The client waits until the microflow is done executing
* **Asynchronous**

    * The client executes the microflow but does not wait for the result
    * The client checks the server every ten seconds to see whether the microflow is done executing
    * Only set the call type to asynchronous if you experience problems — sometimes, if a request takes too long to handle, the request will be sent again by an (impatient) proxy server

##### Show Progress Bar

**Show progress bar** specifies whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

| Value | Description |
| --- | --- |
| None | No progress bar is shown. |
| Non-Blocking | A progress bar is shown, but the end-user can continue working. |
| Blocking | A progress bar is shown and the end-user must wait until the microflow is done. |

{{% alert color="warning" %}}
Non-blocking progress bars are shown with a delay of half a second. If the execution of your microflow takes less than half a second, the progress bar will not be shown at all. Blocking progress bars are shown immediately.
{{% /alert %}}

##### Progress Message

If a progress bar is shown, **Progress message** is the text which is shown next to the progress bar.

##### Ask Confirmation

If **Ask Confirmation** is set to **Yes**, the end-user will be asked for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete.

The user will be prompted with the text set in [Question](#question), below. The window title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

The default value is **No**.

##### Question {#question}

If **Ask confirmation** is set to yes, **Question** is what is shown to the user. Ensure that the question asked is clear and that the captions set on the buttons are unambiguous.

For example, *Are you sure you want to empty the trash can?*

##### Proceed Button Caption

If **Ask confirmation** is set to yes, this is the caption for the button that proceeds with the execution of the microflow.

For example, *Empty it*.

##### Cancel Button Caption

If **Ask confirmation** is set to yes, this is the caption for the button that cancels the execution of the microflow.

For example, *Do not empty*.

##### Maintain Selection After Microflow

For buttons which call a microflow from inside a grid, **Maintain selection after microflow** specifies whether the current selection of rows in the grid should be maintained after executing the microflow.

{{% alert color="warning" %}}
If the data in the grid is updated, selection on the *not* visible pages is lost if the items are selected via an approach other than a **Select all** button. Therefore, consider this feature carefully when implementing it in an app with multiple pages.
{{%/alert %}}

##### Abort on Validation Errors {#abort-on-validation-errors}

For microflows that are used within a data widget, setting **Abort on Validation Errors** to **Yes** forces widget validations to be performed *before* executing the microflow. If the validations fail, the microflow will not be executed.

| Value | Description |
| --- | --- |
| Yes *(default)*| This will prevent the microflow from executing if there are any validation errors on the page. |
| Only for this widget | This will prevent the microflow from executing if there are validation errors in the current widget. |
| No | The microflow will always be executed. |

### Call a Nanoflow {#call-nanoflow}

The **Call a nanoflow** event executes the specified nanoflow. 

#### Nanoflow

Set the **Nanoflow** property to specify a [nanoflow](/refguide/nanoflow/) that should be executed.

You can either select an existing nanoflow or create a new nanoflow by clicking the **New** button from the **Select Nanoflow** dialog box.

In Studio Pro 10.4.0 and above, when creating a new nanoflow, a dialog box is shown where you can set the name and select parameters for the new nanoflow. You can choose the data view, snippet, page parameter, or available selection from which the parameter must be created in the new nanoflow.

If there is nothing to pass to the new nanoflow, then a dialog box is shown where you can only specify the name of the nanoflow.

### Open Link {#open-link}

The **Open link** event triggers an action based on a link type, some of which are specific to mobile devices. The following properties are specific for this event:

* **Link Type** – the type of action triggered when pressing the button. For information on available link types, see the [Link Types](#on-click-link-type) section below. 
* **Address** – usage of the address property depends on the chosen link type and whether you want to use a literal or to use the value of an attribute.
    * **Use literal value** – allows you to enter a fixed address.
    * **Use attribute** – allows you to select an attribute which contains the value to be used as the address. In this case, the widget must have an entity as its context (for example, it is inside a data view).

#### Link Types {#on-click-link-type}

The table below described link types available for the **Open link** on click event:

| Value     | Description                                          | Example                                   |
| --------- | ---------------------------------------------------- | ----------------------------------------- |
| Web   *(default)*  | Navigate to a website URL                            | `https://mysubdomain.mydomain.tld/mypage` |
| Email | Specifies an email address to which to send an email | `firstname.secondname@mailprovider.tld`   |
| Call  | Starts a phone call to this number                   | `+1-202-555-0165`                         |
| Text  | Specifies a number to which to send a text message   | `+1-202-555-0112`                         |

{{% alert color="info" %}}
When you Specify  **Email**, **Call**, or **Text** options, the corresponding default app will be opened on the device when the action is triggered, for example, the default email client will be opened to compose a message.
{{%/alert %}}

### Create Object {#create-object}

The **Create object** event creates a new object. The following properties are specific for this event:

* **Entity (path)** – specifies which entity to create. It is also possible to choose an association (if available) from the context object. If an entity is configured, a new instance of the entity will be created. If an entity through association from the context object is configured, a new instance of the entity will be created and an object associated with the context will be created.
* **On {event} page** – specifies which [page](/refguide/page/) should be shown to allow the end-user to enter values for the new created object. This page must accept a context parameter object (for example, a data view) with the same entity or a sub-type of the created entity. **{event}** specifies which event is being used to trigger this action (**click**, for example).
* **Page settings** - opens a dialog box enabling you to configure the page in more detail. See the [Page Settings](#page-settings) section in **Show a page** for more information. 

### Save Changes {#save-changes}

The **Save changes** event commits all changes made to the objects in *Editable* widgets on the page. If a non-editable widget displays an object and it is modified by, for example, a microflow, the object is not committed. For information on editability, see the [Editability](/refguide/common-widget-properties/#editability) section in *Properties Common in the Page Editor*. 

The following properties are specific for this event:

* **Close page** – specifies whether the current page should be closed.
* **Auto-synchronize** – specifies whether synchronization should happen when the save button is clicked for a Mendix application running in an offline profile. When an object is saved in a Mendix application running in an offline profile it is stored in a local database until it can be synchronized with the server (for more information on the capabilities of offline apps, see [Offline First](/refguide/offline-first/). In practice, this means that uploading a new object to the server requires two distinct actions: saving the object and [synchronizing it](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/).

This event cannot be used on pages that change [external entities](/refguide/external-entities/). Use the [Send External Object](/refguide/send-external-object/) activity to save changes to external entities.

### Cancel Changes {#cancel-changes}

The Cancel changes event rolls back all changes made on the page. 

Set the **Close page** property to indicate whether the current page should be closed.

### Close Page {#close-page}

The **Close page** event closes a pop-up window (for pop-up pages) or navigates to the previously visited page (for content pages).

### Delete object(s) {#delete-objects}

When placed in the control bar of a [data grid](/refguide/data-grid/), [template grid](/refguide/template-grid/), or [reference set selector](/refguide/reference-set-selector/) the **Delete object(s)** event will delete the selected objects.

In other situations, the user can select which objects to delete. The object can be from any surrounding data container, [snippet parameter](/refguide/snippet/), [page parameter](/refguide/page-properties/#parameters) or selections of [pluggable widgets](/refguide/mendix-client/#pluggable-widgets) (for example a [Data Grid 2](/appstore/modules/data-grid-2/) or [Gallery](/appstore/modules/gallery/) widget).

{{% alert color="info" %}}
The option to configure which objects to delete was introduced in Studio Pro 10.4.0.
{{% /alert %}}

This event cannot be used to delete [external objects](/refguide/external-entities/). Use a microflow with a [Delete External Object](/refguide/delete-external-object/) activity to delete external objects.

Set the **Close page** property to indicate whether the current page should be closed.

### Synchronize {#synchronize}

The **Synchronize** event [synchronizes](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/) the data stored locally on your device with the server database.

### Sign Out {#sign-out}

The **Sign out** event signs the currently signed-in user out. When no user is signed in, no action is performed.

### Call Workflow {#call-workflow}

The **Call workflow** event triggers the specified workflow. 

An element calling this event should be placed in a data container connected to the [WorkflowContext entity](/refguide/workflow-parameters/#entity).

The following properties are specific for this event:

* **Workflow** – A [workflow](/refguide/workflows/) that should be executed.
* **Close page** – Specifies whether the current page should be closed.
* **Commit** – Specifies whether the data container object should be committed when running a workflow. 

### Show Workflow Admin Page {#show-workflow-page}

**Show workflow admin page** opens a workflow overview page. This page is typically used by a workflow administrator role to inspect status of a workflow instance and to manage the instance, for example, abort a workflow if required.

An element calling this event should be placed in a data container connected to the [System.Workflow](/refguide/workflow-engine/#system-workflow) entity. For more information, see the [Instance-Related Entities](/refguide/workflow-engine/#instance) section in *Workflow Engine*. 

### Show User Task Page {#show-user-task-page}

**Show user task page** opens an overview page set for the [user task](/refguide/user-task/) in properties. An element calling this event should be placed in a data container connected to the **System.WorkflowUserTask** entity. 

The following properties are specific for this event:

* **Auto-assign** – Assigns the [user task](/refguide/user-task/) automatically to the user who has opened the task page if the [user task](/refguide/user-task/) has not been assigned to anyone yet. This option is enabled by default. 
    {{% alert color="info" %}}Only the user who is assigned to the task can complete it (otherwise, it results in a Runtime error). If you choose to not automatically assign the user to the task when the page is opened, make sure that the user is assigned before the task is completed. For example, you can add the **Assign to me** button to the page. {{% /alert %}}

* **Who can open** – Specifies who is able to open the user task page when a user has already been assigned to it. 

    * **Assigned user** *(default)* – Only the user who is currently assigned to the task is able to open the user task page. 
    * **Users with access** – All users who have access to the [user task](/refguide/user-task/) can open the user task page. This option means that multiple users can open the page at the same time. Only the assigned user is able to complete the task, however, other users can make changes to the page, and the data will not be saved unless you add a Save button. This button saves data, but does not complete the task. Take into account that when two users have the task page open simultaneously, data from the user who saves changes the last is stored and this will overwrite data from the other user.

For more information, see the [Instance-Related Entities](/refguide/workflow-engine/#instance) section in *Workflow Engine*.

### Complete User Task {#complete-task}

The **Complete user task** event marks the specified user task in the workflow as completed.

An element calling this event should be placed in a data container connected to the [System.WorkflowUserTask](/refguide/workflow-engine/#system-workflow-user-task) entity. 

The following properties are specific for this event:

* **User task** – The [user task](/refguide/user-task/) that should be marked as completed.
* **Outcome** – Lists the outcomes of the selected [user task](/refguide/user-task/) and follows the selected outcome. If the user task has only one outcome, the **Default** is set as an outcome and the property cannot be edited. 
* **Close page** – Specifies whether the current page should be closed.
* **Commit** – Specifies whether the data container object should be committed when marking the task as completed.

## Read More

* [Pages](/refguide/pages/)
* [Page](/refguide/page/)
