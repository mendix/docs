---
title: "General"
space: "ATS (Application Test Suite)"
---

# ATS version: 1.5

## Mendix Compatibility

| Mendix Version | Supported | Tested |
| --- | --- | --- |
| 3.x | - | - |
| 4.x | - | - |
| >5.14.1 | Yes | 5.17.0, 5.21.1 |
| 6.0 - 6.7.1 | Yes | 6.4.1, 6.7.1 |

## Browser Support

### Firefox

| Version | Supported | Notes |
| --- | --- | --- |
| Firefox 24 ESR | - |   |
| Firefox 38 ESR | Yes |   |
| Firefox 45 ESR | Yes |   |
| Firefox <= 44 | - |   |
| Firefox 44 | Yes |   |
| Firefox 45 | Yes |   |
| Firefox >=46 | - |   |

### Chrome

| Version | Supported  | Notes   |
| --- | --- | --- |
| Chrome <= 45 | - |   |
| Chrome 46 | Yes |   |
| Chrome 47 | Yes |   |
| Chrome 48 | Yes |   |
| Chrome 49 | Yes |   |
| Chrome 50 | Yes |   |
| Chrome >= 51 | - | Recent versions of Chrome usually work (unsupported). |

### Internet Explorer and Edge

The Application Test Suite (ATS) does currently not support testing in Internet Explorer 11 (the only remaining supported version of this browser).

Due to its nature, Internet Explorer is very cumbersome to automate compared to other browsers. Browsers like Chrome or Firefox have vendor support for automation, while Internet Explorer's support for Selenium automation hasn't been touched since 2014 (for details, see [https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)). Without proper vendor support, it's difficult and sometimes impossible to work around or fix certain issues.

Nonetheless, we are continuing our efforts to bring support for Internet Explorer 11 into ATS if possible.

At the same time, we are planning to support Internet Explorer's successor, Edge. As soon as it's built-in automation support is feature-complete, we will add support to ATS. For details, check the [official documentation for the current status](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/webdriver-commands/).

### Other Browsers

No other browser is supported at the moment.
