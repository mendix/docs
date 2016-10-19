---
title: "Module Security"
parent: "Modules"
space: "Reference Guide 5"
---


<div class="alert alert-info">{% markdown %}

For more general information on security, see [Security](Security).

{% endmarkdown %}</div>



Within a module you can define module roles and specify security settings of those module roles for forms, microflows, entities and data sets.

## Form Access

Form Access defines for each module role which forms users with this module role can access. The menu bar is optimized so that it only shows forms and microflows that the user has access to.

Form access takes the shape of a large matrix showing forms and modules roles. For each combination you can indicate whether or not the module role has access to the form. You can also edit this information in a [form](Page) using the property 'Visible for'.

## Microflow Access

Microflow Access defines which microflows can be executed by users with a certain module role. The menu bar is optimized so that it only shows forms and microflows that the user has access to.

Microflow access takes the shape of a large matrix showing microflows and modules roles. For each combination you can indicate whether or not the module role has access to the microflow. You can also edit this information in a [microflow](Microflow) using the property 'Allowed roles'.

<div class="alert alert-info">{% markdown %}

Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.

{% endmarkdown %}</div>

## Entity Access

Entity Access defines for each module role whether users with this role are authorized to Create, Read, Write and/or Delete objects of the entity.

Entity Access takes the form of a large matrix showing access rules that apply to entities. Each access rule in turn applies to a set of module roles. See [Access Rules](Access+Rules) for more information.

## OData Access 

OData Access defines for each module role whether users with this role are authorized to access OData resources for each OData service exposed within the module.
OData access takes the shape of a large matrix showing published OData services and modules roles. For each combination you can indicate whether or not the module role has access to the published OData service. You can also edit this information in a [Published OData Services](Published+OData+Services) using the property 'Allowed roles' in the 'Settings' tab.

## Data Set Access

Data Set Access shows for each [data set](Data+Sets) (used for [reporting](Report+Widgets)) and each module role which access the module role has to the data set.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Full access</td><td class="confluenceTd">No constraint applies to the parameters for the data set, and all eventual range parameters are allowed.</td></tr><tr><td class="confluenceTd">Limited access</td><td class="confluenceTd">At least one constraint applies to the parameters for the data set, or at least one range parameter is not allowed.</td></tr><tr><td class="confluenceTd">No access</td><td class="confluenceTd">Users with this module role have no access to the data set.</td></tr></tbody></table><div class="alert alert-info">{% markdown %}

The constraints are defined in the parameter definitions of the data set. Whether they apply is defined in the data set access.
The ranges are defined in the parameters of the data set. Whether values in these ranges are allowed is defined in the data set access.

{% endmarkdown %}</div>



# Module Role

The module roles define which roles users of this module can have. See [Security](Security) for more information on module roles and [user roles](User+Roles) and their relation.

## Name

The name of a module role is used to refer to the module role from other elements in your model.

<div class="alert alert-info">{% markdown %}

End users do not see the names of module roles. End users (if they create or view user accounts) only see the names of user roles.

{% endmarkdown %}</div>

## Documentation

The documentation of a module role is there only for the convenience of the people who use the modeler; it is not visible for the end users.
