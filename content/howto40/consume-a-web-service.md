---
title: "Consume a Web Service"
parent: "integration"
---
## Description

This section describes how to consume a Web Service in your project. The related reference guide article can be found [here](/refguide4/imported-web-services).

## Instructions

 **Add an Imported Web Service to your project. If you do not know how to add documents to your project, please refer to [this](add-documents-to-a-module) article.**

 **Double-click on the imported Web Service in the Project Explorer to start configuring it.**

 **You can change the name of the published Web Service at 'Name', whereas 'Documentation' allows input of text describing the design purpose of the Web Service.**

![](attachments/2621626/2752987.png)

 **At 'WSDL' under 'Web service description', choose the WSDL to be used for this imported Web Service. You can either choose to use a URL, or load a file from your harddisk. After this, click on the 'Import' button to fetch the services and operations in the WSDL.**

 **You can now review the services and operations available to the imported Web Service in the bottom sections of the window.**

![](attachments/2621626/2752988.png)

 **Create the microflow which you will use to call the imported Web Service.**

![](attachments/2621626/2752986.png)

Make sure the microflow either creates the variables required as arguments for the Web Service call, or has those passed to it.

 **Add the 'Call Web Service activity to the microflow, and double-click on it to start configuring it. If you do not know how to add activities to a microflow, please refer to [this](add-an-activity-to-a-microflow) article.**

![](attachments/2621626/2752985.png)

 **Press the 'Select...' button next to 'Operation' to bring up a window allowing you to choose the operation you want to use for this Web Service call.**

![](attachments/2621626/2752984.png)

 **In the 'Request' section, you can configure the SOAP body, which contains the parameters needed to execute the Web Service request. The radio buttons allow you to choose the type of SOAP body to use. Use the 'Edit value' button to change the Domain-to-XML mapping or the variables from the microflow used as input arguments.**

![](attachments/2621626/2752991.png)![](attachments/2621626/2752992.png)![](attachments/2621626/2752993.png)

Use the 'Simple' option if the imported Web Service requires only primitive arguments. If the Web Service call needs a list of objects, or if domain model entities need to be mapped to XML elements, the 'Advanced' setting can be used. Finally, 'Custom' allows for the definition of a custom XML body with parameters.

 **If the imported Web Service requires authentication, use the 'SOAP Header' tab to enter the authentication information using the 'Edit value' button.**

![](attachments/2621626/2752990.png)

Again there are three input options. The 'Simple' option can be used if only static values or variables from the microflow need to be passed to the imported Web Service. If a Domain-to-XML mapping is needed for authentication, the 'Advanced' option should be used. Finally, the 'Custom' option allows for the definition of a custom XML header with the possibility to specify parameters.

 **Use the 'HTTP Authentication' tab to enter HTTP authentication information if the Mendix Business Server should use this before calling the Web Service.**

![](attachments/2621626/2752989.png)

 **Finally, in the 'Output' section, you can configure the handling of the return from the Web Service call. If the return is a primitive, you can store it in a variable which you can name at 'Store in variable'. If the return is a complex XML structure, you can use an XML-to-Domain mapping to map the XML elements to domain model entities. You can also choose to ignore the return.**

![](attachments/2621626/2752994.png)![](attachments/2621626/2752995.png)

 **Your imported Web Service is now ready to be used in your application.**
