---
title: "Collaborative Development in Studio"
category: "Collaboration"
description: This document describes the process of collaborative development between Mendix Studio and Mendix Studio from the perspective of Mendix Studio.
tags: ["studio", "collaborative development", "sync"]
menu_order: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}

Collaborative development is only available if your project has Mendix version 7.23.3 or above. You cannot sync your changes with Studio Pro if your project has Mendix version 7.23.2 or below. 

You will still be able to open your project in Studio. However, to sync changes between Studio and Studio Pro, Studio Pro must be upgraded to version 7.23.3 or above. 

{{% /alert %}}

Collaborative development is the process that allows team members work together on one project in Mendix Studio Pro and Mendix Studio and easily synchronize changes made by others using [version control](/refguide/version-control). 

If you are working in a team (or switch from Studio to Studio Pro yourself), it is easy to share app model changes. All changes made in Studio are auto-saved. Studio Pro users get these changes when they click **Update** or **Commit**. If they commit, they push their own changes at the same time, so both Studio and Studio Pro are synchronized. For a more technical and detailed process overview, see [Collaborative Development](/refguide/collaborative-development) in the *Studio Pro Guide*. 

Multiple users can view the project in Studio at the same time: one user can edit it and others are in read-only mode. 

## 2 Concepts

For concepts and definitions, see section [2 Concepts](/refguide/version-control) in *Version Control*. 

## 3 Collaborative Development from Studio Perspective

As all Studio changes are auto-saved, the collaborative development is indicated by pop-ups that you see when the content of the app is being changed or synchronized. This can happen in the following cases:

1. **Committing Your Changes** – if your team members are working on the same development line in Studio Pro and they click **Update**, your screen gets locked for a few moments while your changes are automatically committed to the Team Server and then applied to Studio Pro. For more information on the collaborative development process in Studio Pro, see section [4 Studio Pro Perspective](/refguide/collaborative-development) in *Collaborative Development* in *Version Control*.

    {{% image_container width="350" %}}![Committing Changes Dialog Box](attachments/general-collaborative-development/committing-changes.png)
   {{% /image_container %}}

2.  **Syncing Changes** – your screen gets locked for a few moments each time the Studio Pro users commit. <br/>

    {{% image_container width="350" %}}![Synching Changes Dialog Box](attachments/general-collaborative-development/synching-changes.png)<br/>

    {{% /image_container %}}

    There are two possible outcomes of this process:<br/>

    a.  In Studio Pro, there are no conflicts in the project, and changes from Studio Pro will be applied to Studio. (Conflicts are changes that contradict each other and cannot be merged automatically. For example, one user has changed a caption of a button, while another user has deleted this button).

    b.  There are project conflicts which should be solved in Studio Pro before the Studio Pro user can commit again. Your screen is unlocked without any changes to your app.  

3.  **Switching Contents** – in Studio Pro, users can change the branch line Studio is enabled for. For more information on managing branches, see the [Managing Development Lines](/refguide/collaborative-development#managing-branches) section in the *Collaborative Development* in the *Studio Pro Guide*. 
	During this process Studio gets locked for a few moments, all changes are auto-saved on the current development line, and a pop-up dialog is shown that the Studio Pro user is changing the branch line for Studio. This means that the contents of your app will change. 

	{{% image_container width="350" %}}![Switching Contents Dialog Box](attachments/general-collaborative-development/switching-branches.png)
    {{% /image_container %}}

## 4 Read More

* [Version Control](/refguide/version-control)
* [Collaborative Development](/refguide/collaborative-development)

