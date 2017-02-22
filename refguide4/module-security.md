---
title: "Module Security"
parent: "modules"
space: "Reference Guide 4"
---
<div class="alert alert-warning">{% markdown %}

For more general information on security, see [Security](security).

{% endmarkdown %}</div>

Within a module you can define module roles and specify security settings of those module roles for forms, microflows, entities and data sets.

## Form Access

Form Access defines for each module role which forms users with this module role can access. The menu bar is optimized so that it only shows forms and microflows that the user has access to.

Form access takes the shape of a large matrix showing forms and modules roles. For each combination you can indicate whether or not the module role has access to the form. You can also edit this information in a [form](web-form) using the property 'Visible for'.

## Microflow Access

Microflow Access defines which microflows can be executed by users with a certain module role. The menu bar is optimized so that it only shows forms and microflows that the user has access to.

Microflow access takes the shape of a large matrix showing microflows and modules roles. For each combination you can indicate whether or not the module role has access to the microflow. You can also edit this information in a [microflow](microflow) using the property 'Allowed roles'.

<div class="alert alert-warning">{% markdown %}

Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.

{% endmarkdown %}</div>

## Entity Access

Entity Access defines for each module role whether users with this role are authorized to Create, Read, Write and/or Delete objects of the entity.

Entity Access takes the form of a large matrix showing access rules that apply to entities. Each access rule in turn applies to a set of module roles. See [Access Rules](access-rules) for more information.

## Data Set Access

Data Set Access shows for each [data set](data-sets) (used for [reporting](reporting)) and each module role which access the module role has to the data set.

| Value | Description |
| --- | --- |
| Full access | No constraint applies to the parameters for the data set, and all eventual range parameters are allowed. |
| Limited access | At least one constraint applies to the parameters for the data set, or at least one range parameter is not allowed. |
| No access | Users with this module role have no access to the data set. |

<div class="alert alert-warning">{% markdown %}

The constraints are defined in the parameter definitions of the data set. Whether they apply is defined in the data set access.
The ranges are defined in the parameters of the data set. Whether values in these ranges are allowed is defined in the data set access.

{% endmarkdown %}</div>
