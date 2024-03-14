---
title: "Session Management"
url: /refguide/session-management/
category: "Mendix Runtime"
description: "Describes how sessions are established and managed."
tags: ["Runtime", "Mendix Client", "Login", "Session", "authentication"]
weight: 35
---

## 1 Introduction 

When an end-user signs in to an application, the Mendix Runtime establishes a session that persists as long as the end-user remains active within the application. The session expires after a certain amount of inactivity, determined by the time elapsed since the last runtime request in accordance with the session timeout.

Mendix versions 10.9.0 and above, use authentication tokens to keep a session active while users are not actively working in the app. This replaces earlier approaches for long-lived sessions in offline-first apps, improving security. This approach provides a more unified solution for session management, allowing long-lived sessions in  both online and offline applications, whether native or web-based.

If you create a new app in Mendix version 10.9.0 or above, session management will work as described below.

If you are using an app created in a version below 10.9.0, then long-lived sessions will be used for offline-first apps. See the [Sessions](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/#sessions) section of *Progressive Web App* for more information.

### 2 Authentication Token

If you are using standard Mendix sign in flows in version 10.9.0 or above, the authentication token will be generated automatically. If you have custom JavaScript or Java sign in code, you will have to ensure that it uses the `login2` API if you want to create authentication tokens. 

### 2.1 Enable Authentication Token

{{% todo %}}Need a link to login2 api documentation{{% /todo %}}

The `login2` API allows you to pass the parameter `useAuthToken`. The value `true` enables the authentication token, `false` disables it. If the login action passes `true` to the runtime, the runtime adds an HttpOnly cookie `useAuthToken` indicating that an authentication token should be generated during the client startup.

Your login page can then utilize the authentication token. You can also provide end-users the option to decide whether they want to be remembered or not.

### 2.2 Authentication Token Generation

When the runtime receives the `get_session_data` request, it checks the existence of the `useAuthToken` cookies. If present, it adds an additional HttpOnly cookie holding the generated unique authentication token `authtoken`. This token is then used in the subsequent actions to authenticate the user and extend the session upon its expiration.

This approach enhances security, as these cookies are inaccessible to anything other than the server.

### 2.3 Authentication Token Expiry

There is a custom runtime setting, [`com.mendix.webui.HybridAppLoginTimeOut`](/refguide/custom-settings/#commendixwebuiHybridAppLoginTimeOut) that determines how long the authentication token is valid for. If no value is set, the token remains valid for one year.

### 3 Application Behavior

### 3.1 Native and Offline PWA Applications

This feature maintains backward compatibility, so we preserve the previous session management approach for existing applications. For upgraded offline applications, whether native or web, that currently use the old login API, `login`, are now supposed to use the new authentication token system by default. You can always disable this behavior by using the new API, login2, and setting the useAuthToken parameter to false.

### 3.2 Client-Runtime Session Management Flow

{{< figure src="/attachments/refguide/runtime/session.png" alt="The Session Management Flow between client and the runtime." >}}

This diagram illustrates the interaction between the client and the runtime to initialize or retrieve the session.
