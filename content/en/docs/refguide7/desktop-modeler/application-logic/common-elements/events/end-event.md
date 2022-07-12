---
title: "End Event"
url: /refguide7/end-event/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

An end event defines the location where the flow will stop. If the return type of the flow is 
not `Nothing`, a return value should be specified.

{{% alert color="info" %}}

If you want to stop your flow after an activity, you link the activity, using a sequence flow with a stop event. In this case, the flow is called from another flow that expects the buyer to be returned.

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/events/end-event/917940.png" >}}

{{% /alert %}}

## 2 Behavior Properties

### 2.1 Return value

The return value is the value that is returned to the flow that called the current flow. The value can be entered as an [expression](/refguide7/expressions/).
