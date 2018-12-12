---
title: "Transient Objects & Garbage Collecting"
category: "Runtime"
---
This article will explain the life-cycle of both persistable and non-persistable objects. How both of them flow through the platform memory. In order to understand the behavior of transient Objects there are a few facts that we need to be aware off:

*   A Transient Object is an Object that is considered temporary and only exists in memory

*   Non-Persistable (Non-persistent) Objects can only exist in memory

*   Persistable Objects that you do not commit only exist in Memory and we can also consider them as Transient Objects

*   The platform will remove Objects automatically when they are no longer ‘used’ (the definition of ‘used’ will be explained later)

## What is the Mendix Platform Cache?

The Mendix Platform uses an Object Cache to temporarily store every Object that is being retrieved. This improves the applications performance and provides a User with the possibility to change and use an Object without having to save all the values to the Database for all changes. Each Object that is being retrieved will pass through the cache, until the Object is no longer used it will stay in cache.

Every Session in the Platform has its own instance in the Platform Cache, that means that all Transient Objects are Session specific and they will only exist in the Session in which they are created. Every change made in an Object will only exist for that User in that single session. As soon as the session is being destroyed all Non-Persistent Objects that remained in the cache will become eligible for Garbage Collection.

Any references to the Mendix Platform Cache on this page or in any other piece of documentation will always refer to the Session specific instance.

## When will an Object be removed from Cache?

When creating an object in a microflow, for the duration of that microflow that object is considered to be ‘in use’. As soon as an ‘action’ completes the platform triggers the garbage collector which will identify all Objects that are no longer used and remove all of those Objects. The garbage collector can be triggered after a successfully executed microflow, but also when an exception had occured.

It is important to note that the previous definition used the word 'action’. The garbage collector will not run after each microflow, for example a sub-microflow will not initiate the garbage collector. Any action that requires a transaction, such as a click on a microlfow button, a click on the save button, scheduled events, etc. are all actions that can initiate the garbage collector.

Besides objects being used in a microflow, it is also possible that a user has the object open in the browser or in the browser history. All those objects are also considered to be in use for as long as you have the browser open.

### Objects used in the Client

Non-Persistent Objects that are used in the browser will remain in the cache as long as you can still navigate to them using your browser back and forward buttons. Objects from a pop-up are garbage collect as soon as you close the form, but Objects in content could remain available. When you open forms sequentially the user will always be able to use the back/forward buttons in the browser unless you close any previous forms. If a form is closed the client cleans up the data in that form or when you open a different form using the navigation you also lose all the history and the Non-persistent Objects are no longer in use.

### Objects used in Microflow

Non-Persistent Objects that are no longer used in a Microflow or a form can still be considered in use. Let’s say you have a process where you create a new Invoice, in the initial Microflow you’re creating some Non-persistent Objects and set the association with the Invoice you are going to show in a form. As long as the instance of the Invoice is considered ‘in use’ the platform will also consider all the Non-persistent Objects ‘in use’ which you can retrieve over association. Even if I have no interest in accessing my earlier created Non-persistent Objects they will remain in the cache until my Invoice Objects is being removed from the cache.

### Associated Objects

But what about using associations between Non-persistent Objects and System.User or any subclass. A User is always present in the cache because it is always used. The user is used in the browser (you are a User, the browser checks security, etc) and a user is always available in the Microflow as the currentUser variable. So if we look at our previous rule, “Non-persistent Objects are considered ‘in use’ when they have an association to an Object that is ‘in use’”, and a User is always in use, the platform will never garbage collect any Non-persistent Objects with an association to a (specialization of) System.User.

### Retained Objects in Java

In some cases you might explicitly want to keep certain objects from being garbage collected. You can use a Java function to instruct the platform to retain the object in memory for the duration of the Session, or until it is released. This can be done using the following function call. 

```java
this.getContext().getSession().retain( myMendixObject );
```

All retained objects are considered ‘in use’ until you manually remove that Object. The retained object or its associations are protected from being garbage collected. They will be garbage collected when the session is being destroyed or after releasing it using the following Java function:

```java
this.getContext().getSession().release( myMendixObject );
```

After calling the release function the Non-Persistent Object will be removed according to the normal rules.

### Cache clean-up process

After every completed ‘action’ the Platform evaluates if the clean-up process is applicable to start. This process validates if there are any parallel actions still active for the Session. When the Platform finds no running actions it will trigger the clean-up process. This means that a completed sub-Microflow can never initiate the clean-up process, since the calling Microflow will always be running.

When the clean-up process starts it will evaluated all which Objects are still used. This process evaluates all the Retained Objects (Objects used in the client and Objects retained through Java), and evaluates all associated Objects as well. Every Object that is not identified during this evaluation will be removed from the Cache. 
After this process completes, and removes any objects it will print in the Trace message from the Core LogNode how many Objects are removed from the Cache.

## Difference between Scheduled Events and User Action

Scheduled events run under the administrator session. There is one session used for all scheduled events. That also means that there is one Object cache for all the event. It important to release that any changes made in the cache will be available for all scheduled events, but normal transaction rules still apply. That means that any changes that made during the microlfow execution are not visible to other microflows until the action completes. This is only important to keep in mind when retaining objects manually. 

Having a shared cache means that all the Object keep persisting in memory until the platform does a cleanup. The garbage collection should run immediately after executing the scheduled event.

### User Actions in the System Session

The System Session is a separate session in the Platform, through a Java action it is possible to start an action using the Context from the System Session. This System Session is always active, since this Session is never being destroyed, Objects won’t be removed on log out.

If you decide to use the System Session you have to make sure that you remove all Transient Objects from memory, before finishing the actions.

### Mendix Garbage Collection vs Java Garbage Collection

The important difference between cleaning up the Mendix Cache and the Java Garbage Collection is what is being cleaned up. The Java Garbage Collector is a standard Java process that runs in the background and frees up memory based on the actively used memory space in the JVM. The Java Garbage collector will run when the Java VM thinks it needs to run independently from the Mendix process. 

Removing Objects from the Cache removes the ‘pointer’ to the physical memory location of the Object. This way no Java Thread will be able access the Object. The Object still sits in Memory until the garbage collector runs.

The Cache holds a list of all the Objects that have been put in there. Even if the Cached Object can no longer be accessed in the Microflow or Client, as long as the Cache holds a reference to the Object it will stay in the JVM Memory. Only once an Object is removed from Cache it becomes eligible for garbage collection.

## Removing Objects from Cache

Whenever a Transient Object is no longer used you should remove the Object from Cache. If an Object is removed from Cache it allows the Garbage Collector to reuse the allocated memory and increase the applications performance. 
Objects can be removed from Cache either by deleting it or by performing a rollback. ToDo: Analyze if this statement is supposed to be true.

There is no difference in the behavior of a Rollback and a Delete when it’s executed for Transient Objects compared to Objects in the database. If you delete a Transient Object, it will also execute any delete behavior or prevention that is configured. Even if all the Objects are not-persistent.

## Related articles

*   [Java Memory Usage With Mendix](java-memory-usage-with-mendix)
