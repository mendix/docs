---
title: "AC-04 Information Flow Enforcement"
linktitle: "AC-04"
url: /private-mendix-platform/nist-controls/ac-04/
description: "Documents the Private Mendix Platform's compliance with the AC-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-04 control.

| Control ID | AC-04 |
| --- | --- |
| Control category | AC - Information Flow Enforcement |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The information system enforces approved authorizations for controlling the flow of information within the system and between interconnected systems based on organization-defined information flow control policies.

### Supplemental Guidance

Information flow control regulates where information is allowed to travel within an information system and between information systems (as opposed to who is allowed to access the information) and without explicit regard to subsequent accesses to that information. Flow control restrictions include, for example, keeping export-controlled information from being transmitted in the clear to the Internet, blocking outside traffic that claims to be from within the organization, restricting web requests to the Internet that are not from the internal web proxy server, and limiting information transfers between organizations based on data structures and content. 

Transferring information between information systems representing different security domains with different security policies introduces risk that such transfers violate one or more domain security policies. In such situations, information owners or stewards provide guidance at designated policy enforcement points between interconnected systems. Organizations consider mandating specific architectural solutions when required to enforce specific security policies. 

Enforcement includes, for example: 

* Prohibiting information transfers between interconnected systems (that is, allowing access only)
* Employing hardware mechanisms to enforce one-way information flows
* Implementing trustworthy regarding mechanisms to reassign security attributes and security labels.

Organizations commonly employ information flow control policies and enforcement mechanisms to control the flow of information between designated sources and destinations (for example, networks, individuals, and devices) within information systems and between interconnected systems. Flow control is based on the characteristics of the information and/or the information path. 

Enforcement occurs, for example, in boundary protection devices (for example, gateways, routers, guards, encrypted tunnels, firewalls) that employ rule sets or establish configuration settings that restrict information system services, provide a packet-filtering capability based on header information, or message- filtering capability based on message content (for example, implementing key word searches or using document characteristics). 

Organizations also consider the trustworthiness of filtering or inspection mechanisms (for example, hardware, firmware, and software components) that are critical to information flow enforcement. Control enhancements 3 through 22 primarily address cross-domain solution needs which focus on more advanced filtering techniques, in-depth analysis, and stronger flow enforcement mechanisms implemented in cross-domain products, for example, high-assurance guards. Such capabilities are generally not available in commercial off-the-shelf information technology products. 

The following controls are related to this control: 

* [AC-03](/private-mendix-platform/nist-controls/ac-03/)
* [AC-17](/private-mendix-platform/nist-controls/ac-17/)
* [AC-19](/private-mendix-platform/nist-controls/ac-19/)
* [AC-02](/private-mendix-platform/nist-controls/ac-02/)1
* [CM-06](/private-mendix-platform/nist-controls/cm-06/)
* [CM-07](/private-mendix-platform/nist-controls/cm-07/)
* [SA-08](/private-mendix-platform/nist-controls/sa-08/)
* [SC-02](/private-mendix-platform/nist-controls/sc-02/)
* SC-05
* SC-07
* [SC-18](/private-mendix-platform/nist-controls/sc-18/)

## Responsibility

### Mendix Responsibility

The Private Mendix Platform, Mendix Operator, and Mendix Runtime provide the infrastructure mechanisms and enforcement points that enable information flow control. Mendix is responsible for the following tasks:

* Ensuring that the Mendix Operator enforces per-environment isolation of compute, network endpoints, database, and storage resources at provisioning time
* Ensuring that environment decommissioning removes all associated flow paths, credentials, and storage resources through automated lifecycle management
* Providing platform-level separation between the Private Mendix Platform and customer application environments
* Ensuring that Mendix Runtime and Studio Pro respect and enforce the access rules, published service configurations, and consumed service configurations defined by the App Implementer

#### Platform-Level Flow Control

##### Environment Isolation

The Mendix Operator automatically provisions a fully isolated set of infrastructure resources for every application environment. Each environment receives its own dedicated database (unique database instance and user), blob file storage (isolated bucket or prefix with scoped IAM credentials), Kubernetes namespace, and network endpoint. No resources are shared between environments.

Environment isolation has the following characteristics:

* Unique user (Postgres role) for every environment
* Unique database for every environment
* Environment has full access only to its own database, cannot access data from other environments.

For more information, refer to the following topics:

* [Storage Plans](/developerportal/deploy/private-cloud-storage-plans/)
* [Retrieve Environment-Sensitive Data from a Secret Store](/developerportal/deploy/secret-store-credentials/)

```text
Environment: app-production              Environment: app-acceptance
┌─────────────────────────────┐          ┌─────────────────────────────┐
│  MendixApp CR               │          │  MendixApp CR               │
│    ├── Runtime (Pods)        │          │    ├── Runtime (Pods)        │
│    ├── Endpoint (Ingress)    │          │    ├── Endpoint (Ingress)    │
│    └── StorageInstance       │          │    └── StorageInstance       │
│          ├── DB: prod_db     │          │          ├── DB: acc_db      │
│          │   user: prod_user │          │          │   user: acc_user  │
│          └── Blob: /prod/    │          │          └── Blob: /acc/     │
└─────────────────────────────┘          └─────────────────────────────┘
  prod_user cannot query acc_db            acc_user cannot query prod_db
```

##### Infrastructure Lifecycle - Allocation and Deallocation

The Mendix Operator manages the complete lifecycle of all infrastructure resources per environment. On allocation, the Operator provisions isolated compute, storage, credentials, and network endpoints. On deallocation, Kubernetes garbage collection cascades through the resource hierarchy, removing all associated resources and closing all flow paths.

Deletion triggers Kubernetes garbage collection that cascades through the resource hierarchy, automatically cleaning storage and compute resources. For more information, refer to the following topics:

* [Technical Appendix: Introduction to Operators](/developerportal/deploy/private-cloud-technical-appendix-01/)
* [Technical Appendix: Operator Flows](/developerportal/deploy/private-cloud-technical-appendix-02/)

```text
Environment Deleted
      │
      ├──► Endpoint CR deleted  ──► Ingress rule removed (flow path closed)
      │                              Service removed
      ├──► StorageInstance CR deleted ──► Database dropped
      │                                   Blob prefix/IAM role revoked
      │                                   Kubernetes Secret deleted
      └──► Runtime CR deleted   ──► Deployment + Pods terminated
```

##### Namespace and Resource Scoping

The Mendix Operator is scoped to a single Kubernetes namespace. Every resource it creates for an app (pods, services, ingress rules, secrets) is contained within that namespace boundary, providing a clear and enforceable isolation unit per deployment.

Mendix Operator is limited in scope to one namespace. For more information, refer to the following topics:

* [Technical Appendix: Introduction to Operators](/developerportal/deploy/private-cloud-technical-appendix-01/)
* [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)
* [Kubernetes Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

```text
┌──────────────────────────┐        ┌──────────────────────────┐
│  namespace: app-env-A    │        │  namespace: app-env-B    │
│                          │   ✗    │                          │
│  Pod: mendix-runtime     │◄──────►│  Pod: mendix-runtime     │
│  Service: app-a-svc      │        │  Service: app-b-svc      │
│  Secret: app-a-db-creds  │        │  Secret: app-b-db-creds  │
└──────────────────────────┘        └──────────────────────────┘
          │                                     │
          ▼                                     ▼
  Database A (unique user+db)         Database B (unique user+db)
```

##### Credential Isolation

Each environment's database and storage credentials are stored in isolation using a ServiceAccount-bound secrets model. Each app can only retrieve secrets bound to its own ServiceAccount; it cannot access credentials belonging to other environments. Supported external secrets backends include HashiCorp Vault, AWS Secrets Manager, Azure Key Vault.

For more information, see [Retrieve Environment-Sensitive Data from a Secret Store](/developerportal/deploy/secret-store-credentials/).

##### Published and Consumed Service Enforcement

Mendix Runtime enforces the published service configurations and consumed service registrations defined by the App Implementer. Information flows to and from external systems only through explicitly configured integration points. Mendix Runtime does not permit undeclared outbound flows to external systems.

For more information, refer to the following topics: 

* [Published REST Services](/refguide/published-rest-services/)
* [Consumed REST Services](/refguide/consumed-rest-services/)

### Customer Responsibility

The customer is responsible for defining organization- and solution-specific information flow control policies, and for configuring the infrastructure and application layers in accordance with those policies. Responsibilities are distributed as follows:

* Customer - Define information flow control policy; determine authorized flows by environment, data type, and trust boundary. 
* Infra Implementer and Operator - Deploy and configure network-level controls (network segmentation, firewall rules, security groups, TLS, boundary protection devices) on the infrastructure hosting Private Mendix Platform. 
* App Implementer and Operator - Build and configure application-level data flow rules within Mendix applications, such as published or consumed services, microflow logic, entity access rules, and role-based access.

#### Network-Level Flow Control 

This is a responsibility of the Infra Implementer and Operator Responsibility.

##### Network Segmentation

The Infra Implementer is responsible for deploying Private Mendix Platform within a network topology that enforces logical separation between environments and tenants. Kubernetes NetworkPolicy resources must be applied to implement a default-deny posture with explicit allow rules, restricting information flow based on source, destination, port, and protocol.

```text
┌──────────────────────────────────────────────────────────┐
│  Network Policy Enforcement Model                        │
│                                                          │
│  Default: DENY all ingress and egress                    │
│                                                          │
│  Explicit allows (defined by Infra. Operator):           │
│    Ingress Controller  ──►  App-A Pod      ✓ allowed     │
│    Ingress Controller  ──►  App-B Pod      ✓ allowed     │
│    App-A Pod  ──►  Database-A              ✓ allowed     │
│    App-B Pod  ──►  Database-B              ✓ allowed     │
│    App-A Pod  ──►  App-B Pod               ✗ denied      │
│    App Pod    ──►  Platform namespace      ✗ denied      │
└──────────────────────────────────────────────────────────┘
```

For more information, see [Kubernetes Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/).

##### Firewall Rules and Security Groups

The Infra Operator is responsible for configuring cloud-level firewall rules and network security groups that restrict information flow at the infrastructure boundary. These controls operate at the cloud VPC/VNet layer, below the Kubernetes network policy layer, and together they provide defense-in-depth for flow enforcement.

##### Boundary Protection

The Infra Operator is responsible for ensuring all external traffic enters through a single ingress controller and that no direct external access to application pods is permitted. The ingress controller must be configured with per-app hostname routing so that traffic is directed only to its intended backend service.

```text
External Traffic
      │  HTTPS only
      ▼
┌─────────────────────────────────────────────────────┐
│  Ingress Controller (single cluster entry point)    │
│                                                     │
│  app-a.example.com    ──►  Service: app-a-svc       │
│  app-b.example.com    ──►  Service: app-b-svc       │
│  platform.example.com ──►  Service: pmp-svc         │
└─────────────────────────────────────────────────────┘
        │                │               │
        ▼                ▼               ▼
    App-A Pod        App-B Pod          PMP 
```

For more information, see [Technical Appendix: Operator Flows](/developerportal/deploy/private-cloud-technical-appendix-02/).

##### Encrypted Transit

The Infra Operator is responsible for configuring TLS on the ingress layer and ensuring that storage and database connections use TLS. This prevents unauthorized interception or redirection of information flows in transit.

For more information, see [Private Mendix Platform Prerequisites](/private-mendix-platform/prerequisites/).

#### Application-Level Flow Controls

This is a responsibility of the App Implementer and Operator Responsibility.

##### Published and Consumed Service Controls

The App Implementer is responsible for defining which services are published and which external services are consumed. Each published endpoint must enforce authentication and restrict operations to defined user roles. Outbound integration points must be registered as consumed services, ensuring all flow paths are declared and auditable in the application model.

##### Storage Access

Blob storage isolation is enforced through cloud IAM. The Infra. Operator is responsible for configuring per-environment IAM roles or managed identities with prefix- or container-scoped access policies.

| Storage Backend | Isolation Mechanism |
| --- | --- |
| S3 (IRSA) | Per-environment IAM role, tag-scoped bucket prefix |
| Azure Blob | Separate container, managed identity auth |

For more information, see the following topics:
* [Published REST Services](/refguide/published-rest-services/)
* [App Security](/refguide/security/)

## Proof and Remarks

Customer-built Mendix applications can be deployed, started, and operated on Private Mendix Platform within compliant infrastructure. Multiple deployed app environments in Private Mendix Platform have isolated namespaces and distinct ingress hostnames.

The following screenshots shows multiple app environments in separate namespaces, each with a distinct ingress hostname:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-04-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-04-2.png" class="no-border" >}}

Each environment accesses its database through unique credentials scoped exclusively to that environment's database. Blob storage access is scoped through per-environment IAM roles or managed identities; no environment can access another environment's storage through its provisioned credentials.

The following screenshot shows the database and file storage instance for each deployed app:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-04-3.png" class="no-border" >}}