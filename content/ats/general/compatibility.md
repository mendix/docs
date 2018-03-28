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
| 1.8 | 5.14.1 - 7.5.0 | 5.17.0, 5.21.1, 6.4.1, 6.6.0, 6.7.1, 6.9.0, 6.10.0, 7.0.1, 7.2.0 |
| 2.x | 5.14.1 - 7.12.0 | 5.17.0, 5.21.1, 6.4.1, 6.7.1, 6.9.0, 6.10.0, 7.0.1, 7.2.0, 7.6.0, 7.8.0, 7.10.0, 7.12.0 |

## Browser Support

### Firefox

| ATS version | Supported Browser Version | Notes |
| --- | --- | --- |
| 1.5 - 1.8 | 44, 45, 38 ESR, 45 ESR |  |
| 2.x | 58 |  |

#### Known Limitations

* When running tests on Windows XP, they run with Firefox version 45. Firefox 45 is the latest version that is supported on Windows XP.

### Chrome

| ATS version | Supported Browser Version | Notes |
| --- | --- | --- |
| 1.5, 1.6 | 46-50 |  |
| 1.7, 1.8 | 51-53 |   |
| 2.x | 64 |  |

#### Known Limitations

+ When running tests on Windows XP, they run with Chrome version 49. Chrome 49 is the latest version that is supported on Windows XP.

### Internet Explorer

| ATS version | Supported Browser Version | Notes |
| ----------- | ------------------------- | ----- |
| 2.x         | 11.x                      |       |

Please be aware that we can not always guarantee the same smooth experience when testing with Internet Explorer (IE). IE is comparably slow and outdated. Also, the support for automation by Microsoft and the Selenium project is much less mature, stable, and efficient.

Internet Explorer gets the same development attention as other browsers. However, there's no guarantee that all features of ATS can be made available for IE without limitations.

#### Known Limitations

* IE can produce typos when keys are sent to the browser, which can result in wrong values being set to input fields
* Running tests on Windows XP with Internet Explorer is not possible

### Other Browsers

We plan to support Edge and Safari in future releases.
