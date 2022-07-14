---
title: "On Click Event & Events Section"
url: /refguide8/on-click-event/
weight: 130
tags: ["studio pro", "events section", "properties", "widget", "on click", "action", "on click event"]
aliases:
    - /refguide8/opening-pages.html
    - /refguide8/starting-microflows.html
    - /refguide8/opening-pages
    - /refguide8/starting-microflows
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/on-click-event.pdf).
{{% /alert %}}

## 1 Introduction

Events specify actions which can be triggered when the end-user interacts with a widget. This interaction can occur in a number of ways:

* [On click](#on-click) – this is the most common interaction and can be used with many widgets
* [On change](#on-change) – for input widgets
* [On enter](#on-enter) – for input widgets
* [On leave](#on-leave) – for input widgets

## 2 Triggering Actions

### 2.1 On Click {#on-click}

An **On click** event specifies an event that is executed when a user clicks a widget. Often the **On click** property is a part of the **Events** section in properties. For example, you can specify that when a user clicks a customer's profile image, the page with this customer's details will open:

{{< figure src="/attachments/refguide8/modeling/pages/on-click-event/on-click-event-example.png"   width="350"  >}}

An on-click event is common for many widgets (for example, image, buttons, list view). 

The **On click** property specifies what [action](#actions) is executed when a user click a widget.

#### 2.1.1 Disabled During Action

This property is only shown when **Call a microflow** or **Call a nanoflow** is selected as the on-click event. Selecting **Disabled during action** disables the button until the action is completed or failed.

### 2.2 On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

### 2.3 On Enter {#on-enter}

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

### 2.4 On Leave {#on-leave}

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

## 3 Event Actions {#actions}

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
* [Delete](#delete) 
* [Synchronize](#synchronize) 
* [Sign out](#sign-out) 

### 3.1 Do Nothing {#do-nothing}

No action is taken. This option is useful for setting up a page without defining the underlying functionality yet.

### 3.2 Show a Page {#show-page}

The **Show a page** event opens the specified page. Select the page which opens using the options below:

* **Page** – a [page](/refguide8/page/) that should open.

* **Page title** – the page you open can be given a unique title, depending on where you open it from. This allows you to re-use the same page for different purposes. For example, by setting the title to **New Customer** from one button and **Edit Customer** from another, you can use the same page for editing new and existing customers.

    This option is activated by checking the **Override page title** check box in the **Edit** dialog box:

    {{< figure src="/attachments/refguide8/modeling/pages/on-click-event/page-title-property.png" alt="Page Title Property" >}}

* **Page for specializations** – allows you to configure a different page for each specialization of the context object. If this action is placed inside a data view, it is possible to configure different page(s) for each specialization of the data view object. If this action is placed in a data grid, it is possible to configure different pages for each specialization of the data grid entity. This setting is not shown when there is not a context object or when the context object has no specializations.

### 3.3 Call a Microflow {#call-microflow}

The **Call a microflow** event executes the specified microflow.

{{% alert color="info" %}}

When setting **Call a microflow** as an action for the **On change**, **On enter**, or **On leave** event of a widget, note that microflows require some time to complete. Any changes to the current form made in the meantime (for example, changing values in input widgets) will be overwritten by the results of the microflow.
Therefore, it is not recommended to change entities/attributes on the current page in a microflow triggered by an **On change**, **On enter**, or **On leave** event.

{{%/alert %}}

The following settings are specific for this event:

#### 3.3.1 Microflow {#microflow}

The [microflow](/refguide8/microflow/) that should be executed.

#### 3.3.2 Microflow Settings

**Microflow settings** opens a dialog box enabling you to specify what parameters will be passed to the microflow and how the microflow will be run.

{{< figure src="/attachments/refguide8/modeling/pages/on-click-event/microflow-settings.png" alt="Microflow settings dialog" >}}

##### 3.3.2.1 Microflow

This duplicates the [Microflow](#microflow) specified above.

##### 3.3.2.2 Microflow Arguments

**Microflow arguments** are automatically configured based on the parameters of the selected microflow and the available arguments. In general arguments are taken from any enclosing data widget. If the data widget enclosing the widget calling a microflow is inside another (nested) data widget, then objects from that data widget and any others in which it is nested can also be passed.

If the microflow is triggered within a grid and has an object list parameter, the objects which are passed in the list depend on the selection mode of the grid. Simple multi-selection allows for either all rows or  selection, and defaults to selection. This can be configured via the drop-down in the microflow settings page.

##### 3.3.2.3 Microflow Call Type

**Microflow call type** specifies whether the microflow is executed synchronously or asynchronously.

* **Synchronous** *(default)* – The client waits until the microflow is done executing

* **Asynchronous**

    * The client executes the microflow but does not wait for the result

    * The client checks the server every ten seconds to see whether the microflow is done executing

    * Only set the call type to asynchronous if you experience problems — sometimes, if a request takes too long to handle, the request will be sent again by an (impatient) proxy server

##### 3.3.2.4 Show Progress Bar

**Show progress bar** specifies whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

| Value | Description |
| --- | --- |
| None | No progress bar is shown. |
| Non-Blocking | A progress bar is shown, but the end-user can continue working. |
| Blocking | A progress bar is shown and the end-user must wait until the microflow is done. |

{{% alert color="warning" %}}
Non-blocking progress bars are shown with a delay of half a second. If the execution of your microflow takes less than half a second, the progress bar will not be shown at all. Blocking progress bars are shown immediately.
{{% /alert %}}

##### 3.3.2.5 Progress Message

If a progress bar is shown, **Progress message** is the text which is shown next to the progress bar.

##### 3.3.2.6 Ask Confirmation

If **Ask Confirmation** is set to **Yes**, the end-user will be asked for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete.

The user will be prompted with the text set in [Question](#question), below. The window title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

The default value is **No**.

##### 3.3.2.7 Question {#question}

If **Ask confirmation** is set to yes, **Question** is what is shown to the user. Ensure that the question asked is clear and that the captions set on the buttons are unambiguous.

For example, *Are you sure you want to empty the trash can?*

##### 3.3.2.8 Proceed Button Caption

If **Ask confirmation** is set to yes, this is the caption for the button that proceeds with the execution of the microflow.

For example, *Empty it*.

##### 3.3.2.9 Cancel Button Caption

If **Ask confirmation** is set to yes, this is the caption for the button that cancels the execution of the microflow.

For example, *Do not empty*.

##### 3.3.2.10 Maintain Selection After Microflow

For buttons which call a microflow from inside a grid, **Maintain selection after microflow** specifies whether the current selection of rows in the grid should be maintained after executing the microflow.

##### 3.3.2.11 Abort on Validation Errors

For microflows that are used within a data widget, setting **Abort on Validation Errors** to **Yes** forces widget validations to be performed _before_ executing the microflow. If the validations fail, the microflow will not be executed.

| Value | Description |
| --- | --- |
| Yes *(default)*| This will prevent the microflow from executing if there are any validation errors on the page. |
| Only for this widget | This will prevent the microflow from executing if there are validation errors in the current widget. |
| No | The microflow will always be executed. |

### 3.4 Call a Nanoflow {#call-nanoflow}

The **Call a nanoflow** event executes the specified nanoflow. 

Set the **Nanoflow** property to specify a [nanoflow](/refguide8/nanoflow/) that should be executed.

### 3.5 Open Link {#open-link}

The **Open link** event triggers an action based on a link type, some of which are specific to mobile devices. The following properties are specific for this event:

* **Link Type** – the type of action triggered when pressing the button. For information on available link types, see the [Link Types](#on-click-link-type) section below. 
* **Address** – usage of the address property depends on the chosen link type and whether you want to use a literal or to use the value of an attribute.
  * **Use literal value**  – allows you to enter a fixed address.
  * **Use attribute** – allows you to select an attribute which contains the value to be used as the address. In this case, the widget must have an entity as its context (for example, it is inside a data view).

#### 3.5.1 Link Types {#on-click-link-type}

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

### 3.6 Create Object {#create-object}

The **Create object** event creates a new object. The following properties are specific for this event:

* **Entity (path)** – specifies which entity to create. It is also possible to choose an association (if available) from the context object. If an entity is configured, a new instance of the entity will be created. If an entity through association from the context object is configured, a new instance of the entity will be created and an object associated with the context will be created.
* **On {event} page** – specifies which [page](/refguide8/page/) should be shown to allow the end-user to enter values for the new created object. This page must accept a context parameter object (for example, a data view) with the same entity or a sub-type of the created entity. **{event}** specifies which event is being used to trigger this action (**click**, for example).

### 3.7 Save Changes {#save-changes}

The **Save changes** event commits all changes made on the page. The following properties are specific for this event:

* **Close page** – specifies whether the current page should be closed.
* **Auto-synchronize** –  specifies whether synchronization should happen when the save button is clicked for a Mendix application running in an offline profile. When an object is saved in a Mendix application running in an offline profile it is stored in a local database until it can be synchronized with the server (for more information on the capabilities of offline apps, see [Offline First](/refguide8/offline-first/). In practice, this means that uploading a new object to the server requires two distinct actions: saving the object and [syncing it](/refguide8/offline-first/#synchronization).

### 3.8 Cancel Changes {#cancel-changes}

The Cancel changes event rolls back all changes made on the page. 

Set the **Close page** property to indicate whether the current page should be closed.

### 3.9 Close Page {#close-page}

The **Close page** event closes a pop-up window (for pop-up pages) or navigates to the previously visited page (for content pages).

### 3.10 Delete {#delete}

The **Delete event** deletes an object. Its behavior depends on a data container it is placed in. When placed in a data view, deletes the connected object; it does not delete objects in a nested data view unless configured through delete behavior. When placed in a data grid, template grid, or reference set selector control bar, it deletes the selected object(s). When placed inside a list view, it deletes the corresponding list view item.

Set the **Close page** property to indicate whether the current page should be closed.

### 3.11 Synchronize {#synchronize}

The **Synchronize** event [synchronizes](/refguide8/offline-first/#synchronization) the data stored locally on your device with the server database.

### 3.12 Sign Out {#sign-out}

The **Sign out** event signs the currently signed-in user out. When no user is signed in, no action is performed.

## 4 Read More

* [Pages](/refguide8/pages/)
* [Page](/refguide8/page/)
