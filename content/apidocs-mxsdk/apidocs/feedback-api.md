---
title: "Feedback API"
category: "API Documentation"
description: "API to access Mendix app feedback from within the app"
tags: ["Feedback", "Developer Portal", "API"]
---

## Introduction

The Mendix Feedback API allows you to retrieve, add and manage feedback for your Mendix projects.

To use the API, you need to set up a **Consumed Web Service** using the WDSL for this service, available here: [Get WSDL](attachments/9535499/19398864.wsdl). You can find out how to do this in [How to Consume a Complex Web Service](/howto/integration/consume-a-complex-web-service).

The actions in the feedback API can then be called in a microflow using the **Call web service** action. This is described in the reference guide here: [Call Web Service Action](/refguide/call-web-service-action).

{{% alert type="info" %}}

Each call also requires the parameters 'username' and 'password'. These are the public credentials you will find below; actual authentication of requests is done through API keys.

* username: PlatformAPIUser
* password: PlatformAPIPassword

{{% /alert %}}

## API Calls

### AcceptFeedback

This call **accepts** the specified feedback item. This means that the app team has accepted the feedback and added this feedback as a story to the sprint.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The ID of the Feedback item to be accepted 
| ProjectID | String |  The ID of the project

* Return value – Boolean

### AddFeedback

This call **adds a new feedback item** to the project and returns the ID of the new feedback item.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project. 
| Description | String | Description of the feedback item. (Optional) 
| IssueType | Enumeration IssueType | Type of the feedback item (Question/Idea/Problem) 
| ProjectID | String | The ID of the project. 
| Shortname | String | The name of the feedback item. 
| UserEmail | String | Email address of the user who created the feedback item. 
| Username | String | Name of the user who created the feedback item.

* Return value – Integer/Long

### CloseFeedback

This call **closes** the specified feedback item.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The id of the feedback item being closed. 
| ProjectID | String | The ID of the project. 
| Reason | String | Reason why the feedback item is being closed (Optional)

* Return value – Enumeration IssueState (see below for possible values)

### DeleteFeedback

This call **deletes** the specified feedback item.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The ID of the Feedback item to be deleted 
| ProjectID | String | The ID of the project.

* Return value – Boolean

### GetFeedbackItems

This call **retrieves a list of all feedback items** for the project which satisfy the IssueState filter.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project. |
| IssueStateFilter | Enumeration IssueState | State of the Feedback items to be retrieved (Open, Under_review, Accepted, Scheduled, Solved, Rejected; empty returns all feedback for the project). |
| ProjectID | String | The ID of the project. |

* Return value – List of Issue

### GetSingleFeedbackItem

This call **retrieves a single feedback item** by ID.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The ID of the Feedback item to be retrieved 
| ProjectID | String | The ID of the project.

* Return value – Issue
