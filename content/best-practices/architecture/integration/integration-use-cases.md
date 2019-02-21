---
title: "Integration Use Cases"
parent: "integration-overview"
menu_order: 2
draft: true
---

As described in the *Integration Overview* \<link\> document we recommend always
thinking of Integration from a functional perspective first. What should this
interface do for the business solution?

Deciding on the Best Integration Option
---------------------------------------

Below is an example sequence for the Architect or Lead Developer that is
considering the best way to integrate.

1.  What is the Business Use Case?

    1.  Use this document to see if one Use Case fits?

2.  What are the functional requirements?

    1.  Who needs what data when and for which reason?

    2.  Does it need to be real-time?

    3.  What error handling should be there?

3.  What are the functional options?

    1.  How can I operate this interface in Production?

    2.  How do we manage errors?

    3.  Real-time or Batch?

    4.  Request Reply or Events?

    5.  Is there an available integration layer?

        1.  If yes, what functions does it handle? E.g. security, monitoring,
            queueing and sometimes simple mapping

        2.  Integration layer means there are two parts of the integration where
            one can choose e.g. events, request reply, batch separately for the
            best possible operational solution

4.  What are the technical options for each functional option?

    1.  Which protocols are available?

    2.  What will it mean for operations?

    3.  What is more secure?

    4.  What has better error handling?

5.  Compare the options against each other

It is important to think of the overall solution, and recognize that integration
starts inside 1 system, and ends inside 1-N other systems.

If it gets very complicated on one side of an interface, it is often because the
other side is not ideal. Then the best solution may be to try to change the
other side of the integration.

Integration Use Cases
=====================

The Use Case we intend to cover in the Best Practices section are listed below:

1.  SSO, AD and Identity integration

2.  Import and Distribute Reference Data

3.  View and Search Data in another system

4.  Use and refer to Data in another system

5.  Process integration

6.  Export, Import & Batch Processing

7.  Master Data Integration

8.  Update Data in a Master App

9.  Distribute Master Data

10. Integration with BI and Reporting

11. Mobile integration and Off-line

12. CMS and CDN Integration

13. Integration with Ops and Monitoring

14. Integration with AI and IoT solutions

A short description will follow below, while for each Use Case there is an
Overview document specifying the characteristics or the Use Case, the main
options available and how they compare, and often there will be an example
implementation made by a Mendix expert, to use as a reference and/or to copy
pieced from

### SSO, AD and Identity integration 

This Use Case handles security around:

-   User Log-on integration, using standard SSO, e.g. SAML and Open ID

-   Service integration, e.g. SSL, tokens and encryption

-   Events, e.g. securing data on queues

-   Batch interfaces, e.g. using SFTP

### Import and Distribute Reference Data 

This case describes how to manage reference data, such as country codes,
currencies and even product sets can be reference data. This is slow changing
data sets often maintained in another system, and regularly imported in your
Apps from e.g. a CSV file. If we have a Microservices cluster we recommend using
one App as the reference data importing point, and distributing data from there
to the rest of the Apps.

### View and Search Data in another system 

A very typical case of integration is when from one App we just want to view or
search in data from another system. This is a simple functional use-case, but it
has a few technical options that are worth understanding.

### Use and refer to Data in another system

In this Use Case we not only Search and View data in the other system, we also
store parts of the data locally and set up a functional link between the
objects, so that we can either subscribe to updates (one functional case), or
just be able to re-retrieve a new version of the data on request later (another
functional case), or simply so that a downstream system (e.g. Finance) can use
the reference for it’s processing.

### Process integration

Process integration is potentially the most common integration in most
enterprises. As soon as a Business Process spans more than one App, there is
usually some level of process integration needed. E.g. when I submit an Order in
the ordering system it should go to a Fulfilment system and maybe after that to
Finance and we want to also inform the customer.

Process integration means integration of transactional data over multiple apps
or microservices. This is probably the most common form of integration and it
has several flavours:

1.  **Business events**, where some work finishes in one App or Thing and the
    next App should be notified to start the next steps of the process

2.  **Workflow integration**, where a user works in one App and then continues
    the same process in another App, in some cases requiring the worked-on data
    to be transferred to the next App

3.  **Process orchestration**, where at the end of a business event, several
    other systems need to be informed and/or updated

4.  **State Engine**, where we gather a large amount of events related to
    different processes, in order to determine that all processes finish
    correctly

5.  **Case Management**, is an implementation of a human workflow in phases
    maintaining a “case”-object with data. The case can run in one App and use
    process orchestration and act as a state engine, or the Case can be
    partially finalized in other Apps, often using sub-cases.

### Export, Import & Batch Processing

Even in a real-time world there are plenty of integration that still makes sense
to do in a Batch oriented way. Batch integration is usually decoupled because it
has one side that Extracts a File, another part moves the file, and in a third
step the File is imported.

This is great for reference data and other periodically updated data, and for
initial loads and exports towards e.g. DWH solutions.

### Master Data Integration

Master Data consists of semi-permanent objects that are used throughout several
business processes. That means that several processes and or departments use the
same objects and often also change the same objects. The most common example is
Customer data, where the same customer orders products from 5 different
departments but wants to be treated as the same customer.

Master data management in the full scope is a complex process involving:

1.  A central place where the Master copy of the data is stored

2.  Several mechanisms for updating the Master data

3.  A solution, normally human workflow managed by data Stewarts, for resolving
    conflicts and attempt to de-duplicate data

4.  One or more mechanisms for distributing updates to the Master data

In the best practices we will describe how to Update data in the Master App, and
how to distribute the data to other subscribing Apps.

### Mobile integration and Off-line 

The section on Mobile integration and Off-line Best practices will be filled in
when Mendix 8 is released, and will relate to the new React Native standard.

### CMS and CDN Integration 

Often Mendix needs to integrate with Content Management Systems (CMS) like
Magnolia. This allows for external facing Apps to have a main menu and marketing
material in a CMS system that is specialized for this, while Mendix runs the
functional part of the Portal.

It also will discuss Mendix integration with Content Delivery Node solutions
such as Akamai for Geo-scaled solutions.

### Integration with BI and Reporting

This Use Case describes several options for how Mendix developers can provide
data from the Apps towards a DWH, Data Lake or other BI tooling, using e.g.
File, OData or DB Dump.

It will also look at creating good Reports in Mendix Apps and integration with
data mining tools like Tableau.

### Integration with CICD and Ops and Monitoring 

DevOps is rolling out around the world and many processes from development, to
test to deployments and monitoring are being automated. It is in a way, together
with Cloud and Low-Code, the Digital Transformation of the IT industry.

Integration from functional Apps towards this automation and Ops tooling is
becoming increasingly important and we should eventually cover these areas in
various parts of the Best Practices section.

-   CICD integration

-   Test Automation – building specific test services?

-   App Management

-   Health checks and Basic Monitoring

-   Business Activity Monitoring

-   Professional Monitoring and Trend analysis

-   Security Monitoring

Dev and Ops are collaborating and using similar or the same tools to improve the
flexibility of releasing functionality more often, while maintaining stable
solutions in production.

### Integration with AI and IoT solutions 

Mendix already integrates well with AI solutions from IBM and Google, and with
IoT solutions such as MindSphere. This section should describe what to think
about, and provide simple example implementations to use as a reference.
