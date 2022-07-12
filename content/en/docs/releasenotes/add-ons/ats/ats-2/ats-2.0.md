---
title: "2.0"
url: /releasenotes/add-ons/ats-2.0/
weight: 100
---

## 2.0.0

**Release date: October 19th, 2017**

### More Platform Integration

Getting started with ATS has never been easier. We’ve put a lot of effort into ensuring that the onboarding of new users is as smooth as possible. Existing users can enjoy zero maintenance and a well-known user interface.

We accomplished this by providing a single, multi-tenant SaaS instance of ATS in the Mendix Cloud. This instance comes with the same styling and usability as the Mendix Cloud Portal.

#### Application Test Suite as a Service

ATS is now offered as a service. There is a single multi-tenant instance in the Mendix Cloud to serve all customers:

[http://ats.mendix.com](http://ats.mendix.com)

This instance is operated and maintained by CLEVR and Mendix. As a customer, you can enjoy the typical SaaS benefits. CLEVR and Mendix deliver maintenance, updates, and fixes faster than ever. You can access new features as soon as we publish a new release.

All customers can use this instance without affecting each other's work. Data is strictly separated per app. Each user can only access the data from their apps.

#### SSO and App Synchronization

You should not have to spend time on setting up and configuring an application before using it the first time. So, as soon as you open [http://ats.mendix.com](http://ats.mendix.com), you will automatically be signed in with your Mendix account. 

After login, the ATS dashboard shows all your licensed apps. From there, you can select one of your apps and start testing.

### New Style and Improved Usability

When you open the new ATS, it will look very familiar.

Earlier this year, Mendix released a restyled version of the Mendix Cloud Portal. We liked it so much that we decided to adopt it for ATS.

There is more than just new styling. We have simplified the navigation structure and reduced the number of screens. Finally, the most important screens have been completely rebuilt. These are described in the sections below.

#### Dashboard

This is the first screen you see when you open your app in ATS. It shows you all test results and statistics on one page (and is exportable into a PDF).

We have improved the load time of the dashboard by precalculating all the required data. It updates as soon as a job has finished.

#### Repository

You are able to browse all your folders, actions, test cases, and test suites via the repository. We've introduced a new layout on this page similar to file system explorers. You can perform actions on a single item or many items at once. The powerful search-on-type function will search within subfolders.

#### Test Case Editing

Editing test cases is one of the main tasks in ATS. We've listened to your feedback to improve this page. Test cases can become very large, so we use the same list-like view as in the repository to show all test steps. When you click a step, it will expand and expose all the details for you to edit. Click it again to collapse. Reordering of steps has been a pain, but it is now a joy. You can now drag and drop!

#### Results and Logs

Browsing job results and logs is another common task. Again, we're making use of the same list view as in the repository in order to be consistent and provide similar functions. Also, all the jobs are now updated in real-time down to the test case level. Run a big test suite and drill down into a job to see the live status and results of all the contained items.

### Faster Test Execution

A new hope with a new test runner. The core component of ATS is the test runner, which interprets your test cases, test suites, and actions, then executes them and returns a result. We've rebuilt it from scratch with a single purpose in mind: performance.

We increased the speed of the test execution by over 100%. This enables you to do more testing in less time.

Running test cases in parallel is another way to speed up execution time. While this was already possible before, we have optimized it. The test runner can now retrieve the supported concurrency level from your Selenium provider. It is no longer up to the user to configure this.

### Getting a Grip On Test Case Dependencies

While not preferred, having dependencies between test cases can be unavoidable. If there is a dependency between two test cases, you need to run them in order, there is no way around that. But this should not affect other test cases without this dependency.

So far, your only option was to scale down your concurrency and run everything sequentially. Effectively, you had to give up the time win of concurrency. This is no longer necessary.

We have introduced a new setting for test suites. With this setting, you can control whether the content of your test suite is executed in parallel or sequentially.

The best part of this new setting is that you can combine test suites with different settings and create any structure that you need. Sequentialize where necessary, parallelize where possible, and get your test results in the shortest possible time.

### Cross-Platform Testing

Mendix apps are cross-platform and responsive. Users can access your app from different browsers, operating systems, and screen resolutions. To ensure quality across all platforms, you will need to cover more than just one configuration.

It was already possible to switch between the Chrome and Firefox browserx. On top of that, it is now possible to select between different operating systems and screen sizes.

Since the number of possible options is very high, we have made a pre-selection that gives you good real-world coverage. You can select between two browsers, eight operating systems, and five screen resolutions:

* Browsers: Chrome and Firefox (Internet Explorer 11 & Edge are planned)

* Operating systems: Windows 10/8/7/XP, Mac OS 10.9–10.12

* Screen resolutions: FullHD (1920x1080), UXGA (1600x1200), SXGA (1280x1024), UVGA (1280x960), XGA (1024x768)

### Introducing an API for Continuous Delivery and Deployment

Do you practice DevOps on your team? Then you will want to put in place continuous delivery or even continuous deployment. To do so, you need to automate as much as possible, including testing. You need to not only automate the tests, but also the whole process, from triggering the test run to checking the results. With ATS, this is now possible.

We've extended ATS with a new simple API. Via this API, you can run your automated tests from any external tool. A good option for such a tool is Jenkins. We've documented how to set up Jenkins with ATS in a [How-to](/addons/ats-addon/ht-two-ats-and-ci-cd/).

### More Changes and Fixes

* There's a completely new [ATS Reference Guide](/addons/ats-addon/rg-two-ats/) for version 2.0.
* We've introduced a new setting per app to schedule the cleanup of your execution logs. The default retention time for your logs is 90 days. The last log of a test case is always kept.
* We've improved the overall performance by optimizing security rules.
* Drop-down menus are now configured as part of the parameter where they are used. They are no longer considered independent, and they are only an option for parameters.
* The cancelling of jobs was sometimes not reliable. We fixed this.
* We improved the log output so that it is more readable.
* We added an autocomplete function to search for actions, test cases, or values.
* We centralized the settings page per app.
* We implemented application-wide type icons with tooltips.
* We added description text on many pages.
* We dropped the support for a Selenium Standalone Server.

### Terminology

The following terminology has changed:

* "package" --&gt; "folder"
* "project" --&gt; "app"
* data types:
  * "integer" --&gt; "number"
  * "string" --&gt; "text"
  * "enumeration" --&gt; "drop-down"
  * "web element" --&gt; "page element"
  * "undefined" --&gt; "any"
* "test run" --&gt; "job"

There are new statuses and results in the test runner:

* Statuses: queued, running, done
* Results: passed, failed, cancelled, skipped

### Removals

Some of changes described above made existing functionality obsolete:

* The whole setup and administration of tenants, apps, permissions, accounts, and roles has become obsolete and is no longer available
* The option to set the concurrency limit for a Selenium endpoint has been removed; the limit is now determined by the test runner
* The log depth settings has been removed; we now log your test cases down to every step and custom actions down to the core actions

The following features have been removed as a result of design decisions:

* Data types: DateTime, float, and currency (which is deprecated now and will be removed soon)
* Folder visibility
* Custom error message
* Proxy settings
* Enabling screenshots (both on job and test step configuration)
* Quick run

### Minor Fixes

Many bug fixes and small changes have been maded, including everything from the 1.8 branch. For an overview of these changes, see [1.8](/releasenotes/add-ons/ats-1.8/).
