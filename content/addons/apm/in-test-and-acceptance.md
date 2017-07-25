---
title: "In test and acceptance"
parent: "use-cases"
---
During the test and acceptance phase other users than the developer are testing and using the application. Now it is especially important to collect information for further analysis if they find an issue.

Also statistics on a production-database-dump may give other insights than on a small development sample.

The performance tool can be always turned on with a small threshold to capture the microflows that might be interesting to tune.

Another strategy would be to record all MicroflowEngine with the log tool to be able to see what the users have done afterwards.
