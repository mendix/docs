---
title: "Function API"
url: /addons/ats-addon/rg-two-function-api/
---

## 1 Introduction

The Function API is a REST API that allows ATS functions to be called from any testing tool or programing environment. The function is executed against a Selenium session that is specified in the request.

## 2 Example Scenario

Let's illustrate using the Function API with a simple example using the `GetValue` function. To run this function, you need to send a `POST` request to the `http://ats100.mendixcloud.com/function` endpoint with the following body:

```json
{
    "remoteSeleniumDriver": {
        "url"      : "https://selenium.com/wd/hub",
        "sessionId": "00bef045-e9c9-4677-8cc1-e084bab7476b"
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

* `remoteSeleniumDriver` – a reference to the remote Selenium session that consists of a Selenium driver URL (which needs to be publicly accessible) and a session ID; ATS will use this session to execute the function specified under `functionToExecute`
* `functionToExecute` – defines which ATS function to execute; the function and values are identified by their key (guaranteed to be unique), which can be found in the [Function API Reference](/addons/ats-addon/rg-two-function-api-reference/); the order of the values is not relevant, and optional parameters (default to null) are used unless a value is specified

If the function execution is successful, ATS will respond with the following:

```json
{
   "result"     : "PASSED",
   "returnValue": "Lorem ipsum"
}
```

For more details, see [Function API with REST](/addons/ats-addon/ov-function-api-rest/).

### 2.1 Authentication

Uses the [Basic HTTP Authentication Scheme](https://tools.ietf.org/html/rfc7617) with the project ID as the user name and an API key as the password. 

### 2.2 Schemas

* [Request](/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-function-api/functions_api_request.schema.json)
* [Response](/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-function-api/functions_api_response.schema.json)

### 2.3 Passing Web Elements

Web elements are passed by their internal Selenium ID, which in essence is a string. To indicate that a parameter or a return value is a web element and not a string, set the `isWebElement` flag to true.

### 2.4 Dialects

Modern Selenium uses a dialect known as "W3C" by default to talk to browser drivers. However, if for any reason you need to use the old "OSS" dialect, that needs to be passed explicitly in the call:

```json
"remoteSeleniumDriver": {
    "url"      : "https://selenium.com/wd/hub",
    "sessionId": "00bef045-e9c9-4677-8cc1-e084bab7476b",
    "dialect"  : "OSS"
}
```

## 3 Clients

Clients are available for the function API for the following tools:

* [Java](/addons/ats-addon/ov-function-api-java/)
* [Katalon](/addons/ats-addon/ov-function-api-katalon/)

The clients allow one to use the function API via a simplified interface without having to deal with parsing and formatting JSON and building HTTP requests. In addition, the clients automatically detect the remote session URL and ID as well as the dialect used so that this does not have to be specified manually.

### 3.1 Java

For Java, add `ats.jar` to the project's build path. Alternatively, configure `source` and `java-doc`.

Here is a simple example:

```java
ATSSettings atsSettings = new ATSSettings(projectId, apiKey);
ATSRunner ats = new ATSRunner(atsSettings , driver);

ats.Mendix.OpenMendixApplication("https://www.example.com");

ats.Widget_Set.SetValue("textBox1", "Lorem ipsum", null);

```

For more details, see [Function API with Java](/addons/ats-addon/ov-function-api-java/).

### 3.2 Katalon

For Katalon, add `ats.jar` to the plugins folder. The ATS functions are available as custom keywords and in Groovy. The authentication can be configured under **ATS Settings**.

```groovy
WebUI.openBrowser('')

// ATS functions called as custom keyword
CustomKeywords.'ats.Mendix.OpenMendixApplication'('https://www.example.com')
CustomKeywords.'ats.Widget_Set.SetValue'('textBox1', 'Lorem ipsum', null)

// ATS function called as groovy function
ats.Widget_Set.SetValue("textBox1", "Lorem ipsum", null);
```

For more details, see [Function API with Katalon](/addons/ats-addon/ov-function-api-katalon/).

## 4 Limitations

Only Selenium version 3.141.59 is supported. Other automation technologies (for example, [Cypress](https://www.cypress.io/)) are not supported. 

A limit of 20 active requests at a given time applies per project. Additionally, excessive usage (for example, one hundred thousands calls per day) is discouraged, as it may lead to revoking the API key.

All HTTP requests are synchronous, meaning they will time out after roughly 1-2 minutes. This is due to the nature of HTTP communication. There is no way to extend this timeout.

In order for ATS to automate the Selenium session, the Selenium driver must be on a URL that is publicly accessible. In cases where the URL is protected by authentication, the user name password should be included in the URL.

Mobile testing is not supported.
