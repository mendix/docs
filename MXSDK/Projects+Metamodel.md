---
title: "Projects (metamodel)"
space: "Mendix Platform SDK"
parent: "Understanding+the+metamodel"
---
## Overview

A Mendix app model starts with a project. A project contains several top-level or project documents such as settings and security, and it contains the modules that make up a Mendix app.

#### Graphical overview

![](attachments/16057002/16842800.svg)

#### See also

###### Mendix Modeler reference guide

*   [Project](/refguide6/Project)
*   [Modules](/refguide6/Modules)

###### Model SDK API docs

*   TypeScript module [projects](https://apidocs.mendix.com/modelsdk/latest/modules/projects.html)
*   [Project](https://apidocs.mendix.com/modelsdk/latest/classes/projects.project.html)
*   [Module](https://apidocs.mendix.com/modelsdk/latest/classes/projects.module.html)
*   [ProjectDocument](https://apidocs.mendix.com/modelsdk/latest/classes/projects.projectdocument.html)

### Project documents

Project-level documents describe project security, project settings, app navigation (for the different modes of navigation) and translations of the texts in your app.

#### Graphical overview

![](attachments/16057002/16842801.svg)

#### See also

###### Mendix Modeler reference guide

*   [Project Settings](/refguide6/Project+Settings)
*   [Project Security](/refguide6/Project+Security)
*   [Navigation](/refguide6/Navigation)
*   [System Texts](/refguide6/System+Texts)

###### Model SDK API docs

*   [ProjectDocument](https://apidocs.mendix.com/modelsdk/latest/classes/projects.projectdocument.html) and its inheritance hierarchy

## Modules

### Overview

A module consists of a domain model, model security settings and zero or more documents (e.g. microflows, pages).

#### Graphical overview

![](attachments/16057002/18582255.svg)

#### See also

Mendix Modeler reference guide

*   [Domain Model](/refguide6/Domain+Model)

*   [Module Security](/refguide6/Module+Security)

Model SDK API docs

*   Property [`domainModel`](https://apidocs.mendix.com/modelsdk/latest/classes/projects.module.html#domainmodel) of Project
*   Property [`moduleSecurity`](https://apidocs.mendix.com/modelsdk/latest/classes/projects.module.html#modulesecurity) of Project

### Documents

Modules consist of documents, e.g. microflows, pages or published or consumed services. These documents can be organized with folders.

In this sense, Module and Folder behave in the exact same way, and thus inherit from FolderBase: they both contain documents and folders.

#### Graphical overview

![](attachments/16057002/18582254.svg)

#### See also

###### Mendix Modeler reference guide

*   [Modules](/refguide6/Modules)

###### Model SDK API docs

*   Property [`modules`](https://apidocs.mendix.com/modelsdk/latest/classes/projects.project.html#modules) of Project
*   [Module](https://apidocs.mendix.com/modelsdk/latest/classes/projects.module.html)
*   [FolderBase](https://apidocs.mendix.com/modelsdk/latest/classes/projects.folderbase.html)
*   [Folder](https://apidocs.mendix.com/modelsdk/latest/classes/projects.folder.html)
*   [ModuleDocument](https://apidocs.mendix.com/modelsdk/latest/classes/projects.moduledocument.html)
*   [Document](https://apidocs.mendix.com/modelsdk/latest/classes/projects.document.html)
