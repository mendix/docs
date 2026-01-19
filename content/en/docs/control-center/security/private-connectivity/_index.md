---
title: "Private Connectivity"
linktitle: "Private Connectivity"
url: /control-center/private-connectivity/
description: "Describes the Private Connectivity section in the Mendix Control Center."
weight: 30
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

The **Private Connectivity** page allows you to view and manage your company's Private Connectivity assets: networks, agents, resources, and connections.

## Use Cases

Many apps running on Mendix Cloud have integrations with external resources, such as databases, services, and other applications. Some of these resources are public, accessible via the public internet. Others are running on your internal networks, either on-premises or on cloud infrastructure, as PaaS/SaaS. You can connect to these resources over the public internet as well, [securing](/developerportal/deploy/securing-outgoing-connections-from-your-application/) them with HTTPS, a reverse proxy, and client certificates. This scenario requires you to expose your internal resource to the public internet. However, due to security, compliance, or legacy reasons, not everyone wants to or is able to do this. 

Mendix Cloud Private Connectivity helps you securely and privately connect your Mendix apps to your internal resources. This means that the connection will not go over the public internet, but through a private tunnel between your Mendix apps and your own infrastructure. This can be an on-premises data center or a cloud infrastructure, such as AWS, Azure or GCP. You can also connect multiple networks running on different infrastructures.    

Mendix Cloud Private Connectivity only supports outgoing connections, meaning connections that are initiated from your Mendix apps towards resources on your own infrastructure. You will not be able to connect to your Mendix Cloud apps from an external client over the private tunnel.

Private Connectivity allows you to securely and privately perform actions such as the following, without exposing internal resources to the public internet:

* Retrieving data from a Microsoft SQL database on Azure into your Mendix app
* Connecting to a Kafka broker running on your own AWS account
* Connect to an SAP system running on your on-premises data center

## Tailscale {#private-connectivity-tailscale}

Mendix partners with [Tailscale](https://tailscale.com) to offer Private Connectivity. Tailscale is a recognized leader in secure networking, providing a secure, private mesh network solution built on the high-performance and modern cryptography of the WireGuard® protocol. Mendix generates all the assets required to create a private connection on the Tailscale platform. Neither Tailscale nor Mendix can access the data that is sent over the Tailscale network. All traffic is [encrypted](https://tailscale.com/kb/1504/encryption) end-to-end, with separate keys and public key infrastructure for each network.

## Architecture {#private-connectivity-architecture}

The following sections provide an overview of the components which make up the Private Connectivity architecture.

### Networks

Mendix has an enterprise account with Tailscale. Within the Mendix-owned Tailscale account, Mendix creates a dedicated private connectivity network for you. You can have multiple networks if, for example, you want to isolate production traffic from non-production traffic.    

### Agents

Next, you need to install agents on your own infrastructure. These agents are connectivity tools that initiate an outgoing connection to the private connectivity network Mendix created for you.    

Agents require authentication keys that are managed on the Mendix platform, and can only connect to the network to which their authentication key is linked.     
Each agent must be installed on a server that has access to the resources to which you want to connect.     

An agent can connect to a single private connectivity network, but you can install multiple agents that connect to the same private connectivity network. For example, you can install an agent in your on-premises data center and another agent in your AWS account, so that your Mendix apps can connect to resources on both infrastructures.

### Resources

Once agents are installed, you need to use them to expose resources. These resources are subnets of a network. They are available through the agent, and not through the public internet.    

Resources exposed via agents must always be enabled on the Mendix platform before your Mendix apps can connect to them. This gives you full control over what resources are accessible.

### Connections

Once resources are exposed and enabled, you can add connections. Connections link a specific app environment to a specific resource. 

Connections must be requested. Only if they are approved can a Mendix app connect to the resource on the other side of the connection. This four-eye principle allows for governance over your connections, giving you full control over what app environment can access what resource. Approved connections can be disabled at any time, retracting access from the app environment to the resource. 

You can add multiple connections for each app environment, giving them access to resources on your on on-premises data center, as well as to resources on your AWS account.

Mendix installs a Tailscale agent in the app container of each app environment with one or more approved connections. As the Tailscale agent is running inside the app container, only that specific app can access your network and approved connections.

## Frequently Asked Questions {#private-connectivity-faq}

### Does Mendix or Tailscale have access to my data?

No. All data going over the Tailscale network is [encrypted](https://tailscale.com/kb/1504/encryption) end-to-end, with separate keys and public key infrastructure for each network. Neither Tailscale nor Mendix can access the data that is sent over the Tailscale network. 

### Is Tailscale SOC2-compliant?

Yes, Tailscale has completed an [SOC 2 Type II certification](https://tailscale.com/security).

### Do I need to sign up for my own Tailscale account?

No, you do not need to sign up for a Tailscale account yourself. All assets required for Mendix Cloud Private Connectivity are created within the Mendix Tailscale account. This is similar how we create all resources required to run your apps on Mendix Cloud in the Mendix AWS account.

### Can I connect my existing Tailscale networks?

At this time, it is not possible to connect to an existing Tailnet if you are an existing Tailscale customer.

## Resources

For information on how to configure and use Mendix Private Connectivity, refer to [Configuring and Using Private Connectivity](/control-center/configure-private-connectivity/).
