---
title: "Configure the Mendix application"
parent: "mendix-on-windows---service-console-3"
---

## Description

This section describes how to configure your Mendix application for deployment as Windows service.

## Instructions

### Mendix Service Console

Now we will configure our application to run as a Windows service. Much of the configuration that is already done in the Mendix Modeler will have to be done again. These are settings that depend on the phase of the development, and which you can specify in the Modeler settings for specific configurations, like 'development'. These settings cannot be re-used when you run the application in the 'acceptance' or 'production' phase. We will provide these settings below.

Go to the folder Mendix\Service (in our example D:\CustomerPortal\Mendix\Service) and start the following application: Mendix Service Console.exe

When you start the Mendix Service Console, you see a navigation pane with five options on the left side of the screen. The right hand side of the window can vary, depending on the option that is active. As you click on each of the options in the navigation pane, you will see a different set of options on the right hand side.

*   Console
    The console is the same as the console you know from the Mendix Modeler. If the application is correctly configured, then you can start and stop the application via this console. Here you can also see the application log while running the service.
*   Management
    Here you define the locations of your project, Mendix and backup folders, you update your project version, adding Mendix server versions and manage the Windows service.
*   Common Configuration
    Here you define common settings such as the locations for log files, uploaded files and Java, HTTP port number and other settings.
*   Database Configuration
    Here you define the database to be used for the application.
*   Application Constants
    Here you set the values of application constants which are mostly defined in the Modeler.

All settings will automatically be saved when you click on another option in the navigation pane or when you close the Mendix Service Console. The settings will be saved in a file named 'Mendix Settings.yaml'. This file is placed in the folder Mendix (in our example D:\CustomerPortal\Mendix).

### Management

The first three fields defines the locations of the project, Mendix and backup folders, which you created in the first step.

In the Update part of this form, you can add your project files or update your project with a Mendix deployment archive (.mda file). This file can be created by the Modeler via menu Project, Create Mendix Deployment Archive... When you update your project, the old project files will be backed up to the backup folder. To restore an old version, you have to manually replace the project content with them of the compressed backup file in the backup folder.

When you have added or updated your project, you see which Mendix version is required to run the project. The list 'Installed Mendix version' shows all the Mendix versions available. You can press 'Add server' to add a Mendix version. To add a Mendix version, you need a server distribution (.tar.gz file) which you can download from the Support Portal, menu Releases.

In the Windows service part of this form, you can define the name of the Windows service and other settings via the Service Configuration pane. The user must have enough rights to access the folders of our application.

With the button 'Install service', you can install the service as an official Windows service. The service is correctly installed when the button text changed to 'Uninstall service'.

If the service is installed correctly, you can start the service via the Console panel, but also via the Windows Services program (Configuration Panel -> Administrative Tools -> Services). If the service won't start, more information can sometimes be found in the application logs in the Windows Event Viewer.

### Common Configuration

Several fields are already pre-filled, but they can be changed.
The first three settings define the locations of the folders that we created in the first step of this how-to. The following is a short list of some items together with their meaning.

| Setting | Meaning |
| --- | --- |
| Log path | The log files will be placed in this is the folder. When the application runs as a service there is no visible console with log messages. These message are save to logfiles in this folder. Also SQL validation queries will be logged here. |
| Uploaded files path | The location of the uploaded files. A valid path can be: \\FileServer\CustomerPortalFiles. The default path is D:\CustomerPortal\Project\data\files. |
| Temporary files path | The location of the temporary files. The default path is D:\CustomerPortal\Project\data\tmp. |
| Java path | This is the path to Java. The JRE edition is sufficient. The JDK edition is not necessary for the Mendix Windows service. You can find the Java Path under Project Settings in the Modeler. |
| Public application root URL | Here you must specify the web address where users access the application. |
| Scheduled event execution | Here you can specify whether scheduled events must be executed or not. The option SPECIFIED can be used to specify the events that must be executed. Use in that case the custom setting 'MyScheduledEvents', as described below. |
| Custom Mendix Settings | See [this page](/refguide4/custom-settings) for an overview of settings. Here you can define advanced settings of the Mendix server, such as specific folder locations or advanced database settings. The simple database settings (same as in the Modeler) can be put in place via the option 'Database Configuration' on the navigation pane. |

**Jetty Settings**
Use the following Jetty settings to configure some performance properties:

| Name | Value | Default value |
| --- | --- | --- |
| runtime_min_threads | The minimum number of threads the Jetty server of the Mendix Runtime can have. | 8 |
| runtime_max_threads | The maximum number of threads the Jetty server of the Mendix Runtime can have. | 256 |

### Database Configuration

The settings on this tab are the same as those in the Modeler for the configuration of the database.

### Application Constants

Here you can specify values for the constants defined in the Modeler. The left column contains the names of the constants. The right hand side contains the values. The initial values will be the default values as defined in the Modeler.

### Console

Once you have specified all the necessary settings you can run the application. Although we wish to run our application as a Windows service, it is necessary to test our configuration manually and in a interactive way. Especially for an empty database queries must be executed to fill the database with tables and there must be some kind of user interaction.

In the Console panel, click the 'Start' button. The Console works the same as in the Modeler. Be sure you have fill in a user account on the Management panel. Mendix will be run under this user account. When there are database queries needed to be executed, you can execute these automatically. However, if the specified database user does not have enough rights or if you don't want to do this automatically, you can save the database script and cancel the startup. Execute the scripts manually in your database program (or let your DBA execute it with his/her user rights) and restart the application. If there are no more queries the console log shows that the runtime has successfully started.

If an error occurs on startup, then in most cases the settings are not fully valid.

A known issue is that you cannot log in due to an empty database (a database with no users). To create an administrator account, click in menu Advanced on the item 'Create or update administrator' when the application has been started. You can then log in with this account to create other user accounts for the application.

Another potential issue can arise if you have used an existing database that already contains users and where users with the Administrator role (usually the user MxAdmin) have password '1'. The Console will then show you a popup while starting the server, to change the passwords of these users.

When the application starts successfully, you can stop the application and run them as a Windows service by clicking on 'Start Service'. You see the same log messages as when starting via the Start button.

**Known errors**
![(warning)](images/icons/emoticons/warning.png) _Security errors while installing service_
Sometimes, the system gives errors like 'Access denied' or 'Invalid account name or password'. When this occur while installing the service, make sure the logged in user has sufficient rights to install services. Otherwise, try to install the service manually with '[sc create](http://support.microsoft.com/kb/251192)'.

![(warning)](images/icons/emoticons/warning.png) _Security errors while starting service_
When the system gives such errors while starting the service, make sure the configurated service user has sufficient rights to the folders of the Mendix application. Sometimes you have to fill in the domain name with the user name, thus DOMAIN_NAME\user_name instead of user_name.

![(warning)](images/icons/emoticons/warning.png) _Type-initialization_
Sometimes the Event Viewer shows a message like this:

EventType clr20r3, P1 mendixservice.exe, P2 1.0.3810.25652, P3 4c0cf0d8, P4 mendixservice, P5 1.0.3810.25652, P6 4c0cf0d8, P7 2, P8 6, P9 system.typeinitialization, P10 NIL.

Make sure that the user account for the service has enough rights to the folders containing the Mendix Service executables and the subfolders x86 and x64.

### Debugging While Running the Service

When the service is running, you can start the Mendix Service Console to see the log message of the application. This works only if the Mendix Service Console is started when the service is already running.

Now you cannot start the application in the console pane, but you can define log levels and see the log messages.
