---
title: "Java Memory Usage"
url: /refguide9/java-memory-usage/
weight: 2
---

## Introduction

The Java memory is divided in different Memory Usage blocks. Each of these blocks are a snapshot of the actual memory usage of that segment. Each of the memory usage blocks can be broken down into four different values

| Memory block | Description |
| --- | --- |
| ***init*** | Represents the initial amount of memory (in bytes) that the Java virtual machine (JVM) requests from the operating system for memory management of this segment during startup. The JVM may request additional memory from the operating system and may also release memory to the system over time. |
| ***used*** | represents the amount of memory that is actively used (in bytes). |
| ***committed*** | Represents the amount of memory (in bytes) that is guaranteed to be available for use by the JVM. The amount of committed memory may change over time (increase or decrease). |
| ***max*** | Represents the maximum amount of memory (in bytes) that can be used for memory management. The maximum amount of memory may change over time if defined. The amount of used and committed memory will always be less than or equal to max if max is defined. |

For all Mendix applications the value for init and max start with identical values. Immediately after startup the JVM can execute the garbage collection and correct the memory usage.

## Memory Segments

### Metaspace and Code Cache

Classes and libraries within the JVM are allocated in metaspace. This is a separate part of native memory. The memory allocated to metaspace stays fairly static and only increases when new libraries or classes are loaded into the application. Metaspace is not part of the heap, but is kept in the native OS memory.

In JVM version 7 and before, this data was stored in what was called the permanent generation (perm gen). In contrast to the perm gen, metaspace is able to collect classes that are no longer used and thus reduce memory impact.

The image below shows in detail how data moves through the memory. The Stack is made up of all threads and classes and, in case of Mendix, information about microflows, the domain model, and all other Mendix-specific information.

{{< figure src="/attachments/refguide9/runtime/runtime-java/java-memory-usage/16844065.png" class="no-border" >}}

All information regarding the stack is stored in memory. All runtime information is stored in the Heap, all program or JVM specific information is stored in the Non Heap.

All classes from the Mendix Platform, the custom Java code, and user libraries are stored in the Non Heap. This also holds the information from the deployment archive.

{{< figure src="/attachments/refguide9/runtime/runtime-java/java-memory-usage/16844066.png" class="no-border" >}}

All data in the Heap only moves to a different segment when the garbage collection executes. We can see a difference between a minor garbage collection run and a major collection run.

The minor garbage collection run is executed frequently and requires little resources to execute.

The minor garbage collection only reviews the **Eden Space** which is the primary segment of the **Young Generation.**

The Eden Space usually contains a lot of garbage and the minor garbage collection is optimized to get rid of a lot of unused objects at once in a short time span.

Any objects that are in use during the minor garbage collection will be moved to the **Survive Space**, which is part of the **Young Generation** segment.

When the **Young Generation** reaches its capacity the Major Garbage collection process will be triggered. This will evaluate if the objects in the survivor space are still used and remove them if possible, otherwise they will be moved to the **Old / Tenured Generation.**

The Major Garbage Collection process is optimized for speedy garbage collection without wasting a lot of memory.

The **Old / Tenured Generation** will be cleaned less frequently by the garbage collector. The Tenured Generation space will, generally, steadily increase until the GC is triggered and will usually drop considerably after garbage collection.

### Examples

{{< figure src="/attachments/refguide9/runtime/runtime-java/java-memory-usage/16844068.png" class="no-border" >}}

A healthy Mendix application that consumes a small amount of memory will show a graph similar to the graph above.

{{< figure src="/attachments/refguide9/runtime/runtime-java/java-memory-usage/16844067.png" class="no-border" >}}

This second graph, above, shows an application which becomes unhealthy. As can be seen here, the memory usage steadily increases throughout the span of one week. This can only be caused by a process that keeps consuming memory.

It is acceptable for an application to consume a lot of memory in the tenured generation space. However, the JVM should then run the major garbage collection and reduce the tenured generation to zero. 
