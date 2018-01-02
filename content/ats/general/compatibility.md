---
title: "Compatibility"
category: "General"
---

## Mendix Platform Compatibility

| ATS version | Supported Mendix Versions | Tested |
| --- | --- | --- |
| 1.5 | 5.14.1 - 6.6.0 | 5.17.0, 5.21.1, 6.4.1, 6.6.0 |
| 1.6 | 5.14.1 - 6.7.1 | 5.17.0, 5.21.1, 6.4.1, 6.6.0, 6.7.1 |
| 1.7 | 5.14.1 - 6.9.0 | 5.17.0, 5.21.1, 6.4.1, 6.6.0, 6.7.1, 6.9.0 |
| 1.8 | 5.14.1 - 7.0.1 | 5.17.0, 5.21.1, 6.4.1, 6.6.0, 6.7.1, 6.9.0, 6.10.0, 7.0.1 |

## Browser Support

### Firefox

| ATS version | Supported Firefox Versions |
| --- | --- |
| 1.5 - 1.8 | 44, 45, 38 ESR, 45 ESR |

### Chrome

| ATS version | Supported Chrome Versions | Notes |
| --- | --- | --- |
| 1.5, 1.6 | 46-50 |  |
| 1.7, 1.8 | 51-53 |   |
|  | 54+ | Recent versions of Chrome usually work (unsupported). |

### Internet Explorer and Edge

The Application Test Suite (ATS) does currently not support testing in Internet Explorer 11 (the only remaining supported version of this browser).

Due to its nature, Internet Explorer is very cumbersome to automate compared to other browsers. Browsers like Chrome or Firefox have vendor support for automation, while Internet Explorer's support for Selenium automation hasn't been touched since 2014 (for details, see [https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)). Without proper vendor support, it's difficult and sometimes impossible to work around or fix certain issues.

Nonetheless, we are continuing our efforts to bring support for Internet Explorer 11 into ATS if possible.

At the same time, we are planning to support Internet Explorer's successor, Edge. As soon as it's built-in automation support is feature-complete, we will add support to ATS. For details, check the [official documentation for the current status](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/webdriver-commands/).

### Other Browsers

No other browser is supported at the moment.
