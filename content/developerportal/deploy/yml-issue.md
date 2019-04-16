---
title: "YML Issue"
category: "Deployment"
#menu_order: 45
description: "Explore issue around displaying YML code block"
#tags: ["MindSphere", "deploy", "cloud foundry", "launchpad", "scopes", "roles", "sso", "XSRF", "limitations", "Gateway"]
# DO NOT PUBLISH THIS DOCUMENT
draft: true
---

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

## Indented no hyphens?

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

## Is it just the yml - NO?

```yml
applications:
- name: {app_name}
  disk_quota: {disk_quota_size}
  memory: {memory_size}
services:
  - {service_instance}
```


{{% todo %}}[REMOVE DOCUMENT AFTER TESTING]{{% /todo %}}
