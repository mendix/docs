---
title: "Integration Solutions"
parent: "integration-overview"
menu_order: 2
draft: true
---

## 1 Integration Solutions

This section of the *Expert Best Practices* presents various integration solutions. Reading the material on [Service Integration](service-integration), [UI Integration](ui-integration), and other methods will give you ideas for where Mendix applications can play a useful role in your integration solutions.

Getting your integration right will not only reduce the cost of implementation and maintenance, it will also raise the confidence that the business has in the solution. A simple and robust solution will lead to fewer errors in production, better ways to manage the errors do occur, and a solution that is easier to understand, change, and extend.

## 2 Considering Solution Options

See <<Introduction to Integration>> for a general overview. Below is an example sequence of questions that an Architect or Lead Developer typically considers to find the best way to integrate:

1. What is the business use case? <br />
	a. Can I reference the [Overview of Use Cases](use-case-overview) to see if one use case fits?
2. What are the functional requirements? <br />
	a. Who needs what data when and for which reason? <br />
	b. Does it need to be real-time? <br />
	c. What error-handling options should be there?
3.  What are the functional options? <br />
	a. How can we operate this interface in production? <br />
	b. Can we copy the data ahead of time, or get it in real time on request?
	c. How do we manage errors? <br />
	d. Real-time or batch? <br />
	e. Request–reply or events? <br />
	f. Is there an available integration layer? An [integration layer](integration-layers) means there are two parts of the integration where you one can choose events, request–reply, or batch separately for the best possible operational solution.<br />
	g. If there is an integration layer available, what functions does it handle (for example security, monitoring, queueing, simple mapping)? <br />
4. What are the technical options for each functional option? <br />
	a. What protocols are available? <br />
	b. What will each option mean for operations? <br />
	c. What is the most secure option? <br />
	d. Which option has better error handling?

The options should then be compared against each other.

It is important to think of the overall solution, and to recognize that integration starts inside one system and ends inside (one-to-many) other systems.

If it gets complicated on one side of an integration, it is often because the other side of the integration is not ideal. Then, the best solution may be to try to change the other side of the integration.

## 3 Managing Dependencies

After you have determined the correct integration solution method—along with the correct microservices, integration between those microservices, and integration externally to other parts of the enterprise—your integration solution will inevitably lead to some kind of dependency. Dependencies need to be managed through design, building, testing, deploying, and operations. For more information, see [Managing Dependencies](manage-dependencies).
	
It is impossible to completely remove dependencies, since systems and apps need to inter-operate to generate automation, digitization, and seamless user experiences. Finding the right solution should make the dependencies that occur through the lifecycle as easy to manage as possible.
