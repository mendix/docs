---
title: "Function API - Rest"
parent: "ov-function-api"
menu_order: 1
---

## 1 Why Function API?

Over the years we have seen that some ATS users prefer to use code when writing tests over no-code or graphical solutions. As programmers, we can understand that and we decided to bring ATS to the code world. Therefore we designed a super simple web interface which we call *[Function API](ov-function-api).* The interface can be used from any programming language without the need for external dependencies. In this tutorial, we will showcase how to use the Function API directly.

## 2 Enough talk show me the code

IMPORTANT: Before you start writing tests you need to install the [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) package.

### 2.1 Create a driver and get the session id

```javascript
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

### 2.2 Execute an ATS function

```javascript
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

### 2.3. Assert

```javascript
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

### 2.4 Get result from ATS

ATS responds to each function call with the result, `PASSED` or `FAILED`.  If the function returns a value that is also included in the response.

```javascript
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

### 2.5 Working with Web Elements

Web Elements in Selenium are stored in the session as simple string IDs. Thus, sending/receiving web elements to ATS is just a matter of sending this string ID. In order to distinguish between sending a normal string and sending a string ID for a web element, a flag `isWebElement` is used.

```javascript
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

## That is pretty cool, right ?!

### I want to try it!😁

The Function API is in a closed preview phase right now. You can request access by sending an email at `info@mansystems.com` or filing a ticket with [Mendix support](https://support.mendix.com/hc/en-us). 

### I want to try it, but I am using a language different from Node.js 😢

The Function API is not limited to Node.js. It is a generic web REST+json API that can be used from any programing language or tool. That being said we have a special treat if you are using [Java](ov-function-api-java) or [Katalon](ov-function-api-katalon).

### I am still not convinced 😒

Why not try it for yourself and see how easy it is. If you have ideas on how we can improve it, send an email at `info@mansystems.com` or file a support ticket with Mendix.
