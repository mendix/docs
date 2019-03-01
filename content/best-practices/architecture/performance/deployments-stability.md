---
title: "Deployments, Recovery & Stability"
parent: "mendix-performance"
description: ""
menu_order: 4
tags: [ ]
draft: true
---

## 1 High Availability 

For high-availability solutions, the focus should be on predicting, planning, and managing all the risks for unexpected failures, including incidents during deployments. This is where the most significant business impact happens. And because it is unplanned, it often happens when the load is high and the recovery can take time.

Stress tests help with identifying breaking points. Risk analysis and contingency planning should be done regularly for systems that require high availability. At first, having a contingency plan may be enough, while for the most critical apps, contingency and recovery plans should be tested regularly and improved. The more critical the system is, the more often recovery testing is performed.

For microservice architectures, health checks and administrative pages are implemented to assist operations teams. Fault tolerance around deep-links and service calls should provide  good error messages. Log integration is recommended for quickly analyzing issues that go across apps.

For more critical systems, a more professional level of monitoring and alarms should be added, and the process link to recovery actions should be tight. Mendix has great integration with, for example, DataDog for monitoring, trend analysis, and alarms.


## 2 Phased Go-Lives & Deployments 

It can be very hard to fix a problem when a tremendous amount of traffic is hitting the system at the same time. It is well known that large providers like Netflix, Facebook, and LinkedIn go live in a phased approach, meaning, they do not provide the entire world with new functionality in one single go-live.

A phased go-live is often a great idea for both very critical and high-volume situations, simply because it reduces risks and allows for fixing issues in a controlled environment. A phased go-live is not for all situations with high volume, but the following scenarios should be considered:

* **Internal go-live** – for users in the same company
* **Friendly customers go-live** – for a select list of customers
* **Regional go-live** – for a region or a functional part
* **Full go-live** – this could also be staged

## 3 Zero-Impact Deployments

There is a trade-off between risk in deployments, effort in preparing for them, and downtime during deployments. Deployments should be controlled, monitored, managed, and done in periods of less traffic so as to ensure minimal risk and business impact.

A standard Mendix app takes ~5 minutes to deploy. If you deploy frequently into production every 5 weeks, you have a ~0.0001% controlled and selected downtime, which in almost all cases will have zero business impact. 

Having zero-downtime deployments for an app server is easy in any technology when there are no destructive changes to the data model. Zero downtime when the release includes database changes requires additional configuration and actions independent of the selected technology. This has a cost and a risk associated, so it is recommended only in very specific instances.

Mendix Cloud enables avoiding this risk by promoting controlled deployments. In addition, customers have implemented zero-downtime deployments with Mendix on Kubernetes. For microservice systems and more critical systems, it is also common to automate the deployment with configuration and do health checks.

## 4 More Monitoring for More Critical Apps

To manage a solution and handle issues in production, there are levels of monitoring and support required. For critical apps, combining local functional monitoring and support is recommended with more professional central monitoring.

A local DevOps team will be closer to the solution and the users, so they can fix functional and simple technical problems. However, they may not be able to handle volume-related trend analysis and infra-related problems.

For critical and high-volume systems, there is a good reason to introduce a more professional monitoring framework. Professional monitoring can handle larger amounts of monitoring data over time. This is helpful for raising alarms in high-volume situations in order to do efficient root-cause analysis and to identify trends so that, for example, scaling can be adapted well before it is an issue.

This table presents operations recommendations:

|  | Local DevOps Monitoring & Alarms | Local DevOps Monitoring & Alarms | Add Central Monitoring | Add Recovery Testing | Frequent Recovery Testing |
| --- | --- | --- | --- | --- | --- |
| **Functional Size** | Very Small | Small | Medium | Large | Very Large |
| **Criticality of System** | Low | Medium | High | Core | Business Critical |
| **Uptime Requirement (in Business Hours)** | 95% | 98% | 99.5% | 99.5% 24/7 | 99.95% 24/7 |

## 5 Estimated Time to Recovery

In an agile DevOps would one should not maximize “Time to failure”, because then
there will be virtually no new releases at all, and the business will not get
what they want. In DevOps we try to automate as much as possible, so that it is
as predicable as possible, especially Deployments, and the verifying that newly
delayed Apps really work as expected.

Instead the Key to Happy Users and the perception of stability is always in the
time to recovery ETTR. That should be minimized, not only to get maximum
up-time, but also to get maximum impression of up-time.

It’s when the down time drags out more than 30 minutes that people start
reacting, and should it be down several hours, the business will be disrupted,
and perception of stability goes down.

Improved monitoring, alarms, beepers and well defined and practiced recovery
procedures are key to get ETTR down and impressions of Availability up.
