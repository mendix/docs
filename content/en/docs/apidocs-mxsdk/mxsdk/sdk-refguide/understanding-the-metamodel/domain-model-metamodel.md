---
title: "Domain Model in the Mendix Metamodel"
url: /apidocs-mxsdk/mxsdk/domain-model-metamodel/
weight: 2
---

## 1 Introduction

The domain model represents the data that is stored in your app. Each module has a domain model, consisting of entities, which have attributes of a certain type and associations with other entities.

Attributes have a `value` which can either be a `StoredValue`, which is a value stored in the database, or a `CalculatedValue`, which is computed from a `Microflow`.

The entities can also relate to each other through generalizations. Finally, you can define access rules, validation rules, event handlers and indexes for entities.

### 1.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842837.svg" >}}

Studio Pro Guide | Model SDK API Docs
--- | ---
[Domain Model](/refguide/domain-model/) | TypeScript module [domainmodels](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/domainmodels.html) 
[Entities](/refguide/entities/) | [DomainModel](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.domainmodel.html)
[Attributes](/refguide/attributes/) | [Entity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html)
[Associations](/refguide/associations/) | [Association](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html)
| [Attribute](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.attribute.html)

## 2 Attributes

Entities can have multiple attributes. Each attribute has a specific type.

### 2.1 Graphical Overview of Non-Numeric Attributes

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842840.svg" >}}

### 2.2 Graphical Overview of Numeric Attributes

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842841.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | ---
[Attributes](/refguide/attributes/) | Property [`attributes`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#attributes) of entity 
| [Attribute](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.attribute.html)
| [AttributeType](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.attributetype.html)

## 3 Generalization Relationships

Entities can have a Generalization relationship with another entity. The entity is then called a Specialization. A specialization entity inherits all attributes, validation rules and access rules from its Generalization entity.

An `Entity` instance has a `generalization` property with which to define this relationship. It can either be set to a `NoGeneralization` instance if it is not a specialization of another entity, or it can be set to a `Generalization` instance. A `Generalization` instance has again a `generalization` property which must point to the entity that is the actual generalization.

### 3.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842839.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | ---
[Entities](/refguide/entities/) | Property [`generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#generalization) of Entity
| [GeneralizationBase](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalizationbase.html)
| [Generalization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html)
| [NoGeneralization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.nogeneralization.html)

## 4 Access Rules

To secure access to the data in a Mendix app, you can define access rules for entities. An access rule is always defined for a certain module role, defines to which attribute or association members that role has access, and the retrieved data is constrained by an xpath constraint.

### 4.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842835.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | ---
[Access rules](/refguide/access-rules/) | Property [`accessRules`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#accessrules) of Entity
| [AccessRule](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.accessrule.html)
| Property [`xpathConstraint`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.accessrule.html#xpathconstraint) of AccessRule
| [ModuleRole](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/security.modulerole.html)

## 5 Validation Rules

For each attribute of an entity, it is possible to define a validation rule. The validation rule is applied to a single attribute, will show some error message, and it is a certain type of rule, for example, the attribute needs to be equal to a certain value, or has a maximum length, or needs to be unique.

### 5.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842834.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | ---
[Validation Rules](/refguide/validation-rules/) | Property [`validationRules`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#validationrules) of Entity
| [ValidationRule](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.validationrule.html)
| [RuleInfo](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.ruleinfo.html)

## 6 Indexes

An entity can have multiple indexes. Each index consists of a set of indexed attributes.

### 6.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842836.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | ---
[Indexes](/refguide/indexes/) | Property [`indexes`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#indexes) of Entity
| [Index](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.index.html)
| [IndexedAttribute](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.indexedattribute.html)
