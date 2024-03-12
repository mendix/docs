---
title: "Session Management"
url: /refguide/session-management/
category: "Mendix Runtime"
description: "Describes how sessions are established and managed."
tags: ["Runtime", "Mendix Client", "Login", "Session", "authentication"]
weight: 20
---

## 1 Introduction 

When a user login to an application, the Mendix Runtime establishes a session that persists as long as the user remains active within the application. The session is supposed to expire after a certain amount of inactivity, determined by the time elapsed since the last runtime request in accordance with the session timeout.

Mendix now utilizes authentication tokens instead of earlier approaches for long-lived sessions to keep them session active while users are not actively working in the app, improving security and providing a more unified solution for session management across various application types. Consequently, long-lived sessions are now supported for both online and offline applications, whether native or web-based.

### 2 Authentocation Token

### 2.1 Enable Authentication Token

We now support a new core client login API, `login2`, that allows you to pass an extra parameter, `useAuthToken`. You can pass `true` to enable authentication token or `false` to disable it. When the runtime receives this parameter during the login action, it adds an HttpOnly cookie `useAuthToken` indicating that an authentication token should be generated in the later `get_session_data` action.

With the introduction of this new core login API, You can begin modeling your login page to utilize the authentication token. Additionally, you can provide end users the option to decide whether they want to be remembered or not.

### 2.2 Authentication Token Generation

When the runtime receives the `get_session_data`, it checks the existence of the `useAuthToken` cookies. If present, it adds an additional HttpOnly cookie holding the generated unique authentication token `authtoken`. This token is then used in the subsequent actions to authenticate the user and extend the session upon its expiration.

### 2.3 Authentication Token Expiry

There is a custom runtime setting, `com.mendix.webui.HybridAppLoginTimeOut` that determines the validity of the authentication token. If no value is set, the token remains valid for one year.

### 3 Application Behaviour

### 3.1 Native and Offline PWA Applications

This feature maintains backward compatibility, so we preserve the previous session management approach for existing applications. For upgraded offline applications, whether native or web, that currently use the old login API, `login`, are now supposed to use the new authentication token system by default. You can always disable this behaviour by using the new API, login2, and setting the useAuthToken parameter to false.

### 4.1 Offline PWAs

The key change is that Mendix now use authentication tokens to reinitialize the session  instead of the previous approach of keeping the users logged in for a longer period.

### 5.1 Native

The key change is that Mendix now use HTTPOnly cookie to hold the authentication token instead of storing it on the device. This enhances security, as these cookies are inaccessible to anything other than the server.

### Client-Runtime Session Management Flow

{{< figure src="/attachments/refguide/runtime/session.png" alt="The Session Management Flow between client and the runtime." >}}

This diagram illustrates the interaction between the client and the runtime to initilize or retrieve the session.
