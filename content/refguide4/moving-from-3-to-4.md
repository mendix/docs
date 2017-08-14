---
title: "Moving from 3 to 4"
---
Please read the [Release Notes](release-notes) to see what new major improvements we added in the version 4 release.

This documentation aims to help you to update your project from version 3 to version 4\. It contains the following topics:

*   [Converting your project](moving-from-3-to-4): this section describes how to prepare for the conversion and convert your project to version 4.
*   [Important changes](moving-from-3-to-4): this section describes important changes from version 3 to version 4.

## Converting your project

Before converting your project we advise you to look at the following points.

### Backup Project

If you are not using the team server, make a backup of your project. Check that the backup was successful by opening the project.

{{% alert type="success" %}}

Really make a backup!

{{% /alert %}}

### Convert to latest 3.x.

Convert your project to the latest version of 3\. At the time of writing the latest version is 3.3.8.

### Fix errors and warnings

Fix errors and warnings as far as possible. Take special note of the 'Deprecated' warnings. Features that are deprecated in version 3 will be completely gone in version 4.

### Converting!

Now you are ready to convert. Simply open your project in the new version 4 modeler and you can choose to convert your project. It is **strongly** recommended to open your project in **Mendix 4.5** or higher, due to an improved migration procedure. If it is needed for you to migrate to Mendix 4.4.* or earlier, please contact Mendix Support to inform you about possible issues with file migrations in your case.

{{% alert type="warning" %}}

If you migrate your database separately from your files, the files and database will be out of sync after the migration. The same problem occur if you execute the database synchronisation SQL script manually. This can mean that FileDocument objects in the database point to the wrong files!

Another problem is that migration to a version before Mendix 4.5 can lead to a huge amount of files to be renamed, which can cause large backup sizes.
In Mendix 4.5, these problems cannot occur anymore.

{{% /alert %}}

## Migrating your database

The Enterprise Integration features introduced in version 4 feature a more efficient database format for storing your application data. As a consequence, the entire application database will be converted when first running the application in version 4\. This conversion process can take a long time (sometimes hours), depending on the size of your database. Additionally, the process can take up a significant amount of disk space, 2 to 4 times as much as your current database (for data and log files). This extra space can mostly be regained (see note)

{{% alert type="warning" %}}

After converting your _production_ database (which is probably also the largest), for PostgresSQL and SQL Server it is recommended to make a backup of your data and restore it immediately. This "resets" the database so that extra space reserved during the conversion process will be released.
For SQL Server, a shrink of the database may be enough.

{{% /alert %}}

Though it is possible to migrate from Mendix 2.5 to Mendix 4, to reduce the chance of database errors, it is safer to upgrade model and production database from 2.5 to 4.* with no changes made in the application model. After that migration, model changes will be safely handled. The reason for this is that the migration from 2.5 uses the legacy 2.5 synchronization process which could not handle each model change correctly. After having converted the database to Mendix 3.* or 4.*, each model change is handled correctly.

## Important changes

### Deprecated persistent create and persistent new buttons.

**Persistent create in a microflow.**

When you convert a project, all existing create actions are deprecated. This will give you one warning. Right-clicking the warning allows you to find all occurrences of the create action and it offers a quick conversion.

The old (persistent) create immediately inserted an object in the database. The new create action only creates the object in memory. In obscure cases you can detect the different between the old and the new create action. For example, if you look at the database after the create action but before a corresponding commit action, the object will not be in the database if you used the new create action. Because we cannot guarantee 100% backward compatibility we do not convert the persistent create actions automatically.

You cannot introduce new persistent create actions. You can only make the new create action.

**Persistent 'New' button on grids.**

All New buttons in a converted project are "persistent New buttons". The persistent New button creates an object and stores it in the database immediately. The new 'New' button only creates an object in memory.

A warning indicates the existence of persistent 'New' buttons. Right-clicking this warning shows you options to find all persistent New buttons and to convert them all to new 'New' buttons. Just like with microflow create actions, you only notice the difference between the old and the new 'New' button if you inspect the database after the create (and before a commit) and expect the object to be there.

### Java programming and batching

In version 4 we deprecated the batch classes in Java actions. The reason for this is that regular creates, deletes and commits are just as fast now and the batch classes added no additional functionality. Everything works just as well in a microflow now. You can simply retrieve a number of objects with a limit and offset, change them and commit them all, and repeat this as often as necessary.

### Garbage collection.

Due to the new garbage collection mechanism, you may need to make changes to how objects are retained in memory in certain complex Java actions involving for example threads or static maps with identifiers. Please have a look at [Garbage collection](garbage-collection). If you are currently using the Community Commons module, we suggest you update this module as well.

### Java API changes

The identifier mechanism has changed quite a bit and some changes had to be made to the IMendixIdentifier interface. The getObjectStoreId() method has been removed altogether as it no longer returned any valid value. The getGuid() method has been deprecated and replaced by toLong(), the getObjectTypeHash() method has been deprecated and replaced by getEntityId()
