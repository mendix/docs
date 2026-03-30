---
title: "Load Test Recorder"
url: /appstore/partner-solutions/apd/rg-one-load-test-recorder/
---

## Introduction

The load test recorder is a recorder for sessions to be used in a separate tool. It is only seen with 
special permissions. CLEVR has a load test tool that can be used in projects by our consultants. 
The load test tool is NOT INCLUDED in the APM Tool!

The APM Tool includes the load test session recorder, so APM Tool users do not need to do a deployment to have CLEVR run a load test.Load test customers will need the APM Tool for measurements and hence also benefit from the combination. 

## Load Test Recorder

You can start and stop the Load Test Recorder. The followingscreenshot below shows the Log Tool when started:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-load-test-recorder/Control.png" class="no-border" >}}

You can Start and stop timers to mark individual functionality in the session. This helps the load tool to measure those functions.

## Load Test Recorder Options

The following screenshot shows the Load Test Recorder Options:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-load-test-recorder/Options.png" class="no-border" >}}

The **Max messages to record** can limit the amount of records in memory. The recording stops when the maximum is reached.

The option **Run fixed period of time (seconds)** can be used to predetermine the amount of time a Load Test Recorder runs.

You can configure the Load Test Recorder to stop if a queue builds up with too many messages. This is controlled by a parameter called the **Max Processing Delay (ms)** that measures the delay between the moment the log record is logged in the queue and the moment the log record is processed by the Load Test Recorder.

## Recorded Sessions

The recorded sessions can be downloaded from the recorded sessions tab.
{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-load-test-recorder/Overview.png" class="no-border" >}}
