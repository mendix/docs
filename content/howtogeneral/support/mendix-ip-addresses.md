---
title: "Mendix IP Addresses"
category: "Mendix Support"
#parent: ""
#description: ""
#tags: []
---

## 1 Introduction

An Internet Protocol address (IP address) is simply the address of a device on a network that other devices can understand. It can be used to locate, communicate and identify that device on a network (Internet or local).

## 2 Definitions

Mendix uses one IP address when someone connects to your Mendix application (Incoming IP) and a different IP address for when your application connects to outside services (Outgoing IP).

### 2.1 Incoming IP

This is the IP address of one of our front-facing web servers. This is the IP address your browser connects to when you visit your application in the Mendix Cloud, for example, yourapplication.mendixcloud.com. You can also retrieve this IP address easily by performing a DNS lookup for this domain with, for example, http://ping.eu/nslookup/ (not 127.0.0.1).

### 2.2 Outgoing IP

This is the IP address other servers see when the Mendix application initiates the connection. You normally need to add it to your firewall if you want your Mendix application to contact one of your firewalled servers. You need to file a support ticket with Mendix Support and provide your application URL to obtain this IP address.

Mendix uses static IP addresses. However, both outgoing and incoming IP addresses are subject to change based on a 48-hour notice.

## 3 Frequently Asked Questions

**Why does the IP address need to change?**

Because Mendix provides a Platform we need to keep our infrastructure flexible. As a result, even though Mendix servers use static IP addresses, those IP addresses are subject to change occasionally. Since these are manual changes we provide a 48-hour notice. Please note that a longer notice period would hinder our operational capabilities.

**In the past we have received the same IP address for multiple environments and/or applications. How is that possible?**

The incoming IP address is the same for multiple environments and applications because it is the IP address of a front facing web server. The web server serves multiple applications.

The outgoing IP address is the same for multiple environments and applications because we use Network Address Translation on our routers.

**Which IP address should be whitelisted on our firewall?**

Usually you configure your firewall with rules for Incoming traffic to your network. Therefore you need to use the outgoing IP address of the Mendix application.

## 4 Related Content

* [Mendix Cloud Status](/developerportal/deploy/mendix-cloud-status)
