---
title: "Monitoring Mendix using JMX"
category: 'Monitoring & Troubleshooting'
---

The following is only relevant if you run [Mendix](http://www.mendix.com/) on-premises. If you do, you probably have standard monitoring tooling that you use to monitor all your applications.

For java applications most monitoring tools provide a way to hook into [JMX](http://www.oracle.com/technetwork/java/javase/tech/javamanagement-140525.html) to get information about the application. The following describes how you can use JMX to get information on your Mendix application.

Mendix doesn’t provide any runtime or application specific MBeans, which means that without writing your own MBeans you will only be able to monitor generic JVM statistics. In this post i’ll describe how you enable JMX on your Mendix runtime. I’ll also decribe how you can write custom MBeans to expose Mendix runtime information and application specific information.

## 1\. Starting the Mendix runtime with JMX enabled

1.  To enable JMX on your Mendix runtime you can use the following javaopts to the m2ee.yaml for your Mendix runtime:

{{% alert type="warning" %}}

```
<code>javaopts: [ </code>
```

```
<code>"-Dfile.encoding=UTF-8", "-XX:MaxPermSize=64M", "-Xmx128M", "-Xms128M",</code>
```

```
<code>"-Djava.io.tmpdir=/tmp", </code>
```

```
<code>"-Dcom.sun.management.jmxremote", </code>
```

```
<code>"-Dcom.sun.management.jmxremote.port=7845", </code>
```

```
<code>"-Dcom.sun.management.jmxremote.local.only=false", </code>
```

```
<code>"-Dcom.sun.management.jmxremote.authenticate=false", </code>
```

```
<code>"-Dcom.sun.management.jmxremote.ssl=false", </code>
```

```
<code>"-Djava.rmi.server.hostname=192.168.1.70", </code>
```

```
<code>]</code>
```

{{% /alert %}}

## 2\. MBean exposing generic Mendix statistics

The simplest way to expose management information is by writing a MBean interface and a Java class which implements the interface. You can define getters and setter, but you can also define methods which can be called from generic management tooling. I’ve used this for example to tell a running application to reload its configuration file.

1.  Example of an interface which contains getters for some generic Mendix information, MxStatsMBean.java

    ```
    <code>package jmx.actions;</code>
    ```

    ```
    <code>public interface MxStatsMBean {</code>
    ```

    ```
    <code>public int getMaximumNumberConcurrentUsers() throws Exception;</code>
    ```

    ```
    <code>public int getActionQueueSize();</code>
    ```

    ```
    <code>public int getActiveActionCount();</code>
    ```

    ```
    <code>public int getScheduledActionCount();</code>
    ```

    ```
    <code>public long getNumberConcurrentSessions();</code>
    ```

    ```
    <code>public long getCurrentUserCount();</code>
    ```

    ```
    <code>public long getCompletedActionCount();</code>
    ```

    ```
    <code>public long getNamedUserCount();</code>
    ```

    ```
    <code>}</code>
    ```

2.  And here is the implementation, MxStats.java. The methods just call the [Mendix Core](http://apidocs.mendix.com/4/runtime/classcom_1_1mendix_1_1core_1_1_core.html) class, and return the value:

    ```
    <code>package jmx.actions;</code>
    ```

    ```
    <code>import com.mendix.core.Core;</code>
    ```

    ```
    <code>public class MxStats implements MxStatsMBean {</code>
    ```

    ```
    <code> public int getMaximumNumberConcurrentUsers() throws Exception {</code>
    ```

    ```
    <code> return Core.getMaximumNumberConcurrentUsers(); </code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code> public int getActionQueueSize(){ </code>
    ```

    ```
    <code> return Core.getActionQueueSize(); </code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code> public int getActiveActionCount(){</code>
    ```

    ```
    <code> return Core.getActiveActionCount();</code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code> public int getScheduledActionCount(){ </code>
    ```

    ```
    <code> return Core.getScheduledActionCount();</code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code> public long getNumberConcurrentSessions(){ </code>
    ```

    ```
    <code> return Core.getNumberConcurrentSessions();</code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code> public long getCurrentUserCount(){</code>
    ```

    ```
    <code> return Core.getConcurrentUserCount(true);</code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code> public long getCompletedActionCount(){</code>
    ```

    ```
    <code> return Core.getCompletedActionCount();</code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code> public long getNamedUserCount(){</code>
    ```

    ```
    <code> return Core.getNamedUserCount();</code>
    ```

    ```
    <code> }</code>
    ```

    ```
    <code>}</code>
    ```

3.  Next, you're able to see the result of the values exposed by this MBean in JConsole
    ![](attachments/8782836/8946090.png)

## 3\. MBean exposing application specific statistics

You can use the same approach, with an Interface and implementation class, to also expose application specific information. Here’s a different approach: one that exposes a dynamic set of values. You can do the same with methods, but the example only shows attributes to retrieve values.
The idea is that you will have a Java Action that you can call in a microflow, where you expose arbitrary key, value pairs.

## 4\. Related content

*   [Finding the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
*   [Clearing Warning Messages in Mendix](clearing-warning-messages-in-mendix)
*   [Testing web services using SoapUI](testing-web-services-using-soapui)
*   [Debugging Microflows](debugging-microflows)
*   [Common Mendix SSO Errors](common-mendix-sso-errors)
*   [Monitoring Mendix using JMX](monitoring-mendix-using-jmx)
*   [Debugging Java Actions](debugging-java-actions)
*   [Debugging Java actions remotely](debugging-java-actions-remotely)
*   [Getting started with Nexus maven repository manager](http://www.andrejkoelewijn.com/blog/2010/03/09/getting-started-with-nexus-maven-repository-manager/)
*   [Using eclipse to debug your tomcat web application](http://www.andrejkoelewijn.com/blog/2003/10/23/using-eclipse-to-debug-your-tomcat-web-application/)
*   [Profiling Mendix using JProfiler](http://www.andrejkoelewijn.com/blog/2014/01/15/profiling-mendix-using-jprofiler/)
