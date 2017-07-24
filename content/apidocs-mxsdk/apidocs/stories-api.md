---
title: "Stories API"
category: "API Documentation"
---


## Documentation

The Mendix Stories API allows you to retrieve, create and update the sprints, stories and tasks in your Mendix projects.

{{% alert type="info" %}}

Each call also requires the parameters 'username' and 'password'. These are the public credentials you will find below; actual authentication of requests is done through API keys.

* username: PlatformAPIUser
* password: PlatformAPIPassword

{{% /alert %}}

[Get WSDL](attachments/9535497/19398865.wsdl)

## Published Microflows

### Microflow CreateSprint

This microflow creates a new sprint for the specified project and returns the ID of the new sprint.

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project. 
| DurationInWeeks | Integer/Long | Duration of the new sprint in weeks.
| Name | String | Name of the new sprint.
| ProjectID | String | The ID of the project. 
| StartDate | Date and time | Start date for the new sprint. If not filled, the sprint will automatically start directly after * the previous sprint. (optional)
| StartsAfterSprint | Integer/Long | ID of the Sprint directly preceding the new sprint. 

* Return value – Integer/Long

### Microflow CreateStory

This microflow creates a new story in the specified sprint and returns the ID of the new story. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| Description | String | Description of the story (optional) 
| Name | String | Name of the new story. 
| Points | Enumeration StoryPoints | Number of story points. If left empty will be set to 1\. (_1/_2/_3/_5/_8/_13/_20/_/40/_100, optional)
| ProjectID | String | The ID of the project. 
| SprintID | Integer/Long | The ID of the sprint. 
| StoryType | Enumeration StoryType | The type of the story (Feature or Bug) 

* Return value – Integer/Long

### Microflow CreateTask

This microflow creates a new task for the specified story and returns the ID of the new task. Parameters:

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project. 
| Description | String | Description of the task (optional)
| Name | String | Name of the new task. 
| ProjectID | String | The ID of the project. 
| StoryID | Integer/Long | The ID of the story. 

* Return value – Integer/Long

### Microflow GetSprintByID

This microflow retrieves a specific sprint. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| ProjectID | String | The ID of the project. 
| SprintID | Integer/Long | The ID of the sprint.

* Return value – Sprint_Transient

### Microflow GetSprints

This microflow retrieves all sprints in a specific project. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| ProjectID | String | The ID of the project.

* Return value – List of Sprint_Transient

### Microflow GetStories

This microflow retrieves all stories in a specific sprint. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| ProjectID | String | The ID of the project. 
| SprintID | Integer/Long | The ID of the sprint for which stories are being retrieved.

* Return value – List of Story_Transient

### Microflow GetStoryByID

This microflow retrieves a specific story. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| ProjectID | String | The ID of the project. 
| StoryID | Integer/Long | The ID of the story.

* Return value – Story_Transient

### Microflow GetTaskByID

This microflow retrieves a specific task. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| ProjectID | String | The ID of the project. 
| TaskID | Integer/Long | The ID of the task.

* Return value – Task_Transient

### Microflow GetTasks

This microflow retrieves all tasks for a specific story. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| ProjectID | String | The ID of the project. 
| StoryID | Integer/Long | The ID of the story for which tasks are being retrieved.

* Return value – List of Task_Transient

### Microflow UpdateStory

This microflow updates a story with modified information. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| Description | String | Description of the story (optional) 
| Name | String | Name of the story. 
| ParentSprintID | Integer/Long | The ID of the sprint the story is in. 
| Points | Enumeration StoryPoints | Number of story points. (_1/_2/_3/_5/_8/_13/_20/_/40/_100) 
| ProjectID | String | The ID of the project. 
| Status | Enumeration BacklogState | Status of the story, (Open/Started/Done)
| StoryID | Integer/Long | ID of the Story 
| StoryType | Enumeration StoryType | The type of the story (Feature/Bug) 

* Return value – Boolean

### Microflow UpdateTask

This microflow updates a task with modified information. Parameters: 

| Parameter Name | Parameter Type | Description
| --- | --- | --- |
| ApiKey | String | The API Key the application uses to access the Stories API for this project.
| Description | String | Description of the task (optional) 
| IsCompleted | Boolean | Completion state of the task.
| Name | String | Name of the new task. 
| ParentStoryID | Integer/Long | The ID of the story the task belongs to. 
| ProjectID | String | The ID of the project. 
| TaskID | Integer/Long | The ID of the task. 

* Return value – Boolean
