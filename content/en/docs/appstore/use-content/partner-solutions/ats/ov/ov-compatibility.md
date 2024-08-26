---
title: "Compatibility"
url: /appstore/partner-solutions/ats/ov-compatibility/
weight: 2
---

## Mendix Platform Compatibility

| ATS version | Supported Mendix Versions | Tested |
| --- | --- | --- |
| 1.5 | 5.14.1 - 6.6.0 | 5.17.0, 5.21.1, 6.4.1, 6.6.0 |
| 1.6 | 5.14.1 - 6.7.1 | 5.17.0, 5.21.1, 6.4.1, 6.6.0, 6.7.1 |
| 1.7 | 5.14.1 - 6.9.0 | 5.17.0, 5.21.1, 6.4.1, 6.6.0, 6.7.1, 6.9.0 |
| 1.8 | 5.14.1 - 7.5.0 | 5.17.0, 5.21.1, 6.4.1, 6.6.0, 6.7.1, 6.9.0, 6.10.0, 7.0.1, 7.2.0 |
| 2.x | 5.14.1 - 9.0.5&sup1; | 5.17.0, 5.21.1, 6.4.1, 6.7.1, 6.9.0, 6.10.0, 7.0.1, 7.2.0, 7.6.0, 7.8.0, 7.10.0, 7.12.0, 7.13.1, 7.14.1, 7.15.1, 7.16.0, 7.17.2, 7.22.2, 7.23.1, 8.0.0, 8.1.0, 8.2.0, 8.3.0, 8.4.0, 8.5.0, 8.6.0, 8.7.0, 8.8.0, 8.9.0, 8.10.0, 8.11.0, 8.12.0, 8.13.0, 9.0.5, 9.10.0 |

&sup1; On Mendix 7.13 and above, in some circumstances, tests will not wait for microflows that are completed asynchronously to finish executing before proceeding. This can cause tests to fail. A temporary workaround is to add a "sleep" with a sufficient duration after clicking a button that calls an asynchronous microflow.

## Browser Support

### Firefox

| ATS version | Supported Browser Version | Notes |
| --- | --- | --- |
| 1.5 - 1.8 | 44, 45, 38 ESR, 45 ESR |  |
| 2.x | 68 |  |

### Chrome

| ATS version | Supported Browser Version | Notes |
| --- | --- | --- |
| 1.5, 1.6 | 46-50 |  |
| 1.7, 1.8 | 51-53 |   |
| 2.x | 75 |  |

### Internet Explorer

| ATS version | Supported Browser Version | Notes |
| ----------- | ------------------------- | ----- |
| 2.x         | 11.x                      |       |

{{% alert color="warning" %}}

Please be aware that we cannot always guarantee the same smooth experience when testing with Internet Explorer (IE). IE is comparably slow and outdated. Also, its support for automation by Microsoft and Selenium projects is much less mature, stable, and efficient.

Internet Explorer gets the same development attention as other browsers. However, there is no guarantee that all the features of ATS can be made available for IE without limitations.

{{% /alert %}}

#### Known Limitations

* IE can produce typos when keys are sent to the browser, which can result in wrong values being set to input fields
* Running tests on Windows XP with Internet Explorer is not possible

### Other Browsers

We plan to support Edge and Safari in future releases.
