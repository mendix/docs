---
title: "Dynamic Case Management Commons"
url: /appstore/modules/dynamic-case-management-commons/
description: "Helps Mendix developers quickly get started with building case-driven apps using the Dynamic Case Management Add-On."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Dynamic Case Management Commons (DCMC)](https://marketplace.mendix.com/link/component/247271) module helps Mendix developers quickly get started with building case-driven apps using the [Dynamic Case Management Add-On](https://marketplace.mendix.com/link/component/242816). The module provides reusable components and best practices for starting, managing, and tracking cases, making it easier to develop dynamic case management solutions, even with limited experience.

### Features

Dynamic Case Management Commons provides access to the following:

* Example pages, microflows, and reusable snippets
* Task inbox for managing tasks
* Team management to configure and reuse case teams per case model
* Case management for viewing and managing case instances and their tasks
* Event logs for tracking case events

### Prerequisites

The minimum Studio Pro version required to use Dynamic Case Management Commons is 11.12.4.

### Dependencies

* [Dynamic Case Management Add-On](https://marketplace.mendix.com/link/component/242816)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)

## Configuration

Follow these steps to configure Dynamic Case Management Commons:

1. Add the **ASU_CaseManagement_Startup** microflow as the **After startup** microflow of your app. If there is already an after startup microflow set, add the microflow as an action in the existing after startup microflow.
2. Add the **DynamicCaseManagementCenter** page to your app navigation.
3. Assign the module roles to the relevant app roles:

    1. **CaseWorker** role:

        * Can view and complete human tasks
        * Can view and manage case instances

    2. **TeamManager** role:

        * Can define and manage case teams

    {{% alert color="warning" %}} These module roles only give access to certain functionality, and do not determine the access rights for actual cases. Access to cases and all related data is handled by the CaseFabric engine, and is based on the case team that is assigned to a case when a case starts. Therefore, before starting a case, the user with the **TeamManager** role must navigate to the Dynamic Case Management Center in the running app, open the **Team Management** page, and configure at least one team for each case model. The **TeamManager** must also ensure that all case team roles are mapped to the appropriate Mendix app roles, so that the correct users can work on the case. {{% /alert %}}

## Components {#components}

You can find several useful documents in the **UseMe** folder. You can use them to quickly get started with building case-driven apps.

   {{% alert color="info" %}} All documents in the **Private** folder are meant for internal use within the module itself. Do not use these documents in your app, as they might change in future releases without notice.{{% /alert %}}

### Pages

The Dynamic Case Management Commons module comes with several ready-to-use pages to help you and your users get started with dynamic case management. These pages work out of the box. Simply add them to your app navigation to start using them.

The following pages are included:

* **DynamicCaseManagementCenter** – A central page that acts as the main entry point for both case workers and team managers.   
    {{< figure src="/attachments/appstore/platform-supported-content/modules/dynamic-case-management-commons/dcmc-admin-center.png" alt="dcmc-admin-center" max-width=90% >}} 
    
    Case workers have access to:

    * **Task Inbox** – This page displays a list of human tasks a case worker can work with:

        * **My Claimed Tasks** shows tasks that the case worker has already claimed.
        * **My Tasks** lists tasks available to the case worker, but not yet claimed.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/dynamic-case-management-commons/dcmc-task-inbox.png" alt="dcmc-task-inbox" max-width=90% >}}

    * **Case Management** – This page displays a list of all cases that the case worker has access to. For each case, the case worker can view its details, including the associated tasks and case events, and has the ability to terminate cases or individual tasks when necessary.
    * The **Case Dashboard** section is included as a placeholder for future functionality.
    
    Team managers have access to:

    * **Team Management** – This page allows team managers to manage case teams per case model. For each case model, the team manager can define which Mendix app roles to map for each of the available case team roles. These mappings ensure that, when a case starts, the correct users are assigned based on their roles.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/dynamic-case-management-commons/dcmc-case-management.png" alt="dcmc-case-management" max-width=90% >}}

* **HumanTask_Example** – This is an example page where the case worker can view task details, event logs, complete the task, or plan discretionary items if available. It includes reusable snippets that you can use when building custom task pages.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/dynamic-case-management-commons/dcmc-task-page.png" alt="dcmc-task-page" max-width=90% >}}

### Microflows

Pre-configured microflows help you assign human tasks or update the state of case instances.

You can find the following reusable microflows in Dynamic Case Management Commons:

* **SUB_CaseTeam_Get** – Retrieves the case team definition based on the case model name and the case team definition name. It then maps the case team definition to an actual case team instance, and returns the case team, which you can then use to start a new case.
* **ACT_HumanTask_ClaimTask** – Claims a human task for the current user. The task is passed as a parameter. When using this action, the task status gets updated to **Assigned**.
* **ACT_HumanTask_ShowTaskPage** – Opens the appropriate task page for the selected human task, allowing the case worker to view and work on the task.
* **ACT_HumanTask_CompleteTask** – Completes a human task. The task is passed in as a parameter. To complete the task successfully, you need to update the applicable values required by the Java action, as they depend on the relevant context.

In addition, the following example microflow is included:

* **ACT_ContextEntity_StartCase** – This is an example microflow that starts a new case using the case model name and the case team definition name as parameters. It starts the case for the specified case model and creates a case team instance based on the given case team definition. It uses the **SUB_CaseTeam_Get** microflow to retrieve the case team, and then starts the case. The microflow then stores the case identifier in your context entity.

   {{% alert color="info" %}}
   Replace the input parameter with your own context entity, and rename the microflow accordingly. Make sure to also use your context entity when calling the Java action that starts the case, and link it to your entity.
   {{% /alert %}}
