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

{{% todo %}}[**UPDATE DIAGRAM; EXPLAIN DIAGRAM**]{{% /todo %}}

![](attachments/arch-over3.png)

The [Microservices best practices](..microservices/microservices-overview) best practices will dive into this exciting development.

## 3 Is Modern IT Architecture Only for Architects?

There are more roles than just architects who work on IT architecture, whether they are aware of this or not. And this trend is getting stronger.

This is exemplified by microservices, Agile, and DevOps. The most tech-focused considerations are increasingly abstracted away by low-code and other cloud-based solutions. That leaves room for more functional decisions, where process and organization play a larger role in architecture decisions.

In addition to building solutions in Mendix, non-tech users can come to understand the architecture considerations in such solutions and take part in a more team-oriented and iterative architecture process.

{{% todo %}}[**UPDATE DIAGRAM; EXPLAIN DIAGRAM**]{{% /todo %}}

![](attachments/arch-over4.png)

IT architecture of the future will not separate technical from functional architecture, but rather work on one single solution model that is understood by all parties and takes the business organization, delivery organization, technology, and business process into consideration.

{{% todo %}}[**UPDATE DIAGRAM; EXPLAIN DIAGRAM**]{{% /todo %}}

![](attachments/arch-over5.png)

Architecture needs to have a level of flexibility as more information is made available during the realization of an solution. This could involve refactoring an app or splitting an app into smaller parts based on the real knowledge gained from the actual implementation.

## 4 Mendix & Architecture

Mendix has made the subject of architecture a lot easier by reducing the number of factors to consider during the development process (for example, how to make the UI, logic, and databases work together). In addition, Mendix simplifies the infrastructure and deployment considerations.

But there is still some architecture work remaining so that you can get the best apps working together to serve the business in a secure and robust way that performs well.

Mendix has a very strong base in innovation apps and business differentiating systems (for more information, see [What Can I Build?](https://www.mendix.com/evaluation-guide/what-can-i-build) in the *Mendix Platform Evaluation Guide* as well as Gartner's [Pace-Layered Application Strategy and IT Organizational Design](https://www.gartner.com/binaries/content/assets/events/keywords/applications/apn30/pace-layered-applications-research-report.pdf)). But as many customers have discovered while employing the speed, productivity, and flexibility of the platform, Mendix can be used for the heavy-lifting in a company. At that point, it becomes more important to consider the architecture in order to optimize the solution and make sure it meets requirements for volume and robustness.

## 5 When Do I Need the Real Architects?

As the solution, scope, volume, and criticality of a system increases, there is an increasing need to have strong technical people on the team and professional architects to help in creating the best solution.

{{% todo %}}[**UPDATE DIAGRAM; EXPLAIN DIAGRAM**]{{% /todo %}}

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

For most apps created in Mendix so far, such issues have had a relatively low impact. The app is modeled, it is tested and performs well, so it is just deployed for happy users. In some cases, when something is slow, it is fixed by simple modelling changes.

As volume increases, a specialization of architecture is developing that focuses on optimizing both the architecture and the implementation in order to support large volumes and maintain fast response times.

This may require more planning, technical expertise, testing, tuning, and monitoring in production for what is often the core or most critical system for an enterprise. The primary concern here may not be the speed of feature development, but building systems that perform well, are easy to monitor and maintain, and have great recovery features should something still go wrong.

## 8 Security Architecture

Security architecture inovlves making sure no one can penetrate, destroy, disrupt, or in any way interfere with the normal business operations of an IT system that we build and operate.

This subject is increasingly important. It is in constant evolution as technology providers get better at defending themselves and malicious parties get better at breaking the same systems.

Mendix has good certification for security.

{{% todo %}}[**NEED MORE CONTENT FROM JASPER/BART**]{{% /todo %}}

The following security areas are generally considered for best practices:

* Infrastructure security
	* For example, at the cloud level and for deployments
* App security
	* Usually at the user level
	* Focusing on authentication, authorization, and single-sign on (SSO)
* Integration security
	* Focusing on secure service calls (for example, via SSL, secure queueing, or SSH File Transfer Protocol (SFTP) for files

## 9 Monitoring & Robustness

For simple apps and systems, Mendix has all the required monitoring available in the [Mendix Developer Portal](/developerportal/operate/). For virtual private cloud (VPC) solutions integrated with Mendix, monitoring capabilities would be provided by the third-party providing the infrastructure.

As you build more and more apps and some of these form a part of a microservices system, there are reasons to start evolving the monitoring of your solution. The first step for [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy) customers is to dedicate one app to monitoring and controlling the other app by using the open [Deploy API](/apidocs-mxsdk/apidocs/deploy-api) for Mendix Cloud.

{{% todo %}}[**VERIFY THAT ABOVE API IS CORRECT TO LINK TO**]{{% /todo %}}

But for VPC and on-premises solutions as well as when the number of systems increases and criticality grows, it is more desirable to use professional monitoring, log integration, alarms, and recovery mechanisms. The setup of such an architecture is largely the role of the customer's central IT, while Mendix connects to the tools and protocols proscribed.

The [Robusntess](../robustness/robustness-overview) section of the Architecture Best Practices discusses how these benefits can be achieved by using native Mendix technology or by connecting to professional tooling.

## 10 CI/CD & Test Automation

Mendix provides some continuous integration out-of-the-box:

* Consistency checks between the UI, logic, and database are automatically done by the Desktop Modeller 
* Consistency checks against other developers' work are automatically done by Team Server

These checks are the same for all Mendix users, because that is part of your app model and is a result of the acceleration that Mendix provides for building good-quality solutions. Some of the testing needed for other solutions (for example, Java solutions) is not needed for Mendix.

Mendix provides one-click deployments for [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), [SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform), [IBM Cloud](/developerportal/deploy/ibm-cloud), and [Siemens MindSphere](/developerportal/deploy/deploying-to-mindsphere). In addition, Mendix provides the [UnitTesting](https://appstore.home.mendix.com/link/app/390/) module in the App Store for testing microflows and [Application Test Suite](/ats/howtos/ht-version-2/install-ats-helper-recorder-2) to automatically test UX functions.

But the scope for automation never ends. It is always possible to automate more, and Mendix provides all the required APIs to set up automated testing and deployments.

This is an area that is evolving very quickly and many companies are making significant investments. There is not one single way to do CI/CD and test automation, because the focus on automation shifts depending on the customer and solution.

Some partners build automation from a Mendix app, some from Jenkins, some others from GitLab CI. Some do mostly test automation, while others focus on deployment automation.

The most important thing is to take a clear look at your testing needs as well as the benefits and costs, and then make the right decisions on what to automate, what to centralize, what to localiz, and what to continue doing manually via the easy-to-use Mendix Developer Portal.

For more information, see the [CICD](https://www.mendix.com/evaluation-guide/app-lifecycle/cicd) section in the *Mendix Platform Evaluation Guide*.

## 11 Summary

Architecture is a wide subject area, so we will only try to cover the areas where we see the most interest in advice and knowledge sharing. The best practices included are works in progress and are constantly changing, so read this as *one good source of information*.

The weather never looks exactly the same on two days of one's life, so it is important to both look for what is the same and what is different when you work towards the best solution.

Ultimately, Mendix is there to support you both with technology and consulting.