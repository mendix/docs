---
title: "Frequently Asked Questions – Security"
linktitle: "Security Findings FAQ"
url: /support/security-findings-faq
weight: 60
description: "FAQ about existing security findings and other security questions."
aliases:
    - /developerportal/support/security-findings-faq/
    - /community-tools/support/security-findings-faq/
---

## Introduction

This document lists a number of frequently asked questions (FAQs) we often receive about security findings and other issues around the security of the Mendix product and platform.
See the [Requirements for Security Support Tickets](/support/submit-support-request/#security-tickets) section of *Submit a Support Request* if you want to create a security tickets.

There is additional information about security and reported vulnerabilities available elsewhere on the Mendix Platform. See the links in the sections below.

### Current Security Issues

This FAQ document is not updated in real time. For updates on current security issues please see [the Mendix status page: https://status.mendix.com/](https://status.mendix.com/).

### Security Advisories

Security Advisories for Mendix are published in [Security Advisories](/releasenotes/security-advisories/).

### General Security Advice

You can find our best practices on how to make your app secure in [How To Implement Best Practices for App Security](/howto/security/best-practices-security/).

### Platform Support

Mendix Support will only assist when using platform-supported components. See the table in the [Support for Different Deployment Strategies](/support/#support-by-strategy) section of the *Mendix Support* document for information on what is supported by Mendix and what you need to support yourself. For Marketplace components, you can check the support status of a component by finding it in the marketplace and looking at the **Support** section in the component details to the right of the component name.

### Security Contact

In Control Center, you can add and manage a [Security Contact](/control-center/company-settings/#security-contact) for your company. A Security Contact is informed if there are critical security issues with the Mendix Platform and platform-supported Marketplace components.

## Can Data Be Manipulated in the Client?

One common concern is that end-users can use tools in their browsers or on their devices to change the data which is held locally and use this to get access to information which should not be available to them. This section addresses several of these concerns and explains how the Mendix Runtime Server protects your data.

### Mendix Security

Mendix applications consist of two parts: the Mendix Client, running in the end-user's browser or mobile app, and the Mendix Runtime Server. See [Mendix Runtime](/refguide/runtime/) for more information about this.

The Mendix Client communicates with the Runtime Server using the Mendix Client API, making requests to the `/xas/` request handler on the Runtime Server. The Client API is built on the premise that requests from the client can't be trusted to be safe or secure. As the client is running on the end-user's device, outside of the control of the server, any data or action can be manipulated there. "Nothing that happens on the client can be considered secure" is a statement that applies to everything which is held on the client (for example, in a browser) not just to Mendix applications.

Therefore, in Mendix, security is always taken care of in the back end, the Runtime Server, with properly-set entity access rules and allowed roles on microflows. The Runtime Server cannot be manipulated by the end-user. 

That is why it is important to [implement correct access rules](/howto/security/best-practices-security/#access-rules) for end-user roles.

### Mendix Security and User Privilege Escalation

Although you can trick the browser into believing you have a user role you don't have, the Mendix runtime server will not accept this. This means that all server-side data and logic will apply your original user role. Changing your user role in the browser will not disclose any information that isn't available to you with your original user role.

### Visibility vs Security

For pages, you don't set security, but visibility. Security and visibility are two different things. The Mendix client hides a page that is not visible to the current end-user, together with action buttons which open the page and navigation items which open the page directly. However, the Mendix runtime client does not block access to the page completely; if an end-user runs a microflow that opens a page that is not visible to them, uses a deeplink, or calls the client API, the page will still be shown.

While the Mendix runtime controls the visibility of pages, it always uses security to control access to data. So, although an end-user might be able to open a page that is not visible to them, they will only see data on that page that they have access to. End-users can always use the Client API to retrieve data, if they have access to it, so hiding (parts of) a page that shows data they have access to, won't prevent them from accessing the data via the Client API.

Hiding pages for end-users is not the way to restrict access to data, you should always set security on the data itself. Visibility does not equal security. 

### XPath Query Manipulation/Injection

When an XPath query is received by the runtime, the runtime will always apply entity access to the XPath query, based on the access rules connected with the role (or roles) of the end-user making the request. So, although an end-user might be able to change the XPath query before sending it to the runtime, the runtime will still apply access rules, and only return data the end-user is allowed to access.

### HTTP Verb Tampering

The `/xas/` request handler is not a RESTful API, so the conventions that you would usually apply to RESTful APIs, do not apply in this case. The `/xas/` API does not look at the HTTP verb used, this is ignored. Only published REST services make a distinction between HTTP verbs.

### Example

For example, the layout of every page in the application is visible to anyone, as the page layout is stored as a publicly available static XML page. If a page has a button that is conditionally visible for certain user roles, you can make this button visible by faking your user role. However, when you click this button, security will be applied to data retrieval and logic. If the button triggers a microflow, you will get an error if your original user role doesn't have access to the microflow.

If a microflow is available for your original user role, but the button to trigger this was not visible, you will now be able to run the microflow. However, you could have done this by faking an `xas` request using your original user role. So, in this case, faking the user role doesn't provide any additional functionality. If an end-user is able to see data, or trigger logic, that they aren't supposed to, this means the application security isn't configured correctly, or completely.

## Can End-Users Upload Files Containing Malicious Content Such as Code Injection?

Uploaded files can’t be executed on the server. You can configure the file manager widget to restrict what extensions are allowed for files uploaded using the widget. However, this is not meant as a security feature, as the file manager widget does not check the contents of a file to see if it matches the provided extension. See our documentation on the [File Manager](/refguide/file-manager/#allowed-extensions) widget for more information.

If you want to scan uploaded files for malicious content, you have to implement virus and malware scanning yourself. For more information, see the [Scanning Uploaded Files for Malicious Content](/howto/security/best-practices-security/#scanning-for-malicious-content) section of *How to Implement Best Practices for App Security*.

## Why Are Vulnerabilities Reported in Some Java Libraries? {#java-libraries}

Security scanning tools can report vulnerabilities in Java libraries. These can be things like outdated and vulnerable libraries, code, or dependencies. Often, vulnerabilities have been addressed in the latest versions of Java libraries. Before reporting a vulnerability in a Java library, please verify that:

* The jar is coming from a platform supported module. For more information about support categories, See the [Marketplace Content Support](/appstore/marketplace-content-support/) section in *Marketplace Overview*.
* Your module is updated to the latest version.
* You have removed the old libraries from their userlib folder. See [Updating the Module to a Newer Version](/appstore/use-content/#update-module) in *Using Marketplace Content* for more information.

### Why Is Mendix Not Using the Latest Version of a Library?

A new release of a library doesn't necessarily mean that the old versions of that library have to be replaced.

We will only update a third-party library if:

1. A new version of the library contains new functionality that is not available in the old library - when a developer is updating or improving functionality that requires an updated library, we will update the library to make use of the newly provided functionality.
2. The old version of the library contains a bug - when our tests, or a customer, reports a bug within a platform-supported component that is caused by a bug in a third-party library, we will update the library to a version where the bug is resolved.
3. The old version of the library contains a security vulnerability - we have regular security scans on all of our platform-supported content and if the security scan reports a security vulnerability in a third-party library, we will update the library to mitigate the security finding.

If an older library provides all the functionality that is required and doesn't contain any bugs or security vulnerabilities, there is no need to update the library. Updating a library in this case increases the risk of issues: newer versions of a library might contain changes that break existing functionality within the module.

#### Library Versions in Marketplace Modules

Mendix will update to align major versions of libraries in Marketplace modules. 

## Why Are Some Security Attributes Not Set for the Cookies in My App?

Security scanning tools can report vulnerabilities in the way Mendix handles cookies. For example that cookies are insecure or vulnerable, or have improper or missing attributes. The sections below explain why these might be being reported.

### Cookie Missing ‘Secure’ Attribute

Setting the ‘Secure’ attribute in a cookie prevents clients from transmitting that cookie over unencrypted communication channels. A browser that supports this setting will always use the HTTPS protocol to send cookies with the ‘Secure’ flag to pages.

Mendix sets the ‘Secure’ attribute on cookies by default. The only exception is the cookie "mx-cookie-test". This is a cookie we temporarily set to verify whether we have access to cookies. This helps us determine whether we need to warn the end-user that they need to enable them, as Mendix heavily relies on cookies to function.
For more information, please see the [Cookies](/refguide/mendix-client/#cookies) section of *Mendix Client*.

### Cookie Missing ‘HTTPOnly’ Attribute

In Mendix Cloud, (almost all) cookies have the ‘HttpOnly’ attribute set to true by default. 
We have the cookies set by default in Mendix applications described in the [Cookies](/refguide/mendix-client/#cookies) section of *Mendix Client*. 

For Mendix applications, the Cookies have the ‘HTTPOnly’ attribute set to true when they are set by the Mendix Runtime. Cookies which are set by the Mendix Client can't have the 'HttpOnly’ attribute set to true, as those cookies are not available to JavaScript, which is the language used by the Mendix Client.

Cookies set by the Mendix Runtime, which may contain sensitive information such as the session ID, always have the ‘HttpOnly’ flag set to true. Cookies set by the Mendix Client with ‘HTTPOnly’ set to false will never contain any sensitive information.

## Why Are Some Security-Related HTTP Headers Not Set for My App?

Security scanning tools can report vulnerabilities in the way Mendix sets HTTP Headers. These are usually related to Access-Control-Allow-Origin, Content-Security-Policy, Referrer-Policy, X-Content-Type-Options, X-Frame-Options, X-Permitted-Cross-Domain-Policies, X-XSS-Protection, or Pragma headers, or general comments about information disclosure.

### Missing Security-Related HTTP Headers / Insecure Value for Header 

You can add your own HTTP headers as described in the [Adding HTTP Headers](/howto/security/best-practices-security/#adding-http-header) section of *How To Implement Best Practices for App Security*.

### Missing/Misconfigured Content Security Policy (CSP)

See [Content Security Policy](/howto/security/csp/) for information on improvements to Content Security Policy in Mendix 9.12.0 and above.

### Sensitive Information in Server Response Header (Banner Grabbing)

By default, HTTP responses from the web server reveal information about the type and version of the web server. This information might be useful to an adversary to refine attacks. Although not exploitable directly, it is a security best practice to disclose as little information as possible to adversaries.

Mendix considers this approach to be "security by obscurity". We do not feel that allowing responses to contain this information is a valid security risk in itself. Together with our Security team it was therefore decided not to hide this information. 

A good example of this is leaking the web server information (for example, "Server: nginx"). Firstly, the commonest web server types are nginx, IIS, and Apache. So publicly-known vulnerabilities of these three web servers will be tried regardless of whether or not this information is leaked. Secondly, [the Mendix buildpack](https://github.com/mendix/cf-mendix-buildpack) is in a public GitHub repository and you can easily see that Mendix is using nginx as its web server. Hiding this from the response headers doesn't make Mendix apps more secure.

### Cache Control Header Is Set Incorrectly

Mendix apps use two types of content: dynamic content and static content.

The dynamic content consists of the data that is shown on the page. This data is retrieved from the database and served by the Mendix Runtime.

All requests from the Mendix Runtime, set the Cache-Control header to `no-store`. These requests might contain sensitive data and setting the Cache-Control header `no-store` will prevent the response from being cached.

For the static content, only the index.html and login.html files have the Cache-Control header set to `no-cache`.

For the rest of the static content, the Cache-Control header is not set. See [Why Are Static Files Publicly Accessible in My App?](#static-content), below for a discussion around the availability of static content and why the cache control header is not relevant for this content.

For the Mendix Cloud, you cannot change the setting of this header. If you are running outside the Mendix Cloud, you may be able to change this within your own infrastructure.

See [Cache Control – Directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#directives) on the *mdn web docs* site for possible values for cache control directives. 

## Why Are Static Files Publicly Accessible in My App?{#static-content}

Mendix apps use two types of content: static content and dynamic content. Static content consists mainly of page templates (for example, `*.xml` and `*.xml.gz`), images (for example, `*.png`), icons (for example, `*.svg`), JavaScript files (for example, `*.js`), and styling (for example, `*.css`). The dynamic content is the data that is shown on the page. This dynamic data is retrieved from the database. 

By default, the static content of your app is publicly available. This means you can make a directory listing and access files on the web server. The Mendix Client expects this and will not work properly if it is not. You can request the static content without signing in. This is not an issue, as the static content doesn't usually contain any sensitive data. It provides the framework within which data is displayed and logic applied. You should not add sensitive data to your static files (for example in a text widget on a page); Mendix apps provide more secure ways to store sensitive data.

You can limit access to the static content of your app by [implementing an access restriction profile](/developerportal/deploy/access-restrictions/) that limits access to the whole app. It is not possible to restrict access only for the static files.

## Does This Reported Security Finding Affect My App?

Scanning your app, or the Mendix platform, with a security scanner will occasionally produce reports on security findings which the scanner has found. The sections below explain what these reports mean in relation to Mendix apps and the Mendix platform.

### Weak Ciphers Supported in Mendix Cloud

In Mendix Cloud, security is of the highest priority, and we try to improve this constantly. Mendix Cloud supports TLS 1.3 and enforces ciphers preferring ‘good’ ciphers over ‘sufficient’ ciphers. You can test your site using a tool such as [Internet.nl](https://www.internet.nl/) to report TLS version and cipher information for your site.

### No/Long Session Timeout

The default timeout for sessions in Mendix is 10 minutes. This timeout can be changed by configuring the **SessionTimeout** [runtime setting](/refguide/custom-settings/#general). By default, the Mendix client sends keepalive messages to keep sessions alive when there is no activity. This can be changed by changing the value of the **EnableKeepAlive** runtime setting. In Mendix Cloud, you can set custom runtime settings on the *Runtime* tab of the *Environment Details* page. 

### Concurrent Login for Admin Accounts

By default, end-users are allowed to have multiple sessions simultaneously. This allows them to sign in to the application in multiple browsers at the same time. This can be configured by changing the [Multiple sessions per user](/refguide/app-settings/#multiple-sessions) in the project settings of an application. This setting applies to all end-users. If you only want to disallow multiple sessions for administrator end-users, you will have to implement [a custom solution](https://bartgroot.nl/mendix/custom-checks-on-login/). 

### Bootstrap Vulnerabilities 

Mendix does not ship with Bootstrap JavaScript files. All Bootstrap styling is in the Mendix Atlas UI themes.

If Bootstrap is flagged by a security scan, you may be using the Bootstrap library in your custom theme.
Mendix therefore suggests that you do one of the following:

* Update the libraries yourself
* Change the custom theme so it does not need Bootstrap

### Spring-bean library - Java Deserialization - CVE-2016-1000027 

The Mendix Runtime does not use the Spring framework. Look at the section [Why Are Vulnerabilities Reported in Some Java Libraries?](#java-libraries), above for information about why you may be receiving this report.

For example, the old version of the [LDAP Synchronization module](https://marketplace.mendix.com/link/component/24) (currently deprecated) had the spring-beans-4.3.9.RELEASE.jar, but the version the developer released in January 2020 removed that dependency, as noted in the release notes for the module:

> * Updated all Java libraries used by the module to the latest version. In case of Java compilation or Runtime errors you can try deleting the following libraries from your userlib folder (will require a new deployment to take effect): 
> 
>     * spring-beans-4.3.9.RELEASE.jar 
>     * spring-core-4.3.9.RELEASE.jar 
>     * spring-ldap-core-2.3.1.RELEASE.jar 
>     * spring-tx-4.3.9.RELEASE.jar 
>     * org.slf4j.slf4j-api-1.7.25.jar 
>     * commons-lang-2.5.jar

### Dojo library 

#### deepCopy Vulnerability - CVE-2020-5258

The Mendix Client is bundled with the full dojo library. However, not all functionality of the Dojo library is used. The vulnerability is in the `deepCopy` util method of dojo; this method is not used in the Mendix Client. This vulnerability cannot be exploited in the client.

#### Prototype Pollution Vulnerability - CVE-2021-23450

Mendix 9.11.0 and above uses Dojo 1.16.4. The `setObject` function is used in one place in our code, but this is in a deprecated function. This function is no longer used internally. Therefore, there is no opportunity for the `setObject` function to be exploited.

### BREACH Attacks

The Mendix Runtime implements a number of mitigation methods which mean that the Mendix Runtime is not vulnerable to [BREACH attacks](https://www.breachattack.com/). These recommended mitigation methods protect resources by:

* Separating secrets from user input
* Randomizing secrets per request
* Masking secrets
* Protecting vulnerable pages with CSRF

## Log Messages

### ERROR - Connector: 404 - file not found for file

If you see entries saying `ERROR - Connector: 404 - file not found for file` in your Application Access Logs, these may originate from internal security scans or external attacks. We actively try to block attacks from crawlers.

To investigate further, Mendix recommends [downloading the access logs](/developerportal/operate/logs/). This will enable you to review IP addresses, identify locations, and determine where requests are originating from. If you suspect a potential malicious attack, you can enhance security by adding an [Access Restriction Profile](/developerportal/deploy/access-restrictions/) which allows two IP ranges and excludes the IP address which you suspect.
