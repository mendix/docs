---
title: "Creating a Team for Performance"
parent: "mendix-performance"
description: ""
menu_order: 5
tags: [ ]
draft: true
---

### DevOps

DevOps means that development and operational resources collaborate in cross
functional teams around the same objectives, which is to build Operationally
stable Apps, and making the testing, deployment and monitoring of these Apps as
easy as possible.

But it does require both mind-sets. Calling the Development team “DevOps” will
typically not create the most stable Apps.

For that the DevOps team should have at least one operationally minded person,
that has experience from supporting critical systems, and over time the
knowledge will merge into an efficient team.

### BizDevOps

It’s of course also important to stay very close to the business and involve
them in the discussions, also around architecture and performance. Thinking
laterally and wide about the best options to solve a business problem, including
how to run the processes, how to integrate with other systems and how people
will work with the Apps, allows for a full optimization of the solution.

E.g. The business may ask for a starting screen with overviews from 5 different
areas, requiring a lot of integration to gather the information, potentially
giving a slow impression, and often gathering information that will not be
directly used. After discussions, the design is changed so that the starting
screen only has static information and the user clicks into each of the specific
overview areas.

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

-   