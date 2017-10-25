---
title: "Published REST Services"
parent: "integration"
---

Add a [Published REST Service](published-rest-service) to expose your entities and microflows to other apps using the REST standard.

### Published REST Service

See [Published REST Service documentation](published-rest-service) for an overview of the available options when you add a Published REST servcie.

### <a name="authorization"></a>Authorization

Published REST services are secured with Basic authentication. This is automatically applied when you [set the security level](project-security) of your app to _Prototype / demo_  or _Production_. When you [allow anonlymous users](project-security#anonymous-users) to your app, all published REST services become available without authenthication.

See [Published REST routing](published-rest-routing) for more details.

### <a name="interactive-documentation"></a>Documentation

Every [Published REST service](published-rest-service) is automatically documented. This documentation is available in the app under `http://yourapp.com/rest-doc/`. Each service has an interactive documentation page using [Swagger UI](https://swagger.io/swagger-ui/). You can interact with the service to see how it behaves.

The documentation of the services is available in [Open API 2.0](open-api) format, which is readable by many systems and tools.

### Logging

To log detailed information about interaction with your Published REST Service, [set the log level](logging) of log node _REST Publish_ to _Trace_.

