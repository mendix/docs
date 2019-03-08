---
title: "Architecture Overview"
parent: "architecture-intro"
description: "Best practices for architecture."
menu_order: 2
draft: true
---

{{% todo %}}[**COULD USE 1 MORE DIAGRAM FOR LAST SEVERAL SECTIONS**]{{% /todo %}}

## 1 How Does Mendix Interpret IT Architecture?

IT architecture is about making valuable things with technology, and Mendix wants to apply the following characteristics to your IT assets:

* Valuable for the business
* Easy to deliver and maintain
* Secure, stable, and robust in production
* All the above at a reasonable cost

Mendix Architecture Best Practices attempt to optimize these characteristics.

### 1.1 Architecture Areas

In Mendix, we separate the following three levels of architecture:

* **Enterprise architecture** is strategic and involves policy, positioning, portfolios, technology selection, and guidelines
* **Solution architecture** is tactical and works on the program level to solve business problems using one or many systems and technologies
* **System architecture** is the architecture of one functional unit within a solution normally using one technology such as Mendix
	* In microservices architecture, there may be one large app to start with that is later split up, but it is still considered one “system” by other teams within the company

These are other more generic areas of architecture that are frequently referred to:

* **Technical architecture** typically refers to the selection of technology, the infrastructure that it runs on, and how it is deployed and provisioned; as more things move to the cloud, technical architecture is being divided into two new areas:
	* Cloud architects are planning and designing cloud infrastructure, which components to use, and how connectivity towards data centers and between clouds should happen
	* Engineering is becoming increasingly important for automating as much as possible in IT delivery and maintenance in line with the DevOps paradigm
* **Security architecture** relates to everything around security in functional and technical ways (for example, active directory, SSO, SSL, and SAML)

Mendix enables building great apps with little technical understanding, but as scope, complexity, criticality, and volumes grow, there is an increased need for good architecture, sound integration, and skilled technical resources on an app project.

### 1.2 Mendix & Architecture

Mendix has made the subject of architecture a lot easier by reducing the number of factors to consider during the development process (for example, how to make the UI, logic, and databases work together). In addition, Mendix simplifies the infrastructure and deployment considerations.

However, there is still some architecture work necessary so that you can get the best apps working together to serve the business in a secure and robust way that performs well. Mendix has a very strong base in innovation apps and business differentiating systems (for more information, see the [What Can I Build?](https://www.mendix.com/evaluation-guide/what-can-i-build) section in the *Mendix Platform Evaluation Guide* as well as Gartner's [Pace-Layered Application Strategy and IT Organizational Design](https://www.gartner.com/binaries/content/assets/events/keywords/applications/apn30/pace-layered-applications-research-report.pdf)). But as many customers have discovered while employing the speed, productivity, and flexibility of the platform, Mendix can be used for company "heavy-lifting" as well. When your company starts using Mendix for core systems and high-volume situations, it becomes more important to consider the architecture in order to optimize the solution and make sure it meets requirements for volume and robustness.

### 1.3 When Do I Need the Real Architects?

As the solution, scope, volume, and criticality of a system increases, there is an increased need to have strong technical people on the team and professional architects to help in creating the best solution.

{{% todo %}}[**EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over6.png)

The larger and more important the solution, the more thinking and architecture needs to go into it. There may also be more reasons to test and tune the system after functional realization, in addition to requirements for professional monitoring.

## 2 Current IT Trends

There are several IT trends converging, where Agile, DevOps, Microservices, Cloud and Automation are at the centre of the evolution:
As the picture below shows, areas such as SOA (functional architecture), Agile (methodology) and Cloud (infrastructure), are merging into one coherent movement of Enterprise DevOps with automation, microservices and an agile mindset

{{% todo %}}[**ADD DIAGRAM; EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}
	
## 2.1 Digitization on All Levels

This evolution makes sense when the IT teams, methodology, organization, infrastructure, and technical components are all related to each other. For optimal results, the overall strategy should be beneficial for all these elements.

Good architecture, technology, and organization should deliver digital transformation to all levels of the company, from customer interactions to business operations. This should happen all the way down to the digital transformation of IT delivery, of which cloud, low-code, CI/CD, microservices, and DevOps are all a part. As the diagram below presents, this all leads to end-users being able to make work with higher quality than ever before.

{{% todo %}}[**WHAT DIAGRAM BELOW? MISSING?**]{{% /todo %}}

## 2.2 Business & IT Alignment

{{% todo %}}[**ADD DIAGRAM; EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}
	
Enterprise DevOps will provide us with better business and IT alignment, which is at the heart of what Mendix is trying to provide. When users that innovate in IT and users who know how the business runs can cooperate more closely, they will iterate towards better architecture, increased digitization, and more value added to the business.

The prerequisite for this entire evolution is delivery automation in IT and IT infrastructure. Mendix—as a cloud and low-code platform—enables BizDevOps to the point that small cross-functional teams no longer need database administrators and infrastructure experts. Such teams can own the entire lifecycle of the apps they build, be more functional, and thus align more closely with the business.

{{% todo %}}[**ADD DIAGRAM; EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}
	
Automation in infrastructure for Apps also means that managing more components no longer adds significant cost. A double sized cloud container costs approximately 2 times as much. This means that building smaller, functional Microservices is possible. 
We can adapt the size of Apps to what is most efficient to maintain. Microservices can be quite large when using Low-code, so the App architecture with often align with how the business sees the world.
All of this means, that we are leaving behind ourselves, the era when Dev, Ops and the Business are separated by a trench of conflicting objectives.  The DevOps teams and the functionally oriented Apps can align with the Business they are supposed to support.

## 3 Architecture Subjects Covered

The Mendix Architecture Best Practices will cover the architecture subjects described below.

## 3.1 Microservices Architecture

Microservices is a popular way of building IT solutions. It helps you to avoid building monoliths and SOA-layered architectures, where dependencies tend to get out of control.  Instead, you can make functional autonomous components that cooperate to fulfill a business function. This suits Mendix very well, as is further described in [Mendix Microservices](/microservices/mendix-microservices).

This diagram shows how microservices are more functional in encapsulating a business process and cooperating via business events to the point that they are "actors" themselves in a business process:

{{% todo %}}[**UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over3.png)

There is often no need to separate technical and functional architecture. Instead, you should work on one single solution model. The most "techie" considerations are increasingly abstracted away by low-code and other cloud-based solutions. What is left are more functional decisions.

This diagram shows how business stakeholders, process owners, and Solution Architects cooperate towards the best microservices architecture while taking autonomy, reuse, processes, operability, and scalability into consideration:

{{% todo %}}[**UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over4.png)

The IT architecture of the future will not separate technical from functional architecture. Instead, it will work with one single solution model that is understood by all stakeholders, who will then take the business organization, delivery organization, technology, and business processes into consideration. 

{{% todo %}}[**EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over5.png)

Architecture needs to have a level of flexibility as more information is made available during the realization of a solution. This could involve refactoring an app or splitting an app into smaller parts based on the real knowledge gained from the actual end-users.

The [Microservices Best Practices](..microservices/microservices-overview) will dive into these exciting developments.

### 3.2 Good Integration with Mendix

One of the most important parts of architecture is integration. All business apps need to integrate with people, things, other systems, and operational tools to be useful.

Integration is really the glue that holds the pieces together, and since there are so many different systems, businesses, technologies, and organizations, integration is a hard subject to nail down.

The best thing to have with integration is an open mind while thinking functionally, talking with stakeholders and experts, and considering error scenarios. Then you can develop an overall solution design that makes integration as easy and as clearly defined as possible.

Systems depend on each other – that is part of life. But dependencies can be made smaller and more explicit as well as more functionally easy to understand. This helps to make building, operating, and maintaining a solution easier.

{{% todo %}}[**ADD LINK TO SECTION BELOW WHEN AVAILABLE**]{{% /todo %}}

Integration with people will be covered in the UX and Design Thinking Best Practices. Integrating apps with each other and other systems, things, and devices as well as monitoring are topics covered in the [Integration](../integration/integration-overview) best practices. 


### 3.3 High Performance

Sometimes the functional and/or technical architecture has to be adapted to the fact that there is a very high volume of users or messages and/or high requirements for availability.

For most apps created in Mendix so far, such issues have had a relatively low impact. The app is modeled, it is tested and performs well, so it is just deployed for happy users. In some cases, when something is slow, it is fixed by simple modelling changes.

As volume increases, a specialization of architecture is developing that focuses on optimizing both the architecture and the implementation in order to support large volumes and maintain fast response times.

This may require more planning, technical expertise, testing, tuning, and monitoring in production for what is often the core or most critical system for an enterprise. The primary concern here may not be the speed of feature development, but building systems that perform well, are easy to monitor and maintain, and have great recovery features should something still go wrong.

### 3.5 Security Architecture

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

### 3.6 Monitoring & Robustness

For simple apps and systems, Mendix has all the required monitoring available in the [Mendix Developer Portal](/developerportal/operate/). For virtual private cloud (VPC) solutions integrated with Mendix, monitoring capabilities would be provided by the third-party providing the infrastructure.

As you build more and more apps and some of these form a part of a microservices system, there are reasons to start evolving the monitoring of your solution. The first step for [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy) customers is to dedicate one app to monitoring and controlling the other app by using the open [Deploy API](/apidocs-mxsdk/apidocs/deploy-api) for Mendix Cloud.

{{% todo %}}[**VERIFY THAT ABOVE API IS CORRECT TO LINK TO**]{{% /todo %}}

But for VPC and on-premises solutions as well as when the number of systems increases and criticality grows, it is more desirable to use professional monitoring, log integration, alarms, and recovery mechanisms. The setup of such an architecture is largely the role of the customer's central IT, while Mendix connects to the tools and protocols proscribed.

The [Robusntess](../robustness/robustness-overview) section of the Architecture Best Practices discusses how these benefits can be achieved by using native Mendix technology or by connecting to professional tooling.

### 3.7 CI/CD & Test Automation

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

## 4 Summary

Architecture is a wide subject area, so the Mendix Architecture Best Practices will cover the areas where we see the most interest in advice and information. These best practices are living documents and may be subject to change based on our experience and user feedback.

The weather never looks (exactly) the same on any two days of your life, so it is important to both look for what is similar and what is different when you work towards the best solution for your challenges.

In accordance with Agile methodology, you should continuously measure and verify your assumptions based on real information as a solution is being created or managed. That means as reality changes, you should fine-tune your architecture. And as your architecture is improved, you can improve the quality and value of IT solutions for all the teams building, managing, and using the IT solution.

{{% todo %}}[**ADD DIAGRAM; EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

Ultimately, Mendix is there to support you both with technology and consulting. We provide architecture workshops where we think along with you on any area related to making the next generation IT with Mendix.

{{% todo %}}[**ADD SENTENCE ON WHO TO CONTACT ABOUT SUCH WORKSHOPS?**]{{% /todo %}}
