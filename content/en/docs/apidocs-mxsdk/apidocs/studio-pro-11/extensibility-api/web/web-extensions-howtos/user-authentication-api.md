---
title: "Query User Authentication Using Web API"
linktitle: "User Authentication"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/user-authentication-api/
description: "Describes how to query the signed-in user's authentication state and profile in Studio Pro using the Web Extensibility API."
---

## Introduction

This document describes how to query the signed-in user's authentication state and profile in Studio Pro, and how to react to the user signing in or out.

The user authentication API is available to extensions through `studioPro.ui.userAuthentication`. It lets you check whether a user is signed in, retrieve the user's profile information, and subscribe to `signedIn` and `signedOut` events.

## Prerequisites

Before starting this how-to, complete the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/), message boxes as described in [Show a Message Box Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/), and notifications as described in [Show a Pop-up Notification Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/).

## Showing the User's Authentication State

With the user authentication API, you can create a menu item that shows whether a user is currently signed in and, when signed in, displays the user's profile details. You also subscribe to the `signedIn` and `signedOut` events to show a notification whenever the authentication state changes.

Replace your `src/main/index.ts` file with the following:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        const userAuthenticationApi = studioPro.ui.userAuthentication;
        const menuApi = studioPro.ui.extensionsMenu;
        const messageBoxApi = studioPro.ui.messageBoxes;
        const notificationsApi = studioPro.ui.notifications;

        const menuId = "user-authentication-menu";

        // React to the user signing in.
        userAuthenticationApi.addEventListener("signedIn", async () => {
            const profileResult = await userAuthenticationApi.getUserProfile();
            const displayName = profileResult.result === "success" ? profileResult.profile.displayName : "unknown user";

            await notificationsApi.show({
                title: "Signed in",
                message: `User ${displayName} signed in`,
                displayDurationInSeconds: 4
            });
        });

        // React to the user signing out.
        userAuthenticationApi.addEventListener("signedOut", async () => {
            await notificationsApi.show({
                title: "Signed out",
                message: "User signed out",
                displayDurationInSeconds: 4
            });
        });

        const menu: Menu = {
            caption: "Current user authentication",
            menuId,
            action: async () => {
                const isSignedIn = await userAuthenticationApi.isSignedIn();

                if (!isSignedIn) {
                    await messageBoxApi.show("info", "Not signed in");
                    return;
                }

                const profileResult = await userAuthenticationApi.getUserProfile();

                if (profileResult.result === "success") {
                    await messageBoxApi.show(
                        "info",
                        `Display name: ${profileResult.profile.displayName}\nUsername: ${profileResult.profile.userName}`
                    );
                }
            }
        };

        await menuApi.add(menu);
    }
};
```

This code does the following:

* It uses `userAuthenticationApi` from `studioPro.ui.userAuthentication` to access the user authentication API.
* It subscribes to the `signedIn` event to show a notification with the user's display name whenever a user signs in.
* It subscribes to the `signedOut` event to show a notification whenever a user signs out.
* It adds a menu item named **Current user authentication** that checks `isSignedIn()` and, when a user is signed in, shows the user's display name and username in a message box.

## User Authentication API

This API provides events and methods that relate to the signed-in user's authentication state and profile.

* `signedIn`
* `signedOut`
* `isSignedIn`
* `getUserProfile`

| Event        | Description                   | Payload        |
|--------------|-------------------------------|----------------|
| `signedIn`   | Triggers when a user signs in. | Empty object  |
| `signedOut`  | Triggers when a user signs out. | Empty object |

### `UserProfile` Properties

| Property      | Type   | Description                                |
|---------------|--------|--------------------------------------------|
| `userName`    | string | The user's username.                        |
| `displayName` | string | The user's display name.                    |
| `avatarUrl`   | string | A URL pointing to the user's avatar image.  |

### How to Listen to an Event

```typescript
studioPro.ui.userAuthentication.addEventListener("signedIn", async () => {
    ...
}
studioPro.ui.userAuthentication.addEventListener("signedOut", async () => {
    ...
}
```

### Checking Whether a User Is Signed In

This API provides an `isSignedIn` method that returns a `Promise<boolean>` that resolves to `true` when a user is currently signed in to Studio Pro, and `false` otherwise.

### Getting the User Profile

This API provides a `getUserProfile` method that returns a `Promise<UserProfileResult>` describing the signed-in user's profile. The result is a discriminated union on the `result` property:

* `{ result: "error" }` – the profile could not be retrieved.
* `{ result: "userNotSignedIn" }` – no user is currently signed in.
* `{ result: "success"; profile: UserProfile }` – the profile was retrieved successfully, where `UserProfile` contains the properties listed above.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
