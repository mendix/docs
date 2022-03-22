---
title: "Security Advisories"
url: /releasenotes/security-advisories/
tags: ["security", "security advisories", "cve", "cvss", "ssa", "siemens security advisory"]
weight: 50
#notoc: true
#layout: wide
#toc-level: "3"
---

## 1 Introduction

Mendix publishes security advisories by leveraging [Siemens ProductCERT](https://new.siemens.com/global/en/products/services/cert.html), which is a dedicated team of seasoned security experts that manages the receipt, investigation, internal coordination, and public reporting of security issues related to Siemens products, solutions, and services.

Mendix adds the CVSS score and CVSS vector for security vulnerabilities described in the Studio Pro release notes. Mendix also adds the Mendix-specific CVE IDs when they become available.

{{% alert color="warning" %}}
Siemens publishes their CVEs on the second Tuesday of every month.
{{% /alert %}}

## 2 Security Advisory Details

| CVE ID | CVSS v3.1 Base Score | Siemens Security Advisory (SSA) Description | Notes |
| --- | --- | ---  | --- |
| To be published by [Siemens](https://new.siemens.com/global/en/products/services/cert.html#SecurityPublications) | 5.3 | To be published by [Siemens](https://new.siemens.com/global/en/products/services/cert.html#SecurityPublications) | Fixed in Studio Pro [9.11.0](9.11#53) |
| CVE-2022-26313 | 9.1 | [Vulnerability in Mendix Forgot Password Marketplace Module](https://cert-portal.siemens.com/productcert/pdf/ssa-134279.pdf) | See the SSA description for remediation details. |
| CVE-2022-26314 | 7.4 | [Vulnerability in Mendix Forgot Password Marketplace Module](https://cert-portal.siemens.com/productcert/pdf/ssa-134279.pdf) | See the SSA description for remediation details. |
| <a name="24309"></a>CVE-2022-24309 | 5.9 | [XPath Constraint Vulnerability in Mendix Runtime](https://cert-portal.siemens.com/productcert/pdf/ssa-148641.pdf) | See the SSA description for remediation details. |
| <a name="26317"></a>CVE-2022-26317 | 7.7 | [Improper Access Control Vulnerability in Mendix](https://cert-portal.siemens.com/productcert/pdf/ssa-415938.pdf) | See the SSA description for remediation details. |
| <a name="42015"></a>CVE-2021-42015 | 4.0 | [Information Disclosure Vulnerability in Mendix](https://cert-portal.siemens.com/productcert/pdf/ssa-338732.pdf) | See the SSA description for remediation details. |
| <a name="42025"></a>CVE-2021-42025 | 5.3 | [Two Incorrect Authorization Vulnerabilities in Mendix](https://cert-portal.siemens.com/productcert/pdf/ssa-779699.pdf) | See the SSA description for remediation details. |
| <a name="42026"></a>CVE-2021-42026 | 3.1 | [Two Incorrect Authorization Vulnerabilities in Mendix](https://cert-portal.siemens.com/productcert/pdf/ssa-779699.pdf) | See the SSA description for remediation details. |
| CVE-2021-33718 | 5.3 | [Access Check Bypass Vulnerability in Mendix](https://cert-portal.siemens.com/productcert/pdf/ssa-352521.pdf) | See the SSA description for remediation details. |
| CVE-2021-33712 | 8.1 | [Privilege Escalation Vulnerability in Mendix SAML Module](https://cert-portal.siemens.com/productcert/pdf/ssa-522654.pdf) | See the SSA description for remediation details. |
| CVE-2021-31339 | 4.3 | [Information Disclosure Vulnerability in Mendix Excel Importer Module](https://cert-portal.siemens.com/productcert/pdf/ssa-854248.pdf) | See the SSA description for remediation details. |
| CVE-2021-31341 | 4.3 | [Information Disclosure Vulnerability in Mendix Database Replication Module](https://cert-portal.siemens.com/productcert/pdf/ssa-919955.pdf) | See the SSA description for remediation details. |
| CVE-2021-27394 | 8.1 | [Privilege Escalation Vulnerability in Mendix](https://cert-portal.siemens.com/productcert/pdf/ssa-875726.pdf) | See the SSA description for remediation details. |
| CVE-2021-25672 | 6.8 | [Mendix Forgot Password App Store Module](https://cert-portal.siemens.com/productcert/pdf/ssa-917115.pdf) | See the SSA description for remediation details. |

## 3 More Information

* [Siemens ProductCERT and Siemens CERT](https://new.siemens.com/global/en/products/services/cert.html)
	* [Search](https://new.siemens.com/global/en/products/services/cert.html#SecurityPublications) for relevant security advisories  with the keyword "Mendix"
* Mendix-specific security advisories can be read using an [Atom feed](https://cert-portal.siemens.com/productcert/rss/advisories_mendix_products.atom) and an [RSS feed](https://cert-portal.siemens.com/productcert/rss/advisories_mendix_products.rss)
