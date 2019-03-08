---
title: "Creating a Team for Performance"
parent: "mendix-performance"
description: ""
menu_order: 5
tags: [ ]
draft: true
---

## 1 DevOps

DevOps means that development and operational resources collaborate in cross-functional teams around the same objective. These objectives are to build operationally-stable apps as well as to make the testing, deployment, and monitoring of these apps as easy as possible.

Both a development and an operations mindset is required. Simply calling your development team “DevOps” will typically not create the most stable apps.

A DevOps team should have at least one operationally-minded person who has experience in supporting critical systems. Over time, that knowledge will merge into an efficient DevOps team.

##2 BizDevOps

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

The team that does the development, testing, tuning, and deploying of the apps should be adapted to the volume and criticality of the system to be developed.

Small apps can be created, tested and deployed on the Mendix Cloud by a [citizen developer](https://www.mendix.com/evaluation-guide/evaluation-learning/skills-training#1-what-types-of-users-can-build-apps-with-mendix#personas) without significant technical skills. But as the volume, complexity, and criticality of the apps increases, there is a larger need for more technical resources on board to initially design and review apps in order to make them better and faster.

Eventually, projects for critical, core, and high-volume apps may have several technical experts on board as well as a professional performance tuner available for every release to do the testing and tuning correctly.

This table presents recommendations for your DevOps teams:

| | Citizen Developer | Citizen Developer + Business Developer Design & Review | Citizen Developer + Business Developer + IT Developer Review & Tune | Citizen Developer + Business Developer + Performance Expert Test, Review & Tune | Performance Expert Test, Review & Tune for Every Release |
| --- | --- | --- | --- | --- | --- |
| **Functional Size** | Small app | Medium app | Large app | Complex app | XL core system |
| **Criticality of System** | Low | Medium | High | Core | Business-critical |
| **Uptime Requirement (in Business Hours)** | 95% | 98% | 99% | 99% 24/7 | 99.5% 24/7 |
| **Number of Records in Database** | < 500k | < 1m | < 5m | < 50m | 500m or more |
| **Number of Concurrent Users** | < 100 | < 500 | < 1k | < 5k | 200k or more |
| **Number of Service Calls (per Second)** | < 10 | < 50 | < 100 | < 1000 | 2k or more |

### Professional Ops Team & CI/CD Team

In scenarios in which your solutions are becoming larger and more critical and/or your company has 100s or even 1000s of apps, investing in central professional operations and CI/CD automation becomes obvious.

A professional Ops team with professional tooling that owns the alarms, professional monitoring, and central log-integration is highly recommended for large microservice landscapes.

A professional CI/CD team will enable auto-testing and controlled repeatable deployments, limiting risk and improving availability, which is important for large and critical systems.

At the same time, it is important to be smart with what is required for monitoring and automation so that centralized Ops and CI/CD teams do not stifle the flexibility and agility of DevOps teams that deliver to the business. Not every app needs the same level of monitoring and automation, because then agility is reduced and costs are increased where that is not necessary.
