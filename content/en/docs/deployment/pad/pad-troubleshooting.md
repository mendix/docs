---
title: "Troubleshooting Guide for Mendix Portable Runtime"
url: /developerportal/deploy/portable-apps-distribution/troubleshooting/
linktitle: "Troubleshooting Guide"
weight: 90
description: "Describes how to solve potential issues with Mendix Portable Runtime."
---

## Introduction

If you encounter any issues with Mendix Portable Runtime, use the following troubleshooting tips to help you solve them.

## JAVA Incompatible or Missing from PATH Home

You see an error like the following:

```text
$M2EE_ADMIN_PASS detected in the environment variables.

Error: LinkageError occurred while loading main class com.mendix.container.boot.Main

java.lang.UnsupportedClassVersionError: com/mendix/container/boot/Main has been compiled by a more recent version of the Java Runtime (class file version 65.0), this version of the Java Runtime only recognizes class file versions up to 55.0
```

### Cause

The operating system does not have the Java location properly set up, or is pointing to the wrong location.

### Solution

To solve this issue, set the **JAVA_HOME** for your operating system. For more information, refer to the sections below.

#### On Linux and Mac

To set the value of **JAVA_HOME** on Linux and Mac machines, perform the following steps:

1. Set the value of **JAVA_HOME**, as in the following example: `export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home`.
2. To ensure that Java tools (for example, `javac`, `jar`) are accessible system-wide, add *$JAVA_HOME/bin* to your PATH, as in the following example: `export PATH="$JAVA_HOME/bin:$PATH"`.

#### On Windows

To set the value of **JAVA_HOME** on Windows machines, perform the following steps:

1. Identify your Java installation directory.

    Typically, this is located in a directory like `C:\Program Files\Java\{jdk-version}`.

2. Go to **System Properties > Environment Variables**.

    For information about accessing the System Properties, refer to Windows documentation.

3. Create a new environment variable.
4. Enter **JAVA_HOME** as the variable name and paste the path to your JDK installation as the variable value.
5. Update the **Path** variable to include `%JAVA_HOME%bin` by performing the following steps:

    1. Click **Path > Edit**.
    2. Add the following entry: `%JAVA_HOME%bin`.

This allows your system to use Java commands from any command prompt window.

## Cannot Connect to Docker

You see an error like the following:

```text
unable to get image 'eclipse-temurin:21-jdk': Cannot connect to the Docker daemon at unix:///Users/youruser/.docker/run/docker.sock. Is the docker daemon running?
```

### Cause

Docker is not running.

### Solution

Run your Docker engine and try again.

## No Configuration Setting Found for the AdminPassword Key

You see an error like the following:

```text
$M2EE_ADMIN_PASS is not set. Ensure that admin.adminPassword is set in one of the specified config file(s) instead.

An exception occurred while starting; check the log for details.

2026-02-23 14:51:45.986 ERROR - M2EE: Could not parse configuration files.

com.typesafe.config.ConfigException$Missing: merge of etc/variables.conf: 4,etc/configurations/Default.conf: 10: No configuration setting found for key 'adminPassword'
```

### Cause

The value of `M2EE_ADMIN_PASS` is not set.

### Solution

Set the value of `M2EE_ADMIN _PASS`. For more information, see [Mendix Portable Runtime: Deploying Locally](/developerportal/deploy/portable-app-distribution-deploy/#deploy-local).