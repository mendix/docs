---
title: "Modeler 5.21.3"
space: "Release Notes"
category: "Modeler"

---


***Date: March 23, 2016***

See also the release notes for Mendix [5.21.0](modeler-5.21.0), [5.21.1](modeler-5.21.1) and [5.21.2](modeler-5.21.2).

{% modelerdownloadlink 5.21.3 %}

## Fixes

*   Fixed query string encoding for the next page url in OData response (Ticket 464950)
*   Fixed conditional visibility check in the Modeler that could cause the security check to fail (Ticket 464763)

## Known issues

*   Filedocument storage on S3 is not compatible with Java JDK 1.8.0 u60 and up.
*   When using File Documents (or specializations) as input parameter to an app service call, an error message is returned.