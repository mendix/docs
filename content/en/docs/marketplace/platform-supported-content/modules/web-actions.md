---
title: "Web Actions"
url: /appstore/modules/web-actions/
description: "Describes the configuration and usage of the Web Actions module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Web Actions](https://marketplace.mendix.com/link/component/114337/) module contains the following actions:

| Action | Description |
| --- | --- |
| Focus next | Moves the keyboard focus to the next element that can be focused. |
| Focus previous | Moves the keyboard focus to the previous element that can be focused. |
| Scroll to | Scrolls the window to make a targeted element visible. For this action, you need to provide a target selector. This target could be an element containing a class (for example, `.mx-class-name`, `.my-class-name`), an HTML element (for example, `td`, `div`, `a`), or an element ID (for example, `#my-element-id`).  |
| Set focus | Sets the focus to the element found with the selector. The element should be able to hold focus like a link, button, or input. If the element cannot hold focus, the first element inside it that can be focused receives the focus. For this action, you need to provide a target selector. This target could be an element containing a class (for example, `.mx-class-name`, `.my-class-name`), an HTML element (for example, `td`, `div`, `a`), or an element ID (for example, `#my-element-id`). |
| Take picture | Allows users to take a picture from the back and front camera in a web or PWA app. For more information, see the [Usage](#usage) section below. |
| Set cookie | Sets a browser cookie. For this action, you need to provide a key (the cookie name) and a value. |
| Read cookie | Returns the value of the browser cookie with the given key as a String. If the cookie does not exist, the action returns an empty String. |
| Set favicon | Replaces the favicons of the app with the icons at the given URLs. For this action, you need to provide the URLs of a 16x16 icon, a 32x32 icon, and an Apple touch icon. |

{{% alert color="warning" %}}
When using Studio Pro on Mac, the **Take picture** action sometimes makes your device's screen turn black due to a bug. Fix this bug by upgrading to an iOS version above 17.3.1.
{{% /alert %}}

## Usage {#usage}

To take a picture, follow these steps:

1. To use the **Take picture** action, create an entity that extends the **System.Image** entity:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/web-actions/entity.png" alt="Example entity" class="no-border" >}}

2. Drag the **Take picture** action from the Studio Pro toolbar into your nanoflow like in the example below. For that you need to pass an object for the action:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/web-actions/nanoflow.png" alt="Example nanoflow" class="no-border" >}}

3. Double-click the **Take picture** action and select which object you pass to the action to fill with the image properties:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/web-actions/properties.png" alt="Properties" class="no-border" >}}

4. If needed, configure an option which shows a confirmation screen allowing users to accept or retake the picture:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/web-actions/confirmation.png" alt="Confirmation Screen" class="no-border" >}}

5. Optionally, set the picture quality. The available options are Original, Low, Medium, High, and Custom. The default picture quality is Medium. When you select Custom, provide a maximum width or a maximum height, or both. The picture is scaled to these maximum pixel dimensions, while maintaining the aspect ratio.

6. After the execution, check if the picture was taken or not. The value returned from the action is a Boolean. It is **true** when the picture is saved to the object and the object is committed, and **false** when the user closes the camera without saving a picture or the camera cannot be started:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/web-actions/check.png" alt="Check" class="no-border" >}}

{{% alert color="info" %}}
The storage of pictures is managed by the browser's memory cache. This cache is responsible for temporarily storing image files, allowing the browser to retrieve them quickly upon subsequent requests.
{{% /alert %}}

## Strict CSP Compatibility

This module is not yet fully compliant with strict content security policy (CSP). If the Take picture action is used with strict CSP, it will result in visual defects.
