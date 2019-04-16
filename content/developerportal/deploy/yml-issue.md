---
title: "YML Issue"
category: "Deployment"
#menu_order: 45
description: "Explore issue around displaying YML code block"
#tags: ["MindSphere", "deploy", "cloud foundry", "launchpad", "scopes", "roles", "sso", "XSRF", "limitations", "Gateway"]
# DO NOT PUBLISH THIS DOCUMENT
draft: true
---

## Play with double indenting

1. List item

    ```yml
        - begins with hyphen
    ```

## Lots of code with hyphens - indented?

1. List item

    ```yml
        applications:
        - name: {app_name}
          disk_quota: {disk_quota_size}
          memory: {memory_size}
        services:
          - {service_instance}
    ```

## Lots of code with hyphens - raw?

1. List item

    {% raw %}
    ```yml
    applications:
    - name: {app_name}
      disk_quota: {disk_quota_size}
      memory: {memory_size}
    services:
      - {service_instance}
    ```
    {% endraw %}

## Hyphen line double-indented?

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
