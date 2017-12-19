---
title: "Monitoring - What to monitor"
category: "Proactive Maintenance"
---


## **Introduction**

Application and system monitoring forms an integral part of on-premise hosting of the Mendix Platform. When done correctly, it will provide a system administrator with a wealth of information about the current state and health of your Mendix installation. This document will detail the metrics that need to be collected in order to gain sufficient insight in your technical Mendix environment, as well as defining critical values for these metrics.

## <a rel="nofollow"></a>**Prerequisites**

This document is based upon the following assumptions:

*   User is familiar with the logging guidelines defined in:
    *   [Review log files – MS IIS Server](review-log-files-ms-iis-server "review log files _ ms iis server")
    *   [Review log files – MS SQL Server](review-log-files-ms-sql-server "review log files _ ms sql server")
    *   [Monitoring - Mendix Runtime](monitoring-mendix-runtime "monitoring _ mendix runtime")
    *   [Logging](logging "logging")
*   SQL Server maintenance plans have been set up according to:
    *   [Mendix SQL Maintenance Plans](/deployment/on-premises/mendix-sql-maintenance-plans "mendix sql maintenance plans")

## <a rel="nofollow"></a>**Monitoring Categories**

This document will describe the four monitoring categories that form the basis of Mendix application and system monitoring:

### <a rel="nofollow"></a>**Fault Monitoring**

Fault monitoring is primarily used to detect major errors related to one or more system components. Faults can consist of errors, such as the loss of network connectivity, a database server going off-line, or the application suffering a Java out-of-memory situation. Faults are an important indication for the malfunctioning of a system or application.

### <a rel="nofollow"></a>**Performance Monitoring**

Performance monitoring is specifically concerned with detecting degraded performance, such as reduced application-, database- or other back end resource response times. Generally, performance issues arise in an application as the user load increases. Performance problems are important events to detect in the lifetime of an application since they, like fault events, negatively affect the user experience.

### <a rel="nofollow"></a>**Configuration Monitoring**

Configuration monitoring is a safeguard designed to ensure that configuration variables affecting the application and the back end resources remain at some predetermined configuration settings. Configurations that are incorrect, such as a too low maximum JVM heap size, can negatively affect the application performance.

### <a rel="nofollow"></a>**Security Monitoring**

Security monitoring detects intrusion attempts by unauthorized system users.

## <a rel="nofollow"></a>**Metrics - Fault Monitoring**

Fault monitoring implies the broadest range of monitoring metrics, as it consists of both hard- and software related items and extends beyond the reach of just the Application(server) itself, as back-end resources and network connectivity components (routers, switches, etc.) need to be taken into account as well.

<table><thead><tr><td class="confluenceTd">&nbsp;</td><th class="confluenceTh">Type of Monitoring</th><th class="confluenceTh">Applicable Metric</th><th class="confluenceTh">Threshold</th></tr></thead><tbody><tr><th class="confluenceTh">Hardware and Network</th><td class="confluenceTd">Server availability</td><td class="confluenceTd">Heartbeat/ping all servers</td><td class="confluenceTd">UP/DOWN</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Error report</td><td class="confluenceTd">Monitor error report logs hard errors</td><td class="confluenceTd">ERRORS</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Network latency</td><td class="confluenceTd">Ping time between network components</td><td class="confluenceTd">UP/DOWN/SNMP traps</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">CPU utilization</td><td class="confluenceTd">CPU utilization all servers</td><td class="confluenceTd">&gt; 99% over x minutes</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Memory utilization</td><td class="confluenceTd">Memory utilization all servers</td><td class="confluenceTd">&gt; 99% over x minutes</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Paging/swapping</td><td class="confluenceTd">OS level metric all servers</td><td class="confluenceTd">In process of paging/swapping</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">File system</td><td class="confluenceTd">Available file space all servers</td><td class="confluenceTd">Out of space</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Network components</td><td class="confluenceTd">Capture SNMP traps</td><td class="confluenceTd">UP/DOWN/ERROR</td></tr><tr><th class="confluenceTh">Mendix Application Server</th><td class="confluenceTd">Admin server process</td><td class="confluenceTd">Monitor admin server process</td><td class="confluenceTd">UP/DOWN</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Application server process</td><td class="confluenceTd">Monitor application server process</td><td class="confluenceTd">UP/DOWN</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Java process</td><td class="confluenceTd">Monitor Java process</td><td class="confluenceTd">UP/DOWN</td></tr><tr><th class="confluenceTh">Web Server</th><td class="confluenceTd">IIS Worker processes</td><td class="confluenceTd">Available</td><td class="confluenceTd">UP/DOWN/ERROR</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Timed out connection</td><td class="confluenceTd">Connection timeout</td><td class="confluenceTd">Occurred</td></tr><tr><th class="confluenceTh">Databases</th><td class="confluenceTd">SQL Server process</td><td class="confluenceTd">Available</td><td class="confluenceTd">UP/DOWN</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">SQL Agent process</td><td class="confluenceTd">Available</td><td class="confluenceTd">UP/DOWN</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">SQL Server maintenance plans</td><td class="confluenceTd">Running</td><td class="confluenceTd">SUCCESS/FAILURE</td></tr><tr><th class="confluenceTh">Application</th><td class="confluenceTd">Functional</td><td class="confluenceTd">End-to-end application test</td><td class="confluenceTd">PASSED/FAILED</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Error logs</td><td class="confluenceTd">Search for errors emitted by the application</td><td class="confluenceTd">ERROR OCCURRED</td></tr></tbody></table>

## <a rel="nofollow"></a>**Metrics - Performance Monitoring**

<table><thead><tr><td class="confluenceTd">&nbsp;</td><th class="confluenceTh">Type of Monitoring</th><th class="confluenceTh">Applicable Metric</th><th class="confluenceTh">Threshold</th></tr></thead><tbody><tr><th class="confluenceTh">Hardware and Network</th><td class="confluenceTd">Network latency</td><td class="confluenceTd">Ping time and network bandwidth measurements</td><td class="confluenceTd">Timings &gt; 1000 ms or network bandwidth maxed</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Error report</td><td class="confluenceTd">Monitor error report logs hard errors</td><td class="confluenceTd">ERRORS</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Network latency</td><td class="confluenceTd">Ping time between network components</td><td class="confluenceTd">UP/DOWN/SNMP traps</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">CPU utilization</td><td class="confluenceTd">CPU utilization all servers</td><td class="confluenceTd">&gt; 80% over x minutes</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Memory utilization</td><td class="confluenceTd">Memory utilization all servers</td><td class="confluenceTd">&gt; 80% over x minutes</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Paging/swapping</td><td class="confluenceTd">OS level metric all servers</td><td class="confluenceTd">In process of paging/swapping</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">File system</td><td class="confluenceTd">Available file space all servers</td><td class="confluenceTd">&gt; 80% used</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Network components</td><td class="confluenceTd">Capture SNMP traps</td><td class="confluenceTd">Degraded counters</td></tr><tr><th class="confluenceTh">Web Server</th><td class="confluenceTd">HTTP response</td><td class="confluenceTd">Average response time retrieving 1K GIF</td><td class="confluenceTd">Response time &gt; 1000 ms</td></tr><tr><th class="confluenceTh">Databases</th><td class="confluenceTd">SQL Server</td><td class="confluenceTd">Average response time</td><td class="confluenceTd">Response time &gt; 1000 ms</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">PostgreSQL</td><td class="confluenceTd">Average response time</td><td class="confluenceTd">Response time &gt; 1000 ms</td></tr><tr><th class="confluenceTh">Application</th><td class="confluenceTd">Complex page requests</td><td class="confluenceTd">Average response time</td><td class="confluenceTd">&gt; 10 secs or less</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Error logs</td><td class="confluenceTd">Search for warnings emitted by the application</td><td class="confluenceTd">Warnings occur</td></tr></tbody></table>

## <a rel="nofollow"></a>**Metrics - Configuration Monitoring**

<table><thead><tr><td class="confluenceTd">&nbsp;</td><th class="confluenceTh">Type of Monitoring</th><th class="confluenceTh">Applicable Metric</th></tr></thead><tbody><tr><th class="confluenceTh">Hardware and Network</th><td class="confluenceTd">Network</td><td class="confluenceTd">Each network component configuration</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Server</td><td class="confluenceTd">OS level configuration</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">File system</td><td class="confluenceTd">NTFS configuration</td></tr><tr><th class="confluenceTh">Web Server</th><td class="confluenceTd">IIS server</td><td class="confluenceTd">Configurations</td></tr><tr><th class="confluenceTh">Databases</th><td class="confluenceTd">SQL server</td><td class="confluenceTd">Configurations</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">PostgreSQL server</td><td class="confluenceTd">Configurations</td></tr><tr><th class="confluenceTh">Application</th><td class="confluenceTd">Application-specific</td><td class="confluenceTd">Configurations</td></tr></tbody></table>

## <a rel="nofollow"></a>**Metrics - Security Monitoring**

Security monitoring comprises the detection of, and response to, all security related incidents within the Mendix Platform - consisting of Server hard- and software, back-end systems and network connectivity components, like routers, switches, firewalls, etc. As security monitoring comprises such a broad technical field, it is out of scope of this document to list all valid metrics. However, as data security is of vital importance to most, if not all, organizations, it needs to be mentioned here. Ample documentation on the subject of security monitoring exists on the internet today.

Mendix recommends involving a third party supplier to audit your Mendix environment for any security related issues.
