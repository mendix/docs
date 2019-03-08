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

For more information, see the [DevOps Overview](https://www.mendix.com/evaluation-guide/app-lifecycle/devops-overview) section of the *Mendix Platform Evaluation Guide*.

##2 BizDevOps

It is of course also important to stay very close to the business and involve them in the discussions around architecture and performance. Thinking laterally and wide about the best options for solving a business problem—including how to run the processes and integrate with other systems as well as how end-users will work with the apps—allows for a full optimization of the solution.

For example, the business asks for a landing page with overviews from five different areas. This will require a lot of integration to gather the information, which could lead to the impression of a slow system with information gathered that is not even directly used. After discussions with stakeholders, the design is changed so that the landing page only has static information and the end-user clicks into each of the specific overview areas.

The team that does the development, testing, tuning, and deploying of the apps should be adapted to the volume and criticality of the system to be developed.

Small apps can be created, tested, and deployed on the Mendix Cloud by a [citizen developer](https://www.mendix.com/evaluation-guide/evaluation-learning/skills-training#personas) without significant technical skills. However, as the volume, complexity, and criticality of the apps increase, there is a larger need for more technical resources on board to initially design and review apps in order to make them better and faster.

Eventually, projects for critical, core, and high-volume apps may have several technical experts on board as well as a professional performance tuner available for every release to do the testing and tuning correctly.

This table presents recommendations for your DevOps teams:

| | Citizen Dev. | Citizen Dev. + Business Dev. Design & Review | Citizen Dev. + Business Dev. + IT Dev. Review & Tune | Citizen Dev. + Business Dev. + Perf. Expert Test, Review & Tune | Perf. Expert Test, Review & Tune for Every Release |
| --- | --- | --- | --- | --- | --- |
| **Functional Size** | Small app | Medium app | Large app | Complex app | XL core system |
| **Criticality of System** | Low | Medium | High | Core | Business-critical |
| **Uptime Requirement (in Business Hours)** | 95% | 98% | 99% | 99% 24/7 | 99.5% 24/7 |
| **Number of Records in Database** | < 500k | < 1m | < 5m | < 50m | 500m or more |
| **Number of Concurrent Users** | < 100 | < 500 | < 1k | < 5k | 200k or more |
| **Number of Service Calls (per Second)** | < 10 | < 50 | < 100 | < 1000 | 2k or more |

For more information, see the [Why Should I Use the BizDevOps Process?](https://www.mendix.com/evaluation-guide/dev-process#bizdevops) section of the *Mendix Platform Evaluation Guide*.

## 3 Professional Ops Team & CI/CD Team

In scenarios in which your solutions are becoming larger and more critical and/or your company has hundreds or even thousands of apps, investing in central professional operations and CI/CD automation is clearly necessary.

A professional Ops team with professional tooling that owns the alarms, professional monitoring, and central log-integration is highly recommended for large microservice landscapes.

A professional CI/CD team will enable auto-testing and controlled repeatable deployments, limiting risk and improving availability, which is important for large and critical systems.

At the same time, it is important to be smart with what is required for monitoring and automation so that centralized Ops and CI/CD teams do not stifle the flexibility and agility of DevOps teams that deliver to the business. Not every app needs the same level of monitoring and automation, because then agility is reduced. The end result is that costs may be increased where that is not necessary.

For more information, see the [CI/CD](https://www.mendix.com/evaluation-guide/app-lifecycle/cicd) and [Operations, Deployment, Release](https://www.mendix.com/evaluation-guide/app-lifecycle/ops-deployment-release) sections of the *Mendix Platform Evaluation Guide*. 

