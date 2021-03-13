---
title: "Introducing/Using the DH into your Organisation (Working title)"
category: "General Info"
menu_order: 10
description: "Describes concepts behind DH and implementation"
tags: ["data hub", "microservices", "curator", "custom owner", "administration"]

---

## 

# X I**ntroducing/Using the DH into your Organisation (Working title)**

Guide users in planning, evaluating, implementating a Data Hub in the organization. 

Utilize the data resources, integrating them for a healthy collaboration and use of resources in an organization. Review current applications into micro-services to enable reliable data to be found and use. 

DH is used to goven and manage the shared data and ensure that users are properly informed for finding the best sources for their organization.

survey current situation

prepare for data collaboration

maintain a hub of data.

this is a guide it provides a a checklist  on the journey to implement DH and also to expand it.



## X.1 Getting Started with Mendix Data Hub



Follow the journey for building an app in Mendix Studio Pro and use available datasets by following [How to Share Data Between Apps Using Mendix Data Hub](share-data/).

Explore the [Data Hub](https://hub.mendix.com) for your organization.

## X.2 A brief overview of what is involved

getting Started Video -** used in the Academy workshop and introduced here.

?? link touch



#  X Data Hub Concepts and Terminology

## X.1 Overview of using Data Hub to share data sources 

A visual example:

![image-20210313122809029](./attachments/introducingDH/overview-processes.png)

* Customer information is created in the Sales App. 

* Different parts of that information needs to be used in other Apps -**Delivery App** and **Invoicing APP**.

- Each app builds around the shared data with their own Customer information relevant to their particular scope of functionality
- Changes to the shared dataset from **Sales APP** will be reflected in the other apps.  



## X.2 Using Data Hub to Share Data - an example

1. Developer of **Sales APP** wants to make available Customer data from his App.  Publishes entities of data that would be useful in an OData REST service. 
   1. The developer organizes the published services to group the datasets into relevant services oriented towards specific use cases. Not all of the information is necessary, or should be shared, so only entities and attributes of these entities are published.
2. Developers of **Delivery APP** and **Invoicing APP** discover the **Customer* datasets in the organizations Data Hub. 
   1. They qualify the datasets by examining the originating app and the *quality* of the data.  
   2. In Mendix Studio Pro each developer drags the required entities from the published services into the Domain Model and can immediately start using them in their app modeling. The service contract is consumed, but only the required entities are accessed.
   3. The consumed entities can be edited to only include attributes and associations that are required for the app. Other fields that he is not interested in can be removed. 
   4. The rest of the fields are available to developers in all Microflows and UX components as if they were part of his own Domain Model (practically removing the need to build a dedicated integration when accessing objects in other Apps that would be required when if Data Hub was not used).
3. During run-time, when the end of **Delivery APP** and **Invoicing APP** do something that requires the **Customer** data, it is automatically retrieved from **Sales APP** in real-time. Filtering, paging and selecting in the protocol itself and only the requested fields and records are retrieved. 

This makes it simpler to use data between Apps, and the Catalog allows governance of which data is used by whom, and life cycle management informing people of changes, and with good versioning of OData contracts.

##  X.3 The Role of Data Hub

·The Catalog is the hub in collaboration, discovery and implementation for medium – large Mendix projects??. It catalogs microservices from the organization's business applications systems using OData contracts that can be imported. The Data Hub can already import OData contracts from 3rd party systems such as Teamcenter, SAP & Microsoft and OData v4services from other business applications.

The Data Hub facilitates an integration mechanism, where architects and lead developers can define data that is available and what the data means. Citizen Developers?? can use the data easily, ??and where impact analysis for who uses which data is out of the box??.

In the current format OData is supported, but ??soon also e.g. REST Swagger files can be imported??, 

## X.4 DataHub Features

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

**Developers/Users**:  Data Hub - the new way to develop apps using shared data. 

    - Integrating apps and re-using data
        - A typical example Mx to Mx, Mx to other systems
        - How to integrate:
        - share data
        - Remote actions/business events
        - Connecting to my organisations other systems
        - Curating assets (how can I categorize my assets)
        - Terminology and Data Hub Concepts - establish DH and Data Collaboration principles: 


- A**rchitecht Planning** 
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
    
- **Head of Development/Implementation**
    - Integrating all systems - what do I need?
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
    
- **Data Steward - Data Policy**
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
    

This document will support the Academy Workshop(s) [+Training: Building a Microservices Landscape with Data Hub](https://paper.dropbox.com/doc/Training-Building-a-Microservices-Landscape-with-Data-Hub-LLuu6VYOzrPx9jSsYr7HP)  
Source: https://www.dropbox.com/sh/y4s0ksyps2fo9lv/AAATxmM-0RJ5Mp1-daR_xbjMa?dl=0&preview=Using+Mendix+Data+Hub+0.2.docx






![](https://paper-attachments.dropbox.com/s_65880E3E8C50ABDBE17DE305588394153E2FB44D153A7136CB335EEF609BB7A0_1611593369405_Screenshot+2021-01-25+at+17.48.24.png)


