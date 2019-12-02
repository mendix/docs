---
title: "Debug Java Actions Remotely"
parent: "debug-java-actions"
tags: ["monitoring", "troubleshooting", "java action", "debug"]
---

## 1 Introduction

To debug the Java actions used in a Mendix microflow, you need to make some configuration changes to the way you start the Mendix Runtime. This how-to will explain how to manage this.

**This how-to will teach you how to do the following:**

* Edit the server configuration
* Configure remote debugging

## 2 Prerequisites

None.

## 3 Editing the Server Configuration with Extra JVM Parameters

In this section, you will learn how to configure the security at the prototype/demo level. Be aware that this level of security is only applicable for development/demo purposes. This level is available for the quick development of demo applications. It simulates security without the more complex configuration of data access. When deploying to the Mendix cloud, production security is mandatory.

To edit the server configuration with extra JVM parameters, follow these steps:

1. Open the project settings.
2. Edit the configuration.
3. Go to the **Server** tab on the **Edit Configuration** editor and add the following line to the **Extra JVM parameters** field: `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005`

    ![](attachments/18448579/18580063.png)

4. Next, start your application in Mendix.

## 4 Configuring Remote Debugging

In your Java IDE, you need to configure remote debugging. This screenshot shows the configuration in IntelliJ:

![Mendix Intellij remote debugging](http://www.andrejkoelewijn.com/blog/images/2014/01/mx-java-debug/intellij_rundebug_configurations.png)

1. Start the debugger.
2. Place some breakpoints in your Java code.
3. Start debugging.

## 5 Read More

* [Find the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
* [Clear Warning Messages in Mendix](clear-warning-messages)
* [Test Web Services Using SoapUI](../testing/testing-web-services-using-soapui)
* [Monitor Mendix using JMX](monitoring-mendix-using-jmx)
* [Log Levels](log-levels)
* [Debug Microflows](debug-microflows)
* [Debug Java Actions](debug-java-actions)
* [Debug Microflows Remotely](debug-microflows-remotely)
* [Get Started with Nexus Maven Repository Manager](http://www.andrejkoelewijn.com/blog/2010/03/09/getting-started-with-nexus-maven-repository-manager/)
* [Use Eclipse to Debug Your Tomcat Web Application](http://www.andrejkoelewijn.com/blog/2003/10/23/using-eclipse-to-debug-your-tomcat-web-application/)
* [Profile Mendix Using JProfiler](http://www.andrejkoelewijn.com/blog/2014/01/15/profiling-mendix-using-jprofiler/)
