---
title: "Modeler 6.2.0"
space: "Release Notes"
category: "Modeler"
---


***Date: February 1, 2016***

{% modelerdownloadlink 6.2.0 %}

## New features

*   Support for deployment to Cloud Foundry-based public, private and hybrid cloud stacks. The functionality can be found via the menu option "Run > Edit Cloud Foundry Settings". More information: [Deploying a Mendix App to Cloud Foundry](https://world.mendix.com/display/howto6/Deploying+a+Mendix+App+to+Cloud+Foundry)
*   Added image upload functionality for offline pages.
*   Support sorting of reference selectors with database source.

## Improvements

*   Clicking the 'Project Dashboard' link in the 'My Apps' page or the menu bar of the Modeler now opens the Overview page of the project instead of the Capture page.
*   XML Schema document, Publish Web Service document, Consumed Web Service document, Import Mapping document, and Export Mapping document now have new icons.

## Fixes

*   XML type 'Long' is now represented with the 'Long' data type in the mapping document. Previously, this was 'Integer" . (Ticket 463356)
*   Fixed issue where calling a webservice with message part encodings while using a simple mapping could result in an error about missing xsi namespace declaration. (Ticket 463808)
*   Fixed retrieval of child system associations on System.User. This caused an error if there are non-persistable entity types with system member 'owner' enabled. (Ticket 464177)
*   Fixed an issue where the 'Equals' expression of a Find or Filter list operation was not stored after switching from Find to Filter or vice versa. (Ticket 463208)
*   Fixed an issue when unnesessary network requests were triggered while loading a pages opened from a microflow.
*   Confirmation dialogs are modal once again. (Ticket 463453)
*   Fixed dynamic button captions using html escaping twice. (Ticket 463754, 445428 and 464396)
*   Fixed storage of non-localized date attributes as localized values. (Ticket 463938, 463994)
*   Fixed incorrect value of `$currentDevicetype` in the homepage microflow. (Ticket 463112, 463916)
*   Improved performance of applying conditional formatting. (Ticket 463801)