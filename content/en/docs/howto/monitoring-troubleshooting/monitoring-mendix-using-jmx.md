---
title: "Monitor Mendix Using JMX"
url: /howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/
category: "Monitoring & Troubleshooting"
weight: 10
tags: ["monitoring", "troubleshooting", "jmx"]
---

## 1 Introduction

This how-to is relevant if you run Mendix on-premises. If you do this, you probably have standard monitoring tooling that you use to monitor all your applications.

For Java applications, most monitoring tools provide a way to hook into [JMX](http://www.oracle.com/technetwork/java/javase/tech/javamanagement-140525.html) in order to get information about the application. This how-to describes using JMX to get information on your Mendix application.

Mendix doesn’t provide any runtime or application specific MBeans, which means that without writing your own MBeans, you will only be able to monitor generic JVM statistics. This how-to will also describe enabling JMX on your Mendix Runtime as well as writing custom MBeans to expose Mendix Runtime information and app-specific information.

**This how-to will teach you how to do the following:**

* Start Mendix Runtime with JMX
* Expose management information with an MBean
* Expose app-specific statistics with an MBean

## 2 Prerequisites

None.

## 3 Starting the Mendix Runtime with JMX enabled

To enable JMX on your Mendix Runtime, you can use the following Java options in the *m2ee.yaml* for your Mendix Runtime:

```
javaopts: [

"-Dfile.encoding=UTF-8", "-XX:MaxPermSize=64M", "-Xmx128M", "-Xms128M",

"-Djava.io.tmpdir=/tmp",

"-Dcom.sun.management.jmxremote",

"-Dcom.sun.management.jmxremote.port=7845",

"-Dcom.sun.management.jmxremote.local.only=false",

"-Dcom.sun.management.jmxremote.authenticate=false",

"-Dcom.sun.management.jmxremote.ssl=false",

"-Djava.rmi.server.hostname=192.168.1.70",

]
```

## 4 MBean Exposing Generic Mendix Statistics

The simplest way to expose management information is by writing an MBean interface and a Java class that implements the interface. You can define the getters and setters, but you can also define methods that can be called from the generic management tooling. This can be used, for example, to tell a running application to reload its configuration file.

This is an example of an interface that contains getters for some generic Mendix information, *MxStatsMBean.java*:

```

package jmx.actions;

public interface MxStatsMBean {

public int getMaximumNumberConcurrentUsers() throws Exception;

public int getActionQueueSize();

public int getActiveActionCount();

public int getScheduledActionCount();

public long getNumberConcurrentSessions();

public long getCurrentUserCount();

public long getCompletedActionCount();

public long getNamedUserCount();

}
```

This is the implementation, `MxStats.java`. The methods call the [Mendix Core](http://apidocs.rnd.mendix.com/4/runtime/classcom_1_1mendix_1_1core_1_1_core.html) class and return the value:

```
package jmx.actions;

import com.mendix.core.Core;

 public class MxStats implements MxStatsMBean {

 public int getMaximumNumberConcurrentUsers() throws Exception {

 return Core.getMaximumNumberConcurrentUsers();

 }

 public int getActionQueueSize(){

 return Core.getActionQueueSize();

 }

 public int getActiveActionCount(){

 return Core.getActiveActionCount();

 }

 public int getScheduledActionCount(){

 return Core.getScheduledActionCount();

 }

 public long getNumberConcurrentSessions(){

 return Core.getNumberConcurrentSessions();

 }

 public long getCurrentUserCount(){

 return Core.getConcurrentUserCount(true);

 }

 public long getCompletedActionCount(){

 return Core.getCompletedActionCount();

 }

 public long getNamedUserCount(){

 return Core.getNamedUserCount();

 }
}
```

Now you're able to see the result of the values exposed by this MBean in the JConsole:

{{< figure src="/attachments/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/18580003.png" >}}

## 5 MBean Exposing App-Specific Statistics

You can use the same approach with an interface and an implementation class to expose app-specific information. Here’s a different approach: one that exposes a dynamic set of values. You can do the same with methods, but the example only shows the attributes to retrieve values.

The idea is that you will have a Java Action that you can call in a microflow where you expose arbitrary key value pairs.

## 6 Read More

* [Find the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto/testing/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Log Levels](/howto/monitoring-troubleshooting/log-levels/)
* [Debug Java Actions](/howto/monitoring-troubleshooting/debug-java-actions/)
* [Debug Microflows and Nanoflows](/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/)
* [Debug Microflows Remotely](/howto/monitoring-troubleshooting/debug-microflows-remotely/)
* [Debug Java Actions Remotely](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
