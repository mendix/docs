---
title: "General Best Practices for Managing Configuration File Precedence"
url: /developerportal/deploy/portable-app-distribution-deploy/best-practices/
linktitle: "General Best Practices"
weight: 20
description: "Describes the best practices for managing the configuration order for Mendix Portable Runtime."
---

## Introduction

This section clarifies how configuration files are processed, particularly concerning the order of application and how to manage environment variables and custom settings effectively.

## Key Principles

The core concept governing configuration file processing is *last definition wins.* This means that if the same configuration setting is defined in multiple files, the value from the file processed last overrides all previous definitions.

This principle is crucial when managing both standard configuration files and environment variables. If a custom file is processed after environment variables, its settings will take precedence.

By default, the configurations are loaded in the following order:

```text
include file("etc/StudioPro.conf")
include file("etc/constants/defaults.conf")
include file("etc/configurations/Default.conf")
include file("etc/variables.conf")
include file("etc/constants/variables.conf")
```

Because of that, for example, if the same setting is present in `StudioPro.conf` and `etc/variables.conf`, the version from `etc/variables.conf` takes precedence.

## Managing the Configuration Order

To ensure your desired configuration values are applied correctly, especially when custom settings must override or be overridden by environment variables, you have two primary approaches:

* Explicitly list configuration files:

    Instead of relying on a default include file (for example, `etc/Default`), you can explicitly list each configuration file as an argument when launching your application.

    This gives you precise control over the order. You can place your custom configuration file before files that define environment variables (for example, `variables.conf`) if you want your environment variables to take precedence, or after if you want your custom settings to override them.

* Create a custom `etc/Default` file:

    You can also make a copy of the standard `etc/Default` file and modify your custom copy to include your own configuration file at the desired position within its include list.

    This allows you to maintain a single entry point for configuration while still controlling the order of included files.

## The `etc/Default` File

The `etc/Default` file is primarily provided for convenience and serves as an example. It is not mandatory to use it as-is.

The system is designed to support multiple configuration files, allowing you to pick and choose which ones you want to use. This is particularly beneficial in Cloud environments where specific configurations (for example, `StudioPro.conf` for local testing) might be replaced with custom, deployment-specific files.

In a typical Cloud deployment, it is often recommended to replace files like `StudioPro.conf` (which is geared towards local testing) with your own custom configuration tailored for the Cloud environment.

## Supported Configuration File Formats

You do not need to use the `.conf` extension for your configuration files. You can use any extension you prefer, or no extension at all. The content of the file determines how it is parsed.
