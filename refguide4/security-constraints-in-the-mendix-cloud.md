---
title: "Security constraints in the Mendix Cloud"
category: "refguide4"
space: "Reference Guide 4"
---
To ensure our and your safety, there are stringent security policies in the standard cloud. Although these might seem limiting at first, we have thought a great deal about possible use cases and provide workarounds as much as possible. The constraints can be divided into a number of sections:

## Java security

There is a java security policy in place on all Mendix runtimes. These check specific possibly dangerous operating system calls. Specifics can be found here: [https://world.mendix.com/display/refguide3/Java+in+the+Cloud](https://world.mendix.com/display/refguide3/Java+in+the+Cloud). If you receive an "AccessControllerException" anywhere in your logs, you are either doing something that's prohibited in the cloud or something that you need to ask permission to do. You can file a ticket for this.

## Network

All incoming traffic to the standard cloud is routed through one front-facing webserver. This means that we cannot provide you with a specific IP address where your application will run; this address might change in the future so we can't guarantee that any of your firewall rules that you might want to implement will keep on working.

## Access to the database.

The standard cloud only offers the Mendix Runtime as your API. Databases can of course be backed up and restored using the Cloud Portal, but you can't gain direct access to the database.

## SFTP access to your server

As your app may move to a different node at any given moment, we cannot give you direct SFTP access. We plan on providing a workaround in the future, please keep an eye on this page if you're interested.

## VPN access

As this requires a lot of customization, this is only available in the custom cloud (also known as the Mendix Hosted Environment).