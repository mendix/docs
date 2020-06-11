---
title: "Measurements Tool"
parent: "rg-one-apm"
---

## 1 Introduction

The measurements tool is meant to measure system resources and to trigger actions on thresholds. This allows you to monitor memory and save statistics or perform a trap when memory usage reaches, for example, 80%. 

Measurements are created via the **Collect in Measurements Tool** button in the JVM browser or in the query tool. The collected measurements can be stored in the database and used for generating graphs or for triggering events.

## 2 Charts

The charts tab shows graphs of collected data in the measurements tool.

 ![](attachments/rg-one-measurements-tool/Charts.png)

Double-clicking the measurement will open a read-only view of the measurement configuration.

## 3 Measurement Configuration

Measurements can be configured on the **Measurement configuration** tab. If the measurement is running, you can only view the measurement configuration. 

  ![](attachments/rg-one-measurements-tool/Measurement_Configuration_Tab.png)                     

Measurements can be started and stopped here. In the dialog behind the play-button, you can start or stop all measurements at once.

### 3.1 Measurement Configuration Tab

Double-clicking or selecting and clicking the **Edit** button shows the measurement configuration dialog.  Here, the selected measurement can be configured:

 ![](attachments/rg-one-measurements-tool/Measurement_Configuration_Edit.png)

The **Measurement configuration** tab allows you to do the following:

*   Change the **Name**
*   Choose when to **Run**
     - At regular intervals
     - Once after startup
     - Disabled
*   **Calculate with expression**
     - If yes, the **Expression** field appears (see below for the expression details)
     - If yes, the **Parameter** field appears (this parameter can be used in the expression)
*   Set the **Frequency (s)** that the measurement is executed in seconds
*   **Store in database** stores the measurement in the database
 * You can only measure for triggers; for charts you need the database to be stored in the database
*   The **Remove data after (days)** configures the automatic cleanup (purge) of the data
 * Measurements will automatically be removed after a certain amount of days
*   For a query measurement, the **Expose query results to JMX** makes the query results visible in other Java management consoles – this is only useful for query measurements, since JVM Browser measurements are already available  there
*   If a query has multiple results, you can configure using the first column a part of the name via **Use first result column in name**

### 3.2 Triggers Tab

Here you can define triggers on high memory usage for example.

 ![](attachments/rg-one-measurements-tool/Measurement_Triggers.png)                 

See the description of [Triggers](rg-one-triggers) for how to configure triggers.

### 3.3 Expressions

Expressions for measurements and measurement triggers are written the same as expressions that are written in the Mendix Modeler expression editor. 

The `$Measurement` variable is available with columns:

* `ValueString`
* `ValueDate`
* `ValueLong`
* `ValueFloat`
* `ValueBoolean`
* `TimeStamp`

Also, the last **N** measurements are available as $Measurement_1 (the previous one) up to $Measurement_**N**. The amount of previous measurements (**N**) is configured in the app. The default is 5, but an admin can changed this. 

At startup, the last **N** measurements are empty, so handle the empty case!

When the measurement is run only once, the previous measurements are retrieved from the database and can be used as `$MeasurementDB_1` to `$MeasurementDB_N`. 

This is an example to calculate the difference between the current and the previous measurement:

$Measurement/ValueLong - $Measurement_1/ValueLong

## 4 Tester Tab

The tester will execute the measurement and test the trigger (if enabled) to verify the expressions.

![](attachments/rg-one-measurements-tool/Measurement_Tester.png)

If there is an error, the error message appears on **Apply & test**. You can view the stack trace as well.

In the tester, you can clear the cache and also remove all records from the database.

## 5 Triggered Events

If a trigger fires, a record is created in the triggered events. 

The events are automatically deleted after a certain amount of days as configured in the global setting [More tab](rg-one-configuration#more). 
**Remove triggered events after (days)**. 

If you want to keep an event for future reference you can use the **Keep**-button above the triggered event grid.

![](attachments/rg-one-triggers/Triggered_Events.png)

If a trap is created with the trigger actions, you can open the trap.

If a statistics snapshot is created with the trigger actions you can open the statistics snapshot.

If a heap dump is created with the trigger actions you can download the heap dump. 
You only get this option if you have special permissions.

You can open the measurement configuration that contains the trigger with the **Show trigger** button.
