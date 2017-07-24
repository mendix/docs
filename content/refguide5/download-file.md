---
title: "Download File"
parent: "client-activities"
---


The download-file action can be used to enable the browser to download a specific file. The user gets a download popup or the file is shown directly in the browser.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### File document

Input file document defines the file to be downloaded. The information of the file is stored in an object of entity System.FileDocument or a specialization.

## Action Properties

### Show file in browser

Show file in browser defines whether the file is downloaded to a location specified by the user or shown directly in the browser.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">File is downloaded to the location for temporary internet files and shown on a new page in the browser.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">File is downloaded to the location specified by the user.</td></tr></tbody></table>{{% alert type="info" %}}

On mobile devices files are always shown in a browser window.

{{% /alert %}}

Many browsers implement popup blockers preventing windows to be opened noninteractively, such as through a Microflow. For mobile devices this means that triggering downloads from a Microflow is only possible after disabling the popup blocker. You could consider using a FileManager widget to let the user initiate the download manually.
