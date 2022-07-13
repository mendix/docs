---
title: "Function API with Katalon"
url: /addons/ats-addon/ov-function-api-katalon/
weight: 3
---

## 1 Introduction

Katalon is a popular graphical testing tool, which is why CLEVR decided to build an integration between ATS and Katalon. This integration allows testers to leverage the power of Katalon and combine it with the ease-of-use and Mendix-focus of ATS. With this integration, executing an ATS function is as simple as calling a custom keyword in Katalon.

{{% alert color="info" %}}
Before you start writing tests, you need to import the ATS keywords library via *ats.jar*:<br />

{{< figure src="/attachments/addons/ats-addon/ov/ov-function-api/ov-function-api-katalon/library.png" >}}
{{% /alert %}}

## 2 Configuring the ATS Settings

To configure the ATS settings, you need to enter the **Project ID**, **API key**, and **URL**:

{{< figure src="/attachments/addons/ats-addon/ov/ov-function-api/ov-function-api-katalon/settings.png" >}}

## 3 Executing an ATS Function

{{< figure src="/attachments/addons/ats-addon/ov/ov-function-api/ov-function-api-katalon/executing.png" >}}

```
WebUI.openBrowser('')

//go to the URL and wait for the Mendix application to load
CustomKeywords.'ats.Mendix.OpenMendixApplication'('[https://my-mendix-app.com](https://my-mendix-app.com/)')

// login to the Mendix app and wait for the home-page to load.  
// Supports all standard and app store login widgets and even SSO
CustomKeywords.'ats.Mendix.Login'('user', 'password', false)
```

## 4 Asserting

Assert using ATS:

{{< figure src="/attachments/addons/ats-addon/ov/ov-function-api/ov-function-api-katalon/assert1.png" >}}

```
WebUI.openBrowser('')

//go to the URL and wait for the Mendix application to load
CustomKeywords.'ats.Mendix.OpenMendixApplication'('https://my-mendix-app.com')

// login to the Mendix app and wait for the home-page to load.  
// Supports all standard and app store login widgets and even SSO
CustomKeywords.'ats.Mendix.Login'('user', 'password', false)

// Assert that a widget with name "textBox1" in the first row of the list with name "listView1" has value "foo". 
// Supports text box, area, dropdown, radio buttons, reference selectors and many other widgets.
// All of control mode, read-only and text mode are supported.'
CustomKeywords.'ats.Widget_Assert.AssertValue'('listView1 index-0 textBox1', 'foo', null, false)
```

Aternatively, assert values using [Cucumber](https://cucumber.io/):

{{< figure src="/attachments/addons/ats-addon/ov/ov-function-api/ov-function-api-katalon/assert2.png" >}}

```
WebUI.openBrowser('')
        
// go to the URL and wait for the mendix application to load
CustomKeywords.'ats.Mendix.OpenMendixApplication'('https://my-mendix-app.com')

// login to the mendix app and wait for the home-page to load.
// Supports all standard and app store login widgets and even SSO'
CustomKeywords.'ats.Mendix.Login'('user', 'password', false)

// gets the value of a widget with name "textBox1" in the first row of the list with name "listView1" has value "foo". 
// Supports text box, area, dropdown, radio buttons, reference selectors and many other widgets.
// All of control mode, read-only and text mode are supported.'
value = CustomKeywords.'ats.Widget_Get.GetValue'('listView1 index-0 textBox1', null)

CucumberKW.verifyEqual(value, 'foo')
```

## 5 Read More

* [Function API](/addons/ats-addon/rg-two-function-api/)
* [Function API Reference](/addons/ats-addon/rg-two-function-api-reference/)
* [Function API with REST](/addons/ats-addon/ov-function-api-rest/)
* [Function API with Java](/addons/ats-addon/ov-function-api-java/)
