---
title: "Configuring POST and GET Request Steps"
url: /developerportal/deploy/configuring-post-get-request-steps/
weight: 20
description: "Describes how to configure the POST and GET request steps in Mendix Pipelines."
---

## Introduction

[POST](/developerportal/deploy/mendix-pipelines/#post-request) and [GET](/developerportal/deploy/mendix-pipelines/#get-request) request steps let Mendix Pipelines call external systems over HTTPS to trigger actions, send data, or retrieve status information or results. Typical use cases include:

* triggering an action in an external system
* sending data to an external API
* polling an external system until a process reaches a terminal state
* extracting response values for use in later pipeline steps
* running external test suites, quality checks, or security scans
* collecting data before promoting a package to production

{{% alert color="warning" %}}
Mendix Pipelines sends requests exactly as you configure them and does not validate:

* HTTP headers
* JSON payload syntax or structure
* required fields
* condition expressions
* whether the request matches the external system's API specification

Before running a request step in Mendix Pipelines, Mendix recommends testing the API call in an API client such as Postman, Bruno, or Insomnia. These tools provide JSON validation, formatting, and immediate feedback from the external system.
{{% /alert %}}

## Configurable Fields for POST and GET Request Steps

The following table summarizes the available configuration fields.

| Field | Required? | Description | Example |
|------------------------|---:|-------------------------------------------------------------------------------------------------|-----------|
| **Base URL path** | Yes | Base endpoint of the external system to call. Must start with the protocol. Must end with `/` when using the **Additional URL Path**. | `https://api.com/1/JobID/` |
| **Additional URL path** | No | String or variable to append to the **Base URL Path**. Can reference a stored variable. | `$POST Request.Result1` or `a12f3` |
| **HTTP header key-value pairs** | No | HTTP headers to include with the request as metadata. Values can reference stored variables. | `Authorization` = `$API_Key` |
| **Variable extraction** | No | Expressions to extract values from the response body and store them as reusable output variables. | `.JobId` |
| **Success condition** | No | Success condition that must evaluate to `true` to continue to the next pipeline step. Must be a [jq expression](https://jqlang.org/manual/). | `.Result == "Success"` |
| **Failure condition** | No (GET only) | Failure condition that must evaluate to `true` to stop polling and fail the pipeline. Must be a jq expression. | `.Result == "Failed"` |
| **Polling delay** | Yes (GET only) | Time in seconds before the first GET request runs. Range: 0–10800. | `30` |
| **Polling interval** | Yes (GET only) | Time in seconds between GET retries. Range: 5–300. | `10` |
| **Polling duration** | Yes (GET only) | Maximum time in seconds to poll before timing out and failing. Range: 0–10800. | `600` |

## API Endpoint

Both POST and GET request steps require an endpoint defined as a URL. Mendix Pipelines builds the endpoint as `Base URL Path + Additional URL Path`. The endpoint can be:

* a static URL
* a dynamic URL that includes one pipeline variable at the end

When you use a variable in the URL, the following rules apply:

* You can use only one variable.
* The variable must be the last part of the URL.
* You cannot append additional text after the variable  (no concatenation).

## HTTP Headers

HTTP headers can be added along with the API calls to provide metadata for the request, such as content type, authentication credentials, or other API-specific values. Mendix recommends storing secrets such as API keys or tokens as [pipeline variables](/developerportal/deploy/mendix-pipelines/#variable-tab). 

POST and GET request steps support the following header rules:

* You can define up to five headers as key-value pairs.
* Header names must be static strings.
* Header values can be static strings or predefined pipeline variables.
* Header values do not support string concatenation.
* Header values are resolved when the step starts.
* For GET request steps, header values are fixed and are not re-evaluated during polling.

If an authentication scheme requires a prefix such as `Bearer`, include the prefix in the variable value. For example, the variable `$app1_BearerToken` can contain the value `Bearer aDbEcF123`.

## Request Body (POST Only)

The request body is available for POST request steps only. It is a plain text input that defines the JSON payload that Mendix Pipelines sends to the external system when a POST request runs. This payload can be used to start a job, trigger a scan, create a record, or update data.

### Dynamic Values in the Request Body

The request body supports static JSON content. It does not support:

* inserting variables into individual JSON fields
* inline variable substitution
* string concatenation
* expressions inside the payload

If the external API requires dynamic values, such as identifiers or environment-specific parameters, consider one of the following alternatives:

* URL parameters
* HTTP headers where pipeline variables are supported
* logic in the external system after it receives the request

## Success and Failure Conditions

Success and failure conditions define how Mendix Pipelines interprets the response returned by an external system and decides whether a pipeline step should continue or stop.

Conditions are evaluated against the JSON response body using [jq-style expressions](https://jqlang.org/manual/) (for example, `.Result == "Success"`). These expressions can:

* check whether fields exist
* compare values
* verify that the response indicates a specific status

### POST Request Conditions

A POST request step supports a success condition only. When a POST request runs, Mendix Pipelines sends the request once and waits for the response. After the response is received, the success condition is evaluated:

* If the success condition is `true`, the pipeline continues.
* If `false`, the pipeline fails and stops.

POST request steps do not retry or wait. For this reason, the success condition typically checks whether the external system accepted the request, not whether the full downstream process has completed.

If no success condition is defined for a POST request step, the step is considered successful as long as the HTTP request completes without a technical error.

### GET Request Conditions

GET request steps are used to poll an external system until the action it is performing has completed.

A GET request step supports both a success condition and a failure condition:

* **Success condition** – when met, the step completes successfully and the pipeline continues.
* **Failure condition** – when met, the step fails immediately and the pipeline stops.

If neither condition is met, the pipeline continues polling until the configured polling duration is reached.

Mendix recommends basing success and failure conditions on real API responses captured in an API client before configuring them in a pipeline.

#### GET Request Polling

Polling occurs each time the GET request runs and controls when and how often the GET request repeats. All of these variables must be defined before the GET request step can run:

* Polling delay
* Polling interval
* Polling duration

## Output Extraction to Store as Pipeline Variables

POST and GET request steps can extract values from the response body and store them as pipeline variables which are managed in the **Variables** tab for use in later steps.

A use case is chaining a POST request and a GET request. For example, a POST request can return an identifier that is stored as an output variable and then reused in the URL of a later GET request.

Each POST or GET request step can define up to three extracted output variables.

Each output slot is populated by a [jq-style expression](https://jqlang.org/manual/) evaluated against the response body returned by the external system. The expression determines which value is stored. For example, an expression can reference a specific value such as `.JobID` or use jq logic to extract an outcome value as a reusable variable.

Output variables are automatically named and you cannot assign custom name or change the names. Mendix Pipelines exposes extracted values using a fixed naming pattern such as:

* `$GET Request.Output_1`
* `$POST Request.Output_2`

{{% alert color="warning" %}}
Mendix Pipelines does not validate whether an extraction expression matches the response, nor does it provide tooling to inspect the response structure interactively.

If the response format changes or does not match expectations, extracted values can be empty or incorrect. Mendix recommends validating response structures in an API client before configuring extraction expressions in a pipeline.
{{% /alert %}}

## Known Limitations

POST and GET request steps currently support the following constraints:

* A pipeline can contain at most one POST request step and one GET request step.
* A dynamic endpoint can contain only one variable, and that variable must be the last part of the URL.
* Additional text cannot be appended after a variable in the URL.
* Up to five HTTP headers can be configured.
* Header names must be static.
* Header values support only static strings or predefined pipeline variables.
* Header values do not support concatenation.
* For GET request steps, header values are resolved once and are not re-evaluated during polling.
* The POST request body supports only static JSON content.
* The request body does not support inline variable substitution, concatenation, or expressions.
* Each request step can extract up to three output values.
* Output variable names are generated automatically and cannot be customized.
* Mendix Pipelines does not validate request configuration, payload structure, or extraction expressions before the step runs.
