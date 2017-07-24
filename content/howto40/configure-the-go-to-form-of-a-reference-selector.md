---
title: "Configure the Go-To Form of a Reference Selector"
parent: "reference-selector"
---
## Description

This section describes how to configure the go-to form for a reference selector.

## Instructions

 **Create the form and add the reference selector. If you do not know how to add documents to a project please refer to [this](add-documents-to-a-module) article; if you do not know how to add widgets to a form, please refer to [this](add-a-widget-to-a-form) article.**

![](attachments/2621460/2752682.png)

 **Connect an attribute of an entity which is associated with the data view or template grid entity to the reference selector. You can do this by selecting the reference selector and then dragging this attribute from the Connector window to the reference selector. Another option is to right-click on the reference selector and choose 'Select attribute...' or click the '...' button next to 'Attribute path' in the Properties window, and then in the menu that appears select the attribute.**

![](attachments/2621460/2752681.png)

 **You can now select the go-to form by right-clicking on the reference selector and choosing 'Select go-to form...' or by clicking on the '...' button next to 'Go-to form' in the Properties window. Alternatively you can right-click on the reference selector and choose 'Generate go-to form...' if you do not have a go-to form yet and want the modeler to automatically generate a form displaying the attributes of the object to which a reference will be created. You will be prompted to enter a name for the form, which will subsequently be generated.**

![](attachments/2621460/2752680.png)

 **If you chose to select an existing form, you will now get a new menu in which you can select the go-to form. Note that the form should contain a data view with the same entity as the one being selected in the reference selector.**

![](attachments/2621460/2752683.png)

 **After selecting the go-to form you can configure its behavior by clicking on the '...' button next to 'Go-to form settings' in the Properties window. This will bring up a new menu in which you can choose whether the go-to form should open as a (blocking) pop up or not, and if the form should have a custom title.**

![](attachments/2621460/2752684.png)
