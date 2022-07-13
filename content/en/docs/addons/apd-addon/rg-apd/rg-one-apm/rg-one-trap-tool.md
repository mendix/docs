---
title: "Trap Tool"
url: /addons/apd-addon/rg-one-trap-tool/
---

## 1 Introduction

This chapter gives an overview of the trap tool, which can be used to collect the latest series of messages before an error, a warning, or a critical message occurs and to store those messages in the database when they do occur. No more asking the customer to turn on logging, waiting for things to happen, turning on even more logging, generating huge files, and spending a lot of time catching the event. Simply use the trap tool.

## 2 Traps

### 2.1 Overview

The trap tool shows the traps that are stored.

 {{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Overview.png" >}}

You can send the trap message to the performance tool when the performance tool is not running. This will process all microflow messages in the trap and will show the functionality that was running during the trap.

If you mark a trap to be kept, make sure this trap is not deleted with the periodic cleanup of data, with a manual delete all, or when the protection mechanism removes the oldest traps to prevent the database from growing.

### 2.2 Trap Details

When you select a trap, you get to see all the messages in that trap.

 {{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Individual_Trap.png" >}}

The search parameters to include or exclude **Connection Bus** messages and **Microflow Engine** messages are available to show or hide the most occurring messages.

Also, a list of selected records can be sent to the performance tool. If the performance tool is already running, you will get a warning that you can only send a trap to the performance tool if it is not running.

## 3 Manual Trap

You can manually send a trap and get logging output. This can be useful when there might be a microflow hanging or if an issue occurs but no error is generated.

This is the **Output Queue Size** counter. 

{{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Output_Queue.png" >}}

When a trap occurs, all the messages to be written to disk are stored in a queue. A separate thread handles this queue. The trap tool has a counter to indicate the number of messages in the output queue. When the trap tool is disabled or stopped, the output is interrupted and cancelled in the middle of processing the output queue.

## 4 Trap Tool Options

This is the **Trap Tool Options** dialog box:

{{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Options.png" >}}

The trap tool can be configured to trap on warnings. Error and critical messages are always trapped if the tool runs. Specific message patterns can be excluded (for more information, see below).

The trap tool can be configured to remember messages recorded during a certain amount of time that precedes a trap. So in the screenshot example of the options dialog box, you store per trap at most 15,000 records and at most messages from 10,000ms (10 seconds) before the trap.

### 4.1 Protections Tab

{{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Options_Protections.png" >}}

The trap tool has many protection mechanisms to make sure it can run safely in production.

The **Max messages to buffer** makes sure the trap tool will either stop when the maximum of messages in the queue is reached or pause for a defined period of time. This allows the trap queue to be written to the database and prevent a high volume traps to cause too much load on the system.

The **Max messages to store** makes the trap tool either stop when the maximum is reached or delete the oldest traps. The oldest traps are deleted when a new trap arrives after the new messages have been added to the database.

You can run the trap tool for a fixed amount of time. The trap tool is intended to run always, but when using the trap tool for the first time and not knowing which errors or warnings to exclude, you might want to limit the duration the trap tool is running.

The trap tool has a **Max Processing Delay (ms)** protection to stop the tool if the system generates too many log messages (which causes queueing inside Mendix). This of course depends on any other tools that might be running and other factors that might generate additional messages.

Traps are automatically deleted after a certain amount of days, as configured in **Remove trap log after (days)**. If you want to keep a trap for future reference, you can keep the trap using the **Keep** button above the traps grid.

### 4.2 Exclusions Tab

{{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Options_Exclusions.png" >}}

You can define which traps are excluded to avoid highly repetitive messages that are not useful for analysis. You can exclude a complete node or filter out trap messages by regular expressions. Exclusions can be added manually but also by selecting an error,
a warning, or a critical message in either the log tool or the trap tool, viewing their details, and pressing the **Exclude** button.

{{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Edit_Exclusion.png" >}}

The regular expression can be tested against the traps and log messages in the database, so if the tool currently records a message that needs to be excluded the next time it occurs, then the test button should give a result.

### 4.3 Triggers Tab

On the **Triggers** tab, you can define message triggers that fire on messages of level INFO and above. 

{{< figure src="/attachments/addons/apd-addon/rg-apd/rg-one-apm/rg-one-trap-tool/Options_Triggers.png" >}}

See the description of [Triggers](/addons/apd-addon/rg-one-triggers/) for how to configure triggers.

### 4.4 Save & Apply

Changes to the options are applied to the trap tool if the button **Save & apply** is used.
