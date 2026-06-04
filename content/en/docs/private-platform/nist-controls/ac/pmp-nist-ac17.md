---
title: "AC-17 Remote Access"
linktitle: "AC-17"
url: /private-mendix-platform/nist-controls/ac-17/
description: "Documents the Private Mendix Platform's compliance with the AC-17 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-17 control.

| Control ID | AC-17 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Establishes and documents usage restrictions, configuration and connection requirements, and implementation guidance for each type of remote access allowed.
* Authorizes remote access to the information system prior to allowing such connections.

### Supplemental Guidance

Remote access is access to organizational information systems by users (or processes acting on behalf of users) communicating through external networks (for example, the Internet). Remote access methods include, for example, dial-up, broadband, and wireless. 

Organizations often employ encrypted virtual private networks (VPNs) to enhance confidentiality and integrity over remote connections. The use of encrypted VPNs does not make the access non-remote; however, the use of VPNs, when adequately provisioned with appropriate security controls (for example, employing appropriate encryption techniques for confidentiality and integrity protection) may provide sufficient assurance to the organization that it can effectively treat such connections as internal networks. Still, VPN connections traverse external networks, and the encrypted VPN does not enhance the availability of remote connections. Also, VPNs with encrypted tunnels can affect the organizational capability to adequately monitor network communications traffic for malicious code.

Remote access controls apply to information systems other than public web servers or systems designed for public access. This control addresses authorization prior to allowing remote access without specifying the formats for such authorization. While organizations may use interconnection security agreements to authorize remote access connections, such agreements are not required by this control. Enforcing access restrictions for remote connections is addressed in AC-3.

The following controls are related to this control:

* AC-2
* AC-3
* AC-18
* AC-19
* AC-20
* CA-3
* CA-7
* CM-8
* IA-2
* IA-3
* IA-8
* MA-4
* PE-17
* PL-4
* SC-10
* SI-4

## Responsibility

### Customer Responsibility

Remote usage restrictions must be defined by the customer and their infrastructure implementer. The infrastructure operator operates and maintains these restrictions. 

## Guidance

### Remote Access Method

Private Mendix Platform enables remote access through Kubernetes Ingress, supporting both HTTP and HTTPS protocols. Customers are strongly advised to configure TLS certificates and enable HTTPS to ensure encrypted remote access to the Platform and applications, thus meeting security and compliance requirements.

### Security Configuration Recommendations

When deploying Private Mendix Platform and Mendix apps, customers should prioritize HTTPS and properly configure TLS certificates within the Ingress. All remote connections should be encrypted to prevent data interception or tampering. Both Private Mendix Platform and its apps require login with username and password, ensuring that only authorized users can access the services.

### Authorization and Access Management

Customers should establish remote access authorization procedures and keep records of which personnel are permitted to access Private Mendix Platform and its apps remotely. Access permissions should be regularly reviewed and updated, with timely removal of accounts no longer required. Use of firewalls, VPNs, and other network security measures is recommended to further protect remote access.

### Risk Considerations

If customers configure HTTP without encryption, they must understand and accept the risk of data leakage and non-compliance, and bear all resulting consequences.

## Proof and Remarks

For more information about configuring TLS for HTTPS-encrypted access through Ingress, see [Network Ingress Settings in Mendix on Kubernetes](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/).

Mendix provides [OIDC](/appstore/modules/oidc/) and [SAML SSO](/appstore/modules/saml/) modules, allowing customers to easily integrate their Identity Provider (IdP) into Mendix applications.

Private Mendix Platform supports OIDC and SAML configuration.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-17-1.png" class="no-border" >}}
