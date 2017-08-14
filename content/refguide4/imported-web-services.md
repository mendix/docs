---
title: "Imported Web Services"
parent: "integration"
---

This document describes imported web services. If you're looking for specific information on the imported web services screen, you can check the [Imported web service](imported-web-service) documentation.

Using imported web services, you can import a web service from an external application so they can be used in your own application. You can import web services from third parties (such as the
[w3schools example service](http://www.w3schools.com/webservices/tempconvert.asmx?WSDL)) or from other mendix projects.

To actually use these imported web services in a microflow, see [Call Web Service](call-web-service).

## Proxies

If you are behind a firewall, you might need to use a proxy to call a webservice. Specific information on how to configure the JVM to use a proxy can be found [here](using-a-proxy-to-call-a-webservice)

## Protocols

Mendix supports consuming web service data according to the following protocols:

*   SOAP 1.1
*   SOAP 1.2
*   MTOM/XOP
*   WS-MetadataExchange v1.1
*   WS-Policy v1.2
*   WS-Policy v1.5
*   WS-PolicyAttachment 1.5
*   WS-ReliableMessaging 1.1

To connect to a Microsoft .NET web service, you have to configure your web service to use basicHttpBinding (SOAP 1.1) or wsHttpBinding (SOAP 1.2). For a secure connection, you have to configure SSL and to set the security mode to 'Transport' with clientCredentialType 'Basic' in the file 'web.config'. The user credentials can be configured in the Modeler as [described here](call-web-service) (see 'Use HTTP authentication').

## Related Articles

*   [How To: Consume a web service](/howto40/consume-a-web-service)
