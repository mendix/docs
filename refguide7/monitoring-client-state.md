---
title: "Monitoring client state"
space: "Mendix 7 Reference Guide"
parent: "runtime"
---

In Mendix 7 the state is moved from the server to the client (web browser). This allows the server to be scaled to multiple instances. As the state now resides in the client, it can be useful to monitor what's in the state and why at a given time.
To do this you can use the **Ctrl + Alt + G** key combination to dump the state in the browser console. The state is displayed in a JSON object and is grouped by entity type. If the entity is not-persistable this is indicated with the suffix `[NPE]`.
For each entity type the ids of the object instances that are in the state are listed. Every object instance shows the following information:
* the suffix `(new)` after the object id: Whether the object is new (has not yet been committed).
* the suffix `(changed)` after the object id: Whether the object has uncommitted changes. The object has been committed before.
* the property `changes`: The changes which are present in the object.
* the property `subscribedWidgets`: The widgets which are using the object. The widget name is in the form of `Module.PageName.widgetName`, e.g. `MyFirstModule.Entity_NewEdit.dataView1`. This allows you to quickly find the referenced widget in the Modeler.
* the property `referencedBy`: The objects which reference this object.

Both the `subscribedWidgets` and `referencedby` properties, explain why the object is still in the state. If they are both empty the text "Going to be garbage collected" is displayed.