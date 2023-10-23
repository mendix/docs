---
title: "Logic Editors Beta"
linktitle: "Logic Editors Beta"
url: /refguide/logic-editors-beta/
weight: 5
description: "Describes the functionalities of the Beta version of the redesigned microflows, nanoflows, and rules editors."
tags: ["beta", "logic bot", "mendix assist", "assist", "mx assist", "logic", "logic editors", "microflow", "nanoflow", "keyboard navigation", "shortcut"]
---

## 1 Introduction

We are redesigning the logic editors (microflows, nanoflows, and rules) to bring the user journey to the next level. In the Beta versions of the logic editors, we have enhanced the usability of the [MxAssist Logic Bot](#logic-bot), added more support for [keyboard navigation](#keyboard-navigation), and invested in [smaller details](#miscellaneous) to ensure an even smoother developer experience with Mendix. For more information on these functionalities, see the sections below. For more information on Beta features, see [Beta Releases](/releasenotes/beta-features/).

The Beta editors are available to try out in Studio Pro 10.4.0 and can be activated in two ways:

* To try out the Beta version once, use the toggle in the top toolbar of the editor to switch between the **Classic version** and the **Beta version**. This only affects the current document. Other microflow and nanoflow editors will still start with the **Classic version**.

  {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/beta-toggle.png" >}}

* To edit microflows and nanoflows in the Beta editors by default, open the Studio Pro preferences and check **Use the Beta Version as the default editor** on the **New Features** tab.

## 2 Modeling Using MxAssist Logic Bot {#logic-bot}

MxAssist Logic Bot menu has been refreshed completely in the Beta logic editors. It now provides better parametrized and AI-assisted suggestions, smart search, and keyboard-based navigation.

When you create a microflow or a nanoflow, a Logic Bot dialog box is shown with recommendations of objects or activities to insert. This list initially contains the top 10 contextual suggestions. You can select an element directly from the recommendation list:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/initial-recommendations.png" >}}

You can also type in the search box to search for the elements that you want to add to the flow. MxAssist Logic Bot works with fuzzy search, which means that it finds direct matches first and then any matches in the recommendations. For instance, you can use `cr ob`  to search for the recommendations that contain **Create Object**.

The search is based on your microflow or nanoflow parameters, domain model entities, or the documents in your app. You can search for generic activities or elements from the toolbox:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/search-toolbox.png" >}}

You can search for sub-actions of an aggregate list or list operation activity, such as sum, count, or average:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/search-sub-actions.png" >}}

You can also use the search to call microflows or nanoflows with a concrete document:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/search-microflows-nanoflows.png" >}}

Choose a suggestion with the arrow keys and press the <kbd>Enter</kbd> key to accept it. The suggested element will be added to the flow and the Logic Bot will open on the next flow so that you can continue adding activities.

To open the properties dialog box after adding a suggested element, accept the suggestion with <kbd>Shift+Enter</kbd>. After closing the properties dialog box, the Logic Bot will open on the next flow.

When you want to view recommendations on a particular flow, you can hover the mouse over that flow and click on the blue circle or navigate to it with the keyboard and press <kbd>Enter</kbd>.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/assist-bulb.png" >}}

## 3 Keyboard Navigation {#keyboard-navigation}

In the Beta logic editors, keyboard navigation has been improved. You can now also select flows with the keyboard. Pressing <kbd>Enter</kbd> when a flow is selected will open the Logic Bot dialog box, from which you can insert activities.

The tables in the following sub-sections present the keys that can be used for navigating and manipulating microflows and nanoflows.

### 3.1 Selection

| Key | Effect |
| --- | --- |
| Arrow Keys | Select nearby element (activity, event, loop or parameter) in the direction of the arrow. |
| <kbd>Home</kbd> | Select the start event. |
| <kbd>End</kbd> | Select the first end event. |
| <kbd>Ctrl</kbd> + <kbd>a</kbd> | Select all elements. |
| <kbd>Tab</kbd> | If a loop is selected, the first element inside the loop will be selected. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | If an element inside a loop is selected, the loop itself will be selected. |

### 3.2 Navigation

| Key | Effect |
| --- | --- |
| mouse scroll | Scroll up/down. |
| <kbd>Shift</kbd> + mouse scroll | Scroll left/right. |
| <kbd>Space</kbd> + mouse button | Drag screen.  |
| <kbd>Ctrl</kbd> + <kbd>+</kbd>/<kbd>-</kbd> | Zoom in/out.  |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset zoom level to 100%. |
| <kbd>Ctrl</kbd> + mouse scroll | Zoom in/out. |

### 3.3 Element Manipulation

| Key | Effect |
| --- | --- |
| <kbd>Enter</kbd> - on an element | If an element is selected, edit its properties. |
| <kbd>Enter</kbd> - on a flow arrow | If a flow arrow is selected, open the Logic Bot dialog box. |
| <kbd>Enter</kbd> - on a Logic Bot suggestion list item | The selected item is added on the flow arrow. The Logic Bot dialog box is shown again for the next action to be added. |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> (or <kbd>Shift</kbd> + mouse click) - on a Logic Bot suggestion list item| The selected item is added on the flow arrow. The element’s property dialog box is opened. |
| <kbd>F2</kbd> | Rename the variable returned by the selected element. |
| <kbd>Shift</kbd> + <kbd>F2</kbd> | Edit the caption of the selected element. |
| Context-menu key | Open the context-menu for the currently selected element. |

## 4 Miscellaneous Improvements {#miscellaneous}

We have also invested in the smaller details to make the editor even smoother to use. You can use now common patterns like unlimited canvas, enhanced zoom and scroll, and a snap-to-flow to make new activities from the toolbox and toolbar always well aligned in your flow.

## 5 Read More

* [Microflows and Nanoflows](/refguide/microflows-and-nanoflows/)
* [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/)
