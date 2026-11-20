---
title: "Atlas Core"
url: /appstore/modules/atlas-core/
description: "Describes the configuration and usage of the Atlas Core module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Atlas Core](https://marketplace.mendix.com/link/component/117187) module contains the base layouts, styling, and design properties for the many widgets which can be used to create beautiful experiences.

Further documentation on styling can be found here:

* [UI Design](/howto/front-end/atlas-ui/)
* [Customize Styling](/howto/front-end/customize-styling-new/)
* [Create a Company Design System](/howto/front-end/create-a-company-design-system/)
* [Extend Design Properties](/howto/front-end/extend-design-properties/)

To migrate from Atlas 3 to Atlas 4, see [Migrating to Atlas UI 4](/refguide/frontend/atlas4-migration/). To migrate from Atlas 2 to Atlas 3, see [Migrate From Atlas 2 To Atlas 3](/refguide9/moving-from-atlas-2-to-3/).

Atlas Core 4.7 requires Studio Pro 11.0.0 or above.

## Upgrading to Atlas Core 4.6.0 or Above

In Atlas Core 4.6.0, the default theme changed to Atlas Neutral. Theme settings that your app sets in *theme/web/custom-variables.scss* are kept. Everything that your app leaves to Atlas Core changes, for example:

* The brand colors, the page, text, and border colors, and the corner sizes
* The default font, which is the system font stack instead of Poppins (Poppins is still included)
* The navigation bars, which no longer follow `--brand-primary`. Each layout has one dark primary bar and at most one light secondary bar, styled with the `--bar-primary-*` and `--bar-secondary-*` variables. For more information, see the [Styling the Navigation Bars](/howto/front-end/customize-styling-new/#navigation-bars) section of *Customize Styling*.

To keep the previous look, paste the "Previous look" block from the Atlas Core 4.6.0 release notes into the `:root` block of *theme/web/custom-variables.scss* before upgrading, and delete the lines for the variables that your app already sets. If you used that block, also add the three lines listed in the Atlas Core 4.7.0 release notes.

## Read More

* [Atlas UI Kit for Figma](/howto/front-end/figma-ui-kit/)
