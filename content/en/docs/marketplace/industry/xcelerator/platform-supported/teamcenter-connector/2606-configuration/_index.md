---
title: "Teamcenter Connector 2606"
url: /appstore/industry/teamcenter-connector/unified-teamcenter-connector/
weight: 2
description: "Describes Teamcenter Connector 2606, a unified Mendix Marketplace module for integrating Mendix with Teamcenter."
---

## Introduction

Teamcenter Connector 2606 is a unified Mendix Marketplace module that brings together everything you need to integrate Mendix with Teamcenter. It combines what were previously two separate Marketplace modules, Teamcenter Connector and Teamcenter Extension, with Teamcenter Extension containing two modules, Teamcenter Toolkit and the Extension add-on. Teamcenter Connector 2606 is a streamlined package that works seamlessly with Mendix 11.12 and above.

Teamcenter Extension has been rebuilt using the Web Extensibility Framework and is available as a Teamcenter service document. A Teamcenter service document is a container that you can create on a per-module basis. It stores everything related to your Teamcenter integrations within a specific module.

In previous versions, the Teamcenter Extension stored integrations and configurations on disk, in the resources folder, separate from your Mendix app. This made version control difficult and team collaboration more complex. With a Teamcenter service document, everything is stored inside the Mendix model, just like microflows, pages, and domain models. This means:

* Your integrations travel with your module when you export it or commit it to version control.
* You can have different Teamcenter service documents for different purposes within the same app.
* You can have different Teamcenter service documents for different Teamcenter instances, such as for test and production.

### Architecture Overview

The following diagram shows how all the pieces fit together:

```
Studio Pro 11.12+
│
├── Teamcenter service document  ←  stores integrations + connection settings
│     └── Extension UI (TypeScript / Web Extensibility Framework)
│           ├── Settings Tab
│           ├── Integrations Tab
│           ├── Integration Mapping Editor
│           └── Integration Configuration Dialogs
│
├── Generated Artifacts (per module)
│     ├── Domain Model  (entities, associations, specializations)
│     └── Microflows    (search, create, update, revise, get, relate, BOM)
│
└── TcConnector module (runtime — includes former Toolkit)
      ├── Published Microflows (Toolbox)   [Published — Teamcenter icon]
      ├── Java Actions (Toolbox)           [Published — Teamcenter icon]
      ├── Internal Actions                 [Private — no icon]
      ├── TcConnector Domain Model (base entities, BOMLine, search criteria)
      ├── CallTeamcenterService (custom SOA calls)
      └── Authentication (Credentials / TcSSO / TcX SSO)
              │
              ▼
        Teamcenter SOA Layer
        (self-hosted v2506+ / Teamcenter X v2506+)
```

## How It Works

These steps describe how Teamcenter Connector 2606 works in a nutshell: 

1. You start by creating a Teamcenter service document, where you configure your Teamcenter connection and create integrations.
2. The Teamcenter service document generates domain model entities and microflows specific to your integration needs, placing them directly in your module.
3. The generated microflows use predefined Teamcenter connector microflows for the integration with Teamcenter, using the TcConnector Java Actions to call Teamcenter's SOA layer.

## Prerequisites and Compatibility

Before working with Teamcenter Connector 2606, make sure your environment meets these requirements:

| Requirement | Supported versions |
| --- | --- |
| Mendix Studio Pro | 11.12.1 and above |
| Teamcenter (self-hosted) | 2606, 2512, 2506 |
| Teamcenter X | 2606, 2512, 2506 |

### Required Marketplace Modules

* Community Commons
* Encryption
