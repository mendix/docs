---
title: "Moving from 6 to 7"
space: "Mendix 7 Reference Guide"
category: "General"
---


Please read the [Release Notes](/releasenotes/desktop-modeler/7.0) to see what new major improvements we added in Mendix 7.

This documentation aims to help you to update your project from Mendix 6 to Mendix 7. It contains the following topics:

*   Converting your project: preparing for conversion and actually converting your project to Mendix 6.
*   Java 8 required: from Mendix 6 on Java 8 is required to run your applications.
*   Deprecated features: see which platform features have been deprecated in Mendix 7.
*   Removed deprecated functionality: see which features which were deprecated

## Converting your project

Before converting your project we advise you to look at the following points.

### Backup Project

If you are not using the team server, make a backup of your project. Check that the backup was successful by opening the project.

<div class="alert alert-success">{% markdown %}

Really make a backup!

{% endmarkdown %}</div>

### Convert to the latest Mendix 6 version

Conversion to Mendix 7 will work for projects created with version 6.0.0 or newer. However, we advise to convert to the latest 6 version before converting to Mendix 7. At the time of writing this is 6.10.0.

### Fix errors, warnings and deprecations

Fix errors, warnings and deprecations as far as possible. Take special note of the 'Deprecations' in the Errors dock. Most features that are deprecated in Mendix 6 will be completely gone in Mendix 7, and will result in an error in your project.

### Fix deprecations in Java actions

Fix deprecations in your Java actions by importing your project in Eclipse and solving all the deprecations in the "Problems" tab. For details of the removed and deprecated APIs, see the section "Removed features" of the [Mendix 7 release notes](/releasenotes/desktop-modeler/7.0).

### Converting!

Now you are ready to convert. Simply open your project in the new Mendix Modeler. There are no explicit actions required after opening your Mendix 6 project in Mendix 7.

## Deprecated features

The following features have been deprecated in Mendix 7. Using these features is discouraged, since they will be removed in a future release of Mendix.

* TODO

## Removed deprecated functionality

The following features that were deprecated in Mendix 6 have been removed in Mendix 7.

* TODO
