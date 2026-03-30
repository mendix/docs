---
title: "Performance Statistics"
url: /appstore/partner-solutions/apd/rg-two-statistics/
---

## Performance Statistics

On the **Statistics** tab, the collected statistics are displayed with the following columns:

* **Name** – the name of the microflow or client API call
* **Count** – the count of the microflow or client API call
* **Avg (ms)** – the average duration in milliseconds
* **90% (ms)** – the duration in 90% of the occurrences in milliseconds
* **Total (ms)** – the total time of all occurrences in milliseconds

This overview displays the statistics hourly or daily (you can switch between time periods). It is possible to drill down into each microflow, page, or client API call for more information. In the case of a microflow, statistics regarding the microflow action (or actions) and sub-microflow (or microflows) are shown as well as an historic chart. In the case of a page, the historic chart is shown as well as which page (or pages) the users opened from that page. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/statistics.png" class="no-border" >}}

## Microflow Statistics

The **Items** tab provides insight into all the actions and sub-microflows of the selected microflow from the statistics overview. Drill down to see more details.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/statistics_items.png" class="no-border" >}}

The **Tree** tab can be used to see the statistic results in a quick overview. This overview will help pinpoint the actions with the longest duration. Drill down to see more details.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/statistics_tree.png" class="no-border" >}}

Note that in the tree of the statistics, a child action can take longer than the parent. This is because the average durations are compared, and if you consider a microflow with a decision and most cases take the quick route while only some cases take the slow route, then the average of the parent is faster than the average of the slow route child.

The **History** tab gives insight into the duration and count over time. These insights help to detect trends and see if the optimizations were successful. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/statistics_history.png" class="no-border" >}}

Using the **Manual snapshots** tab, it is possible to create a manual statistics snapshot. When clearing the counters, the manual statistics are reset. This can be helpful to collect data over a small period of time.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/manual_snapshot.png" class="no-border" >}}
