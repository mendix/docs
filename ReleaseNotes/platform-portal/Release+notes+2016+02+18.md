---
title: "Release notes 2016-02-18"
category: "Platform Portal"
space: "Release Notes"
---


## Features

*   Advanced Runtime Settings can now be configured for the paid tiers in Mendix Cloud applications. You can find a list of all custom settings here: [Custom Settings](https://world.mendix.com/display/refguide6/Custom+Settings)
*   The advanced settings LogMinDurationQuery and ClientQueryTimeout have been enabled by default. LogMinDurationQuery will print all database queries that take longer than 10 seconds to the application log and ClientQueryTimeout will cancel database select queries triggered from the Client that take longer than 15 minutes, which is when the http timeout has kicked in so the results can not be delivered and the query can safely be killed. A restart of the application is required for these changes to take effect.