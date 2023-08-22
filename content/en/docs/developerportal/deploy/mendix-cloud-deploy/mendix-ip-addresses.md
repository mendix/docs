---
title: "Mendix IP Addresses"
url: /developerportal/deploy/mendix-ip-addresses/
weight: 38
description: "A list of static IP addresses used by the Mendix cloud"
tags: ["Mendix cloud", "IP address", "Cloud Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

An Internet Protocol address (IP address) is simply the address of a device on a network that other devices can understand. It can be used to locate, identify, and communicate with that device on the network (Internet or local).

## 2 Definitions

Mendix uses one IP address when someone connects to your Mendix application (Incoming IP) and a different IP address for when your application connects to outside services (Outgoing IP).

{{% alert color="warning" %}}
Incoming IP addresses are liable to change without notice and should not be used to access the application.

Mendix will endeavor to maintain the current *outgoing* IP addresses. However, they may change for operational reasons and this is subject to a 48-hour notice period.
{{% /alert %}}

### 2.1 Incoming IP

This is the IP address of one of our front-facing web servers. This is the IP address your browser connects to when you visit your application in the Mendix Cloud, for example, yourapplication.mendixcloud.com. You can also retrieve this IP address easily by performing a DNS lookup for this domain with, for example, http://ping.eu/nslookup/ (not 127.0.0.1).

### 2.2 Outgoing IP {#outgoing}

This is the IP address other servers see when the Mendix application initiates the connection. You normally need to add it to your firewall if you want your Mendix application to contact one of your firewalled servers.

Mendix uses the following static IP addresses. If you need further information, please file a support ticket with Mendix Support.

#### 2.2.1 Mendix Cloud

| Region | Location | IP Addresses | Default URL |
| --- | --- | --- | --- |
| Mendix Cloud Free Tier EU | Ireland (eu-west-1) | `52.18.20.119` <br /> `52.18.122.238` <br /> `52.211.106.230` | {app-name}-sandbox.mxapps.io<br/>*or*<br/>{app-name}.mxapps.io |
| Mendix Cloud Africa | Cape Town (af-south-1) | `13.245.222.81`<br /> `13.246.150.209`<br /> `13.246.181.69` | {app-name}.apps.af-1a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.af-1a.mendixcloud.com |
| Mendix Cloud Asia Pacific | Singapore (ap-southeast-1) | `52.77.0.52` <br /> `54.179.212.86` <br /> `122.248.194.24`  | {app-name}.apps.ap-2a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.ap-2a.mendixcloud.com |
| Mendix Cloud Asia Pacific | Sydney (ap-southeast-2) | `13.54.176.58` <br /> `13.54.220.143` <br /> `13.238.3.124` | {app-name}.apps.au-1a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.au-1a.mendixcloud.com |
| Mendix Cloud Asia Pacific | Tokyo (ap-northeast-1) | `13.113.58.15` <br /> `52.193.228.1` <br /> `52.198.238.110` | {app-name}.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.mendixcloud.com |
| Mendix Cloud Asia Pacific | Mumbai (ap-south-1) | `43.204.254.95` <br /> `43.205.31.32` <br /> `65.1.183.103`  | {app-name}.apps.ap-3a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.ap-3a.mendixcloud.com |
| Mendix Cloud Canada | Canada (ca-central-1) | `3.97.111.124` <br /> `3.98.194.54` <br /> `35.182.171.81` | {app-name}.apps.ca-1a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.ca-1a.mendixcloud.com |
| Mendix Cloud EU | Frankfurt (eu-central-1) |  `35.156.112.28` <br /> `35.157.102.14` <br /> `52.58.42.15`| {app-name}.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.mendixcloud.com |
| Mendix Cloud EU | Frankfurt-2 (eu-central-1) | `3.76.96.252` <br /> `3.125.228.151` <br /> `54.93.126.19` | {app-name}.apps.eu-1c.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.eu-1c.mendixcloud.com |
| Mendix Cloud IE | Ireland (eu-west-1) | `52.18.10.62` <br /> `52.208.39.99` <br /> `99.80.177.69` | {app-name}.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.mendixcloud.com |
| Mendix Cloud Middle East | Bahrain (me-south-1) | `15.184.118.253`<br /> `16.24.5.102`<br /> `157.241.15.222` | {app-name}.apps.me-1a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.me-1a.mendixcloud.com |
| Mendix Cloud SA | São Paulo (sa-east-1) | `15.229.194.124` <br /> `54.232.11.167` <br /> `177.71.150.202` | {app-name}.apps.sa-1a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.sa-1a.mendixcloud.com |
| Mendix Cloud UK | London (eu-west-2) | `18.130.169.15` <br /> `35.177.185.47` <br /> `52.56.174.215` | {app-name}.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.mendixcloud.com |
| Mendix Cloud US | North Virginia (us-east-1) | `34.197.224.250` <br /> `52.55.243.62` <br /> `52.205.207.103` | {app-name}.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.mendixcloud.com |
| Mendix Cloud US | Oregon (us-west-2) | `35.160.4.29` <br /> `44.236.131.88` <br /> `54.190.172.197` | {app-name}.apps.us-2a.mendixcloud.com<br/>*or*<br/>{app-name}-{environment-type}.apps.us-2a.mendixcloud.com |

##### 2.2.1.1 Accessing AWS Services in Mendix Cloud

The Mendix Cloud uses [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html) to privately access AWS services.

AWS API requests can, therefore, originate from the following IP ranges:

* `10.10.128.0/21`
* `10.10.136.0/21`
* `10.10.144.0/21`

The [aws:VpcSourceIp](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-vpcsourceip) condition
key can be used in a policy to allow principals (Mendix apps and end-users) to make requests only from within a specified IP range. If you apply IP restrictions to your AWS IAM user or role, make sure that the IP ranges for AWS API requests, above, are allowed in your policy.

## 3 Frequently Asked Questions

**Why does the IP address need to change?**

Because Mendix provides a platform we need to keep our infrastructure flexible. As a result, even though Mendix servers use static IP addresses, those IP addresses are subject to change occasionally. Since these are manual changes we provide a 48-hour notice. Please note that a longer notice period would hinder our operational capabilities.

**In the past we have received the same IP address for multiple environments and/or applications. How is that possible?**

The incoming IP address is the same for multiple environments and applications because it is the IP address of a front facing web server. The web server serves multiple applications.

The outgoing IP address is the same for multiple environments and applications because we use Network Address Translation on our routers.

**Which IP address should be safelisted on our firewall?**

Usually you configure your firewall with rules for *incoming* traffic to your network. Therefore you need to use the *outgoing IP address* of the Mendix application.

## 4 Read More

* [Mendix Cloud Status](/developerportal/deploy/mendix-cloud-status/)
