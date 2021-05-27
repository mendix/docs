---
title: "Web Actions"
category: "Modules"
description: "Describes the configuration and usage of the Web Actions module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "platform support", "web actions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

The [Web Actions](https://appstore.home.mendix.com/link/app/114337/) module contains the following actions:

| Category | Action |
| --- | --- |
| Focus next | Moves the keyboard focus to the next element that can be focused. |
| Focus previous | Moves the keyboard focus to the previous element that can be focused. |
| Scroll to | Scrolls the window to make a targeted element visible. For this action, you need to provide a target selector. This target could be an element containing a class (for example, `.mx-class-name`, `.my-class-name`), an HTML element (for example, `td`, `div`, `a`), or an element ID (for example, `#my-element-id`).  |
| Set focus | Sets the focus to the element found with the selector. The element should be able to hold focus like a link, button, or input. For this action, you need to provide a target selector. This target could be an element containing a class (for example, `.mx-class-name`, `.my-class-name`), an HTML element (for example, `td`, `div`, `a`), or an element ID (for example, `#my-element-id`). |
| Take picture | Allows users to take a picture from the back and front camera in a web or PWA app. |

## 1 How to use

### Take picture

For the take picture action you will need to create an entity that extends `System.Image` entity. Following the example below.

![Example entity](attachments/web-actions/entity.png)

Next step is drag and drop the Take picture action from Studio Pro toolbar to your nanoflow like the example below. For that you need to pass an object for the action.

![Example nanoflow](attachments/web-actions/nanoflow.png)

In the action you need to select which object are you passing to the action to fill with the image properties. 

![Properties](attachments/web-actions/properties.png)

We also provide an option to show a confirmation screen where users can either choose to accept or retake the picture,

![Confirmation Screen](attachments/web-actions/confirmation.png)

The value returned from the action is a `Boolean` so in the end of the execution you can check if the picture was taken or not following the example below.

![Check](attachments/web-actions/check.png)
