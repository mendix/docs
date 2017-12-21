---
title: "Java Memory Usage With Mendix"
parent: "transient-objects-garbage-collecting"
---
# Java Memory Usage With Mendix



The Java memory is divided in different Memory Usage blocks. Each of these blocks are a snapshot of the actual memory usage of that segment. Each of the memory usage blocks can be broken down into four different values

<table><thead><tr><td class="confluenceTd"><strong><em>init</em></strong></td><td class="confluenceTd">Represents the initial amount of memory (in bytes) that the Java virtual machine requests from the operating system for memory management of this segment during startup. The Java virtual machine may request additional memory from the operating system and may also release memory to the system over time.</td></tr></thead><tbody><tr><td class="confluenceTd"><strong><em>used</em></strong></td><td class="confluenceTd">represents the amount of memory that is actively used (in bytes).</td></tr><tr><td class="confluenceTd"><strong><em>committed</em></strong></td><td class="confluenceTd">Represents the amount of memory (in bytes) that is guaranteed to be available for use by the Java virtual machine. The amount of committed memory may change over time (increase or decrease).</td></tr><tr><td colspan="1" class="confluenceTd"><strong><em>max</em></strong></td><td colspan="1" class="confluenceTd">Represents the maximum amount of memory (in bytes) that can be used for memory management. The maximum amount of memory may change over time if defined. The amount of used and committed memory will always be less than or equal to max if max is defined.</td></tr></tbody></table>

For all Mendix applications the value for init and max start with identical values. Immediately after startup the JVM can execute the garbage collection and correct the memory usage.

## Memory Segments

#### **_Perm Gen & Code Cache    _**

The Permanent Generation space is allocated to all classes and libraries. The allocated memory to the Perm Gen stays fairly static and only increases when new libraries or classes are loaded into the application. The Perm Gen is not part of the Java Heap, it is added on top of the assigned heap.
[_https://blogs.oracle.com/jonthecollector/entry/presenting_the_permanent_generation_](https://blogs.oracle.com/jonthecollector/entry/presenting_the_permanent_generation)

This image on the right shows shows in detail how data moves through the memory. The Stack is made up out of all threads, classes and in case of Mendix also contains all information about microflows domain model and all other Mendix specific information.

![](attachments/13566037/14385368.png)

All information regarding the stack is stored in memory. All runtime information is stored in the Heap, all program or JVM specific information is stored in the Non Heap.

All classes from the Mendix Platform, the custom java code, and user libraries are stored in the Non Heap. (Since Mendix 5 this will also hold the information from the deployment archive.  

![](attachments/13566037/14385367.png)

All data in the Heap only moves to a different segment when the garbage collection executes. We can see a difference between a minor garbage collection run and a major collection run.

The minor garbage collection run is executed frequently and requires little resources to execute.

The minor garbage collection only reviews the **Eden Space** which is the primary segment of the **Young Generation.**

The Eden Space usually contains a lot of garbage and the minor garbage collection is optimized to get rid of a lot of unused objects at once in a short time span. 

Any objects that are in use during the minor garbage collection will be moved to the **Survive Space**, which is part of the **Young Generation** segment.

When the **Young Generation** reaches its capacity the Major Garbage collection process will be triggered. This will evaluate if the objects in the survivor space are still used and remove them if possible, otherwise they will be moved to the **Old / Tenured Generation.**

The Major Garbage Collection process is optimized for speedy garbage collection without wasting a lot of memory.

The **Old / Tenured Generation** won’t cleaned frequently by the garbage collector. The Tenured Generation space either keeps on increasing until it reaches +/- 70% of its capacity, or after several days. The tenured space will steadily increase and should drop close to 0% after garbage collection.

### Examples

![](attachments/13566037/14385365.png)

A healthy Mendix application that consumes a small amount of memory will show a graph similar to the first graph on the right. 

![](attachments/13566037/14385366.png)

The graph on the right shows an unhealthy application. As can be seen here, the memory usage steadily increases throughout the span of one week. This can only be caused by a process that keeps consuming memory.

It is acceptable for an application to consume a lot of memory in the tenured generation space, the JVM should run the major garbage collection and reduce the tenured generation to zero.
