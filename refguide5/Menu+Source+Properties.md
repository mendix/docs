---
title: "Menu Source Properties"
category: "refguide5"
space: "Reference Guide 5"
---
### Menu source

The items that are shown in the menu widget are determined by the menu source. A menu widget is either filled from a menu configured in the [Navigation](Navigation) document or a [Menu](Menu) document.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Project Navigation</td><td class="confluenceTd">The menu items are taken from one of the menus defined in the <a href="Navigation">Navigation</a> document. Use this for the main menu of your application.</td></tr><tr><td class="confluenceTd">Menu Document</td><td class="confluenceTd">The menu items are taken from a <a href="Menu">Menu</a> document. Use menu documents for auxiliary menus.</td></tr></tbody></table>

_Default value:_ Project navigation

### Menu (only for menu source 'Project navigation')

If the menu source is 'Project navigation', this property specify which of the three menus that can be configured in the [Navigation](Navigation) document will be used to fill the menu widget.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Desktop</td><td class="confluenceTd">Use the 'Desktop' menu</td></tr><tr><td class="confluenceTd">Tablet</td><td class="confluenceTd">Use the 'Tablet' menu</td></tr><tr><td class="confluenceTd">Phone</td><td class="confluenceTd">Use the 'Phone' menu</td></tr></tbody></table>

_Default value:_ Desktop

### Menu document (only for menu source 'Menu document')

If the menu source is 'Menu document', you can select a [Menu](Menu) document that will be used to fill the menu widget.