---
title: "Compatibility Table" 
parent: "test-run"
---

## 1 Introduction

The following tables document provider, operating system, and browser compatability. 

## 2 Browserstack

Operating System | Chrome     | Firefox    | Internet Explorer
---------------- | :--------: | :--------: | :------------------:
**Windows 10** | &#10003; | &#10003; | &#10003;
**Windows 8** | &#10003; | &#10003; | &#10003;
**Windows 7** | &#10003; | &#10003; | &#10003;
**Windows XP** | &#10003;&#x00B9; | &#x2717;&#x00B2; | &#10003;&#x00B3;
**macOS High Sierra**  | &#10003; | &#10003; | N/A
**macOS Sierra**  | &#10003; | &#10003; | N/A
**OS X El Capitan** | &#10003; | &#10003; | N/A
**OS X Yosemite** | &#10003; | &#10003; | N/A
**OS X Mavericks** | &#10003; | &#10003; | N/A

## 3 Saucelabs

Operating System | Chrome     | Firefox    | Internet Explorer
---------------- | :--------: | :--------: | :------------------:
**Windows 10** | &#10003; | &#10003; | &#10003;
**Windows 8** | &#10003; | &#10003; | &#10003;
**Windows 7** | &#10003; | &#10003; | &#10003;
**Windows XP** | &#x2717;&#x2074; | &#x2717;&#x2074; | &#x2717;&#x2074;
**macOS High Sierra**  | &#10003; | &#10003; | N/A
**macOS Sierra**  | &#10003; | &#10003; | N/A
**OS X El Capitan** | &#10003; | &#10003; | N/A
**OS X Yosemite** | &#10003; | &#10003;&#x2075; | N/A
**OS X Mavericks** | &#10003; | &#10003; | N/A

## 4 Testingbot

Operating System | Chrome     | Firefox    | Internet Explorer
---------------- | :--------: | :--------: | :------------------:
**Windows 10** | &#10003; | &#10003; | &#10003;
**Windows 8** | &#10003; | &#10003; | &#10003;
**Windows 7** | &#10003; | &#x2717;&#x2076; | &#10003;
**Windows XP** | &#10003; | &#x2717;&#x2076; | &#10003;&#x00B3;
**macOS High Sierra**  | &#10003; | &#10003; | N/A
**macOS Sierra**  | &#10003; | &#10003; | N/A
**OS X El Capitan** | &#10003; | &#10003; | N/A
**OS X Yosemite** | &#10003; | &#10003; | N/A
**OS X Mavericks** | &#10003; | &#10003; | N/A

## 5 Notes

&#x00B9; Version 45.<br />  
&#x00B2; Due to provider limitations, this is not available. The highest possible Firefox version is 47, for which this provider does not allow Selenium v3.8.1.<br />   
&#x00B3; Version 7. This version is not supported by Mendix, but you can still run tests on it against non-Mendix apps.<br />   
&#x2074; Windows XP is not supported by Saucelabs since the end of September 2017. Source: [https://wiki.saucelabs.com/pages/viewpage.action?pageId=70074721](https://wiki.saucelabs.com/pages/viewpage.action?pageId=70074721).<br />
&#x2075; Version 47.<br />  
&#x2076; Due to provider limitations regarding the Selenium version, this is not available. 
