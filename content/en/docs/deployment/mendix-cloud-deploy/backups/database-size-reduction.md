---
title: "Reducing Database Size"
url: /developerportal/operate/database-size-reduction/
weight: 50
description: "Describes how to restore physical disk space by creating and restoring a database backup."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Usually, the database of a Mendix application in Mendix Cloud grows over time. Here is a typical example:

{{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/database-size-reduction/Untitled.png" class="no-border" >}}

The data grows in a steady fashion. If entities are removed in a major release, you may see a temporary decrease in the size of the database—but on average, the database size tends to increase over time.

One reason for this growth is that the physical space on the hard disk is not freed up, even when you delete records from the database. Instead, the now-empty records are kept in place so that the space can be reused if new records are inserted into (created) the database. This is helpful because it means database records on the hard disk remain physically close to each other—which in turn means that disk read operations should perform better.

However, there may be times when physically reclaiming the lost space is important. For example, if you get an alert that 90% of your disk space is in use, you may want to reduce your disk usage.

## Recovering Physical Disk Space

You can recover physical disk space by creating a database backup and then restoring it.

A database restore does a full physical rewrite of the database. It compresses the database to contain just the current records. It also fully optimizes the physical placement of files on the actual hard disk to maximize the performance of disk read operations.

In the Mendix Portal, you can create and restore a backup on your app's **Backups** page. For more information, see [Creating a Backup](/developerportal/operate/create-backup/).

## Summary

To physically reclaim unused space that was created by deleting records from the database, you can use the Mendix Portal to back up and restore your database. However, keep in mind that this action might have limited benefits unless the database is not expected to grow back to its previous size.
