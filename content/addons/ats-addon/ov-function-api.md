---
title: "Function API"
parent: "ov"
menu_order: 5
---

This is high level overview. For more details check the [reference guide](rg-two-function-api) and the tutorials for the [Rest API](ov-function-api-rest), [Java](ov-function-api-java) and [Katalon](ov-function-api-katalon).

## 1 What is ATS Function API?

The Functions API, allows a user to execute a single ATS function e.g. `Login` using an existing selenium session.

This enables the use of ATS in combination with other testing tools/programming languages so long as Selenium is used.

## 2 When should you use the Function API?

* If you already have an existing testing solution that you are using for other products and/or have knowledge about and would like to keep all tests on a single platform.
* If you need to leverage a third-party tool for your testing purposes e.g. *Mockito*.
* If you prefer code to visual tools.

## 3 How does it work?

1. Send a POST request to http://ats100.mendixcloud.com/function with content

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

2. ATS connects to the selenium session using the provided URL and session-id and starts executing the function

3. When the function is finished ATS sends back a response

```json
{
    "result"     : "PASSED",
    "returnValue": "Lorem ipsum"
}
```

4. Done!

More detailed example can be found [here](ov-function-api-rest).

## 5 Clients

For certain programing languages/testing tools we provide simple to use clients. The benefits of using a client is that it eliminates the need to manually send/parse HTTP requests.
Instead you can call ATS functions natively in the tool like normal functions/keywords.

Currently, there are two clients available for [Java](ov-function-api-java) and [Katalon](ov-function-api-katalon).

## 6 Useful links

* [Function API Tutorial](ov-function-api-rest)
* [Function API reference](rg-two-function-api)
* [List of ATS functions](rg-two-function-api-reference)



