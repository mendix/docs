---
title: "Inserting Context Information"
parent: "performance-tool"
---
The Performance Tool (since version 1.2.1) has a special action to allow context specific information in the Performance Tool. This way you can see data like in the debugger and know which scenarios were chosen.

To add context information use the java action PerformanceTool.PerformanceToolInfoAction in your microflow as shown below.

![](attachments/Performance_Tool/Inserting_context_information/Performance_Tool_Info_Action_Details.png)             

You can use the info string for the action name and a message string. Optionally you can add 3 mendix objects that have all their attributes added.

***Notes***

1. *The attributes of the Mendix objects are added unsorted.*
2. *No references are added.*
3. *The action message is limited to 4000 characters at the moment.*

This leads to an action in the action list with context information:

![](attachments/Performance_Tool/Inserting_context_information/Microflow_Java_Action.png)

Details of the Performance Tool info action will look similar to the image below.

![](attachments/Performance_Tool/Inserting_context_information/Performance_Tool_Info_Action_InList.png)
