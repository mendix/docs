---
title: "Pull to Refresh"
deprecated: true
url: /appstore/widgets/pull-to-refresh/
description: "Describes the configuration and usage of the Pull to Refresh widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This widget is deprecated.
{{% /alert %}}

## Introduction

The [Pull to Refresh](https://marketplace.mendix.com/link/component/47782/) widget enables the end-user to pull down on mobile apps to trigger a page refresh or a synchronization for offline apps.

### Features

* Overlay with icon and message shown when pulling down
* Refresh current page when online
* Works when offline and re-syncs when back online
* Message for pull, release, and reload
* Cancel refresh when swiping up
* Does not interfere with scroll behavior

### Limitations

* When refreshing a page, the list view does not keep **Load more** items
* Only works when app is scrolled to top

## Usage

To use this widget, follow these steps:

1. Place the widget on a page or layout.
2. Add the following on the **Display** tab: <br />
    1. **Text when pulling down** <br />
    1. **Release to refresh text** <br />
    1. **Text when refreshing**
3. In the client, pull down the page until the **Release to refresh text** appears in order to refresh the page.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/pull-to-refresh/demo.gif" class="no-border" >}}
