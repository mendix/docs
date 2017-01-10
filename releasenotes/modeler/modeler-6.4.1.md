---
title: "Modeler 6.4.1"
space: "Release Notes"
category: "Modeler"

---

***Date: April 14, 2016***

See also the release notes for Mendix [6.4.0](modeler-6.4.0).

{% modelerdownloadlink 6.4.1 %}

## Improvements

*   Users with the System.Administrator role can now always log in, even when the number of users has exceeded the number specified in the license. Previously only the user with the Administrator name, MxAdmin by default, could log in. This user is not available on sandboxes however. (Ticket 465382)

*   The Administrator (MxAdmin), which is created by default, does not count towards the user limit anymore.

## Fixes

*   Fixed issue when MTOM attachment reference in XML had xmime:contentType attribute even if it was not provided by export mapping (Ticket 374374, 463341, 464052, 465254)

*   Upgraded the PostgreSQL JDBC driver from version 9.4-1206 to 9.4-1208\. This solves the exception 'prepared statement "S_2" does not exist in batch executions' when committing a list of new objects.

## Known issues

*   When creating a new 'Call Web Service' action in a microflow an 'Oops!' window is shown with an error. To create a 'Call Web Service' action in a microflow, first create a 'Consumed Web Service' and then drag the created 'Consumed Web Service' into the microflow.

*   When using File Documents (or specializations) as input parameter to an app service call, an error message is returned. This is fixed in Mendix 6.5
*   Filedocument storage on S3 is not compatible with Java JDK 1.8.0 u60 and up.