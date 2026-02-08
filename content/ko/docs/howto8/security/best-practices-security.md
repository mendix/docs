---
title: "앱 보안 모범 사례 구현하기"
linktitle: "앱 보안 모범 사례"
url: /howto8/security/best-practices-security/
weight: 20
description: "Mendix 애플리케이션을 개발할 때 사용할 보안 측면과 점검 사항 모음입니다."
#The anchor request-handlers below is mapped, so it should not be removed or changed.
---

## 소개

보안은 애플리케이션의 가장 중요한 측면 중 하나입니다. 잘못된 구성이나 보안 실패는 이해관계자에게 큰 결과를 초래할 수 있기 때문입니다. Mendix Runtime은 모델에 따라 애플리케이션과 데이터를 보호하며, Mendix Cloud는 인프라 수준에서 보안을 처리합니다.

이 문서에서는 Mendix Cloud 내에서 애플리케이션을 제공할 때 고려해야 할 일반적인 측면을 설명합니다.

## 접근 규칙 구현하기

Mendix 아키텍처에는 자체 쿼리(위젯에 의해 생성)를 구성하고 Mendix Runtime으로 보낼 수 있는 Mendix Client가 포함되어 있습니다. Mendix Runtime이 이러한 쿼리를 수정하지 않고 실행한다면, Mendix Client는 사용자가 볼 수 없어야 할 데이터를 요청할 수 있을 것입니다.

{{< figure src="/attachments/howto8/security/best-practices-security/mendix-runtime-architecture.png" alt="Mendix Runtime Architecture"   width="500"  class="no-border" >}}

애플리케이션을 설계할 때 개발자는 Entity에 접근 규칙을 지정할 수 있습니다 (자세한 내용은 [보안 앱 만들기](/howto8/security/create-a-secure-app/)를 참조하십시오). 이러한 접근 규칙은 클라이언트에서 받은 쿼리가 실행될 때마다 적용되어 클라이언트로 반환되는 데이터를 제한합니다. 예를 들어, "Customer" 역할을 가진 사용자는 이 사용자가 속한 고객과 연관된 주문만 볼 수 있습니다.

어떤 역할에서 어떤 데이터를 보고 편집할 수 있는지는 애플리케이션마다 다르지만, 다음 모범 사례가 핵심입니다:

* 시스템에 의해 결정되는 Attribute(예: 주문 상태)는 절대 쓰기 가능해서는 안 됩니다
* 익명 사용자가 객체를 만들 수 있는 경우 이러한 객체를 소유자로 제한하십시오 (익명 사용자는 실제로 즉석에서 생성된 **System.User** 객체입니다)
* 읽기 및 쓰기 접근에 대한 기본 규칙을 설정하지 마십시오 — 이렇게 하면 Entity에 추가되는 각 Attribute에 대해 생각하게 됩니다
* 보안 제약 조건은 Entity 접근 규칙과 페이지 구성 요소(그리드, 목록 보기, Data View)의 가시성 제약 조건으로 구성되어야 합니다
* Data View 내에서 Attribute를 편집 가능하게 유지하십시오. 접근 규칙이 쓰기 접근을 금지하면 클라이언트가 편집 불가능으로 표시하기 때문입니다 — 이렇게 하면 접근 규칙의 (올바른) 작동을 인식할 수 있습니다

## 인젝션 방지하기

Injection occurs when (user) input can be misused to influence the behavior of a system. Common cases are parameters for queries (to influence the results of database queries) or HTML with JavaScript contents (to influence browser behavior).

When using Mendix-native components, there are no concerns about the possibility of injection. Queries (like XPath) are parametrized and therefore always escaped, making SQL-injection impossible. For the other way around, retrieved data shown in the user interface is escaped to the HTML format.

When you are building an application, you may use [Mendix Marketplace](https://marketplace.mendix.com/) components and external interfaces. Remember that values which originate from user input or other systems should be escaped to avoid injection (and to ensure they are properly display).

These are the common cases and best practices:

* HTML content, usually derived from an HTML editor and displayed using an HTML viewer, format string, or an email client – these are the ways to avoid this abuse:
    * Use the XSSSanitize action from the [CommunityCommons Function Library](/appstore/modules/community-commons-function-library/) module to strip malicious code from the entered HTML
    * Display the value of an attribute as HTML or using the HTMLEncode function from the [Community Commons Function Library](/appstore/modules/community-commons-function-library/) module
* Database connections (for example, using the [Database Connector](/appstore/modules/database-connector/)), where user input is being used within constraints – these are the ways to avoid this abuse:
    * Use prepared statements, which will cause the database-specific connector to take care of escaping the value
    * Sanity-check your user input (for example, use a regular expression to check if your user input only contains alphanumeric characters, spaces, and dashes)

## Applying Access Restrictions to Unnecessary Request Handlers{#request-handlers}

A Mendix app offers various endpoints that can be used to obtain information about offered services. The paths used by these endpoints end in `-doc`. By default, access to these endpoints is disabled when deploying to a cloud node.

Access restrictions can be configured within the Mendix Portal. They can be found in the **Environment details** of your cloud node. This is an example of this overview showing the default settings after deploying to a new environment:

{{< figure src="/attachments/howto8/security/best-practices-security/default-access-restrictions.png" alt="Mendix Cloud Access Restrictions Overview" class="no-border" >}}

Examples are the `ws-doc` or `rest-doc` endpoints that enumerate all the published web and REST services of the application. An attacker could use this information to discover possible areas to exploit.

You can take the following preventative measures:

* Disable unused endpoints within the Mendix Portal completely by applying a **deny all access** preset on them
* Apply IP filtering or client certificate authentication to restrict access

Keep the following in mind:

* If there are other app-specific request handlers that should have an access restriction applied, then click **New** to add them as additional paths
* The URLs of test and acceptance environments can easily be guessed; in order to take effective measures, the restrictions should be applied to these environments also

## Applying Authentication on Services

When publishing a web or REST service, you should consider whether this service should be consumable by everybody (anonymous) or by a limited set of users or systems. Whenever a limited set of users should be allowed, a Mendix (web service) user should be created for each consumer of this service. The option of creating (fine-grained instead of generic) users enables an application to do the following:

* Identify which user caused a change in your application (traceability)
* Constrain access on the user (role) level
* Log the usage of your service

Mendix offers the following options for providing authentication for your services:

* User name and password validation, specified within Mendix Studio Pro (for details, see [Published Web Services](/refguide8/published-web-services/))
* Client certificates and IP ranges, which are specified in Mendix Cloud – these can be found at the network tab of your node’s environment details as **Access Restriction Profiles**

## Using the Encryption Module When Storing Sensitive Information

Your application might require sensitive information that should be extra encrypted. These are some examples:

* Connection information for consumed services (like credentials, service locations, or keys)
* Personal information (like bank account numbers or social security numbers)

This data is defined within the domain model and stored within the database of your application. To minimize the impact of this information when it is leaked, Mendix recommends storing this data in a (symmetric) encrypted manner. The [Encryption](/appstore/modules/encryption/) module available from the Mendix Marketplace provides a way to encrypt this sensitive information in a database record based on an encryption key that is stored at the Mendix application server.

## Using a Third-Party Identity Provider

When developing an application, authentication is one of the basic considerations. Even though Mendix comes with a basic authentication mechanism, your application’s security is improved when authentication is delegated to an enterprise grade identity provider like ADFS.

Mendix offers the [SAML](/appstore/modules/saml/) module that enables your application to be connected with these services.

Your application can gain the following benefits from using an identity provider:

* User management is centralized (for example within Active Directory), which simplifies the on- and off- boarding of new employees or changed roles
* The Mendix app does not contain (hashed) passwords
* Identity providers can add extra layers of security, like two-factor authentication
* Stronger password policies are applied
* The user experience is improved by facilitating single sign-on (SSO)

## Applying a Strong Password Policy

By default, Mendix forces a strong password policy. The same password policy that is configured in Mendix Studio Pro is also used for apps running in a hosted environment (for example, on test, acceptance, and production).

It is very tempting to simplify the password constraints for development purposes (for example, making it possible to use a single character to login). However, Mendix recommends avoiding this approach so that deployments will continue to force a strong password policy.

The password policy can be set by via the guidelines described in [Password Policy](/refguide8/password-policy/).

## Renaming the Administrator User

Each application requires power users who should be able to administer technical functions (like configuring SSO). By default, the user who has these capabilities is called **MxAdmin** and has the **Administrator** role.

This information can be exploited by an attacker (for example, by trying to guess the password). Even though Mendix will block the user for about 5 minutes after three unsuccessful login attempts, renaming the default MxAdmin user is recommended.

The user name of the administrator can be changed in 's **Project Security** settings on the **Administrator** tab.

When deployed to Mendix Cloud, the information about the administrator user name and role is taken into account when using the **Change admin password** button on the environment. After changing the settings in and redeploying the application, a successful admin password change will trigger the creation of a user in the app with the new name and role.

{{% alert color="info" %}}
At this point, the application does not automatically remove the user with the previous user name. Removing the old **MxAdmin** account has to be done manually.
{{% /alert %}}

## Using SSL on Consumed Web Services Whenever Possible

Most apps consume (web) services that could be located within an organization itself or at an external third party. When such a service is consumed by an application, your request crosses multiple networks and devices before it reaches its endpoint (the service). A potential attacker in between would be able to read and manipulate the conversation between the application and the service.

By using an SSL connection and adding the public key of the endpoint within your application, you will ensure the following:

* The conversation between you and the service has not been tampered with
* The conversation is not readable if it was ever intercepted
* The identity of your endpoint is confirmed

There are several scenarios possible for protecting your outgoing connections using encryption. These depend on the infrastructure possibilities and protocols used. For more information, see [How to Secure Outgoing Connections from Your App](/developerportal/deploy/securing-outgoing-connections-from-your-application/).

You can add individual certificates in your project’s settings in . Test, acceptance, and production environments require their certificates to be uploaded to Mendix Cloud (for more information, see [Certificates](/developerportal/deploy/certificates/)).

## Adding HTTP Headers {#adding-http-header}

HTTP headers can add an additional layer of security and help you detect certain attacks. For information on how to add HTTP headers, see the [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) section in *Environment Details*.  

An example of an attack is when an application is embedded in an iframe. Applications that can be embedded within an iframe can be misused by attackers. By using an overlay, it could trick users into clicking buttons and make them perform actions within the application on their behalf without knowing it. This approach is called [clickjacking](https://www.owasp.org/index.php/Clickjacking).

By sending a header to the user’s browser, it can block the use of the Mendix application within an iframe and avoid this type of attack. The header is set by default to block embedding within an iframe, but can be configured using [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) in your node’s environment details within **Apps**. If you change this value, you will also need to ensure that *SameSite* cookies are set to the correct value. See [Iframes and Running Apps](/developerportal/deploy/running-in-iframe/) for more information.

## Maintaining a High Level of Project Hygiene

As an application grows in functionality, it also increases the chance of containing logic that could be exploitable for an attacker. Also, over time, vulnerabilities within logic can be discovered. Keeping your project hygiene at a high level will reduce the chances of a vulnerable application.

To keep your project hygiene at a good level, perform the following steps:

* Remove unused modules, widgets, and Java libraries
* Remove microflows that are not being used (these appear as warnings in Studio Pro)
* Avoid using components with known vulnerabilities (like Java or JavaScript libraries)

A good source of known vulnerabilities is the [Common Vulnerabilities and Exposures website](https://cve.mitre.org/).

## Configuring User Roles and Access

Which users and roles are defined within an application is different per app and project. However, there are some key guidelines to keep in mind when validating the user security:

* Anonymous access should be disabled if it has no function within the application
    * Some applications have anonymous access enabled, solely to serve a custom login form – this can be replaced by modifying the default *login.html* within your theme (which will also help the user experience with an improved loading time)
* Roles managing other user roles should be as strict as possible (configured via **User management** within the user role options)
* The role of the app's administrator user (default **MxAdmin**) should only be able to create the actual administrative accounts (or configure SSO)

## Scanning Uploaded Files for Malicious Content {#scanning-for-malicious-content}

Security in Mendix does not include scanning files that end-users upload or download from your application for viruses and malware. 

To scan uploaded files for malicious content, do one of the following:

* Create a custom module and configure the functionality yourself.
* Check available modules in the [Mendix Marketplace](https://marketplace.mendix.com/). For more information on how to use the Mendix Marketplace content, see [How to Use Marketplace Content](/appstore/use-content/).
