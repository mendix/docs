---
title: "Security Checklist For Your On-Premises Installation"
category: "Deployment"
---

### Use a Mendix Version Containing the Latest Security Patches

*   Use either Mendix version 3.3.3 or 4.3.0 or any newer 3.x or 4.x release. These releases contain important security fixes. If you're running on older versions before 3.3.3, 4.3.0 or even on 2.5.x, upgrade as soon as possible.

_Please Note: If your app runs in the Mendix Cloud and uses Mendix version 3.3.3, 4.3.0 or newer it will automatically comply with this checklist once it is deployed._

#### Use an Unprivileged Dedicated User Account for Every Application

*   For every Mendix application you run on a server, use a separate unprivileged operating system user account. Never run an application using Administrator or root permissions. Under Windows, only the Windows Service Console itself has to run under a privileged account. Never configure this account as service user account for the applications.

#### Configure File System Access

*   Make sure the separate unprivileged user account is the only user that has read and/or write permissions on the data (files,database,etc) and model directory in your project location. User accounts used for different Mendix applications should never be able to read each other's files or configuration. An exception to this is the public content in the web directory of the project, which does not need to be protected, so it can be read and directly served by a separate web server.

#### Use a Http Reverse Proxy With Ssl Support

*   Configure a reverse proxy (e.g. Nginx or IIS or Apache) as close to the application process as possible, that implements SSL on the http connection, so your end users who are using a web browser will connect to the application via the reverse proxy, using a https:// url. Make sure correct certificates matching the url used are in place, either recognized by Certificate Authorities present in modern web browsers, or by an internal Certificate Authority of your company, which has been distributed to the web browsers of all your users.

*   On the reverse proxy, which acts as SSL termination point, insert the HTTP header 'X-Forwarded-Scheme', with a value set to 'https' into requests that are sent to the Mendix application. This will communicate to the Mendix Runtime that the end user is using the application over https, and will set the 'secure' flag on session cookies. When the secure flag on session cookies is notset, browsers will also send the cookie when trying to connect over a normal http connection. So, when secure is not set on the cookies, also when only implementing a redirect tohttps on the normal http port, session-cookies will be sent in the clear over the network! The X-Forwarded-Scheme request header has to be inserted at the reverse proxy because it is the only way that the Mendix Runtime will detect the use of https automatically.

#### Configure Your Firewall

*   Make sure that, e.g. using firewall rules, it is impossible to directly connect to the application process (e.g. on port 8000) except for the reverse proxy. End users or an attacker should not be able to circumvent using https by directly connecting to the application port. New: Since Mendix 4.3.0, you are required to explicitly configure the application to be able to connect from the network instead of only at the local server.

#### Let the Http Reverse Proxy Serve Static Content

*   Highly recommended: Configure the reverse proxy to directly serve static content from the 'web' directory on the root location of the application url and the Mendix client system (located in the correct version to be used of the Mendix runtime distribution installed) on /mxclientsystem. The application process itself should only handle dynamic content (like the /xas/ and /ws/ sub-urls).

#### Secure Access to the Admin Port (for M2ee-tools and Windows Service Console Access)

*   Make sure that, e.g. using firewall rules, it's not possible to connect to the 'Adminport' of the Mendix application process from any other location than where administrative tools like m2ee-tools or the Windows Service Console are used. In most situations this will mean the port can only be reachable on the local host and all external access is denied. If allowing access from the network, keep in mind communication is not secured using SSL, so it cannot be used on networks that cannot be fully trusted. New: Since Mendix 4.3.0, the admin port will by default only allow connections from the local host. In case you want to connect from the network, this has to be explicitely configured.

*   Choose a strong password to protect the administrative interface, running on the admin TCP port. Set this password to e.g. a long random string. (When using the Windows Service Console, this is automatically done.) It's not used manually anywhere. It's only used in the background by administrative tools like m2ee-tools and the Windows Service Console to be able to connect back to the Mendix application after it has been started for administrative tasks.

#### Do Not Connect to a Production Database Using the Modeler

*   NEVER use the Mendix Business Modeler to directly connect to a production database, using e.g. an ssh tunnel to the database, or by using the Mendix Business Modeler on a Windows server. Because the Modeler is always running in development mode, it will instantaneously reset the password of the 'admin user' which is defined in the modeler to its development default (which likely means there will be a user MxAdmin with password set to '1' and/or create this account when it does not exist.
