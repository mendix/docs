---
title: "Troubleshooting Team Server Issues"
url: /refguide9/troubleshoot-team-server-issues/
linktitle: "Team Server Issues"
weight: 30
description: "Presents a list of problems and fixes for Team Server issues."
---

## Introduction

Mendix Studio Pro needs to connect to the Team Server, where all your apps are stored. Team Server is a version control server. Currently, SVN is the default version control system for the Team Server, but you can choose to use Git. In the future, Git will become the default system. This document describes permissions and settings required to connect to the Team Server.

## Troubleshooting Team Server App Network Settings

Being unable to download the Team Server app can indicate that the security configuration of your company network is blocking access to `https://home.mendix.com` and the Team Server itself that is located at:

* `https://git.api.mendix.com/` for Git based apps.
* `https://teamserver.sprintr.com/` for SVN based apps.

Mendix Studio Pro uses the HTTPS (TCP) to communicate with the Team Server. To access the Team Server from Studio Pro, the network at your location needs the following settings:

* The HTTPS port (TCP 443) needs to be open
* The HTTP port (TCP 80) needs to be open

If you use SVN for version control you also need the following:

* WebDAV (verbs within the HTTP protocol) needs to be enabled on any proxy server

Mendix Studio Pro connects to `https://teamserver.sprintr.com/` and with the domains shown in the diagram below over HTTPS on port 443. These domains should be added to the firewall white list:

{{< figure src="/attachments/refguide9/version-control/troubleshoot-version-control-issues/networkaccessmendixplatform.png" alt="Domains home.mendix.com, cloud.mendix.com, and git.api.mendix.com (or teamserver.sprintr.com in case of SVN) need to be accessible on port 443 from your network" class="no-border" >}}

You can look up the IP address of `https://teamserver.sprintr.com/` or `https://git.api.mendix.com/`.

{{% alert color="warning" %}}
Mendix reserves the right to change the IP address at any time and without notification to the customer. This could happen if Mendix moves to a different infrastructure, for example.
{{% /alert %}}

{{% alert color="info" %}}
Contact your network administrator and give them this information to allow them to configure your network (for example, firewall and proxy settings) correctly.
{{% /alert %}}

## Read More

* [Version Control FAQ](/refguide9/version-control-faq/)
