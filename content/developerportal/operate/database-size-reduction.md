---
title: "Database Size Reduction"
parent: "backups"
menu_order: 50
description: "Describes how to restore physical disk space by creating and restoring a database backup."
tags: ["Mendix Cloud", "disk space", "disk size", "size reduction", "backup"]
---

## 1 Introduction

Usually. the database of a Mendix application in the Mendix Cloud will grow over time, as shown in this chart:

![](attachments/database-size-reduction/Untitled.png)

The data grows in a steady fashion. If entities are removed in a major releases, you may see a temporary decrease in the size of the database, but on average the direction will be upwards.

One reason for this growth is that the physical space on the hard disk is not freed up, even when you delete records from the database. Instead, the now empty records are kept in place so that the space can be reused if new records are inserted (created) into the database. This is helpful because it means database records on the hard disk remain physically close to each other, which in turn means disk read operations should perform better.

However, there may be times where physically reclaiming the lost space is important. For example, if you are alerted that 90% of your disk space is used, you may want to reduce your disk usage.

Let’s explore how to reclaim this space.

## 2 Recovering Physical Disk Space

Physical disk space can be recovered by creating a database backup, and then restoring it.

A database restore does a full physical rewrite of the database. It will compress the database to contain just the current records, and fully optimize the physical placement of files on the actual hard disk to maximize the performance of disk read operations.

You can create and restore a backup in the Mendix Developer Portal on the Deploy -> Backup page.

## 3 Summary

To physically reclaim currently unused space that was created by deleting records from the database, you can execute a backup and restore of the database in the Mendix Developer Portal. However, keep in mind that, unless the database is not expected to grow back to its previous size, the benefit of this action might be limited.

## 4 Read More

* [Mendix Cloud](../deploy/mendix-cloud-deploy)
