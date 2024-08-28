---
title: "Part 1: Add Module Dependencies"
linktitle: "1. Add Module Dependencies"
url: /refguide/mobile/using-mobile-capabilities/push-notifications/notif-add-module-depends/
weight: 20
description: Tutorial for adding push notification module dependencies.
aliases:
    - /howto/mobile/notif-add-module-depends/
---

## Introduction

This guide will help you add module dependencies for the [Push Notifications Connector](/appstore/modules/push-notifications/) module. You only need to install the modules your use case requires. Once your app has the modules it needs, you may move on to [Implement the Push Notifications Module](/refguide/mobile/using-mobile-capabilities/push-notifications/notif-implement-module/).

## Implementing the Encryption Module

Skip this section if the [Encryption](/appstore/modules/encryption/) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Encryption*.
1. Open the [Encryption](https://marketplace.mendix.com/link/component/1011) module. 
1. Click **Download**.
1. Follow the instructions on the [Encryption marketplace guide](/appstore/modules/encryption/) to set up this module.

## Implementing the Community Commons Module

Skip this section if the [Community Commons](https://marketplace.mendix.com/link/component/170) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Community Commons*.
1. Open the [Community Commons](https://marketplace.mendix.com/link/component/170) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Community Commons marketplace guide](/appstore/modules/community-commons-function-library/).

## Implementing the Nanoflow Commons Module

Skip this section if the [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515/Mendix/Nanoflow-Commons) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Nanoflow commons*.
1. Open the [Nanoflow commons](https://marketplace.mendix.com/link/component/109515/Mendix/Nanoflow-Commons) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Nanoflow Commons marketplace guide](/appstore/modules/nanoflow-commons/).

## Implementing the Native Mobile Resources Module

Skip this section if the [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513/Mendix/Native-Mobile-Resources) module is already implemented in your app. This module is required even for progressive web apps. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Native mobile resources*.
1. Open the [Native mobile resources](https://marketplace.mendix.com/link/component/109513/Mendix/Native-Mobile-Resources) module.
1. Click **Download**.
1. Add the `NativeMobileResources.User` module role to any user role that needs to interact with notifications.
1. No further installation is required. If you want to know more about the module visit the [Native mobile resources marketplace guide](/appstore/modules/native-mobile-resources/).

## Implementing the Atlas Core Module

Implement the Atlas Core module for apps in Mendix Studio Pro 10.0 and above. Skip this section if the [Atlas Core](https://marketplace.mendix.com/link/component/117187/Mendix/Atlas-Core) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Atlas Core*.
1. Open the [Atlas Core](https://marketplace.mendix.com/link/component/117187/Mendix/Atlas-Core) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Atlas UI marketplace guide](/appstore/modules/atlas-ui-resources/).

## Implementing the Data Widgets Module

Implement the Data Widgets module for apps in Mendix Studio Pro 10.0 and above. Skip this section if the [Data Widgets](https://marketplace.mendix.com/link/component/116540/Mendix/Data-Widgets) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Data Widgets*.
1. Open the [Data Widgets](https://marketplace.mendix.com/link/component/116540/Mendix/Data-Widgets) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Data Widgets marketplace guide](/appstore/modules/data-widgets/).

## Implementing the Pop-Up Menu Widget

Implement the Pop-Up Menu widget for apps in Mendix Studio Pro 10.0 and above. Skip this section if the [Pop-Up Menu](https://marketplace.mendix.com/link/component/115826/Mendix/Pop-Up-Menu) widget is already implemented in your app. Implement this widget by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Pop-Up Menu*.
1. Open the [Pop-Up Menu](https://marketplace.mendix.com/link/component/115826/Mendix/Pop-Up-Menu) widget.
1. Click **Download**.
1. No further installation is required. If you want to know more about the widget visit the [Pop-Up Menu marketplace guide](/appstore/widgets/popup-menu/).

Now that you have installed the dependencies you need, you can move on to the next section.
