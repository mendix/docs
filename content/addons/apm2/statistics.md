---
title: "Performance Statistics"
parent: "user-manual"
---

## 1 Performance Statistics

On the **Statistics** tab, the collected statistics are displayed with the following columns:

* **Name** – the name of the microflow or client API call
* **Count** – the count of the microflow or client API call
* **Avg (ms)** – the average duration in milliseconds
* **90% (ms)** – the duration in 90% of the occurrences in milliseconds
* **Total (ms)** – the total time of all occurrences in milliseconds

This overview displays the statistics hourly or daily (you can switch between time periods). It is possible to drill down into each microflow, page, or client API call for more information. In the case of a microflow, statistics regarding the microflow action(s) and sub-microflow(s) are shown as well as an historic chart. In the case of a page, the historic chart is shown as well as which page(s) the users opened from that page. 

![](attachments/statistics.png)

## 2 Microflow Statistics

The **Items** tab provides insight into all the actions and sub-microflows of the selected microflow from the statistics overview. Drill down to see more details.

![](attachments/statistics_items.png)

The **Tree** tab can be used to see the statistic results in a quick overview. This overview will help pinpoint the actions with the longest duration. Drill down to see more details.

![](attachments/statistics_tree.png)

The **History** tab gives insight into the duration and count over time. These insights help to detect trends and see if the optimizations were successful. 

![](attachments/statistics_history.png)

Using the **Manual snapshots** tab, it is possible to create a manual statistics snapshot. When clearing the counters, the manual statistics are reset. This can be helpful to collect data over a small period of time.

![](attachments/manual_snapshot.png)
