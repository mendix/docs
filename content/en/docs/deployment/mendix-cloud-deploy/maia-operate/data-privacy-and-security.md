---
title: "Maia Operate Data Privacy and Security FAQ"
linktitle: "Data Privacy and Security FAQ"
url: /developerportal/maia-operate/data-privacy-and-security/
description: "Answers common questions about how Maia Operate features, such as AI Log Summary, process, secure, and share application data."
weight: 20
---

## Introduction

This page answers common questions about how Maia Operate handles your data when using [AI Log Summary](/developerportal/maia-operate/ai-log-summary/).

## When Is AI Used? {#when-ai-used}

AI is used only on demand, when a user clicks **Explain** for an environment in Mendix Portal. For more information, see [Generating a Log Summary](/developerportal/maia-operate/ai-log-summary/#generate-log-summary).

* **No background processing** – Nothing is sent to Amazon Bedrock until a user clicks **Explain**, and nothing runs on a schedule.
* **One request at a time** – Each click sends a new request for one environment and one day. Results are not cached.
* **No automated actions** – Summaries are read-only and do not trigger any action. You decide what to do with them.

## Is AI Log Summary Available in Every Region? {#regions}

AI Log Summary is available in all Mendix Cloud regions except Mendix Cloud Africa (Cape Town). Amazon Bedrock Guardrails, which AI Log Summary requires, are not available in that region.

## Which Model Is Used? {#model}

AI Log Summary uses Claude Sonnet 4.6 on Amazon Bedrock with a temperature of 0 for deterministic output. The model is fixed and is not selected dynamically for each request.

## Is Application Log Data Sent Outside Mendix Cloud? {#data-outside-mendix-cloud}

No, raw logs stay inside the cluster. Data is sent to Amazon Bedrock only when a user clicks **Explain**, and only as a redacted, structured JSON payload for that one environment and day. The payload contains aggregated statistics and error patterns, plus up to three truncated sample lines for each significant error pattern.

Where Amazon Bedrock processes the request depends on your cluster:

* EU clusters use the `eu.` inference profile, which keeps processing inside EU regions.
* All other clusters use the `global.` inference profile, which can process requests in any commercial Amazon Web Services (AWS) region.

## Is the Data Preprocessed Before It Is Sent to the Model? {#preprocessing}

Yes. The log search engine counts, groups, and detects patterns and events in the logs. Before the request is sent, the service does the following:

* Redacts personally identifiable information
* Strips prompt-injection patterns from log strings
* Runs the Amazon Bedrock guardrail

The model never sees the raw log stream.

## Is Personal Data Detected and Filtered? {#personal-data}

Yes. Two layers run on every request, before the model sees any data:

* **Pattern-based redaction** – Removes credentials, connection strings, email addresses, and tokens.
* **Amazon Bedrock Guardrails sensitive information filter** – Anonymizes the following in the model input: names, email addresses, phone numbers, addresses, usernames, passwords, AWS access and secret keys, payment card numbers, US Social Security numbers, and IP addresses.

If a prompt-injection attempt is detected, the request is blocked.

The sensitive information filter is based on machine learning, so detection is probabilistic. You remain responsible for your applications' logs.

## Is the Data Processed Securely? {#secure-processing}

Data is encrypted in transit and at rest:

* **In transit** – The service uses Transport Layer Security (TLS), and calls to Amazon Bedrock use TLS 1.2 or higher.
* **At rest** – AI Log Summary does not store your data. Amazon Bedrock encrypts data at rest.

## Who Has Access to My Data? {#access}

Access to your data is limited as follows:

* **Mendix employees** – Mendix Support and technical teams need your permission before they can access your logs. Log download events are recorded in the activity logs.
* **Model providers** – Model providers have no access to the Amazon Bedrock deployment accounts, logs, prompts, or completions.

## Do Model Providers Retain or Reuse My Data? {#provider-retention}

No. Inputs and outputs are not shared with model providers and are not used to train models.

## Are Prompts and Responses Audited? {#prompt-audit}

No. Prompts and responses are not stored, and Amazon Bedrock model invocation logging is disabled.

## Is There an Audit Trail of Who Requested a Summary? {#audit-trail}

The service records the environment ID, so Mendix can identify the environment for which a summary was requested. It does not record which user clicked **Explain**.

## Can I Disable This Feature for My Company? {#disable-feature}

Yes. To disable it, contact Mendix Support.

## Read More

* [AI Log Summary](/developerportal/maia-operate/ai-log-summary/)
* [Maia Operate](/developerportal/deploy/maia-operate/)
