---
title: "Migrating Your Data"
parent: "mendix-on-the-mendix-cloud"
---
You are free to upload and download backups via the Cloud Portal. This is done via the "Backups" tab. Uploaded files (FileDocuments) and database dumps are separate.

## Database

Depending on where your data is at the moment, this can either be very easy or very tricky. The standard cloud currently uses Postgresql 9.2 or higher as a database (database dumps created with newer Postgresql versions are not readable by the cloud). Postgresql dumps can be uploaded and restored to your environment via the Cloud Portal. The command to create a dump in an acceptable format is as follows:

> pg_dump -O -x -F c

For more information on these flags, see [http://linux.die.net/man/1/pg_dump](http://linux.die.net/man/1/pg_dump)

## Uploaded Files

Uploaded files should contain the contents of the "files" directory in your deployment location. The root element should _not_ be "files" or "uploaded files", but contain the files directly. For instance, an empty database with one uploaded file would have a zip file containing only the following files:

> 00/
> 00/1
