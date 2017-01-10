---
title: "Modeler 6.0.1"
space: "Release Notes"
category: "Modeler"
---


***Date: December 10, 2015***

See also the release notes for Mendix [6.0.0](modeler-6.0.0).

{% modelerdownloadlink 6.0.1 %}

## Fixes

*   Fixed exceptions and incorrectly constructed queries around entities where the depth level of the specializations is more than two. (Ticket 463510)

## Known Issues

*   Date pickers configured to edit non-localized date attributes will incorrectly compensate for localization and store the wrong value.