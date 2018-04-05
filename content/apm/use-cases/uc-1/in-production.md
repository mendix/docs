---
title: "In Production"
parent: "use-cases-1"
---
The trap tool is used to have all needed logging immediately available when something unwanted occurs. Off course the first day the trap log is monitored and exclusions are made for often occurring warnings or known errors.

The statistics tool is running to collect frequent, for example daily or hourly statistics.  If the system is slow the statistics tool can be used to see what is running now.

Also a brief run of the performance tool can be done if some issue cannot be reproduced on other environments or the other environments so a different behaviour. This can be done with good protection parameters so the performance tool does not claim too much memory or resources.

The measurements tool can be used to collect application specific metrics and build triggers for when they exceed thresholds. The measurements tool can also be used to detect new deployments and send an email to inform people about this.
