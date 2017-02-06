---
title: "Expose a web service"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to expose a web service in your project. The related reference guide article can be found [here](/refguide4/published-web-services).

## Instructions

![](attachments/819203/917932.png) **Create the microflow you want to use for the web service, and define its input parameters and return type and variable. If you do not know how to do this, please refer to [this](add-an-activity-to-a-microflow) article.**

![](attachments/2621605/2752819.png)

The simple microflow in the screenshot above receives the number of an order as parameter, uses this number to retrieve the order object and returns the order status.

![](attachments/819203/917932.png) **Add a Published web service to your project. If you do not know how to add documents to your project, please refer to [this](add-documents-to-a-module) article.**

![](attachments/819203/917932.png) **Double-click on the published web service in the Project Explorer to start configuring it.**

![](attachments/819203/917932.png) **You can change the name of the published web service at 'Name', whereas 'Documentation' allows input of text describing the goal of the web service.**

![](attachments/2621605/2752818.png)

![](attachments/819203/917932.png) **Now click on the 'New' button to add an actual operation to the web service. The 'Name' and 'Documentation' options in the menu that pops up again allow you to enter a name and an explanation of what the operation does.**

![](attachments/2621605/2752817.png)

![](attachments/819203/917932.png) **Click the 'Select' button next to 'Microflow' to select the microflow the web service operation should execute.**

![](attachments/819203/917932.png) **The parameter area will now fill with the input parameters which should be passed to the microflow. You can put a check mark in the 'Optional' column to indicate if the parameter is required or not for the microflow to function. 'WSDL Name' allows you to change the name under which the parameter is known in the web service call.**

![](attachments/2621605/2752820.png)

If the parameters and return are not primitive but objects or lists of objects instead, please refer to the 'Advanced' section of this How To for additional explanation.

![](attachments/819203/917932.png) **In the 'Return value' section you can change the name under which the return value is known in the web service call at 'WSDL name'.**

![](attachments/819203/917932.png) **If you now run your application, you can find the web service documentation at [localhost:8080/ws-doc/](http://localhost:8080/ws-doc/) (provided the application is run locally).**

![](attachments/2621605/2752816.png)

![](attachments/819203/917932.png) **To allow the use of your published web service, add web service users to your application. If you do not know how to do this, please refer to [this](add-web-service-users) article.**

### Advanced

![](attachments/819203/917932.png) **If the parameters and return values for your published web service are not primitive but objects or lists of objects instead, additional configuration is required.**

![](attachments/819203/917932.png) **If the parameters the web service requires are (lists of) domain model objects, you can click the 'Edit' button next to the parameter to select which attributes of the entity, as well as associated entities and their attributes, should be passed to the web service.**

![](attachments/2621605/2752815.png)

![](attachments/819203/917932.png) **If the return of the published web service is an object or a list of objects, you can also press the 'Edit' button in the 'Return value' section to bring up a window which allows you to select which attributes of the entity you want to return, as well as associated entities and their attributes.**

![](attachments/2621605/2752814.png)
