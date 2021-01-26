---
title: "Task Queue"
parent: "resources"
menu_order: 85
description: "Concepts and usage of the task queue"
tags: ["task queue", "process queue", "parallel", "scheduling", "microflow"]
---

## 1 Introduction

The `Task Queue` enables controlling the amount of microflows that are executed at once by assigning them to queues. This allows you to control the maximum load put on your application during peak usage by these microflows while still ensuring all microflows are eventually executed. The `QueueHelpers` module (not yet published) provides examples to set up monitoring on the queue.

Microflows can be scheduled to run in the background when marked as such in Studio Pro, or through the Java API. In a single node scenario, these tasks will simply be executed on the single node. In a clustered setting, the Mendix runtime distributes these tasks transparently throughout the cluster. Should a cluster node be shutdown or fail halfway during executing a task, then the remaining cluster nodes will pick it up (eventually, when the node is detected to be down) and re-execute it. This happens automatically and does not need to be managed.

### 1.1 Replacing the Process Queue module

This way of executing tasks in the background supersedes the earlier [Process Queue](https://docs.mendix.com/appstore/modules/process-queue) App Store module.  
See the section [Replacing Process Queue](#process-queue), below, for more information on the differences between the two mechanisms.

## 2 Configuration

The task queue is present from Mendix 9.0.3 onwards.

### 2.1 The 'Task Queue' concept

Background execution is done in so called `Task Queue`s. They can be created in Studio Pro as follows:

1. Right click on a module or folder.
1. Select 'Add other'.
1. Click 'Task Queue'.

`Task Queue`s can be configured to have a number 'threads'. Each of these threads can process one task at a time. That is, a queue will pick up as many concurrent tasks as it has threads. Whenever a task is finished, the next one will be picked up. This will happen on each cluster node. In general, a low number of threads (e.g. 1 or 2) should be enough, unless there is a large number of tasks or tasks take long and need to execute in parallel. Having many threads will put additional load on the database and should not be done if not needed.

### 2.2 Scheduling microflow executions

#### 2.2.1 In Studio Pro

In Studio Pro, a `Call Microflow` activity can be done 'in a Task Queue'. To that end edit the 'Call Microflow' activity and check the box 'Execute this Microflow in a Task Queue'. Then select the `Task Queue` in which the microflow should be executed.

The semantics of the microflow call change slightly:

 - In `Task Queue`s, tasks are always executed in a sudo context, even when the scheduling microflow has 'check entity access' enabled.
 - Only persisted entities can be passed to background calls. Passing a persistent, but `New` or `Changed` entity produces a runtime error. Basically, this means an entity must have been committed previously or is committed in the same transaction in which the task is created.
 - The execution doesn't happen immediately. Instead, a task is added to a `Task Queue` only when (and if) the transaction in which it has been scheduled ended successfully. At that point any cluster node may pick it up.
 - If the execution fails with an exception, the failure is logged in the `System.ProcessedQueueTask` table.

#### 2.2.2 Through the API

`Core` has been extended with a method `microflowCall`. It can be used to schedule a microflow for background execution as in the following example:

```java
Core.microflowCall("AModule.SomeMicroflow")
  .withParam("Param1", "Value1")
  .withParam("Param2", "Value2")
  .executeInBackground(context, "AModule.SomeQueueName");
```

The method `excuteInBackground` takes two parameters: a context and a queue name. The context is only used for creating the queue; executing the task will be done with a system context.

In Mendix 9.0.2 and after, the `executeInBackground` method is available in the public API. In earlier versions it has to be called via reflection.

Scheduling a microflow to be executed returns immediately. The microflow will be executed somewhere in the cluster, as soon as possible after the transaction in which it was called completes. Because the microflow is executed in the background there is no return value. The microflow will be executed in a 'sudo' context. The context in which a background task runs is still under discussion and may change in the future.

### 2.3 Configuration options

The period for a graceful shutdown of queues can be configured.

| Configuration option          | Example value | Explanation                                              |
|-------------------------------|---------------|----------------------------------------------------------|
| TaskQueue.ShutdownGracePeriod |          10000| Time in ms to wait for task to finish when shutting down.|

The total amount of worker threads is limited to 40 (per cluster node). There is no hard limit on cluster nodes.


### 2.4 Interfacing the queue

Besides scheduling and executing tasks, the Mendix platform keeps track of tasks that have been executed in the background: which completed and which failed, etc.

Internally, a scheduled or running task is represented by the Mendix entity `System.QueuedTask`. In a high performance setting, this entity should *not* be used directly by user code, because the underlying database table is heavily used. For example counting how may `System.QueuedTask` entities exist at the moment will lock the table and might cause a serious slowdown in task processing. Writing directly to `System.QueuedTask` should not be done. Instead, mark a task for background execution in the `Call Microflow` activity or using the Java API.

Tasks that have been processed, i.e. have completed or failed, are saved as `System.ProcessedQueueTask`. These entities are at the user's disposal. They might be used for example to

1. Reschedule failed tasks if desired (this should be done by creating new task(s)),
1. Verify that tasks have run successfully, or
1. Debug the application in case of errors.

At present, `System.ProcessedQueueTasks` are saved forever. The user is free to delete them when desired.

### 2.5 Task status

Task status reflects the state that a background task is in:

- `Idle`: The task was created and is waiting to be executed.
- `Running`: The task is being executed.
- `Completed`: The task executed successfully.  A `System.ProcessedQueueTask` was added to reflect this.
- `Failed`: The task is no longer executing, because an exception occurred. A `System.ProcessedQueueTask` containing the exception was added to reflect the failure. The task will not be retried.
- `Aborted`: The task is no longer executing, because the cluster node that was executing it went down. A `System.ProcessedQueueTask` is added to reflect this. The task will be retried on another cluster node.
- `Incompatible`: The task never executed, because the model changed in such a way that it cannot be executed anymore. This could be because the microflow was removed/renamed, the arguments were changed or the `Task Queue` was removed.

### 2.6 Model changes

During the startup of the Mendix runtime, it is checked if all scheduled tasks in the database fit the current model. That is, if the microflows exist, if the parameters match and if the queue exists. If this is not the case, tasks are moved to `System.ProcessedQueueTasks` with status `Incompatible`. The Runtime will only start after all scheduled tasks have been checked. This should in general not take very long, even if there are thousands of tasks.

### 2.7 Shutdown

During shutdown, the `TaskQueueExecutors` will stop accepting new tasks. Running tasks are allowed a grace period to finish. After this period, the runtime will send an interrupt to all task threads that are still running and again allow a grace period for them to finish. Note that interrupting them may cause them to fail. After the second grace period the runtime just continues shutting down, eventually aborting the execution of the tasks. The aborted tasks will be reset, so that they are re-executed later or on another cluster node.

## 3 Monitoring

To monitor tasks in the `Task Queue` the `QueueHelpers` module can be used in Mendix 9.

Since this hasn't been released yet, it can be downloaded through [Gitlab](https://gitlab.rnd.mendix.com/runtime/taskqueuehelpers-module) by Mendix employees only.

### 3.1 Logging

A Logger exists specifically for all actions related to `Task Queue`, named `Queue`.

## 4 Other

Executing "Find usages" on a `Task Queue` finds all the occurences of that queue in microflows for example. Invocations from Java actions are not found.

### 4.1 Limitations

* Microflows that are executed in the background execute as soon as possible in the order they were created, but possibly in parallel. They are 'consumed' in FIFO order, but then executed in parallel in case of multiple threads. There is no way to execute only a single microflow at any point in time (i.e. ensure tasks are run sequentially), unless the number of threads is set to 1 and there's only a single runtime node.
* Microflows that are executed in the background can *only* use the following types of parameters: Boolean, Integer/Long, Decimal, String, Date and time, Enumeration, committed Persistent Entity.
* Microflows that are executed in the background use a sudo/system context with all permissions. It is not possible to use a user context with limited permissions.
* Background microflows will start execution as soon as the transaction in which they are created is completed. This ensures that any data that is needed by the background microflow is committed as well. It is not possible to start a background microflow immediately, halfway during a transaction. Note that if the transaction is rolled back, the task is not executed at all.
* The total amount of parallelism per node is limited to 40. This means that at most 40 queues with parallelism 1 can be defined, or a single queue with parallelism 40, or somewhere in between, as long as the total does not exceed 40.
* Queued actions that have failed can't be rescheduled out-of-the-box currently. You can set up a scheduled microflow to re-attempt failed tasks. They can be queried from `System.ProcessedQueueTask` table.

### 4.2 High level implementation overview

Tasks are stored in the database in a `System.QueuedTask` table. For each background task a new row is inserted with a `Sequence` number, `Status` `Idle` and the `QueueName`, `QueueId`, `MicroflowName` and `Arguments` of the task. This happens as part of the open transaction, which means that the task will not be visible in the database until the transaction completes. The tasks are then 'consumed' by executors that perform a `SELECT FOR UPDATE SKIP LOCKS` SQL statement, that will try to 'claim' the next 'free' task. The `SKIP LOCKS` clause will skip over any tasks that are already locked for update by other executors. The corresponding `UPDATE` changes the `Status` to `Running` and sets the 'owner' of the task in the `XASId` and `ThreadId` fields. After the task has been executed, it is moved to the `System.ProcessedQueueTask` table with `Status` `Completed` or `Failed`. If the task failed with an exception, this is included in the `ErrorMessage` field.

Arguments are stored in the `Arguments` field as JSON values. Arguments can be any primitive type or a committed persistent object, which is included in the `Arguments` field by its Mendix identifier. Upon execution of the task, the corresponding object is retrieved from the database using the Mendix identifier. For this reason the persistent object must be committed before the task executes, because otherwise a runtime exception will occur.

When a node crashes, this is eventually detected by another cluster node, because it no longer updates its heartbeat timestamp. At this point the other node will 'reset' all tasks that were running on the crashed node. The reset means the following:

- create a copy of the task in the `System.ProcessedQueueTask` table with `Status` `Aborted`,
- set the `Status` back to `Idle`,
- increment the `Retried` field,
- clear the `XASId` and `ThreadId` fields.

The task will then automatically be consumed again by one of the remaining nodes in the cluster. Effectively, this means that a task is guaranteed to be executed 'at least once'. Under normal circumstances, it is executed exactly once, but in the face of node failures it might occur that a task is (partially) executed multiple times. This is the best guarantee that a distributed system can provide.

### 4.3 Replacing Process Queue{#process-queue}

The `Task Queue` supersedes the earlier [Process Queue](https://docs.mendix.com/appstore/modules/process-queue) appstore module, which has been deprecated with the release of Mendix 9. There are several differences between the `Process Queue` module and the `Task Queue`:

* The `Task Queue` supports a multi-node cluster setup and can therefore be used in a horizontally scaled environment.
* The `Task Queue` does not require additional entities to be created, since Microflows can simply be marked to execute in the background.
* The `Task Queue` does not yet support automatic retrying of failed tasks.
