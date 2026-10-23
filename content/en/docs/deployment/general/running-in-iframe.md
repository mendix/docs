---
title: "Iframes and Running Apps"
url: /developerportal/deploy/running-in-iframe/
weight: 50
description: "Issues to take into consideration when running apps in an iframe"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

By default, a Mendix application is blocked from running inside an iframe. This is to protect the end-user from attacks using *clickjacking*. There is more information on this in the [Adding HTTP Headers](/howto/security/best-practices-security/#adding-http-header) section of *How To Implement Best Practices for App Security*.

You can enable your application to run inside an iframe by setting a [Content Security Policy](#running-mendix-app) directive.

There is more information about iframes on Mendix Cloud in the [Running Your App in an Iframe](/developerportal/deploy/environments-details/#iframe) section of *Environment Details*.

You can also set the obsolete `X-Frame-Options` HTTP header if you need backward compatibility. 

## Content Security Policy {#csp}

When Content Security Policy (CSP) is enforced additional directives are needed for running a Mendix application in an iframe for both the host application and the Mendix application.

### Host Application

If the host application enforces CSP, it must be configured to explicitly allow loading frames and scripts from the Mendix application’s URL.

### Mendix Application {#running-mendix-app}

To allow a Mendix application to run in an iframe, the `frame-ancestors` directive of the `Content-Security-Policy` HTTP header for your node’s environment needs to be set. For Mendix Cloud, this can be done within the Mendix Portal, as described in the [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) section of *Environment Details*.

## Resolving Browser Issues

Most browsers have additional security to ensure that iframes are only allowed when they are from the same domain as the main page. If your application does not have the same domain as the main page containing the iframe, it will only run if the *SameSite* cookie is set to allow this. You can find a good explanation of SameSite cookies in [SameSite cookies explained](https://web.dev/samesite-cookies-explained/) on the *web.dev* website.

When running your application in Mendix Cloud, you can set the SameSite cookie through a custom runtime setting as explained in the [Running Your App in an Iframe](/developerportal/deploy/environments-details/#iframe) section of *Environment Details*.

If your application is deployed outside Mendix Cloud (on premises, for example), then you will need to configure your webserver to set the SameSite cookie to the correct value.

## Limitations

### Runtime Dependency

Even when embedded, the web client must still communicate with the Mendix runtime to initiate sessions, execute microflows, and interact with data. Mendix cannot function as a standalone client-only solution directly integrating with third-party services.

### Cross-Application Communication

Mendix does not support native messaging between the embedded application and the host application or other iframed applications. Any such communication must be implemented manually using custom JavaScript.

### Authentication Isolation

Mendix applications embedded in iframes do not inherit the session or user credentials from the host application. To enable shared authentication, a secure custom mechanism, such as JWT-based authentication, must be implemented.

### Responsiveness

Iframes are not natively responsive. This means that by default an `<iframe>` does not automatically resize itself to fit different screen sizes or maintain an aspect ratio as the viewport changes. Custom CSS or JavaScript libraries are needed to accomplish this.

### Focus Management and Accessibility

Focus management for iframes presents unique accessibility challenges because iframes create a separate document context, and the parent page loses direct control over focus once it enters the iframe.

Iframes need careful handling and thorough testing to ensure accessibility, especially for keyboard and screen reader users.
