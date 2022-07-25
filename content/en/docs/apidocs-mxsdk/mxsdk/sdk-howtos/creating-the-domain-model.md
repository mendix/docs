---
title: "Create the Domain Model"
url: /apidocs-mxsdk/mxsdk/creating-the-domain-model/
weight: 30
description: "Explains how to create a domain model with inheritance and what the relation is between the Mendix Metamodel and the SDK."
---

## 1 Introduction

You now have your first script up and running, which creates a new app with a single entity. This how-to guides you through the process of creating a more extensive domain model. At the end of this how-to you will have a domain model with two entities: `Customer` and `Invoice`. These entities should be associated with a one-to-many association. The `Customer` entity should become a specialization of the `Administration.Account` entity (and indirectly `System.User`), so that customers can log into the app.

In this document, you will learn how to do the following:

* Create a domain model with inheritance
* Explain the relation between the Mendix Metamodel and the SDK

After completing this how-to, you will be able to generate apps with the following domain model:

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-howtos/creating-the-domain-model/16844083.png" >}}

To be able to create such a domain model, there are several questions that you need an answer to:

1.  Which parts of the app do you want to change?
2.  Which SDK classes do you need to use?
3.  How do you use those SDK classes?

The answer to the first question is directly based on functional requirements: you need to create two entities, one association, and set the generalization of one of the two entities. For the answers to the second and third question you need to combine information from several sources of information: the [Studio Pro Guide](/refguide/), [References](/apidocs-mxsdk/mxsdk/sdk-refguide/), and the [Model SDK API](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html) documentation.

The *Studio Pro Guide* gives an overview of what can be configured for different parts of the Mendix app model, the Mendix Metamodel reference guide specifies in detail which actual programmable objects are available in the SDK, and the Model SDK API docs provide the precise API details needed to write the actual code.

This how-to will guide you through the collection of the necessary information from these sources to create the domain model. At the same time, it will explain the general concepts and structure of the SDK documentation. This will enable you to find the information that you need to manipulate other parts of the app model as well.

## 2 Creating Entities

First, you start with creation of the two entities, `Customer` and `Invoice`. Entities have some basic properties, such as their `name` and `documentation`. You can see these in Studio Pro in the Properties pane when you have selected an entity. These properties are documented in the *Studio Pro Guide* under the [Entities](/refguide/entities/) topic.

The relevant concept in the app model can be found in the Mendix Metamodel reference guide. In this case, you are working on the domain model, so the [Domain Model](/apidocs-mxsdk/mxsdk/domain-model-metamodel/) page is the starting point. In the Overview section, `Entity` is visible, which is the likely candidate for creation of new domain model entities.

So how do you set these properties with the SDK? The Model SDK API docs provide us with this information. On the [`domainmodels.Entity`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html) page, you can find everything that is configurable for domain model entities, including the properties  [`name`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#name)  and [`documentation`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#documentation) . They are of type `string`, which means that you can directly set their value to any `string` value.

To create a new `Customer` entity, you create a single entity instance in a domain model and then set its name.

```ts
const customer = domainmodels.Entity.createIn(domainModel);
customer.name = `Customer`;
```

An `Entity` also has a [`location`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#location)  property, which defines where the entity is shown in the domain model editor in Studio Pro. This property needs to be set for each entity, so that the entities do not overlap each other in the domain model editor. To do this, set the property with a JSON object with `x` and `y` properties for coordinates:

```ts
customer.location = { x: 100, y: 100 };
```

With these ingredients, you can create the two entities. Replace the snippet that creates a single entity in the script that you created in the [previous how-to steps](/apidocs-mxsdk/mxsdk/creating-your-first-script/) with the following snippet to create the two new entities:

```ts
const domainModel = await loadDomainModel(workingCopy); 
const customer = domainmodels.Entity.createIn(domainModel);
customer.name = `Customer`;
customer.location = { x: 100, y: 100 };

const invoice = domainmodels.Entity.createIn(domainModel);
invoice.name = `Invoice`;
invoice.location = { x: 400, y: 100 };
```

### 2.1 Resources

*Studio Pro Guide*

*   [Domain Model](/refguide/domain-model/)
*   [Entities](/refguide/entities/)

Metamodel reference guide

*   [Domain Model](/apidocs-mxsdk/mxsdk/domain-model-metamodel/)

Model SDK API docs

*   [domainmodels.Entity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html)
*   [Entity.name](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#name)

*   [Entity.documentation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#documentation)

*   [Entity.location](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#location)

## 3 Creating an Association

The next step is to create an association between the `Customer` and `Invoice` entities to define their relationship: a `Customer` can have zero or more `Invoices`.

The *Studio Pro Guide* explains that [Associations](/refguide/associations/) have an owner and are a reference (set). In the Mendix Metamodel reference guide for the [domain model](/apidocs-mxsdk/mxsdk/domain-model-metamodel/), the overview shows that an `Association` inherits from `AssociationBase`, which means that, besides its own properties,  it has all the properties of `AssociationBase`. The Metamodel reference documentation graph shows that `Entity` and `Association` are related through `child` and `parent` properties on `Association` (the arrows point from `Association` to `Entity`). The `child` and `parent` properties define the target and source of the association arrows in the domain model editor, respectively.

So those two properties need to be set to point to the correct entities. The exact overview of all available properties for associations can be found in the Model SDK API documentation of the relevant object, in this case [`Association`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html) .

To create a standard reference (one-to-many) association, you instantiate one Association instance, set its name, and define the `child` and `parent` properties. The `child` property points to the '1'-side of the association, and the `parent` property points to the 'many'-side of the association. They can be set with any entity reference from the domain model of the same module (for cross-module associations, use [`CrossAssociation`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.crossassociation.html)).

The following code snippet creates an association between the `Customer` and `Invoice` associations:

```ts
const invoices = domainmodels.Association.createIn(domainModel);
invoices.name = `Invoices`;
invoices.child = customer;
invoices.parent = invoice;
```

Similar to entities, the on-screen location of associations between entities can be determined by setting the value of `childConnection` and `parentConnection` properties, which are the relative position of the child and parent entities. These properties can be left empty which will default to `{x:0, y:0}` (top left most of an entity).

```ts
invoices.childConnection = { "x": 100, "y": 30 };
invoices.parentConnection = { "x": 0, "y": 30 };
```

By combining the above two snippets, it is possible to add a fully functioning one-to-many association between `Invoice` and  `Customer` to the domain model. Add the following snippet to your script, right below the lines that create the entities, and just before the `return workingCopy` statement:

```ts
const invoices = domainmodels.Association.createIn(domainModel);
invoices.name = `Invoices`;
invoices.child = customer;
invoices.parent = invoice;

invoices.childConnection = { "x": 100, "y": 30 };
invoices.parentConnection = { "x": 0, "y": 30 };
```

### 3.1 Resources

*Studio Pro Guide*

*   [Associations](/refguide/associations/)

Metamodel reference guide

Model SDK API docs

*   [Association](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html)
*   [AssociationBase](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.associationbase.html)
*   [Association.parent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html#parent)
*   [Association.child](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html#child)

## 4 Configuring a Generalization

Finally, you want to configure the `Customer` entity to be a specialization of `Administration.Account`, so that customers can log into the app. The *Studio Pro Guide* describes inheritance on the [Entities](/refguide/entities/) page. Entities that are a specialization of another entity inherit all its properties and behavior.

The Metamodel in the  reference guide contains a section 'Generalization relationships' with a diagram that shows how the Mendix Metamodel for inheritance is structured.

In the Model SDK, the [`Entity.generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#generalization)  property is used to configure this behavior. When it is set to a [`NoGeneralization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.nogeneralization.html) instance, the entity does not have a generalization. When it is set to a [`Generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html)  instance, the entity is a specialization of the entity that is set with the  [`Generalization.generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html#generalization) property.

So, to set up entity `Customer` as a specialization of entity `Administration.Account`, you first need to look up the `Account` entity which [can be done in several ways](/apidocs-mxsdk/mxsdk/finding-things-in-the-model/). The following snippet looks up the `Account` entity in the `Administration` domain model, using the `findEntityByQualifiedName` function:

```ts
const systemUser = workingCopy.model().findEntityByQualifiedName(`Administration.Account`);
```

The `domainmodels.Generalization` instance that will be used to configure the `Account` instance can now be created. The `generalization` property is set to the `System.User` entity instance that was looked up:

```ts
const generalization = domainmodels.Generalization.createIn(customer);
generalization.generalization = systemUser;
```

Together, the creation of the `Customer` entity will look like the following code snippet. Replace the creation of the `customer` entity instance in the script with the following snippet:

```ts
const customer = domainmodels.Entity.createIn(domainModel);
customer.name = `Customer`;
customer.location = { x: 100, y: 100 };

const generalization = domainmodels.Generalization.createIn(customer);
const systemUser = workingCopy.model().findEntityByQualifiedName(`Administration.Account`);
generalization.generalization = systemUser;
```

### 4.1 Resources

*Studio Pro Guide*

*   [Entities](/refguide/entities/)

Metamodel reference guide

Model SDK API docs

*   [Generalization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html)
*   Property  [`generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html#generalization)
*   [NoGeneralization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.nogeneralization.html)

## 5 Conclusion

This completes the script. Compile and execute it as described in the previous section. Open the app in Studio Pro to inspect the results!
