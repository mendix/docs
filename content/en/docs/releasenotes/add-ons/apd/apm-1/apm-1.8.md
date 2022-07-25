---
title: "1.8"
url: /releasenotes/add-ons/apm-1.8/
weight: 98
---

## 1.8.0

The theme for this version is a tool summary on a dashboard and improved styling.

### GUI Makeover to Match Style With CLEVR Applications Test Suite

The new console is more about presenting information instead of more stop/start buttons and navigation.

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Console.png" >}}

The new console has four parts:

* The statistics of the last 10 minutes are shown (this is configurable)
* You can pick your favorite measurements to show on the console
* The Trap tool shows the latest traps
* The Log tool shows the latest messages

### Trap Tool Separates Trap and Messages

The Trap tool separartes the trap and the messages, so that it is clearer which messages belong to which trap, and in order to show a list of traps without messages in the GUI.

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Trap_View.png" >}}

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Statistics_Tool.png" >}}

### Gathering Statistics Over More Periods

The statistics tool now gathers statistics over different time periods:

* Since startup
* Periodically (daily by default)
* Snapshot for manual periods
* Last 10 minutes for the console (this is configurable)
* For measurement triggers (between once and twice according to the console frequency, in order to prevent the statistics from just being reset when a trigger fires)
* These statistics are saved in the stored statistics when a trigger fires and is configured to store statistics

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Traps.png" >}}

### Bug Fixes and Minor Changes

* We replaced the CLEVR customized String Formatter widget with the Mendix Marketplace's FormatString widget, in order to reduce the number of custom widgets and to keep APM maintainable.
* We made custom APM versions of the standard Mendix Marketplace widgets in order to prevent conflicts with other versions of the widget for customers.
* We moved the JDBC settings from the query tool to the global settings in order to simplify and separate the configuration from usage.
* The ChartJS has been customized to show the horizontal scale of the type time and to auto-refresh so that it looks better and automatically updates the screen.
* The expiry date is now automatically populated so that the user can see the duration of the license and does not have to manually enter it.
* The trap tool exclusions are now also tested against log messages. This to verify existing exclusions. In addition, when configuring the trap tool, it can help to run the log tool for a day and exclude any know error before starting the trap tool.
* The measurement columns now have an alias that is editable. This is shown in the chart legend.
* You can double-click the measurements to quickly go to the options.
* We fixed the situation in which a new measurement being defined had no real measurements (you could not define triggers, because they depended on the column records that were automatically generated).
* The measurements tool has measurements in a collapsible container, so if you have a lot of measurements and some have multiple columns, you will now see a second grid appear.

### Known Issues

* The JDBC query and explain-plan functionality against MySQL has not been tested.
* The JDBC query and explain-plan functionality for the built-in database work only after starting the database viewer in the Mendix Modeler from the advanced menu of the console.
* The performance tool can run out of memory when recording. The protection options advised for the performance tool still expect 1GB of available memory, so for small implementations, the protection options should be stricter.
* When the Before Shutdown microflow is not configured, and some tools are running, the shutdown of the Mendix application can hang for about a minute.
* For Mendix versions 5 and above, the microflow names are taken from the action caption. So if the action caption is changed in the Mendix Modeler, the Call Microflow action in the performance tool does not drill down. In addition, the caption only contains the microflow name, not the module name, so if multiple microflows exist with the same name but they are in different modules, the performance tool cannot pick the right one.
* On load-balanced environments without sticky sessions, the APM tool is randomly connected to instances, and this does not work! For 1.6.1, you need access to specific servers to use the APM tool.
* ChartJS sometimes is not responsive enough, and a refresh of the page might be needed.
* When the runtime stops and the APM console is open, errors appear due to the auto-refresh of grids and ChartJS.
