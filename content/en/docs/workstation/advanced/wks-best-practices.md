---
title: "General Best Practices for Mendix Workstation"
linktitle: "General Best Practices"
url: /mendix-workstation/best-practices/
description: "Provides information about best practices for using Mendix Workstation."
weight: 20
---

## Introduction

This document describes the best practices that you should consider when deploying Mendix Workstation in production.

## Performance Optimization

* Ensure stations meet the recommended hardware specifications.
* Minimize background processes to improve performance.
* When building app logic reusing the Connectors nanoflows, minimize the amount of microflow calls and [other actions](/refguide/nanoflows/#logic-where-no-connection-is-needed) that require a server connection. One key benefit of Mendix Workstation is client-sided data processing. Every call to the Mendix runtime adds an performance overhead.  

## Maintenance Guidelines

* Periodically review and update workstation and device configurations.
* Monitor workstation health and resolve any connectivity issues promptly.
