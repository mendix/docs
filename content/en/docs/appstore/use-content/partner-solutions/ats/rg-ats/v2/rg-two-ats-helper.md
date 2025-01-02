---
title: "ATS Helper"
url: /appstore/partner-solutions/ats/rg-two-ats-helper/
---

## Introduction

The ATS Helper is an inspection tool that provides the information needed to create test steps in your test cases or actions. With the ATS Helper, you identify widgets in the running application, and it determines the `mx-name` of the widget. This saves you from diving into the HTML source code or the application model.

## Installation

Install the ATS Helper by creating a bookmark in your browser. This bookmark loads the latest version of the ATS Helper from ATS and starts it.

Follow these steps to set the bookmark:

1. Open your ATS instance in the browser.
2. Log in with your account.
3. Open the information dialog by clicking **Information** ({{% icon name="info-circle" %}}) in the upper right corner of the screen:

    {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-ats-helper/information.png" class="no-border" >}}

4. Find the link that says **ATS Helper**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-ats-helper/info-dialog.png" class="no-border" >}}

5. Create a browser bookmark for this link with one of these methods:

    * Drag the link into your browser's bookmark bar
    * Right-click the link and select **Add bookmark for this link**

### Compatibility

The ATS Helper works in Firefox, Chrome, Edge, and Internet Explorer 11.

## Usage

### Starting the ATS Helper

Use the ATS Helper within the application under test. Follow these steps to load the helper in your application:

1. Open your application
2. Click the **ATS Helper** bookmark that you created before.

The following dialog box will appear on top of your application's UI:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-ats-helper/loaded.png" class="no-border" >}}

### Inspecting Widgets

To inspect a widget, press and hold <kbd>Ctrl</kbd> while moving your mouse pointer to a UI element.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-ats-helper/inspection.png" class="no-border" >}}

The ATS Helper will highlight the selected widget with a yellow border. The ATS Helper dialog box will show you the `Mx Name` as well as the **Mx Name Selector** properties.

If you release <kbd>Ctrl</kbd>, the widget will remain selected.

The properties shown by the ATS Helper are the following

| Property        | Description                              |
| --------------- | ---------------------------------------- |
| MxName          | The name of the widget. Required input for many actions |
| MxName Selector | The full CSS selector for the widget. Used for advanced test steps or custom actions. |

### Moving and Closing

You can drag and drop this dialog box with your mouse. To close the helper, press the ({{% icon name="remove" %}}) icon in the upper-right corner of the screen.
