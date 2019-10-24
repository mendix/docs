---
title: "Process Queue"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Process Queue](https://appstore.home.mendix.com/link/app/393/) module enables controlling the amount of microflows that are executed at once by assigning them to queues. Each queue can be configured to handle a sub-set of microflows, and you can also set a limit to the number of microflows each queue can execute at once. This allows you to control the maximum load put on your application during peak usage by these microflows while still ensuring all microflows are eventually executed. The queues use a FIFO approach (first-in, first-out) and automatically restart themselves (and any microflows still left to execute) after a server restart.

With the amount of parallel processes and the number of queues that can be controlled from the runtime, you can see the real-time progress of your application.

### 1.1 Typical Usage Scenario

* Schedule a job but do not want the job to be executed at a specific time
* Control a process that crashes a server if too many users execute the action at the same time
* Create unlimited different queues
* Configure multiple different microflows to run in a single queue
* Configure multiple different microflows to run each in a different queue
* Control the number of parallel threads per queue

### 1.2 Dependencies

* [Mx Model Reflection](https://appstore.home.mendix.com/link/app/69/)

## 2 Configuration

After importing the module, connect the **QueueOverview** form to your application. This is the starting place for defining the different queues and processes. Add the **ASu_InitialiseQueue** microflow as a startup event to instantiate the queue. Before configuring the queue, you need to synchronize the * [Mx Model Reflection](https://appstore.home.mendix.com/link/app/69/) module, and make sure you sync the **ProcessQueue** as well.

Each microflow you configure here should have one input parameter of the **ProcessQueue.QueuedAction** type.

Of course, you will want to retrieve the object for which you have created a queuedAction, and the best way to do this is create an association from your object to the **QueuedAction** entity. This can either be a reference (set) with the default owner or the owner **both**, but try to prevent adding an association from **QueuedAction** to your entity. You should minimize the changes to this module.

In the microflow you configure in the queue, there should be a QueuedAction input parameter, using this parameter you can retrieve your object. In the **Example / Test** folder, you can find an example of how to queue an action.

## 3 Other

The constant: "FinishedQueuedActionsCleanupInDays" can be used to automatically clean up finished queued actions (through the scheduled event SE_CleanupFinishedQueuedActions): Negative value = disabled.0 = clear all finished actions1 or more = clear all finished actions that completed [1 or more] days ago.

Please note that (when dealing a large amount of actions in a short period of time): -> Create QueuedAction (no commit) -> add to list -> append to queue -> commit list of queued actions is inferior to: -> Create QueuedAction (commit) -> append to queue.

However both constructions should work now (tested batch sizes up to 10000 objects in size).

### 3.1 Automatic retry behavior

The module will keep retrying exponentially for up to 11 retries. Initial retry will have a delay of 1 second (2^0), the second retry will take (2^1) seconds and the nth retry (2^n-1) seconds for a maximum of 2^10 = 1024 seconds for a combined total of 2047 seconds (=34 minutes) which is excessive but finite on purpose. In tests even adding 10000 actions at once (batch commit) will only take 5 retries (and only the first action is affected). This is basically the time it takes the microflow doing the batch commit (of queued actions) to complete.