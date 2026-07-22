# Teamcenter Connector 2606 — Documentation Guide

---

## Overview & Introduction

### What is Teamcenter Connector 2606?

Teamcenter Connector 2606 marks a shift in how Mendix integrates with Teamcenter. For the first time, we're bringing together everything you need in a single, unified Marketplace module. This release combines what were previously two separate Marketplace downloads: Teamcenter Connector and the Teamcenter Extension (which itself contained two modules: Teamcenter Toolkit and the Extension add-on) into one streamlined package that works seamlessly with Mendix 11.12 and higher.

Additionally, Teamcenter Extension has been re-built using the Web Extensibility Framework and is now available as a Teamcenter service document. You can think of a Teamcenter service document as a container that can be created on a per module basis which stores everything related to your Teamcenter integrations within a specific module. 

In previous versions, the Extension stored the Teamcenter integrations and configurations on disk (resources folder), separate from your Mendix app. This made version control tricky and team collaboration more complex. With the Teamcenter service document approach, everything is stored inside the Mendix model, just like microflows, pages, and domain models. This means:
* Your integrations travel with your module when you export it or commit it to version control.
* You can have different Teamcenter service documents for different purposes within the same app.
* You can have different Teamcenter service documents for different Teamcenter instances, for example for test and production. 
  
### Architecture Overview

Here's how all the pieces fit together:

```
Studio Pro (Mendix 11.12+)
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

### How it works in practice

1. You start by creating a Teamcenter service document, where you configure your Teamcener connection and create integrations.
2. The Teamcenter service document generates domain model entities and microflows specific to your integration needs, placing them directly in your module.
3. The generated microflows make use of predefined Teamcenter connector microflows for the integration with Teamcenter, using the TcConnector Java Actions to call Teamcenter's SOA layer

### Prerequisites and Compatibility

Before you start working with Teamcenter Connector 2606, make sure your environment meets these requirements:

| Requirement | Minimum version |
|---|---|
| Mendix Studio Pro | 11.12.1 |
| Teamcenter (self-hosted) | 2606, 2512, 2506 |
| Teamcenter X | 2606, 2512, 2506 |

#### Required Marketplace modules
* Community Commons
* Encryption
