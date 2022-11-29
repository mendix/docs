---
title: "Consumed App Services"
url: /refguide8/consumed-app-services/
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/consumed-app-services.pdf).
{{% /alert %}}

{{% alert color="info" %}}
App services are deprecated and were removed in Studio Pro 9. Use a [consumed web service](/refguide8/consumed-web-services/) to consume existing app services.
{{% /alert %}}

App services are a way of connecting Mendix applications to each other. An app service can be imported and its content can be used. As for now, app services provide the following content:

* Microflow actions
* Domain model entities

In the project explorer, an app service can be selected in the 'Add' context menu on a module. See [Select app service](/refguide8/select-app-service/) for more information.

See the [Settings](/refguide8/settings/) page for more information on document options.

App service actions are directly available in Microflows. If a new activity is added, new app service actions are shown below the standard microflow actions.

{{< figure src="/attachments/refguide8/modeling/integration/consumed-app-services/16843891.png" >}}

An app service action may require parameters, and usually it supplies a return value. The return value can be used in the rest of the microflow. Parameters and return values can be an object or a list type; the entities which are accepted by the app service are included in the domain model of the app service.
