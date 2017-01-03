---
title: "Modeler 6.9.1"
space: "Release Notes"
category: "Modeler"

---
***Date: October 6, 2016***

[![](attachments/download-button/download-button.png)](https://appstore.home.mendix.com/link/modeler/6.9.1)

See also the [Mendix 6.9.0 Release Notes](https://world.mendix.com/display/ReleaseNotes/6.9.0).

## Fixes

*   We fixed an issue that caused deadlocks in the server's internal threading system when dependent actions were sent to the server with very high frequency within the same user session. The cases from the referred tickets involved a call to `currentUser` in a microflow, which resulted in the dependent action of retrieving that user from the database. Those calls were executed from the web client in very high volume within one user session. (Tickets 45387, 45317)