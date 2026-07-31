---
title: "Using Designcenter X Cloud Services Connector"
url: /appstore/industry/siemens/designcenter/using-designcenter/
weight: 60
description: "How to build Mendix apps using the Designcenter X Cloud Services Connector, including available microflows, inputs and outputs, and best practices."
---

## Introduction

This page guides you through building Mendix apps on top of the [Designcenter X Cloud Services Connector](placeholder). It covers the available microflows, their inputs and outputs, a worked end-to-end example, and best practices for production use.

## Prerequisites

Configure the OIDC SSO and required constants in your app. For more information, see [Configuring the Connector for Single Sign-On](/appstore/industry/siemens/designcenter/sso/).

To help you develop your app, familiarize yourself with the [Mendix Studio Pro Guide](/refguide/), especially the following topics:

* [Studio Pro Overview](/refguide/studio-pro-overview/)
* [Data in the Domain Model](/refguide/domain-model/)
* [Pages](/refguide/pages/)
* [Microflows and Nanoflows](/refguide/microflows-and-nanoflows/)
* [Development Best Practices](/refguide/dev-best-practices/)

## Concepts

* Session – a handle that ensures the same Teamcenter server is used across service calls. The `EstablishSession` microflow either creates a new session or returns an existing one, so the same handle can be reused safely across operations.
* Environment (Tenant) – the Teamcenter X environment that the session targets. A single user or ECA may have access to multiple environments.
* Job – an asynchronous unit of work (for example, a visual report run or a clearance analysis). A job returns a Job ID immediately and completes in the background.
* Domain mapping – job results are returned as JSON. The connector ships helpers that convert these JSON payloads into Mendix domain objects (`VisualReportData`) for easy querying and persistence.

## Using Microflows

The following sections provide more information about using all operations available in the microflow toolbox and under the **USE_ME** folder of the connector module.

### Session Lifecycle

#### `POST_EstablishSession`

Call `POST_EstablishSession` to create a new session or return an existing one, ensuring the same Teamcenter server is used across service calls.

* **Input**: Session name (string)
* **Output**: Session object

#### `GET_TenantEnvironments`

Call `GET_TenantEnvironments` to list environments the session can target.

* **Input**: Session
* **Output**: List of Environment

#### `POST_InitializeTeamcenterSession`

Call `POST_InitializeTeamcenterSession` to bind the session to a specific Teamcenter X environment.

* **Input**: Session, Environment
* **Output**: Initialized Session

{{% alert color="info" %}}
A session must be initialized against an environment before any data or analysis operation can be
called.
{{% /alert %}}

### Query Operations

#### `GET_QueryPartIdFromName`

Call `GET_QueryPartIdFromName` to find part documents by name (supports wildcards, for example, Bracket_*).

* **Input**: Session, PartName (string)
* **Output**: List of PartDocument

### Analysis Operations (asynchronous)

#### `GET_VisualReportNames_Request`

Call `GET_VisualReportNames_Request` to list available visual report definitions for the tenant.

* **Input**: Session
* **Output**: List of report IDs and display names

#### `POST_GenerateVisualReport_Request`

Call `POST_GenerateVisualReport_Request` to run one or more visual reports against a part or assembly.

* **Input**: Session, PartID, ReportIDs, ProcessingType
* **Output**: JobID

#### `POST_ClearanceAnalysisRequest`

Call `POST_ClearanceAnalysisRequest` to run clearance (clash) analysis.

* **Input**: Session, PartID, ProcessingType
* **Output**: JobID

{{% alert color="info" %}}
Analysis operations are asynchronous. They return a Job ID immediately; the actual computation runs
in the cloud.
{{% /alert %}}

### Job Retrieval

#### `GET_JobsByTypes`

Call `GET_JobsByTypes` to list jobs the current user can see, filtered by type.

* **Input**: Session, Type (visualreports or clearance)
* **Output**: List of JobID

#### `GET_DataForJobId`

Call `GET_DataForJobId` to fetch the raw result payload for a job.

* **Input**: Session, JobID
* **Output**: JSON string

#### `GET_VisualReportDataListFromJobId`

Call `GET_VisualReportDataListFromJobId` to convert a visual report job's payload into domain objects.

* **Input**: Session, JobID
* **Output**: List of VisualReportData

## Connector Integration Workflow

The diagram below shows the sequence of interactions between the Mendix app, the connector, Teamcenter, and Designcenter X Cloud Services.

{{< figure src="/attachments/partners/siemens/designcenter/workflow.png" alt="connector workflow" >}}

### Polling vs. User-Driven Retrieval

The connector does not push notifications when a job finishes. You have two options:

* User-driven – show the user a **Refresh results** button that re-runs `GET_JobsByTypes` and `GET_VisualReportDataListFromJobId`. This is simple and adequate for most analytical workflows.

* Scheduled poll – use a scheduled event microflow to poll outstanding job IDs (stored in your domain) every N seconds or minutes, fetch results, and update status. This approach works best for fire-and-forget workflows where the result feeds another process.

## Working with Job Results

`GET_DataForJobId` returns raw JSON, which is useful when you want to store the full payload (for example, for audit) or post-process it yourself.

For visual reports, prefer `GET_VisualReportDataListFromJobId`. It maps the payload onto the `VisualReportData` domain entity that ships with the connector. Typical attributes include:

* Part identifier and revision
* Report definition reference
* Aggregated metrics (counts, totals, classification)
* Component-level rows for assembly runs

{{% alert color="info" %}}
Persist `VisualReportData` into your own domain entities if you intend to run analytics across many runs. The Connector's domain is best used as a landing zone, not the long-term system of record.
{{% /alert %}}

## Troubleshooting

This section describes the most common failure modes and their solutions.

### Session Expired

If any operation fails after `POST_InitializeTeamcenterSession`, the session may have expired. Call `POST_EstablishSession` again and retry the failed call.

### Environment Not Authorized

If `POST_InitializeTeamcenterSession` fails with an authorization error, have the user select a different environment and verify the Enterprise Cloud Account (ECA) entitlement in the Siemens Admin Console.

### Invalid Part ID

If `POST_GenerateVisualReport_Request` or `POST_ClearanceAnalysisRequest` fails due to an invalid part ID, validate the part ID against the result of `GET_QueryPartIdFromName` before submitting the request.

### Job Not Found or Not Ready

If `GET_DataForJobId` or `GET_VisualReportDataListFromJobId` returns a job-not-found error, the job may still be running. Treat the response as in-progress, wait, and retry.

### Authentication Error

If any operation returns an authentication error, confirm that the `OIDC.EncryptionKey` constant and connector constants are correctly set, and verify that the server user is still active in the Siemens Admin Console.

A small reusable sub-microflow that centralizes "re-establish session and retry once" pays for itself quickly.

## Best Practices

* Always pass `ProcessingType` explicitly. For assemblies, use `ProcessComponentsInAssembly` in most cases.

* Cache report definitions: `GET_VisualReportNames_Request` results change infrequently. Cache them for the duration of the user's app session to avoid unnecessary calls.

* Page large result sets: Visual reports on large assemblies can return thousands of rows. Page or stream results into your domain model rather than loading the full list into memory at once.

* Isolate connector calls in a service layer: Wrap each connector microflow in a thin custom microflow (for example, `SUB_RunVisualReport`) so that future connector upgrades only affect one layer of your app.

## Read More

* [Designcenter X Cloud Services Connector](/appstore/industry/siemens/designcenter/)
* [Configuring the Connector for Single Sign-On](/appstore/industry/siemens/designcenter/sso/)
