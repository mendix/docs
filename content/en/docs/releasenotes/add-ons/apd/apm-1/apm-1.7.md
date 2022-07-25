---
title: "1.7"
url: /releasenotes/add-ons/apm-1.7/
weight: 99
---

## 1.7.0

The theme for this version is simplifying.

### Installation

The installation has been simplified by removing the layout linking step and by removing the dependency from the project style. Installation procedure:

*   Import module
*   Add to navigation
*   Add to security
*   Add to after startup/before shutdown
*   Copy language if other than English US is used
*   Start App
*   Navigate to APM
*   Use button to send mail with license request
*   Upon receiving the license, copy-paste and save

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.7/Welcome.png" >}}

### Upgrades

Upgrades have been simplified to:

*   Import module
*   Remove old jar
*   Start and all the needed data changes are automatically performed
*   For 1.7.0 a new license needs to be requested, because the license is now per App

### GUI

The GUI is simplified by removing the configuration menu items and reducing this to 1 settings item. By removing the dependency of the enclosing App style, by removing counters, by adding tool info buttons.
{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.7/Console.png" >}}

The GUI now uses it's own style and is no longer dependent on the style of the App/Project where it is placed in.

All options dialogs are redesigned to show advised production/non-production settings besides the custom settings.

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.7/Settings.png" >}}

### Simplified licensing

On Sandboxes and Cloud Foundry the licensing was invalid after a restart due to the fact that hostname/IP changed. Using a hostname no longer holds up in these days of cloud and virtualisation, so the licensing is now per project.
A constant 'CompanyName' is introduced to link the license to the user.
On load balanced environment now 1 license will work. All settings are shared in the database.
When using database dumps the license works on other environments as well. No dependency on type Modeller/Runtime anymore.

### Simplified explain plan settings

The JDBC settings have been removed. A JDBC URL and explain plan query are added to the global settings on creating sample data. The URL includes parameters, so hostname and port are not stored. This allows for production database dumps to be used without the risk of connection to the production database from a test environment after the load of a production dump.
When the query is executed the parameters are replaced, so also setting changes are automatically handled.

### Faster startup

Due to the fact that the hostname is no longer needed the startup is faster.
Also no longer all JMX data is written to the log on startup. A constant is introduced if you want to turn this on again.

### Removed import functions

Removed functions to import of log files in log, statistics and performance tool, because this feature is not used.

### Compatibility

This version supports Mendix 6.2.0 and above only. Also only on java 8.

### Bug fixes and minor changes

*   Added a warning when you change a log level and the log tool is not running, so the user understands that his change has no immediate effect.
*   Fixed catching an error when a trigger in the measurements tool has an error in the expression.
*   In Mendix 6.6+ there was an issue with validations in the installation Wizard. This is fixed.
*   An issue with a field length in the performance tool tree is fixed
*   Updated CustomString widget so trap tool shows the number of exclusions again
*   Modeler warnings and deprecations removed/fixed, so developers are not hindered by APM Tool warnings/deprecations when modeling.
*   Removed or reduced usage of certain widgets when it was possible to replace the functionality with standard Mendix components.
*   When creating a trap tool exclusion the message and stack trace strings are now escaped for special characters in the regular expression language, so you can immediately test and get at least 1 result
*   Fixed a bug in the trap tool where an overload of errors could cause the trap tool and the entire application to become unresponsive.
*   Added support for explain plan on built-in database
*   Removed usage of retrieving data from persistable to non-persistable entities to be ready for Mendix 7
*   Moved heapdump feature to separate security group, so on installation you can choose to use this feature or not
*   Fixed a bug in the performance tool that sometime a (caught) null pointer would show up in the log

### Known issues

The JDBC query and explain plan functionality against MySQL has not been tested.

The JDBC query and explain plan functionality for the built-in database work only after starting the database viewer in the modeler from the console advanced menu.

The performance tool can run out of memory when recording. The advised protection options for the performance tool still expect 1 GB of memory available, so for small implementations the protection options should be stricter.

When the before shutdown microflow is not configured and some tools are running the shutdown of the Mendix application can seem to hang for about a minute.

In Mendix 5 and above the microflow names are taken from the action caption. So if the action caption is changed in the modeler the call microflow action in the performance tool does not drill down. Also the caption only contains the microflow name, not the module name, so if multiple microflows exist with the same name, but in different modules the performance tool cannot pick the right one.

On load balanced environments without sticky sessions the APM tool is randomly connected to instances and this does not work! For 1.6.1 you need access to specific servers to use the APM Tool!
