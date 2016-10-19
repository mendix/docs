---
title: "Manage scheduled events"
space: "Mendix 5 How-to's"
---
## Description

This section describes how to manage scheduled events under Linux.

## Instructions

To manage the scheduled events we have to edit the `m2ee.yaml` configuration file. See [Mendix Hosting Enviroment project structure and commands](Mendix+Hosting+Enviroment+project+structure+and+commands) about finding this file and opening it in an editor.

At the end of the configuration file, you'll see the following content:

```
 # ScheduledEventExecution can be set to ALL, NONE (default) or SPECIFIED
 ScheduledEventExecution: NONE
 # When using ScheduledEventExecution SPECIFIED, provide a list of actions to
 # enable:
 MyScheduledEvents:
  - Module1.Event1
  - Module2.Event2
  - Module3.Event3

```

Setting the ScheduledEventExecution option to ALL will cause every defined scheduled event in the application to be enabled. NONE will disable all of them, and SPECIFIED will require you to edit the `MyScheduledEvents` value to present a comma separated list of scheduled events that you want to have enabled in this specific environment.

Return to:
[![](attachments/819203/917564.png)](Manage+scheduled+events)[(Back to Top)](Manage+scheduled+events)
