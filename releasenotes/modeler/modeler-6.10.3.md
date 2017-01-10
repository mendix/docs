---
title: "Modeler 6.10.3"
space: "Release Notes"
category: "Modeler"
---
***Date: January 9th, 2017***

{% modelerdownloadlink 6.10.3 %}

See also the [Mendix 6.10.0 Release Notes](modeler-6.10.0), [Mendix 6.10.1 Release Notes](modeler-6.10.1) and [Mendix 6.10.2 Release Notes](modeler-6.10.2).

## Fixes

*   We removed the deprecation messages in the Modeler about traversing associations from persistable entities to non-persistable entities, as this situation will not result in an error in Mendix 7.

*   When you connected to the internet using a proxy server that needed a username/password, it was not possible to sign in to the Modeler without first going to the **Preferences** dialog box to configure the proxy settings. This prevented some users from signing in, as the Modeler only allows you to open the **Preferences** dialog box after the first successful sign-in. Now, the proxy settings can be configured directly from the **Sign In** dialog box, resolving this catch-22\. (Ticket 45324)

*   After adding an `Autonumber` attribute on an entity that has specializations, existing objects were initialized with duplicate values for the new attribute. With this fix, the values will be unique. (Ticket 43598)

*   We fixed the incorrect XPath-to-SQL conversion that occurred in some cases of nested binary `OR` expressions with associations. (Tickets 38219, 47089)
*   We fixed a disturbing NullPointerException message that appeared in the browser when sorting the attributes of an associated entity that had "entity access" applied. The sorting itself has not changed. (Ticket 44233)

*   Hybrid apps no longer store any personal data on the device. (Ticket 47499)

*   Sometimes touch gestures were not handled properly for sidebar and drop-down menus in Mendix apps. We felt that was inappropriate, so we remedied that for you.
