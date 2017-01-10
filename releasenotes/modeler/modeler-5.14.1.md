---
title: "Modeler 5.14.1"
space: "Release Notes"
category: "Modeler"

---


***Date: March 13, 2015***

See also the release notes for Mendix [5.14.0](5.14.0).

{% modelerdownloadlink 5.14.1 %}

## <a name="fixes" rel="nofollow"></a>

## Features



*   Configurable rounding mode. (See [Project Settings](https://world.mendix.com/display/refguide5/Project+Settings))

## Fixes



*   Fixed an issue where choice options with object converter microflows would not be converted correctly.

*   Hide the sharing button for microflows in the System module.

*   Make 'Half away from zero' the default rounding mode. (Ticket 205981)

*   Ensure that computing the difference between dates in microflow expressions results in an absolute value.

*   Prevention of StackOverflowError (Ticket 17222, 17518, 206126)