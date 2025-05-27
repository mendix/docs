---
title: "Session Management"
url: /refguide/session-management/
description: "Describes how sessions are established and managed."
weight: 35
---

## Introduction 

When an end-user signs in to an application, the Mendix Runtime establishes a session that persists as long as the end-user remains active within the application. The session expires after a certain amount of inactivity, determined by the time elapsed since the last runtime request and the [session timeout](/refguide/custom-settings/#SessionTimeout).

You can use authentication tokens to keep a session active while your end-users are not actively working in the app.

This approach provides a unified solution for session management, allowing long-lived sessions to be used in online, as well as offline applications, whether native or web-based. For example, you could customize the sign in to an online app to provide a "remember me" function so that end-users do not have to provide their credentials again if their session expires.

## Authentication Token

Authentication tokens allow users to stay logged in for long periods of time. They store the authentication data of the user on the user's device and use that to automatically create a new session when the previous session is expired.

{{% alert color="warning" %}}
Authentication tokens cannot be used with a login processing relying on `login.html`. To make use of authentication tokens, [create a modeled sign-in page](/refguide/mobile/using-mobile-capabilities/auth-users/#model-the-sign-in-page) that uses the **Sign in** Nanoflow action or the [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api). For more information see [Working with Authentication Tokens](#work-with), below.
{{% /alert %}}

### Authentication Token Generation

When the runtime receives the `get_session_data` request, it checks the existence of the `useAuthToken` cookies. If present, it adds an additional HttpOnly cookie holding the generated unique authentication token `authtoken`. This token is then used in the subsequent actions to authenticate the user and extend the session when it expires.

This approach enhances security, as these cookies are inaccessible to anything other than the server.

### Enable Authentication Token

If you want to generate authentication tokens in your online app, you have to use the [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api). 

The `login` method of this API allows you to pass the parameter `useAuthToken`. The value `true` enables the authentication token, `false` disables it. If the login action passes `true` to the runtime, the runtime adds an HttpOnly cookie `useAuthToken` indicating that an authentication token should be generated during the client startup. 

You can also model your login page to provide end-users with a "remember me" option so they can decide whether they want to be remembered or not. For more information see [Working with Authentication Tokens](#work-with), below.

#### Working with Authentication Tokens {#work-with}

You can use authentication in both online and offline apps to remember the end-user. There are three ways Mendix suggests to do this:

* Use the **SignIn** activity from the **NanoflowCommons** module (version 5.0.0 or above) with the `useAuthToken` parameter set to `true`. This is the recommended and easiest method.
* Write your own [JavaScript action](/refguide/javascript-actions/) using the `login` method of the `mx-api` module in the [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api) and setting the `useAuthToken` parameter to `true`.
* Write a Java action using the `addMendixCookies` method of the [Runtime API](/apidocs-mxsdk/apidocs/runtime-api/), and setting the `useAuthToken` parameter to `true`.

### Authentication Token Expiry

There is a custom runtime setting, [`com.mendix.webui.HybridAppLoginTimeOut`](/refguide/custom-settings/#commendixwebuiHybridAppLoginTimeOut) that determines how long the authentication token is valid for. If no value is set, the token remains valid for one year.

## Application Behavior

### Native and Offline PWA Applications

This feature maintains backward compatibility, If end-users haven't updated their apps on their devices, but the runtime is a newer version, it still functions correctly to support the previous session management methods.

Upgraded offline-first applications use the new authentication token system by default as calls to the login API enable the authentication token system.

If you do not want your offline-first app to create an authentication token, you can disable the use of authentication tokens by writing your own flow using the `login` method of the `mx-api` module in the [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api) but setting the `useAuthToken` parameter to `false`.

### Online Applications

By default, authentication tokens will not be used in online Mendix apps. However, you can use them to remember the end-user. For more information see [Working with Authentication Tokens](#work-with), above.

Online apps still utilize the [EnableKeepAlive](/refguide/tricky-custom-runtime-settings/#session-duration) setting to maintain uncommitted data which changes during the session. If that setting is disabled and `useAuthToken` is set to `true`, uncommitted changes will be lost if an action is performed after the session expires, which occurs after the [SessionTimeout](/refguide/custom-settings/#SessionTimeout). In this case, the authentication token is used to reinitialize the session to keep user signed in, after which the application is reloaded.

### Client-Runtime Session Management Flow

<!-- Diagram created here:
https://www.plantuml.com/plantuml/uml/bPB1Rjim44Jl-efjV7M3n4Lww2687TSd5oZgzbOWeAMnj91Cgikb7AVklnTI65iA3BGv211dXyCt8E-y6j6mhP9tMc0BMbS1kPXzuaksjH6pfRL9ornSiDczgvpGQ5UmecVm-1LWKz3lP9ggauMp6grN7s_ci-b9Nl4JQ7ALJ4NSRkZffAFdUXA5yrap9ndaUJ07wbMvdrK1oP8tMB95VpwQVlXyivYTPhq-_VbN8yefryPg3tKeluRvazIdCLryWStuaUuhXjKBCfxIxlTuni3zBLZbBMW5QI2TtNU_D9fVBoQBUM9IvSOeOinn7Nr9J7z_UnkLJxHqELlQiHOKFAP1Y--kXANkgg0Gyb1IHoe1IJol7z10UBCdBT06o9XIWL5qWeVtxEoOl6b0tEPqUcRKh8t7c7vQCZQZdN3SqaByY13jg9z3gNCbmr-UAoBjg_9AEVGX-X_QS-WST5eWBRleVkcOFwOC5RG5xW1pMCXB9Js22LGO3GQ4mRFDpp1VzYcUwLjaNxksFMinsDDo9uV3eVtUrDLi53A8AemdFDOioFvnUusfE6FTazjqQnEqEBLboygcugTpVLbV-lr_lIJ3g-VQKo9Vr_yEDWlRwYy0
-->

{{< figure src="/attachments/refguide/runtime/session.png" alt="The Session Management Flow between client and the runtime." class="no-border" >}}

This diagram illustrates the interaction between the client and the runtime to initialize or retrieve the session.

### Session Deletion

Sessions are deleted under two circumstances:

* When there is a database upgrade on application startup ‒ for example if there is a model change or if the database is new.
* During periodic cleanup of expired sessions.

    You can configure how often expired sessions are cleaned up using the [ClusterManagerActionInterval](/refguide/custom-settings/#ClusterManagerActionInterval) runtime setting.

    You can configure when a session is considered expired using the [SessionTimeout](/refguide/custom-settings/#SessionTimeout) runtime setting.

When an anonymous session is deleted the associated anonymous user is deleted as well.
