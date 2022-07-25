---
title: "2.0"
url: /releasenotes/add-ons/aqm-2.0/
---

## 2.0.0

### Quality Monitor tool update

It is now possible to compare snapshots with each other. This functionality is similar to the metrics table.
The Compare snapshot functionality shows the differences between two snapshots.

We have enhanced dependency graph with some nice new features so you can see more information about the dependencies:

*   You can see details of dependencies between two components by clicking on the edges.
*   You can also see the dependency graph of the previous snapshot.
*   The Graph can be filtered by dependency types, so you see only relevant information
*   If you want to analyze the dependencies a bit further, you now can download the information in the DOT format. This can be used in tools like Graphviz.
*   Large graphs are now correctly rendered again.

### Analysis tool update - Pseudocode generator

The Analysis tool has been enhanced a lot, this will mitigate the occurrence of commonly seen false positive duplicates in the Microflows and Pages:

*   Render references similar to attributes in CreateObject action
*   Render variable name and show-in-browser value for DownloadFile action
*   Render name and called operation for WebserviceCall action
*   Render new values for attributes that get modified by ChangeObject action
*   Render template name and parameters for GenerateDocument action
*   Don’t render canvas size for pages and snippets
*   AllowedRoles are now all rendered on a single line in the pseudo code of a Page

### System Analysis Toolkit

We have upgraded the Model to the latest version 8.0 of SIG/TÜVIT Maintainability Model (Feb. 2016 calibrated version).
