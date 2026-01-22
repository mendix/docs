---
title: "Teamcenter Connector Domain Model"
url: /appstore/modules/siemens-plm/teamcenter-domain-model/
weight: 4
description: "Describes the Teamcenter Connector domain model."
---

## Introduction

The Domain Model is a data model that describes the information in your application domain in an abstract way. It is central to the architecture of your application. The Domain Model consists of [entities](/refguide/entities/) and their relations that are represented by [associations](/refguide/associations/).

The Teamcenter Connector for Mendix Domain Model represents Teamcenter business object types and their properties.

You can view the Teamcenter Connector Domain Model by navigating to TcConnector > Domain Model from the **Project Explorer**.

To export the Domain Model documentation, right-click the **Project Explorer** and choose **Export documentation**. The Domain Model documentation is exported as an HTML file.

## Guidelines to Extend the Teamcenter Connector Domain Model

The Domain Model in Mendix consists of entities, associations, and annotations. It is analogous to the Teamcenter data model. When you want to extend the Domain Model, ensure that:

* You extend the Domain Model in a separate module and not the Teamcenter Connector Domain Model.
* The entities and associations must match the corresponding Teamcenter object type names and their properties. You can find Teamcenter object types and properties in the Teamcenter Developer Documentation or in the Business Modeler IDE application in Teamcenter.

## Example: Extending the Domain Model to Access Additional Information

To access other object types or properties which are not already defined, you must add their definition to your app's Domain Model. This process is the same regardless of whether the object or property is OOTB or custom.

The Teamcenter Business Modeler IDE view of a custom business object is as follows. It is a child of the **ItemRevision** object and contains two new properties.

The Mendix Domain Model entity that you must create to retrieve these properties is as follows.

{{< figure src="/attachments/partners/siemens/teamcenter/image026.png" alt="" class="no-border" >}}

1. Examine the Teamcenter object.    
    Examine the Teamcenter object and determine which properties you want to retrieve.

    1. This object has **ItemRevision** as its parent.

        {{< figure src="/attachments/partners/siemens/teamcenter/image027.png" alt="" class="no-border" >}}

    2. It defines two properties that you want to retrieve.

        {{< figure src="/attachments/partners/siemens/teamcenter/image028.png" alt="" class="no-border" >}}

2. Create a new domain entity.

    1. In your module's Domain Model, create a new entity.

    2. Change the entity's name to match the Teamcenter object type name.

        {{< figure src="/attachments/partners/siemens/teamcenter/image030.png" alt="" class="no-border" >}}

    3. Define the new entity's generalization to match the Teamcenter parent object type.

    {{< figure src="/attachments/partners/siemens/teamcenter/image031.png" alt="" class="no-border" >}}

3. Define new attributes to match the Teamcenter properties.    
    Match the Teamcenter property name, attribute type, and other parameters to create the Mendix attribute.

    * Teamcenter    
        {{< figure src="/attachments/partners/siemens/teamcenter/image032.png" alt="" class="no-border" >}}
    * Mendix
        {{< figure src="/attachments/partners/siemens/teamcenter/image033.png" alt="" class="no-border" >}}

The process is complete, and you can now use your new Mendix domain entity and its attributes.

{{< figure src="/attachments/partners/siemens/teamcenter/image026.png" alt="" class="no-border" >}}

Repeat this process for each object whose properties you want to work with.

## Extending the Domain Model while Using Available Teamcenter Services

* Create the required entities in a separate module as a subtype of an existing entity (specialized entity).

* For example, if you want to create an entity for the `ChangeNoticeRevision` business object, you can create it as a subtype of the `ItemRevision` entity. In this case, the `ChangeNoticeRevision` entity is a specialized entity based on the ItemRevision entity.

* If the required entity is available but the required properties are not available, create a subtype of the entity in a new module and then add the required properties to the new entity.    

    {{% alert color="info" %}} Mendix recommends that you always create new entities and not make any changes to the entities that come with Teamcenter Connector. {{% /alert %}}

* Design a microflow as per your business logic.

* Drag a service from the **Teamcenter** section of the toolbox into the microflow.

* Specify inputs for the Teamcenter service.

* Instantiate and specify input parameters to the Teamcenter service.

* Specify business object mapping to the Teamcenter service.

* Specify how data is retrieved.

* Test your application.

## Example: Extend the Domain Model to Call a Service to Create a Change Notice Revision

1. Create a module that represents the Change management domain. Skip this step if the module exists.

    {{< figure src="/attachments/partners/siemens/teamcenter/image034.png" alt="" class="no-border" >}}

2. Define the Domain Model.    
    Create ChangeNotice and ChangeNoticeRevision entities based on the **TcConnector.Item** and **TcConnector.ItemRevision** entities. Skip this step if the entities exist. Ensure that the names and properties of the defined entity match the corresponding Teamcenter business object type name and properties. The Reference properties on Teamcenter object types must be represented as associations in the Mendix Domain Model.

    {{< figure src="/attachments/partners/siemens/teamcenter/image035.png" alt="" class="no-border" >}}

    You can find Teamcenter business objects and their properties in the Teamcenter Developer Documentation.

3. Plan your microflow and decide what services you want to use. The Teamcenter services are available in the microflow Toolbox under the Teamcenter category. For creating a Change Notice Revision, the microflow typically consists of the following activities:    
    
    {{< figure src="/attachments/partners/siemens/teamcenter/image036.png" alt="" class="no-border" >}}

4. Select the appropriate Teamcenter service and drag it to your microflow. For example, you can use the Create Object service under the Teamcenter category to create a change notice.
    
    {{< figure src="/attachments/partners/siemens/teamcenter/image037.png" alt="" class="no-border" >}}

    Your microflow now appears as follows:

    {{< figure src="/attachments/partners/siemens/teamcenter/image038.png" alt="" class="no-border" >}}

5. In your microflow, specify the input parameters that the Teamcenter service will use. The **CreateObject** service requires two input parameters:

    * An input variable or entity that contains the information required to create the change notice.
    * The mapping between Teamcenter business object names and Mendix entities. In the following example, the input entity, is the default **TcConnector.CreateInput** parameter.
    
    {{< figure src="/attachments/partners/siemens/teamcenter/image039.png" alt="" class="no-border" >}}

6. In the previous step, an existing input entity served as the input parameter. If you need specific properties to be sent as an input, you must create new input entities or specialize the default input entity and instantiate it. For example, to send properties specific to Change Notice and Change Notice Revision, you must specialize the **CreateInput** entity as follows:

    * In your Change Management module, create the entities **CNCreateInput** and **CNCompoundCreateInput** deriving from the **ItemCreateInput** and **ItemRevisionCompoundCreateInput** entities that are available in the Teamcenter connector.

       {{< figure src="/attachments/partners/siemens/teamcenter/image040.png" alt="" class="no-border" >}}

    * Provide input parameters to your microflow. When creating input parameters, ensure that you instantiate it if necessary.    
       Your microflow appears as follows:

       {{< figure src="/attachments/partners/siemens/teamcenter/image041.png" alt="" class="no-border" >}}

       The input parameter contains the instantiated entities **CNCreateInput** and **CNCompoundCreateInput**.

7. You must also specify the **Business object mapping**, which is the mapping between an entity and the corresponding Teamcenter business object types that the microflow is dealing with. For example, the Teamcenter business object **ChangeNotice** is represented by the **ChangeManagement.ChangeNotice** entity and **ChangeNoticeRevision**, by the **ChangeManagement.ChangeNoticeRevision** entity. Thus, the mapping can be specified as:    

    ```
    'ChangeNotice=ChangeManagement.ChangeNotice;ChangeNoticeRevision=ChangeManagement.ChangeNoticeRevision'
    ```

8. Retrieve the objects by dragging the **Retrieve** action to your microflow.

    * To retrieve response data use the **$createObjectResponse/ResponseData** association.

       {{< figure src="/attachments/partners/siemens/teamcenter/image042.png" alt="" class="no-border" >}}

    * To retrieve partial error data, drag the **Microflow call** action into your microflow and call the use the **TcConnector.ShowPartialErrors** microflow.

       {{< figure src="/attachments/partners/siemens/teamcenter/image043.png" alt="" class="no-border" >}}

    * To retrieve created objects use the **$ServiceData/Created** association.

       {{< figure src="/attachments/partners/siemens/teamcenter/image044.png" alt="" class="no-border" >}}

       Your microflow appears as follows:

       {{< figure src="/attachments/partners/siemens/teamcenter/image045.png" alt="" class="no-border" >}}

9. Test your microflow.
