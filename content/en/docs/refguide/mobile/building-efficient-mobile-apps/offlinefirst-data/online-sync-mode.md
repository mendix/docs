---
title: "Online Synchronization Mode"
url: /refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/online-sync-mode/
description: "Describes the online sync mode, which allows entities to be used in offline navigation profiles without requiring data. synchronization"
no_list: false
description_list: true 
weight: 20
aliases:
    - /refguide/mobile/using-mobile-capabilities/offlinefirst-data/online-sync-mode/
---

## Introduction

The online synchronization mode allows entities to be used in offline navigation profiles without requiring data synchronization. When online entities are used in offline pages, then they require a connection to the server before the data can be shown. This allows apps to be partially offline instead of either fully offline or fully online.

Creating offline-first apps enhances user experience by enabling mobile app usage without connectivity. However, offline-first apps often demand more effort to design and maintain due to the complexity of synchronization. At the same time, not all parts of an application benefit equally from offline accessibility. By incorporating online data in offline-first apps, you can define which parts of your application can function offline and which require an online connection. This approach can streamline development while maintaining a high user experience and essential offline capabilities.

## Using Online Sync Mode

### Configuring Entities to Have Online Sync Mode

Do the following to properly configure entities:

1. Go to the [Navigation](/refguide/navigation/) tree item Studio Pro's App Explorer. 
1. Go to the offline navigation profile on which you want to enable the online synchronization mode. This can be the **Native mobile (tablet & phone)**, or the **Response web offline** profile. 
1. In that tab, click **Configure synchronization**. 

When the feature is enabled, the **Online** synchronization mode is available in the drop-down next to the entity in the table.

## Limitations

### Generalization/Specialization

Online entities can specialize from Offline entities and vice versa. However, when there are different synchronization modes in the generalization/specialization hierarchy, then queries on the generalization entity are prohibited. As such, queries will not only select data from the generalization, but also from the specializations.

### Associations Between Offline and Online Entities

The use of associations between online and offline (and vice-versa) in XPath constraints in pages and nanoflows reachable from an offline profile are prohibited. This applies both the XPath constrains on offline entities as on online entities. For offline entities, this is technically impossible (the associated online data is not available in the offline database). For online entities this is prohibited as the offline data may be different then the server side version of the data, which may lead to inconsistent and unexpected results.

Associations from online entities to offline entities are set to read-only when loaded from an offline profile. This is done to prevent issues while saving or executing microflows when an online entity instance is getting associated to a yet unsynchronized, newly instantiated, offline entity instance.

## Best Practices

Here are a few best practices when working with partially offline apps:

* Check for connection before calling the server.
* Offline apps may not always have connections to the server. Therefore, the suggested approach to open a page with online data is to check the connection first in a nanoflow. When there is no connection, you can model the app how to behave (present a dialog with retry option or navigate to a different page for example).
