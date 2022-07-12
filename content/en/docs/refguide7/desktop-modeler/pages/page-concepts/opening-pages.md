---
title: "Opening Pages"
url: /refguide7/opening-pages/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

You can open other pages from many many places within pages. Pages can be opened either in the content pane of the browser or in a new pop-up window. Where the page is opened depends on the [layout type](/refguide7/layout/) of its [layout](/refguide7/layout/). Pages with the layout type **Modal pop-up** or **Pop-up** will open as a pop-up window, and other pages will be opened in the content. If the target page layout is of the type **Legacy**, then the page location must be configured manually (for details, see the [Location](#location) section below).

If the target page contains a [data view](/refguide7/data-view/) with a page parameter data source, then an object for this data view must be passed to the page while opening. What object to pass is configured automatically based on the arguments available for the widget opening the page (see [available arguments for microflows](/refguide7/starting-microflows/) for details).

Generally speaking, opening a page in content will trigger a full reload of the entire browser contents. However, if the new page uses the same [layout](/refguide7/layout/) as the old one, only the page contents will refresh. The layout will retain its state. This allows for navigation without any unnecessary overhead or loss of data. 

## Properties

Mendix allows for a number of methods for opening a page. Each of these methods share a set of properties that determine the conditions in which the page is opened.

### Page

This is the [page](/refguide7/page/) that is shown to the end-user. There can be a number restrictions on the page, depending on the place from which the page is opened. For example, a page that is opened by the **Create** button must contain a data view that is connected to the same entity as the grid.

### Page title

By default the title of the page is taken from the title property of the selected page. You can replace this title with a custom title if necessary.

{{% alert color="success" %}}
This feature allows you to re-use the same page for the New and Edit buttons of a data grid. By simply setting the titles to, for example, 'New customer' and 'Edit customer', you can save yourself the trouble of duplicating the rest of the page.
{{% /alert %}}

### Location {#location}

{{% alert color="info" %}}

If the [layout](/refguide7/layout/) of the target page has a [layout type](/refguide7/layout/) configured, the Location property will be unavailable. Instead, the layout type will determine how the page is opened. This eliminates the risk of accidentally modeling a pop-up form with a huge menu bar.

{{% /alert %}}

This property indicates where the page is shown.

| Value | Description |
| --- | --- |
| In content | The page replaces the page that is currently in the content pane of the browser. |
| Pop-up | The page is shown as a non-blocking pop-up overlaying the page you were looking at. Non-blocking means that you can still use the underlying page . |
| Blocking pop-up | The page is shown as a blocking pop-up. Blocking means that you cannot use the underlying page until you close the pop-up. |

_Default value:_ Pop-up
