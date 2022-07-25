---
title: "Function API with Java"
url: /addons/ats-addon/ov-function-api-java/
weight: 2
---

## 1 Introduction

Java is the undisputed champion when it comes to automated UI testing (for example, see [Which programming language is most popular for UI test automation in 2019?](https://medium.com/@applitools/which-programming-language-is-most-popular-for-ui-test-automation-in-2019-d8787bb6feb6)). That is why CLEVR decided to build an integration between ATS and Java. This integration allows testers to leverage the power of Java and combine it with the ease-of-use and Mendix-focus of ATS. With this integration, executing an ATS function is as simple as calling a Java method.

{{% alert color="info" %}}
Before you start writing tests, you need to import the ATS Java library. We have made this step painless by packaging all the dependencies in a single *.jar* file.
{{% /alert %}}

## 2 Creating a Driver & Connecting to ATS

```java
import static org.junit.Assert.*;
import org.junit.After; // ATS is not tied to a testing library, feel free to choose
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver; // firefox and IE are also supported
import org.openqa.selenium.remote.RemoteWebDriver; 

import ats.ATSRunner; // used to execute ATS functions
import ats.ATSSettings; // mainly used for authentication, can be reused

public class FirstTest {

    private static final ATSSettings ATS_SETTINGS = new ATSSettings("your-projects-id", "your-projects-function-api-key");
    private RemoteWebDriver driver;
    private ATSRunner ats;

    @Before
    public void setUp() throws Exception {
        // start a selenium session on chrome
        driver = new ChromeDriver(); 
        // prepare the ATS runner
        ats = new ATSRunner(ATS_SETTINGS , driver); 
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }

    @Test
    public void firstTest() {
    // TODO: our test code will go in here
    }

}
```

## 3 Executing an ATS Function

Execute an ATS function by calling a Java method:

```java
@Test
public void firstTest() {
    // go to the URL and wait for the Mendix application to load
    ats.Mendix.OpenMendixApplication("https://my-mendix-app.com");
    // login to the mendix app and wait for the home-page to load
    // supports all standard and app store login widgets and even SSO
    ats.Mendix.Login("user", "password", false);
}
```

## 4 Asserting

Assert by using ATS:

```java
@Test
public void firstTest() {
    // go to the URL and wait for the mendix application to load
    ats.Mendix.OpenMendixApplication("https:\\my-mendix-app.com");
    // login to the mendix app and wait for the home-page to load 
    // supports all standard and app store login widgets and even SSO
    ats.Mendix.Login("user", "password", false);
    // assert that a widget with name "textBox1" in the first row of the list with name "listView1" has value "foo"
    // supports text box, area, dropdown, radio buttons, reference selectors and many other widget 
    // all of control mode, read only and text mode are supported
    ats.Widget_Assert.AssertValue("listView1 index-0 textBox1", "foo", null, false);
}
```

Alternatively, values can be asserted using `junit.Assert`:


```java
@Test
public void firstTest() throws Exception {
    // go to the URL and wait for the mendix application to load
    ats.Mendix.OpenMendixApplication("https:\\my-mendix-app.com");
    // login to the mendix app and wait for the home-page to load 
    // supports all standard and app store login widgets and even SSO
    ats.Mendix.Login("user", "password", false);
    // gets the value of widget with name "textBox1" in the first row of the list with name "listView1"
    // supports text box, area, dropdown, radio buttons, reference selectors and many other widget 
    // all of control mode, read only and text mode are supported
    String actualValue = ats.Widget_Get.GetValue("listView1 index-0 textBox1", null);
    // assert using junit
    assertEquals("foo", actualValue);
}
```

## 5 Web Elements

The ATS client works with web elements out of the box and does all the conversion for you. This makes it very easy to combine native Selenium functions with ATS functions.

```java
@Test
public void firstTest() throws Exception {
    // find a listview using selenium
    WebElement listview = driver.findElementByClassName("myListViewClass");
    // look for a widget inside the listview that has a certain value and a certain class
    WebElement txt = ats.Widget_Find.FindAssertWidget("txt1", "foo", true,listview,".bar");
    // the result of the ATS function is a selenium web element, so all selenium functions are supported
    txt.sendKeys("Lorem ipsum");
}
```

## 6 Additional Features

The ATS Java client comes with built-in documentation and auto-complete:

{{< figure src="/attachments/addons/ats-addon/ov/ov-function-api/ov-function-api-java/java_autocomplete.gif" >}}

## 7 Read More

* [Function API](/addons/ats-addon/rg-two-function-api/)
* [Function API Reference](/addons/ats-addon/rg-two-function-api-reference/)
* [Function API with REST](/addons/ats-addon/ov-function-api-rest/)
* [Function API with Katalon](/addons/ats-addon/ov-function-api-katalon/)
