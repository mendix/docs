---
title: "Integration Solutions"
parent: "integration-overview"
menu_order: 2
draft: true
---

{{% todo %}}[**Could use more content for introducing solutions**)]{{% /todo %}}

## 1 Deciding on the Best Integration Solution

This is an example sequence of questions that an Architect or Lead Developer would consider to find the best way to integrate:

1. What is the business use case? <br />
	a. Can I reference the [Overview of Use Cases](use-case-overview) to see if one use case fits?
2. What are the functional requirements? <br />
	a.  Who needs what data when and for which reason? <br />
	b. Does it need to be real-time? <br />
	c. What error-handling options should be there?
3.  What are the functional options? <br />
	a. How can we operate this interface in production? <br />
	b. How do we manage errors? <br />
	c. Real-time or batch? <br />
	d. Request–reply or events? <br />
	e.  Is there an available integration layer? An [integration layer](integration-layers) means there are two parts of the integration where you one can choose events, request–reply, or batch separately for the best possible operational solution.<br />
		* If there is an integration layer available, what functions does it handle (for example security, monitoring, queueing, simple mapping)? <br />
4. What are the technical options for each functional option? <br />
	a. What protocols are available? <br />
	b. What will each option mean for operations? <br />
	c. What is the most secure option? <br />
	d. Which option has better error handling?

The options should then be compared against each other.

It is important to think of the overall solution, and to recognize that integration starts inside one system and ends inside (one-to-many) other systems.

If it gets complicated on one side of an integration, it is often because the other side of the integration is not ideal. Then, the best solution may be to try to change the other side of the integration.
