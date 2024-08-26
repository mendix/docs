---
title: "Session Management"
url: /refguide/session-management/
description: "Describes how sessions are established and managed."
weight: 35
---

## Introduction 

When an end-user signs in to an application, the Mendix Runtime establishes a session that persists as long as the end-user remains active within the application. The session expires after a certain amount of inactivity, determined by the time elapsed since the last runtime request and the [session timeout](/refguide/custom-settings/#SessionTimeout).

Mendix versions 10.9.0 and above can use authentication tokens to keep a session active while users are not actively working in the app. For offline-first apps, this replaces earlier approaches for long-lived sessions, improving security.

This approach provides a more unified solution for session management, allowing long-lived sessions to be used in online, as well as offline applications, whether native or web-based. For example, you could customize the sign in to an online app to provide a "remember me" function so that end-users do not have to provide their credentials again if their session expires.

If you create a new app in Mendix version 10.9.0 or above, session management will work as described below.

If you are using an app created in a version below 10.9.0, then long-lived sessions will be used for offline-first apps. See the [Sessions](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/#sessions) section of *Progressive Web App* for more information.

Online apps in Mendix versions below 10.9.0 have a different approach, using the [EnableKeepAlive](/refguide/tricky-custom-runtime-settings/#session-duration) setting to send keep alive requests from the client.

## Authentication Token

### Authentication Token Generation

When the runtime receives the `get_session_data` request, it checks the existence of the `useAuthToken` cookies. If present, it adds an additional HttpOnly cookie holding the generated unique authentication token `authtoken`. This token is then used in the subsequent actions to authenticate the user and extend the session when it expires.

This approach enhances security, as these cookies are inaccessible to anything other than the server.

### Enable Authentication Token

For offline-first apps using the client API `login`, with version 10.9.0 or above, the authentication token system will be used by default.

If you want to generate authentication tokens in your online app, you have to use the client API `login2`. 

The `login2` API allows you to pass the parameter `useAuthToken`. The value `true` enables the authentication token, `false` disables it. If the login action passes `true` to the runtime, the runtime adds an HttpOnly cookie `useAuthToken` indicating that an authentication token should be generated during the client startup. 

You could also model your login page to provide end-users with a "remember me" option so they can decide whether they want to be remembered or not.

Follow the links below to find the `login2` API specifications for the following:

* [React](https://apidocs.rnd.mendix.com/10/client-react/mx.html#.login2)
* [Non-react (Dojo)](https://apidocs.rnd.mendix.com/10/client/mx.html#.login2)  

### Authentication Token Expiry

There is a custom runtime setting, [`com.mendix.webui.HybridAppLoginTimeOut`](/refguide/custom-settings/#commendixwebuiHybridAppLoginTimeOut) that determines how long the authentication token is valid for. If no value is set, the token remains valid for one year.

## Application Behavior

### Native and Offline PWA Applications

This feature maintains backward compatibility, If end users haven't updated their apps on their devices, but the runtime is a newer version, it still functions correctly to support the previous session management methods.

Upgraded offline-first applications to version 10.9 or above, that currently use the client API, `login`, will use the new authentication token system by default as we internally call the new API login2 and enable the authentication token system. If you do not want your offline-first app to create an authentication token, you can disable it by using the new API, `login2`, but setting the `useAuthToken` parameter to `false`.

Applications created with version 10.9 or above, whether offline or online, have the flexibility to enable or disable the authentication token system via the client API 'login2' and set the 'useAuthToken' parameter according to their preferences.

This means that when offline-first applications below Mendix version 10.9 using long-lived sessions are upgraded to version 10.9.0 or above, the authentication token approach will provide the same behavior.

New offline-first applications created in version 10.9.0 or above will also use the authentication token approach.

If you do not want your offline-first app to create an authentication token, you can disable the use of authentication tokens by writing your own flow using the new API, `login2`, but setting the `useAuthToken` parameter to `false`.

### Online Applications

Below Mendix version 10.9.0, there is no support for authentication tokens.

By default, authentication tokens will not be used in online Mendix apps version 10.9.0 and above. However, you can use them to remember the end-user by writing your own flow using the new API, `login2`, and setting the `useAuthToken` parameter to `true`.

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
