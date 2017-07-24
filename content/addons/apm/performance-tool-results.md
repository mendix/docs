---
title: "Performance Tool Results"
parent: "performance-tool"
---
The performance tool results are saved per session. The session name can be changed in the top right corner of the screen via the **Rename** button. Next to this is the **Show filter** button, which will open a dialog box that will show the used filter when recording this session. The session results are displayed in a search grid with the ability to search the fields that are stored with a "microflow performance" record. By default, the grid only shows main microflows (Main? = Yes). These are microflows that were not called by other microflows during recording. By default the list is sorted according to duration. 

![](attachments/Performance_Tool/Recorded_Session_Details.png)

Calculated attributes and domain model event microflows are also seen as main microflows, since they cannot be linked to the microflow that is causing them outside of the fact that they run inside the action start and stop times.

The user column is only populated for client API messages and when the profiler was running for actions triggered by a user. Scheduled events and domain model microflows logically do not have a user.

When viewing or drilling down on called microflows, this will open a dialog box starting on the **Actions** tab. In the Action tab, it is possible to drill down on sub-microflows, loops, and other actions related to this microflow. 

![](attachments/Performance_Tool/Browse/Microflow_Actions_Tab.png)

The **Main microflows during this microflow** tab shows domain model microflows and calculated attributes. Please note that other microflows occurring in the same interval might appear here as well.

The **SQL statements** tab shows the SQL statements of the currently viewed microflow. If the microflow is a main microflow that consists of its own runtime request, all the SQL statements that are not linked to an individual action are linked here.

![](attachments/Performance_Tool/Browse/Action_SQL_Statements.png) 

The **Explain query plan** button opens a query tool window with this query inside an explain plan statement. This explain plan can help in debugging and tuning SQL statements.

![](attachments/Performance_Tool/Browse/Explain_query_plan.png) 

When a microflow has a loop, this will also be visible in the action grid. It is possible to drill down to the action with a special grid for each iteration. From there you can proceed to drill down further.

![](attachments/Performance_Tool/Browse/Loop_Action.png)

To get a complete overview of a microflow or action, select a microflow from the grid and click **Show tree**. This will give a tree view of the microflow and all related actions and sub-microflows that were executed. The **Change parameters** button can be  used to filter the results.

![](attachments/Performance_Tool/Tree_View.png)

In the parameters dialog box, you can change the filter by duration, the number of iterations shown for a loop, and some more advanced properties (show/hide actions, show/hide start/end actions, maximum depth, and an option to include a warning in the node if the maximum depth has been reached).
