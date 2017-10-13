---
title: "2.0"
parent: "2"
---

## 2.0.0

**Release date: October 19th, 2017**

### More Platform Integration

Getting started with ATS has never been easier. We’ve put a lot of effort into ensuring that the onboarding of new users is as smooth as possible. Existing users can enjoy zero maintenance and a well-known user interface.

We did so by providing a single, multi-tenant SaaS instance of ATS in the Mendix cloud. This instance comes with the same styling and usability as the Mendix cloud portals.

#### Application Test Suite as a Service

ATS is now offered as a service. There's a single, multi-tenant instance in the Mendix cloud to serve all customers:

<http://ats.mendix.com>

This instance is operated and maintained by Mansystems and Mendix. As a customer you can enjoy the typical SaaS benefits. Mansystems and Mendix deliver maintenance, updates, and fixes faster than ever. You can access new features as soon as we publish a new release.

All customers can use this instance without affecting each others work. Data is strictly separated per app. Every user can only access data from his apps.

#### SSO and App Synchronization

You don't want to spend time on setting up and configuring an application before using it the first time? We agree!

As soon as you open <http://testing.mendix.com> you will be automatically signed in with your Mendix account. 

After login the ATS dashboard shows all your licensed apps. From here you can select one of your apps and start testing.

### New Style and Improved Usability

When you open the new ATS it will look very familiar.

Earlier this year Mendix has released a restyled version of their cloud portal. We liked it so much that we decided to adopt it for ATS.

But there's more than only a new styling. We've simplified the navigation structure and reduced the number of screens. Finally the most important screens have been completely rebuilt:

#### Dashboard

This is the first screen you see when you open your app in ATS. It shows you all test results and statistics on one page (exportable into a pdf).

We have improved the load time of the dashboard by precalculating all required data. It updates as soon as a job has finished.

#### Repository

Via the repository you are able to browse all your folders, actions, test cases and test suites. We've introduced a new layout on this page similar to file system explorers. You can perform actions on a single item or many items at once. The powerful search-on-type function will search within subfolders.

#### Test Case Editing

Editing test cases is one of the main tasks in ATS. We've listened to your feedback to improve this page. Test cases can become very large, so we use the same list-like view as in the repository to show all test steps. When you click a step it will expand and expose all details for you to edit. Click again to collapse. Reordering of steps has been a pain and is now a joy. We give you drag and drop!

#### Results and Logs

Browsing jobs results and logs is another common task. Again we're making use of the same list-view as in repository. Not only to be consistent, but to provide similar functions. Also all jobs are now updated in real-time down to the test case level. Run a big test suite and drill down into the job to see the live status and results of all contained items.

### Faster Test Execution

A new hope... err test runner. The core component of ATS is the test runner. It interprets your test cases, test suites and actions, executes them and returns a result. We've rebuilt it from scratch with a single purpose in mind: performance.

We achieved to increase the speed of test execution by 100% and more. This enables you to do more testing in less time.

Running test cases in parallel is another way to speed up execution time. While this was already possible before we've optimized it. The runner can now retrieve the supported concurrency level from your Selenium provider. It's no longer up to the user to configure this.

### Getting a Grip On Test Case Dependencies

While not preferred it is sometimes not avoidable to have dependencies between test cases. If there's a dependency between two test cases you need to run them in order. There's no way around that. But this should not affect other test cases without this dependency.

So far, your only option was to scale down your concurrency and run everything sequentially. Effectively you had to give up the time win of concurrency. This is no longer necessary.

We've introduced a new setting for test suites. With this setting you can control whether the content of your test suite is executed in parallel or sequentially.

The best part of this new setting is that you can combine test suites with different settings and create any structure that you need. Sequentialize where necessary, parallelize where possible and get your test results in the shortest possible time.

### Cross-Platform Testing

Mendix apps are cross-platform and responsive. Your users can access your app from different browsers, operating systems and screen resolutions. To ensure quality across all platforms you'll need to cover more than just one configuration.

It was already possible to switch between Chrome and Firefox browser. On top of that it is now possible to select between different operating systems and screen sizes.

Since the number of possible options is very high, we've made a pre-selection that gives you a good real-world coverage. You can select between two browsers, 8 operating systems and 5 screen resolutions.

Browsers: Chrome and Firefox (Internet Explorer 11 & Edge are planned)

Operating systems: Windows 10/8/7/XP & Mac OS 10.9 - 10.12

Screen resolutions: FullHD (1920x1080), UXGA (1600x1200), SXGA (1280x1024), UVGA (1280x960), XGA (1024x768)

### Introducing an API for Continuous Delivery & Deployment

Do you plan or already do practice DevOps in your team? Then you'll want to put in place continuous delivery or even continuous deployment. To do so you'll need to automate as much as possible, including testing. Not only by automating the tests, but by automating the whole process. From triggering the test run to checking the results. With ATS this is now possible.

We've extended ATS with a new simple API. Via this API you can run your automated tests from any external tool. A good option for such a tool is Jenkins. We've documented how to setup Jenkins with ATS in a How to (You can find all How to's on <https://docs.mendix.com/ats/>).

### More Changes and Fixes

* There's a completely new reference guide for 2.0
* We've introduced a new setting per app to schedule the cleanup of your execution logs. The default retention time for your logs is 90 days. The last log of a test case is always kept.
* We've improved overall performance by optimizing security rules.
* Drop-downs are now configured as part of a parameter where they're used. They are no longer considered independent but only an option for parameters.
* The cancelling of jobs was sometimes not reliable. We've fixed this.
* Improved log output (better readable)
* Autocomplete function to search for actions, test cases or values
* Centralized settings page per app
* Application wide type icons with tooltips
* Description texts on many pages

### Terminology

The following terminology has changed.

* Package --&gt; Folder
* Project --&gt; app
* Datatypes
  * Integer --&gt; Number
  * String --&gt; Text
  * Enumeration --&gt; Drop-Down
  * Web Element --&gt; Page Element
  * Undefined --&gt; Any
  * Boolean --&gt; Boolean
* Job as a new term for test run
* New statuses and results in the test runner
  * Status: Queued, Running, Done
  * Result: Passed, Failed, Cancelled, Skipped

### Removals

Some of changed described above made existing functionality obsolete so we could remove it.

- The whole setup and administration of tenants, apps, permissions, accounts and roles has become obsolete and is no longer available.
- The option to set the concurrency limit for a selenium endpoint has been removed. The limit is determined by the test runner.
- The log depth settings has been removed. We now log every step down in your test cases and custom actions down to the core actions.

The following features have been removed as a result of design decisions:

* Datatypes: DateTime, Float and Currency (deprecated now and will be removed soon)
* Folder visibility
* Custom error message removed
* Proxy settings
* Enable screenshot \(both on job config and test step config\)
* Quick-run

### Minor Fixes

Many bugfixes and small changes, including everything from the 1.8 branch. Please check the release notes from 1.8 for an overview of these changes.
