---
title: "Tuning PostgreSQL Server Parameters"
url: /developerportal/deploy/mendix-on-azure/configuration/postgresql-parameter-tuning/
description: "Describes how to tune PostgreSQL server parameters for a Mendix on Azure cluster, and which parameters must not be changed."
weight: 50
---

## Introduction

Every Mendix on Azure cluster stores the data of all its Mendix app environments in a single shared Azure Database for PostgreSQL Flexible Server. You can change the server parameters of that server yourself, either in the Microsoft Azure Portal or with the Azure CLI. This is useful when the default configuration does not suit your workload, for example when complex [OQL](/refguide/oql/) queries spill sorts and hash joins to disk instead of keeping them in memory.

This document describes how to change these parameters, which parameters are safe to tune, and which parameters you must leave alone.

Tuning the database for your own apps is a customer responsibility under the [shared responsibility model for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/#shared-responsibility-model-for-mendix-on-azure). You choose the values, you validate them against your own workload, and you own the result. Mendix and Microsoft remain responsible for operating the underlying PostgreSQL service itself.

{{% alert color="warning" %}}
Azure role-based access control cannot grant write access to individual server parameters. As a result, you have write access to all PostgreSQL server parameters of the shared server, including parameters that can crash the server, cause data loss, or weaken its security posture. Mendix does not validate the values you set. Change only the parameters listed in [Parameters You Can Tune](#tunable), and never change the parameters listed in [Parameters You Must Not Change](#dangerous).
{{% /alert %}}

{{% alert color="info" %}}
If you are unsure whether a parameter not listed on this page can be safely changed, raise a support ticket through the Mendix on Azure Portal as described in [Support for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/#raising-support-tickets). Mendix processes these tickets on a best-effort basis.
{{% /alert %}}

## Prerequisites

Before you begin, make sure to fulfill the following prerequisites:

* Ensure that you have the Owner or Contributor role on the Mendix on Azure Managed Application, so that you can open the resources in the [Managed Resource Group of your Mendix on Azure environment](/developerportal/deploy/mendix-on-azure/configuration/#mrg).
* Ensure that you have a representative test cluster available. Validate every change there before you apply it to a production cluster.
* Ensure that you know which apps share the server. All app environments in the cluster use the same PostgreSQL server, so a parameter change affects all of them.

## Changing Parameters in the Microsoft Azure Portal {#portal}

To change a server parameter in the Microsoft Azure Portal, perform the following steps:

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com).
2. Go to the [Managed Resource Group of your Mendix on Azure environment](/developerportal/deploy/mendix-on-azure/configuration/#mrg).
3. Select the PostgreSQL server resource (type: Azure Database for PostgreSQL Flexible Server).
4. Go to **Settings > Server parameters**.
5. Search for the parameter name, set the new value, and click **Save**.

If the parameter requires a restart, the Azure Portal marks it as pending restart and the new value only takes effect after you restart the server.

{{% alert color="info" %}}
Restarting the PostgreSQL server interrupts all database connections from all app environments in the cluster. Plan restarts in a maintenance window. To request a fixed maintenance window for the server, raise a support ticket as described in [Configuring Mendix on Azure](/developerportal/deploy/mendix-on-azure/configuration/).
{{% /alert %}}

## Changing Parameters with the Azure CLI {#cli}

To set a parameter with the Azure CLI, use the following command:

```bash
az postgres flexible-server parameter set \
  --resource-group <resource-group> \
  --server-name <server-name> \
  --name work_mem \
  --value 131072
```

Memory parameters are expressed in kilobytes, so the value `131072` sets `work_mem` to 128 MB.

To check whether a parameter you changed is waiting for a server restart, use the following command:

```bash
az postgres flexible-server parameter show \
  --resource-group <resource-group> \
  --server-name <server-name> \
  --name max_worker_processes \
  --query isConfigPendingRestart
```

## Changing Parameters with SQL {#sql}

Some parameters can also be set from a PostgreSQL session, without modifying the server configuration. This takes effect immediately and affects nothing outside the session or role you change.

{{% alert color="info" %}}
Network access to the primary PostgreSQL server is restricted by [Network Security Group](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview) rules, as described in [Direct App Database Access](/developerportal/deploy/mendix-on-azure/configuration/direct-database-access/). If you cannot open a session against the server, use the [Microsoft Azure Portal](#portal) or the [Azure CLI](#cli) instead.
{{% /alert %}}

### Setting a Parameter for the Current Session

To set a parameter for the current session only, use the following statements:

```sql
SET work_mem = '128MB';
SET hash_mem_multiplier = 3.0;
SET max_parallel_workers_per_gather = 4;
```

### Setting a Parameter for a Database Role

To set a parameter for a database role, so that it applies to every new session opened by that role, use the following statements:

```sql
ALTER ROLE mendix SET work_mem = '128MB';
ALTER ROLE mendix SET hash_mem_multiplier = 3.0;
ALTER ROLE mendix SET max_parallel_workers_per_gather = 4;
```

### Verifying Values

To verify the values that are in effect, use the following statements:

```sql
SHOW work_mem;
SELECT name, setting, source FROM pg_settings WHERE source <> 'default';
```

{{% alert color="info" %}}
Only parameters with the `USERSET` context can be set with SQL. Parameters with a `SIGHUP` context, such as `max_parallel_workers`, and parameters with a `POSTMASTER` context, such as `max_worker_processes`, are server-level settings. Change those in the [Microsoft Azure Portal](#portal) or with the [Azure CLI](#cli). To see the context of a parameter, query `SELECT name, context FROM pg_settings WHERE name = '<parameter>';`.
{{% /alert %}}

## Parameters You Can Tune {#tunable}

The following parameters are validated for use on Mendix on Azure. The context of a parameter determines how you can change it and whether a restart is needed.

| Parameter | Context | How to Change | Restart Required |
| --- | --- | --- | --- |
| `work_mem` | `USERSET` | SQL, Azure Portal, or Azure CLI | No |
| `hash_mem_multiplier` | `USERSET` | SQL, Azure Portal, or Azure CLI | No |
| `max_parallel_workers_per_gather` | `USERSET` | SQL, Azure Portal, or Azure CLI | No |
| `max_parallel_workers` | `SIGHUP` | Azure Portal or Azure CLI | Only if you also raise `max_worker_processes` to accommodate the new value |
| `max_worker_processes` | `POSTMASTER` | Azure Portal or Azure CLI only, not SQL | Yes, always |
| `random_page_cost` | `USERSET` | SQL, Azure Portal, or Azure CLI | No |

{{% alert color="warning" %}}
The `max_worker_processes` parameter is a postmaster-context parameter. It cannot be set from a SQL session, and a new value only takes effect after a full restart of the PostgreSQL server, which drops the database connections of every app environment in the cluster. Raise it only when you have first confirmed that `max_parallel_workers` cannot be raised far enough without it, and only during a maintenance window.
{{% /alert %}}

### Recommended Values by Workload

The following values are starting points, not targets. Measure the effect on your own queries before you keep a value.

| Parameter | Transactional Apps | Reporting and Analytical Queries | Purpose |
| --- | --- | --- | --- |
| `work_mem` | 32-64 MB | 128-256 MB | Memory available per sort or hash operation before it spills to disk |
| `hash_mem_multiplier` | 2.0 | 3.0 | Multiplier applied to `work_mem` for hash-based operations |
| `max_parallel_workers_per_gather` | 2-4 | 4-8 | Parallel workers a single query may use |
| `max_parallel_workers` | 4 | 8-16 | Parallel workers available across all queries, capped by `max_worker_processes` |
| `max_worker_processes` | 8 (default) | 16 | Total background worker slots on the server, raise only to make room for a higher `max_parallel_workers` |
| `random_page_cost` | 1.1 | 1.1 | Cost estimate for random reads, lowered because the server uses SSD storage |

{{% alert color="warning" %}}
The `work_mem` parameter is allocated per sort or hash operation, not per connection, so a single query can consume several multiples of it and each parallel worker adds its own allocation. Keep `work_mem` multiplied by the expected number of concurrent connections and parallel workers per query well below half of the server memory. Setting `work_mem` too high is the most common cause of out-of-memory conditions on the shared server, which affects all app environments in the cluster.
{{% /alert %}}

## Parameters You Must Not Change {#dangerous}

{{% alert color="warning" %}}
Changing any of the parameters below can crash the shared PostgreSQL server, cause permanent data loss, break the automated nightly backups and the read replica, or weaken the security posture of the server. Mendix cannot restore data lost this way, and support requests caused by these changes fall outside the [Mendix support coverage](/developerportal/deploy/mendix-on-azure/support/#example-unsupported-scenarios) for Mendix on Azure.
{{% /alert %}}

| Parameter | Impact of Changing It |
| --- | --- |
| `shared_buffers` | Out-of-memory conditions and server crashes. The value is sized to the compute tier of the server. |
| `max_connections` | Memory exhaustion, or app environments that can no longer connect. The value is sized to the compute tier of the server. |
| `shared_preload_libraries` | Loads untrusted code into the server process at startup, and can prevent the server from starting at all. |
| `fsync`, `synchronous_commit` | Permanent and unrecoverable data loss if the server or the underlying host fails. |
| `wal_level` | Breaks the read replica and the automated backup and point-in-time restore capability of the server. |
| `max_wal_size`, `checkpoint_timeout` | Long recovery times after a failure, and unpredictable restart behavior. |

To change the compute tier or the storage performance tier of the server instead, use the **Edit Cluster** flow in the Mendix on Azure Portal, as described in [Configuring Mendix on Azure](/developerportal/deploy/mendix-on-azure/configuration/).

## Testing a Change

To measure whether a parameter change helps, perform the following steps:

1. Establish a baseline. In your SQL client, enable timing by running the following command:

    ```sql
    \timing on
    ```

2. Capture the query plan before the change by running the following command:

    ```sql
    EXPLAIN (ANALYZE, BUFFERS) SELECT ...;
    ```

3. Apply the tuning in the current session only by running the following command:

    ```sql
    SET work_mem = '128MB';
    SET max_parallel_workers_per_gather = 4;
    ```

4. Run the same query again and compare the execution time and the plan. Look for the disappearance of external merge or disk-based hash operations, and for the appearance of `Parallel` nodes in the plan.
5. Keep the change only if the improvement is repeatable across several runs. Then apply it at role level or at server level.

## Troubleshooting

The following section lists common outcomes and how to address them.

### Raising `Max_parallel_workers_per_gather` Does Not Increase Speed

The query is not faster after raising the value of the`max_parallel_workers_per_gather` parameter.

#### Solution

Run `SHOW max_parallel_workers;`. If it is `0` or too low, the server has no worker slots to hand out, and `max_parallel_workers` needs raising first. Confirm with `EXPLAIN` that the plan contains `Parallel` nodes at all, because not every query can be parallelized.

### Query Spills

The query still spills to disk.

#### Solution

Raise `work_mem` further in a session and re-run `EXPLAIN (ANALYZE, BUFFERS)`. Sort and hash nodes report whether they used memory or disk.

### Out-of-Memory Errors

Apps report out-of-memory errors or dropped connections after a change

#### Solution

Lower `work_mem` immediately and reset any other memory-related change. The shared server is used by every app environment in the cluster.

### Value Does Not Take Effect

A new value does not take effect.

#### Solution

Check whether the parameter is waiting for a restart, as described in [Changing Parameters with the Azure CLI](#cli).

### Undo Change

You need to undo a session, role, or server change.

#### Solution

Perform one of the following actions, depending on the type of change that you want to undo:

* To undo a change to the current session, run `RESET work_mem;`.
* To undo a role change, run `ALTER ROLE mendix RESET work_mem;`.
* To undo a server change, set the parameter back to its default value in **Settings > Server parameters** in the Microsoft Azure Portal.

## Best Practices

Apply the following practices when tuning server parameters:

* Change one parameter at a time, so that you can attribute any change in behavior to it.
* Test in a non-production cluster first, then at session level, then at role level, and only then at server level.
* Prefer session-level and role-level changes over server-level changes. They are reversible without a restart and they do not affect other app environments.
* Record the original value of every parameter you change, so that you can revert it.
* Monitor CPU, memory, and connection metrics for at least 24 hours after a change.
* Avoid parameter changes as a first response to slow queries. Missing indexes and inefficient OQL are more common causes, and fixing those in the app benefits every environment.

## Read More

* [Direct App Database Access](/developerportal/deploy/mendix-on-azure/configuration/direct-database-access/)
* [Support for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/)
* [Server parameters in Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-server-parameters)
* [Resource Consumption](https://www.postgresql.org/docs/current/runtime-config-resource.html)
