---
title: "Workflow Properties"
parent: "workflows"
menu_order: 10
tags: ["workflow", "workflows", "workflow properties", "Studio Pro"]
---

## 1 Introduction

This document describes workflow properties. For details on what workflows are for and what kind of elements they can contain, see [Workflows](workflows).

## 2 Workflow Properties

Workflow properties consist of the following sections:

* [Common](#common)
* [Data](#data)
* [Display information](#display-info)
* [Due date](#due-date)
* [General](#general)
* [Workflow page](#workflow-page)

### 2.1 Common Section {#common}

#### 2.1.1 Name

**Name** is the internal name of the workflow. When referring to the workflow in the app project you will use this name. It must be unique within the module, but you can have two workflows with the same name in different modules. When referring to the workflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use workflows in other modules.

#### 2.1.2 Documentation

**Documentation** allows you to describe your microflow to make it easier for people to use and modify it.

#### 2.1.3 Allowed Roles

**Allowed roles** defines which [module role](module-security#module-role) the user must have to be able to execute the workflow.

{{% alert type="warning" %}}
These roles are only checked when the workflow is executed from the client. 
{{% /alert %}}

For more information, see [Module Security](module-security).

### 2.2 Data Section {#data}



### 2.3 Display Information Section {#display-info}

### 2.4 Due Date Section {#due-date}

### 2.5 General Section {#general}

### 2.6 Workflow Page Section {#workflow-page}



## 3 Read More

* 