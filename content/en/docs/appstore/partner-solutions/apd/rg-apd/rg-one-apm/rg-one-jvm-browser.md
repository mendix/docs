---
title: "JVM Browser"
url: /appstore/partner-solutions/apd/rg-one-jvm-browser/
---

## Introduction

A JVM Browser shows information similar to JConsole or JVisualVM tools provided with the Java JDK. Using the **Refresh** button refreshes an individual item.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-jvm-browser/Overview.png" class="no-border" >}}                

Double-clicking an items drills down shows its details.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-jvm-browser/Details.png" class="no-border" >}}

You can start collecting statistics on individual items using the **Collect** button. These statistics can be viewed in the Measurements Tool.

## Additional JMX Exposed Statistics

The runtime statistics of the tools, measurements that expose to JMX as well as Mendix statistics are made available through JMX (when JMX is running).

The APM module has Java Actions to publish your own JMX data (for example, the result of a business rule).
