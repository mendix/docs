---
title: "Monitoring - What to monitor"
category: "Proactive Maintenance"
---


## **Introduction**

Application and system monitoring forms an integral part of on-premise hosting of the Mendix Platform. When done correctly, it will provide a system administrator with a wealth of information about the current state and health of your Mendix installation. This document will detail the metrics that need to be collected in order to gain sufficient insight in your technical Mendix environment, as well as defining critical values for these metrics.

## <a rel="nofollow"></a>**Prerequisites**

This document is based upon the following assumptions:

*   User is familiar with the logging guidelines defined in:
    *   [Review log files - MS IIS Server](review-log-files-ms-iis-server)
    *   [Review log files - MS SQL Server](review-log-files-ms-sql-server)
    *   [Monitoring - Mendix Runtime](monitoring-mendix-runtime)
    *   [Logging](logging)
*   SQL Server maintenance plans have been set up according to:
    *   [Mendix SQL Maintenance Plans](/deployment/on-premises/mendix-sql-maintenance-plans)

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

### Hardware and Network

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- |
| Server availability | Heartbeat/ping all servers | UP/DOWN |
| Error report | Monitor error report logs hard errors | ERRORS |
Network latency | Ping time between network components | UP/DOWN/SNMP traps |
CPU utilization | CPU utilization all servers | > 99% over x minutes |
Memory utilization | Memory utilization all servers | > 99% over x minutes |
Paging/swapping | OS level metric all servers | In process of paging/swapping |
File system | Available file space all servers | Out of space |
Network components | Capture SNMP traps | UP/DOWN/ERROR |

### Mendix Application Server

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- |
| Admin server process | Monitor admin server process | UP/DOWN |
| Application server process | Monitor application server process | UP/DOWN |
| Java process | Monitor Java process | UP/DOWN |

### Web Server

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- |
| IIS Worker processes | Available | UP/DOWN/ERROR |
| Timed out connection | Connection timeout | Occurred |

### Databases

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- |
| SQL Server process | Available | UP/DOWN |
| SQL Agent process | Available | UP/DOWN |
| SQL Server maintenance plans | Running | SUCCESS/FAILURE |

### Application

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- |
| Functional | End-to-end application test | PASSED/FAILED |
| Error logs | Search for errors emitted by the application | ERROR OCCURRED |

## <a rel="nofollow"></a>**Metrics - Performance Monitoring**

### Hardware and Network

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- | --- |
| Network latency | Ping time and network bandwidth measurements | Timings > 1000 ms or network bandwidth maxed |
| Error report | Monitor error report logs hard errors | ERRORS |
| Network latency | Ping time between network components | UP/DOWN/SNMP traps |
| CPU utilization | CPU utilization all servers | > 80% over x minutes |
| Memory utilization | Memory utilization all servers | > 80% over x minutes |
| Paging/swapping | OS level metric all servers | In process of paging/swapping |
| File system | Available file space all servers | > 80% used |
| Network components | Capture SNMP traps | Degraded counters |

### Web Server

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- | --- |
| HTTP response | Average response time retrieving 1K GIF | Response time > 1000 ms |

### Databases

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- | --- |
| SQL Server | Average response time | Response time > 1000 ms |
| PostgreSQL | Average response time | Response time > 1000 ms |

### Application

| Type of Monitoring | Applicable Metric | Threshold |
| --- | --- | --- | --- |
| Complex page requests | Average response time | > 10 secs or less |
| Error logs | Search for warnings emitted by the application | Warnings occur |

## <a rel="nofollow"></a>**Metrics - Configuration Monitoring**

### Hardware and Network

|  Type of Monitoring | Applicable Metric |
| --- | --- |
| Network | Each network component configuration |
| Server | OS level configuration |
| File system | NTFS configuration |

### Web Server

|  Type of Monitoring | Applicable Metric |
| --- | --- |
| IIS server | Configurations |

### Databases

|  Type of Monitoring | Applicable Metric |
| --- | --- |
| SQL server | Configurations |
| PostgreSQL server | Configurations |

### Application

|  Type of Monitoring | Applicable Metric |
| --- | --- |
| Application-specific | Configurations |

## <a rel="nofollow"></a>**Metrics - Security Monitoring**

Security monitoring comprises the detection of, and response to, all security related incidents within the Mendix Platform - consisting of Server hard- and software, back-end systems and network connectivity components, like routers, switches, firewalls, etc. As security monitoring comprises such a broad technical field, it is out of scope of this document to list all valid metrics. However, as data security is of vital importance to most, if not all, organizations, it needs to be mentioned here. Ample documentation on the subject of security monitoring exists on the internet today.

Mendix recommends involving a third party supplier to audit your Mendix environment for any security related issues.
