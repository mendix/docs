---
title: "Architecture Overview"
parent: "architecture-intro"
description: "Best practices for architecture."
menu_order: 2
draft: true
---

{{% todo %}}[**NEED TO REVIEW THIS CONTENT SO THAT IT IS NOT DEFINING ARCHITECTURE, BUT STATING THAT THIS IS HOW MENDIX INTERPRETS ARCHITECTURE - DELETE GENERIC STATEMENTS ON TOPICS, REPLACE WITH MENDIX INTERPRETATION/DEFINITION/VISION OF TOPICS**]{{% /todo %}}

{{% todo %}}[**COULD USE 1 MORE DIAGRAM FOR LAST SEVERAL SECTIONS**]{{% /todo %}}

## 1 What Is IT Architecture?
IT Architecture is about making nice and valuable things with technology. We want IT assets to be:
1.	Valuable for the business
2.	Easy to deliver and maintain
3.	Secure, stable and robust in production
4.	All the above at a reasonable cost
Architecture attempts to optimize that formula. 
### 1.1 Architecture Areas
In Mendix we separate three levels of architecture
•	Enterprise architecture is strategic, such as policy, positioning, portfolio, technology selection and guidelines.
•	Solution Architecture is tactical, and works on program level, to solve business problems using one or many systems and technologies
•	System Architecture is the architecture of one functional unit within a solution normally using one technology such as Mendix. In Microservices architecture there may be one large App to start with, that is later split up, but it is still considered one “system” by other teams within the company.
There are other more generic areas which frequently are referred to:
•	Technical architecture typically refers to the selection of technology, the infrastructure that it runs on and how it is deployed and provisioned
•	Security Architecture, that relates to all things around security, functional and technical, e.g. Active Directory, SSO, SSL and SAML etcetera
As more and more things move to the cloud, the technical architecture is getting two new areas:
•	Cloud architects plan and design Cloud infrastructure, which components to use and how connectivity towards data-centres and between clouds should happen
•	CICD Engineering is becoming increasingly important to automate as much as possible in IT delivery and maintenance in line with the DevOps paradigm
Mendix allows building very good Apps with little technical understanding, but as the scope, complexity, criticality and volumes grow, there is an increased need for good architecture, good integration and skilled technical resources on the project.

### 1.2 Mendix & Architecture

Mendix has made the subject of architecture a lot easier by reducing the number of factors to consider during the development process (for example, how to make the UI, logic, and databases work together). In addition, Mendix simplifies the infrastructure and deployment considerations.

But there is still some architecture work remaining so that you can get the best apps working together to serve the business in a secure and robust way that performs well. As customers have discovered the speed, productivity and flexibility of Mendix, they have started using Mendix for core systems and high volume situations, and then Architecture becomes more important.

Mendix has a very strong base in innovation apps and business differentiating systems (for more information, see [What Can I Build?](https://www.mendix.com/evaluation-guide/what-can-i-build) in the *Mendix Platform Evaluation Guide* as well as Gartner's [Pace-Layered Application Strategy and IT Organizational Design](https://www.gartner.com/binaries/content/assets/events/keywords/applications/apn30/pace-layered-applications-research-report.pdf)). But as many customers have discovered while employing the speed, productivity, and flexibility of the platform, Mendix can be used for the heavy-lifting in a company. At that point, it becomes more important to consider the architecture in order to optimize the solution and make sure it meets requirements for volume and robustness.

### 1.3 When Do I Need the Real Architects?

As the solution, scope, volume, and criticality of a system increases, there is an increasing need to have strong technical people on the team and professional architects to help in creating the best solution.

{{% todo %}}[**EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over6.png)

The larger and more important the solution, the more thinking and architecture needs to go into it. There may also be more reasons to test and tune the system after functional realization, in addition to requirements for professional monitoring.

## 2 Current IT Trends

There are several IT trends converging, where Agile, DevOps, Microservices, Cloud and Automation are at the centre of the evolution:
As the picture below shows, areas such as SOA (functional architecture), Agile (methodology) and Cloud (infrastructure), are merging into one coherent movement of Enterprise DevOps with automation, microservices and an agile mindset

<<PICTURE>>
	
## 2.1 Digitization on All Levels
This evolution makes a lot of sense: IT teams and methodology, the organization, the infrastructure and the technical components are all related to each other and for optimal results the overall strategy should be beneficial for all these elements.
Good architecture, technology and organization should deliver Digitization to all levels of the company, from Customer interactions, to Business Operations and all the way down to digitizing IT delivery which Cloud, Low-Code, CICD, Microservices and DevOps are all part of. As the picture below shows, this all leads to people being able to make more @ higher quality, than before.

## 2.2 Business and IT Alignment

<<PICTURE>>
	
Enterprise DevOps will provide us with better Business and IT alignment, which is at the heart of what Mendix is trying to provide. When people that innovate in IT and the people that know how the business runs can cooperate more closely, we will iterate towards better architecture, increased digitization and more value to the business.
The pre-requisite for this entire evolution is the Delivery automation in IT and IT infrastructure. The Cloud and Low-Code platforms enables Biz-DevOps. Small cross-functional teams do not need a DBA and infrastructure experts anymore. They can own the entire life-cycle of the Apps they build – and they can be more functional and therefore also more closely aligned with the business.

<<PICTURE>>
	
Automation in infrastructure for Apps also means that managing more components no longer adds significant cost. A double sized cloud container costs approximately 2 times as much. This means that building smaller, functional Microservices is possible. 
We can adapt the size of Apps to what is most efficient to maintain. Microservices can be quite large when using Low-code, so the App architecture with often align with how the business sees the world.
All of this means, that we are leaving behind ourselves, the era when Dev, Ops and the Business are separated by a trench of conflicting objectives.  The DevOps teams and the functionally oriented Apps can align with the Business they are supposed to support.


## 3 Architecture Subjects Covered

## 3.1 Microservice Architecture

Microservices is a popular way of building IT solutions. It avoids building Monoliths and SOA layered architectures, where dependencies tended to get out of hand.  Instead we make functional, autonomous components that cooperate to fulfil a business function. This suits Mendix very well as described in <link>.
Mendix uses the definition of microservices by Martin Fowler at Thoughtworks. As shown below microservices are more functional, encapsulating a business process, and they cooperate via business events, more as actors in a business process. 


{{% todo %}}[**EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over3.png)

The [Microservices best practices](..microservices/microservices-overview) best practices will dive into this exciting development.

Often there is no need to separate technical and functional architecture, but rather work on one single solution model.
The most techie considerations are increasingly abstracted away by Low code and other cloud-based solutions. Left are more functional decisions. Architecture will be understood by all parties and take business organization, delivery organization, technology, and business process into consideration. 
The diagram below shows how Business stakeholder, Process owners and Solution architects cooperate towards the best Microservices architecture, taking autonomy, re-use, process, operability and scalability into consideration.


{{% todo %}}[**EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over4.png)

IT architecture of the future will not separate technical from functional architecture, but rather work on one single solution model that is understood by all parties and takes the business organization, delivery organization, technology, and business process into consideration.

{{% todo %}}[**EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over5.png)

Architecture needs to have a level of flexibility as more information is made available during the realization of an solution. This could involve refactoring an app or splitting an app into smaller parts based on the real knowledge gained from the actual 

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

Architecture is a wide subject area. Mendix Best Practices will cover the areas where we see the most interest in advice and information.  The Best Practices included are work in progress may be subject to change, as is the world around us.
The weather never looks (exactly) the same on two days of one’s life, so it’s important to both look for what is the same, and what is different when you work towards the best solution for your Maker’s challenge.
In an agile manner we should continuously measure and verify our assumptions based on real information as a solution is being created or managed. As reality changes we should fine-tune the architecture.
<<NEW PICTURE>>
As the architecture is improved we can improve the quality and value of IT solutions for all the teams building, managing and using the IT solution.
Ultimately, Mendix is there to support you both with technology and consulting. We provide architecture workshops where we think along with you on any area related to making the next generation IT with Mendix.
