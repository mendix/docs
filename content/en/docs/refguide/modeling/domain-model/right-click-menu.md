---
title: "Right-Click Menus in the Domain Model"
url: /refguide/right-click-menu/
weight: 80
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The right-click menu in the domain model allows you to manage an entity, as well as its attributes and associations. For example, you can use the menus to review properties, find usages within your app, and generating overview pages based on an entity's data.

## Entity Menu Overview

The entity right-click menu items are described in the table below.

| Menu item        | Description                     | Shortcut key |
|------------------|---------------------------------|--------------|
| Go to generalization | Go to the [generalization](/refguide/entities/#generalization) entity of the chosen entity. | |
| Select generalization | Choose the entity the selected entity should [inherit](/refguide/generalization-and-association/#generalization-specialization-and-inheritance) from. | |
| Go to event microflow | Open the event microflow attached to the entity.      | |
| Add | Add an attribute, association, or validation rule to your entity.          | |
| Move to  | Move the entity to the domain model of one of the other modules in your app. | |
| Select association | Select an [association](/refguide/associations/) between entities.    | |
| Find specialization | List (in the [**Find Results**](/refguide/view-menu/#find-results) pane) all entities for which this entity is the generalization. The list will be empty if there are no specializations of this entity. | |
| Find usages in actions | Find where an entity has object activities in them. For more information, see [Find, Find Advanced, and Find Usages](/refguide/find-and-find-advanced/).  | |
| Publish in REST service | Publish the entity in a [REST service](/refguide/publish-a-rest-service/).     | |
| Publish in OData service | Publish the entity in an [OData service](/refguide/published-odata-services/). | |
| Generate overview pages | Create an overview page with data grids and forms, depending on the data in the selected entity. | |
| Find usages | Find where the entity is used within your app. This option only finds places where the entity is selected itself—it will not find instances where the entity is derived implicitly. For more information, see [Find, Find Advanced, and Find Usages](/refguide/find-and-find-advanced/).  | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>   |
| Cut  | Remove the entity from the domain model while keeping the entity’s structure in the clipboard. | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| Copy | Create a duplicate of the entity.   | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Paste | Paste a duplicate of the entity into the domain model. | <kbd>Ctrl</kbd> + <kbd>V</kbd> | 
| Delete   | Delete the entity.        | <kbd>Del</kbd> |
| Properties | Open the [entity's properties](/refguide/entities/#properties).   | <kbd>Alt</kbd>+<kbd>6 </kbd>  |

## Attribute Menu Overview
              
The attribute right-click menu items are described in the table below.

| Menu item        | Description                     | Shortcut key |
|------------------|---------------------------------|--------------|
| Select microflow  | Select an existing [microflow](/refguide/microflows/) or create a new one to connect to the attribute.        | |
| Add validation rule | Add a [validation rule](/refguide/validation-rules/) to the attribute.             | |
| Find changes |  List (in the [**Find Results**](/refguide/view-menu/#find-results) pane) all the places the attribute is set/changed in the app.           | |
| Find usages |  Find where the attribute is [used within your app](/refguide/find-and-find-advanced/#find-usages). This option only finds places where the attribute is selected itself—it will not find instances where the attribute is derived implicitly. | |
| Cut  | Remove the attribute from the entity while keeping the attribute’s structure in the clipboard.   | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| Copy | Create a duplicate of the attribute.  | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Paste | Paste a duplicate of the attribute into the domain model.         | <kbd>Ctrl</kbd> + <kbd>V</kbd> | 
| Delete  | Delete the entity.         | <kbd>Del</kbd> |
| Properties | Open the [attribute’s properties](/refguide/attributes/#properties).   | <kbd>Alt</kbd>+<kbd>6 </kbd>  |

## Association Menu Overview

The association right-click menu items are described in the table below.

| Menu item        | Description                     | Shortcut key |
|------------------|---------------------------------|--------------|
| Reverse direction  |  Reverse the direction of the association. | |
| Find changes |    List (in the [**Find Results**](/refguide/view-menu/#find-results) pane) all the places the association is set/changed in the app.             | |
| Find usages |   Find where the association is [used within your app](/refguide/find-and-find-advanced/#find-usages). This option only finds places where the association is selected itself—it will not find instances where the association is derived implicitly.  | |
| Cut  | Remove the association from the domain model while keeping the structure in the clipboard   | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| Copy | Create a duplicate of the association.   | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Paste | Paste a duplicate of the association into the domain model.  | <kbd>Ctrl</kbd> + <kbd>V</kbd> | 
| Delete  | Delete the association.    | <kbd>Del</kbd> |
| Properties | Open the [association's properties](/refguide/association-properties/).   | <kbd>Alt</kbd>+<kbd>6 </kbd>  |
