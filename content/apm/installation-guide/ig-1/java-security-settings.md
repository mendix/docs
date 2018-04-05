---
title: "Java Security Settings"
parent: "pre-requisites"
---
This appendix describes how to simulate security in the Mendix Modeler and what java permissions are needed.

# Simulate cloud security in the Mendix Modeler

If you run your application in a Mendix Modeler with emulated cloud security, you can use the log tool, trap tool, statistics tool and performance tool. For the additional tools you need extra permissions in java. The following procedure describes how you can configure the Mendix Modeler to simulate the same security as you get with emulated cloud security plus the security rules needed for the APMAgent.
Procedure to simulate cloud security plus APMAgent permissions:

1.  Turn off the emulate cloud security option in project settings, active configuration, server tab

![](attachments/Java_security_settings/Java_Command_Line_Options.png)

1.  Copy file =<project-folder>\resources\apmtool\mx5\apm_cloud_template_mx5.policy to a **<new file>**. Change the file replacing <project-folder> with your actual project folder path.

1.  Add the following switches to the extra JVM parameters in project settings, active configuration, server tab:

-Djava.security.policy=="<project-folder>\resources\apmtool\mx5\apm_cloud_security_all.policy"
-Dorg.osgi.framework.security=osgi
-Dcom.mendix.policy.file="**<new file from step 2.>**"
**_Note._** _If there are spaces in your path you need the double quotes around the file names!_

# Needed java permissions

For an on-premises installation, often no additional Java security is set and you don't have to do anything. If, however, your internal IT has set security on the java JVM running the Mendix Runtime you have to arrange additional permissions in Java with your internal IT as described below.
Here follow the permissions needed in Java and what they are used for:

For the JVM Browser and measurements based on JMX the following permissions are needed:

*   permission javax.management.MBeanServerPermission "*";
*   permission javax.management.MBeanPermission "**", "**";
*   permission javax.management.MBeanTrustPermission "*";
*   permission java.lang.management.ManagementPermission "monitor";

To reroute java console output and errors the following permission is needed

*   permission java.lang.RuntimePermission "setIO"; // for java console

To reroute java util logging the following permission is needed

*   permission java.util.logging.LoggingPermission "control"; // for java util

To use explain plan, to execute JDBC queries and to use measurements based on JDBC queries the following permission is needed:

*   permission java.net.SocketPermission "<server>:<port>", "connect"; // for JDBC

To use the hostname in the license check

*   permission java.net.SocketPermission "<mx server>", "resolve"; // for license by hostname

To use the measurements tool and start and stop measurements the following permission is needed:

*   permission java.lang.RuntimePermission "modifyThread"; // for dynamic scheduled events
