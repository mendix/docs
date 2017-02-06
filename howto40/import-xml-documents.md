---
title: "Import XML documents"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to map an XML document to a domain model entity with the help of an XML-to-domain mapping in a microflow. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=10420577).

## Instructions

![](attachments/819203/917932.png) **Create the XML-to-Domain mapping. If you do not know how to do this, please refer to [this](https://world.mendix.com/display/howto25/Configure+an+XML-to-Domain+mapping) article,**

![](attachments/819203/917932.png) **Open the microflow, or if necessary create a new one. If you do not know how to add documents to your project, please refer to [this](https://world.mendix.com/display/howto25/Add+documents+to+a+module) article.**

![](attachments/2621584/2752878.png)

Make sure that the XML document and (if necessary) the object that has to be passed to the XML-to-domain mapping as parameter are either created in the microflow or passed to it.

![](attachments/819203/917932.png) **Add an 'Import XML' activity to the microflow and double-click on it. If you do not know how to add activities to a microflow please refer to [this](https://world.mendix.com/display/howto25/Add+an+activity+to+a+microflow) article.**

![](attachments/2621584/2752877.png)

![](attachments/819203/917932.png) **In the menu that appears, select the XML document you want to map from using the drop-down menu at 'Input XML document'.**

![](attachments/2621584/2752876.png)

![](attachments/819203/917932.png) **At 'XML-to-domain mapping' you can press the 'Select' button next to 'Name' to bring up a new menu you can use to select the mapping you want to use.**

![](attachments/2621584/2752871.png)

![](attachments/819203/917932.png) **At 'Parameter' use the drop down menu to select the object you want to pass to the XML-to-domain mapping, if necessary.**

![](attachments/2621584/2752872.png)

[![](attachments/819203/917564.png)](import-xml-documents)[(Back to Top)](import-xml-documents)