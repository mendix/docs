---
title: "Function API with REST"
url: /addons/ats-addon/ov-function-api-rest/
weight: 1
---

## 1 Introduction

This page describes how to use the Function API directly.

{{% alert color="info" %}}
Before you start writing tests, install the [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) package.
{{% /alert %}}

## 2 Creating a Driver & Getting the sessionId

```JavaScript
const webdriver = require('selenium-webdriver');

async function setUp() {
    const driver = new webdriver.Builder().
        usingServer(SELENIUM_HUB_URL).
        withCapabilities(capabilities).
        build();
    return driver;
}

async function test() {
    let driver = null;
    try {
        driver = await setUp();
        const sessionId = (await driver.getSession()).getId();
    } finally {
        if ( driver ) await driver.quit();
        console.log('Done');
    }
}
test()
```

## 3 Executing an ATS Function

```JavaScript
const ATS_URL = `https://${PROJECT_ID}:${API_KEY}@ats100.mendixcloud.com/function`;

async function test() {
    let driver = null;
    try {
        driver = await setUp();
        const sessionId = (await driver.getSession()).getId();
        await axios.post(ATS_URL, {
            remoteSeleniumDriver: {
                url      : SELENIUM_HUB_URL,
                sessionId: sessionId
            },
            functionToExecute: {
                // navigate to the URL and wait for the Mendix application to load
                key: 'OpenMendixApplication',
                values: [
                    {
                        key  : 'URL',
                        value: 'https://my-mendix-app.com'
                    }
                ]
            }
        });
    }
    catch ( err ) {
        console.error(err);
    } finally {
        if ( driver) await driver.quit();
        console.log('Done');
    }
}
```

## 4 Asserting

```JavaScript
/* Assert that a widget with name "textBox1" in the first row of the list with name 
    *  "listView1" has value "foo". Supports text box, area, dropdown, radio buttons, 
    *  reference selectors and many other widgets. All of control mode, read-only and 
    *  text mode are supported.
    */
await axios.post(ATS_URL, {
    remoteSeleniumDriver: {
        url      : SELENIUM_HUB_URL,
        sessionId: sessionId
    },
    functionToExecute: {
        key: 'AssertValueNegetable',
        values: [
            {
                key  : 'WidgetName',
                value: 'listView1 index-0 textBox1'
            },
            {
                key  : 'Value',
                value: 'foo'
            }
        ]
    }
});
```

## 5 Getting the Result from ATS

ATS responds to each function call with the result `PASSED` or `FAILED`.  If the function returns a value, that is also included in the response.

```JavaScript
/* Gets the value of widget with name "textBox1" in the first row of the list
    *  with name "listView1". Supports text box, area, dropdown, radio buttons, 
    *  reference selectors and many other widgets. All of control mode, read-only 
    *  and text mode are supported
    */
let response = (await axios.post(ATS_URL, {
    remoteSeleniumDriver: {
        url      : SELENIUM_HUB_URL,
        sessionId: sessionId,
    },
    functionToExecute: {
        key: 'GetValue',
        values: [
            {
                key  : 'WidgetName',
                value: 'listView1 index-0 textBox1'
            }
        ]
    }
})).data;
    
console.log(response.result);
console.log(response.returnValue);
```

## 6 Working with Web Elements

Web elements in Selenium are stored in the session as simple string IDs. So, sending and receiving web elements with ATS is just a matter of sending this string ID. In order to distinguish between sending a normal string and sending a string ID for a web element, the `isWebElement` flag is used.

```JavaScript
// find an element with selenium and click it with ATS
let element = await driver.findElement(webdriver.By.css('confirm-button'));
let response = await axios.post(ATS_URL, {
    remoteSeleniumDriver: {
        url      : SELENIUM_HUB_URL,
        sessionId: sessionId,
    },
    functionToExecute: {
        // Performs a click or double-click and waits for Mendix activities.
        key: 'ClickDoubleclick',
        values: [
            {
                key         : 'Element',
                value       : await element.getId(),
                isWebElement: true
            }
        ]
    }
});
```

## 7 Conclusion

The Function API is not limited to Node.js. It is a generic web REST and JSON API that can be used from any programing language or tool.

## 8 Read More

* [Function API](/addons/ats-addon/rg-two-function-api/)
* [Function API Reference](/addons/ats-addon/rg-two-function-api-reference/)
* [Function API with Java](/addons/ats-addon/ov-function-api-java/)
* [Function API with Katalon](/addons/ats-addon/ov-function-api-katalon/)
