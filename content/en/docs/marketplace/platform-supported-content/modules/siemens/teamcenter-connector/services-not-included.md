---
title: "Using Teamcenter Services Not Included with the Teamcenter Connector"
linktitle: "Using Teamcenter Services Not Included"
url: /appstore/modules/siemens-plm/services-not-included/
weight: 6
description: "Describes how to use Teamcenter services that are not included in the connector."
---

## Overview

The Teamcenter connector provides two APIs for calling any service operation that is part of Teamcenter Services.

* **CallTeamcenterService** — Java action

  This Java action can be used directly in any microflow and maps the Mendix domain entities to or from the JSON data structures that are used by Teamcenter Services operations.

* **TcConnection.callTeamcenterService** — Java method

  This Java method can only be used from within the Java code and requires that the caller create and parse JSONObjects directly for the call. The **TcConnector** class also exposes an entity version of the **callTeamcenterService** method that matches the Java action.

Both APIs have general error handling and take care of the Teamcenter server session management. The **Login** service operation must be called before calling any other service operation using these APIs. The **ShowLoginPage** and **ExecuteLogin** microflows perform this function.

## Using the Java Action

The **CallTeamcenterService** Java action is the entry point for calling Teamcenter service operations from a microflow. This Java action allows the developer to create a custom mapping between the Teamcenter service operation and the Mendix Domain Model entities. This Java action takes the following arguments:

* **Service Name**: The name of the Teamcenter service operation
* **Input Argument**: The entity containing the input data for the service operation.
* **Response Object**: The entity instance to which the service operation response will be written. This may be any entity type that extends from **ServiceResponse**.
* **Operation Mapping**: The mapping definition for this service operation.
* **Business Object Mapping**: The mapping of Teamcenter business object names to Mendix entity names.
* **ConfigurationName**: The Teamcenter configuration name to be used to perform this action. In case of single active connection pass the configuration name or empty value.

### Operation mapping

This maps a Teamcenter service operation request and a response each to the Mendix entities. The mapping is defined as a JSON document, either a as a file or provided as an input string to the **CallTeamcenterService** Java action. The JSON schema for an operation mapping document is as follows:

```
{
ServiceOperation: 	The operation name (Core-2011-06-Session/login).
InputType:     	The Entity type to map the input from.
ResponseType:		The Entity type to map the response to.
ObjectMapping:		The business object mappings.
OperationInput:	The template for the service operation input. Must represent the complete service operation input.
OperationResponse: The template for the service operation response. May contain only the specific elements of the response that are mapped. 
}
```

Within the **OperationInput** and **OperationResponse** templates, values are either hard coded or use the **$Input** or **$Response** substitution keywords. These substitution keys have the following syntax:

```
$Input[/Association]</Attribute>[;Instruction]
$Response[/Association]</Attribute>
```

Where:

* **Association** — Optional association name on the given entity type. Multiple associations can be sequenced, each separated by a '/'.
* **Attribute** — Optional attribute name on the given entity type.
* **Instruction** — Optional instruction to be applied to the substitution. Multiple instructions can be used, each separated with a semicolon. The supported instructions are:
* **AttributeAsArray** — single valued JSONArray for each attribute value.
* **DateFormat=Format** — Use the custom date format for serializing date attributes.
* **ignoreNull** – Use to omit the key if the value of that key is null.

Examples of which attributes that will be mapped:

* **$Input** – The full entity
* **$Input/TcConnector.itemRev** – The entity referenced by the **TcConnector.itemRev** association
* **$Input/TcConnector.user/person** – The person attribute on the referenced entity (TcConnector.user association)
* **$Input;DateFormat=MM/dd/yyyy** – The full entity, with any date attributes serialized in the format mm/dd/yyyy

{{% alert color="info" %}} This is a JSON document, so the forward slash ‘/’ character in any quoted string must be escaped ‘\/’. {{% /alert %}}

A sample mapping JSON document:

```
{
    "ServiceOperation": "Cad-2007-01-StructureManagement\/createBOMWindows",
    "InputType":        "TcConnector.CreateBomWindowInput",
    "ResponseType":     "TcConnector.CreateBomWindowResponse",
    "ObjectMapping":    "BOMLine=TcConnector.BOMLine",
    "OperationInput":
    {   "info":
        [{  "clientId": "CreateBOMWindows",
            "item":     "",
            "itemRev":  "$Input\/TcConnector.itemRev",
            "bomView":  "",
            "objectForConfigure": "",
            "activeAssemblyArrangement":"",
            "revRuleConfigInfo": 
            {   "clientId": "",
                "revRule":  "$Input\/TcConnector.revRule",
                "props": 
                {   "unitNo":  -1,
                    "date":    "",
                    "today":   true,
                    "endItem": "",
                    "endItemRevision": "",
                    "overrideFolders":
                    [{  "ruleEntry": "",
                        "folder": ""
                    }]
                }
            }
        }]
    },
    "OperationResponse": 
    {   "output":
        [{"bomLine": "$Response\/TcConnector.createBomWindowResponseBOMLine"
        }]
    }
}
```

### ExpandGRMRelationsForPrimary Example

The SOA request and response structure for ‘Core-2007-09-DataManagement/expandGRMRelationsForPrimary’ are as follows:

{{< figure src="/attachments/partners/siemens/teamcenter/image046.png" alt="" class="no-border" >}}

To create the operation mapping, refer to the request and response entities and substitute the corresponding entity attributes and associations for the key or the structure. In this example we have created the entities structure as follows:

{{< figure src="/attachments/partners/siemens/teamcenter/image047.png" alt="" class="no-border" >}}

#### Request Entities

* **ExpandGRMPrimaryInput** – Input entity.
* **Relation** – Represents the info structure in the request.
* **relations** – Many-to-one association between ExpandGRMPrimaryInput and Relation entities.
* **primaryObjects** – One-to-one association with list of model objects represents the **primaryObjects** key in request.

#### Response Entities

* **ExpandGRMPrimaryResponse** – Response Entity derived from ServiceResponse
* **relationshipObject** – Represents relationshipObjects structure in the response.
* **relationshipObjects** – many to One Association between ExpandGRMPrimaryResponse and relationshipObject entities.
* **otherSideObject** – One to One association with ModelObject represents the otherSideObject key in the response.

Following is the operation mapping file for expandGRMRelationsForPrimary SOA call:

{{< figure src="/attachments/partners/siemens/teamcenter/image048.png" alt="" class="no-border" >}}

### CreateWorkflow Example

The SOA request and response structure for ‘Workflow-2014-10-Workflow/createWorkflow’ are as follows:

{{< figure src="/attachments/partners/siemens/teamcenter/image049.png" alt="" class="no-border" >}}

To create the operation mapping, refer the request and response entities and substitute the corresponding entity attributes and associations for the key or the structure. In this example we have created the entities structure as follows:

{{< figure src="/attachments/partners/siemens/teamcenter/image050.png" alt="" class="no-border" >}}

#### Request Entities

* **CreateWorkflowInput** – Input entity.
* **createWorkflowtRelationTypes** – Entity representing attachmentRelationTypes key in the request.
* **relationTypes** – One to Many Association between **CreateWorkflowInput** and **createWorkflowtRelationTypes** entities.
* **attachments** - One to Many Association between **CreateWorkflowInput** and **ModelObject** entities representing attachments key in the request.
* **assignedUser** - One to Many Association between **CreateWorkflowInput** and **User** entities representing **assignedUserList** key in the request.
* **responsibleParty** - One to One Association between **CreateWorkflowInput** and User entities representing **responsibleParty** key in the request.
* **workflowOwner** - One to One Association between **CreateWorkflowInput** and User entities representing **workflowOwner** key in the request.
* **processName** – String attribute on **CreateWorkflowInput** entity representing **processName** key in request.
* **processDescription** – String attribute on **CreateWorkflowInput** entity representing **processDescription** key in request.
* **processTemplate** – String attribute on **CreateWorkflowInput** entity representing **processTemplate** key in request.
* **dueDate** – Date and time attribute on **CreateWorkflowInput** entity representing **dueDate** key in request.
* **attachmentRelationTypes** – String attribute on **createWorkflowtRelationTypes** entity representing the **attachmentRelationTypes** key in request, which is array of strings, so we add the instruction **AttributeAsArray** after the path to attribute. This will take care to give the input to this key in form of array of strings.

#### Response Entities

* **CreateWorkflowResponse** – Response Entity derived from **ServiceResponse**.
* **workflowTask** – One to Many association between **CreateWorkflowResponse** and **EPMTask** entities representing **workflowTask** structure of the response.

Following is the operation mapping file for createWorkflow SOA call:

{{< figure src="/attachments/partners/siemens/teamcenter/image051.png" alt="" class="no-border" >}}

#### Entity Mapping

Mendix Domain Model entities are mapped to Teamcenter service operation data structures based on naming conventions. The Teamcenter structure element names (keys in JSON document) map one-to-one to the entity member (attributes or associations) names, with the following caveats:

* The entity member name is prefixed with an underscore '_', for example '_type'. In this case the '_' is ignored, thus matching the Teamcenter name of 'type'.
* The entity member name is suffixed with '__XXX', for example, 'phone__Home'. In this case the '__Home' is ignored, thus matching the Teamcenter name of 'phone'.

When traversing entities across associations, the entity names are not used. Only the associations between entities must match or be mappable.

#### ModelObject Mapping

The **ModelObject** entity is the Mendix Domain Model representation of a Teamcenter business object. Any entity that extends from **ModelObject** is considered to be a **ModelObject**. The mapping of **ModelObject** entities follows the general mapping of entity mapping (see previous section), with the following additions:

* Member names defined directly on the ModelObject entity (UID, _Type...) are ignored.
* All other entity member names are mapped one-to-one with the business object type property name.
* Attributes of type `String` are the display value or localized value of the business object property, while attributes of other types (Boolean, Decimal, and Integer, Localized Date and time), are the database value of the business object property. To map a database value of a business object String property, the attribute name must be suffixed with '__DB' that is, 'description__DB'.

#### Business object mapping

This refers to the mapping of Teamcenter business object type names to Mendix entity names. This mapping is applied to the business objects that are returned from the service operation. The syntax for this mapping is a semicolon-separated list of Teamcenter or Mendix names.

```
BOMLine=TcConnector.BOMLine;ItemRevision=TcConnector.ItemRevision
```

For any business object returned from the service operation that is not in this mapping (that is, EngChange_Revision), the nearest mapped parent (ItemRevision) is instantiated.

#### Error Handling

The **CallTeamcenterService** Java action handles all non-service errors that occur during the processing of the service request. This includes networking errors (HTTP errors connecting to the Teamcenter server), session time-out, and parsing errors. These errors are displayed as an exception, and the calling microflow must set an error handler on the Java action and then create a flow from the Java action that is set as the error handler. This flow must display the **$latestError/Message** and then exit the microflow.

## Using the Java Method

The **callTeamcenterService** Java method (**tcconnector.foundation.TcConnection.callTeamcenterService**) is the entry point for calling Teamcenter service operations from the Java code. This Java method differs from the **CallTeamcenterService** Java action in that the input and output data are JSONObject versus Mendix entities. The developer is responsible to creating the JSONObject input that conforms to the Teamcenter service operation definition and parsing the returned JSONObject. This Java method takes 3 arguments:

* **Service Name** – The name of the Teamcenter service operation.
* **Input Argument** – The JSONObject containing the input data for the service operation.
* **Policy** – The Object Property Policy defining which values should be returned.

A JSONObject is returned from this method with the contents of the service operation response. All business object references (UIDs) throughout the response structure are replaced with the full ModelObject instance from the ServiceData. JSONObject instances that represent a ModelObject or ServiceData can be cast to JModelObject or JSerivceData:

```
JModelObject bomLine = (JModelObject)output.getJSONObject("bomline");
JServiceData sd = (JServiceData)response.getJSONObject("serviceData");
```

Both the JModelObject and JServiceData class have methods to conveniently access data on this structure and convert to Mendix entities.

### The JModelObject Class

The JModelObject class (**tcconector.foundation.JModelObject**) extends the JSONObject class to represent a single Teamcenter business object (ModelObject). This class has convenience methods to access property values and other elements defined on the ModelObject type. Conversation of a JModelObject to an entity uses ModelObject Mapping.

### The JServiceData Class

The JServiceData class (**tcconector.foundation.JServiceData**) extends the JSONObject class to represent the ServiceData structure common to most Teamcenter service operations. This class has convenience methods to access data in the ServiceData. Conversion of JServiceData to an entity uses ModelObject Mapping.

### The JPolicy Class

The JPolicy class (**tcconector.foundation.JPolicy**) extends the JSONObject class to represent an Object Property Policy. The Object Property Policy defines what properties should be returned from the service operation call for the given set of business object types. The JPolicy is constructed from Business Object Mapping, which defines a policy that includes all the entity member names.
