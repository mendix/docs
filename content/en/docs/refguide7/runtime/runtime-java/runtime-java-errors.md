---
title: "Common Runtime & Java Errors"
url: /refguide7/runtime-java-errors/
weight: 3
tags: ["runtime", "java"]
---

## 1 Introduction

Once your application starts performing poorly, becomes unstable or even worse: crashes, the first thing to do is check your application log for hints on what could be causing this. If there are any **FATAL** or **CRITICAL** log lines in there, immediately start working on resolving them. Any **ERROR** log line should be treated as such as well, so you should always strive to get rid of them.

## 2 Common Errors
Some of the more common errors you can find in the application log that can cause your application to go down are the topic of this article. Let’s dive right in.

### 2.1 java.lang.OutOfMemoryError: PermGen space error

If you were using a lot of large Java libraries in Java 6 (Mendix 4) or Java 7 (Mendix 5) you could run into this error, which will cause your application to crash. It is easily solved by adding more memory to the PermGen (something our CloudOps team can do for you) or by replacing some of the Java libraries by smaller ones (if they exist, that is).

### 2.2 java.lang.StackOverflowError

Your application is not going to recover from one of these bad boys. When you encounter one of these while running your Mendix application it is practically always going to be caused by an infinite loop. You can easily recreate this by creating a microflow called *Microflow* with a single Call Microflow action and selecting the microflow called *Microflow*. The infinite loop will crash your app and produce a stack overflow error.

### 2.3 java.lang.OutOfMemoryError: Java heap space

This is an error you run into when the JVM Heap tells you "Enough is enough. I can’t fit all of this into my memory." Which usually means that the application has become unstable and should be restarted before it crashes and that you also have a real problem to solve.

The following things can cause this error:

*   Memory leak
    *   Introduced by developer, custom code
    *   A bug in Mendix Runtime
    *   A bug in a Java library used by custom code of the developer or by the Mendix Runtime
    *   A bug in Java Runtime
*   Massive creation of objects (for example, by retrieving 1 trillion entities in a single microflow at once)
*   Configuration issue or sizing issue

A memory leak should look like the garbage collector stops running. See the first half of the graph here for an example:

{{< figure src="/attachments/refguide7/runtime/runtime-java/runtime-java-errors/2.jpg" >}}

It is advisable to always take a look at the Object Cache (Mendix objects in the Heap) graph to see if it resembles the Heap. For example:

{{< figure src="/attachments/refguide7/runtime/runtime-java/runtime-java-errors/3.jpg" >}}

This looks quite healthy.

If you see the Object Cache going up indefinitely you might have introduced a memory leak yourself and it would be best to immediately analyze your application to see if that could be the case.

On the other hand, if it looks like the graph below there is much bigger chance you are dealing with a bug outside of your control (for example, Mendix Runtime) that is causing a memory leak.

{{< figure src="/attachments/refguide7/runtime/runtime-java/runtime-java-errors/4.jpg" >}}

### 2.4 java.lang.OutOfMemoryError: GC overhead limit exceeded

Such a cryptic description. But it is quite simple really. This is the JVM telling you “I am taking an excessive amount of time collecting garbage (by default 98% of all CPU time) and am recovering very little memory (by default <=2% of the total Heap size) each time. Let me just stop your application now, so you can figure out what’s wrong before it crashes.”

The most common causes for this error are:

1.  Mostly: creating a lot of objects in a short amount of time.
2.  Sometimes: creating a lot of objects in rapid succession.
3.  Rarely: something else.

If you want to reproduce this error, do something like this:

{{< figure src="/attachments/refguide7/runtime/runtime-java/runtime-java-errors/common-errors.png" >}}

Eventually, memory will run low because of all the account being created, which is when the garbage collector will try to free up memory. It won’t be able to do this, so that all these Account objects are still alive. After a while, it will return the error.

That concludes this list of some of the more common errors in the application log that can cause your application to go down. But there is one more item to share. While it is not an error in the error log, it might match some of the symptoms outlined. 

### 2.5 Lack of Resources on the Application Server

If you see the grey *committed* line peak into the white part of the *Application node operating system memory* graph, your app node needs more memory. Upgrading to a larger container is strongly recommended in this case. See the following graph for an example of this problem:

{{< figure src="/attachments/refguide7/runtime/runtime-java/runtime-java-errors/6.jpg" >}}

