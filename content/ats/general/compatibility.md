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
| 2.x | 5.14.1 - 7.15.1 | 5.17.0, 5.21.1, 6.4.1, 6.7.1, 6.9.0, 6.10.0, 7.0.1, 7.2.0, 7.6.0, 7.8.0, 7.10.0, 7.12.0, 7.13.1, 7.14.1, 7.15.1 |

## Browser Support

### Firefox

| ATS version | Supported Browser Version | Notes |
| --- | --- | --- |
| 1.5 - 1.8 | 44, 45, 38 ESR, 45 ESR |  |
| 2.x | 58 |  |

### Chrome

| ATS version | Supported Browser Version | Notes |
| --- | --- | --- |
| 1.5, 1.6 | 46-50 |  |
| 1.7, 1.8 | 51-53 |   |
| 2.x | 64 |  |

### Internet Explorer

| ATS version | Supported Browser Version | Notes |
| ----------- | ------------------------- | ----- |
| 2.x         | 11.x                      |       |

{{% alert type="warning" %}}

Please be aware that we cannot always guarantee the same smooth experience when testing with Internet Explorer (IE). IE is comparably slow and outdated. Also, its support for automation by Microsoft and Selenium projects is much less mature, stable, and efficient.

Internet Explorer gets the same development attention as other browsers. However, there is no guarantee that all the features of ATS can be made available for IE without limitations.

{{% /alert %}}

#### Known Limitations

* IE can produce typos when keys are sent to the browser, which can result in wrong values being set to input fields
* Running tests on Windows XP with Internet Explorer is not possible

### Other Browsers

We plan to support Edge and Safari in future releases.
