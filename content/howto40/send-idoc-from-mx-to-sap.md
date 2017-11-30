---
title: "Send IDoc from Mendix to SAP"
parent: "sap-integration"
---
## Description

This section explains how to extend your model in such a way that the deployed application can send an IDoc to SAP.

## Instructions

Before you execute this scenario, execute the scenario to receive IDocs from SAP.
Then you can do the following:

 **In the Mx Client, modify (if you want) fields in the root segment, by double clicking a received IDoc and then modify the fields.**

 **In the Mx Client select the IDoc, and click the button 'microflow'**

 **In SAP, go to program bd87 (by typing /nbd87 in the command prompt at the left top of the SAP GUI)**

  **Click the execute button**

   **Expand IDoc in inbound processing : Application document posted, double click e.g. CREMAS**

   **Double click the IDoc number of the IDoc that you've received**

**Expand Data records, double click e.g. E1LFA1M**

**At the right of the screen you can see and scroll through the fields of the received IDoc**
