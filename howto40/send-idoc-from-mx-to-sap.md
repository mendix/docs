---
title: "Send IDoc from Mx to SAP"
parent: "sap-integration"
space: "Mendix 4 How-to's"
---
## Description

This section explains how to extend your model in such a way that the deployed application can send an IDoc to SAP.

## Instructions

Before you execute this scenario, execute the scenario to receive IDocs from SAP.
Then you can do the following:

![](attachments/819203/917932.png) **In the Mx Client, modify (if you want) fields in the root segment, by double clicking a received IDoc and then modify the fields.**

![](attachments/819203/917932.png) **In the Mx Client select the IDoc, and click the button 'microflow'**

![](attachments/819203/917932.png) **In SAP, go to program bd87 (by typing /nbd87 in the command prompt at the left top of the SAP GUI)**

     ![](attachments/819203/917932.png) **Click the execute button**

          ![](attachments/819203/917932.png) **Expand IDoc in inbound processing : Application document posted, double click e.g. CREMAS**

          ![](attachments/819203/917932.png) **Double click the IDoc number of the IDoc that you've received**

               ![](attachments/819203/917932.png) **Expand Data records, double click e.g. E1LFA1M**

               ![](attachments/819203/917932.png) **At the right of the screen you can see and scroll through the fields of the received IDoc**
