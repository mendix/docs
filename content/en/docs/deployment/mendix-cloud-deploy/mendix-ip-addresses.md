---
title: "Mendix IP Addresses"
url: /developerportal/deploy/mendix-ip-addresses/
weight: 80
description: "A list of static IP addresses used by Mendix Cloud"
---

## Introduction

An IP address is the address of a device on an internet or local network, written in a format that other devices can understand. The IP address can be used to locate, identify, and communicate with that device on the network.

## Definitions

Mendix uses one IP address when someone connects to your Mendix application (incoming IP) and a different IP address when your application connects to outside services (outgoing IP).

{{% alert color="warning" %}}
Incoming IP addresses are liable to change without notice and should not be used to access the application.

Mendix maintains the current outgoing IP addresses as much as possible. However, the outgoing addresses may change for operational reasons. At least 48 hours before any changes, Technical Contacts will be emailed and a notification will be listed on [Mendix Platform Status](https://status.mendix.com).
{{% /alert %}}

### Incoming IP

This is the IP address of one of Mendix's front-facing web servers. It is the IP address your browser connects to when you visit your application in Mendix Cloud (for example, when you go to `yourapplication.mendixcloud.com`).

You can retrieve this IP address by performing a DNS lookup for the domain. To do so, you can use a free DNS lookup service such as http://ping.eu/nslookup/.

### Outgoing IP {#outgoing}

This is the IP address other servers see when the Mendix application initiates the connection. You normally need to add it to your firewall if you want your Mendix application to contact one of your firewalled servers.

Mendix uses the following static IP addresses. If you need more information, file a support ticket with Mendix Support.

#### Mendix Cloud

| Region | Location | IP Addresses | Default URL |
| ------ | -------- | ------------ | ----------- |
| Mendix Cloud Free Tier EU | Ireland (eu-west-1) | `52.18.20.119` <br /> `52.18.122.238` <br /> `52.211.106.230` | `{app-name}-sandbox.mxapps.io`<br/>or<br/>`{app-name}.mxapps.io` |
| Mendix Cloud Africa | Cape Town (af-south-1) | `13.245.222.81`<br /> `13.246.150.209`<br /> `13.246.181.69` | `{app-name}.apps.af-1a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.af-1a.mendixcloud.com` |
| Mendix Cloud Asia Pacific | Singapore (ap-southeast-1) | `52.77.0.52` <br /> `54.179.212.86` <br /> `122.248.194.24`  | `{app-name}.apps.ap-2a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.ap-2a.mendixcloud.com` |
| Mendix Cloud Asia Pacific | Sydney (ap-southeast-2) | `13.54.176.58` <br /> `13.54.220.143` <br /> `13.238.3.124` | `{app-name}.apps.au-1a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.au-1a.mendixcloud.com` |
| Mendix Cloud Asia Pacific | Tokyo (ap-northeast-1) | `13.113.58.15` <br /> `52.193.228.1` <br /> `52.198.238.110` | `{app-name}.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.mendixcloud.com` |
| Mendix Cloud Asia Pacific | Mumbai (ap-south-1) | `43.204.254.95` <br /> `43.205.31.32` <br /> `65.1.183.103`  | `{app-name}.apps.ap-3a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.ap-3a.mendixcloud.com` |
| Mendix Cloud Asia Pacific  | Osaka (ap-northeast-3) | `15.168.59.120` <br /> `13.208.255.64` <br /> `15.152.172.188` | `{app-name}.apps.ja-2a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.ja-2a.mendixcloud.com` |
| Mendix Cloud Asia Pacific  | Seoul (ap-northeast-2) | `3.35.61.175` <br /> `3.35.153.90` <br /> `43.200.98.224` | `{app-name}.apps.ap-4a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.ap-4a.mendixcloud.com` |
| Mendix Cloud Asia Pacific  | Jakarta (ap-southeast-3) | `108.137.164.156` <br /> `43.218.102.86` <br /> `43.218.75.101` | `{app-name}.apps.ap-5a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.ap-5a.mendixcloud.com` |
| Mendix Cloud Canada | Canada (ca-central-1) | `3.97.111.124` <br /> `3.98.194.54` <br /> `35.182.171.81` | `{app-name}.apps.ca-1a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.ca-1a.mendixcloud.com` |
| Mendix Cloud EU | Frankfurt (eu-central-1) |  `35.156.112.28` <br /> `35.157.102.14` <br /> `52.58.42.15`| `{app-name}.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.mendixcloud.com` |
| Mendix Cloud EU | Frankfurt-2 (eu-central-1) | `3.76.96.252` <br /> `3.125.228.151` <br /> `54.93.126.19` | `{app-name}.apps.eu-1c.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.eu-1c.mendixcloud.com` |
| Mendix Cloud IE | Ireland (eu-west-1) | `52.18.10.62` <br /> `52.208.39.99` <br /> `99.80.177.69` | `{app-name}.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.mendixcloud.com` |
| Mendix Cloud Middle East | Bahrain (me-south-1) | `15.184.118.253`<br /> `16.24.5.102`<br /> `157.241.15.222` | `{app-name}.apps.me-1a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.me-1a.mendixcloud.com` |
| Mendix Cloud Middle East | UAE (me-central-1) | `3.29.53.85` <br /> `3.29.155.3` <br /> `3.29.189.106` | `{app-name}.apps.me-2a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.me-2a.mendixcloud.com` |
| Mendix Cloud SA | São Paulo (sa-east-1) | `15.229.194.124` <br /> `54.232.11.167` <br /> `177.71.150.202` | `{app-name}.apps.sa-1a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.sa-1a.mendixcloud.com` |
| Mendix Cloud UK | London (eu-west-2) | `18.130.169.15` <br /> `35.177.185.47` <br /> `52.56.174.215` | `{app-name}.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.mendixcloud.com` |
| Mendix Cloud US | North Virginia (us-east-1) | `34.197.224.250` <br /> `52.55.243.62` <br /> `52.205.207.103` | `{app-name}.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.mendixcloud.com` |
| Mendix Cloud US | Oregon (us-west-2) | `35.160.4.29` <br /> `44.236.131.88` <br /> `54.190.172.197` | `{app-name}.apps.us-2a.mendixcloud.com`<br/>or<br/>`{app-name}-{environment-type}.apps.us-2a.mendixcloud.com` |

##### Accessing AWS Services in Mendix Cloud

Mendix Cloud uses [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html) to privately access AWS services.

AWS API requests can, therefore, originate from the following IP ranges:

* `10.10.128.0/21`
* `10.10.136.0/21`
* `10.10.144.0/21`

The [aws:VpcSourceIp](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-vpcsourceip) condition
key can be used in a policy to allow principals (Mendix apps and end-users) to make requests only from within a specified IP range. If you apply IP restrictions to your AWS IAM user or role, make sure that the IP ranges for AWS API requests (above) are allowed in your policy.

## Frequently Asked Questions

### Why Does the Outgoing IP Address Need to Change?

Because Mendix provides a platform, the infrastructure needs to remain flexible. Mendix maintains the current outgoing IP addresses as much as possible. However, the outgoing addresses may occasionally change for operational reasons. Any changes are subject to a 48-hour notice period.

### In the Past, We Have Received the Same IP Address for Multiple Environments and Applications. How Is That Possible?

The incoming IP address is the same for multiple environments and applications because it is the IP address of a front-facing web server. The web server serves multiple applications.

The outgoing IP address is the same for multiple environments and applications because Mendix uses network address translation (NAT) on its routers.

### Which IP Address Should Be Safelisted on Our Firewall?

Usually, you configure your firewall with rules for incoming traffic to your network. Therefore, you need to use the outgoing IP address of the Mendix application.

## Read More

* [Mendix Cloud Status](/developerportal/deploy/mendix-cloud-status/)
