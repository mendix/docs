---
title: "1.12"
url: /releasenotes/add-ons/apm-1.12/
weight: 94
---

## 1.12.1

This release is identical to [1.11.1](/releasenotes/add-ons/apm-1.11/#1.11.1), but it is for Mendix 7.0.2 and above.

### Other Fixes

* When defining a **Create trap message** action in the trigger configuration, the trap was not created and linked to the triggered event. Both issues are fixed.
* If the log tool is used, there is now protection in place to configure the 1.11**Max messages to store**. By default, this is set to 100,000 records. This protection is in place to protect from overloading the database with records. **Fallback level** protection is now also in place. When the log tool notices issues like too much data is being processed, the **Fallback level** will set the logging to **INFO** for all log levels. In exceptional cases, the application generates too much INFO logging, which consumes heap memory and eventually causes the application to run out of memory. In this release, this behaviour still consumes heap memory, but there is a fix in place to prevent the application from running out of heap memory. The following fix in Mendix version 7.7.1 is also needed: We improved the memory management of persistable entities that have been committed to the persistent storage.

## 1.12.0

This release is identical to the [1.11.0](/releasenotes/add-ons/apm-1.11/) release, but it is for Mendix 7.0.2 and above.

### Other Fixes

* For version 7, Mendix changed the client API for `keepalive` not to include parameters. This has been handled now.
* Refreshing data in Mendix 7 where only calculated attributes were changed did not always refresh the screen. By committing the settings records as a workaround, the APM tools now function as expected.
