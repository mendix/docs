---
title: "Session Management"
url: /refguide/session-management/
category: "Mendix Runtime"
description: "Describes how sessions are established and managed."
tags: ["Runtime", "Mendix Client", "Login", "Session", "authentication"]
weight: 35
---

## 1 Introduction 

When an end-user signs in to an application, the Mendix Runtime establishes a session that persists as long as the end-user remains active within the application. The session expires after a certain amount of inactivity, determined by the time elapsed since the last runtime request and the [session timeout](/refguide/custom-settings/#SessionTimeout).

Mendix versions 10.9.0 and above can use authentication tokens to keep a session active while users are not actively working in the app. For offline-first apps, this replaces earlier approaches for long-lived sessions, improving security.

This approach provides a more unified solution for session management, allowing long-lived sessions to be used in online, as well as offline applications, whether native or web-based. For example, you could customize the sign in to an online app to provide a "remember me" function so that end-users do not have to provide their credentials again if their session expires.

If you create a new app in Mendix version 10.9.0 or above, session management will work as described below.

If you are using an app created in a version below 10.9.0, then long-lived sessions will be used for offline-first apps. See the [Sessions](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/#sessions) section of *Progressive Web App* for more information. Online apps in Mendix versions below 10.9.0 cannot have their sessions extended.

## 2 Authentication Token

### 2.1 Authentication Token Generation

When the runtime receives the `get_session_data` request, it checks the existence of the `useAuthToken` cookies. If present, it adds an additional HttpOnly cookie holding the generated unique authentication token `authtoken`. This token is then used in the subsequent actions to authenticate the user and extend the session when it expires.

This approach enhances security, as these cookies are inaccessible to anything other than the server.

### 2.2 Enable Authentication Token

For offline-first apps using standard Mendix sign in with version 10.9.0 or above, the authentication token will be generated automatically.

If you want to generate authentication tokens in your online app, you will have to use custom JavaScript or Java sign in code using the `login2` API. 

The `login2` API allows you to pass the parameter `useAuthToken`. The value `true` enables the authentication token, `false` disables it. If the login action passes `true` to the runtime, the runtime adds an HttpOnly cookie `useAuthToken` indicating that an authentication token should be generated during the client startup. Your login flow will then utilize the authentication token.

You could also provide end-users a "remember me" option so they can decide whether they want to be remembered or not.

Follow the links below to find the `login2` API specifications for the following:

* [React](https://apidocs.rnd.mendix.com/10/client-react/mx.html#.login2)
* [Non-react (Dojo)](https://apidocs.rnd.mendix.com/10/client/mx.html#.login2)  

### 2.3 Authentication Token Expiry

There is a custom runtime setting, [`com.mendix.webui.HybridAppLoginTimeOut`](/refguide/custom-settings/#commendixwebuiHybridAppLoginTimeOut) that determines how long the authentication token is valid for. If no value is set, the token remains valid for one year.

## 3 Application Behavior

### 3.1 Native and Offline PWA Applications

In Mendix version 10.9.0 and above, login should always support authentication tokens. 

This means that when offline-first applications below Mendix version 10.9 using long-lived sessions are upgraded to version 10.9.0 or above, the authentication token approach will provide the same behavior.

New offline-first applications created in version 10.9.0 or above will also use the authentication token approach.

If you do not want your offline-first app to create an authentication token, you can disable the use of authentication tokens by writing your own flow using the new API, `login2`, but setting the `useAuthToken` parameter to `false`.

### 3.2 Online Applications

Below Mendix version 10.9.0, there is no support for authentication tokens.

By default, authentication tokens will not be used in online Mendix apps version 10.9.0 and above. However, you can use them to remember the end-user by writing your own flow using the new API, `login2`, and setting the `useAuthToken` parameter to `true`.

### 3.3 Client-Runtime Session Management Flow

<!-- Diagram created here:
https://www.plantuml.com/plantuml/uml/bPB1Rjim44Jl-efjV7M3n4Lww2687TSd5oZgzbOWeAMnj91Cgikb7AVklnTI65iA3BGv211dXyCt8E-y6j6mhP9tMc0BMbS1kPXzuaksjH6pfRL9ornSiDczgvpGQ5UmecVm-1LWKz3lP9ggauMp6grN7s_ci-b9Nl4JQ7ALJ4NSRkZffAFdUXA5yrap9ndaUJ07wbMvdrK1oP8tMB95VpwQVlXyivYTPhq-_VbN8yefryPg3tKeluRvazIdCLryWStuaUuhXjKBCfxIxlTuni3zBLZbBMW5QI2TtNU_D9fVBoQBUM9IvSOeOinn7Nr9J7z_UnkLJxHqELlQiHOKFAP1Y--kXANkgg0Gyb1IHoe1IJol7z10UBCdBT06o9XIWL5qWeVtxEoOl6b0tEPqUcRKh8t7c7vQCZQZdN3SqaByY13jg9z3gNCbmr-UAoBjg_9AEVGX-X_QS-WST5eWBRleVkcOFwOC5RG5xW1pMCXB9Js22LGO3GQ4mRFDpp1VzYcUwLjaNxksFMinsDDo9uV3eVtUrDLi53A8AemdFDOioFvnUusfE6FTazjqQnEqEBLboygcugTpVLbV-lr_lIJ3g-VQKo9Vr_yEDWlRwYy0
-->

{{< figure src="/attachments/refguide/runtime/session.png" alt="The Session Management Flow between client and the runtime." >}}

This diagram illustrates the interaction between the client and the runtime to initialize or retrieve the session.
