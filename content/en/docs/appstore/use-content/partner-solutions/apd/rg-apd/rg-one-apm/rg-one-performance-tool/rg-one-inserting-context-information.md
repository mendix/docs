---
title: "Inserting Context Information"
url: /appstore/partner-solutions/apd/rg-one-inserting-context-information/
---

The Performance Tool (since version 1.2.1) has a special action to allow context specific information in the Performance Tool. This way you can see data like in the debugger and know which scenarios were chosen.

To add context information use the Java action PerformanceTool.PerformanceToolInfoAction in your microflow as shown below.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-inserting-context-information/Performance_Tool_Info_Action_Details.png" class="no-border" >}}             

You can use the info string for the action name and a message string. Optionally you can add 3 mendix objects that have all their attributes added.

***Notes***

1. *The attributes of the Mendix objects are added unsorted.*
2. *No references are added.*
3. *The action message is limited to 4000 characters at the moment.*

This leads to an action in the action list with context information:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-inserting-context-information/Microflow_Java_Action.png" class="no-border" >}}

Details of the Performance Tool info action will look similar to the image below.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-inserting-context-information/Performance_Tool_Info_Action_InList.png" class="no-border" >}}
