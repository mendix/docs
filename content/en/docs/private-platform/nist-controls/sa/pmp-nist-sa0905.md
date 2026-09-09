---
title: "SA-09 (05) - Information Location"
linktitle: "SA-09 (05)"
url: /private-mendix-platform/nist-controls/sa-0905/
description: "Documents the Private Mendix Platform's compliance with the SA-09 (05) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-09 (05) control.

| Control ID | SA-09 (05) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization restricts the location of information processing, information or data, and information system services to organization-defined locations based on organization-defined requirements or conditions.

## Responsibility

### Mendix Responsibility

Mendix provides several systems as a part of the Private Mendix Platform that are able to operate on various computer infrastructures (cloud, virtual machine) that may be operated within whatever environment the customer chooses.

All of these systems (Private Mendix Platform, Mendix Runtime, Mendix Operator, Studio Pro, database & file storage for Mendix Applications) comply with these conditions.

### Customer Responsibility

* The Infra Implementer is responsible for ensuring the underlying cloud infrastructure (for example, AWS Region) and storage services are provisioned within organization-approved geographic locations.
* The App Implementer is responsible for ensuring that all Mendix App data storage and processing configurations comply with the organization's residency requirements.
* The Infra and App Operators are responsible for maintaining the system within the defined locations throughout its lifecycle.

## Guidance

### Customer Responsibility

* Infrastructure agnostic design - Mendix provides a platform architecture that does not require external data backhauling, enabling the customer to maintain complete sovereignty over the information processing location.
* Deployment transparency - Mendix provides the necessary deployment requirements (for example, Private Mendix Platform and Runtime requirements) so that the customer can accurately specify and provision the infrastructure in the approved locations.

## Proof and Remarks

### Regional Data Residency and Sovereignty Enforcement

#### Infrastructure Location Control (Infra Implementer)

* Regional lock - Evidence from Terraform, AWS, or Azure Console showing that the EKS cluster and all associated persistent volumes (EBS and EFS) are provisioned exclusively within the region.

    In Terraform code, the configuration of the provider is the highest-level proof.

    ```text
    # Prove that all resources are initialized only within the specified area.
    provider "aws" {
      region = "us-gov-west-1" 
    }
    ```

* Network sovereignty - Architectural diagrams confirming that no data leaves the organization-defined VPC boundary for external processing by the vendor.

    For more information, refer to the follpwing documents:

    * [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html)
    * [Set up private access to an Amazon S3 bucket through a VPC endpoint](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/set-up-private-access-to-an-amazon-s3-bucket-through-a-vpc-endpoint.html)

#### Platform Residency Configuration (App Implementer)

* Private deployment evidence - The following screenshot from the Private Mendix Platform installation environment shows that the Mendix Runtime and Operator are running on internal nodes, ensuring that "Information System Services" originate only from approved locations.

    The AWS EKS node does not have a public IP address assigned, which proves that the POD is running on an VPC internal node.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0905-1.png" class="no-border" >}}

* Data storage mapping - Documentation identifying that application databases (PostgreSQL/RDS) and file storage are mapped to regional-specific service endpoints.

    For more information, see [Amazon RDS API and interface VPC endpoints (AWS PrivateLink)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/vpc-interface-endpoints.html).

#### Governance and Architectural Validation

* Private Cloud Architecture - The system leverages the Private Cloud deployment model. As validated by [Mendix on Kubernetes](/developerportal/deploy/private-cloud/#connected-clusters), all core service components, including the Mendix Operator and application Runtime, are deployed locally within the customer-managed Kubernetes environment.
* Prerequisites and compliance - The organization adheres to the [Private Mendix Platform Prerequisites](/private-mendix-platform/prerequisites/), which mandate that the customer provides the underlying infrastructure (Database, Storage, Cluster), thereby ensuring complete control over the data residency.
* Secure installation guidance - The deployment follows the [Private Mendix Platform Quickstart Guide](/private-mendix-platform/quickstart/), ensuring that the installation process is confined to the pre-authorized cloud environment.
* Regional compliance - It is the customer's responsibility to identify and select the authorized cloud regions (for example, AWS GovCloud) that meet their specific data sovereignty requirements. The customer must ensure that the installation environment is restricted to these approved regions during the initial provisioning phase.
