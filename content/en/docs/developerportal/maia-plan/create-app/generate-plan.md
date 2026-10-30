---
title: "Generating the Plan"
url: /developerportal/maia-spec/generate-plan/
description: "Describes the plan generation step of creating an app with Maia Spec."
weight: 30
aliases:
    - /developerportal/maia-plan/generate-plan/
---

## Introduction

Maia translates your defined scope into a concrete set of specs, where each spec corresponds to a specific capability.

1. After you click **Create Specs**, the **Spec** window appears, and Maia starts populating it with the proposed specs based on the project scope. The generated specs are listed in the left-hand pane. Each spec is made up of several requirements. For project management purposes, a spec corresponds to an epic, and a requirement corresponds to a story.

2. While the project plan is being generated, you have these options:

    * **Previous** – Click this button to return to the **Define Scope** window. Any changes you have made are saved.
    * **Save and Exit** – Save all the changes and leave the flow.

   After the project plan is fully generated and you have made any necessary changes, click one of the available options:
   
   * **Open in Jira** – Start managing the project in Jira.
   * **Build in Maia Make** – Open the project in Studio Pro's Maia Make.

### Recommended Marketplace Components {#recommender}

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

Maia identifies approved Marketplace components that can accelerate your development. If Maia finds components that can help you implement a specific story, they are displayed in the following places:

* At the epic level, as a number. Example: *1 Resource*.
* At the user story level, in the side panel. From here, you can perform the following actions:

    * If you want more details about the component, click it to access its page in the Marketplace.
    * If you do not want a component to be used, delete it by clicking the trash can icon.

If your company has company-approved components, Maia only returns company-approved components from the Public and Private Marketplace.    
If your company does not have company-approved components, Maia returns the following types of components:

* Platform-supported components
* All Private Marketplace components
