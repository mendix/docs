---
title: "Use Cases"
space: "Other Add-Ons"
category: "APM"
---

#APM Use cases#
The APM Tools have been used extensively by Mansystems’ developers and support engineers in developing and supporting ExpertDesk and other Mendix applications. The tools were originally developed to overcome the difficulties of analyzing performance issues in Mendix without the proper information and have grown to an application monitoring and analysis suite.

## Generic ##
The trap module is always on in development, test, acceptance and production and is used to have all logging immediately available when an error occurs.

The statistics module is always on to collect valuable statistics. Snapshots are stored frequently and also on shutdown of the Mendix application, so during development also interesting comparing analyses can be done. In production you can look at the functionality that takes the most time to optimize this functionality. Also you can look at the trend to see performance issues coming. It is possible to drilldown on the statistics and get detailed information about the duration of microflows and actions.

The Log module is used for cases that need analysis, but have no specific trigger, so when a trap is not fired. Also in production the log tool makes logging available and searchable to support engineers without the need for technical application support to deliver a file or worse turn on and off the logging and then deliver the file.

The Browser recorder will give insights in the performance of a user perspective. The client(browser) requet en repsonses will be monitord. This will also give insights  in the duration of loading pages, widgets, grids etc. And in the size and details of the request from the client(browser) and repsonses from the server.

## In development ##
During the development the statistics module or performance module is used when a function is seen as slow. Also it can be used to verify the expected flow/path is followed.

Instead of debugging with breakpoint you can just record everything and analyse afterwards. This is especially helpful in complex modules with web service interfaces and scheduled events were you cannot simply follow a flow.

The trap module is saving time because logging from an error is immediately stored and you can even run the microflow logging through the performance tool. In development the trap tool records a longer period of time, so trap memory can be used to send to the performance tool and see what is happening.

The statistics module snapshots are stored also on shutdown of the Mendix application, so during development also an interesting comparing analyses can be done. By drillingdown on the statistics results this will give detailed information.

The Browser recorder can be used to get performance information about new build or changed pages and used widgets. Get information about the duration of loading widgets and grids. Get information about the data retrieved. 


## In test ##
During the test and acceptance phase other users than the developer are testing and using the application. Now it is especially important to collect information for further analysis if they find an issue.

Also statistics on a production-database-dump may give other insights than on a small development sample. It is possible to drilldown on the statistics and get detailed information about the duration of microflows and actions. 

The performance tool can be always turned on with a small threshold to capture the microflows that might be interesting to tune.

Another strategy would be to record all MicroflowEngine with the log tool to be able to see what the users have done afterwards.

## In production ##
The trap module is used to have all needed logging immediately available when something unwanted occurs. Off course the first day the trap log is monitored and exclusions are made for often occurring warnings or known errors.

The statistics module is running to collect frequent, for example daily or hourly statistics.  If the system is slow the statistics module can be used to see what is running now.

The statistics will give insights in click path behavior of the users. How do they use the application and what is the duration of opening the pages.


## In a load test ##
When generating load the statistics and performance module are used to analyse what is happening within the application. The resutls of several loadtest can be compaired to see what for influence the load does have on the duration of microflows and actions. The browser recorder can be used to see if the loadtest does have influence on the user perspective.

Several tests can be compared to each other by using the marker to mark microflows as belonging to a certain lab setup