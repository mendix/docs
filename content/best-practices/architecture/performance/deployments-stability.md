---
title: "Deployments, Recovery & Stability"
parent: "mendix-performance"
description: ""
menu_order: 4
tags: [ ]
draft: true
---

### High Availability 

For high availability solutions the focus should be to predict, plan and manage
all risks for un-expected failures, including incidents during deployments.

This is where most significant business impact happens. Because it is
un-planned, it often happens when load is high, and recovery can take some time.

Stress tests help identifying breaking points. Risk analysis and contingency
planning should be done regularly for systems that require high availability. At
first having a contingency plan is enough, while for the most critical Apps,
contingency plans and recovery should be tested regularly and improved. The more
critical the system is, the more often recovery testing is performed.

For a Microservice architectures, health checks and admin pages are implemented,
to assist the Ops team, and fault tolerance around deep-links and service calls
give good error messages. Log integration is recommended to quickly analyse
issues that go across Apps.

For more critical systems a more professional level of Monitoring and alarms
should be added, and the process-link to recovery actions should be tight.
Mendix has great integration with e.g. DataDog for monitoring, trend analysis
and alarms.

### Phased Go-live and Deployments 

It can be very hard to fix a problem when a tremendous amount of traffic is
hitting the system at the same time. It is well known that the large providers
like Netflix, Facebook and Linked in go live in a phased approach. I.e. they do
not hit the entire world with new functionality in one single go-live.

Phased go-live is often a great idea for both very critical and high-volume
situations, simply because it reduces risk and allows fixing issues in a
controlled environment. A phased go-live is not for all situations with high
volume, but should be considered:

1.  Internal Go-live (users from the same company)

2.  Friendly customers go-live (select list of customers)

3.  Regional Go-live (for a region or a functional part)

4.  Full go-live (that could be staged as well)

### Zero Impact Deployments

There is a trade-off between risk in deployments, effort in preparing for them,
and down-time during deployments. Deployments should be controlled, monitored
and managed, and done in periods of less traffic, for minimal risk and business
impact.

A standard Mendix App takes \~5 minutes to deploy. If we deploy frequently into
production, every 5 weeks, we have a \~0.0001% controlled, chosen down-time,
which in almost all cases, has zero business impact.

Having zero-downtime deployments for an App server is easy in any technology,
when there are no destructive changes to the data-model. Zero-down-time when the
release includes DB changes, requires configuration and measures to be taken,
also independent of the technology chosen. It has a cost, and a risk associated,
so is recommended only in very specific instances.

Mendix Cloud avoids this risk, by promoting controlled deployments, while
customers have implemented zero-down-time deployments with Mendix on Kubernetes.
For Microservice systems and more critical systems, it is common to automate
also the deployment with configuration and do health-checks after

### More Monitoring for more Critical Apps

To manage a solution and handle issues in Production there are levels of
monitoring and support required. For critical Apps it is recommended to combine
local functional monitoring and support, with more professional central
monitoring.

A local DevOps team will be closer to the solution and the users, so can fix
functional and simple technical problems, but they may not be able to handle
volume related trend analysis and infra related problems.

For critical and high volume systems, there is a good reason to introduce a more
professional monitoring framework.

Professional monitoring handles larger amounts of monitoring data over time and
it is helpful to raise alarms in high volume situations, to do efficient
root-cause analysis and to identify trends, so that e.g. scaling can be adapted
well before it is an issue.

| **Ops Recommended:**    | **Local DevOps Monitoring & Alarms** | **Local DevOps Monitoring & Alarms** | **Add Central Monitoring** | **Add Recovery Testing** | **Frequent Recovery Testing** |
| ----------------------- | ------------------------------------ | ------------------------------------ | -------------------------- | ------------------------ | ----------------------------- |
| *Functional Size*       | Very Small                           | Small                                | Medium                     | Large                    | Very Large                    |
| *Criticality of System* | Low                                  | Medium                               | High                       | Core                     | Business Critical             |
| *Up time requirement*   | 95% Biz hours                        | 98% Biz hours                        | 99.5% Biz hours            | 99.5% 24/7               | 99.95% 24/7                   |

### Estimated Time to Recovery

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

Team and Skills
---------------

### DevOps team – Skills Required

The team that does the Development, testing, tuning and deployments of the Apps
should be adapted to the volume and criticality of the system to be developed.

Small Apps can be created, tested and deployed on the Mendix cloud by a citizen
developer, without significant technical skills. But as the volume, complexity
and criticality increases, there is a larger and larger need for more technical
resources on-board. Initially only to design and review Apps to make them better
and faster.

Eventually projects for critical, core, high-volume Apps may have several
technical experts on board, and a professional performance tuner available for
every release to do the testing and tuning correctly.

| **DevTest Recommended:** | **Citizen Developer** | **Citizen + Solution Sam**                   | **Citizen + Sam +**                                   | **Citizen + Sam + Perf. Expert to test, review and tune** | **Performance Expert to test, review and tune for every release** |
|                          |               | **design, review** | **Hardcore Harry reviews & tunes** |                 |                    |
| ------------------------ | ------------- | ------------------ | ---------------------------------- | --------------- | ------------------ |
| *Functional Size*        | Small App     | Medium App         | Large App                          | Complex App     | XL Core System     |
| *Criticality of System*  | Low           | Medium             | High                               | Core            | Business Critical  |
| *Up time requirement*    | 95% Biz hrs   | 98% Biz hrs        | 99% Biz hrs                        | 99% 24/7        | 99.5% 24/7         |
| *\# Records in DB*       | \< 500k       | \< 1m              | \< 5m                              | \< 50m          | 500m or more       |
| *\# Concurrent Users*    | \< 100 users  | \< 500 users       | \< 1k users                        | \< 5k users     | 200k users or more |
| *\# Service calls / sec* | \< 10 calls/s | \< 50 calls/s      | \< 100 calls/s                     | \< 1000 calls/s | 2k calls/s or more |

### Professional Ops team and CICD team

As solutions become larger and more critical, and for large companies with 100s
or even 1000s of Apps, the investment in central professional Ops and CICD
automation becomes obvious.

A professional Ops team with professional tooling, that owns the alarms,
professional monitoring and central log-integration is highly recommended for
large microservice landscapes.

A professional CICD team will enable auto testing and controlled repeatable
deployments, limiting risk and improving availability, which is important for
large and critical systems.

At the same time, be smart on what to require for monitoring and automation not
to let central Ops and CICD stifle flexibility and agility of DevOps teams that
deliver to the business. Every App does not need the same level of monitoring
and automation, because then agility is reduced, and cost increased, where it is
not needed.

Summary
-------

As a summary the Mendix platform can be used for almost all situations found in
the Business Application landscape of a typical enterprise.

It is all a matter of correct attention to skills of the team, good modelling,
tuning, performance testing, sizing, scaling and operational monitoring and
procedures.

Mendix will often not play well in the area of BI, Analytics and DWH, and there
are better tools for Content management etcetera. There are also very many great
SaaS tools out there which make sense when functionality is standard
cross-industry and very little customization is needed.

But for almost all other cases Mendix is a good choice for it’s seamless
development and operational experience, speed of development and ease of use.

The customer can decide system borders, can align to his own processes, and make
smart, functional microservices that fits his functional and technical needs,
and, as this document shows, that adapts to the volumes and criticality of the
system.