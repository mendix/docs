---
title: "Monitoring client state"
url: /refguide7/monitoring-client-state/
category: "Mendix Runtime"
---

In Mendix 7, the state has been moved from the server to the client (web browser). This allows the server to be scaled to multiple instances. As the state now resides in the client, it can be useful to monitor what's in the state and why at a given time.

To do this, use the **Ctrl + Alt + G** key combination to dump the state into the browser console. The state is displayed in a JSON object and is grouped by entity type. If the entity is not-persistable, this is indicated with the suffix `[NPE]`.

For each entity type, the IDs of the object 
Both the `subscribedWidgets` and `referencedby` properties explain why the object is still in the state. If they are both empty, the text "Going to be garbage collected" is displayed.
