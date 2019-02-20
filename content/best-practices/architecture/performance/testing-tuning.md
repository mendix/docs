---
title: "Testing & Tuning"
parent: "mendix-performance"
description: ""
menu_order: 3
tags: [ ]
draft: true
---

Performance Testing and Tuning is really the core of the recipe for Apps that
start reaching the limits of what normal modelling allows for. Professional
testing tools and monitoring is used, and a skilled experienced Mendix modeller
will run the tests analyse the results, change things, test again, and this way
optimize the App for the specific high-volume situation it needs to handle.

### Test Levels

Testing is a time-consuming task and it is important to do the right level of
testing for each situation, not to waste time and money, and in order to focus
in on where testing is really needed.

For small Apps, where volume is low, a developer can run though the functional
testing in less than an hour. For Medium – Large Apps, where volume should be
tested, we may decide to do one Performance test only before first go-live.

For the most critical and high-volume Apps we will run an entire series of Tests
and the product release cycle will include a sizable performance testing and
tuning period before planned go-live.

| **Tests Recommended**    | **Functional test** | **Functional test** | **Occasional Perf testing** | **Prof. Load test**                                       | **Arch. For Perf. Prof. Load test**                             |
|                          |                     |                     |                             | **Occasional Stress Test & Soak Test**                    | **Stress Test**                                                 |
|                          |                     |                     |                             |                                                           | **Soak Test**                                                   |
|--------------------------|---------------------|---------------------|-----------------------------|-----------------------------------------------------------|-----------------------------------------------------------------|
| *\# Records in DB*       | \< 100k             | \< 1m               | \< 5m                       | \< 50m                                                    | 500m or more                                                    |
| *\# Concurrent Users*    | \< 20 users         | \< 100 users        | \< 500 users                | \< 5k users                                               | 200k users or more                                              |
| *\# Service calls / sec* | \< 5 calls/s        | \< 10 calls/s       | \< 50 calls/s               | \< 500 calls/s                                            | 2k calls/s or more                                              |

### Testing and Tuning

When it is determined that separated performance testing is desired, the task is
to:

1.  Determine which situation to test against: Which load, which amount of data
    in the database, which response-times etcetera

2.  Preliminary infrastructure sizing to test against. Or decide to test against
    more than one configuration to find the most suitable set-up

3.  Decide which types of testing is required (see next section)

4.  Select tooling for testing and monitoring.

    1.  Higher volume and criticality, requires better monitoring

    2.  For more frequent testing, more professional tooling makes sense

5.  Plan how to reproduce the real-time situation as well as possible

6.  Iterate over Performance Testing, Analysis and Tuning

    1.  Perform the various performance tests

    2.  Analyse the results, looking at both response-times and infra usage

    3.  Tune the system, often some limited re-modelling of the App

7.  When tuning is at the right level for maintainability and use, there is a
    final re-assessment of the sizing and scaling of the infrastructure.

### The Right Tuning

There is a balance between tuning, sizing and maintainability.

Easy tuning options can be: using indexes for frequently queried tables, store
some data as unstructured data, try to limit the number of associations used in
the data-base or other ways to improve Microflows and UX design, see guidelines
for this.

More advanced tuning may include SQL and Java which effects maintainability. In
very high-volume cases, and where functionality is stable, this makes sense. But
it should not be used everywhere. Then it is better to size up the
infrastructure.

A good Mendix modeller will soon learn the best ways forward and when not sure,
he/she will test different options as a part of the testing and tuning
iterations.

### Types of Performance Testing 

1.  **Functional Testing** is the regular testing including e.g.: Unit testing,
    GUI testing, Service testing and UAT Testing with end users. For small Apps
    the testers see immediately if there is an issue. Some tuning can be done to
    fix the problem and retested afterwards.

2.  **Load Testing** should focus on the area for attention for a specific App.
    It could be a large number of users, often using LoadRunner. Or a large
    amount of service calls, using e.g. Soap UI, JMeter or any other tool. A
    defined load and response time is verified. If it is not met, either tuning
    or scaling or both will be required. Nodes should be around 70% utilized at
    the load-level tested.

3.  **Stress Testing** increases the volume to a level where the system crashes
    or slows down un-acceptably. Stress tests often show weaknesses in the
    system and allows tuners to remove them, after which stress test is done
    again, and other issues are found. This is important for more critical Apps.
    It informs the team about *where* the system can break, to set up good ops
    processes to manage failure.

4.  **Soak Testing** is a way to run the full production load through the system
    over a longer time, e.g. 2-3 weeks. It fits the STP
    (straight-through-processing) scenario and verifies how the system reacts
    over time, catching memory leaks etcetera. It also often finds functional
    edge cases because such a large set of data is run through the system.

5.  **Recovery Testing** is testing how the App recovers from various crashes.
    Fail-over and Fall-back scenarios are tested. App nodes and/or DB servers
    are taken down and the expected infrastructure redundancy and/or procedures
    are verified. Also roll-back in deployments, re-store from DB back-up, and
    other potential manual steps that can be required when recovering from
    system or deployment failure. The intention is to minimize the time and
    effect of un-planned down-time

### Test Automation

Test-automation is another stability enhancer, because it never gets tired and
verifies the same thing over and over. It is more important for large and
critical systems.

Almost all regression testing can be automated. If set up with performance KPIs,
it can also help developers identify when they did a change that reduced the
performance drastically, by comparing execution times between nightly runs.

| **Test Automation Recommended** | **Not Required** | **Optional** | **Functional with perf. KPIs** | **Functional with perf. KPIs** | **Functional & Perf. Test** |
|---------------------------------|------------------|--------------|--------------------------------|--------------------------------|-----------------------------|
| *Functional Size*               | Very Small       | Small        | Medium                         | Large                          | Very Large                  |
| *Criticality of System*         | Low              | Medium       | High                           | Core                           | Business Critical           |
| *Up time requirement*           | 95% Biz hrs      | 98% Biz hrs  | 99.5% Biz hrs                  | 99.5% 24/7                     | 99.95% 24/7                 |

Setting up and maintaining test automation takes time. Automating functional
tests is said to add 30-50% of development time, while saving \~90% in
regression test.

It makes a lot of sense for large Apps with a lot of functionality and continued
new development. It makes less sense for a small App that is developed in 2-3
months by one single developer, and that can re-test all functions within a
couple of hours.

Professional performance testing can also be automated, via e.g. JMeter. It
gives a nightly view on performance on key parts of the functionality is
evolving during development; the areas we know from manual performance testing
are critical

However, for critical systems that need regular performance testing and tuning,
the auto testing will just shorten the performance test cycle. Manually run
performance test, stress test and load tests are still required, and the tester
should be a technical expert that can read the metrics data from the tests.

The performance testing that should be automated depends on the character and
functionality of the App or microservice system. Functional and technical
analysis will identify which areas most efficient to automate first.

### Different Strategies for Testing, Tuning and Sizing

Many strategies can be applied for performance and stability and not one size
fits all:

-   A Bank can be so stability focused that it requires performance testing and
    automated testing for all Apps, despite the extra cost.

-   One customer prefers to buy more infra to save on performance test

-   Another one saves on infra, by investing in performance test and tuning

-   Another does a stress test to see where it breaks, and sizes based on that

