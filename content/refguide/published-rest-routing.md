---
title: "Published REST routing"
parent: "Published REST service"
---

When a REST HTTP request arrives at the server, it needs to determine which [operation](published-rest-operation) to execute.

### 1. Find the resource

First, the system determines the [resource](published-rest-resource). Each resource has a unique location, which is something like `http://yourserver/rest/service1/resource1`. The system determines the resource by looking at the first part of the requested URL.

When the system is unable to find a resource, the result is 404: Not Found.

### 2. Find the operation

To find the operation, the system looks at each operation in the resource, from the top to the bottom. When the URL matches the operation path, a match has been found:

* When the method matches the request, then the operation gets executed.
* When the method does not match the request, then the system sees if there is another operation with a similar path that the method (with path parameters at the same places). When there is, that operation gets executed. When there isn't, the result is 405: Method Not Allowed.

When the system is unable to find an operation, the result is 404: Not Found.

### 3. Check the parameters

When the operation contains path or query parameters, the system checks whether they are correct. For instance, 'a' can't be used as an integer. When one of the parameters in incorrect, the result is 400: Bad Request.

When all parameters are correct, the microflow gets executed.
