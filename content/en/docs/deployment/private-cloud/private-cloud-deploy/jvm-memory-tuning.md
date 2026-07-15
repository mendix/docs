---
title: "Tuning JVM memory settings for a Mendix app running in Mendix on Kubernetes"
linktitle: "JVM memory tuning"
url: /developerportal/deploy/private-cloud-jvm-memory-tuning/
description: "Describes how to tune a Mendix app's JVM memory settings in Mendix on Kubernetes"
weight: 10
---
## Introduction

Mendix Runtime and any Mendix apps run in a Java Virtual Machine. Most Java Virtual Machines (including the one used in Mendix on Kubernetes) are based on the HotSpot Java VM. The HotSpot VM uses a garbage collector to free up unused memory. However, running the garbage collector causes a negative performance impact. The Hotspot VM tries to only run garbage collection when absolutely necessary (for example, when memory usage reaches a certain threshold).

{{% alert color="info" %}}
For a comprehensive guide explaining how the HotSpot VM performs garbage collection, see the [official Java documentation](https://docs.oracle.com/en/java/javase/21/gctuning/index.html).
{{% /alert %}}

## Memory Tuning

In most cases, Mendix on Kubernetes does not need advanced memory tuning. Starting with Operator version 2.26, the default memory settings have been aligned with Mendix Cloud and are based on typical Mendix app usage patterns.

{{% alert color="warning" %}}
Manual adjusting JVM memory usage is only needed in some cases, when the default memory settings leave unused memory.
{{% /alert %}}

### Types of Memory

In the HotSpot VM, memory is split into two regions, **Heap** and **Non-Heap**.

* **Heap** memory is used to store temporary data, including microflow variables, entities, and internal states of the Mendix Runtime and third-party libraries.
* **Non-Heap** memory stores code, internal Java VM data and data from non-Java components, such as the [BAPI Connector](/appstore/modules/sap/sap-bapi-connector/#setup-environment) or machine learning modules from [ML Kit](/refguide/machine-learning-kit/).

There is a fixed boundary between **Heap** and **Non-Heap** memory. Any memory reserved for the heap cannot be used for any other purpose. All remaining memory is assigned to the **Non-Heap** region.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/jvm-memory-overview.png" class="no-border" >}}

It is not possible to dynamically adjust the amount of **Heap** and **Non-Heap** regions of a running app. This needs to be specified before starting an app.

### Default Memory Allocation {#default-memory-allocation}

Starting with Operator version 2.26, the default memory settings use the following rules:

| Container memory limit | JVM non-heap size |
| --- | --- |
| Less than 2 GB | Half of the limit (but at least 300 MB) |
| Between 2 and 4 GB | 1 GB |
| Between 4 and 8 GB | 1.5 GB |
| Between 8 and 16 GB | 2 GB |
| Between 16 and 32 GB | 3 GB |
| 32 GB or more | 4 GB |

All other memory is allocated to the heap.

{{% alert color="info" %}}
Older Operator versions do not set any memory configuration. In this case, the HotSpot VM allocates 25% of the memory limit to heap memory, and the rest is assigned to non-heap memory. This assignment is not optimal, as typical Mendix apps primarily benefit from heap memory.
{{% /alert %}}

### Metrics-Based Tuning

{{% alert color="info" %}}
Instead of freeing memory, the HotSpot VM prefers to recycle/reuse it. When looking at total memory usage in a container (for example using `kubectl top pods` or data collected by `kube-state-metrics`), the total memory usage will not reflect internal details. For example, the JVM **Heap** might be underutilized, but will show as *used memory* in the container memory usage. To have a clear picture of how memory is allocated and used, use Prometheus metrics.
{{% /alert %}}

For examples how to read JVM memory usage graphs, see [Java Memory Usage](/refguide/java-memory-usage/).

### Adjusting Memory in Mendix on Kubernetes

In a [Standalone environment](/developerportal/deploy/private-cloud-operator/#edit-cr), the JVM heap size can be adjusted in the `jvmMemorySettings` section of the `MendixApp` CR.

For example:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
# ...
# omitted lines for brevity
# ...
spec:
  # ...
  # omitted lines for brevity
  # ...
  # Add or update this section:
  jvmMemorySettings:
    heapLimit: 1700Mi # example: set heap limit to 1700 megabytes
```

Removing the `jvmMemorySettings` section will switch to the [default memory allocation](#default-memory-allocation) settings.

Starting with Operator version 2.26, the JVM heap size should be adjusted as documented in this section. If you have an environment using any of the following custom JVM options, they will not be applied to the app configuration and will instead be removed:

* `-Xms` - minimal heap size
* `-Xmx` - heap size limit
* `-XX:MinRAMPercentage` - heap size limit, in percentages for environments with less than 250MB of container memory
* `-XX:MaxRAMPercentage` - heap size limit, in percentages for environments with more than 250MB of container memory
* `-XX:InitialRAMPercentage` - minimal heap size, in percentages

## Addressing Memory Issues

On a typical desktop system and many server environments, reaching or exceeding the memory limit is not a problem. The operating system will move some of the memory contents to a storage device such as an SSD or hard drive. However, this will likely cause a major performance penalty, and in Kubernetes is [disabled by default](https://kubernetes.io/docs/concepts/cluster-administration/swap-memory-management/).

When an app tries to use more memory than its container memory limit, it will be terminated by Kubernetes (OOMKilled) and will effectively crash. To prevent performance degradation and the app from crashing, it might need its memory to be adjusted.

### Addressing Out Of Memory Crashes

An *OOMKilled* (Out Of Memory-killed) event happens when an app attempts to use more memory than specified in its container limit:

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/jvm-nonheap-full.png" class="no-border" >}}

This shows as a container restarting with an `OOMKilled` exit code:

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/jvm-memory-oomkilled.png" class="no-border" >}}

To address this issue, choose one of the following options:

* Recommended fix: increase the core resource memory (**requests** and **limits**).
* Alternatively, if the Prometheus metrics show that the heap memory usage is low, decrease the heap memory size.

{{% alert color="info" %}}
This can also happen if a node is overcommitted (not enough available memory for app pods). To prevent overcommitment, adjust the memory **requests** to match the container **limits**.
{{% /alert %}}

### Addressing Java.lang.OutOfMemoryError Exceptions

A `java.lang.OutOfMemoryError` exception happens when the JVM heap is full and does not have enough available memory to perform an action (such as a Microflow or a Java Custom Action).

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/jvm-heap-full.png" class="no-border" >}}

This shows as a `java.lang.OutOfMemoryError: Java heap space` error message in the logs.

To address this issue, choose one of the following options:

* Recommended fix: increase the core resource memory (**requests** and **limits**).
* Alternatively, if the container has a lot of free, unused memory, increase the heap memory size.
