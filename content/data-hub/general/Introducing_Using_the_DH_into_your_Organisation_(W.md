---
title: "Introducing/Using the DH into your Organisation (Working title)"
category: "General Info"
menu_order: 10
description: "Describes concepts behind DH and implementation"
tags: ["data hub", "microservices", "curator", "custom owner", "administration"]

---

## 

# 1 Introduction

Guide users in planning, evaluating, implementating a Data Hub in the organization. 

Utilize the data resources, integrating them for a healthy collaboration and use of resources in an organization. Review current applications into micro-services to enable reliable data to be found and use. 

DH is used to goven and manage the shared data and ensure that users are properly informed for finding the best sources for their organization.

survey current situation

prepare for data collaboration

maintain a hub of data.

this is a guide it provides a a checklist  on the journey to implement DH and also to expand it.



## 1.1 Getting Started with Mendix Data Hub



Follow the journey for building an app in Mendix Studio Pro and use available datasets by following [How to Share Data Between Apps Using Mendix Data Hub](share-data/).

Explore the [Data Hub](https://hub.mendix.com) for your organization.

## 1.2 A brief overview of what is involved

getting Started Video -** used in the Academy workshop and introduced here.

?? link touch



#  2 Data Hub Concepts and Terminology

## X.1 Overview of using Data Hub to share data sources 

A visual example:

![image-20210313122809029](./attachments/introducingDH/overview-processes.png)

* Customer information is created in the Sales App. 

* Different parts of that information needs to be used in other Apps -**Delivery App** and **Invoicing APP**.

- Each app builds around the shared data with their own Customer information relevant to their particular scope of functionality
- Changes to the shared dataset from **Sales APP** will be reflected in the other apps.  



## 2.2 Using Data Hub to Share Data - an example

1. Developer of **Sales APP** has Customer data in his App which he wants share with the rest of the company.  Publishes useful groups of entities (datasets) that would be useful in an **OData REST service**. 
   1. The developer organizes the published services to group the **datasets** into relevant services oriented towards specific use cases. Not all of the information is necessary, or should be shared, so only entities and attributes of these entities are published.
   2. Developers of **Delivery APP** and **Invoicing APP** discover the **Customer* datasets in the organizations Data Hub. 
      1. They qualify the datasets by examining the originating app and the *quality* of the data.  
      2. In Mendix Studio Pro each developer drags the required entities from the published services into the Domain Model and can immediately start using them in their app modeling. The service contract is consumed, but only the required entities are accessed.
      3. The consumed entities can be edited to only include attributes and associations that are required for the consuming app. Other fields that can be removed. 
      4. The consumed entities are available in all Microflows and UX components as if they were part of his own Domain Model (practically removing the need to build a dedicated integration when accessing objects in other Apps that would be required when if Data Hub was not used).
   3. During run-time, when the end of **Delivery APP** and **Invoicing APP** do something that requires the **Customer** data, it is automatically retrieved from **Sales APP** in real-time. Filtering, paging and selecting in the protocol itself and only the requested fields and records are retrieved. 

This makes it simpler to use data between Apps, and the Catalog allows governance of which data is used by whom, and life cycle management informing people of changes, and with good versioning of OData contracts.

##  2.3 The Role of Data Hub

·The Catalog is the hub in the collaboration, discovery and connection of an organizations data source.   It catalogs microservices from the organization's business applications systems using OData contracts. The Data Hub can already import OData contracts from 3rd party systems such as Teamcenter, SAP & Microsoft and OData v4services from other business applications.

The Data Hub facilitates an integration mechanism, where architects and lead developers can define data that is available and what the data means. Citizen Developers?? can use the data easily, ??and where impact analysis for who uses which data is out of the box??.

In the current format OData is supported, but ??soon also e.g. REST Swagger files can be imported??, 

## 2.4 DataHub Features

The following base features of DataHub:

- Easy access to datasets in other Apps, with completely seamless filtering and paging 

- ??Easier caching of data when required, using a Microflow??

- Search and discovery of the data that has been published

- ??Governance on who can accesses what data ?? not DH but defined by the publisher

- Management of data access rules in the source (e.g. using ID propagation)

- Versioning and life cycle management of OData contracts?? publishers have to take care of that

- Automatic update of catalog when deploying an app (published services)

- Automatic registration of dependencies in catalog, always up to date landscape view

- Information on number of consumers of an API, understand when you can resign an API and who to inform 



------------------------

# 3 Developers/Users  - the new way to develop apps using shared data

Data Hub is used by developers - low code and no code - to cretate apps in two way:

* Publishing reliable datasets from Apps
* Consuming data originating in other apps to create new apps.

Enables reliable sources of data to be used.

No complex integrations.

Publishers ensure data sources are updated and maintained. Set access to types of data in their publishing application, see in the Landscape which apps are consuming their data sources. 

Integrating external data sources is achieved through OData services.

the following table shows the difference for developers to use external data through DH and setting up a REST service integration: 

|                                                              | **Using DataHub (OData)***                                   | ***Using Regular REST Services\***                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***Display a filtered set of remote records  in a Data Grid\*** | 1.   Search the ***DataHub Catalog\***  for a data object <br /> 2.   ***Drag and drop\*** object to Domain Model to create *Remote  Entity*  <br /> 3.   ***Paging and filtering are out of  the box\*** in a  Data Grid as the OData contract does this seamlessly ***(this is a significant gain in time and simplicity)\*** | 1.   Ask other App Owners which REST  services to use  <br />2.   Load JSON definition into project  <br />3.   Create a microflow with an action  related to REST endpoint  <br />4.   Do the Object mapping  <br />5.   Field level Data manipulation and  validation  <br />6.   Set up the domain model to receive  the data (persistent or non-persistent data)  <br />7.    Manually implement filtering or paging using Microflows for actions in  the Data Grid ***(this can be difficult)\*** |

* - [ ] 

## 3.1Guidelines for Publishing Data Sources to Data Hub

- [ ] What is a micro service??


Model the app as a collection of micro services 

publishing all data and allowing all other App developers to access any parts of your App’s domain model limits your freedom to evolve your App. 

When other Apps are navigating associations in your App’s data-model, it means it will be harder for your App to change these relations later if requirements change for your Business App’s function.

using Microservices each App can specialize in a specific purpose, and that includes specializing in which data to store about an object and how to store that data. 

It is good practice in Microservices Landscapes to publish meaningful datasets and mnimising what is published to avoid dependencies. This means *Publish* only the objects, the fields and the associations that can remain stable, and that are intended to be used externally and *Hide* (do not publish) all data that is local and specific to the App’s Business function.

A basic use-case is that a datatype like *Customer* is owned and created in one App. Some of this data is needed in another App, where additional information around the same object is also added and used locally.

### 3.1.1 Mendix Studio Pro

DataHub also makes it very simple for a Citizen Developer to publish data from an App, to be used in other Apps. Just select the object in the Domain Model and select “Publish” and select the fields that should be available to other Apps.

Note: ***All data should not be published!\***

The Image below illustrates how a published dataset can be used.

![](/Users/Ila.Gordhan/Desktop/Github Mendix User Documentation/content/data-hub/attachments/collaboratingSP.png)

## 3.3 Connecting to Other Systems

Publshing services from other business apps which can be consumed through DH

Also use DH to access data sources and data sets to use in other business apps.

# 4 A**rchitecht Planning** 

## 4.1 Microservice Strategy

The Mendix DataHub makes it easier to break larger components or “Monoliths” up in smaller more manageable parts, so called Microservices. Therefore, when using the DataHub it’s important to know more on what Microservices are, and how to split things in a good way.

![image-20210314134256668](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314134256668.png)

Microservices are usually “*full stack*” (UX, Data and Logic together) so they can fulfill a business purpose within each App, and thereby minimizing the probability that a business requirement effects more components.

This way each component is specialized for the purpose that it should fulfil. The Data model, the UX the logic and even the sizing and infrastructure of each App is optimized for a specific purpose instead of having one size fits all. 

And most importantly: ***These apps can evolve separately\*** and be deployed separately from each other with little or no regression testing of the other Apps. That means that different User groups are more independent from each other and can get what they want much faster.

![image-20210314134321595](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314134321595.png)

Building things in this way is also advantageous for the Development teams, that can be smaller and, have much more ownership for their App, their part of the functionality. The smaller size of the team and the larger focus on specific areas also brings these IT teams closer to the Business they support making Biz-DevOps possible.

If in addition using Low Code on the cloud, with fully automated deployments, logging and monitoring, these small teams can own the entire Application Life Cycle of critical systems

## 4.2 Organizational Benefits of Microservices

There can be many reasons to break up something in Microservices, but the most important one is the organizational reason. By having different business units own their Apps, the iterations towards higher and higher level of digitization can be much faster.

When Apps are independent from each other, the DevOps teams are also more independent, then the Business Units that use these Microservices are more independent to innovate and improve customer service, work more efficiently, or save time and resources in other ways.

![image-20210314134441569](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314134441569.png)

Sometimes scope is divided in parts based on business function, but the remaining App is still quite large. Then there can be technical reasons to break large things up, or reasons not to break them up. It is important to know ***Why\*** something is split in two parts, in order to split it in the ***Right way\***.

## 4.3Technical Reasons for Splitting Microservices

Some technical reasons to break off a microservice:

o  Create an overview App or Dashboard that is shared between user-groups and allows linking into specific Apps for specific tasks, sometimes with cross department workflow and KPIs

o  A separate user-group with quite specific tasks, like Field services or Supplier collaboration

o  Master data like Customer data needs to be shared between many Apps

o  Reference data like Drivers, Vehicles, Countries… are better to manage separately

o  Heavy processing or Batch processing is separated from the User oriented App

o  Complex rules that need to be shared and can be expressed as a service, like risk assessments and cost calculations

Microservices should also not be too small, because that will also add to integration, dependencies and administration. One should be quite conservative in splitting things up. It is important to analyze ***which\*** reason is the most important, and only split when the advantage is obvious. If in doubt, it is better to start with a larger App organized in clear modules and be ready to split later.

![image-20210314134517577](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314134517577.png)

## 4.3 Business apps - Microservices Architecture

DH facilitates a microservice architecture to build apps for specific business functions.

DH makes it easier to integrate apps, both in real-time or when caching data – and it makes it easier to find the right data as well as govern who uses which data

all integration creates a dependency, and dependencies should be minimized by good design and architecture. This is why the Catalog and Governance parts of DataHub are so important.

The autonomy of Apps, and autonomy of the teams that build the Apps, is essential to generate the full benefits of a Microservice Architecture. So even when it is now much easier to use data directly from other Apps with OData and DataHub, there should be some moderation in how dependent a set of Apps are from each other. 

## 4.4 Mendix and Low-Code for Microservices

Microservice strategy, if done in the right way, will show benefits independently of technology. But if using Mendix Low Code and the DataHub and especially on a managed Cloud infrastructure, the advantages in productivity and business satisfaction can be enormous.

This is because Low-Code and Cloud augments the level of automation to a point where a relatively small team can build, own and operate relatively large functional Apps. This means that Mendix Microservices can be the right size and aligned almost perfectly 1-1 with a business function.

![image-20210314134557529](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314134557529.png)

- [ ]  ref Mendix is Ideal for Microservices….

### 4.4.1 Guidelines for good Microservices Architecture Design

* Data sharing should be efficient for the overall maintainability, and the run-time stability of the overall solution and updating of publshing apps. The easier it will be to change the solution later, re-test it and re-deploy the different Apps independently.
* Splitting functionality along the lines of “Business Functions” that have clear and intuitive integration similar to how Business units would communicate
*  Note that Mendix apps are organized into “Modules”  – that is a first step in separating two part of functionality. Sometimes a larger App with well-defined Modules is a better choice than several separate Apps. This can be the case if several “Modules” are both using and updating the same data for different purposes. If in doubt whether to split functionality in more than one App, it is better to either start with one App having clearly separate modules, or ask a Mendix Expert for advice
*  Think carefully about which objects and services should be published, and rather publish less than more as a starting point. All data that is ‘hidden’ from the rest of the world can be changed and updated with no consideration for other Apps, which gives flexibility and autonomy to the source App
* ?? While dragging and dropping objects to view data is the first choice when accessing data from other Apps, consider if some data needs to be cached for performance and availability. If this is required, ask a Lead Dev for the best way to cache some of the data.
* - [ ] Is this for devs/architecture??when not to use DH?? When handling updates, creates and other actions like starting a workflow in another app or communicating a business events, the first choice would be a REST service with a Microflow. 
* - [ ] ??ditto?? With some design it’s also possible to design an “Event table” in the source App and poll from the destination with a scheduled Microflow that asks for new events in the Remote Entity for that Event table.

- Data Hub at the centre of my organization
- Building a series of connecting apps 
- Breaking down my large application into a series of smaller apps 
- Workflow
- Organization  and Compliance —Data Policy 
- What Governance do I have to plan for
    - Versioning
    - Compatibility
- Security
    - User/team/department
- Access 
    - User/team/department
- Future planning

# 5  **Head of Development/Implementation**

Mendix DataHub current version focuses on Data retrieval using OData.

- [ ] Do developers need this kind of overview - or is it useful to provide context and introduce additional services and formats as they become integrated in DH?

## 5.1 How is OData different from a REST call

DataHub’s OData offers a simpler way to share and discover data in Design-time, and with optimized retrieve in Run-time.

 ![./attachments/full-stack-implementationOData.png](/Users/Ila.Gordhan/Desktop/Github Mendix User Documentation/content/data-hub/attachments/full-stack-implementationOData.png)               

Figure 5: An important benefit is the full stack implementation of OData which makes it seamless and easy to integrate.

## 5.3 OData or REST?

REST returns a complex tree structure that is a specific combination of data related to a service. The data structure can be very different from the data-model in the source system since a Microflow will gather the information using logic. But it is generally a fixed format, which means that filtering, paging and optionality of fields has to be designed and implemented by the source App team.

Using OData retrieve is more fluid and efficient, but it means that there is a dependency between the two data-models of two different Apps. This makes it much easier to do direct filtering, selection of fields, as well as navigating relations between Remote Entities. It also makes it possible for one OData contract to be published, and having many consumers use it in very different ways. OData adds a lot of flexibility in the development phase. 

This means that *DataHub OData* is more efficient for retrieving information between Mendix Apps, using basic filtering and criteria. REST services are still the most important protocol when:

·    Processing of the data is required at the same time as retrieving it

·    When updating, creating or deleting data remotely

·    When initiating Actions remotely, like starting a workflow in another App

·    Sometimes to avoid exposing the Data-model of the source, especially for remote integration where a more formal relationship is desired.

This is because REST Service Calls have a Mapping and a Microflow available to do things, validate things, calculate values, catching and managing errors etcetera. This makes it superior for updates and deletes and most actions and business events.

With the OData contracts two Apps will be much closer to each other and using the source App’s data model. This is great when the data is really only viewed remotely. It may be less good when the second App is working on the same data and managing it in a different form. 

***Example:\*** If I have a Sales Lead App that is specializing in contact networks and lead generation, the Sales CRM platform that eventually evolves the lead into an order, will require a completely different data model. While some data is shared and handed over one could imagine using DataHub OData to view Leads remotely from the CRM App, while when a Lead is made into an Opportunity it is transferred with some core data via a REST service, that maps into the Sales CRM data model.

|                           | ***Using OData\***                                           | ***Using REST\***                                            |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***Who is in Control?\*** | The Client has better control of navigating  data from the Source | The Source App has exact control of what the  clients can do with a service call |
| ***Advantages\***         | Much easier to filter on data and select what  is required to retrieve  Navigation between Remote Objects from the  Client side  Allows to split Apps easier while maintaining  the same data model | More formal way to communicate which is  better for remote systems and/or teams.  Allows a *Method* to be used as part of  the service call, which is required for update / create and a benefit for some  retrieves and can help compensating for data-model changes without changing  the service |
| ***Disadvantages\***      | Dependency between data-models of Apps, gives  a closer coupling  Only retrieve, no create or updates | Fixed format of services.  Requires mapping and development skills to do  filtering, paging etcetera |

### 5.3 OData Retrieval of Data in SP using DataHub

###  5.3.1 How to use OData Services in Studio Pro

The OData protocol uses REST as a transport, but it allows a direct integration from data objects in one system to data objects in the other system. Using it is very simple:

1. Search the ***DataHub Catalog\*** for a data object

2. Drag and drop the object to the Domain Model and the data is available as a *Remote Entity*

3. If showing data in e.g. a Data grid, then paging and filtering is directly out of the box

As data is used for different App functions, the Mendix App automatically initiates OData calls to get the correct data at the right time, and it only retrieves the required data which means that it is more efficient (faster) than REST services in most instances.

### 5.3.2 Using Associations in Remote Entities

The big difference is that with OData the client is in 'control' of navigating the objects and finding the data, while in REST the server is in control. In REST the source App pre-defines exactly what data can be retrieved and how, using the fixed format REST services.

With *DataHub OData* the App that uses remote data navigates the published part of the data-model as remote entity relations. It saves a lot of time and increases flexibility in design time. But we trust the destination App developer to not over-use associations or do the wrong things, to avoid that the Remote Entity use takes an unexpected amount of processing power from the source App. 

To avoid this risk there are some possibilities:

1. Shorten frequently used association-paths in the published part of the domain model

2. Publish only small clusters of data in DataHub, so that only a limited amount of associations can be used in each small functional ‘service’ area. 

3. Create an optimized REST service if it is a very frequently used association navigation

4. For high volume of retrievals, it often makes sense to Cache the required data in the destination (see section later), in a format that is more optimal for retrieval locally.

## 5.4 REST Service Retrieval of Data

If using REST to do the same thing, the Developer has to:

1. Ask other App Owners for information about which services to use

2. Load the JSON definition into the project
3. Create a microflow with an action related to a REST endpoint

4. Do the Object mapping

5. Field level Data manipulation and validation

6. Set up the domain model to receive the data (if using persistent or non-persistent data)

7. If showing data in e.g. a Data grid where we search and/or do filtering this has to be done in the microflow. *This usually requires skill and quite some time from the Developer and avoiding this is a significant value provided by the first versions of DataHub**.***

??? When to use REST - While DataHub OData is a much more efficient way to retrieve data directly from source objects as shown above, there are still a number of cases when a REST service is required or preferred, for example for updates, deletes and other actions, and mostly also for business event management.Managing Changes in OData and REST

   Preferably associations between objects that is published in DataHub should be relatively stable. When clients navigate relation between two Remote Entities it means that the Source App needs to maintain this association – or if broken – both systems will have to change at the same time. 

   All other non-breaking changes to the domain model are managed by the Mendix platform, without the Developer knowing. E.g. if a fieldname is changed, but the type remains the same, both REST and OData services will continue to work just as before

   For additions and other small changes to services and published entities, there’s good service version management in the Mendix platform. Some advantage to REST here since compensating changes can be done in the Microflow layer, but also DataHub OData contracts are versioned and managed.

## 5.5. Autonomy of Teams? Remoteness of Teams?

??for Apps that are related to each other or owned by the same Department, OData makes a lot of sense, while for Apps in very different departments, more formal REST services are good practice:

o  Source Apps can publish OData relations and data that they think are relatively stable – or – 

o  If the Apps are closely related functionally and managed by the same team, these dependencies are less of a problem.

o  Replacing a Monolith or building in SOA layers are good examples of where one would not consider these dependencies a problem



## 5.6 When to Pull Data Real-Time? When to Cache Data?

A Developer that integrates between systems has to answer the question:

o  Should I get the data in real-time when the data is required? – or – 

o  Should I copy the records over to have them available locally?

o  ***Pull the data in real-time\*** if this achieves sufficiently good performance and operational stability. This is easier to build, so it is the first choice, especially with DataHub

o  If Data changes frequently in the source system and we require the latest updates

o  If the security requirements prevent data from being stored outside the source system, such as Bank-account data, then only real-time retrieval is allowed

o  If the data set if quite large copying is less attractive

o  ***Cache the data\*** when data is really *Core* to the functioning of the destination app, i.e. data is used very frequently and/or the App would not work at all if this data is not available and/or if the destination App build up-on the source data for a new business purpose.

o  If Data changes slowly, like look-up values and reference data

o  If the data set is small one might as well copy it to be sure it is available

o  For large data sets it is common to only cache recently used records and purge them again after e.g. a week.



- [ ] Ref Figure 6 example.
- [ ] ![image-20210314133956916](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314133956916.png)



The access to the entire detailed object is greatly helped by DataHub OData service. Caching of core business fields often use a scheduled Microflow that initiates a REST or OData call for new records using and a change-flag or a timestamp. DataHub will soon provide caching out of the box. Caching of static reference data usually use a File-based import that is quite stable and easy to implement.

|                      | ***Pull in real-time\***                                     | ***Cache the data locally\***                                |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***Advantages\***    | Always get the latest record  Simpler to implement, especially with DataHub  Good for large datasets and detailed  information accessed rarely | Data is always available  No run-time dependency on App 1  Better response times  Easier for the test cycle |
| ***Disadvantages\*** | Run-time dependency for deployments and down  time           | Polling can be heavy if many systems poll the  same source (consider Pub-sub or File) |

## 5.7 Retrieving Data in Real-time

### 5.7.1 Real-time Retrieve with Data-Hub OData

As of the first release of DataHub, retrieval of data with filtering, paging and selection of specific fields is now completely out of the box with visual development. This is a huge improvement that will make Citizen developers more able to build a set of Mendix Apps that share data efficiently between each other. The Low Code paradigm is extended to integration between Apps.

When a set of related Objects are dragged into the Domain Model as *Remote Entities*, the Citizen developer can use them as if they were part of the same App’s Domain model and traverse the Object relations. OData will arrange the retrieval of the required data automatically.

See picture below – where the user asks for an Order with Items and the supplier per Item:

​                               ![image-20210314133939308](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314133939308.png)

In OData this is done directly from the UX widgets or microflow and all subscribed-to Remote Objects with relations are available to use.

REST it a more formal for the user. It has specific services for specific purposes. E.g. the client does not control the format of the REST services. It is possible that we need to get Orders with Items in one REST call, and then loop on Items to get the supplier data in separate calls. This is less efficient.

This makes DataHub OData extremely powerful for Developers of close-knit applications that cooperate closely in e.g. a cluster of Microservices that replaces a Monolith and the DataHub Catalog organizes the dependencies to manage Life Cycle of changes. 

### 5.7.2 Real Time Retrieve with REST

REST is more formal than OData. Building a Service contract that hides the data model of the source App is good practice in many situations because it allows the source App to evolve the data-model freely without impacting the other Apps that use the information.

This becomes more important the further away from each other Apps are in organization and purpose. So, there is still a significant place for REST services in the future. Note that as Apps evolve one could start with OData retrieve, and later find that a dependency on data model is un-desirable, and then it can be changed into a REST Service.

|                      | ***Real-time Retrieve with OData\***                         | ***Real-time Retrieve with REST\***                          |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***Advantages\***    | Default option when using DataHub because  it’s superior ease of filtering and paging etcetera.  More efficient retrieve since only getting  data requested (~30% faster) | Retrieving specific complex objects like  Order with Items and other things.   Can be better with many subscribers to data  since it’s slightly more decoupled |
| ***Disadvantages\*** | Direct link between data-models, see previous  section. Less preferred if remote teams or changing data-model | If the source is not able to change REST  services, they are fixed format and can sometimes be un-optimal for  retrieving |

## 5.8 Caching Data

Caching is done for two main reasons:

o  ***Performance:\*** If an App has to make 2-10 calls to other Apps for every screen it’s showing and for every workflow choice, then it will never perform very well. And in any case, if this “core” data to the functioning of the App is local, performance will be much better

o  ***Availability:\*** When data that is “core” to the functioning of an App is in another App, they are operationally dependent and if the source App goes down or is re-deployed, nothing works in the destination App.

So there is quite often a very good reason to Cache some data, while one should avoid Caching too much data, simply because it requires double storage and a more complex mechanism to keep data up to date.

o  Most caching is done by polling from the destination for changed records, and this is possible with both OData and REST using a Microflow

o  Slow-changing data is most often cached via file export and import, which is quite easy to do for smaller data sets, and it creates a clean sleet of records every time.

o  Some close-to-real-time caching is done with Pub-sub, using a message broker in the middle and this is more common in remote architectures or for Business Events

There will always be some delay in caching, due to poll-frequency or file uploads being done daily or pub-sub taking some time in the middle. The requirement for having the latest data will be weighed against the non-functional requirements. E.g. having 100 Apps poll a source App every second for new data will use quite some resources from the source system.

### 5.8.1 Caching in the Background or Caching retrieved Data

The first question to consider is if I should cache only the data that a user or process retrieved already, and then potentially purge data not used after a certain time.

Or if I want to cache data as a background process when nobody is looking, in which case it is important to create a functionally robust mechanism that always works. What is robust depends strongly on the type of data and the business use case.

### 5.8.2 Polling data using OData based on the DataHub retrieve

A scheduled Microflow in App 2 can simply request data from a *Remote Entity* with a filter on 

o  *change date >= timestamp of last update.* 

And then copy the *Core* parts of the data, into a separate *Persistent Entity* that is used for the basic operations of the App 2. The *GetDetails* page is served in real-time by the same OData contract, that is used to keep the Core data updated.

This makes sense for caching individual records, which is the most common situation. It is also more efficient since OData only retrieves the required fields and the required records, compared with a REST call that has a fixed format (usually many more fields and maybe child ojects that are not needed) and the REST services may not allow efficient filtering.

DataHub will make this type of caching even more easy in the future.

### 5.8.3 Polling data using REST retrieve

Caching data using a REST services and some sort of flag or (*change date >= timestamp of last update)* is currently the by far most used option to Cache data between Mendix Apps and from external systems. It works very well, but with DataHub chances are OData will grab a fair share of this scope, since it will be more efficient and simpler for single table caching. 

REST is still recommended for Caching when:

o  There is an external system to cache from

o  When the systems are far from each other in distance or organization, and REST is deemed a more formal way of communicating

o  When the Caching involves a structure of objects that need to be cached together

If the target is to cache a structure of data with relations a REST call that caches the full information as one single services call is safer. We have control of any failures and missing information. 

|                      | ***Cache with REST\***                              | ***Cache with DataHub OData\***                         |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| ***Advantages\***    | Can retrieve a complex object in once service  call | Easier to implement via Microflow and easier  to filter |
| ***Disadvantages\*** | Takes experience to do in the right way             | Only for simple entities                                |

### 5.8.4 Difficulties with Caching in Real-time

Caching data in real-time is not always trivial so one should use this with care and when really required, and one should try to make a simple robust design.

#### 5.8.4.1 Real time Caching Data for Deleted of Records

For Deleting records when the data is replicated with, is to always use an active/inactive flag so that the record still exists and can be retrieved with a new status – and treated as deleted – while still existing in the data-base. 

This has to be considered when displaying objects in a list, since we in most cases do not want the user to see in-active objects.

#### 5.8.4.2 Complex Objects

Sometimes one needs a more advanced trigger, e.g. if an Item on an Order changed, we may want to retrieve the entire Order in a REST call and update that in order to be sure we have the correct situation. We need to update objects rather than re-create them to maintain associations.

### 5.8.5 Caching data with File import

This is probably the most commonly used way to cache data still in the general IT situation, since many processes are still batch driven, and because there are no strong requirements for real-time updates for many types of data that is commonly cached. 

It could be countries or currencies, or it could be drivers of vehicles that have to be registered the day before anyway. The method is easy to implement with file export and file import and it is robust for small sets of data when the entire data is refreshed with a clean sleet every day.

|                      | ***Polling to Cache Data\***                                 | ***Caching with File import\***                              |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***Advantages\***    | Easy to create and manage interface and  operationally stable.  Can be same interface for initial load if  getting e.g. “next 100” records | Easy to implement – and robust – clean sleet  of data every time.  Same interface for initial load. |
| ***Disadvantages\*** | Has to manage deletions and/or active or  in-active records. | Slow delivery of data – only valid for slow  changing data  Large datasets may use file of “changed  records” which is slightly more complex |

### 5.8.6 Caching data using Pub-Sub / Change Data Capture / Event Driven

There are certain situations when a Pub-Sub patterns is preferred. Or when an Event driven architecture is desired. Event driven means that a publisher sends information without worrying if the message arrives. The subscriber gets the information without direct interaction with the publisher. This requires a message broker in the middle, because the source publishes to a broker, and the destination subscribes to certain types of updates from this broker. 

This is very common when:

o  Functionally it is an event driven interface

o  There is a very high-volume of updates

o  There are many subscribers to the same information

o  The publisher or subscriber are quite far from each-other in geography or network location

o  When there are ‘dumb’ updates, e.g. news bulletins, stock-tickers, logging, metrics, IoT… 

DataHub will in the future provide a Pub-Sub option to caching data, and/or keeping data up to date. Customers with an ESB or message broker already use this pattern now, but it does require more implementation, and it’s harder to analyze when something goes wrong, so it is only recommended when the situation really calls for this option.

 

|                      | ***Cache by Polling for Changes\***                          | ***Cache with Publish Subscribe\***                          |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***Advantages\***    | The user of the information initiates the  call and “owns the integration” via request-reply so easier to understand for  Citizen developer  Easier error handling, version management and  debugging  Good for small clusters of Apps | A message broker in the middle decouples the  Apps infrastructure wise.  Good for simpler, stable messages with high  volume like IoT, metrics, logging, stock-tickers etcetera.  Also good for some master-data with many  subscribers and long distance. |
| ***Disadvantages\*** | Not efficient for very high-volume changes or  when systems are far apart or when there are very many subscribers to the  same data. | Harder to manage versions of messages and  data when many subscribers.   Initial load by separate mechanism.  Harder to analyze errors when/if they occur,  because one more technology and ‘hop’ is involved. |

### Considerations for Pub Sub Interfaces

Some considerations:

·   Success depends on implementation of pub-sub mechanism. E.g. 

o  If the order of events matter one should force a single thread of updates

o  If guaranteed delivery is required one should monitor successful delivery, usually by sending back an acknowledgement

·    Is harder to implement, understand and debug because it involves third parties to make it working and detailed logging to provide decent information on when updates are not leading to a desired effect.

·    Usually requires a separate mechanism for initial loads

·    Dependency between source and consuming system is 'hidden' in the message (structure).

## 5.9 Chaining of Requests for Data

*Remote Entities*, can be re-published from the consuming App in it’s own OData contract, which would mean tat the same entity is available in two formats, but the source is still the same. However this is a chained dependency and we warn strongly against this pattern since it will create an extra hop and an extra dependency that is almost all cases is undesirable.

![image-20210314134149780](/Users/Ila.Gordhan/Library/Application Support/typora-user-images/image-20210314134149780.png)

Integrating all systems - what do I need?

- Breaking up my current apps - Mx and non-Mx
- Retrieve data or cache
- Capturing Data and Automation 
    - Accepted Standards and other set-ups
- Automating Data Capture - APIs
    - Set-up a workflow
    - Data Hub API - see also for a walk-through [+Using the Data Hub API](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-bPBYadNIdEkr2rwXEjwVK) 
    - How do I update data
- Data Access
    - User profile 
    - ID Propagation
- Who manages it:
    - Data Hub Admin
    - Curators
    - Owners
- Governance

# 6 **Data Steward - Data Policy**

- Establish Organization’s Data-sharing policy
    - Company
    - Departmental
    - External
- Data Access and Metadata Access
- Certification/Qualification of available Data sources
- Data Security Considerations
    - User/team/department
- Access 
    - User/team/department
    - Dataset access guidelines
- Future planning




