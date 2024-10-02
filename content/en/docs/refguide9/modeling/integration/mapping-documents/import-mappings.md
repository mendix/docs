---
title: "Import Mappings"
url: /refguide9/import-mappings/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

Please refer to [Mapping Documents](/refguide9/mapping-documents/) for an introduction.

## Obtaining Objects in Import Mappings

Figure 1 depicts an example of an Import Mapping document in which two elements from an XML Schema have been selected using the **Select elements...** dialog. Following this the ReceivedPartners and ReceivedClient entities were added, and mapped to the Result and Client schema elements. Each time the Import Mapping is invoked, a new ReceivedPartners object is obtained.

{{< figure src="/attachments/refguide9/modeling/integration/mapping-documents/import-mappings/16843942.png" class="no-border" >}}

**Figure 1**

### Obtaining an Object

For each XML or JSON object, a Mendix object needs to be obtained. You can create one or you can find an existing object in the database. Alternatively, you can use a custom microflow that returns an object. You can define how a Mendix object is obtained in the window depicted in figure 2, which is shown after double-clicking a specific mapping element.

{{< figure src="/attachments/refguide9/modeling/integration/mapping-documents/import-mappings/16843943.png" class="no-border" >}}

**Figure 2**

### Obtaining a Mendix Object

#### Obtain Mendix Object Methods{#obtain-object}

This is what will happen when you use an [Import with Mapping](/refguide9/import-mapping-action/) action in your microflow.

| Property | Description |
| --- | --- |
| **Create an object** | Creates a new object.<br/>An error can be thrown if there are any [before create](/refguide9/event-handlers/#when) microflows that fail. |
| **Find an object (by key)** | Searches for an object, using keys defined in the attributes list. The runtime searches for the object by taking all attributes marked as **Key** (in the **Value element to attribute mapping** section below) and converting them to an XPath query.<br/>If more than one object is returned by the XPath query, an error will be thrown. |
| **Call a microflow** | Calls a microflow to obtain an object and return it. If the microflow expects any parameters, these need to be specified in the **Select...** window. Possible parameters are the input parameter (see above), any parent entity in the mapping and any attributes in the current XML element. The microflow must return an object of the correct entity type. If it returns a null object, the selected **If no object was found** action will be performed. |

{{% alert color="info" %}}
In each case, if the object is found or created, mapped attributes will be given the value from the XML or JSON input. Unmapped attributes will retain their current (default for a newly-created object) values. See [Mapping Attributes in Import Mappings](#mapping-attributes), below for more information.
{{% /alert %}}

#### If No Object Was Found

This is the action that the runtime will perform when an error occurred in the specified **Obtain Mendix Object** action.

{{< figure src="/attachments/refguide9/modeling/integration/mapping-documents/import-mappings/no-object-found.png" class="no-border" >}}

| Property | Description |
| --- | --- |
| **Create** | Create an object of the correct entity to map to and process as in **Create an object**, above. |
| **Ignore** | Don't map this element and continue parsing the rest of the XML. |
| **Error** | Explicitly stop parsing the XML and throw an error. This error needs to be handled in the calling microflow. |

If this is the top level of the mapping, you can check **Decide this at the place where the mapping gets used**. If this is checked the option **if no object was found** can be set whenever you use the mapping, for instance in an [import mapping action](/refguide9/import-mapping-action/) or a [call REST service action](/refguide9/call-rest-action/).

### Setting Associations

After obtaining a mendix object (see [Obtain Mendix Object Methods](#obtain-object), above), you can set an association to the parent object. If **Set association** is *Yes*, a dropdown of allowed associations is shown. If an association is selected, it is drawn in the mapping document.

{{% alert color="warning" %}}

Be aware that lists are not stored ordered in the Mendix database. The XML Schema can prescribe that a grouping of objects is a sequence, but the order of Mendix objects in the database may differ from the order of incoming XML elements.

{{% /alert %}}

## Mapping Attributes in Import Mappings{#mapping-attributes}

Each schema value in a selected XML or JSON schema object needs to be mapped to an attribute of an entity to be used in your app. If you don't want to map certain values, simply uncheck them in the **Select elements...** dialog box. Configuring how to map the attributes is done in the screen depicted in figure 3, which is shown after double-clicking a specific mapping element.

{{< figure src="/attachments/refguide9/modeling/integration/mapping-documents/import-mappings/16843943.png" class="no-border" >}}

**Figure 3**

Having defined the mappings for the attributes, these mappings are also shown in the mapping document. When a specific attribute is selected the schema element is also selected. This works the other way around too. An example of this is shown in figure 4, where the **dati** attribute is selected in both the Entity and the schema element (in this case dati is mapped to dati).

{{< figure src="/attachments/refguide9/modeling/integration/mapping-documents/import-mappings/16843944.png" class="no-border" >}}

**Figure 4**

### Mapping Attribute Properties

| Property | Description |
| --- | --- |
| Entity Attribute | Here you can select an attribute to map this value element to. Each value mapping needs to be mapped, except when it is used as a parameter in the microflow to obtain an object. |
| Schema value element | The name and type of the schema value element. |
| Occurrence | Reflects how often the element may occur. This can be **0..1** or **1**, depending on if it is required or not. If the value is empty and the minimum required occurrence of the element is 0 (as specified by the schema) the creation of the element will be skipped. In the case you want to never map a value to an optional element, simply disable it in the **Select elements...** dialog. |
| Convert using (optional) | If the incoming data of a value element is not in the right format, you can use a microflow to convert it to a different data type. The conversion microflow should have one parameter that matches the element type. Alternatively, the parameter may be of type String, as all incoming data is in fact a String. For example, when the incoming data contains an unusual DateTime format, you can parse this format yourself by using a conversion microflow with a String parameter. If this value element maps to an attribute, the return type of the conversion microflow must match the attribute type. Conversion microflows of value elements are executed before these value elements are used as search keys or microflow parameters to obtain an object. This means that when using a value element with a conversion microflow as parameter for the microflow to obtain an object, the parameter type should match the return type of the conversion microflow. |
| Key | This property specifies whether the value element is used as search key to obtain an object. If a value element is used as search key, you must specify the attribute it maps to. The XML value will be matched to the value of this attribute when searching for an object. Attribute with 'binary' type is not supported to be set as key.
| Map attributes by name | If this button is clicked, an attempt is made to match attributes by name. A dialog appears reporting what has been changed. |

## Mapping Parameter

Import mappings have the additional option to receive an incoming parameter. The parameter can be passed by the calling microflow when the microflow uses the [import from mapping](/refguide9/import-mapping-action/) action.

To define a parameter for your mapping, click the parameter box and select the data type. You can also drag an entity into the parameter box. 

You can use a parameter as a key or in a microflow to obtain objects. When you use an entity parameter, you can set associations to it. When you use a primitive parameter (string, integer, etc.), you can write the value to an attribute of an object that is being imported.

## Troubleshooting{#troubleshooting}

If you are importing a very long JSON string, the underlying conversion library may not be able to handle it. In this case you will get a message similar to the following:

`com.mendix.systemvideinterfaces.MendixRuntimeException: com.fasterxm1.jackson.core.exc.StreamConstraintsException: String value length (20051112) exceeds the maximum allowed (20000000, from 'StreamReadConstraints.getMaxStringLength()')`

Mendix uses the Jackson Core XML library when performing the import mapping and this [has a limit of 20 million](https://javadoc.io/static/com.fasterxml.jackson.core/jackson-core/2.15.1/com/fasterxml/jackson/core/StreamReadConstraints.html#DEFAULT_MAX_STRING_LEN) characters (in earlier versions 5 million) in the JSON string.

In Mendix version 9.24.17 and above, you can override this using the [mapping.import.MaxJsonReadingLength](/refguide/custom-settings/#mapping.import.MaxJsonReadingLength) custom setting.

Mendix recommends that you only add this setting if you will be getting very long JSON strings as it may result in more memory usage.
