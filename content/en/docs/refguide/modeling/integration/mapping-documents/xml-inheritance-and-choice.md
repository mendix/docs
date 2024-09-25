---
title: "XML Inheritance and Choice"
url: /refguide/xml-inheritance-and-choice/
---

## Obtaining an Object by Entity specialization

There are two special cases for XSD elements in mapping documents: choice and inheritance.

* An inheritance element needs to be filled by an element of a certain type or one of its subtypes.
* A choice element needs to be filled by exactly one of a number of alternatives.

In Mendix, both inheritance and choice are mapped by entity specialization.

* The base inheritance or choice element is mapped to a generalization entity. For export mappings, the base mapping contains the setting on how to obtain the Mendix object (from parameter, by association, microflow, or key), as explained in [Export Mappings](/refguide/export-mappings/).
* Child elements of inheritance or choice are mapped by entity specialization. For export mappings, you cannot specify how to obtain an object because that is already defined one level up at the base mapping element. For import mappings, however, you do need to specify how to obtain the Mendix object, as explained in [Import Mappings](/refguide/import-mappings/). 

## XML Inheritance

In the image below, an example of an Export Mapping with inheritance is shown. For Import Mappings, the structure is the same, only the direction of the arrows is reversed. One Persons object has a one-to-many association to Person. The person can be either a Customer or Employee.

{{< figure src="/attachments/refguide/modeling/integration/mapping-documents/xml-inheritance-and-choice/16843946.png" class="no-border" >}}

For Import Mappings, mapping the incoming XML to a specific XSD type is defined by the attribute *xsi:type*. However, this attribute is optional. When the *xsi:type* attribute is not present and the base type of the element is not abstract, that type will be used (in the example, that is Person). If the base type does not have a mapping defined in the import mapping document, it will be skipped. When the base type is abstract, an error will be thrown.

For Export Mappings, if the inheritance element is **Optional** and an empty object is obtained for the element either via association or microflow, no element will be created. If the inheritance element is **Nillable** and an empty object is obtained for the element, the element will be created with the *xsi:type* set to the first inheritance option in the mapping.

### Selection of Request Part for Web Services in Export Mappings

[Select elements](/refguide/select--elements/) describes how to select XML schema or WSDL elements to use in the mapping. If you use an Export Mapping to create a request body for a web service operation, you can select request parts if there are multiple request parameters. Inheritance elements are also supported as a request part.

When the root element is an inheritance element, you can only maps the entire body. Mapping individual request parameter is not possible in this case.

## XML Choice

The image below shows an Export Mapping with a choice element. The schema specifies a choice with two alternatives: an employee id or member ID. In this image, a base entity Person is mapped to the choice element to serve as a generalization for the choice options. 

{{< figure src="/attachments/refguide/modeling/integration/mapping-documents/xml-inheritance-and-choice/16843945.png" class="no-border" >}}

For exporting objects, optionality on choice elements is handled differently than for other elements because they do not explicitly occur in XML. There are two cases in which it is valid to export an empty object for a choice element: first, when the choice element itself is **Optional** and second, when at least one of the choice options is **Optional**. In these cases, no element will be created, otherwise an error is thrown. When one or more options of a choice element are **Nillable** and at the choice element you export an empty object, Mendix throws an **Unsupported** error because it is impossible to determine which XML element should be sent with the *xsi:nil* attribute.
