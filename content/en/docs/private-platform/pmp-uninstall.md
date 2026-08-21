---
title: "Uninstalling Private Mendix Platform"
url: /private-mendix-platform/uninstallation/
description: "Documents the uninstallation process for the Private Mendix Platform."
weight: 70
---

## Introduction

If required, you can uninstall the Private Mendix Platform by performing the following steps:

1. Optional: Verify that Private Mendix Platform is installed by running the following command: `helm status mxplatform -n=<Private Mendix Platform namespace>`.
2. Delete Private Mendix Platform resources by running the following command: `helm uninstall mxplatform -n=<Private Mendix Platform namespace>`.
3. Optional: Verify that Svix is installed by running the following command: `helm status svix-server -n=<Private Mendix Platform namespace>`.
4. Delete Svix resources by running the following command: `helm uninstall svix-server -n=<Private Mendix Platform namespace>`.
5. Uninstall PCLM by running the following commands:

    ```text
    kubectl delete   svc/mx-privatecloud-license-manager -n=<ns> 
    kubectl   delete deployments/mendix-pclm  -n=<ns> 
    kubectl delete secret/mendix-pclm   mendix-operator-pclm  pclm-admin -n=<ns>
    ```

6. Uninstall the Mendix Operator, as described in [Private Cloud Cluster: Namespace Management](/developerportal/deploy/private-cloud-cluster/#namespace-management).
7. If you want to also delete the Private Mendix Platform namespace, run the following command: `kubectl delete namespace <Private Mendix Platform namespace>`.
