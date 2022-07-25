---
title: "XML Inheritance & Choice"
url: /refguide8/xml-inheritance-and-choice/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xml-inheritance-and-choice.pdf).
{{% /alert %}}

## 1 Obtaining an Object by Entity specialization

There are two special cases for XSD elements in mapping documents: choice and inheritance.

*   An inheritance element needs to be filled by an element of a certain type or one of its subtypes.
*   A choice element needs to be filled by exactly one of a number of alternatives.

In Mendix, both inheritance and choice are mapped by entity specialization.

*   The base inheritance or choice element is mapped to a generalization entity. For export mappings, the base mapping contains the setting on how to obtain the Mendix object (from parameter, by association, microflow, or key) as explained in [Export Mappings](/refguide8/export-mappings/).
*   Child elements of inheritance or choice are mapped by entity specialization. For export mappings, you cannot specify how to obtain an object because that is already defined one level up at the base mapping element. For import mappings however, you do need to specify how to obtain the Mendix object as explained in [Import Mappings](/refguide8/import-mappings/). 

## 2 XML Inheritance

In the image below, an example of an Export Mapping with inheritance is shown. For Import Mappings, the structure is the same, only the direction of the arrows is reversed. One _Persons_ object has a one-to-many association to _Person._ The person can be either a Customer or Employee.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/xml-inheritance-and-choice/16843946.png" >}}

For import mappings, mapping the incoming XML to a specific XSD type is defined by the attribute _xsi:type_. However, this attribute is optional. When the _xsi:type_ attribute is **not** present and the base type of the element is **not** abstract, that type will be used (in the example that is Person). If the base type does not have a mapping defined in the import mapping document, it will be skipped. When the base type is abstract, an error will be thrown.

For export mappings, if the inheritance element is **optional** and an empty object is obtained for the element either via association or microflow, no element will be created. If the inheritance element is **nillable**, and an empty object is obtained for the element, the element will be created with the _xsi:type_ set to the first inheritance option in the mapping.

### 2.1 Selection of Request Part for Web Services in Export Mappings

[Select Elements](/refguide8/select--elements/) describes how to select XML schema or WSDL elements to use in the mapping. If you use an export mapping to create a request body for a web service operation, you can select request parts if there are multiple request parameters. Inheritance elements are also supported as a request part.

When the root element is an inheritance element, you can only maps the entire body. Mapping individual request parameter is not possible in this case.

## 3 XML Choice

The image below shows an Export Mapping with a choice element. The schema specifies a choice with two alternatives: an employee id or member ID. In this image, a base entity _Person_ is mapped to the choice element, to serve as a generalization for the choice options. 

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/xml-inheritance-and-choice/16843945.png" >}}

For exporting objects, **optionality** on choice elements is handled differently than for other elements because they do not explicitly occur in XML. There are two cases in which it is valid to export an empty object for a choice element: firstly, when the choice element itself is **optional** and secondly when at least one of the choice options is **optional**. In these cases no element will be created, otherwise an error is thrown. When one or more options of a choice element are **nillable** and at the choice element we export an empty object, Mendix throws an 'unsupported' error because it is impossible to determine which XML element should be sent with the _xsi:nil_ attribute.
