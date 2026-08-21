---
title: "Collect Diagnostic Data for a Support Ticket for Private Mendix Platform"
linktitle: "Collect Data for a Support Ticket"
url: /private-mendix-platform/support/
description: "Documents the information that should be collected to create a Private Mendix Platform support ticket."
weight: 70
---

## Introduction

Purpose: This template ensures that when a Customer opens a support ticket, it contains the critical information Mendix R&D needs to begin root cause analysis immediately, reducing delays and back-and-forth communication.

1. Incident Summary
Issue Title: [A short, descriptive title, e.g., "PCLM reports license invalid", "Build fails with PVC timeout"]

Severity/Impact: [Critical / Major / Minor]

Affected Environment: [Production / Acceptance / Test]

Frequency: [Always / Intermittent / First Time]

Timestamp of Last Occurrence (UTC): [YYYY-MM-DD HH:MM UTC] — This is crucial for log correlation.

The customer name and partner name

2. Environment Details
Provide exact versions for the environment where the issue occurs. Please complete the fields relevant to your issue.

PMP Installer Version: [e.g., v2.21.0]

PMP Operator Version: [e.g., v2.22.0]

PCLM Version: [e.g., 0.10.3]

Studio Pro Version: [e.g., 9.24.11]

Kubernetes Distribution & Version: [e.g., EKS 1.27, AKS 1.28, OpenShift 4.12]

Container Registry: [e.g., Docker Hub, Azure ACR]

Database Type & Version: [e.g., PostgreSQL 16]

Storage Provider & StorageClass: [e.g., Amazon S3, Azure Blob Storage]

Networking: [e.g., Nginx Ingress, ALB, DNS details]

Secret Management: [e.g., Kubernetes Secrets, AWS Secrets Manager, Azure Key Vault]

CI/CD Engine: [e.g., PMP Default (Tekton), Jenkins, Azure DevOps]

3. Issue Description & Initial Troubleshooting (Required)
Problem Description: [Describe the technical failure. What happened versus what was expected?]

Steps to Reproduce: [Provide a clear, step-by-step guide if possible.]

Error Messages: [Paste the full, exact error output from the UI, CLI, or API response.]

Troubleshooting Already Performed: [List any commands you ran or checks you performed and their results.]

4. Diagnostic Logs (Required)
A. Automated Log Archive:

Follow the guide: Collecting Diagnostic Data for a Support Ticket

Run the command:

bash



./mxpc-cli log-extract -n <namespace> -f pmp_logs.tar.gz
Attach the resulting pmp_logs.tar.gz file to the ticket. (Note: Before sending, ensure logs do not contain sensitive information your organization prohibits sharing.)

B. PMP Portal "Help Me" Package:

If the issue is related to a specific Mendix application, navigate to PMP Portal > Logs & Events > Help Me and download the generated zip package. Please attach this file as well.

5. Supplemental Data (Complete the sections relevant to your issue)
This data provides deep context for specific issue types and is often required by R&D.

A. For Licensing / PCLM Issues:

Prerequisite Check: Please ensure you are using the latest versions of the Operator and PCLM.

PCLM Logs: Already included in the log-extract archive.

License Bundle Details: When and from whom (Mendix Support, CSM, Account Manager) was the current PCLM license bundle received? Please attach the specific bundle file being used so we can validate its integrity.

PCLM License Status & Mendix App Dump: Run the following commands and provide the output:

bash



# List Runtime License
mx-pclm-cli license runtime list -s <pclm-http-url> -u <admin-user> -p <admin-password> -t <custom-ca-cert-path>
# List Operator License
mx-pclm-cli license operator list -s <pclm-http-url> -u <admin-user> -p <admin-password> -t <custom-ca-cert-path>
# List License Usage
mx-pclm-cli license list-usage -s <pclm-http-url> -u <admin-user> -p <admin-password> -t <custom-ca-cert-path>
# Dump Mendix App Resource
kubectl get mendixapps.privatecloud.mendix.com <mendix-app-name> -n <namespace-name> -o yaml
{warning} Security Warning: Please check the YAML output for sensitive data like passwords or keys. Replace them with ****** before attaching.

Refer to:
Listing the runtime license
Listing the operator license 
Verifying That the Licenses Are Applied

 

B. For CI/CD Failures:

Please provide the logs and errors from the related components:

Full Build Logs: From Tekton, Jenkins, Azure DevOps, or your CI tool.

Git clone/checkout logs.

Storage logs (if the build fails on a storage step).

Provide us with the PMP pod yaml file by running the following command:

$ kubectl get pod mxplatform-master-xxxx-xxx -o yaml

C. For Networking & Integration Issues (SSO, Ingress, etc):

Please provide the configuration settings (YAML) and logs for related components (e.g., Ingress Controller).

D. For Security Vulnerabilities:

Scanner Tool Used: [e.g., Trivy, Qualys, Snyk]

Affected PMP Image & Version: [e.g., private-cloud-operator:2.22.0]

Action: Attach the full, unaltered scan report (PDF, CSV, or JSON) that includes the specific CVE-IDs.

E. For Performance Issues:

Resource Utilization Metrics: Provide CPU, memory, database, and network usage graphs or logs from your monitoring tools.

Application Performance Metrics: Include any relevant performance metrics from your application monitoring tools (e.g., response times, error rates).

6. Internal R&D Resources
This section is for internal reference and should not be shared with partners or customers.

Product Manager: Meng (Ruodan) Li (ruodan.li@mendix.com)

R&D Team: Panda Team

SDM (Service Delivery Manager): Ralf Ren (Ralf.Ren@mendix.com)

Support Slack Channel: #private-platform-support

Main Confluence Page: Private Mendix Platform Home