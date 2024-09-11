---
title: "Detect and Resolve Performance Issues"
url: /howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/
---

## Introduction

Any application can run into performance issues. This document describes a number of performance issues you may run into, some root causes, and how you can resolve these issues.

The flow chart below, which is designed like a microflow, presents infrastructure for deciding how to troubleshoot and resolve performance-related issues. This document is based on this flow.

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580226.png" class="no-border" >}}

## Issues

Performance issues typically manifest themselves for end-users in one of two ways: either an action takes too long to complete (a page feels slow or unresponsive), or an entire page loads slowly. In both cases, some process is running too long or too many times to complete a specific task. Your goal should be to identify which tasks in particular are causing your issue, and then focus your effort on optimizing those tasks.

First, you will need to identify if your issue is UI-centric or microflow-centric:

* If a page is taking a long time to initially load or if a page gets slow or unresponsive after clicking a microflow button, a microflow is most likely slowing your application down
* If the UI feels glitchy or slow after the page has loaded, you may have a UI-centric issue

{{% alert color="info" %}}
All performance issues are extremely context-sensitive, which means there is no single cure-all for a performance problem. This document will attempt to address common issues and how you can resolve them.
{{% /alert %}}

## Slow UI

If your user interface is slow, you will need to figure out whether this is due to slow microflows called by the page or to a large number of calls made by the UI. To determine this, you need to use a web browser with developer tools (a console, debugger, performance tools, etc.) like [Firefox Developer Edition](https://www.mozilla.org/nl/firefox/developer/).

In an example scenario, you run tests on your app and find that you have 26 XPath retrieves for a single page load. You may be able to see the run times for each step and how long each step waited before starting. Some retrieves may take longer than others, but the fact that you have such a large amount of retrieves occurring is also a potential issue.

Once you have identified the cause for your slow UI—either [too many loads](#loads) or [slow loads](#slow)—you can move on to the sections below.

### Too Many Loads {#loads}

If you have too many loads occurring on a single page, review the page structure in Studio Pro to determine if that number can be reduced. Here are a few common causes of large number of loads:

* Many data grids
* Many nested dataviews
* Many reference selectors
* Many tabs
* Widgets

Every situation is unique, but you are well on your way to finding your slow component. From here, sometimes trial and error can work best. Remove objects from your page until it speeds up to narrow down the slow component.

### Slow Loads {#slow}

If you have determined that slow loads are your issue, take a look at the slow load with your developer tools and determine where it comes from. The sections below address specific examples.

#### Slow Network

If your data transfers are taking a long time for a small amount of data, you may wish to contact a system administrator for further assistance. This document focuses on issues you can resolve within your application model.

#### Retrieve Action

If you find that a particular retrieve action is slow, you can work to simplify it. Review the following:

* Complex XPath
* Missing indexes
* Combined security rules (as in, there is a user with multiple user roles, each with complex security)

#### Microflow

If your slow action occurs via microflow, see the [Slow Microflows](#slow-micro) section below for information on troubleshooting.

## Slow Microflows {#slow-micro}

If your performance issue is caused by a microflow, you need to find which microflow and which activities are the slowest in that microflow.

Sometimes, identifying the slow activity and activities in your slow microflow will be obvious. You may have a single microflow with just a few steps, and one of them is egregiously slow. If this is the case, move on to the next section and focus on optimization. If not, continue on below.

Tools you can use to identify your slow microflow and the specific slow activities in that microflow are described in the sections below.

### Server Monitoring

The Mendix Server and [Apps](/developerportal/) offer a number of performance graphs and logs.

### Microflow Debugger

Once you have identified a slow page, it is easy to identify which microflows are executed on that page. Make sure you look at directly referenced microflows (such as data sources), and also at sub-microflows, on-change event handlers, and domain model event handlers that could be called by your page.

Setting a break point and stepping through these relevant microflows can often give you a quick (although subjective) way to find a slow action (for details, see [How to Debug Microflows](/howto8/monitoring-troubleshooting/debug-microflows/)). If you cannot subjectively identify your slow process, move on to the next step.

### Microflow Time Stamps

Times stamps can allow you to objectively identify slow microflows and activities by timing their execution. To do so, consider a simple microflow like this:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580222.png" class="no-border" >}}

To set up a timer, first add a **Create variable** activity as the first step, where you are going to store the current time:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580221.png" class="no-border" >}}

Then, add a **Log message** activity at the end of your microflow:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580219.png" class="no-border" >}}

Set up the activity similar to this:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580220.png" class="no-border" >}}

Here, you are calculating the number of milliseconds between when your microflow began and when it completed, and then writing that out to the console as info. When you run your app, you will see a line in the console every time this microflow executes. The message will contain the execution time.

Add microflow timers until you find your culprit microflow, then add extra timers in that microflow to determine which activity is the slow one. When you find a slow activity, see the [Optimizing Microflow Activities](#optimizing) section below. These sections present details on how to optimize your microflow as a whole.

## Optimizing Microflow Activities {#optimizing}

### Slow Database Retrieves

Slow retrieves can occur for a number of different reasons, such as:

* Sub-optimal XPath
* Complex security XPath
* Missing indexes
* Complex calculated attributes
* Large number of objects retrieved (see the [Batches](#batches) section below)

Additionally, for details on how denormalization can improve your app performance in some cases, review [How to Denormalize Data to Improve Performance](/howto8/data-models/denormalize-data-to-improve-performance/).

### Slow Database Commits

Slow commits are often caused by a before-commit or after-commit event. Review those microflows for slow activities.

If you are committing large amounts of data (for example, thousands of rows), you might consider using batching to improve performance. Additionally, check for use of the [Refresh in client](#refresh) property.

#### Batches {#batches}

Below is an example of how to retrieve in batches. You can do something quite similar for commits as well.

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580216.png" class="no-border" >}}

#### Refresh in Client {#refresh}

The **Refresh in client** property of a change or commit activity is quite useful to provide updated information to your user. However, when committing large numbers of rows, this can slow you application down, as it attempts to update thousands of rows in your client's browser. Consider turning it off if possible.

### Slow Sub-Microflow

If you find that you have a slow sub-microflow, begin the process of identifying the slow activity within the microflow, based on the [Slow Microflows](#slow-micro) section above.

### General Slow Microflow (No Specific Activity Identified)

If your microflow is slow as a whole but there is no particular activity that stands out as the culprit, consider the structure of your microflow. The sections below describe a number of possible issues.

#### Many Commits

If you find yourself committing data inside a loop, you can typically optimize this by making changes to your entities and storing them into a list. For example, consider this microflow:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580218.png" class="no-border" >}}

Every time the loop executes, an **Order** object is committed. You can optimize this by committing the entire list outside the loop after processing is completed. Simply set the **Commit** property to **No** on the **Change order** activity, then add a commit of the entire OrderList outside the loop:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580217.png" class="no-border" >}}

This ultimately reduces the number of database operations that need to be performed during execution of your microflow, thus enhancing performance.

#### Many Retrieves

If your microflow performs multiple retrieves, especially in a loop, this may be the cause of your performance issues. To optimize this, think about how you could retrieve data in lists outside of a loop. 

Additionally, check for any calculated attributes on your retrieved entities, as they are calculated every time you retrieve that entity, regardless of whether they are actually used.

#### Unnecessary or Nested Loops

If you find that your microflow has a large number of objects to loop over, or especially if your microflow has nested loops, execution time can escalate quickly. In this situation, think about your domain model architecture and how an additional entity, attribute, or association might make it more simple to access the information you need. You might also be able to more effectively use XPath rather than search in a loop for a particular object.

As always, make sure you look at the retrieves and commits performed in your loops, and try to minimize them wherever possible.

## Read More

* [Expert Webinar Series: Performance](https://youtu.be/xNR3BjJYt3U)
