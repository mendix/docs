---
title: "Database Maintenance: Size Reduction"
category: "Mendix Support"
#parent: ""
#description: ""
#tags: []
---

## 1 Introduction

The average database of a Mendix application in the Mendix cloud looks something like this:

![](attachments/database-maintenance-size-reduction/Untitled.png)

The data grows in a steady fashion. Major releases where entities are removed can show a decrease in the size of the database, but on average the direction will always be upwards. This is not because the average application will never delete any records from the database. Which begs the question: why does the database size not go down? The primary reason for this is that even when you delete records from the database, the physical records on the hard disk are not removed. Instead, the now empty records are kept in place so that they can be reused once new records (of the same entity) are inserted (created) into the database. The main reason is that this ensures that records of the same entity are clustered together on a physical level on the hard disk, which means that results from a single query have a higher likelihood of being stored in the same physical place. This in turn means that the amount of physical seeking the hard disk has to do is minimized, improving read performance greatly.

There might be instances where physically reclaiming the lost space is important. There are two standard ways to decrease the database size:

1.  Issue the **VACUUM FULL** command.
2.  Creating a backup of the database and restoring that backup.

Let’s explore both options.

## 2 Options

### 2.1 Option 1: The VACUUM FULL Command

This is a simple command that can be issued through an SQL query. Instead of doing something like:

``SELECT * FROM myTable WHERE someNumber > 25;``

You would do:

``VACUUM FULL;`` for the whole database

or

``VACUUM FULL mytable;`` for a single table

But what exactly does ``VACUUM FULL`` do? This is answered in the official [PostgreSQL documentation](https://www.postgresql.org/docs/current/static/sql-vacuum.html).

  > _VACUUM FULL_ _rewrites the entire contents of the table into a new disk file with no extra space, allowing unused space to be returned to the operating system. This form is much slower and requires an exclusive lock on each table while it is being processed._

  > _Selects "full" vacuum, which can reclaim more space, but takes much longer and exclusively locks the table. This method also requires extra disk space, since it writes a new copy of the table and doesn't release the old copy until the operation is complete. Usually this should only be used when a significant amount of space needs to be reclaimed from within the table._

The reasoning behind writing a completely new copy of the table instead of simply deleting and freeing up the now no longer existing records while leaving behind the still existing records is again the same, keeping records of the same entity clustered together to maximize read performance.

So why do we not issue the ``VACUUM FULL`` automatically every night on all of our Mendix Cloud slots? The primary reason is the _exclusive lock_, as this means the table cannot be altered until the operation is done. This might seriously impact any on-going business processes the application is trying to execute. The second reason is found in the official documentation as well:

  > _The_ _FULL_ _option is not recommended for routine use, but might be useful in special cases. An example is when you have deleted or updated most of the rows in a table and would like the table to physically shrink to occupy less disk space and allow faster table scans._ _VACUUM FULL_ _will usually shrink the table more than a plain_ _VACUUM_ _would._

_So if I want to reclaim the space of deleted records in my database I simply issue the ``VACUUM FULL`` command on my database?_

Well no, because you currently do not have the ability to issue SQL commands to the database from within the Mendix Cloud Portal.

_Okay, so then I could backup the database in the Mendix Cloud, restore it locally, issue the ``VACUUM FULL`` command, backup the database locally and restore it in the Mendix Cloud to free up the disk space?_

While this is correct, there is no real reason to do this because of option 2.

### 2.2 Option 2: Creating And Restoring A Backup Of The Database

You can create and restore a backup in the Mendix Cloud Portal on the Deploy -> Backup page. So why is there no real reason to issue a ``VACUUM FULL`` command when you backup and subsequently restore the database? Because a database restore does a full physical rewrite of the database and only includes all “living” records. An advantage of a backup and restore compared to a ``VACUUM FULL`` is that, since it does a full rewrite of the entire database, it can also optimize the whole database at once (for example, optimize the physical clusters to ensure maximum performance).

## 3 Paradox

Both options require roughly the same amount of free disk space as the table (in case of a ``VACUUM FULL myTable;`` command) or the whole database holds to complete the operation itself. This means that if you want to restore a three gigabyte database, you need 6 gigabytes of disk space. So if you decide at 90% disk usage that it becomes very important to physically reclaim the lost space, you might not be able to complete the operation (``VACUUM FULL`` or restore and backup) due to a lack of disk space. Hence the paradox.

## 4 Conclusion

The only reason to use either the ``VACUUM FULL`` or restore and backup option is to physically reclaim lost space of a table (records of the same entity) that was once very large but has drastically been reduced in size (deleted records) **and which you do no longer expect to grow back to (nearly) its previous size in the future**. As in that case, and in that case only, leaving the deleted records in place to be reused makes no sense anymore.
