---
title: "Extension Permissions in Overview Pane"
linktitle: "Extension Permissions"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/
---

## Introduction

This how-to describes how the permission system works for web extensions in Studio Pro. Permissions allow extensions to request access to sensitive APIs or data that require explicit user consent.

{{% alert color="info" %}}
Extension permissions were introduced in version 11.9.0.
{{% /alert %}}

## How Permissions Work

Web extensions can request permissions to access sensitive functionality. The permission system follows these principles:

* **Opt-in by default** — Extensions cannot access protected APIs unless you request persmission and the extension user grants it
* **User control** — You decide which permissions to grant through the Extensions Overview pane in Studio Pro
* **Per-project settings** — Permission grants are stored per project, so a user’s approval for an extension applies only within that app. This gives them the flexibility to grant a permission in one project and choose different settings for the same extension in another.

## Requesting Permissions

To request a permission, declare it in your extension's `package.json` file under the `mendix.permissions` object:

```json
{
  "mendixComponent": {
    "entryPoints": {
      "main": "main.js",
      "ui": {
        "tab": "tab.js"
      }
    },
    "permissions": {
      "runtime-configuration-private": true
    }
  }
}
```

Setting a permission to **true** indicates that your extension requests this permission. The user must grant it before your extension can use the protected functionality. Default: *False*

## Granting Permissions (User Flow)

When a user installs an extension that requests permissions, they can manage those permissions through the Extensions Overview pane. Follow the steps below:

1. Open Studio Pro and load an app with the extension installed.
2. Go to **View** > **Extensions Overview** to open the Extensions Overview pane.
3. Find the extension in the list. Under the extension details, the **Permissions** section displays the requested permissions.
4. Check or uncheck the checkbox next to each permission to grant or revoke access.

## Available Permissions

The following permissions are available for web extensions:

| Permission | Description |
|------------|-------------|
| `runtime-configuration-private` | Allows the extension to access the values of private constants from the active runtime configuration. Without this permission, private constants are returned with `isPrivate: true` and no value. |

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
