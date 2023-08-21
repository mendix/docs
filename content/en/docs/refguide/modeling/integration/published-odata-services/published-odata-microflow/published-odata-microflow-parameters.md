---
title: "Published OData Microflow Parameters"
url: /refguide/published-odata-microflow-parameters/
tags: ["studio pro","OData","publish"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

# 1 Introduction

Published microfow parameters define how the microflow's parameters should be exposed in the OData service.

## 2 Adding or editing parameters of a published microflow

### 2.1 Add a parameter

Initially, at the moment of publishing a microflow, all the then defined parameters of the microflow will also be added to the **Parameters for microflow** grid of the published microflow. 

You can **Add** or **Delete** parameters from the published microflow using the buttons.

### 2.2 Edit a parameter

To edit a published parameter, either select a parameter and click **edit** or double-click the parameter. The **Edit published microflow parameter** will show up which allows you to edit the **Exposed name** of the published parameter, and you can set a value for **Can be empty**. If **Can be empty** is disabled, calls to the published microflow will fail if the parameter is not provided.

{{% alert color="info" %}}
Note that boolean parameters can never be empty.
{{% /alert %}}
