---
title: "Using the Function API"
url: /addons/ats-addon/ov-function-api/
weight: 5
---

## 1 Introduction

Some ATS users prefer to use code when writing tests over no-code or graphical solutions. Therefore, the simple web interface of the Function API has been designed to be used with any programming language without the need for external dependencies.

The Function API allows you to execute a single ATS function (for example, `Login`) using an existing Selenium session.

This enables using ATS in combination with other testing tools and programming languages, as long as Selenium is used.

## 2 Usage Scenarios

You should use the Function API in the following scenarios:

* If you already have an existing testing solution that you are using for other products and/or have knowledge about and would like to keep all tests on a single platform
* If you need to leverage a third-party tool for your testing purposes (for example, [Mockito](https://site.mockito.org/))
* If you prefer code to visual tools

## 3 How Does It Work?

The API works according to these basic steps:

1. Send a POST request to `http://ats100.mendixcloud.com/function` with content:

    ```json
    {
        "remoteSeleniumDriver": {
            "url"      : "https://selenium/wd/hub",
            "sessionId": "00bef056ajndo",
        },
        "functionToExecute": {
            "key": "GetValue",
            "values": [
                {
                    "key"  : "WidgetName",
                    "value": "widget1"
                }
            ]
        }
    }

    ```

2. ATS connects to the Selenium session using the provided URL and `sessionId` and starts executing the function.
3. When the function is finished, ATS sends back a response:

    ```json
    {
        "result"     : "PASSED",
        "returnValue": "Lorem ipsum"
    }
    ```

For a more detailed example, see [Function API with REST](/addons/ats-addon/ov-function-api-rest/).

## 4 Clients

For certain programing languages and testing tools, ATS provides simple-to-use clients. The benefit of using a client is that it eliminates the need to manually send and parse HTTP requests.

As an alternative, you can call ATS functions natively in the tool, like normal functions and keywords.

Currently, there are two clients available: for [Java](/addons/ats-addon/ov-function-api-java/) and [Katalon](/addons/ats-addon/ov-function-api-katalon/).

## 5 Function API Availability

The Function API is in a closed preview phase right now. You can request access by sending an email to `info@CLEVR.com`.

If you have feedback on the Function API, send an email to `info@CLEVR.com`.

## 6 Read More

* [Function API with REST](/addons/ats-addon/ov-function-api-rest/)
* [Function API with Java](/addons/ats-addon/ov-function-api-java/)
* [Function API with Katalon](/addons/ats-addon/ov-function-api-katalon/)
* [Function API](/addons/ats-addon/rg-two-function-api/)
* [Function API Reference](/addons/ats-addon/rg-two-function-api-reference/)
