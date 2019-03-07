---
title: "Testing & Tuning"
parent: "mendix-performance"
description: ""
menu_order: 3
tags: [ ]
draft: true
---

{{% todo %}}[**NEED DIAGRAMS FOR THIS DOC**]{{% /todo %}}

## 1 Introduction

Performance testing and tuning is really the core of the recipe for apps that start reaching the limits of what normal modelling allows for. Professional testing tools and monitoring is used, and a skilled and experienced Mendix modeller will run the tests, analyze the results, change things, and test again. In this way, they will optimize the app for the specific high-volume situation it needs to handle.

## 2 Test Levels

Testing is a time-consuming task, so it is important to do the right level of testing for each situation so that you are not wasting time and money. You need to be able to focus on where the testing is really needed.

For small apps where the volume is low, a developer can run though functional testing in less than an hour. For medium-sized and large apps where the volume should also be tested, you could decide to do one performance test only before the first go-live.

For the most critical and high-volume apps, you can run an entire series of tests. The product-release cycle will include a sizable performance testing and tuning period before the planned go-live.

This table presents the recommended tests for various scenarios:

| Tests Recommended | Funct. Test | Funct. Test | Occasional Perf. Testing | Prof. Load Test | Arch. for Perf. Prof. Load Test |
| --- | --- | --- | --- | --- | --- |
| **# Records in Database** | < 100k | < 1m | < 5m | < 50m | 500m or more |
| **# Concurrent Users** | < 20 | < 100 | < 500 | < 5k | 200k or more |
| **# Service calls per Second** | < 5 | < 10 | < 50 | < 500 | 2k or more |

## 3 Testing & Tuning

When it is determined that separate performance testing is desired, follow these steps:

1.  Determine which situation to test against, including the following parameters: 
	* Which load
	* Which amount of data in the database
	* Which response times
2.  Determine the preliminary infrastructure sizing to test against, or test against more than one configuration to find the most suitable setup.
3.  Decide which types of testing are required (for details, see the [Types of Performance Testing](#types-testing) section below).
4.  Select the tooling for testing and monitoring:
	* Higher volume and criticality requires better monitoring
	* For more frequent testing, more professional tooling makes sense
5.  Plan how to reproduce the real-time situation as well as possible.
6.  Iterate over performance testing, analysis, and tuning: <br />
	a. Perform the various performance tests. <br />
	b. Analyze the results, looking at both response-times and infra usage. <br />
	c. Tune the system (which often involves some limited re-modelling of the app). <br />
7.  When the tuning is at the right level for maintainability and use, there is a final reassessment of the sizing and scaling of the infrastructure.

## 4 The Right Tuning

There is a balance between tuning, sizing, and maintainability. Easy tuning options can include the following:

* Using indexes for frequently queried tables
* Storing some data as unstructured data
* Limiting the number of associations used in the database
* Improving microflows and UX design

More advanced tuning may include SQL and Java, which affects maintainability. In very high-volume cases and where functionality is stable, this makes sense. However, it should not be used everywhere, as it may be better to size up the infrastructure.

Testing different options as part of the testing and tuning iterations helps to find the best ways forward.

## 5 Types of Performance Testing {#types-testing}

* **Functional testing** – This is regular testing that includes, for example, unit testing, GUI testing, service testing, and UAT testing with end-users. For small apps, testers can see immediately if there is an issue. Some tuning can be done to fix problems, and retesting can be done afterwards.
* **Load testing** – This type of testing should give attention to one area of a specific app. This could be a large number of users (often using LoadRunner) or a large amount of service calls (using, for example, Soap UI, JMeter, or any other tool). A defined load and response time must be verified, and if it is not met, tuning, scaling, or both will be required. Nodes should be around 70% utilized at the load level being tested.
* **Stress testing** – This testing increases the volume to a level where the system crashes or slows down unacceptably. Stress tests often show weaknesses in the system and enable tuners to remove the weaknesses, after which the stress test is done again and other issues are found. This testing is important for more critical apps. It informs the team about *where* the system can break so that good operations processes can be set up to manage failures.
* **Soak testing** – This is a way to run the full production load through the system over a longer time (for example, 2–3 weeks). This fits the STP scenario and verifies how the system reacts over time, catching memory leaks and other problems. It also often finds functional edge cases, because such a large set of data is run through the system.
* **Recovery testing** – This type tests how the app recovers from various crashes. Failover and fallback scenarios are tested. App nodes and/or database servers are taken down, and the expected infrastructure redundancy and/or procedures are verified. In addition, rolling back deployments, restoring from a database backup, and the other potential manual steps required when recovering from a system or deployment failure are tested. The intention is to minimize the time and effects of unplanned downtime.

## 6 Test Automation

Test automation is another stability enhancer, because automation never tires of verifying the same thing over and over. This is more important for large and critical systems.

Almost all regression testing can be automated. If set up with performance KPIs, it can also help developers identify when they made a change that drastically reduced performance by comparing execution times between nightly runs.

This table presents test automation recommendations:

| | Not Required | Optional | Funct. with Perf. KPIs | Funct. with Perf.  KPIs | Funct. & Perf. Test |
| --- | --- | --- | --- | --- | --- |
| **Functional Size** | Very small | Small | Medium | Large | Very large |
| **Criticality of System** | Low | Medium | High | Core | Business critical |
| **Uptime Requirement (in Business Hours)** | 95% | 98% | 99.5% | 99.5% 24/7 | 99.95% 24/7 |

Setting up and maintaining test automation takes time. Automating functional tests is said to take 30–50% of development time, while saving ~90% of the time for regression tests.

Test automation makes a lot of sense for large apps with a lot of functionality and continued new development. It makes less sense for small apps that are developed in 2–3 months by one single developer who can retest all the app's functions in a couple hours.

Professional performance testing can also be automated (for example, via JMeter). Such automation provides a nightly view on the performance of key parts of the functionality as they evolve during development; the areas we know from manual performance testing are critical

{{% todo %}}[**HANGING CLAUSE AFTER SEMI-COLON IN LAST SENTENCE; PLEASE COMPLETE SENTENCE OR DELETE**]{{% /todo %}}

However, for critical systems that need regular performance testing and tuning, automated testing will just shorten the performance test cycle. Manually-run performance, stress, and load tests are still required, and the tester should be a technical expert that can read the metrics data from the tests. 

The performance testing that should be automated depends on the character and functionality of the app or microservice system. Functional and technical analysis will identify which areas are most efficient to automate first.

## 7 Different Strategies for Testing, Tuning & Sizing

Many strategies can be applied for performance and stability, because one size does not fit all. For example:

* A bank may be so focused on stability that it requires performance testing and automated testing for all apps, despite the extra costs
* One customer may prefer to buy more infrastructure to save on performance testing
* Another customer may save on infrastructure by investing in performance testing and tuning
* And another customer may do stress tests to see where the apps break and then size based on that
