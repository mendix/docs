---
title: "REST Error Handling"
url: /appstore/creating-content/best-practices/rest-error-handling/
weight: 13
---

## Introduction

When calling a REST service, you can run into an error. This can be one of two types:

1. Error with a response
2. Error without a response
   
If there is no response, the default error handling is enough. This will typically occur when the endpoint is down or when you get a timeout.

If there is a response, the error message will contain the error code and the reason, but not the message. For that reason, add an additional log message with the response, then rethrow the error. The log message should include details about the request that will help the developer.

Any input, such as objects or path parameters, might trigger an error event in the REST call. It is not necessary to check them for empty values in the connector itself, but do make sure to check them before using [urlEncode](/refguide/string-function-calls/#urlEncode).

In some situations, the error response from the service has its own structure that you want to leverage. For example, when there is a bad request, you might want to pass that message back to the user instead of logging it. However, you cannot return two different objects from one microflow. In those situations, combine the response from the error message with the regular message. In all other situations, the error is unexpected, and you can return the error.
