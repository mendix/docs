---
title: "Association Storage Migration Time"
url: /refguide/association-storage-migration-time/
weight: 15
---

## Introduction

Mendix allows you to change [association storage type](/refguide/association-storage/) for many-to-one and one-to-one associations and switch between Association Tables (legacy option) or Direct Associations (recommended option). Changing the association storage type in an already deployed app leads to data synchronization which can take significant time depending on the amount of data in the database.

This page contains timings for an example association storage migration that can help you estimate data migration time for your app.

## Scenarios

We performed association storage type migration for associations in the domain model shown below:

{{< figure src="/attachments/refguide/runtime/data-storage/association-storage-migration-time/association-storage-model.png" alt="Test model for association storage migration - click to enlarge" class="no-border" >}}
(*Click the image to enlarge*)

This domain model was used to measure migration time for the following cases:

* **Many-to-one association:** Each of N objects of entity `Many` is associated to one of 10 objects of entity `ToOne`
* **One-to-one association:** Each of N objects of entity `One` is associated to one of N objects of entity `ToOne`
* **10 many-to-one associations in one entity:** Each of N objects of entity `Multiple` has 10 associations to objects of entities `Target01` to `Target10`. This means that there are 10*N associations being migrated.

For every database vendor, we ran migrations for 3 different values of N. For each such configuration, we executed the migration 10 times and measured the average migration time over those 10 runs.

## Measurements

All the time measurements are in seconds (s).

### PostgreSQL

|Associations per table (N)|Many to one|One to one|Many to one, 10 associations in one entity|
|-|-|-|-|
|20K|0.176 s|0.194 s|1.08 s|
|1M|8.3 s|9.2 s|38.1 s|
|20M|199 s|222 s|850 s|

{{< figure src="/attachments/refguide/runtime/data-storage/association-storage-migration-time/storage-migration-postgres.png" alt="Migration time measurements for PostgreSQL - click to enlarge" class="no-border" >}}
(*Click the image to enlarge*)

### SQL Server

|Associations per table (N)|Many to one|One to one|Many to one, 10 associations in one entity|
|-|-|-|-|
|20K|0.177 s|0.177 s|0.94 s|
|1M|8.3 s|8 s|42 s|
|20M|183 s|184 s|1013 s|

{{< figure src="/attachments/refguide/runtime/data-storage/association-storage-migration-time/storage-migration-mssql.png" alt="Migration time measurements for SQL Server - click to enlarge" class="no-border" >}}
(*Click the image to enlarge*)

### MySQL

|Associations per table (N)|Many to one|One to one|Many to one, 10 associations in one entity|
|-|-|-|-|
|20K|0.568 s|0.567 s|6.492 s|
|1M|19.9 s|22.8 s|295.1 s|
|20M|473 s|605 s|7318 s|

{{< figure src="/attachments/refguide/runtime/data-storage/association-storage-migration-time/storage-migration-mysql.png" alt="Migration time measurements for MySQL - click to enlarge" class="no-border" >}}
(*Click the image to enlarge*)

### SAP HANA

|Associations per table (N)|Many to one|One to one|Many to one, 10 associations in one entity|
|-|-|-|-|
|20K|0.132 s|0.148 s|1.17 s|
|1M|3.2 s|3 s|18.9 s|
|20M|23.1 s|27.9 s|184.7 s|

{{< figure src="/attachments/refguide/runtime/data-storage/association-storage-migration-time/storage-migration-saphana.png" alt="Migration time measurements for SAP HANA - click to enlarge" class="no-border" >}}
(*Click the image to enlarge*)
