---
title: "Projects in the Mendix Metamodel"
linktitle: "Projects in the Metamodel"
url: /apidocs-mxsdk/mxsdk/projects-metamodel/
description: "This document describes how the Mendix Metamodel handles projects in relation to modules and documents."
weight: 1
---

## Introduction

A Mendix app model starts with a project. A project contains several top-level or project documents such as settings and security, and it contains the modules that make up a Mendix app.

### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/16842800.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
| --- | --- |
| [App](/refguide/app/) | TypeScript module [projects](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/projects.html) |
| [Modules](/refguide/modules/) |[Project](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.project.html) |
| |[Module](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.module.html) |
| |[ProjectDocument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.projectdocument.html) |

### Project Documents

Project-level documents describe app security, app settings, app navigation (for the different modes of navigation) and translations of the texts in your app.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/16842801.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
| --- | --- |
|[App Settings](/refguide/app-settings/)| [ProjectSettings](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/settings.ProjectSettings.html) |
| [App Security](/refguide/app-security/) | [ProjectSecurity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/security.ProjectSecurity.html)|
| [Navigation](/refguide/navigation/) |[NavigationDocument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/navigation.NavigationDocument.html)|
| [System Texts](/refguide/system-texts/) |[SystemTextCollection](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/texts.SystemTextCollection.html) |

## Modules

### Overview

A module consists of a domain model, model security settings and zero or more documents (for example, microflows, pages).

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/18582255.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
| --- | --- |
| [Domain Model](/refguide/domain-model/) | Property [`domainModel`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.module.html#domainmodel) of Project |
| [Module Security](/refguide/module-security/) | Property [`moduleSecurity`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.module.html#modulesecurity) of Project |

### Documents

Modules consist of documents, for example, microflows, pages or published or consumed services. These documents can be organized with folders.

In this sense, Module and Folder behave in the exact same way, and thus inherit from FolderBase: they both contain documents and folders.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/18582254.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
| --- | --- |
| [Modules](/refguide/modules/) | Property [`modules`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.project.html#modules) of Project |
| [Module](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.module.html) | |
| [FolderBase](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.folderbase.html) | |
| [Folder](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.folder.html) | |
| [ModuleDocument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.moduledocument.html) | |
| [Document](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.document.html) | |
