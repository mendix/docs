---
title: "Feedback API"
category: "API Documentation"
---


## Documentation

The Mendix Feedback API allows you to retrieve, add and manage feedback for your Mendix projects.

{{% alert type="info" %}}

Each call also requires the parameters 'username' and 'password'. These are the public credentials you will find below; actual authentication of requests is done through API keys.

* username: PlatformAPIUser
* password: PlatformAPIPassword

{{% /alert %}}

**[Get WSDL](attachments/9535499/19398864.wsdl)**

## Published Microflows

### Microflow AcceptFeedback

This microflow accepts the specified feedback item.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The ID of the Feedback item to be accepted 
| ProjectID | String |  The ID of the project

* Return value – Boolean

### Microflow AddFeedback

This microflow add a new feedback item to the project and returns the ID of the new feedback item.

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

### Microflow CloseFeedback

This microflow closes the specified feedback item.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The id of the feedback item being closed. 
| ProjectID | String | The ID of the project. 
| Reason | String | Reason why the feedback item is being closed (Optional)

* Return value – Enumeration IssueState

### Microflow DeleteFeedback

This microflow deletes the specified feedback item.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The ID of the Feedback item to be deleted 
| ProjectID | String | The ID of the project.

* Return value – Boolean

### Microflow GetFeedbackItems

This microflow retrieves all feedback items for the project which satisfy the IssueState filter.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project. |
| IssueStateFilter | Enumeration IssueState | State of the Feedback items to be retrieved (Open, Under_review, Accepted, Scheduled, Solved, Rejected; empty returns all feedback for the project). |
| ProjectID | String | The ID of the project. |

* Return value – List of Issue

### Microflow GetFeedbackItems

This microflow retrieves a single feedback item by ID.

| Parameter Name | Parameter Type | Description |
| --- | --- | --- |
| ApiKey | String | The ApiKey the application uses to access the Feedback API for this project.
| FeedbackItemID | Integer/Long | The ID of the Feedback item to be retrieved 
| ProjectID | String | The ID of the project.

* Return value – Issue
