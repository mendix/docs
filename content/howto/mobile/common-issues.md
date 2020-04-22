---
title: "Common Issues"
parent: "native-mobile"
menu_order: 80
description: Common issues when building or running native mobile apps.
tags: ["native", "mobile", "developer", "test"]
---

## "Unable to load script" in Make it Native app

Depending on device settings and network characteristics, the Make it Native app might fail to connect to the runtime with the following message:

![unable to load script](attachments/unabletoloadscript.png)

In many cases, this is caused by the Windows Defender firewall.
In such cases, attempts to open the runtime URL from the mobile browser will also fail.

To mitigate the issue, please follow these recommendations:

- Make sure that the computer and the mobile device are connected to the same network.
- Make sure that incoming connections are allowed.

    - Open the Firewall & network protection setting in Windows
    - Go to the advanced settings
    - Select the Inbound Rules and scroll to the Node.js entries
    - Each entry for Node.js, check the value of the `Program` column
    - They should all have a green check mark in front of them. 
    - If the program column shows a Mendix installation directory, then there should be a green icon in front of the entry.
    - If this is not the case, double-click the entry and select `Allow the connection`.
    
    ![inbound rules](attachments/inboundrules.png)

- Windows distinguishes between two types of networks; private (e.g. home, work) and public (e.g. airport, public transport).
In case of public networks, Windows Defender Firewall applies far stricter restrictions.

    If, and only if, you are connected to a trusted network, then ensure that the network is configured as "Private" on the computer.
