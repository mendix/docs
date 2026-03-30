---
title: "Testing"
url: /refguide/testing/
weight: 100
description: "Describes the available options for testing your Mendix application."
no_list: false
description_list: true
aliases:
    - /howto/testing/
---

## Introduction

Testing is a vital component when creating a Mendix application. Finding and fixing bugs when your application is in production is more expensive and time-consuming than before a release. Solving issues in the early stages of development ensures a more stable product and better user experience.

## Testing Pyramid

The testing pyramid is a convenient way to categorize tests according to their type, cost, speed, and scope.

{{< figure src="/attachments/howto/testing/testing-pyramid.png" class="no-border" >}}

Tests at the bottom of the pyramid are generally cheaper and faster to run, giving you quicker feedback. As you move up, the scope of the tests increases, but so does their complexity and execution time.

By catching most issues at the lower levels, you reduce the number of expensive, time-consuming UI and E2E tests you need to run, making your testing strategy more efficient. The testing pyramid provides a balanced approach, ensuring comprehensive coverage without over-investing in the most expensive types of tests.

## Mendix Offerings per Test Type

Mendix and its partners offer several solutions for each type of test covered by the testing pyramid.

### Static Code Analysis

Static code analysis is the foundation of the testing pyramid. It is necessary in order to catch any issues early, before the code runs in production. It is the cheapest and fastest feedback available, simple to add into existing projects.

You can use the following offerings to help with this test type:

* [Best Practice Recommender](/refguide/best-practice-recommender/) - Performs basic checks for anti-patterns.
* [Quality and Security Management (QSM)](/appstore/partner-solutions/qsm/) - Performs a static analysis of Mendix application models according the ISO 25010 standard for maintainability. This solution is developed by Mendix and the Software Improvement Group (SIG).

### Unit Tests

For microflows or Java actions that can be isolated, you can perform unit tests. These are fast, reliable, and pinpoint issues in the smallest units of code. A good coverage of unit tests helps you pinpoint where issues occur specifically, often making it much simpler to fix bugs than when they surface in higher-level tests. This type of test is more efficient if good coding practices to isolate individual pieces were used from the start.

You can use the following offerings to help with this test type:

* [Unit Testing](/appstore/modules/unit-testing/) - Enables developers to implement, run, and manage unit tests within the Mendix application that is being tested.
* [Menditect Test Automation](/appstore/partner-solutions/mta/) - Offers a no-code, visual suite of automated regression testing tools. This solution is developed by Menditect.

### Integration and API Tests

Integration and API testing tests the interaction between different microflows, modules, or external systems (for example, calling a REST service from a microflow). These tests ensure that different parts of your Mendix app work together correctly. API tests specifically test the exposed APIs of your Mendix application or the APIs it consumes. This is crucial for headless integrations, or for having your Mendix app act as a service provider.

You can use the following offerings to help with this test type:

* [Menditect Test Automation](/appstore/partner-solutions/mta/) - Offers a no-code, visual suite of automated regression testing tools. This solution is developed by Menditect.

### UI Tests

UI tests are automated tests that interact with the Mendix user interface, simulating user actions. They are slower in execution than other test types, and tied very closely to the page design. This type of test is relatively difficult to build and maintain.

You can use the following offerings to help with this test type:

* [Menditect Test Automation](/appstore/partner-solutions/mta/) - Offers a no-code, visual suite of automated regression testing tools. This solution is developed by Menditect.

### Cross-Cutting Concerns: Security and Performance Tests

Security and performance tests are cross-cutting, that is, they are not distinct layers in the same way as the others, but rather types of testing that can be applied at various levels or as dedicated efforts. They are commonly executed later in the development process.

### Security Tests

Security tests can involve static analysis for vulnerabilities, API security testing, and penetration testing (often E2E).

You can use the following offerings to help with this test type:

* [Quality and Security Management (QSM)](/appstore/partner-solutions/qsm/) - Performs a static analysis of Mendix application models according the ISO 25010 standard for maintainability. This solution is developed by Mendix and the Software Improvement Group (SIG).
* Vulnerability analysis by Mendix

### Performance Tests

Performance testing involves unit-level performance checks for critical microflows, integration-level load testing for APIs, and E2E load/stress testing for the entire application.

You can use the following offerings to help with this test type:

* [Tracing](/refguide/tracing-in-runtime/) - Generates traces that help you analyze errors and performance, which can be sent to observability tools like [Jaeger](https://www.jaegertracing.io/) or [Datadog](https://www.datadoghq.com/).