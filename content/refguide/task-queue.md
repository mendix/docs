---
title: "Task Queue"
parent: "resources"
menu_order: 85
description: "Concepts and usage of the task queue"
tags: ["task queue", "process queue", "parallel", "scheduling", "microflow"]
---

## 1 Introduction

Using a **Task Queue** allows you to run microflows or Java actions asynchronously while controlling the number of tasks that are executed simultaneously by assigning them to a task queue. You can configure the task queue to control the maximum load put on your application by these tasks during peak usage while still ensuring all microflows and Java actions are eventually executed.

### 1.1 Replacing the Process Queue module

This way of executing tasks in the background supersedes the earlier [Process Queue](/appstore/modules/process-queue) Marketplace module.

See the section [Replacing Process Queue](#process-queue), below, for more information on the differences between the two mechanisms.

## 2 Configuration

Microflows or Java actions can be scheduled to run in the background when they are initiated using a **Call Microflow** or **Call Java Action** action in Studio Pro, or through the Java API.

### 2.1 Tasks Running in Task Queues

#### 2.1.1 Process Flow When Adding a Task to a Task Queue

Scheduling a microflow or Java action to be executed returns immediately. The task will be executed somewhere in the cluster, as soon as possible after the transaction in which it was called completes.

Because the task is executed in the background, there is no return value. You can only find out if the task ran successfully. For information on how to do that, see [Interfacing the Queue](#interfacing-queue), below.

#### 2.1.2 Where Do the Tasks Run?

In a single node scenario, the tasks in a task queue will simply be executed on the single node.

In a clustered setting, the Mendix runtime distributes these tasks transparently throughout the cluster. Should a cluster node be shutdown or fail halfway during executing a task, then the remaining cluster nodes will pick it up (eventually, when the node is detected to be down) and re-execute it. This happens automatically and does not need to be managed.

You can control how many tasks can run in parallel on each node when you create your task queue. See [Creating Task Queues](#create-queue), below, for more information.

#### 2.1.3 Context in Task Queues

For microflows and Java actions which are running in a task queue, the conditions in which the task runs changes slightly in the following ways:

* Only committed persistable entities can be passed as parameters to the task. Passing a persistable *New* or *Changed* entity produces a runtime error. Basically, this means an entity must have been committed previously or is committed in the same transaction in which the task is created.
* The task is not executed immediately. The task is added only to a task queue when (and if) the transaction from which it has been scheduled ends successfully. At that point any cluster node may pick it up.
* If the execution fails with an exception, the failure is logged in the `System.ProcessedQueueTask` table.

### 2.2 Creating Task Queues {#create-queue}

Background execution is done in so called **Task Queues**. They can be created in Studio Pro as follows:

1. Right click on a module or folder.

2. Select **Add other**.

3. Click **Task Queue**.

4. Enter the value for **Threads** for each cluster node.

Task Queues have a number threads. Each of these threads can process one task at a time. That is, a queue will pick up as many concurrent tasks as it has threads. Whenever a task is finished, the next one will be picked up.
    
#### 2.2.1 Thread Count Recommendation 

{{% alert type="info" %}}
In versions of Mendix below 9.9.0, there is a limit of 40 threads per cluster node.
{{% /alert %}}

In general, one or two threads should be enough, unless there is a large number of tasks or tasks take a long time and need to execute in parallel. Having many threads will put additional load on the database and should not be done if not needed. Remember that, in a horizontally-scaled app, this is the number of threads for each *node*, not the total number of threads.

When choosing the number of threads for a task queue, use the following guidelines:
* If there are only a few tasks use a single thread.
* If the tasks perform only calculations and perform no blocking calls, use no more threads than the available number of cores.
* Only use more threads than the available number of cores if there are a lot of tasks and they perform blocking calls.
* Keep in mind that using more threads than the number of cores will require additional scheduling and will not necessarily improve the queued task throughput.
    
### 2.3 Queueing Microflow Executions

#### 2.3.1 In Studio Pro {#sp}

In Studio Pro, a [Call Microflow](microflow-call) activity can start a microflow in a Task Queue.

1. Edit the **Call Microflow** activity.
2. Check the box **Execute this Microflow in a Task Queue**.
3. Set **Select Task Queue** to the task queue in which the microflow should be executed.
4. (optionally – in Mendix version 9.10.0 and above) Select an automatic retry strategy:
    - with "Fixed retry" the retries will be performed after the given delay, up to the given number of attempts.
    - with "Exponential retry" the length of the delay between the retries is doubled for each retry, up to the given maximum interval.

#### 2.3.2 Through the API

The `Core` class in `com.mendix.core` contains a method `microflowCall`. It can be used to schedule a microflow for background execution as in the following example:

```java
Core.microflowCall("AModule.SomeMicroflow")
  .withParam("Param1", "Value1")
  .withParam("Param2", "Value2")
  .executeInBackground(context, "AModule.SomeQueueName");
```

The method `executeInBackground` takes two parameters: a context and a queue name. The context is only used for creating the task; executing the task will be done with a [new, but equivalent context](#context). See the [API documentation](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/Core.html#microflowCall(java.lang.String)) for more information.

### 2.4 Queueing Java Action Executions

#### 2.4.1 In Studio Pro

In Studio Pro, a [Call Java action](microflow-call) activity can start a Java action in a Task Queue.

1. Edit the **Call Java Action** activity.
2. Check the box **Execute this Java action in a Task Queue**.
3. Set **Select Task Queue** to the task queue in which the Java action should be executed.

#### 2.4.2 Through the API

The `Core` class in `com.mendix.core` contains a method `userActionCall`. It can be used to schedule a Java action for background execution as in the following example:

```java
Core.userActionCall("AModule.SomeJavaAction")
  .withParams(context, "Value1", "Value2")
  .executeInBackground(context, "AModule.SomeQueueName");
```

The method `executeInBackground` takes two parameters: a context and a queue name. The context is only used for creating the task; executing the task will be done with a [new, but equivalent context](#context). See the [API documentation](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/Core.html#userActionCall(java.lang.String)) for more information.

#### 2.4.3 Retry on Failure {#retry}

In Mendix version 9.9.0 and above, it is possible to automatically retry a task when it fails. The following options are available:

1. Retry with a fixed delay – specify the maximum number of attempts and the wait time between each attempt.
2. Retry with an exponentially increasing delay – specify the maximum number of attempts and the wait time before the first retry. The wait time will double after each failed retry up to a maximum. You can specify this maximum, if you don't specify a maximum the default is 1 day.

Each attempt will produce its own `System.ProcessedQueueTask` entry. These entries will all have the same sequence number because they refer to the same task.

The retry mechanism can be activated through the API, for instance:

```java
Core.microflowCall("AModule.SomeMicroflow")
  .withRetry(10, Duration.ofSeconds(3))
  .executeInBackground(context, "AModule.SomeQueueName");
Core.userActionCall("AModule.SomeJavaAction")
  .withExponentialRetry(8, Duration.ofSeconds(3), Duration.ofMinutes(1))
  .executeInBackground(context, "AModule.SomeQueueName");
```

### 2.5 Configuration Options {#configuration}

The period for a graceful shutdown of queues can be configured as a [custom runtime](custom-settings) setting in Studio Pro. 

| Configuration option                       | Example value | Explanation                                                                             |
|--------------------------------------------|---------------|-----------------------------------------------------------------------------------------|
| `TaskQueue.ShutdownGracePeriod`            |          10000| Time in ms to wait for task to finish when shutting down.                               |
| `com.mendix.core.ProcessedTasksCleanupAge` |       86400000| Time in ms after which `ProcessedQueueTask` are deleted automatically (no tasks are automatically deleted if this setting is not specified). <b/>*This setting was introduced in Mendix version 9.9.0* |   

{{% alert type="info" %}}
This grace period is applied twice during the [shutdown](#shutdown) (described below) so the maximum time that the runtime will wait for tasks to end is twice this value.
{{% /alert %}}

### 2.6 Interfacing the Queue {#interfacing-queue}

Besides scheduling and executing tasks, the Mendix platform keeps track of tasks that have been executed in the background: for example, which completed and which failed.

Internally, a scheduled or running task is represented by the Mendix entity `System.QueuedTask`. In a high performance setting, this entity should *not* be used directly by user code, because the underlying database table is heavily used. For example counting how many `System.QueuedTask` objects exist at the moment will lock the table and might cause a serious slowdown in task processing. You should also not Write directly to `System.QueuedTask`. Instead, mark a task for background execution in the **Call Microflow** or **Call Java Action** activity or using the Java API.

Tasks that have been processed, that is have completed or failed, are saved as objects of entity type `System.ProcessedQueueTask`. These objects are at the user's disposal. They might be used, for example, to do the following:

1. Reschedule failed tasks if desired (this should be done by creating new task(s)),
2. Verify that tasks have run successfully, or
3. Debug the application in case of errors.

`System.ProcessedQueueTasks` objects are by default never deleted. The user is free to delete them when desired.
If you are using Mendix version 9.9.0 or above, you can use the `com.mendix.core.ProcessedTasksCleanupAge` runtime setting if automatic cleanup is desired.

### 2.7 Execution Context {#context}

Prior to Mendix 9.6 tasks were always executed in a system context, even if the scheduling microflow had **Apply entity access** set to *true* (see [Microflow Properties](microflow) for more information). As of Mendix 9.6 this behavior has been deprecated and tasks now run in an equivalent context to the one in which they were scheduled. This has the following effect:

In case where **Apply entity access** is set to *true*, the following rules apply:

* When a user is logged in, the task will be executed in a new context for the same named user. This context will be the same as if the user is logged in. 
* When no user is logged in, the task will be executed in a new anonymous context. This context will be for a new anonymous user with the same language and timezone as the original user.

There is one exception to the above rules:

* When a system context is used to schedule the task using the [Java API](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/actionmanagement/ActionCallBuilder.html#executeInBackground(com.mendix.systemwideinterfaces.core.IContext,java.lang.String)), the task will be executed in a new system context, regardless of the **Apply entity access** setting.

Projects containing task queues that were created before Mendix 9.6 will get a deprecation warning in the log: `The project setting 'System context tasks' is deprecated`.
You can remove this warning in the **Runtime** tab of the app **Settings** in Studio Pro. Set **System context tasks** to *no* to execute tasks in an equivalent context to the one they were created in and remove the warning.

{{% alert type="warning" %}}
You will be asked to confirm this change as, after choosing *no*, you cannot switch back to *yes* because executing tasks in system contexts (unless scheduled from a system session) is deprecated.
{{% /alert %}}

### 2.8 Task Status

The **Status** attribute of `System.QueuedTask` and `System.ProcessedQueueTask` reflects the state that a background task is in. The values are:

* `Idle`: The task was created and is waiting to be executed.
* `Running`: The task is being executed.
* `Completed`: The task executed successfully. A `System.ProcessedQueueTask` is added to reflect this.
* `Failed`: The task is no longer executing, because an exception occurred. A `System.ProcessedQueueTask` containing the exception is added to reflect the failure. The task will not be retried.
* `Aborted`: The task is no longer executing, because the cluster node that was executing it went down. A `System.ProcessedQueueTask` is added to reflect this. The task will be retried on another cluster node.
* `Incompatible`: The task never executed, because the model changed in such a way that it cannot be executed anymore. This could be because the microflow was removed/renamed, the arguments were changed or the Task Queue was removed.

### 2.9 Model Changes

During the startup of the Mendix runtime, there is a check to ensure that scheduled tasks in the database fit the current model. The following conditions are checked:

* that the microflows exist
* that the parameters match
* that the queue exists 

If any of these condition checks fail, tasks are moved to `System.ProcessedQueueTask` with **Status** `Incompatible`. The Runtime will only start after all scheduled tasks have been checked. This should in general not take very long, even if there are thousands of tasks.

### 2.10 Shutdown {#shutdown}

During shutdown, the `TaskQueueExecutors` will stop accepting new tasks. Running tasks are allowed a [grace period](#configuration) to finish. After this period, the runtime will send an interrupt to all task threads that are still running and again allow a grace period for them to finish. After the second grace period the runtime just continues shutting down, eventually aborting the execution of the tasks. The aborted tasks will be reset, so that they are re-executed later or on another cluster node. In development mode, the first grace period is shortened to 1 second.

{{% alert type="info" %}}
Interrupting task threads may cause them to fail. These tasks will be marked as `Aborted` and retried at a later time.
{{% /alert %}}

### 2.11 Cleaning up old processed tasks {#cleanup}

The execution of a task produces a `System.ProcessedQueueTask` row in the database. Over time these accumulate and the table can grow large.

In Mendix versions 9.9.0 and above, the `System.ProcessedQueueTask` can be cleaned up automatically by specifying the `com.mendix.core.ProcessedTaskCleanupAge` runtime setting. This setting specifies (in milliseconds) how old rows in the table have to be before they are automatically cleaned up. Only rows with the "Completed" status are cleaned up.

When this setting is not specified, no cleanup is performed.

{{% alert type="info" %}}
When turning on the automatic cleanup after having used tasks for a long time, there might be many rows to clean up, which will be initiated when the runtime starts. This may cause additional load on the database, but will nog block the startup. It is recommended not to do this during a busy period.
{{% /alert %}}

In versions of Mendix below 9.9.0, you can clean up old tasks by creating a microflow for administrators to use if the table gets too large.

## 3 Monitoring

### 3.1 Logging

A [Log Node](logging#mendix-nodes) named `Queue` exists specifically for all actions related to Task Queues.

## 4 Other

Executing **Find usages** on a task queue only finds the occurrences of that queue in microflows.

{{% alert type="info" %}}
Invocations from Java actions are not found.
{{% /alert %}}

### 4.1 Tasks Queue Helper

You can use the [Task Queue Helpers](https://marketplace.mendix.com/link/component/117272) module in the Mendix Marketplace to help you to implement Task Queues. It contains the following:

* Pages that can be used to monitor task queues
* Microflows that can do basic maintenance tasks

### 4.2 Limitations

Task queues have the following limitations:

* Microflows or Java actions that are executed in the background execute as soon as possible in the order they were created, but possibly in parallel. They are consumed in FIFO order, but then executed in parallel in case of multiple threads. There is no way to execute only a single microflow or Java action at any point in time (meaning, ensure tasks are run sequentially), unless the number of threads is set to 1 and there's only a single runtime node.
* Microflows or Java actions that are executed in the background can *only* use the following types of parameters: Boolean, Integer/Long, Decimal, String, Date and time, Enumeration, committed Persistent Entity.
* Background microflows or Java actions will start execution as soon as the transaction in which they are created is completed. This ensures that any data that is needed by the background microflow or Java action is committed as well. It is not possible to start a background microflow or Java action immediately, halfway during a transaction. Note that if the transaction is rolled back, the task is not executed at all.
* In versions of Mendix below 9.9.0, the total amount of parallelism per node is limited to 40. This means that at most 40 queues with parallelism 1 can be defined, or a single queue with parallelism 40, or somewhere in between, as long as the total does not exceed 40.
* Queued actions that have failed can't be rescheduled out-of-the-box in Mendix versions below 9.9.0. You can set up a scheduled microflow to re-attempt failed tasks. They can be queried from `System.ProcessedQueueTask` table.

### 4.3 High-Level Implementation Overview

Tasks are stored in the database in a `System.QueuedTask` table. For each background task a new object is inserted with a `Sequence` number, `Status = Idle`, `QueueName`, `QueueId`, `MicroflowName` or `UserActionName`, `Arguments`, `ContextType`, `ContextData`, and `System.owner` of the task. This happens as part of the transaction which calls the microflow or Java action and places it in the task queue, which means that the task will not be visible in the database until that transaction completes successfully.

The tasks are then consumed by executors that perform a `SELECT FOR UPDATE SKIP LOCKS` SQL statement, that will try to claim the next free task. The `SKIP LOCKS` clause will skip over any tasks that are already locked for update by other executors. The corresponding `UPDATE` changes the `Status` to `Running` and sets the owner of the task in the `XASId` and `ThreadId` attributes.

After the task has been executed, it is moved to be an object of the `System.ProcessedQueueTask` entity with `Status` `Completed` or `Failed`. If the task failed with an exception, this is included in the `ErrorMessage` attribute.

Arguments are stored in the `Arguments` attribute as JSON values. Arguments can be any primitive type ([variable](variable-activities))or a committed persistent object, which is included in the `Arguments` field by its Mendix identifier. Upon execution of the task, the corresponding object is retrieved from the database using the Mendix identifier. For this reason the persistent object must be committed before the task executes, because otherwise a runtime exception will occur.

When a node crashes, this is eventually detected by another cluster node, because it no longer updates its heartbeat timestamp. At this point the other node will reset all tasks that were running on the crashed node. The reset performs the following actions:

* create a copy of the task as a `System.ProcessedQueueTask` object with `Status = Aborted`
* set the `Status` back to `Idle`
* increment the `Retried` field
* clear the `XASId` and `ThreadId` fields

The task will then automatically be consumed again by one of the remaining nodes in the cluster. Effectively, this means that a task is guaranteed to be executed at least once.

{{% alert type="warning" %}}
Under normal circumstances, a task is executed exactly once, but in the face of node failures a task may be (partially) executed multiple times. This is the best guarantee that a distributed system can provide.
{{% /alert %}}

### 4.4 Replacing Process Queue {#process-queue}

The **Task Queue** supersedes the earlier [Process Queue](/appstore/modules/process-queue) Marketplace module, which has been deprecated with the release of Mendix 9. There are several differences between the Process Queue module and the **Task Queue**:

* The **Task Queue** supports a multi-node cluster setup and can therefore be used in a horizontally scaled environment.
* The **Task Queue** does not require additional entities to be created, since Microflows or Java actions can simply be marked to execute in the background.
* The **Task Queue** does not yet support automatic retrying of failed tasks.
