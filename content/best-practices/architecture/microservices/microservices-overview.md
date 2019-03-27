---
title: "Microservices"
category: "Architecture"
menu_order: 5
draft: true
---

## 1 Introduction

Microservices is a relatively new concept that has become very popular. By now,
microservices are used in many contexts and on the web, one will come across
different styles of microservices, which may prompt the question, “What is the
correct way to build microservices?”. The answer is that all styles can be valid
in certain situations, but the one with maximum benefit we believe is described
below.

Business Oriented Microservices
-------------------------------

Mendix bases its view on Microservices on the
[definition](https://martinfowler.com/microservices/#what) created by James
Lewis and Martin Fowler from Thoughtworks, see “*Three Microservices Patterns*”
\<link\> for more information.

They recommend keeping all parts of a business function together in a App or
microservice so all parts are owned by one team and functionality can evolve
autonomously.

The figure below shows a number of functionally oriented Microservices where the
business can understand the architecture and the interactions, which is ideal
for Business-IT alignment.

![](attachments/microservices-overview/e44a152e6be967c19c4deab964c9b482.png)

Since Business features and functions most often have some UX, some Logic and
some Data that it works on, these Apps or Microservices usually have all three
technical layers included, and they are chosen to maximize the probability that
a new feature request has impact on only one single App or microservice.

Why Microservices?
------------------

The reason for Microservices has an organizational context. The common goal of
microservices is to have components that can be built and maintained by a small
team with fewer than 10 people. The other goal is that each Microservice fully
contains a business function.

This is because development productivity is optimal with 2–4 developers that
cooperate, do peer review, and help each other while maintaining slightly
different focuses (one developer is more tech, another is biz, another is ops,
etc.).

![](attachments/microservices-overview/606fac98da933389a5b0b7ed9be602ba.png)

At 8-9 developers the productivity decreases sufficiently that a break-up should
be considered and with more than 10 developers, according to Microservices
theory, we should start peeling off parts of the app and separate them.

I.e. microservice theory guides us to optimize the component size and the team
size, and therefore it works very well with DevOps.

Beyond team-size there could be many other reasons to split an App. E.g.
different processes, stakeholders or scaling requirements. Functional or
architecture reasons often make us create some apps with 0.5 developers and
others with 8 developers.

These are some benefits of microservices:

-   Most efficient team size for knowing and owning the product

-   Full control of the code-base and dependencies within the team

-   Very clear and explicit service contracts with other components that are
    tested and maintained through the releases of this and other components

-   You can change, deploy, and replace parts of the solution without having to
    change everything

-   There is less regression testing needed for each release if the service
    contracts are clear and stable

Monolith – Microservices – SOA Layers
-------------------------------------

The reason why Microservices is better than a Monolith and SOA layers is the
better management of size of and dependencies between teams and components.

### The Monolith – Too many Internal Dependencies

For the Monolith the team simply becomes too large, and developers specialize on
small parts without understanding the functional overview or the impact of
changes on the entire monolith. Teams re-use functions and data too much. Over
time any small change may have very significant impact.

In the figure below it is clear that the speed of development slows when a
larger and larger development team, has to support more and more user-groups and
processes, all working on the same software and the same database:

-   Too many user-groups want to change too many different things

-   Too many developers try to do too many things, often on the same functions
    and the same data-tables

-   Too many dependencies between functions, as short-cuts are taken, and
    internal modules are not well separated

-   Slow system generation and deployment and a large amount of regression
    testing for every small change

-   Lack of specialization for different functional areas, since all share the
    same teams, processes and deployable technical components

![](attachments/microservices-overview/ac014ec3d704baec2d57893c160c1e31.png)

### SOA Layers – Too many External Dependencies

In the latter years of SOA it was common do use a so called “N-tier”
architecture, or “Layered SOA model”. It was intended to increase specialization
in each technical layer of an implementation and to re-use as much as possible
within each of these layers. A typical 5-tier model would be:

1.  UX Layer

2.  Logical layer for UX related logic

3.  BPM Layer for processes

4.  ESB for enterprise services with front end adapter for exposing services and
    back end adapters to connect to source systems

5.  Systems of Record, where the actual business data and functionality would be

This model had some merit in the beginning of web-enabling companies with mature
core systems not ready for the cloud and the web, but it was a system that did
not scale well. But would we separate UX from logic from process and data
easily?

Business features would be chopped up in 4-6 layers where each a team would do a
small part of the function. All layers depended on all other layers. The teams
of those layers had to wait for the design and build of other teams see figure
below.

The desire to re-use each “service” in these layers, drove services to become
larger and more generic over time, and as services were ‘successfully’ re-used,
so did the dependencies increase, and more and more parties would be effected by
a change.

![](attachments/microservices-overview/c5f3018f93927e05568ad42300e0beef.png)

The figure compares 1) a large Monolith with all parts in one single piece, that
is so heavy that flexibility is limited and development is slow, 2) A set of
four specialized microservices, where most of them have UX, process, logic and
data included and 3) a system built as a set of features cross-using and
re-using services through a number of layers in the infrastructure.

Biz-DevOps for Autonomy
-----------------------

Having a team with no more than 10 people owning each component means you are
building a microservices architecture. In a cross-functional DevOps team, these
10 people would include a Product Owner, Business Analyst, Tester, and an
Operations person. This means that 6–8 developers on a team is already a lot.

For Innovation Apps, Operational improvements and Customer engagement it is
often useful to work very close to the business as a close-knit team that
evolves IT and processes over time as autonomous components by autonomous teams.

![](attachments/microservices-overview/1f6a3096f2b71cd081f034e3543e8bda.png)

Factory Model for Large Systems
-------------------------------

For large, core or shared systems that are built as a cluster of Microservices
using a factory model is recommended. DevOps tribes owning functional areas. It
is good to separate an automation team and have a CoE that shares best
practices, helps with architecture, specialists and finalizes and owns re-usable
components in a good way.

![](attachments/microservices-overview/70a8dcc1f50e982866a3f1cb4e5de55c.png)

Summary
-------

Microservices are here to stay, and there are several versions available out
there, see *Three Microservices Patterns* \<link\>, that all are better than
Monoliths and SOA layered architectures.

Mendix is ideally placed for this revolution since it keeps the technical layers
of UX, Logic and Data together in one container to stream-line development of
business functionality.

This evolution also enables Mendix to be a great choice for really big systems,
built as a cluster of smaller collaborating Microservices, see *Mendix
Microservices* \<link\>, and *Large Microservice Clusters* \<link\>,
