---
title: "Project Settings"
parent: "project"
---


In the project settings dialog you can alter settings which are applicable to the whole project.

## Configurations

A configuration is a group of settings with a name. You can define any number of configurations. The active configuration, i.e. the one that will be used when running your application, is determined by the drop-down in the toolbar of the Modeler.

See [Configuration](configuration) for the settings in a configuration.

## Model

### Enable page templates

Determines whether or not you the project allows the use of [page templates](page-templates) when creating pages. 

### Enable widget bundling

When deploying to the cloud, custom widgets are bundled to optimize client-server communication. When deploying locally, this step is skipped to accelerate start-up duration. In some cases, this may obfuscate errors triggered by faulty custom widgets. 

If this option is set, custom widgets will also be bundled locally. This mimics the production deployment, eliminating risk at the cost of start-up time.

### Theme

Here you can select the theme to use for your application. '(Default)' means that the contents of the 'theme' directory in your project directory will be copied to the 'web' directory in the deployment directory. If the 'theme' directory contains theme packages (.zip files), you can select one of those here and then that theme will be used.

You can also import a theme package (.zip) into your project directory using the 'Import' button.

### After startup

Here you can select a microflow that is automatically executed immediately after the application has been started up.

### Before shutdown

Here you can select a microflow that is automatically executed when a shutdown command has been given, just before the application shuts down.

### Health check

Select a microflow which reports on the health status of a running application. When this microflow returns an empty String, the application is healthy, otherwise the String represents an explanation why the application is not healthy.

### First day of the week

The first day of the week setting determines the first day of the week in the date picker widget.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Default (based on locale)</td><td class="confluenceTd">The first day of the week in date picker widgets is based on the locale of the user.</td></tr><tr><td class="confluenceTd">Sunday</td><td class="confluenceTd">Use Sunday as first day of the week in date picker widgets.</td></tr><tr><td class="confluenceTd">Monday</td><td class="confluenceTd">Use Monday as first day of the week in date picker widgets.</td></tr><tr><td class="confluenceTd">Tuesday</td><td class="confluenceTd">Use Tuesday as first day of the week in date picker widgets.</td></tr><tr><td class="confluenceTd">Wednesday</td><td class="confluenceTd">Use Wednesday as first day of the week in date picker widgets.</td></tr><tr><td class="confluenceTd">Thursday</td><td class="confluenceTd">Use Thursday as first day of the week in date picker widgets.</td></tr><tr><td class="confluenceTd">Friday</td><td class="confluenceTd">Use Friday as first day of the week in date picker widgets.</td></tr><tr><td class="confluenceTd">Saturday</td><td class="confluenceTd">Use Saturday as first day of the week in date picker widgets.</td></tr></tbody></table>

_Default value_: Default (based on locale)

### Default time zone

The default time zone determines the time zone for newly created users. If your application is only used in one time zone setting this default will make sure that the users of your application never have to worry about setting their time zone.

### Scheduled event time zone

The scheduled event time zone defines under which timezone scheduled events run. The default is UTC and this has been the case since 3.0\. If you would like to run scheduled events under another timezone such as the timezone the office of the company is at or perhaps the project default timezone, you can select it here.

This affects timezone-related operations such as parsing and formatting dates from/to strings and obtaining the beginning of the current day.

If you run on-premise then you can select the timezone the server runs at, but do note that no guarantees are given for the whereabouts of application servers in the cloud.

### Hash algorithm

The hash algorithm that is used to generate hash values for attributes of type HashString, such as the password of a user.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th><th class="confluenceTh">Version</th></tr></thead><tbody><tr><td class="confluenceTd">BCrypt (recommended)</td><td class="confluenceTd">Resistant to brute-force search attacks</td><td class="confluenceTd">Added in 4.3.0</td></tr><tr><td class="confluenceTd">SSHA256</td><td class="confluenceTd">Seeded Secure Hash Algorithm 2, digest length 256 bits</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">SHA256</td><td class="confluenceTd">Secure Hash Algorithm 2, digest length 256 bits</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">MD5</td><td class="confluenceTd">Message-Digest algorithm 5</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">SSHA</td><td class="confluenceTd">Seeded Secure Hash Algorithm</td><td class="confluenceTd">Removed in 4.2.0</td></tr><tr><td class="confluenceTd">SHA1</td><td class="confluenceTd">Secure Hash Algorithm 1</td><td class="confluenceTd">Removed in 4.2.0</td></tr></tbody></table>

_Default value_: BCrypt (recommended)

For more information on MD5 see [MD5 on wikipedia](http://en.wikipedia.org/wiki/MD5).

For more information on SHA etc. see [SHA hash functions on wikipedia](http://en.wikipedia.org/wiki/SHA_hash_functions).

### Rounding mode

 The rounding mode is used to select how to round numbers when performing calculations.

The rounding methods "Half away from zero" and "Half to the nearest even number" indicate how rounding is performed in case of a tie (e.g. 2.5).

<table><thead><tr><th class="confluenceTh">&nbsp;</th><th colspan="2" class="confluenceTh">Result of rounding input to one digit with the given rounding mode</th></tr></thead><tbody><tr><th class="confluenceTh">Input number</th><th class="confluenceTh">Half away from zero</th><th class="confluenceTh">Half to the nearest even number</th></tr><tr><td class="confluenceTd">5.5</td><td class="confluenceTd">6</td><td class="confluenceTd">6</td></tr><tr><td class="confluenceTd">2.5</td><td class="confluenceTd">3</td><td class="confluenceTd">2</td></tr><tr><td class="confluenceTd">1.6</td><td class="confluenceTd">2</td><td class="confluenceTd">2</td></tr><tr><td class="confluenceTd">1.1</td><td class="confluenceTd">1</td><td class="confluenceTd">1</td></tr><tr><td class="confluenceTd">1.0</td><td class="confluenceTd">1</td><td class="confluenceTd">1</td></tr><tr><td class="confluenceTd">-1.0</td><td class="confluenceTd">-1</td><td class="confluenceTd">-1</td></tr><tr><td class="confluenceTd">-1.1</td><td class="confluenceTd">-1</td><td class="confluenceTd">-1</td></tr><tr><td class="confluenceTd">-1.6</td><td class="confluenceTd">-2</td><td class="confluenceTd">-2</td></tr><tr><td class="confluenceTd">-2.5</td><td class="confluenceTd">-3</td><td class="confluenceTd">-2</td></tr><tr><td class="confluenceTd">-5.5</td><td class="confluenceTd">-6</td><td class="confluenceTd">-6</td></tr></tbody></table>

_Default value_: Half away from zero

### Multiple sessions per user

If this option is enabled, users can sign in multiple times through different clients (e.g. desktop browser and tablet). Otherwise, an existing session for a user is signed out when the user signs in somewhere else.

{{% alert type="warning" %}}

In production this only works with licenses based on concurrent users.

{{% /alert %}}

_Default value_: Yes

## Languages

### Default language

The default language indicates the language that is used for end-users when a user has not chosen a language. The default language is also used as a fall-back language when a certain text is not translated in another language.

### Languages

The list of languages in which your application will be available for end-users.

For each language you can configure whether to check that all mandatory texts have a value. The default language is always checked. If a language is not checked, and certain texts are not translated in the modeler, the default language is used as fall-back language. This means that you can run your application even though you have only partially translated your interface into a new language.

## Certificates

Certificates are used to connect to web services over HTTPS when:

*   The server uses a self-signed certificate authority, and/or
*   A client certificate (certificate with private key) is required.

These certificates can be imported into the Modeler using the 'Import' button. Certificate authority files usually have a .crt extension and client certifcates usually have a .p12 or a .pfx extension. After importing use 'View details' to acquire more information concerning the certificate.

Client certificates added here will be used whenever a server accepts a client certificate. If you upload more than one client certificate, one of them will be chosen based on the requirements of the server. If you need more control over client certificates, you should not upload the certificates here, but use [custom settings](custom-settings) *ClientCertificates*, *ClientCertificatePasswords*, and *WebServiceClientCertificates*.

{{% alert type="warning" %}}

When running from the Modeler or from Eclipse the certificates will be used automatically to connect over https. In server scenarios the location of the certificate files has to be specified in the configuration file.

{{% /alert %}}{{% alert type="warning" %}}

Be aware that during local deployment, the certificate files will be located in the deployment folder, under model/certificates. Therefore, do not use production certificates during development.

{{% /alert %}}{{% alert type="success" %}}

Certificates can be installed in the Windows Certificate Store using the 'Install Certificate...' wizard in the 'View details' form. This can be useful when trying to access a WSDL-file using a https connection which requires a client certificate.

{{% /alert %}}{{% alert type="success" %}}

When an SSLException occurs at runtime with the message "`HelloRequest followed by an unexpected handshake message`" or when a web service does not respond (Java 6 update 21 and higher) when using the imported certificates, this is caused by either the client or server not being [RFC-5746](http://www.ietf.org/rfc/rfc5746.txt) compatible.
When updating the client and server to be compatible with RFC-5746 is not feasible, the following should be added to "Extra JVM parameters" in the "Server" tab to avoid this exception: `-Dsun.security.ssl.allowUnsafeRenegotiation=true`. Be warned that this does make the client-server communication vulnerable to an exploit which has been fixed in RFC-5746.
When client and server are RFC-5746 compatible at a future point in time, this JVM parameter can be removed.

For background information see [this](http://www.oracle.com/technetwork/java/javase/documentation/tlsreadme2-176330.html) article.

{{% /alert %}}
