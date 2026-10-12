---
title: "APD 3 Use Cases"
url: /appstore/partner-solutions/apd/uc-three/
weight: 10
---

## Introduction

The APD tools are used extensively by [CLEVR](https://www.CLEVR.com/) Developers and Support Engineers. The tools were originally developed to overcome the difficulties of analyzing performance issues in Mendix without proper information, and they have grown ino to an application performance diagnosis suite.

## Generic

The **Trap** module is always on in development, test, acceptance, and production. It is used to have all the logging immediately available when an error occurs.

The **Statistics** module is always on to collect valuable statistics. Snapshots are stored frequently and also on the shutdown of a Mendix application, so during development, comparative analysis can also be done. In production, you can look at the functionality that takes the most time to optimize. In addition, you can look at trends to see performance issues coming. Finally, it is possible to drill down on statistics and get detailed information about the duration of microflows and actions.

The **Log** module is used for cases that need analysis but have no specific trigger (meaning, when a trap is not fired). Also, in production, the log tool makes logging available and searchable to support engineers without the need for technical application support to deliver a file (or worse, turning the logging on and off and then delivering the file).

The **Browser recorder** gives insights into performance from a user perspective. The client (browser) requests and responses will be monitored. This also provides insights into the duration of loading pages, widgets, and grids as well as into the size and details of the request from the client (browser) and responses from the server.

## In Development

During development, the **Statistics** or **Performance** module is used when a function is seen as slow. Also, it can be used to verify that the expected flow/path is followed.

Instead of debugging with a breakpoint, you can just record everything and analyze afterwards. This is especially helpful in complex modules with web service interfaces and scheduled events where you cannot simply follow a flow.

The **Trap** module saves time, because logging from an error is immediately stored and you can even run the microflow logging through the performance tool. In development, the trap tool records a longer period of time, so trap memory can be sent to the performance tool to see what is happening.

The **Statistics** module snapshots are stored on the shutdown of a Mendix app, so during development, useful comparative analysis can be done. Drill down on the statistics to see detailed information.

The **Browser recorder** can be used to get performance information about a new build, pages changed, and widgets used. You can get information about the duration of loading widgets and grids as well as about the data retrieved.

## In Test

During the test and acceptance phase, other users than the developer test and use the application. It is especially important then to collect information for further analysis if they find an issue.

Statistics on a production database dump may give other insights than on a small development sample. It is possible to drill down on the statistics and get detailed information about the duration of microflows and actions.

The performance tool can always be turned on with a small threshold to capture the microflows that might be interesting to tune.

Another strategy is to record the microflow engine with the log tool to see what the users have done afterwards.

## In Production

The **Trap** module is used to have all the necessary logging immediately available when something unwanted occurs. The first day the trap log is monitored, exclusions are made for warnings occurring often or known errors.

The **Statistics** module is run to collect frequent statistics (for example, daily or hourly).  If the system is slow, this module can be used to see what is running.

The statistics will give insights in user click-path behavior for how they are using the app and what the duration is for opening pages.

## In a Load Test

When generating load, the **Statistics** and **Performance** modules are used to analyze what is happening within the app. The results of multiple load tests can be compared to see what influence the load has on the duration of microflows and actions. The browser recorder can be used to see what influence the load test has on the application from the user's perspective.

Several tests can be compared to each other by using the marker to mark microflows as belonging to a certain lab setup.
