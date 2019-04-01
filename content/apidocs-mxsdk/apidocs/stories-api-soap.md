---
title: "SOAP API"
parent: "stories-api"
draft: true
---

## 1 Authentication

Each call requires the **username** and **password** parameters. These are the public credentials you will find below. The actual authentication of requests is done through API keys.

* username: PlatformAPIUser
* password: PlatformAPIPassword

[Get WSDL](attachments/9535497/19398865.wsdl)

## 2 Published Microflows

### 2.1 CreateSprint Microflow

This microflow creates a new sprint for the specified project and returns the ID of the new sprint.

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the [Stories API](stories-api) for this project.
| DurationInWeeks | Integer/Long | The duration of the new sprint in weeks.
| Name | String | The name of the new sprint.
| ProjectID | String | The ID of the app project.
| StartDate | Date and time | The start date for the new sprint (optional). If not filled, the sprint will automatically start directly after the previous sprint.
| StartsAfterSprint | Integer/Long | The ID of the sprint directly preceding the new sprint.

* Return value – Integer/Long

### CreateStory Microflow

This microflow creates a new story in the specified sprint and returns the ID of the new story. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the [Stories API](stories-api)  for this app project.
| Description | String | A description of the story (optional).
| Name | String | The name of the new story.
| Points | Enumeration StoryPoints | The number of story points (1, 2, 3, 5, 8, 13, 20, 40, 100; optional). If left empty, will be set to 1.
| ProjectID | String | The ID of the project.
| SprintID | Integer/Long | The ID of the sprint.
| StoryType | Enumeration StoryType | The type of story (Feature, Bug).

* Return value – Integer/Long

### CreateTask Microflow

This microflow creates a new task for the specified story and returns the ID of the new task. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the [Stories API](stories-api) for this app project.
| Description | String | A description of the task (optional).
| Name | String | The name of the new task.
| ProjectID | String | The ID of the app project.
| StoryID | Integer/Long | The ID of the story.

* Return value – Integer/Long

### GetSprintByID Microflow

This microflow retrieves a specific sprint. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the [Stories API](stories-api) for this app project.
| ProjectID | String | The ID of the app project.
| SprintID | Integer/Long | The ID of the sprint.

* Return value – Sprint_Transient

### GetSprints Microflow

This microflow retrieves all sprints in a specific project. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the Stories API for this app project.
| ProjectID | String | The ID of the app project.

* Return value – List of Sprint_Transient

### GetStories Microflow

This microflow retrieves all stories in a specific sprint. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the Stories API for this app project.
| ProjectID | String | The ID of the app project.
| SprintID | Integer/Long | The ID of the sprint for which stories are being retrieved.

* Return value – List of Story_Transient

### GetStoryByID Microflow

This microflow retrieves a specific story. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this app project.
| ProjectID | String | The ID of the app project.
| StoryID | Integer/Long | The ID of the story.

* Return value – Story_Transient

### GetTaskByID Microflow

This microflow retrieves a specific task. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the Stories API for this app project.
| ProjectID | String | The ID of the app project.
| TaskID | Integer/Long | The ID of the task.

* Return value – Task_Transient

### GetTasks Microflow

This microflow retrieves all tasks for a specific story. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the [Stories API](stories-api) for this app project.
| ProjectID | String | The ID of the app project.
| StoryID | Integer/Long | The ID of the story for which tasks are being retrieved.

* Return value – List of Task_Transient

### UpdateStory Microflow

This microflow updates a story with modified information. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the [Stories API](stories-api) for this app project.
| Description | String | Description of the story (optional).
| Name | String | The name of the story.
| ParentSprintID | Integer/Long | The ID of the sprint the story is in.
| Points | Enumeration StoryPoints | The number of story points (1, 2, 3, 5, 8, 13, 20, 40, 100).
| ProjectID | String | The ID of the project.
| Status | Enumeration BacklogState | The status of the story (Open, Started, Done).
| StoryID | Integer/Long | The ID of the story.
| StoryType | Enumeration StoryType | The type of story (Feature, Bug).

* Return value – Boolean

### UpdateTask Microflow

This microflow updates a task with modified information. These are the parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API key the application uses to access the [Stories API](stories-api) for this app project.
| Description | String | A description of the task (optional).
| IsCompleted | Boolean | The completion state of the task.
| Name | String | The name of the new task.
| ParentStoryID | Integer/Long | The ID of the story to which the task belongs.
| ProjectID | String | The ID of the project.
| TaskID | Integer/Long | The ID of the task.

* Return value – Boolean
