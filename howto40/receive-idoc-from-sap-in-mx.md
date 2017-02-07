---
title: "Receive IDoc from SAP in Mx"
parent: "sap-integration"
space: "Mendix 4 How-to's"
---
To learn how you can receive IDocs from SAP into Mendix, you can execute the following scenario.
(To make the total scenario, including sending IDocs from Mendix to SAP, as short as possible, the steps below include some steps for sending IDocs from Mendix to SAP.)

![](attachments/819203/917932.png) Make sure that you have installed and configured the SAP GUI.

To let the modeler know the structure of the IDoc that you want to receive:
![](attachments/819203/917932.png) **In the Project Explorer, right click a module, and choose Add > SAP IDoc Type**
This opens the Select IDoc type dialog, in which you do the following:

    To enable the modeler to find you SAP system:
     ![](attachments/819203/917932.png) **Click button 'SAP Connection Settings...'**
    This opens the Project settings tab SAP (Modeler), in which you:

         ![](attachments/819203/917932.png) **Type the username and password of your SAP system**
        For the Mendix demo/test SAP system these are idadmin and ides

         ![](attachments/819203/917932.png) **If you use a SAP system other than the Mendix demo/test SAP system, adapt the host name etc.**

         ![](attachments/819203/917932.png) **Click OK**

     ![](attachments/819203/917932.png) **Click button 'Show the IDoc types that are available in your SAP system'**

         ![](attachments/819203/917932.png) **In the filter box type e.g. CREMAS01**

         ![](attachments/819203/917932.png) **Click OK**
        Now you have imported the SAP IDoc type into your model.

Create a mapping for the IDoc type:
![](attachments/819203/917932.png) **In the Project Explorer, right click a module, and choose Add > External schema to domain mapping, type a name if you like, and click OK**

     ![](attachments/819203/917932.png) **Click the button 'Select external elements...'**

         ![](attachments/819203/917932.png) **Click the button 'Select...' for SAP IDoc Type, and double click the IDoc type that you want to map.**

         ![](attachments/819203/917932.png) **Click button 'Expand all'**

         ![](attachments/819203/917932.png) **Click button 'Check all'**

         ![](attachments/819203/917932.png) **Click OK**

     ![](attachments/819203/917932.png) **Click button 'Generate missing entities and mappings'**
Now you have a complete mapping for your IDoc Type.

The next step is to create an SAP IDoc server which can receive IDocs from SAP:
![](attachments/819203/917932.png) **In the Project Explorer, right click a module, and choose Add > Published SAP rfc server, if you want type a name, and click OK**

     ![](attachments/819203/917932.png) **For the Mapping click button 'Select...', and double click the mapping that you just created.**

![](attachments/819203/917932.png) **Double click the HomeForm, and on it create a data grid for the IDoc type entity (e.g. MyFirstModule.IDoc_CREMAS01)**

     ![](attachments/819203/917932.png) **Generate a form for the New (and thus also Edit) button**

          ![](attachments/819203/917932.png) **On this NewEdit form add a row, and in it create a data view for the root segment type (e.g. E1LFA1M)**

Create an export mapping:
![](attachments/819203/917932.png) **Right click a module, choose Add > Domain to external schema mapping, ev. type a name, click OK**

     ![](attachments/819203/917932.png) **Click button Select external elements..., double click your SAP IDoc Type, Expand all, Check all, OK**

          ![](attachments/819203/917932.png) **Click button 'Generate missing elements and mappings'**

![](attachments/819203/917932.png) **On the HomeForm right click the button bar, Add button > Microflow**

     ![](attachments/819203/917932.png) **For this button create a new microflow**

          ![](attachments/819203/917932.png) **In this microflow create an activity of type Send IDocs to SAP**

               ![](attachments/819203/917932.png) **For this activity select your export mapping, the input variable and the message type (e.g. CREMAS). Then click OK.**

![](attachments/819203/917932.png) **In the project settings, tab SAP (Runtime), give the username and password.**
For the Mendix demo/test system these are ALEREMOTE and ides

![](attachments/819203/917932.png) **Run your project.**

![](attachments/819203/917932.png) **When your project is running, set the log level for SAP to trace.**

![](attachments/819203/917932.png) **In SAP, go to program bd14**

     ![](attachments/819203/917932.png) **For Account number of Vendor click in the edit box, click the button beside it, Click the green checkmark, double click any vendor**

          ![](attachments/819203/917932.png) **Click in the edit box of message type, click the button beside it, double click e.g. CREMAS**

          ![](attachments/819203/917932.png) **Click in the edit box of Target system, click the button beside it, double click the system which starts with Mx**

     ![](attachments/819203/917932.png) **Click the run button (with the clock icon)**

Now in the mx runtime trace window you should see that it receives the IDoc.

When it has received it, in the mx client you can refresh, and see the received IDoc(s).
