---
title: "Mendix Pipelines Release Notes"
linktitle: "Mendix Pipelines"
url: /releasenotes/developer-portal/mendix-pipelines/
weight: 8
description: "Release notes for Mendix Pipelines"
---

These release notes cover changes to the functionality and other features of the [Mendix Pipelines](/developerportal/deploy/mendix-pipelines/).

To see the current status of the Mendix Pipelines, see [Mendix Status](https://status.mendix.com/). Here you can also see planned maintenance and past incidents.

## 2025

### August 7, 2025

#### New Features

* We expanded Mendix Pipelines capabilities with new steps to support deployments and CI/CD automation for Mendix on Kubernetes and Azure. These configurable, low-code steps complement the existing Mendix Pipelines steps for Mendix Public Cloud, making it quicker and easier for your teams to streamline their development workflows. For more information, refer to the [Mendix Pipelines Steps](/developerportal/deploy/mendix-pipelines/#pipeline-steps).
  
### June 27, 2025

#### Bug Fixes

* We fixed a bug where users could not trigger the on commit trigger Mendix Pipeline (Ticket 245653)

### February 27, 2025

#### Improvements

* We have added a validation mechanism for the Mendix Pipeline designs, which prevents users from deleting a design if any Mendix Pipelines using that design are currently running. For more information, see [Mendix Pipelines: Editing a Mendix Pipeline Design](/developerportal/deploy/mendix-pipelines/#edit-pipeline). 
* You can now access the **Details** page of a Mendix Pipeline at any point, also while the Mendix Pipeline is running. For more information, see [Mendix Pipelines: Run Results](/developerportal/deploy/mendix-pipelines/#run-results).

## 2024

### November 14, 2024

#### New Features

* We added a new **Variables** tab that allows you to create user-defined Mendix Pipeline variables. For more information, see [The Variables Tab](/developerportal/deploy/mendix-pipelines/#variable-tab) in the *Mendix Pipelines* documentation.
* We added a new Mendix Pipeline step: [Unit Testing](/developerportal/deploy/mendix-pipelines/#unit-testing). This step executes the Unit Testing module in a running environment to perform a regression testing and marks the Mendix Pipeline as failed if any tests fail, providing the failure count and details.

### September 19, 2024

#### New Features

* We released an API that lets you start a new Mendix Pipeline run for a saved and activated Mendix Pipeline design and retrieve the status of a Mendix Pipeline run. For more information, see [Mendix Pipelines API](/apidocs-mxsdk/apidocs/pipelines-api/).
* We added a new Mendix Pipeline step: [Best Practice Recommender](/developerportal/deploy/mendix-pipelines/#recommender) Check. This step lets you evaluate results of the Maia Best Practice Recommender within your Mendix Pipeline.

### September 3, 2024

#### Improvements

* Deployment packages generated via Mendix Pipelines now generate a Software Bill of Material (SBOM) under the hood; this is visible in Software Composition for Studio Pro LTS and MTS versions 9.24.26 and above, 10.6.12 and above, and 10.12.3 and above.


### August 22, 2024

#### Fixes

* We fixed a bug that had been causing an incorrect Mendix Pipeline run status to display for the first few seconds on manually triggered Mendix Pipelines.

#### Improvements

* In the **Pipelines** page's **Runs** tab, we changed a column name from **Last Run** to **Run** because this more accurately reflects what the column shows: it indicates when a Mendix Pipeline run occurred.


### August 15, 2024

#### Improvements

* We added a Pipeline ID column to the **Designs** tab of the **Pipelines** page.

### July 4, 2024

#### New Features

* We added two new Mendix Pipeline steps:
    * You can use the Start Environment step to start a selected environment.
    * You can use the Promote Package step to move a deployment package from a specified source environment to a specified target environment.
* It is now possible to trigger Mendix Pipelines manually. To use this new trigger type in your Mendix Pipeline, select **Manual** as the **Trigger** in the Start Pipeline step of your Mendix Pipeline design.
* We will be launching a mini survey for Mendix Pipelines soon, asking you some questions about what you like and dislike.

#### Improvements

* Mendix Pipelines names are no longer editable while a Mendix Pipeline is active. If you want to edit a Mendix Pipeline name, deactivate the Mendix Pipeline first.
* We implemented deep links for all three tabs on the Mendix Pipelines page. This facilitates easy sharing of record-specific details on the **Runs**, **Designs**, and **Settings** tabs; you can simply copy and paste the URL.

### May 9, 2024

#### Improvements

* We added a Feedback Widget to the Mendix Pipelines pages so that customers can directly provide feedback, enhancement requests, and other ideas.
* We improved the performance of the **Runs** page's search and filtering.
* We added a column selector to the table on the **Runs** page, so it is now possible to customize which columns appear in the table. We also added a new column: Pipeline ID.

### April 4, 2024

#### Fixes

* We fixed an issue that was causing Mendix Pipelines to fail at the Checkout step for selected Mendix Pipeline runs. (Ticket 211117)
* We fixed an issue preventing user settings from saving for select users.
* We fixed an issue where the branches were not being fetched for the Checkout step when designing a Mendix Pipeline. We also fixed an issue where the Checkout step was not dynamically changing upon the change of the trigger.

#### Improvements

* We made a variety of user experience improvements, including improving the styling and implementing a Mendix Pipeline name character limit of 40 characters.

### February 29, 2024

#### New Features

* We launched a new feature: Mendix Pipelines. Mendix Pipelines lets you build and deploy software in an automated way. You can design Mendix Pipelines with a set of configurable, low-code steps. Activated Mendix Pipelines run automatically according to your design. This new Mendix Pipelines feature is intended to make it quick and easy for teams to automate their CI/CD process. For more information, see [Mendix Pipelines](/developerportal/deploy/mendix-pipelines/).
    * The Mendix Pipelines feature is in [public beta](/releasenotes/release-status/). It is currently available for unlimited use with all licensed Mendix Cloud and apps. Limitations may be put on its use in the future.