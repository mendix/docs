---
title: "Published REST routing"
parent: "published-rest-services"
---

{{% alert type="info" %}}

The 'Published REST Service' was introduced in version 7.8.0. This feature is still in private beta, and is subject to change before the final release.

{{% /alert %}}

When a REST HTTP request arrives at the server, the server needs to determine which [operation](published-rest-operation) to execute. This flowchart shows how that works:

![](attachments/published-rest-service/determine-operation.png)