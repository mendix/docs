---
title: "Frequently asked questions - Security"
linktitle: "Security Findings FAQ"
url: /developerportal/support/security-findings-faq
category: "Mendix Support"
weight: 60
description: "FAQ about existing security findings and other security questions."
tags: ["support" ]
---

## 1 Introduction

This document lists a number of questions we often receive about security findings and other issues around the security of the Mendix product and platform.
For our process on how to report security tickets, please see the [Requirements for Security Support Tickets](/developerportal/support/submit-support-request/#security-tickets) section of *Submit a Support Request*.

There is additional information about security and vulnerabilities available elsewhere on the Mendix platform. See the sections below.

### 1.1 Current Security Issues

This document is not updated in real time. For updates on current security issues please see  the Mendix status page: https://status.mendix.com/.

### 1.2 Security Advisories

Security Advisories for Mendix are published under [Security Advisories](/releasenotes/security-advisories/).

### 1.3 General Security Advice

You can find our best practices on how to make your app secure in [Implement Best Practices for App Security](/howto/security/best-practices-security/).

### 1.4 Platform Support

Mendix Support will only assist when using platform-supported components. See the table  in the [Support for Different Deployment Strategies](/developerportal/support/#support-by-strategy) section of the *Support* document for information on what is supported by Mendix and what you need to support yourself. For Marketplace components, you can check the support status of a component by finding it in the marketplace and looking at the **Support** section in the component details to the right of the component name.

## 2 Can Data Be Manipulated In the Client?

One common concern is that end-users can use tools in their browsers or on their devices to change the data which is held locally and use this to get access to information which should not be available to them. This section addresses several of these concerns and explains how the Mendix Runtime Server protects your data.

### 2.1 Mendix Security

Mendix applications consist of 2 parts: the Mendix Client, running in the user's browser or mobile app, and the Mendix Runtime Server. See [Mendix Runtime](/refguide/runtime/) for more information about this.

The Mendix Client communicates with the Runtime Server using the Mendix Client API, making requests to the `/xas/`  request handler on the Runtime Server. The Client API is built on the premise that requests from the client can't be trusted to be safe — as it is running on the client, outside of the control of the server, any data or action can be manipulated there. Nothing that happens on the client can be considered 'secure'. This is a statement that applies to everything which is held on the client (for example, in a browser) not just to Mendix applications.

Therefore, in Mendix security is always taken care of in the back end, the Runtime Server, with entity access rules and allowed roles on microflows. This side cannot be manipulated by the user. 

That is why it is important to [implement correct access rules for user](/howto/security/best-practices-security#2-implementing-access-rules).

### 2.2 Mendix Security and User Privilege Escalation

Although you can trick the browser into believing you have a user role you don't have, the Mendix runtime server will not accept this. This means that all server-side data and logic, will apply your original user role. Changing your user role in the browser will not disclose any information that isn't available to you with your original user role.

### 2.3 Visibility vs Security

For pages, you don't set security, but visibility. Security and visibility are 2 different things. The Mendix client hides a page that is not visible to the current end-user, together with action buttons which open the page and navigation items which open the page directly. However, the Mendix runtime client does not block access for to the page completely; if an end-user runs a microflow that opens a page that is not visible to them, uses a deeplink, or calls the client API, the page will still be shown.
 
While the Mendix runtime controls the visibility of pages, it always uses security to control access to data. So, although an end-user might be able to open a page that is not visible to them, they will only see data on that page that they have access to. End-users can always use the Client API to retrieve data, if they have access to it, so hiding (parts of ) a page that shows data they have access to, won't prevent them from accessing the data via the Client API.

Hiding pages for users is not the way to restrict access to data, you should always set security on the data itself. Visibility does not equal security. 

### 2.4 XPath Query Manipulation/Injection

When an XPath query is received by the runtime, the runtime will always apply entity access to the XPath query, based on the access rules connected with the role(s) of the end-user making the request. So, although an end-user might be able to change the XPath query before sending it to the runtime, the runtime will still apply access rules, and only return data the user is allowed to access.

### 2.5 HTTP Verb Tampering

The `/xas/` request handler is not a RESTful API, so the conventions that you would usually apply to RESTful APIs, do not apply in this case. The `/xas/` API does not look at the HTTP verb used, this is ignored. Only published REST services make a distinction between HTTP verbs.

### 2.6 Example

For example, the layout of every page in the application is visible to anyone, as the page  layout is stored as a publicly available static XML page. If a page has a button that is conditionally visible for certain user roles, you can make this button visible by faking your user role. However, when you click this button, security will be applied to data retrieval and logic. If the button triggers a microflow, you will get an error if your original user role doesn't have access to the microflow.

If a microflow is available for your original user role, but the button to trigger this was not visible, you will now be able to run the microflow. However, you could have done this by faking an `xas` request using your original user role. So, in this case, faking the user role doesn't provide any additional functionality. If a user is able to see data, or trigger logic, that they aren't supposed to, this means the application security isn't configured correctly, or completely.

## 3 Can End-Users Upload Files Containing Malicious Content Such As Code Injection?

Uploaded files can’t be executed on the server. The allowed extensions for files uploaded through the file manager widget can be restricted by configuration. However, this is not meant as a security feature, as the file manager widget does not check the contents of a file to see if it matches the provided extension. See [our documentation on the File Manager widget](/refguide/file-manager/#allowed-extensions) for more information.

If you want to scan uploaded files for malicious content, you have to implement virus and malware scanning yourself. For more information, see the [Scanning Uploaded Files for Malicious Content](/howto/security/best-practices-security/#scanning-for-malicious-content) section of *How to Implement Best Practices for App Security*.

## 4 Why Are Vulnerabilities Reported In Some Java Libraries?

Security scanning tools can report vulnerabilities in Java libraries. These can be things like outdated and vulnerable libraries, code, or dependencies. Often, vulnerabilities have been addressed in the latest versions of Java libraries. Before reporting a vulnerability in a Java library, please verify that:

* The jar is coming from a platform supported module. For more information about support categories see [Marketplace Content Support](/appstore/general/app-store-content-support/).
* Your module is updated to the latest version.
* You have removed the old libraries from their userlib folder. See [Updating the Module to a Newer Version](/appstore/general/app-store-content/#update-module) in *Use Marketplace Content in Studio Pro* for more information.

### 4.1 Why Is Mendix Not Using the Latest Version Of a Library?

A new release of a library doesn't necessarily mean that the old versions of that library have to be replaced.
 
We will update a third-party library if:

1. A new version of the library contains new functionality that is not available in the old library - when a developer is updating or improving functionality that requires an updated library, we will update the library to make use of the newly provided functionality.
2. The old version of the library contains a bug - when our tests, or a customer, reports a bug within a platform-supported component that is caused by a bug in a third-party library, we will update the library to a version where the bug is resolved.
3. The old version of the library contains a security vulnerability - we have regular security scans on all of our platform-supported content and if the security scan reports a security vulnerability in a third-party library, we will update the library to mitigate the security finding.

If an older library provides all the functionality that is required and doesn't contain any bugs or security vulnerabilities, there is no need to update the library. Updating a library in this case increases the risk of issues: newer versions of a library might contain changes that break existing functionality within the module.

## 5 Why Aren’t All Security Attributes Set For The Cookies In My App?

Security scanning tools can report vulnerabilities in the way Mendix handles cookies. For example that cookies are insecure or vulnerable, or have improper or missing attributes. The sections below explain why these might be being reported.

### 5.1 Cookie missing ‘Secure’ attribute

Setting the ‘Secure’ flag in a cookie prevents clients from transmitting that cookie over unencrypted communication channels. A browser that supports the flag will always use the HTTPS protocol to send cookies with the ‘Secure’ flag to pages.

Mendix sets the ‘Secure’ attribute on cookies by default. The only exception is the cookie "mx-cookie-test". This is a cookie we temporarily set to verify whether we have access to cookies. This helps us determine whether we need to warn the user that they need to enable them, as Mendix heavily relies on cookies to function.
For more information, please see the [Cookies](/refguide/mendix-client/#cookies) section of *Mendix Client*.

### 5.2 Cookie missing ‘HTTPOnly’ attribute

In the Mendix cloud, [almost all] cookies will have the ‘HttpOnly’ attribute set to true by default. 
We have the cookies described in the [Cookies](/refguide/mendix-client/#cookies) section of *Mendix Client* set by default in Mendix applications. 

For Mendix applications, the Cookies have the ‘HTTPOnly’ attribute set to true when they are set by the Mendix Runtime. Cookies which are set by the Mendix Client can't have the 'HttpOnly’ attribute set to true, as those cookies are not available to JavaScript, which is the language used by the Mendix Client.
 
Cookies set by the Mendix Client with ‘HTTPOnly’ set to false will never contain any sensitive information. Cookies set by the Mendix Runtime sometimes contain sensitive information, such as the session id; these cookies always have the ‘HttpOnly’ flag set to true.

## 6 Why Are Not All Security-related HTTP Headers Set For My App?

Security scanning tools can report vulnerabilities in the way Mendix sets HTTP Headers. These are usually related to Access-Control-Allow-Origin, Content-Security-Policy, Referrer-Policy, X-Content-Type-Options, X-Frame-Options, X-Permitted-Cross-Domain-Policies, X-XSS-Protection, or Pragma headers, or general comments about information disclosure.

### 6.1 Missing Security-Related HTTP Headers / Insecure Value for Header 

You can add your own HTTP headers as described in the [Adding HTTP Headers](/howto/security/best-practices-security/#adding-http-header) section of *How To Implement Best Practices for App Security*.

### 6.2 Missing/Misconfigured Content Security Policy (CSP)

For more information, see [our documentation on improved Content Security Policy in Mendix 9.12.0 and above.](/howto/security/using-mobile-capabilities/csp/)

### 6.3 Sensitive information in Server response header / Banner Grabbing

By default, HTTP responses from the web server reveal information about the type and version of the web server. This information might be useful to an adversary to refine attacks. Although not exploitable directly, it is a security best practice to disclose as little information as possible to adversaries.

Mendix considers this approach to be "security by obscurity". We do not feel that allowing responses to contain this information is a valid security risk in itself. Together with our Security team it was therefore decided not to change this. 

A good example of this is leaking the web server information (e.g. "Server: nginx"). Firstly, the most commonly used web server types are are nginx, IIS, and Apache. So publicly-known vulnerabilities of these 3 web servers will be tried regardless of whether or not this information is leaked. Secondly, [the Mendix buildpack](https://github.com/mendix/cf-mendix-buildpack) is in a public GitHub repository and you can easily see that Mendix is using nginx as its web server. Hiding this from the response headers doesn't make Mendix apps more secure. 

## 7 Why Are Static Files Publicly Accessible In My App?

Mendix apps use two types of content: static content and dynamic content. Static content consists mainly of page templates (e.g., `*.xml` and *.xml.gz), images (e.g., `*.png`), icons (e.g., `*.svg`), JavaScript files (e.g., `*.js`), and styling (e.g., `*.css`). The dynamic content is the data that is shown on the page. This dynamic data is retrieved from the database. 

By default, the static content of your app is publicly available. This means you can make a directory listing and access files on the web server. The Mendix Client expects this and will not work properly if it is not. You can request the static content without signing in. This is not an issue, as the static content doesn't usually contain any sensitive data. It provides the framework within which data is displayed and logic applied. You should not add sensitive data to your static files (for example in a text widget on a page): Mendix apps provide more secure ways to store sensitive data.
 
You can limit access to the static content of your app by [implementing an access restriction profile](/developerportal/deploy/access-restrictions/) that limits access to the whole app. It is not possible to restrict access only for the static files.

## 8 Does This Reported Vulnerability Affect My App?

Scanning your app, or the Mendix platform, with a security scanner will occasionally produce reports on vulnerabilities which the scanner has found. The sections below explain what these reports mean in relation to Mendix apps and the Mendix platform.

### 8.1 Weak Ciphers Supported In Mendix Cloud V4

In Mendix Cloud v4, security is of the highest priority, and we try to improve this constantly. The Mendix Cloud supports TLS 1.3 and enforces ciphers preferring ‘good’ ciphers over ‘sufficient’ ciphers. You can test your site using a tool such as [Internet.nl](https://www.internet.nl/) to report TLS version and cipher information for your site.

### 8.2 No/Long Session Timeout

The default the timeout for sessions in Mendix is 10 minutes. This timeout can be changed by configuring the **SessionTimeout** [runtime setting](/refguide/custom-settings/#general). By default, the Mendix client sends keepalive messages to keep sessions alive when there is no activity. This can be changed by changing the value of the **EnableKeepAlive** runtime setting. In the Mendix Cloud, you can set custom runtime settings on the *Runtime* tab of the *Environment Details* page. 

### 8.3 Concurrent Login for Admin Accounts

By default, users are allowed to have multiple sessions simultaneously. This allows them to sign in to the application in multiple browsers at the same time. This can be configured by [changing the Multiple sessions per user in the project settings of an application](/refguide8/project-settings/#multiple-sessions). This setting applies to all users. If you want to only disallow multiple sessions for administrator users, you will have to implement [a custom solution](https://bartgroot.nl/mendix/custom-checks-on-login/). 

### 8.4 Bootstrap vulnerabilities 

In Mendix 7, Bootstrap is flagged by security scans mainly because of the Bootstrap JavaScript files. Although these files are shipped with the product, they are not included in the HTMLfiles, which reduces the attack chance to zero.

We cannot remove these files from Mendix 7 as some customers might have included them in their custom theme, which would break these projects. Neither can we simply update to a new major Bootstrap version as this is not always a match for the current DOM structure of the Mendix widgets, and it is not backward compatible which results in broken styling for many projects.

Support for Mendix 7 will be ending with the release of Mendix 10 in the summer of 2023. If you are still concerned about this report, you can upgrade to a later version of Mendix, which does not have these bootstrap files.

#### 8.4.1 Bootstrap vulnerabilities in Mendix Version 8 and above

For Mendix 8/9 the Bootstrap JavaScript files have been removed. All Bootstrap styling has been moved to the Mendix AtlasUI themes.
 
If there still is a vulnerability in the your project, you may be using the Bootstrap library in your custom theme.
We would therefore suggest that you do one of the following:
 
* Update the libraries yourself
* Change the custom theme so it does not need Bootstrap

### 8.5 Spring-bean library - Java deserialization - CVE-2016-1000027 

Mendix Runtime does not use the Spring framework. Look at the section [+Frequently asked questions - Security: Issues-With-Java-Libraries](https://paper.dropbox.com/doc/Frequently-asked-questions-Security-Issues-With-Java-Libraries-oFhRYNM9zD6TWQgveasA9#:uid=251150276713072015350311&amp;h2=Issues-With-Java-Libraries) for information about why you may be receiving this report.

For example, the old version of the [LDAP Synchronization module](https://marketplace.mendix.com/link/component/24) (currently deprecated) had the spring-beans-4.3.9.RELEASE.jar, but the version the developer released in January 2020 removed that dependency, as noted in the release notes for the module:

* Updated all Java libraries used by the module to the latest version. In case of Java compilation or Runtime errors you can try deleting the following libraries from your userlib folder (will require a new deployment to take effect): 

    * spring-beans-4.3.9.RELEASE.jar 
    * spring-core-4.3.9.RELEASE.jar 
    * spring-ldap-core-2.3.1.RELEASE.jar 
    * spring-tx-4.3.9.RELEASE.jar 
    * org.slf4j.slf4j-api-1.7.25.jar 
    * commons-lang-2.5.jar
