---
title: "Architecture Overview"
parent: "architecture-intro"
description: "Best practices for architecture."
menu_order: 2
draft: true
---

## 1 What Is IT Architecture?

There are many types of IT architecture, and we hear the term in different contexts. The fact is that architecture is practiced at the highest levels of companies as well as by relative beginner Mendix developers.

{{% todo %}}[**ARE WE SURE WE WANT TO USE THE QUOTE BELOW? IF SO, WE HAVE DO AN ATTRIBUTE**]{{% /todo %}}

According to [IasaGlobal](https://iasaglobal.org/itabok/what-is-it-architecture/), "IT architecture is the art and science of designing and delivering valuable technology strategy."

Generally, we want to make nice things with technology that are valuable for the business, easy to deliver and maintain, and robust in production. And we want to deliver all this value at a reasonable cost. The processes that attempt to optimize this formula are part of the work of architecture. So, if you work in the IT industry, chances are you work with architecture every day.

Some architecture work is strategic, such as policy, positioning, portfolio, and guidelines for defining what to do and the best ways to do it. This includes enterprise architecture roadmaps as well as business-value calculations and measurements.

Some architecture work is tactical, such as working with concrete designs, small system designs, large program solution designs, app design, and microservice design. Even just deciding how to configure a Mendix app in to maximize business value and maintainability involves architecture work.

## 2 Microservice Architecture

With the arrival of low-code platforms, cloud solutions, and automation, it has become easier to make architecture functional, which is reflected in the trend towards microservices.

{{% todo %}}[**UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over3.png)

The [Microservices best practices](..microservices/microservices-overview) best practices will dive into this exciting development.

## 3 Is Modern IT Architecture Only for Architects?

There are more roles than just architects who work on IT architecture, whether they are aware of this or not. And this trend is getting stronger.

This is exemplified by microservices, Agile, and DevOps. The most tech-focused considerations are increasingly abstracted away by low-code and other cloud-based solutions. That leaves room for more functional decisions, where process and organization play a larger role in architecture decisions.

In addition to building solutions in Mendix, non-tech users can come to understand the architecture considerations in such solutions and take part in a more team-oriented and iterative architecture process.

{{% todo %}}[**UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over4.png)

IT architecture of the future will not separate technical from functional architecture, but rather work on one single solution model that is understood by all parties and takes the business organization, delivery organization, technology, and business process into consideration.

{{% todo %}}[**UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over5.png)

Architecture needs to have a level of flexibility as more information is made available during the realization of an solution. This could involve refactoring an app or splitting an app into smaller parts based on the real knowledge gained from the actual implementation.

## 4 Mendix & Architecture

Mendix has made the subject of architecture a lot easier by reducing the number of factors to consider during the development process (for example, how to make the UI, logic, and databases work together). In addition, Mendix simplifies the infrastructure and deployment considerations.

But there is still some architecture work remaining so that you can get the best apps working together to serve the business in a secure and robust way that performs well.

Mendix has a very strong base in innovation apps and business differentiating systems (for more information, see [What Can I Build?](https://www.mendix.com/evaluation-guide/what-can-i-build) in the *Mendix Evaluation Guide* as well as Gartner's [Pace-Layered Application Strategy and IT Organizational Design](https://www.gartner.com/binaries/content/assets/events/keywords/applications/apn30/pace-layered-applications-research-report.pdf)). But as many customers have discovered while employing the speed, productivity, and flexibility of the platform, Mendix can be used for the heavy-lifting in a company. At that point, it becomes more important to consider the architecture in order to optimize the solution and make sure it meets requirements for volume and robustness.

## 5 When Do I Need the Real Architects?

As the solution, scope, volume, and criticality of a system increases, there is an increasing need to have strong technical people on the team and professional architects to help in creating the best solution.

![](attachments/arch-over6.png)

The larger and more important the solution, the more thinking and architecture needs to go into it. There may also be more reasons to test and tune the system after functional realization, in addition to requirements for professional monitoring.

## 6 Good Integration Architecture

One of the most important parts of architecture is integration. All business apps need to integrate with people, things, other systems, and operational tools to be useful.

Integration is really the glue that holds the pieces together, and since there are so many different systems, businesses, technologies, and organizations, integration is a hard subject to nail down.

The best thing to have with integration is an open mind while thinking functionally, talking with stakeholders and experts, and considering error scenarios. Then you can develop an overall solution design that makes integration as easy and as clearly defined as possible.

Systems depend on each other – that is part of life. But dependencies can be made smaller and more explicit as well as more functionally easy to understand. This helps to make building, operating, and maintaining a solution easier.

{{% todo %}}[**ADD LINK TO SECTION BELOW WHEN AVAILABLE**]{{% /todo %}}

Integration with people will be covered in the UX and Design Thinking Best Practices. Integrating apps with each other and other systems, things, and devices as well as monitoring are topics covered in the [Integration](../integration/integration-overview) best practices. 


## 7 High Performance

Sometimes the functional and/or technical architecture has to be adapted to the fact that there is a very high volume of users or messages and/or high requirements for availability.

For most Apps created in Mendix so far, this has had a relatively low impact. We model the App, we test it and it performs well, so we can just deploy and have happy users. In some cases, we see something that is slow, and we fix it by simple modelling changes.

But as volume increases this leads to a whole specialization of Architecture that focuses optimizing both architecture and implementation around supporting large volumes and maintain fast response times.

It may require more planning, more technical expertise, more testing, more tuning and more monitoring in production. This is often the core systems or the most critical systems for enterprises. The primary concern may not be feature development speed, but to get well performing systems that are easy to monitor and maintain, and with great recovery features should something still go wrong

### Security Architecture

Security architecture is the subject of making sure that no one can penetrate, destroy, disrupt or in any other way interfere with the normal business operations of the IT systems that we build and operate.

The subject is increasingly important, and it is in constant evolution as technology providers get better at defending themselves, and malicious parties, sometimes even state sponsored, are getting better at breaking the same systems.

Mendix has good certification for security (more from jasper/bart)….

The security areas are generally considered as:

- Infrastructure security, on e.g. cloud level, deployments etcetera
- App security, usually on user level, focusing on authentication, authorization and SSO
- Integration security, focusing on secure service calls, e.g. via SSL, or via secure queueing or SFTP for files

### Monitoring and Robustness

For simple Apps and systems Mendix has all required monitoring available on the Mendix Developer Portal

For VPC solutions the same would be provided by the party that provides the infrastructure, while integration with Mendix.

As there are more Apps created (\&gt;20), and some of them form a part of Microservices systems, there are reasons to start evolving the monitoring of the solution.  A first step for Mx Cloud customers, can be to dedicate one App to the monitoring and control of the others, using the open APIs of Mendix Cloud.

But for VPC, on prem and when the number of systems increase, and the criticality grows, there is more and more desirable to use professional monitoring, log integration, alarms and recovery mechanisms.

The set-up of such an architecture is largely the role of central IT of the customer, while Mendix connects to the tools and protocols proscribed.

This section of the architecture best practices, will discuss both how some of these benefits can be achieved both using native Mendix technology, and when connecting to professional tooling.

### CI/CD and Test Automation

See also the section [Eval Guide - CICD](https://www.mendix.com/evaluation-guide/app-lifecycle/cicd)

Mendix provides some Continuous integration already out of the Box:

1. Consistency between UI, logic and DB is done by the modeller automatically
2. Checking into the team server the consistency check is done against other developers work.

This is the same for everybody that makes Mendix solutions, because it is part of the Model, and it is part of the acceleration that Mendix provides to get good quality solutions in a quick way. Some testing that is needed for e.g. Java solutions is not needed for Mendix.

Mendix provides 1-click deployments onto Mendix Cloud, SAP Cloud and IBM Cloud and soon also for RedHat Open-shift Kubernetes.  Mendix provides the Unity test module for testing Microflows, and ATS to automatically test the UX functions.

But the scope for automation never ends. It is always possible to automate more and Mendix provides all required APIs to set up automated testing and deployments.

This is an area that is evolving very fast and many companies are making significant investments. There is not one single way to do this, and the focus on automation shifts depending on customer and solution.

Some partners build automation from a Mendix App, some from Jenkins or GitLab CI. Some do mostly Test automation. Some focus on Deployment automation.

The important thing is to take a clear look at the needs, the benefits and the costs, and make the right decisions on what to automate, what to centralize, what to localize and what to just continue to do manually via the easy to use Mendix developer portal.

### Summary

Architecture is a wide subject area, where we will only try to cover the areas where we see the most interest in advice and information.  The Best Practices included are work in progress and constantly changing, as is the world around us, so read this as &quot;one good source of information&quot;.

The weather never looks (exactly) the same on two days of one&#39;s life, so it&#39;s important to both look for what is the same, and what is different when you work towards the best solution for your Maker&#39;s challenge.

Ultimately, Mendix is there to support you both with technology and consulting.