---
title: "Triggers"
space: "Application Performance Monitor"
category: "User Manual"
---
Triggers can be configured in the measurements tool, the trap tool and the statistics tool. Triggers are
meant to fired on events based on a pattern and/or a threshold. This allows 
you to monitor memory and save statistics or perform a trap when memory usage reaches for example 80%. 


# Triggers types

## Measurement triggers
Measurement triggers are used to check measurements for a specific value. If the Expression in a trigger
is fulfilled, the configured Action is taken. 


# Trigger configuration

## Trigger definition tab
The trigger definition tab contains the **Description** and **Enabled** attributes as well as specific settings
for the different trigger types.

 ![](attachments/Triggers/Trigger_Definition.png)   

### Shared fields:
* **Description** to describe the trigger. This description can be used in log and trap message actions as {1}.
* **Enabled** to enable or diable a trigger. Triggers are automatically disabled if the continuation is 
set to **Stop**.
### Measurement triggers:
* **Expression** to set the business rule that fires the action. See below for details.
* **Parameter** to define another measurement to be used in the expression as a parameter.
### Statistics triggers:
* **Microflow pattern** to determine for which microflows this trigger should check.
* **Threshold value (ms)** to set the threshold value. If a microflow takes longer the trigger will fire.
### Message triggers:
* **Node pattern** to determine for which log node the trigger should fire.
* **Level** to determine for which log level the trigger should fire.
* **Message pattern** to define a message pattern for which the trigger fires.


## Trigger actions tab
Trigger actions define what happens when the trigger fires.

 ![](attachments/Triggers/Trigger_Actions.png) 

Possible trigger actions:
*   **Notify**. You can use {1} for the administrator as configured in the global setting
 [More tab](/APM/configuration#more).You can use replacement variables like {1} in the subject and message. 
 These are described in the **i**nformation icons.
*   **Create log message**. You can use replacement variables like {1} in the message. These are described in
the **i**nformation icons.
*   **Create trap message**. You can use replacement variables like {1} in the message. These are described in
the **i**nformation icons.
*   **Save statistics**. The duration of this snapshot is configured in the global settings.
The snapshot will by default have between 10 and 20 minutes of statistics.

Only visible with special permissions:
*    **Run microflow** ***(Deprecated)***, Run a microflow with parameters that depend on the trigger type.
This was used in the past to notify, but the notify option has been simplified.
*   **Create heap dump**. You only see the create heap dump option if you have special permissions.
(**USE WITH CAUTION**: creating a heap dump pauses the system for a certain period of time depending on 
the amount of heap space assigned to the java process running the Mendix server. This can freeze the App
for many seconds).

## Trigger continuation tab
The continuation tab allows to configure what happens after the trigger has fired and the action has 
been executed. 
![](attachments/Triggers/Trigger_Continuation.png)

You can:

*  Do **Nothing** means just keep on checking and executing the trigger
*  **Stop** means that the trigger will fire once and then disable itself
*  **Pause** means you can define a period in which the trigger will not fire again. 
This is to prevent for example a large amount of emails when the CPU usage is high.


# Triggered Events
If a trigger fires, a record is created in the triggered events. 
The events are automatically deleted after a certain amount of days as 
configured in the global setting [More tab](/APM/configuration#more). 
**Remove triggered events after (days)**. If you want to keep a event for future 
reference you can keep the event using the keep-button above the triggered event grid.

![](attachments/Triggers/Triggered_Events.png)

If a trap is created with the trigger actions you can open the trap.

If a statistics snapshot is created with the trigger actions you can open the 
statistics snapshot.

If a heap dump is created with the trigger actions you can download the heap dump. 
You only get this option if you have special permissions.

You can open the measurement configuration that contains the trigger with the 
**Show trigger** button.
