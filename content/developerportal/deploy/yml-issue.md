---
title: "YML Issue"
category: "Deployment"
#menu_order: 45
description: "Explore issue around displaying YML code block"
#tags: ["MindSphere", "deploy", "cloud foundry", "launchpad", "scopes", "roles", "sso", "XSRF", "limitations", "Gateway"]
# DO NOT PUBLISH THIS DOCUMENT
draft: true
---

## Only one hyphen in lots of lines?

1. List item

    ```
    No hyphen
    No hyphen
    No hyphen
    No hyphen
    No hyphen
    No hyphen
    No hyphen
    No hyphen
    - line begins with hyphen position 1
    No hyphen
    No hyphen
    No hyphen
    No hyphen
    No hyphen
    ```

## Hyphen not in position 1?

1. List item

    ```
     - line begins with hyphen
    ```

## Hyphen not in position 1, multi-line?

1. List item

    ```
    No hyphen
        - line begins with hyphen double indented
    No hyphen
    ```

## Simplest example with hyphen?

1. List item

    ```
    - line begins with hyphen
    ```

## Is it just the yml - NO YML is OK not indented?

```yml
applications:
- name: {app_name}
  disk_quota: {disk_quota_size}
  memory: {memory_size}
services:
  - {service_instance}
```

## Try double indenting - NO?

1. List item

        ```
        - line begins with hyphen
        ```

## Replace hyphen with `&#45;` code (&#45;) hyphen - NO?

1. List item

    ```
    &#45; line begins with hyphen
    ```

## Indented code block - not yml?

1. Create a `manifest.yml` file with at least the following content:

    ```
    applications:
    - name: {app_name}
      disk_quota: {disk_quota_size}
      memory: {memory_size}
    services:
      - {service_instance}
    ```

## Indented multi-line?

1. List item

    ```yml
    applications:
    - name: {app_name}
      disk_quota: {disk_quota_size}
    ```

## Indented multi-line hyphen?

1. List item

    ```yml
    line
    - hyphen line
    line
    ```

## Indented single-line?

1. List item

    ```yml
    - name: {app_name}
    ```

## Indented no hyphens - OK?

1. List item

    ```yml
    applications:
      name: {app_name}
      disk_quota: {disk_quota_size}
    ```

## Indented yml - yes this is a simple example?

1. Create a `manifest.yml` file with at least the following content:

    ```yml
    applications:
    - name: {app_name}
      disk_quota: {disk_quota_size}
      memory: {memory_size}
    services:
      - {service_instance}
    ```

{{% todo %}}[REMOVE DOCUMENT AFTER TESTING]{{% /todo %}}
