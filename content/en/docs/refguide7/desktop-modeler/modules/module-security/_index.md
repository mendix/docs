---
title: "Module Security"
url: /refguide7/module-security/
---

## 1 Introduction

{{% alert color="info" %}}

For more general information on security, see [Security](/refguide7/security/).

{{% /alert %}}

Within a module you can define module roles and specify security settings of those module roles for forms, microflows, entities and datasets.

## 2 Form Access

Form Access defines for each module role which forms users with this module role can access. The menu bar is optimized so that it only shows forms and microflows that the user has access to.

Form access takes the shape of a large matrix showing forms and modules roles. For each combination you can indicate whether or not the module role has access to the form. You can also edit this information in a [form](/refguide7/page/) using the property 'Visible for'.

## 3 Microflow Access

Microflow Access defines which microflows can be executed by users with a certain module role. The menu bar is optimized so that it only shows forms and microflows that the user has access to.

Microflow access takes the shape of a large matrix showing microflows and modules roles. For each combination you can indicate whether or not the module role has access to the microflow. You can also edit this information in a [microflow](/refguide7/microflow/) using the property 'Allowed roles'.

{{% alert color="info" %}}

Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.

{{% /alert %}}

## 4 Entity Access

Entity Access defines for each module role whether users with this role are authorized to Create, Read, Write and/or Delete objects of the entity.

Entity Access takes the form of a large matrix showing access rules that apply to entities. Each access rule in turn applies to a set of module roles. See [Access Rules](/refguide7/access-rules/) for more information.

## 5 OData Access 

OData Access defines for each module role whether users with this role are authorized to access OData resources for each OData service exposed within the module.

OData Access takes the shape of a large matrix showing published OData services and modules roles. For each combination, you can indicate whether the module role has access to the published OData service. You can also edit this information in [published OData services](/refguide7/published-odata-services/) using the **Allowed roles** property in the **Settings** tab.

## 6 REST Access

REST Access defines for each module role whether users with this role are authorized to access REST resources for each REST service exposed within the module. 

REST Access takes the shape of a large matrix showing published REST services and modules roles. For each REST service, you can indicate whether or not the module role has access to the published REST service.

The **REST Access** tab is visible only when the service has the security set to require authentication. For more information, see [published REST services](/refguide7/published-rest-services/).

## 7 Data Set Access

Data Set Access shows for each [dataset](/refguide7/data-sets/) (used for [reporting](/refguide7/report-widgets/)) and each module role which access the module role has to the dataset.

| Value | Description |
| --- | --- |
| Full access | No constraint applies to the parameters for the dataset, and all eventual range parameters are allowed. |
| Limited access | At least one constraint applies to the parameters for the dataset, or at least one range parameter is not allowed. |
| No access | Users with this module role have no access to the dataset. |

{{% alert color="info" %}}

The constraints are defined in the parameter definitions of the dataset. Whether they apply is defined in the dataset access.
The ranges are defined in the parameters of the dataset. Whether values in these ranges are allowed is defined in the dataset access.

{{% /alert %}}

## 8 Module Role

The module roles define which roles users of this module can have. See [Security](/refguide7/security/) for more information on module roles and [user roles](/refguide7/user-roles/) and their relation.

## 9 Name

The name of a module role is used to refer to the module role from other elements in your model.

{{% alert color="info" %}}

End users do not see the names of module roles. End users (if they create or view user accounts) only see the names of user roles.

{{% /alert %}}

## 10 Documentation

The documentation of a module role is there only for the convenience of the people who use the modeler; it is not visible for the end users.
