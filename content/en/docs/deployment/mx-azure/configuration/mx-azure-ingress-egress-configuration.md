---
title: "Configuring Ingress and Egress for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/configuration/ingress-egress
description: "This document explains the available configuration options and summarises them in cluster networking modes for easier comprehension."
weight: 20
---

## Introduction

Mendix on Azure supports various ingress and egress network configurations that allow customers to integrate Mendix applications seamlessly within their existing network infrastructure. This document explains the available configuration options and summarises them in cluster networking modes for easier comprehension.

### Key Concepts and Terminology {#key-concepts}

* Ingress - Inbound traffic entering the cluster for accessing Mendix apps
* Egress - Outbound traffic leaving the cluster to external networks such as the internet
* Internal Load Balancer (ILB) - A load balancer with an internal IP address limited to the cluster's virtual network
* Network Isolated Cluster - A cluster with restricted outbound traffic, requiring explicit configuration for egress
* AKS Node IP CIDR Range - The IP address range used by the Azure Kubernetes Service cluster's nodes
* VNet - Azure Virtual Network, a private network space within Azure

## Available Networking Configuration Options {#networking-configuration-options}

| Configuration Option | Default Value | Effect | Changeable After Deployment | Microsoft Documentation Reference |
| --- | --- | --- | --- | --- |
| **Internal Load Balancer** | False | When true, Mendix apps are exposed only internally within the AKS cluster IP CIDR range via ILB.| Yes | [Internal Load Balancer](https://learn.microsoft.com/en-us/azure/aks/internal-lb) |
| **Network Isolated Cluster** | False | When true, outbound traffic (egress) is blocked by default unless configured otherwise. | No | [Network Isolated Cluster](https://learn.microsoft.com/en-us/azure/aks/concepts-network-isolated) |
| **AKS Node IP CIDR Range** | `192.168.0.0/22` | IP range for the cluster network; must be unique and ideally /22 or larger to avoid IP shortages.| No | [IP Address Planning](https://learn.microsoft.com/en-us/azure/aks/concepts-network-ip-address-planning) |

## Cluster Networking Modes Overview {#networking-overview}

The configuration options in the previous section can be combined into four possible cluster modes:

| Mode | Internal Load Balancer | Network Isolated Cluster | Typical Use Case |
| --- | --- | --- | --- |
| **Fully Public Cluster** | False | False | Hosting Mendix apps publicly without private network integration. | 
| **Semi Public Cluster** | False | True | Public access with restricted or blocked outbound traffic. | 
| **Semi Private Cluster** | True | False | Apps accessible only internally with allowed outbound traffic.  | 
| **Fully Private Cluster** | True | True | Private apps with no outbound internet access without extra setup. | 

## Detailed Networking Modes Description {#networking-modes-description}

### Mode A: Fully Public Cluster (Default)

* Description: Apps are exposed publicly through a public load balancer and can send outbound traffic directly to the internet. This mode is most similar to public Mendix Cloud.
* When to use: Hosting public Mendix applications on Azure with minimal network setup.
* When not to use: If your Azure environment restricts public IP usage or outbound internet traffic.

### Mode B: Semi Public Cluster

* Description: Apps are publicly accessible via a public load balancer, but outbound internet traffic is blocked unless configured.
* When to use: When public app access is required but egress must be controlled or blocked by policy.
* When not to use: If your apps need unrestricted outbound internet access.

### Mode C: Semi Private Cluster

* Description: Apps are accessible only within the cluster's virtual network via an internal load balancer; outbound internet traffic is allowed.
* When to use: Hosting internal apps only reachable from company networks.
* When not to use: If public internet access to apps is required.

### Mode D: Fully Private Cluster

* Description: Apps are internal-only with no outbound internet traffic allowed by default, offering the highest security posture.
* When to use: Hosting sensitive applications isolated from public networks.
* When not to use: Enforcing stringent security policies on network
