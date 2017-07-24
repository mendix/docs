---
title: "Use the Data View Context Object"
category: "Custom Widgets"
---
## Description

This section describes how to set your widget to receive the context object from a Data View and how to get this into your widget. Tutorials related to this subject can be found [here](custom-widgets).

## Instructions

 **Set up your widget XML.**

In your widget.xml, set **needsEntityContext** to true.

```xml
<widget id="Module.Widget.Widget" needsEntityContext="true" xmlns="http://www.mendix.com/widget/1.0/">

```

This will limit your widget to only be usable in a Data View, as the object is passed as the context.

 **Make the widget context-ready.**

In the JavaScript you will need to add the **mendix.addon._Contextable** addon in order to use the functions needed to receive the object. You can do this at the start of your widget declaration.

```java
addons : [mendix.addon._Contextable],

```

In the **postCreate** function we call on **this.initContext()** which we now have, as we added the Contextable addon. This function will make our widget aware that it might receive a context object.

```javascript
	postCreate : function(){
		logger.debug(this.id + ".postCreate");
		this.initContext();
		this.actRendered();
	},

```

Now we only need to be able to receive and process the context object.

 **Retrieve the context object in JavaScript.**

Once a context object is received by the widget, it will automatically call on the **applyContext** function. Here we will retrieve the actual object and hitch it to a different function, from where our widget can start using the context.

```javascript
	applyContext : function(context, callback){
		logger.debug(this.id + ".applyContext");
		if (context)
			mx.processor.getObject(context.getActiveGUID(), dojo.hitch(this, this.processObject));
		else
			logger.warn(this.id + ".applyContext received empty context");
		callback && callback();
	}

```

Our function uses 2 input arguments, the context object and a callback stack. The context variable is a special type of object used by the Client containing the GUID of the actual object we want. We can use **context.getActiveGUID()** to grab the GUID and use this with **mx.processor.getObject()** function to get the object and pass it to our **processObject** function.

{{% alert type="warning" %}}

Note that the **applyContext** function can be called upon multiple times, each time the context is send to the Data View.
**Example:** If you have a Data grid above your Data View, where the Data View listens to the Data grid. Every time a different object is selected in the Data Grid, a new object is send to the Data View.

{{% /alert %}}
