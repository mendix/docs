---
title: "Modeler 6.10.2"
space: "Release Notes"
category: "Modeler"

---
***Date: December 13, 2016***

[![](attachments/download-button/download-button.png)](https://appstore.home.mendix.com/link/modeler/6.10.2)

See also the [Mendix 6.10.0 Release Notes](https://world.mendix.com/display/ReleaseNotes/6.10.0).

## Fixes

*   Data grids with date search fields no longer show 1/1/1970 when going back to the page. This would result in empty grids, as there usually will not be any data with that date. (Tickets 47523, 47513, 46553)
*   If the user tried to access a page without having the correct permissions, the user was logged out. Now the user stays logged in and can either try to sign in as a different user or navigate back to the home page.
*   We fixed the issue with the license verification failure that occurred when the migration of a project took a long time. (Ticket 46729)