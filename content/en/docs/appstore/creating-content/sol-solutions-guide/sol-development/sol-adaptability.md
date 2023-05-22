---
title: "Best practices for Adaptability"
url: /appstore/creating-content/sol-adaptability-best-practices/
linktitle: "Best practices for Adaptability"
weight: 3
description: "Best practices for creating a solution for adaptation"
tags: ["solutions", "adaptable solutions", "best practices", "adaptability"]
---

## 1 Domain Model

### 1.1 Solution module defines the core of the data model

It's recommended to have the majority of your data model defined within Solution Modules, to ensure stability and keeping a clear separation between what entities, attributes and associations are coming from the publisher, and what’s added during implementation. This will also allow you to do internal refactoring without having to take all customer instances into account.

### 1.2 Extension through Extension entities (Composition pattern or Specializations)

In general it's recommended to use a separate Extension entity, with a 1-n, or 1-1 relationship, owned by the “Core Entity”. This enables adding of additional attributes and associations during the implementation. Using a separate entity also allows for introduction or removal of extension capabilities without large data migration. Alternatively it's possible to use specializations. It's recommended to consider this an alternative when the composition pattern does not solve the need.

|                                                                         | Composition                                                                           | Specializations                                                                                                                             |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| _Easy to apply without data changes_                                    | Yes, new Extension objects can be created and linked to already existing core objects | No, objects need to be re-created in order to change entity / specialization type.                                                          |
| _Flexibility on security_                                               | Core and Extension have their own security rules. Core rules cannot be overridden     | Specialization allows for redefining security rules, even for entities that are defined inside solution modules                             |
| _Multiple extension versions (e.g. Vehicle becomes both Car and Train)_ | Setup can be complex                                                                  | More suitable                                                                                                                               |
| _Offline syncronisation_                                                | Fully supported                                                                       | Restrictions apply: [Offline Best Practices](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#inheritance) |

### 1.3 Example

{{< figure src="/attachments/appstore/creating-content/sol-solutions-guide/sol-development/sol-adaptability-best-practices/adaptability-domain-model-example.png" alt="Example of data model extensions"  >}}

- Company is extended through composition, because that's the recommended approach and there are no requirements to reconsider. Additional entities can be created and linked such as the account manager
- Vehicle is extended through specializations because every customer can have multiple vehicle types (e.g. car & train)
- Task is extended through a specialization because every customer has very unique requirements on entity access
- Logo is not extensible

## 2 Making part of the logic adaptable

Logic (microflows, nanoflows and workflows) can be made adaptable by placing documents into the open application modules. By using “subflows” the developer of the solution can decide whether the entire flow can be adapted, or only specific parts thereof.

| Purpose                                                  | Calling flow             | Called (sub-) flow                           |
| -------------------------------------------------------- | ------------------------ | -------------------------------------------- |
| Split (re-) usable core logic into (reusable) microflows | Solution module (usable) | Open application module                      |
| Make part of hidden core logic adaptable                 | Solution module (hidden) | Open application module                      |
| Make part of (re-) usable core adaptable                 | Solution module (usable) | Open application module                      |
| Reuse core logic in an adaptable microflow               | Open application module  | Solution module (usable)                     |
| Split adaptable microflow                                | Open application module  | Open application module (newly created flow) |

{{% alert color="info" %}}
Note that all document types can be part of the solution module, but only nanoflows, microflows and java actions can be made usable.
{{% /alert %}}

## 3 Creating an adaptable UI

The same patterns that can be used for microflows can be used for making pages (partially) adaptable. For this you can use a combination of: hidden pages and editable layouts, pages and snippets

|                | Open application module / UI resource module                                                                                                                                                                  | Solution module                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Page           | Adaptable pages                                                                                                                                                                                               | Core pages can be hidden, called through microflows & nanoflows                                                                                 |
| Snippet        | Making (parts) of the UI adaptable                                                                                                                                                                            | Core snippets can be hidden as long as it’s for reuse in hidden core pages.                                                                     |
| Layout         | Main layout for the application <br /><br />Use a solution specific [master layout](/refguide/layout/#232-master-layout) to allow for changing the layout of all (adaptable and hidden) pages by the customer | Core layouts can be hidden and use an adaptable master layout                                                                                   |
| Building block | Building blocks that are supposed to be used during adaptation need to reside in an open module                                                                                                               | Building blocks that are used during development of the core solution can be hidden                                                             |
| SASS files     | Define the theme and look and feel of your application                                                                                                                                                        | No SASS definition support<br /><br />Usage of existing theme and design properties, additional styling can be done through inline styling only |

{{% alert color="info" %}}
The app title, favicon and login pages are always adaptable since they live at project level.
{{% /alert %}}

### 3.1 Cascading theming modules

For solution development it’s recommended to use a layered approach to your theme modules to make them as adaptable as possible (see the [Brand your Adaptable Solution learning path](https://academy.mendix.com/link/paths/130/Brand-your-Adaptive-Solution) which includes how to structure your SASS files).

An ISV that maintains multiple adaptable solutions can structure their theme modules in the following way:

| Module                | Implemented by               | Shared by:                                                   | Purpose                                                                          |
| --------------------- | ---------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Atlas Core            | Mendix                       | All ISV solution and customer implementations                | Base for all Mendix Apps                                                         |
| ISV theme             | ISV (shared UX team)         | All ISV solution and customer implementations                | Contains the default ISV theming                                                 |
| ISV solution specific | ISV (solution R&D team)      | All customer implementations of this particular ISV solution | Additional styling for an individual solution                                    |
| Customer theme        | Customer implementation team | All customer implementations of any solution of the ISV      | Overriding ISV specific logic for a customer (e.g. color palette and typography) |
| Customer app specific | Customer implementation team | Customer implementation of a specific solution of the ISV    | Overriding the styling for a specific customer instance                          |

{{% alert color="info" %}}
For an ISV with a single solution this can be reduced to 3 modules (Atlas Core, ISV theming and Customer theming).
{{% /alert %}}

In general it’s recommended to be explicit regarding the used design system (and create the relevant building blocks) to allow for a consistent look and feel across the adaptation and core UI.

See also learning path: [Using the Right Components](https://academy.mendix.com/link/modules/510/lectures/4050/2.1-Using-the-Right-Components)

## 4 Using constants

Note that the default value of a usable constant cannot be overridden at implementation, but the local Studio Pro value can be changed using the [runtime settings](/developerportal/deploy/environments-details/#constants). Constants can always be configured as part of the Environment Settings (including hidden constants).

See also: [Constants](/refguide/constants/#41-default-value)

## 5 Translating the implementation and implementing jargon

In order to make the application translatable during implementation all translatable documents need to be stored in open application modules. Using [batch translate](/refguide/batch-translate/) & [batch replace](/refguide/batch-replace/) features the text can be translated or updated (e.g. to implement jargon by changing a default concept like “Asset” into a customer specific word such as “Car”) during implementation. Note that: only adaptable content can be translated, since protected content is locked down.

Variables cannot (easily) be translated, nor can we change a text in a protected microflow (since this is locked down). As a solution for this consider using an editable Enumeration as “Internationalization-map”, combined with the [getCaption](/refguide/enumerations-in-expressions/#2-getcaption) function. 