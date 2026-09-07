---
title: "Collect Diagnostic Data for a Support Ticket for Private Mendix Platform"
linktitle: "Collect Data for a Support Ticket"
url: /private-mendix-platform/support/
description: "Documents the information that should be collected to create a Private Mendix Platform support ticket."
weight: 70
---

## Introduction

When you open a support ticket for Private Mendix Platform, ensure that it contains the critical information Mendix needs to begin root cause analysis immediately, reducing delays and back-and-forth communication.

## Incident Summary

In the incident summary, provide the following information:

* **Issue Title** - A short, descriptive title, for example, *PCLM reports invalid license*, *Build fails with PVC timeout*.
* **Severity/Impact** - Specify Critical, Major, or Minor
* **Affected Environment** - Specify Production, Acceptance, or Test
* **Frequency** - Specify Always, Intermittent, or First Time
* **Timestamp of Last Occurrence (UTC)** - The time when the issue last occurred, in `YYYY-MM-DD HH:MM UTC` format. This is crucial for log correlation.
* The name of the customer and partner (if applicable).

## Environment Details

Provide the exact versions for the environment where the issue occurs. Please complete the fields relevant to your issue.

* **Private Mendix Platform Installer Version** - For example, v2.21.0
* **Private Mendix Platform Operator Version** - For example, v2.22.0
* **PCLM Version** - For example, 0.10.3
* **Studio Pro Version** - For example, 9.24.11
* **Kubernetes Distribution and Version** - For example, EKS 1.27, AKS 1.28, OpenShift 4.12
* **Container Registry** - For example, Docker Hub, Azure ACR
* **Database Type and Version** - For example, PostgreSQL 16
* **Storage Provider and Storage Class** - For example, Amazon S3, Azure Blob Storage
* **Networking** - For example, Nginx Ingress, ALB, DNS details
* **Secret Management** - For example, Kubernetes Secrets, AWS Secrets Manager, Azure Key Vault
* **CI/CD Engine** - For example, Private Mendix Platform Default (Tekton), Jenkins, Azure DevOps

## Issue Description and Initial Troubleshooting (Required)

Provide the following information:

* **Problem Description** - Describe the technical failure. What happened versus what was expected?
* **Steps to Reproduce** - Provide a clear, step-by-step guide if possible.
* **Error Messages** - Paste the full, exact error output from the UI, CLI, or API response.
* **Troubleshooting Already Performed** - List any commands you ran or checks you performed and their results.

## Diagnostic Logs (Required)

### Automated Log Archive

To collect automated logs, perform the following steps:

1. Follow the process described in [Collecting Diagnostic Data for a Support Ticket](/developerportal/deploy/private-cloud-deploy/#collecting-diagnostic-data-for-a-support-ticket).
2. Run the following command:

    ```bash
    ./mxpc-cli log-extract -n <namespace> -f Private Mendix Platform_logs.tar.gz
    ```

3. Attach the resulting Private Mendix Platform_logs.tar.gz file to the ticket.

{{% alert color="warning" %}}
Before sending, ensure that the logs do not contain sensitive information your organization prohibits sharing.
{{% /alert %}}

### Help Me Package

If the issue is related to a specific Mendix application, navigate to **Private Mendix Platform Portal > Logs & Events > Help Me**, and download the generated .zip package. Attach this file to your request, in addition to the automated log archive.

## Supplemental Data

This data provides deep context for specific issue types and is often required by R&D. Complete the sections relevant to your issue, as needed.

### Licensing or PCLM Issues

For licensing or PCLM issues, provide the following information:

* **Prerequisite Check** - Ensure that you are using the latest versions of the Operator and PCLM.
* **PCLM Logs** - Already included in the log-extract archive.
* **License Bundle Details** - When and from whom (Mendix Support, CSM, Account Manager) was the current PCLM license bundle received. Attach the specific bundle file being used so that Mendix can validate its integrity.
* **PCLM License Status and Mendix App Dump** - Run the following commands and provide the output:

```bash
List Runtime License
mx-pclm-cli license runtime list -s <pclm-http-url> -u <admin-user> -p <admin-password> -t <custom-ca-cert-path>
# List Operator License
mx-pclm-cli license operator list -s <pclm-http-url> -u <admin-user> -p <admin-password> -t <custom-ca-cert-path>
# List License Usage
mx-pclm-cli license list-usage -s <pclm-http-url> -u <admin-user> -p <admin-password> -t <custom-ca-cert-path>
# Dump Mendix App Resource
kubectl get mendixapps.privatecloud.mendix.com <mendix-app-name> -n <namespace-name> -o yaml
```

{{% alert color="warning" %}}
Check the YAML output for sensitive data like passwords or keys. Replace them with ****** before attaching.
{{% /alert %}}

For more information, refer to the following topics:

* [Listing the Runtime License](/developerportal/deploy/private-cloud/private-cloud-license-manager/#listing-the-runtime-license)
* [Listing the Operator License](/developerportal/deploy/private-cloud/private-cloud-license-manager/#listing-the-operator-license)
* [Verifying That the Licenses Are Applied](/developerportal/deploy/private-cloud/private-cloud-license-manager/#verify)

### CI/CD Failures

For CI/CD failures, provide the logs and errors from the related components:

* Full build logs from Tekton, Jenkins, Azure DevOps, or your CI tool
* Git clone or checkout logs
* Storage logs (if the build fails on a storage step)
* Private Mendix Platform pod .yaml file; to generate it, run the following command:

```text
$ kubectl get pod mxplatform-master-xxxx-xxx -o yaml
```

### Networking and Integration Issues

For networking and integration issues (for example, SSO or Ingress), provide the configuration settings (in .yaml format) and logs for the affected components (for example, Ingress Controller).

### Security Vulnerabilities

For security vulnerabilities, provide the following information:

* **Scanner Tool Used** - For example, Trivy, Qualys, Snyk
* **Affected Private Mendix Platform Image and Version** - For example, `private-cloud-operator:2.22.0`
* **Action** - Attach the full, unaltered scan report (PDF, CSV, or JSON) that includes the specific CVE-IDs.

### Performance Issues

For performance issues, provide the following information:

* **Resource Utilization Metrics** - Provide CPU, memory, database, and network usage graphs or logs from your monitoring tools.
* **Application Performance Metrics** - Include any relevant performance metrics from your application monitoring tools (for example, response times, error rates).
