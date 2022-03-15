---
title: "Web Actions"
url: /appstore/modules/web-actions/
category: "Modules"
description: "Describes the configuration and usage of the Web Actions module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "platform support", "web actions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Web Actions](https://marketplace.mendix.com/link/component/114337/) module contains the following actions:

| Category | Action |
| --- | --- |
| Focus next | Moves the keyboard focus to the next element that can be focused. |
| Focus previous | Moves the keyboard focus to the previous element that can be focused. |
| Scroll to | Scrolls the window to make a targeted element visible. For this action, you need to provide a target selector. This target could be an element containing a class (for example, `.mx-class-name`, `.my-class-name`), an HTML element (for example, `td`, `div`, `a`), or an element ID (for example, `#my-element-id`).  |
| Set focus | Sets the focus to the element found with the selector. The element should be able to hold focus like a link, button, or input. For this action, you need to provide a target selector. This target could be an element containing a class (for example, `.mx-class-name`, `.my-class-name`), an HTML element (for example, `td`, `div`, `a`), or an element ID (for example, `#my-element-id`). |
| Take picture | Allows users to take a picture from the back and front camera in a web or PWA app. |

## 2 Usage

To take a picture, follow these steps:

1.  To use the **Take picture** action, create an entity that extends the **System.Image** entity:

    ![Example entity](/attachments/appstore/modules/web-actions/entity.png)

2.  Drag the **Take picture** action from the Studio Pro toolbar to your nanoflow like in the example below. For that you need to pass an object for the action:

    ![Example nanoflow](/attachments/appstore/modules/web-actions/nanoflow.png)

3.  Double-click the **Take picture** action and select which object you pass to the action to fill with the image properties:

    ![Properties](/attachments/appstore/modules/web-actions/properties.png)

4.  If needed, configure an option which shows a confirmation screen allowing users to accept or retake the picture:

    ![Confirmation Screen](/attachments/appstore/modules/web-actions/confirmation.png)

5.  After the execution, check if the picture was taken or not. The value returned from the action is a Boolean:

    ![Check](/attachments/appstore/modules/web-actions/check.png)
