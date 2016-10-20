---
title: "Setting up monitoring with New Relic"
category: "On-premises Deployment"
space: "Mendix 5 How-to's"
---

When setting up a Mendix application on-premise, you can set up advanced monitoring with New Relic. This works with both Windows and Linux deployments.

## Preparations

1.  Set up a trial account with New Relic at [https://newrelic.com/](https://newrelic.com/)
2.  Follow the New Relic for Java installation here: [https://docs.newrelic.com/docs/agents/java-agent/installation/java-agent-manual-installation](https://docs.newrelic.com/docs/agents/java-agent/installation/java-agent-manual-installation)
3.  As noted in the guide in step 2: unzip the newrelic.zip into a directory that the user of the Mendix process has access to (i.e. the user home directory)
4.  Check the newrelic.yml file in the unzipped newrelic directory, make sure you read through the settings and that you understand the security implications
5.  Follow the Linux / Windows specific steps below to complete the installation

### Linux specific steps

1.  Add '-javaagent:/PATH/TO/NEWRELIC.JAR' to your java options in the m2ee.yaml file. Make sure to replace the path to the actual path of the newrelic.jar.

The configuration section in m2ee.yaml should look something like this:

```
 javaopts: [
 "-Dfile.encoding=UTF-8", "-XX:MaxPermSize=64M", "-Xmx256M", "-Xms256M",
 "-Djava.io.tmpdir=/path/to/project/data/tmp",
 "-javaagent:/home/mendix-user/newrelic/newrelic.jar",
 ]
```

### Windows specific steps

1.  Add  '-javaagent:/PATH/TO/NEWRELIC.JAR' to your java arguments in the Windows Service Console

![](attachments/12879935/13402537.png)

<div class="alert alert-info">{% markdown %}

After you restart the application your data should show up in New Relic. Note that this requires the application to send data to New Relic servers, so your firewalls should be configured to allow this traffic.

{% endmarkdown %}</div>

## Related content

*   [Setting up monitoring with New Relic](Setting+up+monitoring+with+New+Relic)
*   [Finding the Root Cause of Runtime Errors](Finding+the+Root+Cause+of+Runtime+Errors)
*   [Clearing Warning Messages in Mendix](Clearing+Warning+Messages+in+Mendix)
*   [Testing web services using SoapUI](Testing+web+services+using+SoapUI)
*   [Debugging Microflows](Debugging+Microflows)
*   [Common Mendix SSO Errors](Common+Mendix+SSO+Errors)
