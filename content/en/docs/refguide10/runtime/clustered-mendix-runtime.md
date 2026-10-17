---
title: "Clustered Mendix Runtime"
url: /refguide10/clustered-mendix-runtime/
weight: 40
description: "Describes the cluster functionality of the Mendix Runtime, which allows you to set up your Mendix application to run behind a load balancer to enable a failover and/or high availability architecture."
---

## Introduction

This page describes the behavior and impact of running Mendix Runtime as a cluster. Using the cluster functionality, you can set up your Mendix application to run behind a load balancer to enable a failover and/or high availability architecture.

The main feature enabling clustering is Mendix's stateless runtime architecture. This means that the dirty state (the non-persistable entity instances and not-yet-persisted changes) are stored on the client and not on the server. This enables much easier scaling of the Mendix Runtime, as each cluster node can handle any request from the client. The stateless runtime architecture also allows for better dirty state maintainability and better insight in application state.

## Clustering Support

Clustering support is built natively into our Cloud Foundry buildpack implementation. This means that you can simply scale up using Cloud Foundry. The buildpack ensures that your system automatically starts behaving as a cluster.

Clustering is also supported on Kubernetes, but you will have to use a *StatefulSet*.

## Cluster Infrastructure

The Mendix Runtime cluster requires the following infrastructure:

{{< figure src="/attachments/refguide10/runtime/clustered-mendix-runtime/16844074.png" class="no-border" >}}

This means that a Mendix cluster requires a load balancer to distribute the load of the clients over the available Runtime cluster nodes. It also means that all the nodes need to connect to the same Mendix database, and the files need to be stored on S3 (for details, see the [File Storage](#file-storage) section below). The number of nodes in your cluster depends on the application, the high availability requirements, and its usage.

## Cluster Leader and Cluster Followers{#cluster-leader-follower}

How database synchronization is coordinated across cluster nodes depends on how Mendix Runtime is started:

* **Leader-based startup** – Used when the Runtime is started through the administrative API. This is how most managed deployments, including the Cloud Foundry buildpack, SAP BTP, and an on-premises installation managed with the Mendix Service Console, start the app. In this model, exactly one node is the *cluster leader* and the other nodes are *cluster followers*. The cluster leader performs the initial database synchronization with Domain Model changes and clears persistent sessions after a new deploy; see [Cluster Startup](#cluster-startup) below. Which node is the cluster leader is controlled with the `com.mendix.core.isClusterSlave` custom setting (see [Runtime Customization](/refguide10/custom-settings/#commendixcoreisClusterSlave)).
* **Leaderless startup** – Used when the Runtime is started directly from a configuration file instead of through the administrative API. [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/) (previously called Portable App Distribution, or PAD) always runs this way: its start script always launches the Runtime with a configuration file. In this model, there is no cluster leader. Database synchronization is coordinated using a database lock: whichever node acquires the lock performs the synchronization while the other nodes wait. The `com.mendix.core.isClusterSlave` setting has no effect in this model and is ignored. Persistent sessions are not explicitly cleared as a separate deploy step in this model; they are left to expire normally, as described in [Sessions Are Always Persistent](#sessions-are-always-persistent) below.

{{% alert color="info" %}}
If you deploy manually using the Mendix Service Console (or another on-premises installation managed through the administrative API), you are responsible for configuring the cluster leader yourself: set `com.mendix.core.isClusterSlave` to `true` on every node except one. This setting does not apply to [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/): it is always started from a configuration file, so it always uses the leaderless startup model, and `isClusterSlave` has no effect there.
{{% /alert %}}

Besides the startup activities described above, Mendix Runtime nodes also perform the following recurring cluster management activities. These run independently of the leader-based or leaderless startup model, and are not tied to a single designated node:

* **Session cleanup handling** – each node expires its own sessions from its local cache (meaning, not being used for a configured timespan); removing expired sessions from the database is handled by an arbitrary cluster node, based on when each session was last active
* **Cluster node expiration handling** – every node independently removes other cluster nodes that have expired (meaning, not giving a heartbeat for a configured timespan)
* **Background job expiration handling** – removing data about background jobs after the information has expired (meaning, older than a specific timespan) is handled by an arbitrary cluster node
* **Unblocking blocked users** is handled by an arbitrary cluster node
* **Cleanup of unreferenced files** – each node removes its own file documents that were deleted, replaced, or never committed; cleaning up files left behind by a crashed node is handled by an arbitrary cluster node
* **Executing Scheduled Events** – scheduled events are executed by an arbitrary cluster node; for details, see [Task Queue](/refguide10/task-queue/)

## Cluster Startup {#cluster-startup}

Individual nodes in a cluster can be started and stopped with no impact on the uptime of the app. However, when you deploy a new version of the app, the whole cluster is restarted, and the database may need to be synchronized with the updated Domain Model, as described in [Cluster Leader and Cluster Followers](#cluster-leader-follower) above. This means that there might be some downtime while this is done.

Once database synchronization has finished, all the cluster nodes become fully functional. If no database synchronization is required, all the cluster nodes become fully functional directly after startup.

## File Storage {#file-storage}

Uploaded files should be stored in a shared file storage facility, as every Mendix Runtime node should access the same files. Either the local storage facility is shared or the files are stored in a central storage facility such as an Amazon S3 file storage, Microsoft Azure Blob storage, or IBM Bluemix Object Storage. 

For more information about configuring the Mendix Runtime to store files on these storage facilities, see [Runtime Customization](/refguide10/custom-settings/).

## After-Startup and Before-Shutdown Microflows {#startup-shutdown-microflows}

It is possible to configure `After-Startup` and `Before-Shutdown` microflows in Mendix. In a Mendix cluster, this means that those microflows are called per node. This lets you register request handlers and other activities. However, doing data changes during these microflows is strongly discouraged, because it might impact other nodes of the same cluster. There is no possibility to run a microflow on cluster startup or shutdown.

## Cluster Limitations

### Microflow Debugging

While running a multi-node cluster, you cannot predict the node on which a microflow will be executed. Therefore, it is not possible to debug such a microflow execution in a cluster from Mendix Studio Pro. However, you can still debug a microflow while running a single instance of the Mendix Runtime.

### Cluster-Wide Locking (Guaranteed Single Execution)

Some apps require a guaranteed single execution of a certain activity at a given point in time. In a single-node Mendix Runtime, this can be guaranteed with a JVM-local lock, but a JVM-local lock cannot coordinate across the separate JVMs that make up a cluster.

If the activity can be modeled as a microflow or Java action, you can guarantee it runs on only one node at a time by using a [Task Queue](/refguide10/task-queue/) with a cluster-wide scope and a single thread; see [Limitations](/refguide10/task-queue/#limitations) in *Task Queue*. Keep in mind that this is an at-least-once guarantee rather than a strict exactly-once guarantee: if the node running the task fails, another node picks it up and reruns it, so the activity should be idempotent. For details, see [Behavior If App Stops Unexpectedly](/refguide10/task-queue/#behavior-if-app-stops-unexpectedly) in *Task Queue*.

For other cases, for example holding a lock for an arbitrary duration around work that cannot be modeled as a queued task, Mendix Runtime does not provide a cluster-wide locking mechanism; you need to use an external distributed lock manager. Keep in mind that locking in a distributed system is complex and prone to failure (for example, through lock starvation or lock expiration).

{{% alert color="info" %}}
The **Disallow** property in the [Concurrent Execution Section](/refguide10/microflow/#concurrent) of a microflow is implemented as a JVM-local lock. It prevents the microflow from being executed more than once at the same time on a single node, but it does not prevent the same microflow from running concurrently on different nodes of a cluster. To guarantee single execution across the cluster, use a cluster-wide Task Queue instead, as described above.
{{% /alert %}}

## Dirty State in a Cluster

When a user signs in to a Mendix application and starts going through a certain application flow, the system can temporarily retain some data while not persisting it yet in the database. The data is retained in the Mendix Client memory and communicated on behalf of the user to a Mendix Runtime node.

For example, imagine you are booking a vacation through a Mendix app with a flight, hotel, and rental car. In the first step, you select and configure the flight, in the second one your hotel, in the third your rental car, and in the final step, you confirm the booking and payment. Each of these steps could be in a different screen, but when you go from step one to step two, you would still like to remember your booked flight. This is called the "dirty state." The data is not finalized yet, but should be retained between different requests. Because it is necessary to reliably scale out and support failover scenarios, the state cannot be stored in the memory of one Mendix Runtime node between requests. Therefore, the state is returned to the caller (the Mendix Client) and added to subsequent requests, so that every node can work with that state for those requests.

The following image describes this behavior:

{{< figure src="/attachments/refguide10/runtime/clustered-mendix-runtime/16844072.png" class="no-border" >}}

Reading objects and deleting (unchanged) objects from the Mendix database is still a "clean state." Changing an existing object or instantiating a new object will create "dirty state." Dirty state needs to be sent from the Mendix Client to the Mendix Runtime with every request. Committing objects or rolling back will remove them from the dirty state. The same will happen if an instantiated or changed object is deleted. Non-persistable entities are always part of the dirty state.

Only the dirty state for requests that originate from the Mendix Client (both synchronous and asynchronous calls) can be retained between requests. For all other requests—such as scheduled events, web services, or background executions—the state only lives for the current request. After that, the dirty state either has to be persisted or discarded. The reason for only allowing Mendix Client requests to retain their dirty state is that this is currently the only channel that works with actual user input. User input requires more interaction and flexibility with the data between requests. By only allowing these requests to retain their dirty state, the load on the Mendix Runtime and the external source is minimized, and performance is optimized.

{{% alert color="info" %}}
Whenever the Mendix Client is restarted, all the state is discarded, as it is only kept in the Mendix Client memory. The Mendix Client is restarted when reloading the browser tab (for example, when pressing <kbd>F5</kbd>) or explicitly signing out.
{{% /alert %}}

The more objects that are part of the dirty state, the more data has to be transferred in the requests and responses between the Mendix Runtime and the Mendix Client. As such, this has an impact on performance. In clustered environments, it is advised to minimize the amount of dirty state to minimize the impact of the synchronization on performance.

The Mendix Client attempts to optimize the amount of state sent to the Mendix Runtime by only sending data that can potentially be read while processing the request. For example, if you call a microflow that gets `Booking` as a parameter and retrieves `Flight` over association, then the client will pass only `Booking` and the associated `Flight`s from the dirty state along with the request, but not the `Hotel`s. Note that this behavior is the best effort; if the microflow is too complex to analyze (for example, when a Java action is called with a state object as a parameter), the entire dirty state will be sent along. This optimization can be disabled via the [Optimize network calls](/refguide10/app-settings/#optimize-network-calls) app setting.

{{% alert color="warning" %}}
It is important to realize that when calling external web services in Mendix to fetch external data, the responses of those actions are converted into Mendix entities. As long as they are not persisted in the Mendix database, they will be part of the dirty state and have a negative impact on the performance of the application. To reduce this impact, this behavior is likely to change in the future.
{{% /alert %}}

To reduce the performance impact of large requests and responses, an app developer should be aware of the following scenarios that cause large requests and responses:

* A microflow that creates a large number of non-persistable entities and shows them in a page
* A microflow that calls a web service to retrieve external data and convert them to non-persistable entities
* A page that has multiple microflow data source data views, each causing the state transferred to the Mendix Runtime to handle the microflow

{{% alert color="warning" %}}
To make sure the dirty state does not become too big when the above scenarios apply to your app, it's recommended to explicitly delete objects when they are no longer necessary, so that they are not part of the state anymore. This frees up memory for the Mendix Runtime nodes to handle requests and improves performance.
{{% /alert %}}

## Associating Entities with `System.Session` or `System.User`

The `$currentSession` *Session* object is available in microflows so that a reference to the current session can easily be obtained. When an object needs to be stored, its association can be set to `$currentSession`, and when the object needs to be retrieved again, `$currentSession` can be used as a starting point from which the desired object can be retrieved by association. The associated object can be designed so that it meets the desired needs. This same pattern applies to entities associated with `System.User`. In that case, you can use the `$currentUser` *User* object.

{{< figure src="/attachments/refguide10/runtime/clustered-mendix-runtime/2018-03-01_17-49-15.png" class="no-border" >}}

For example, you can add `Key` and `Value` members to a `Data` entity associated with `System.Session` (and have constants for key values).

{{< figure src="/attachments/refguide10/runtime/clustered-mendix-runtime/2018-03-01_17-42-38.png" class="no-border" >}}

The `Value` values can easily be obtained by performing a find on the `Key` values of a list of `Data` instances.

{{< figure src="/attachments/refguide10/runtime/clustered-mendix-runtime/2018-03-01_17-56-37.png" class="no-border" >}}

{{% alert color="warning" %}}
When data is associated to the current user or current session, it cannot be automatically garbage-collected. As such, this data will be sent with every request to the server and returned by the responses of those requests. Therefore, associating entity instances with the current user and current session should be done when no other solutions are possible to retain this temporary data.
{{% /alert %}}

## Sessions Are Always Persistent

To support seamless clustering, sessions are always persisted in the database. In previous versions, this was a known performance bottleneck. Mendix now contains optimizations to mitigate this performance hit.

Roundtrips to the database for this purpose are reduced by giving the persistent sessions a maximum caching time of thirty seconds (by default). This means that after signing out of a session, the session might still be accessible for thirty seconds on other nodes of the cluster, but only if that node has handled a previous request on that session just before the logout happened. This timeout can be configured. Lowering it makes the cluster more secure, because the chance that the session is still accessible within the configured time window is smaller. However, this also requires more frequent roundtrips to the database (which impacts performance). Increasing the timeout has the opposite effect. This can be configured by setting `SessionValidationTimeout` (value in milliseconds).

Persistent sessions also store a last-active date upon each request. To improve this particular aspect of the performance, the last-active date attribute of a session is no longer committed to the database immediately on each request. Instead, this information is queued for an action to run at a configurable interval to be stored in the Mendix database. This action verifies whether the session has not been logged out by another node and whether the last active date is more recent than the one in the database. The interval can be configured by setting `ClusterManagerActionInterval` (value in milliseconds).

{{% alert color="warning" %}}
Overriding the default values for the `SessionTimeout` and `ClusterManagerActionInterval` custom settings can impact the behavior of "keep alive" and result in an unexpected session logout. The best practice is to set the `ClusterManagerActionInterval` to half of the `SessionTimeout` so that each node gets the chance to run the clean-up action at least once during the session time out interval.
{{% /alert %}}
