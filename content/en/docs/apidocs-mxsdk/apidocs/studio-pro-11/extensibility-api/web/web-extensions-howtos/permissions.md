---
title: "Extension Permissions in Overview Pane"
linktitle: "Extension Permissions"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/
description: "Describes how the permission system works for web extensions in Studio Pro and explains how extensions request and users grant access to sensitive APIs."
---

## Introduction

Permissions allow extensions to request access to sensitive APIs or data that require explicit user consent.

{{% alert color="info" %}}
Extension permissions were introduced in version 11.9.0.
{{% /alert %}}

## How Permissions Work

Web extensions can request permissions to access sensitive functionality. The permission system follows these principles:

* **Opt-in by default** – Extensions cannot access protected APIs unless you request permission and the extension user grants it.
* **User control** – You decide which permissions to grant through the Extensions Overview pane in Studio Pro.
* **Per-project settings** – Permission grants are stored per project, so a user’s approval for an extension applies only within that app. This gives them the flexibility to grant a permission in one project and choose different settings for the same extension in another.

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

When a user installs an extension that requests permissions, they can manage those permissions through the Extensions Overview pane:

1. Open Studio Pro and load an app with the extension installed.
2. Go to **View** > **Extensions Overview**.
3. Find the extension in the list.
4. In the **Permissions** section under the extension details, select or clear the checkbox next to each permission to grant or revoke access.

## Reacting to Permission Changes

Extensions can subscribe to the `permissionsChanged` event on `IExtensionPermissionsApi` to be notified whenever the user grants or revokes permissions for any extension. This allows you to reactively update your extension's behavior without requiring a restart.

The event carries no arguments. When it fires, call `getPermissions()` to retrieve the current state.
Update your `main/index.ts` to the following to detect when a permission changes.

```typescript
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        const permissionsApi = studioPro.ui.extensionPermissions;

        let currentPermissions = await permissionsApi.getPermissions();
        
        permissionsApi.addEventListener("permissionsChanged", async () => {
            const permissionsAfterChange = await permissionsApi.getPermissions();

            for (const permission of permissionsAfterChange) {
                if (currentPermissions.find(p => p.name === permission.name)?.granted !== permission.granted) {
                    if (permission.name === "runtime-configuration-private" && permission.granted === false) {
                        studioPro.ui.notifications.show({
                            title: "This extension requires a permission",
                            message: "We need the 'runtime-configuration-private' permission to be granted",
                            displayDurationInSeconds: 3
                        });
                    }
                }
            }

            currentPermissions = permissionsAfterChange;
        });
    }
};
```
The `permissionsChanged` event fires for all extensions whenever any permission is granted or revoked anywhere in the system, not just for your extension. This means multiple extensions may respond to the same event simultaneously.

To check if a change affects your extension, compare the old granted state against the new one for each permission name your extension declared. Without this check, your extension fires a notification every time any permission changes, including changes unrelated to your extension.

## Available Permissions

The following permissions are available for web extensions:

| Permission | Description |
|------------|-------------|
| `runtime-configuration-private` | Allows the extension to access the values of private constants from the active runtime configuration. Without this permission, private constants are returned with `isPrivate: true` and no value. |

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
