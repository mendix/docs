---
title: "Windows Service"
category: "Desktop Modeler"
---

To download the Windows Service, go to the Desktop Modeler page in the [Mendix App Store](https://appstore.home.mendix.com/link/modelers) and open **Related downloads**.

## 4.5.1

**Release date: June 5, 2018**

* We upgraded the target Microsoft .NET Framework version from 4.5 to 4.5.2.
* We added a check box to the **Update App** form so that you are able to configure whether you want to apply the correct user rights on some deployment folders. This is enabled by default for new apps, but disabled by default when you upgrade an existing app.
* We now show more information during the update process of an app.
* We updated the DotNetZip library from version 1.10.1 to 1.11.0. This library is used for making backups and extracting deployment archives.
* We removed our dependency on the Microsoft.VisualBasic.PowerPacks library.
* We improved the check on whether the correct Mendix Server version is available.

## 4.5

**Release date: February 21st, 2017**

* We added support for Mendix 7.
* We updated background images.

## 4.4

**Release date: September 20th, 2016**

* When an app is updated with a deployment archive, the old app will not be copied anymore to a backup file. In the user interface, there is a checkbox now to enable backing up the old app. (Ticket 41885)
* We fixed the exception that occurred when showing active server actions. (Ticket 41924, 44180)
* We added DB2 and MariaDB as database types. They will only be useful when supported by the server version of the app.
* We added more clear database synchronization information when migrating from one database to another.
* We simplified the update app and update server dialog forms.
* We updated DotNetZip library from version 1.9.1.8 to 1.10.1. This library is used for making backups and extracting deployment archives.

## 4.3

**Release date: March 4th, 2016**

* Added support for Mendix 6.3. Please reinstall the service if the app has been upgraded from an earlier version.
* Fixed exception about too large numbers in constants (System.OverflowException: Value was either too large or too small for an Int32) and the fact that the Settings were partly reset in that case. (ticket 463290, 462793)
* Now a message will be shown that Java 8 is required for Mendix 6 apps.
* Now .NET Framework 4.5 is required to install this version. Dropped support for Mendix Windows Server 2003/2003 R2/XP.
* Always add or update the mxclientsystem folder as a symbolic link during an app update, even if the folder already exists.
* Added support for Powershell with the following cmdlets, Get-MxApp, Start-MxApp, Stop-MxApp, Update-MxApp, Install-MxServer. These cmdlets are located in the Mendix.Service.Commands.dll in the installation folder of the Mendix Windows Service.
* Log lines are now visible immediately when they are available, instead of showing new log lines only each second.
* Updated background images and icon.

## 4.2

### 4.2.1

**Release date: April 13th, 2015**

* Disabled 'Show or add license' button if an app is not running (ticket 204548).
* Prevented the shared runtime mxclientsystem folder from being emptied when an app has to be removed (ticket 204549).
* Now file access rights are automatically added for the configured user so that all necessary files can be accessed to run the app (ticket 101922).
* Removed the list of installed Mendix server versions from the Update app form.
* Added MySQL as new database type, which is supported since Mendix 5.12.

### 4.2.0

**Release date: January 16th, 2014**

Please be aware of the fact that all service user passwords and database passwords will be encrypted in the settings files after opening the Mendix Service Console for the first time. Only database passwords of already as service installed apps will be untouched, until you reinstall their services.

The Start service button will now be suitable to handle database synchronisations at the same way as the other Start button. This will only work if the service has been reinstalled with this version of the Mendix Service Console.

Changes in the Service configuration form will be performed directly to the real installed Windows service. There's is no necessary anymore to reinstall the service for such changes.

Changes between 4.2-beta2 and 4.2:

* Fixed document export functionality for Mendix 5
* Fixed exception which occurs many times while showing the overview of the active server actions (menu Advanced, Show active server actions).
* Ticket 15817: Now deployment packages and server distribution files will be checked on directory traversal attacks.
* Added option to show runtime threads, available in menu Advanced.
* Ticket 21020: Fixed situation that services of different apps use the same service assemblies.
* Fixed situation since Service Console 4.2-beta2 that there are not enough rights to fully start the service with the Start service button.
* Ticket 18676: Now licenses can be set for Mendix 5 apps even if they are not started.
* Now uploaded files path and temp path will be created automatically if an app is started at first as service and the locations are within the root app path.
* Now Java 7 will be set as default for non-configured apps or Mendix 5 apps.
* Improved working of the Stop and Stop service buttons.
* Ticket 20737: Removed the obligation of a working configured user account with logon-locally and logon-as-service rights, which was obligated since Service Console 4.2-beta2.
* Several user interface changes.

### 4.2.0 Beta 2

**Release date: July 10th, 2013**

* Ticket 20737: Improved working of the Start service button. The database can now be synchronized, even if the app is started via the Start service button. The Start button is invisible by default, if the service is installed.
* Ticket 16404, 15319 (partially): Added encryption for service account password and database password.
* Ticket 18251: An error occurred about deleting the run/felixcache folder while adding a new Mendix 5 app.
* A just added app is now automatically installed as Windows service, if possible.
* Added possibility to set the Windows service start mode.
* Now an already installed Windows service will be updated automatically after changing some values in the Service configuration form.
* Now only specific Mendix errors in the Windows Event Log will be shown in the Console.
* Improved folder select dialogs.
* When an app has to be deleted, the Windows service will also be deleted, or an error message will be shown if the service is running.
* Corrected folder renaming for some cases if the service name is changed in the new app wizard.
* Fixed exception which occur when the Windows services for more than one app are installed in one Console session.
* A service name will now be checked for uniqueness within other apps or Windows services names.
* Improved exception handling of removing an app but some files are in use.
* Now a start status message will be shown before any log lines are visible.

### 4.2.0 Beta 1

**Release date: June 10th, 2013**

* Support for running Mendix 5 apps.
* Ticket 16884: Fixed error on service start: Request <(..)> failed: Unable to connect to remote server. Maybe the service could not be started.
* Apps will now be run with the 'server' JVM by default if possible. Use the -client JVM argument to run the 'client' VM.
* The Java temporary directory (-Djava.io.tmpdir) will now be set to the Mendix temporary directory, if not already set.
* Added options to Advanced Settings, Jetty configuration: Request header size and Response header size for Mendix 3.3.7 and higher and Mendix 4.4.4 and higher.
* Disabled possibility to set environment of app to the deprecated runtime configuration mode 'Acceptance' for apps of Mendix 5 and higher.
* Improved check about already used ports in your or other apps if you choose the same one(s) and improved the information about already used ports.
* Improved unique port number generation for new apps.
* The Console now checks on startup if apps share the same license configuration. The user has to choose one app for this license.
* The Console now shows the correct service start/stop button text after starting a service, even if an error occurred while connecting to the app.
* Improved start process of apps.
* Little user interface changes.

## 4.1

**Release date: March 4th, 2013**

This release introduces two great new functionalities: you can enable the debugger and you can show the actions which are currently active on the server. In addition, many issues are solved, such as the errors which occur while updating apps.

You can safely update the Mendix Service Console. You don't have to stop the currently running services; they all have their own binaries to run (see also here).

* Ticket 15603, 16248: Fixed the issue that the following error occur while updating an app: 'Invoke or BeginInvoke cannot be called on a control until the window handle has been created.'
* Added new Advanced menu. Moved License and Administrator toolbar buttons to this menu.
* Ticket 15595: Added possibility to enable and disable debugging (new option in menu Advanced).
* Added an overview of all active server actions with the possibility to end one or more actions (new option in menu Advanced).
* Added support for running a Mendix service on a server with only Microsoft .NET 4.0 installed.
* Fixed the error which occur when a server version has to be added to a new environment, but the servers folder does not exist.
* Now the log subscription will be correctly unsubscribed at the server if the Mendix Service Console has to be closed.
* Now the service will be stopped if the Java process has been exited by some reason.
* Now more clear error messages will be shown if errors occur while updating an app.
* Now the app update process will be completed, even if errors occur.
* In the app update process, the current app folders will now be cleaned more robustly, to avoid the error 'The directory is not empty'.
* Added information to the update app popup about the creation of a symbolic link to the right mxclientsystem folder.
* Fixed some user interface inconsistencies.

## 4.0

**Release date: December 12th, 2012**

Mendix Service Console 4 manages all your Mendix 3 and 4 apps within one application. The left bar shows all the apps on your server. When you click an app, you can manage that app on the panel at the right side. You can show logging output of all your apps in separate windows.
Installation

Execute the new installer to install the Mendix Service Console on your system. Do not install it in the locations you earlier extract the Mendix Service Console zip file to. Starting with this version apps no longer have their own service console; this new Mendix Service Console manages all your apps!
Import of old apps

Import all your old apps one by one. All project, log and backup files will remain in the same old locations. Only the settings will be saved to a new location and you have to add Mendix distributions again. Only do a reinstall of the service when the app runs successfully with a normal start. After a reinstall of the service (and if the service starts correctly), the old Mendix Service Console for that app can be removed.
Licensing changes

Now each app has its own license, even if it runs under the same user account as another app. It is possible to import old apps with their license key, but only for the first app per user with a license.

* Added the possibility to manage all Mendix 3 and 4 apps into one instance of the Mendix Service Console. The Mendix Service Console manages the default location of the files of all apps and servers.
* Added an installer to install one Mendix Service Console per machine.
* Ticket 9960, 11133: Now each app has its own license on one machine.
* Added the possibility to add an existing Mendix 3 or 4 app with its license. (Click Add app, Import old app...)
* Now you can see quickly some license info for each running app.
* Added a wizard to add and configure a new app.
* Added a log line with progress bar while synchronizing the app with the database. The currently running synchronization SQL command can be viewed by double clicking the log line.
* Now the old log lines will not be removed anymore when an application has been stopped and started again. The new log session will be marked by a new gray log line.
* Now only up to 1000 log lines will be shown. Any more log lines will be removed, starting with the oldest.
* Now an app will not be stopped automatically anymore if the Mendix Service Console has been closed and the app was started but not as Windows service. When the Mendix Service Console is started again and the app is clicked, it will reconnect to the running app.
*  Ticket 12002: Now 'lost' running Mendix services can be connected and stopped by the console. This case occurs when the Windows service has been stopped unexpectedly but the Java process of the app still runs.
* Now the symbolic link to the runtime's mxclientsystem folder will always be created and updated when an app is added or updated. The checkbox has been removed.
* Changed the position of the buttons and their texts to open the app configuration forms.
* Moved settings for project, log and backup path, custom Mendix settings, environment and Jetty settings to a new Advanced Settings form, reachable via Configuration, Advanced...
* Now the two Jetty options can be configured by two textboxes instead of a list with custom keys and values.
* New apps will have an unique name, based on the default name 'NewApp'.
* For new apps, the Mendix Service Console searches the system for a JVM (Java Virtual Machine) at many more locations to be able to set this as default.
* Now the log, uploaded files and temp folders will be created automatically on startup if they don't exist and if they have their default paths.
* Now the backup folder will be created automatically when creating a backup, if it doesn't exist and if it has its default path.
* Now the runtime and admin HTTP port numbers are checked for uniqueness; otherwise a message will be shown. New apps will get unique numbers.
* Changed new default M2EE admin server passwords to a length of 32 characters, used for the communication between the Mendix Service Console/Windows Service and Mendix.
* Added possibility to define the publicness of the runtime and admin server HTTP ports (listening on localhost, public or a comma-separated list of IP addresses), only for Mendix versions 4.3 and higher.
* Changed database type choice text 'Oracle 10.2 and later' to 'Oracle 11.2 and later'.
* Reordered the database types alphabetically.
* Set SQL Server as default database type.
* Increased the height of the form to set the log levels.
* Now toolbar buttons responds to clicks if the form does not have the focus.
* Fixed license reset functionality for Mendix 3 apps.
* Several user interface changes.
* Increased the height of the form to set the log levels.
* Now toolbar buttons responds to clicks if the form does not have the focus.
* Fixed license reset functionality for Mendix 3 apps.
* Several user interface changes.

## 3.0

* Improved support for Mendix 4.
* Improved overview and handling of database synchronization commands.
* Added mobile license information to license form.

## 2.2

**Release date: June 1st, 2012**

* Now the license key can be registered and viewed in the Mendix Service Console, even if the application is not started (from menu Advanced -> License information...).
* Ticket 12171: Service console shows non-Mendix event messages.
* Ticket 12490: Now a symbolic link to the correct mxclientsystem folder can be created or updated automatically when the project or server version will be updated.
    * You don't have to create a virtual mxclientsystem folder on your web server (like IIS) anymore!
* Fixed exception about checking user names.
* Implemented a more robust folder cleaner (used by the project updater), so hopefully the following exception will not occur anymore: The directory is not empty.
* Now a more user friendly error message will be shown with a help button on application start if the given (domain) user does not have rights to logon locally (native error 1385: Logon failure: the user has not been granted the requested logon type at this computer.)
* Now the service cannot be uninstalled when the service is running.
* Small user interface changes.

## 2.1

### 2.1.1

**Release date: February 13th, 2012**

* Ticket 10963: Installing Mendix Windows Service doesn't support user principal name format.
* Ticket 11120: Mendix Windows Service did not restart after reboot.
* Ticket 11159: Now a user friendly message will be shown if the Mendix Service Console cannot be started because service pack 1 of .NET Framework 3.5 is not installed.
* Ticket 11160: Fixed the user picker dialog for computers without domain.
* Now the password text boxes will be unreadable by default. Added a Show password check box, as known in the Modeler. Please be aware that the passwords will be saved unencrypted in the settings file, as before.
* Improved error message when the following operating system error does occur: 'The requested operation requires elevation'.
* Small user interface changes.

### 2.1.0

**Release date: January 12th, 2012**

* Ticket 9470: Sometimes the maximum Java heap size configuration and other numeric settings were not saved.
* Now you see a UAC popup when you start the Mendix Service Console, because the UAC administrator level will be required, to prevent an UAC request on (un)installing the service and to making it possible to start/stop services in the Console.
* Removed the Informix database type because it is not supported by Mendix anymore.
* Removed Stop button. Now Start button will be changed to Stop after starting the project.
* Now the Windows service can be started and stopped in the Console by the new Start Service/Stop Service button.
* Introduced new Management panel, above Common Configuration.
* Moved Service panel content to Management panel.
* Moved Project path and Mendix path from Common Configuration panel to Management panel.
* Added setting for Backup path.
* Added possibility to use a Mendix Deployment Archive (MDA file) to update the project. The old project files are backed up to a zip file in the Backup folder.
* Added possibility to use a Mendix Server distribution (tar.gz file) to add a Mendix server version. More versions can be installed side-by-side. Mendix chooses the right version to start the project. The existing Mendix server version from pre-2.1 Mendix Windows Service applications will be kept when using this 2.1 version, but when you installs a new Mendix server version, that version will be used if suitable for the project.
* Now the application is always started under the specific service user account to simulate the same user environment as when it is started as service. A service user account must be given before a project can be run.
* Added possibility to select a service user account via a Active Directory picker.
* Now a service user can be specified without a domain name/computer name. In that case it's a local user.
* Removed setting for user account type. A common user account must always be given. Removed possibility for system accounts like Local System.
* Now new application constants will have their default values as set in the Modeler.
* Now application constants show their descriptions in a tooltip.
* Added settings 'Uploaded files path' and 'Temporary files path' to the Common Configuration panel.
* Now the system log file m2ee_log.txt is closed immediately when the process cannot start.
* Connecting to an already running server will be done asynchronously while starting the Service Console, so the form will be shown more quickly.
* Now all configurated paths will be validated when the server or the service starts.
* Windows service exceptions will now be shown in the Service Console (so you don't have to go to Administrative Tools -> Event Viewer anymore).
* Default folder of project path changed to 'Project' (was 'Application').
* Default folders will be created if they do not exist when they are needed.
* Now correct x86 or x64 libraries will be loaded from the Mendix library path, dependent on the Java Virtual Machine. At this moment needed for the SQL Server authentication library.
* Improved exception handling.
* Changed text for PostgreSQL database type option from 'PostgreSQL 8.2 and later' to 'PostgreSQL 8.3 and later'.
* Small user interface changes.

## 2.0

**Release date: July 28th, 2011**

* Support for Modeler 3.0 deployment format.
* Communication with Runtime changed to support 3.0.
* Configured default buttons for administrator password change dialogs.
* Little interface improvements.

## 1.0

### 1.0.7

**Release date: March 22nd, 2011**

* Fixed incorrect shutdown handling.
* Force quit will be done after waiting 10 instead of 5 seconds.
* Improved handling configuration settings which are not set.
* Messages about start exceptions now will be contain more info, when started via Console and as service.
* Fixed a special case that the Java process is not stopped when an exception occur while starting (via Console and as service).
* When an error occurs, now the Java process is killed after 1 second.
* New dialog to change administrator passwords, showed when starting from Console and there are administrators with password '1'.
* New dialog to create or update the Administrator user from menu Advanced. Now the Administrator user password setting will no longer be used.
* Removed setting for Administrator user password.
* Now a strong password will be used for communication between console/service and Mendix server. Password can be seen and changed via settings file key ServerPassword.
* A readable error message will be shown when the console cannot be connected to a running Mendix service.
 * Now default service name and display name will be empty when there is already a service with that name.
* Default service and display name changed to 'Mendix'.
* When service and display name are empty, now an error message will be shown while installing the service.
* The maximum length of the service name has been set to 80, according to the Windows limit of service names.

### 1.0.6

#### 1.0.6.3

**Release date: February 16th, 2011**

* Support for DTAP modes Acceptance and Production (by default).
* Now service user name and password fields are disabled when a fixed user has been chosen.
* Log file setting keys now will be trimmed (may now start or end with white spaces)
* Log file settings now won't be sent to runtime as normal runtime settings, so runtime does not show setting warnings about these settings anymore.

#### 1.0.6.2

**Release date: December 14th, 2010**

* New Advanced menu-item to set the log level for the log file.
* Create / update administrator user password buttons moved to a combined menu-item in menu Advanced.
* Custom settings file now must be defined by /yaml file-location (not anymore a single file location, but preceeded by /yaml).
* For all key-value pair settings, the key will be trimmed before sending to Runtime server. Keys now may be ended with one or more white spaces.
* Restart button now works.

#### 1.0.6.1

**Release date: November 29th, 2010**

* added support for defining Mendix Service settings file as first command line argument.

#### 1.0.6.0

**Release date: November 23rd, 2010**

* In some cases, port number changes were not be saved.
* Database settings user interface improved.
* added support for setting Jetty options.
* added support for setting LogFileName, MaxLogFileSize, MaxLogFileCount.
* corrected adding userlib folder to the library path on running.
* new x64 driver for SQLite (from 1.0.65 to 1.0.66).

### 1.0.5

**Release date: August 6th, 2010**

* Better Windows log message content when the service start fails.
* Version in title bar of Console.

### 1.0.4

#### 1.0.4.2

**Release date: June 7th, 2010**

* When folders were selected with folder selector, the locations were not saved.

#### 1.0.4.1

**Release date: June 4th, 2010**

* Don't stop loading application constants from Modeler file when this setting does not exist in the yaml settings file.
* Status bar added.
* Don't send custom settings and application constants when key is null.
* Save settings before (un)installing a service.

#### 1.0.4.0

**Release date: June 3rd, 2010**

* Now the existence of the given paths will be checked before start.
* More info will be shown in Windows Log in some cases of service startup fail.
* Logging database validation commands no more fails.
* ServiceTester assembly renamed to Mendix Service Console.
* Added possibility to add runtime settings other than shown in interface.
* Interface redesign.
* Now, when updating the administrator password, the real administrator user name, set in the Modeler, will be used in stead of always MxAdmin.
* Now application constants will be preloaded from Modeler file.
* Moved the Mendix Settings.yaml file one level higher, so that the Service folder can be safely replaced by new versions.
* Now the console start and stop buttons are not visible if the service is running, because starting and stopping a service is not possible at the moment.

### 1.0.3

#### 1.0.3.1

**Release date: May 26th, 2010**

* Fixed the occurring error when saving the configuration and there are no application constants given.
* Added Mendix icon to Service Tester program and form.

#### 1.0.3.0

**Release date: May 18th, 2010**

* User interface changes.
* Added possibility to select folders by the Windows folder browser control.
* Added possibility to easy install and uninstall the service from user interface.
* Now when starting the console and the service already runs, the console connects the service and shows the log.
* Server and Runtime path combined to Mendix path.
* Java heap size setting added.
* Added much default values for settings (e.g. folders, port numbers, service settings).
* Support for application constants.
* Now user name and password may be empty (when SQL Server integrated security is used).
