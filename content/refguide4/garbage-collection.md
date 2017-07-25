---
title: "Garbage collection"
category: "Java Programming"
---
With the introduction of non-persistable objects a lot more objects will live in memory. Applications can run faster, because they do not have to access the database for all objects, but memory consumption will increase.
To mitigate the risk of unnecessary high memory usage version 4 of the Mendix Platform features a garbage collector which will dispose of unreferenced objects in the cache.

{{% alert type="warning" %}}

The garbage collector will check if there are no running requests before starting a garbage collect cycle. If you create your own threads in custom Java code in which objects are created and/or changed, make sure these actions are performed using the async-methods in the `com.mendix.core.Core` class (e.g. `instantiateAsync`, `commitAsync`, `executeAsync`) such that the garbage collector is informed when logic is performed that could interfere with garbage collection. If you would not do this, it could lead to unpredictable results.

{{% /alert %}}

Garbage collection has some consequences for Java programming, although only for rare cases.
Only if a transient object needs to be available from the cache for a longer period than the current request this object needs to be explicitly retained.
An object can be retained using the `retain` method in `com.mendix.systemwideinterface.core.ISession`.

{{% alert type="warning" %}}

Take extra care with Java actions which use a System context to call Core.instantiate/Core.change/Core.commit and similar calls. Each action call is monitored and garbage collected, so one cannot rely on the cache between these calls. As objects are available as local variables in Java actions this should not be necessary. If this causes issues a workaround is to bundle those calls in a separate UserAction which is executed using the Core API. This ensures no garbage collection is performed until the end of that action

{{% /alert %}}

For instance, if you would like to store ids of objects in a Map, from which you would like to fetch a certain object in another request retain becomes necessary. See the code example below.

```java
public class Java_action extends UserAction<Boolean>
{
	public Java_action()
	{
		super();
	}

	@Override
	public Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE
		PleaseKeepMe pleaseKeepMe = null;
		if(idsByName.containsKey("PleaseKeepMe"))
			pleaseKeepMe = PleaseKeepMe.load(context, idsByName.get("PleaseKeepMe"));
		else
		{
			pleaseKeepMe = new PleaseKeepMe(context);
			idsByName.put("PleaseKeepMe", pleaseKeepMe.getMendixObject().getId());
		}
		return true;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@Override
	public String toString()
	{
		return "Java_action";
	}

	// BEGIN EXTRA CODE
	public static Map<String,IMendixIdentifier> idsByName = Maps.newHashMap();
	// END EXTRA CODE
}

```

The second time this code is called the Map will contain the key "PleaseKeepMe", but the id stored in the Map with this key has no corresponding object in the Mendix Server Runtime cache as it has been garbage collected. So PleaseKeepMe.load() will fail.

To fix this let's retain the PleaseKeepMe object after it has been created. Retained objects should be released when they have no use anymore. To illustrate this behaviour the PleaseKeepMe object will be released after the first time it has been loaded from the cache and will be removed from the lookup as well.

```java
public class Java_action extends UserAction<Boolean>
{
	public Java_action()
	{
		super();
	}

	@Override
	public Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE
		PleaseKeepMe pleaseKeepMe = null;
		if(idsByName.containsKey("PleaseKeepMe"))
		{
			pleaseKeepMe = PleaseKeepMe.load(context, idsByName.get("PleaseKeepMe"));
			context.getSession().release(pleaseKeepMe.getMendixObject().getId());
			idsByName.remove("PleaseKeepMe");
		}
		else
		{
			pleaseKeepMe = new PleaseKeepMe(context);
			context.getSession().retain(pleaseKeepMe.getMendixObject());
			idsByName.put("PleaseKeepMe", pleaseKeepMe.getMendixObject().getId());
		}
		return true;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@Override
	public String toString()
	{
		return "Java_action";
	}

	// BEGIN EXTRA CODE
	public static Map<String,IMendixIdentifier> idsByName = Maps.newHashMap();
	// END EXTRA CODE
}

```
