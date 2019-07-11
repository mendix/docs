---
title: "Ops & CI/CD Integration"
parent: "integration-solutions"
menu_order: 8
draft: true
---

## 1 CI/CD & Test Automation {#test}

A new trend (which is part of microservices and DevOps) is to build services from live systems that are specifically oriented towards automated testing and health checks on live systems. A service that is used to test things in CI/CD pipelines may later be reused to verify a production deployment, check a live system, or collect user metrics for a dashboard.

This diagram presents three typical parts covered via IT delivery automation, which is a very common form of process orchestration:

![](attachments/ops-cicd-integration/automation-service.png)

CI/CD & test automation is often done with Jenkins, GitHub CI, or AKS. However, there are Mendix customers that run on Mendix Cloud and do CI/CD with a Mendix app calling Mendix Cloud APIs while using test systems like [ATS](/addons/ats/index) or specific test services. Typically, this chain is run nightly and gives a report each morning to the DevOps team on the issues found.

The new app in the diagram above has the [UnitTesting](https://appstore.home.mendix.com/link/app/390/) module installed and unit tests configured for key microflows. It also has specific test services that cover full functional scenarios and a health check that is used in production. Finally, the app has an admin page with collected technical and functional KPIs that help with maintaining the solution.

## 2 Deployment & Monitoring {#deploy}

From the app management dashboard, you have an overview of everything that is needed as well as a deep link to the admin page for closer inspection when required. You can  make deployments possible here (if that is user-friendly) by calling the APIs of the Mendix Cloud (or, if on VPC, by calling Jenkins or Azure DevOps).

For professional operations solutions, there is often an agent per node that is shipping data in near-real time towards an application performance monitoring ([APM](/addons/apm/index)) system (such as Data Dog) that is used for root-cause analysis, trend analysis, sizing metrics, and alarms.
