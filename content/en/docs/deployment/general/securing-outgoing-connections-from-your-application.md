---
title: "Secure Outgoing Connections from Your App"
linktitle: "Secure Outgoing Connections"
url: /developerportal/deploy/securing-outgoing-connections-from-your-application/
weight: 50
description: "Describes which methods are available for securing connections from your app to the outside world."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

While all inbound connections to apps in Mendix Cloud are secured with TLS, your apps can also connect to other services over the internet. Some of these services will be third-party services and you will have to match the security settings set up by the service owner. Sometimes the service may be owned by you, or someone else in your company, and you can control how connection security is implemented.

There are various methods which are used for securing connections from *back end services* to your *app* via the internet. This document sometimes refers to Mendix Cloud, but the methods are applicable to all other set-ups, such as public cloud or on-premises deployments.

## Scenarios

### Scenario 1 - No Encryption

In some cases, encryption and authentication on connections is unnecessary. In this case unencrypted TCP/UDP based protocols can be used. This means that any data which is sent over this connection could be read if it is intercepted.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399049.png" class="no-border" >}}

### Scenario 2 - TLS/HTTPS

This is the most common scenario. The client app verifies the server certificate for the back end service and sets up an encrypted connection. Trust is verified via the chain of trust to a certificate authority in the client's trust store.

Using encryption, data sent and received over the connection cannot be decoded if it is intercepted by other parties, so to authenticate the client, a username/password or token can be used with, for example, HTTP headers. This can be used for services that natively support TLS.

To connect to the service from Mendix Cloud, the service is exposed on an external IP address and port. If this service is owned by you, it can be firewalled to only allow Mendix Cloud to connect to it. For more information about the IP address ranges of your app in Mendix Cloud, see [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing).

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399047.png" class="no-border" >}}

### Scenario 3 - TLS/HTTPS *With Client Certificate Validation*

For additional security, the server can validate the client's identity by checking its client certificate. See [Certificates](/developerportal/deploy/certificates/) for more information.

The rest of the security features of scenario 2 can also be applied.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399050.png" class="no-border" >}}

### Scenario 4 - Proxy Server for TLS Offloading

If a back end service owned by you does not support HTTPS out of the box, you can add a HTTPS reverse proxy server such as NGINX or HAProxy in front of it. This HTTPS reverse proxy can optionally also act as a firewall and can be deployed in a highly available way.

Migrations of back-end services within the same region can be done transparently by decoupling it from the public address of your service. The app in Mendix Cloud simply connects to an HTTPS endpoint.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399044.png" class="no-border" >}}

### Scenario 5 - Proxy Server for TLS Offloading *With Client Certificate Validation*

This scenario is identical to scenario 4, with one exception: your app includes a Client Certificate and the proxy server uses this to validate the identity of the app.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399045.png" class="no-border" >}}

### Scenario 6 - VPN

{{% alert color="warning" %}}
VPN is not supported at all in Mendix Cloud.
{{% /alert %}}

Many companies use a Virtual Private Network (VPN) to secure network connections between their own offices and data centers and other companies.

In this scenario, unencrypted TCP/UDP protocols can be used; all inter-network traffic is transparently encrypted by the VPN IPSEC Gateways. Subnets which should be routed over the VPN connections have to managed manually, and DNS resolution is done locally. Therefore, the app has to connect to the back end service by its IP address rather than its domain name.

The following disadvantages apply:

* DNS is not available
* With failover data centers, VPN becomes extremely difficult to manage
* Connections are added to (virtual) machines, this makes deployment to multi-tenant public-cloud environments based on containerization a challenge
* VPN gateways potentially add two more single points of failure

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399048.png" class="no-border" >}}

### Scenario 7 - SSH Server as a TCP Proxy

For certain deployments (for example, where non-HTTP protocols are used), you can set up an SSH Server as a proxy. Then you can use the [Jsch](http://www.jcraft.com/jsch/) library from a Java Action within Mendix to set up a secure channel to the other network, using a SOCKS or HTTP proxy to make your requests to.

Setting up an SSH enabled server and setting up a public/private keypair is a trivial task for most system administrators, but it is not as simple and standardized as HTTPS (reverse) proxy servers. When HTTP based protocols are available, scenarios 2 to 5 are preferable.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399052.png" class="no-border" >}}

## Notes

Client certificates can be added to your Mendix Cloud app from within the Mendix Portal. See [Certificates](/developerportal/deploy/certificates/) for more information.

Scenarios 2 to 5 work best for HTTP based protocols, which will work out of the box from Mendix core functionality, but also for many Mendix Marketplace modules and other content. However, by using Java actions, they can be applied to most TCP based connections which can be wrapped in TLS for added security.
