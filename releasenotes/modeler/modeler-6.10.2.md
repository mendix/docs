---
title: "Modeler 6.10.2"
space: "Release Notes"
category: "Modeler"

---
***Date: December 13, 2016***

{% modelerdownloadlink 6.10.2 %}

See also the [Mendix 6.10.0 Release Notes](modeler-6.10.0).

## Fixes

*   Data grids with date search fields no longer show 1/1/1970 when going back to the page. This would result in empty grids, as there usually will not be any data with that date. (Tickets 47523, 47513, 46553)
*   We fixed the issue with the license verification failure that occurred when the migration of a project took a long time. (Ticket 46729)
