---
title: "Mendix IP Addresses"
parent: "mendix-cloud-deploy"
menu_order: 38
description: "A list of static IP addresses used by the Mendix cloud"
tags: ["Mendix cloud", "IP address", "Cloud Portal"]
---

## 1 Introduction

An Internet Protocol address (IP address) is simply the address of a device on a network that other devices can understand. It can be used to locate, identify, and communicate with that device on the network (Internet or local).

## 2 Definitions

Mendix uses one IP address when someone connects to your Mendix application (Incoming IP) and a different IP address for when your application connects to outside services (Outgoing IP).

{{% alert type="warning" %}}
Incoming IP addresses are liable to change without notice and should not be used to access the application.

Mendix will endeavor to maintain the current *outgoing* IP addresses. However, they may change for operational reasons and this is subject to a 48-hour notice period.
{{% /alert %}}

### 2.1 Incoming IP

This is the IP address of one of our front-facing web servers. This is the IP address your browser connects to when you visit your application in the Mendix Cloud, for example, yourapplication.mendixcloud.com. You can also retrieve this IP address easily by performing a DNS lookup for this domain with, for example, http://ping.eu/nslookup/ (not 127.0.0.1).

### 2.2 Outgoing IP

This is the IP address other servers see when the Mendix application initiates the connection. You normally need to add it to your firewall if you want your Mendix application to contact one of your firewalled servers.

Mendix uses the following static IP addresses. If you need further information, please file a support ticket with Mendix Support.

#### 2.2.1 Mendix Cloud v4

| Region | Location | IP Addresses |
| --- | --- | ---|
| Mendix Cloud V4 Free Tier EU | Ireland (eu-west-1) | `52.211.106.230` <br /> `52.18.20.119` <br /> `52.18.122.238` |
| Mendix Cloud V4 EU  | Frankfurt (eu-central-1) | `52.58.42.15` <br /> `35.157.102.14` <br /> `35.156.112.28` |
| Mendix Cloud V4 US | North Virginia (us-east-1) | `52.205.207.103` <br /> `52.55.243.62` <br /> `34.197.224.250` |
| Mendix Cloud V4 Asia Pacific | Tokyo (ap-northeast-1) |  `52.198.238.110` <br /> ` 13.113.58.15` <br /> ` 52.193.228.1` |
| Mendix Cloud V4 UK | London (eu-west-2) | `35.177.185.47` <br /> ` 52.56.174.215` <br /> ` 18.130.169.15` |
| Mendix Cloud V4 IE | Ireland (eu-west-1) | `52.18.10.62` <br /> ` 52.208.39.99` <br /> `99.80.177.69` |

#### 2.2.2 Mendix Cloud v3 (XS4/BIT)

* `82.94.240.112/28`
* `2001:888:2177::/48`
* `213.154.238.16/28`
* `2001:7b8:670::/48`

## 3 Frequently Asked Questions

**Why does the IP address need to change?**

Because Mendix provides a platform we need to keep our infrastructure flexible. As a result, even though Mendix servers use static IP addresses, those IP addresses are subject to change occasionally. Since these are manual changes we provide a 48-hour notice. Please note that a longer notice period would hinder our operational capabilities.

**In the past we have received the same IP address for multiple environments and/or applications. How is that possible?**

The incoming IP address is the same for multiple environments and applications because it is the IP address of a front facing web server. The web server serves multiple applications.

The outgoing IP address is the same for multiple environments and applications because we use Network Address Translation on our routers.

**Which IP address should be whitelisted on our firewall?**

Usually you configure your firewall with rules for *incoming* traffic to your network. Therefore you need to use the *outgoing IP address* of the Mendix application.

## 4 Read More

* [Cloud Status: Mendix Cloud](/developerportal/deploy/mendix-cloud-status)
