---
title: "Measurements Tool"
url: /appstore/partner-solutions/apd/rg-one-measurements-tool/
---

## Introduction

The measurements tool is meant to measure system resources and to trigger actions on thresholds. This allows you to monitor memory and save statistics or perform a trap when memory usage reaches, for example, 80%. 

Measurements are created via the **Collect in Measurements Tool** button in the JVM browser or in the query tool. The collected measurements can be stored in the database and used for generating graphs or for triggering events.

## Charts

The charts tab shows graphs of collected data in the measurements tool.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Charts.png" class="no-border" >}}

Double-clicking the measurement will open a read-only view of the measurement configuration.

## Measurement Configuration

Measurements can be configured on the **Measurement configuration** tab. If the measurement is running, you can only view the measurement configuration. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Configuration_Tab.png" class="no-border" >}}                     

Measurements can be started and stopped here. In the dialog behind the play-button, you can start or stop all measurements at once.

### Measurement Configuration Tab

Double-clicking or selecting and clicking the **Edit** button shows the measurement configuration dialog.  Here, the selected measurement can be configured:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Configuration_Edit.png" class="no-border" >}}

The **Measurement configuration** tab allows you to do the following:

* Change the **Name**
* Choose when to **Run**
    * At regular intervals
    * Once after startup
    * Disabled
* **Calculate with expression**
    * If yes, the **Expression** field appears (see below for the expression details)
    * If yes, the **Parameter** field appears (this parameter can be used in the expression)
* Set the **Frequency (s)** that the measurement is run in seconds
* **Store in database** stores the measurement in the database
* You can only measure for triggers; for charts you need the database to be stored in the database
* The **Remove data after (days)** configures the automatic cleanup (purge) of the data
* Measurements will automatically be removed after a certain amount of days
* For a query measurement, the **Expose query results to JMX** makes the query results visible in other Java management consoles – this is only useful for query measurements, since JVM Browser measurements are already available there
* If a query has multiple results, you can configure using the first column a part of the name via **Use first result column in name**

### Triggers Tab

Here you can define triggers on high memory usage for example.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Triggers.png" class="no-border" >}}                 

See the description of [Triggers](/appstore/partner-solutions/apd/rg-one-triggers/) for how to configure triggers.

### Expressions

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

## Tester Tab

The tester will run the measurement and test the trigger (if enabled) to verify the expressions.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Tester.png" class="no-border" >}}

If there is an error, the error message appears on **Apply & test**. You can view the stack trace as well.

In the tester, you can clear the cache and also remove all records from the database.

## Triggered Events

If a trigger fires, a record is created in the triggered events. 

The events are automatically deleted after a certain amount of days as configured in the global setting [More tab](/appstore/partner-solutions/apd/rg-one-configuration/#more). 
**Remove triggered events after (days)**. 

If you want to keep an event for future reference you can use the **Keep**-button above the triggered event grid.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Triggered_Events.png" class="no-border" >}}

If a trap is created with the trigger actions, you can open the trap.

If a statistics snapshot is created with the trigger actions you can open the statistics snapshot.

If a heap dump is created with the trigger actions you can download the heap dump. 
You only get this option if you have special permissions.

You can open the measurement configuration that contains the trigger with the **Show trigger** button.
