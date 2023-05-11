---
title: "1.9"
url: /releasenotes/add-ons/apm-1.9/
weight: 97
---

## 1.9.0

The theme for this version is further enhancement of UX. 

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.9/Dashboard_1.9.0.png" >}}

The measurements tool has been enhanced to allow for calculated measurements. This allows for 
measuring memory as a percentage and triggering on 70% instead of some large number. The measurements tool
also caches the measurements for enhanced performance and you can use cached values if you want to measure 
differences. A small tester function has been added to test calculations.

The statistics tool now has a snapshots, bundling the statistics that belong together. 
This helps in opening them from a measurement and making the stored statistics more clear.
The statistics tool now also supports triggers on duration of microflows. This was a wish from several customers
to be notified or take action when a microflow takes to long.

The performance tool now bundles recorded sessions. This gives a better overview and allows you to see 
what has been recorded immediately.

The trap tool has a simplified way to show the microflow engine messages in the performance tool. 
Just click the button. You no longer have to select records and afterwards find the data in the 
performance tool. The processed data is opened in a recorded session.

Below are the details.

### Measurements Tool

The measurements tool has been redesigned to include some new features.

* An entity triggered events has been introduced to store a record whenever a trigger fires. This record is linked to the trigger, the measurement, and when appropriate the trap, the statistics snapshot or the heap dump.
* And entity for heapdumps has been added, so they are available from the client side and can be deleted.
* The trigger actions now include the basic log besides the already available trap, statistics snapshot, heap dump and run microflow.
* The GUI has been simplified to have no more dialog on dialog, on the charts view the list of measurements and items has been combined in 1 list. No need for a collapsible panel anymore
* Calculated measurements have been introduced so the memory can be measured as a percentage
* An expression has been introduced on the measurement to calculate the result
* Expressions can use another measurement as a parameter, so memory can be divided by total memory to get the percentage
* Measurements can be run once (after startup), so total memory is only determined once
* A cache with a history queue has been introduced for previous measured values, to prevent performance issues retrieving them from the database
* Trigger expressions can use the cached items. It can be configured with a constant how many previous values need to be stored.
* Also from the database the list of previous values can still be retrieved and used in an expression or trigger expression
* A tester has been introduced to test expressions
* Running counter cannot be edited, only viewed.
* The message in a trigger action to log or trap can now contain parameters with for example a measurement value 

### Statistics Tool

* Added microflow statistics snapshot entity. The stored microflow statistics are now linked to a snapshot. This allows measurements that create a snapshot to open this snapshot. Also manual snapshots can simply be deleted.
* Statistics triggers have been introduced, so a user can define a threshold for a microflow and perform the same actions as in the measurements tool when a microflow takes longer than the threshold value. Customers asked for this feature to monitor SLA’s.

### Performance Tool

* A new recorder tab to give more room to the recording function.
* The option to overrule the protection on processing the recorded session. You get a dialog where you can filter, overrule or cancel.
* Performance Tool got a new entity, called session where recording sessions are stored. The recorded microflows are linked to the session in which they are recorded. After process and when processing a trap in the performance tool the session opens, so you see the results of your action directly.
* The performance tool filtering now filters sub-microflows on the action threshold to prevent empty microflows and filter a low more in the case of loops with a lot of iterations.
* The processing of a trap in the performance tool has been simplified so you no longer have to select rows. The complete trap or in advanced search the complete result set in the grid is sent to the performance tool. This makes this function a 2 click-function (the 2nd being ‘Are you sure?’).
* Fixed performance tool tree widget showing [+] and [-].
* Removed option to process recorded data before shutdown. Hardly used and could cause delay in shutdown.
* Simplified the explain plan dialog to execute immidiately if there are no parameters. If there are parameters
functionality has been added to replace them with constants.

### Query Tool

* The query tool now protects against updates and deletes. Just queries can be fired from JDBC.
* Queries used in measurements are read-only, so the measurement cannot be broken.

### Log Tool

* Log levels dialog got inline more/less buttons and less grid buttons. This solves the issue of inline edits getting lost when closing the dialog without changing row. Also far more intuitive and less clicks to do what you want.

### Trap Tool

* Options dialog got exclusions on separate tab. Less dialogs on top of each other.
* Easier feature to process trap in performance tool. No more selecting rows and opening the processed data directly.

### JVM Browser

* The 'AllThreadInfo' item has been removed. It took Mendix 6.10 and Mendix 7 more than 5 minutes to 
load the JVM Browser.

### Layout

The layout has been improved further.

* Tabs have been introduced instead of buttons in a control bar.
* No more control section on top
* Performance tool got a recorder tab and a session tab
* In some cases a details view has become an in-content view with a back button (trap details, snapshot details, performance tool session details), 
* The left side menu bar now shows the item selected after the selection.
* The left side menu bar now shows if a tool is running
* The back button on left top has been removed
* New start/stop dialog eliminating the need for start/stop buttons everywhere except the performance tool
* Global settings got a tab for data cleanup, so delete all buttons are removed everywhere else
* Links to the documentation have been added as help buttons per tool. On the dashboard the 'i' buttons link
to the documentation.
* Green 'dots' in the menu now indicate if a tool is running. The old badges have been removed in most places.

### Other

* The load test recorder has been placed under a permission, so regular users don't see it. This should remove the
confusion that APM includes a load test tool. There is just the recorder for a session that can be processed and executed
in another solution.
