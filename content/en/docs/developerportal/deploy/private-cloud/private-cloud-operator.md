---
title: "Using Command Line to Deploy a Mendix App to a Private Cloud Cluster"
url: /developerportal/deploy/private-cloud-operator/
description: "Describes the processes for using the Mendix Operator directly to deploy a Mendix app in the Private Cloud"
weight: 30
tags: ["Deploy", "Private Cloud", "Environment", "Operator", "CI/CD", "CLI"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Once you have the Mendix Operator installed in a namespace of your Red Hat OpenShift, or other Kubernetes cluster (see [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/)), you can use it to control the deployment of your Mendix app using Mendix Custom Resources (CRs). The Mendix operator then creates the app container and builds the app inside the namespace, together with all the resources the app needs.

This document explains how to provide the CRs through the console or command line for a standalone cluster. This enables you to automate your deployment processes and perform deployments from behind a firewall which would prevent access to the Mendix Developer Portal.

Alternatively, you can create a connected cluster and use the Mendix Developer Portal to deploy the app, as described in [Deploying a Mendix App to a Private Cloud Cluster](/developerportal/deploy/private-cloud-deploy/).

## 2 Prerequisites for Deploying a Mendix App

* An OpenShift (version 3.11 or above), or Kubernetes platform – see [Supported Cluster Types](/developerportal/deploy/private-cloud-supported-environments/#supported-clusters) in *Supported Providers* for a full list
* Platform administration account
* **OpenShift CLI** installation if you are deploying on OpenShift (see [Getting started with the CLI](https://docs.openshift.com/container-platform/4.1/cli_reference/getting-started-cli.html) on the Red Hat OpenShift website for more information)
* **Kubectl** installation if you are deploying to another Kubernetes platform (see [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) on the Kubernetes webside for more information)
* A command line terminal. In Windows, this could be PowerShell or the Windows Command Prompt.
* The **deployment package** of a Mendix app made with version 7.23.3 (build 48173) or above

## 3 Deploying a Mendix App with an Operator

You can deploy multiple Mendix apps to run in the same Kubernetes or OpenShift namespace. Apps will have an **Environment UUID** added when they are  deployed to ensure that they are unique in the project; the name is required to identify the app when creating, modifying, or deleting it.

Follow the instructions below to deploy your app.

### 3.1 Creating a Deployment Package

Create a deployment package (.mda) file from your app. It is this which is picked up by the CR configuration and deployed in a container to your namespace.

You can obtain the deployment package in a number of ways:

* within Studio Pro, by choosing the menu option **Project > Create Deployment Package…** – see [Create Deployment Package](/refguide/create-deployment-package-dialog/) for more information
* from the **Environments** page of your app in the Developer Portal
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-operator/environments-create-mda.png" >}}
* through a CI/CD process, such as Jenkins.

The deployment package must be available over the internet without requiring authorization credentials, as these cannot be provided in the CR.

### 3.2 Editing the CR{#edit-cr}

You need to create a file containing the following yml code and then configure it to create the CR for your app:

```yml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
  name: example-mendixapp
spec:
  database: # Specification of Database CR
    servicePlan: dev
  storage: # Specification of Storage CR
    servicePlan: dev
  mendixRuntimeVersion: 7.23.3.48173 # Mendix version to use for placeholder runtime image
  sourceURL: https://example.com/example-app.mda # URL of App's source MDA
  appURL: example-mendixapp.k8s-cluster.example.com # URL to access the app
  tls: # Optional, can be omitted : set a custom TLS configuration, overriding the default operator configuration
    # Enable or disable TLS for the app
    enableTLS: true
    # Optional: name of an existing kubernetes.io/tls secret containing the TLS certificate
    secretName: example-mendixapp-cert
    # Optional: TLS certificate value (tls.crt)
    certificate: |-
      -----BEGIN CERTIFICATE-----
      [...]
      -----END CERTIFICATE-----
    # Optional: TLS key value (tls.key)
    key: |-
      -----BEGIN PRIVATE KEY-----
      [...]
      -----END PRIVATE KEY-----
  replicas: 1 # Number of replicas, set to 0 to stop all replicas
  resources: # Optional, can be omitted : set resources for Mendix Runtime container 
    limits: # Upper limit - process will be stopped if it tries to use more
      cpu: 500m # 500 millicores - half of a vCPU
      memory: 512Mi # 512 megabytes - suitable for small-scale non-production apps
    requests: # Lower limit - needs at least these resources
      cpu: 250m
      memory: 256Mi
  runtimeDeploymentPodAnnotations: # Optional, can be omitted : set custom annotations for Mendix Runtime Pods
    # example: inject the Linkerd proxy sidecar
    linkerd.io/inject: enabled
  serviceAnnotations: # Optional, can be omitted : specify the Service annotations
    # example: custom AWS CLB configuration
    service.beta.kubernetes.io/aws-load-balancer-backend-protocol: tcp
    service.beta.kubernetes.io/aws-load-balancer-ssl-cert: arn:aws:acm:eu-west-1:account:certificate/id
    service.beta.kubernetes.io/aws-load-balancer-ssl-ports: "443"
  endpointAnnotations: # Optional, can be omitted : set custom annotations for Ingress or OpenShift Route objects
    # example: allow uploads of files up 100 MB in the NGINX Ingress Controller
    nginx.ingress.kubernetes.io/proxy-body-size: 100m
    # example: deny access to /rest-doc
    nginx.ingress.kubernetes.io/configuration-snippet: |
      location /rest-doc {
        deny all;
        return 403;
      }
  ingressClassName: alb # Optional, can be omitted : specify the Ingress class
  ingressPath: "/" # Optional, can be omitted : specify the Ingress path
  ingressPathType: ImplementationSpecific # Optional, can be omitted : specify the Ingress pathType
  runtime: # Configuration of the Mendix Runtime
    logAutosubscribeLevel: INFO # Default logging level
    mxAdminPassword: V2VsYzBtZSE= # base64 encoded password for MendixAdmin user. In this example, 'Welc0me!'; can be left empty keep password unchanged
    debuggerPassword: V2VsYzBtZSE= # base64 encoded password for debuggerPassword. In this example, 'Welc0me!';
    dtapMode: P # Security & runtime mode: P for production, D for development
    logLevels: # Optional, can be omitted : set custom log levels for specific nodes
      NodeOne: CRITICAL
      NodeTwo: DEBUG
    microflowConstants: # Optional, can be omitted : set values for microflow constants
      MyFirstModule.Constant: "1234"
      Atlas_UI_Resources.Atlas_UI_Resources_Version: "2.5.4"
    scheduledEventExecution: SPECIFIED # Optional, can be omitted: specify which scheduled events should be enabled: ALL/NONE/SPECIFIED
    myScheduledEvents: # List which scheduled events should be enabled; should only be used if scheduledEventExecution is set to SPECIFIED
      - MyFirstModule.MyScheduledEvent
    # Mendix Runtime Jetty options, in JSON format; validated and applied by the mx-m2ee-sidecar container
    jettyOptions: |-
      {
        "max_form_content_size": 10485760,
        "use_blocking_connector": false
      }
    environmentVariables: # Optional, can be omitted : set environment variables for the Mendix Runtime container
      - name: MY_ENVIRONMENT_VARIABLE # name of the environment variable
        value: debug # value of the environment variable
        # valueFrom can be used instead of value to load values from a Secret:
        #valueFrom:
        #  secretKeyRef:
        #    name: proxy-secret
        #    key: java-proxy-secret
      - name: JAVA_TOOL_OPTIONS # name of the environment variable
        value: -Dhttp.proxyHost=10.0.0.100 -Dhttp.proxyPort=8080 -Dhttps.proxyHost=10.0.0.100 -Dhttps.proxyPort=8443 -Dhttp.nonProxyHosts="localhost|host.example.com"
    clientCertificates: # Optional, can be omitted : set client certificates for TLS authentication
      - key: Q0VSVElGSUNBVEU= # base64-encoded PKCS12 certificate
        password: # base64-encoded password for the certificate, cannot be empty
        pinTo: # Optional, list of web services or domain names where this certificate should be used
        - "www.example.com"
        - "service.www.example.com"
    # All custom Mendix Runtime parameters go here, in JSON format; validated and applied by the mx-m2ee-sidecar container
    customConfiguration: |-
      {
        "ApplicationRootUrl": "https://myapp1-dev.mendix.example.com"
      }
  runtimeMetricsConfiguration: # Optional, can be omitted : set Runtime metrics configuration
    mode: native # Metrics collection mode : native or compatibility
    interval: "PT1M" # Optional, can be omitted : set Prometheus scrape interval
    mxAgentConfig: |- # Optional, can be omitted : specify configuration for collecting additional metrics
      {
        …
      }
    mxAgentInstrumentationConfig: |- # Optional, can be omitted : specify instrumentation configuration for collecting additional metrics
      {
        …
      }
```

You need to make the following changes:

* **name**: – You can deploy multiple apps in one project/namespace — the app name in the CR doesn't have to match the app name in the mda and will have an **Environment UUID** added when it is deployed to ensure that it is unique in the project — see [Reserved Names for Mendix Apps](#reserved-names), below, for restrictions on naming your app
* **database/storage** – ensure that these have the correct **Database Plan** and **Storage Plan** — they have to have the same names that you [registered in the namespace](/developerportal/deploy/private-cloud-cluster/#configure-namespace)
* **mendixRuntimeVersion** – the full runtime version which matches the mda, including the build number
* **sourceURL** – the location of the deployment package, this must be accessible from your cluster without any authentication
* **appURL** – the endpoint where you can connect to your running app — this is optional, and if it is supplied it must be a URL which is supported by your platform
* **tls** – the TLS configuration — this is optional, and if it is supplied it will override the default Mendix Operator network configuration
* **enableTLS** – allows you to enable or disable TLS for the Mendix app's Ingress or OpenShift Route
* **secretName** – optional name of a `kubernetes.io/tls` secret, which must exist, containing the TLS certificate — if left empty, the default TLS certificate from the Ingress Controller or OpenShift Router will be used — cannot be used together with **certificate** and **key**
* **certificate** and **key** – provide the `tls.crt` and `tls.key` values directly (not recommended for production environments) — cannot be used together with **secretName**
* **replicas** – by default one replica will be started when you deploy your app
* **resources** – change the minimum and maximum container resources your app requires
* **serviceAnnotations** – set custom annotations for network Services; these annotations are applied on top of [default annotations](/developerportal/deploy/private-cloud-cluster/#advanced-network-settings) from `OperatorConfiguration`
* **endpointAnnotations** – set custom annotations for Ingress (or OpenShift Route) objects; these annotations are applied on top of [default annotations](/developerportal/deploy/private-cloud-cluster/#advanced-network-settings) from `OperatorConfiguration`
* **ingressPath** – specify a custom Ingress path; this overrides the [default ingress path](/developerportal/deploy/private-cloud-cluster/#advanced-network-settings) from `OperatorConfiguration`
* **ingressPathType** – specify a custom Ingress class name; this overrides the [default ingress pathType](/developerportal/deploy/private-cloud-cluster/#advanced-network-settings) from `OperatorConfiguration`
* **logAutosubscribeLevel** – change the default logging level for your app, the standard level is INFO — possibilities are: `TRACE`, `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`
* **mxAdminPassword** – here you can change the password for the MxAdmin user — if you leave this empty, the password will be the one set in the Mendix model
* **debuggerPassword** – here you can provide the password for the debugger — this is optional. Setting an empty `debuggerPassword` will disable the debugging features. In order to connect to the debugger in Studio Pro, enter the debugger URL as `<AppURL>/debugger/`. You can find further information in [How to Debug Microflows Remotely](/howto/monitoring-troubleshooting/debug-microflows-remotely/)
* **dtapmode** – for development of the app, for example acceptance testing, choose **D**, for production deployment, select **P**

    {{% alert color="warning" %}}Your app can only be deployed to a production environment if [security in the app is set on](/refguide/app-security/). {{% /alert %}}

    If you have an offline Runtime license, for example for a standalone cluster, you can configure it by adding a **runtimeLicense** section within the **runtime** section and setting **LicenseId** and **LicenseKey** to the values received from Mendix Support:

    ```yaml
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: MendixApp
    metadata:
      name: example-mendixapp
    spec:
      runtime:
        # add this section to the existing runtime configuration
        runtimeLicense: # Mendix Runtime License configuration
          type: offline # Set to offline
          id: LicenseId # Offline LicenseId (UUID) value provided by Mendix Support
          key: LicenseKey # Offline LicenseKey value provided by Mendix Support
    ```

* **logLevels**: – set custom logging levels for specific log nodes in your app — valid values are: `TRACE`, `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`
* **microflowConstants**: – set values for microflow constants
* **scheduledEventExecution**: – choose which scheduled events should be enabled – valid values are: `ALL`, `NONE` and `SPECIFIED`
* **myScheduledEvents**: – list scheduled events which should be enabled – can only be used when **scheduledEventExecution** is set to `SPECIFIED`
* **jettyOptions** and **customConfiguration**: – if you have any custom Mendix Runtime parameters, they need to be added to this section — options for the Mendix runtime have to be provided in JSON format — see the examples in the CR for the correct format and the information below for more information on [setting app constants](#set-app-constants) and [configuring scheduled events](#configure-scheduled-events)
* **environmentVariables**: – set the environment variables for the Mendix app container, and JVM arguments through the `JAVA_TOOL_OPTIONS` environment variable
* **clientCertificates**: – specify client certificates to be used for TLS calls to Web Services and REST services
* **runtimeMetricsConfiguration**: – specify how metrics should be collected — any non-empty values will override [default values](/developerportal/deploy/private-cloud-cluster/#customize-runtime-metrics) from `OperatorConfiguration` — see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/) for details on how to monitor your environment

#### 3.2.1 Setting App Constants{#set-app-constants}

The constant name is equal to `{module-name}.{constant-name}` where {module-name} is the name of the Mendix app module containing the constant,
and {constant-name} is the name of the constant. The constant name will also be visible in the constant properties (UnitTesting.RemoteApiEnabled in this example):

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-operator/constant-name.png" >}}

Set the constant values in the **microflowConstants** value in **runtime**. For example:
```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
  name: example-mendixapp
spec:
  runtime:
    microflowConstants:
      MyFirstModule.Constant: "1234"
      MyModule.AnotherConstant: "true"
```

#### 3.2.2 Configuring Scheduled Events{#configure-scheduled-events}

To disable execution of all scheduled events, set the **scheduledEventExecution** value to `NONE` in **runtime**.

To enable execution of all scheduled events, set the **scheduledEventExecution** value to `ALL` in **runtime**.

To enable execution for specific scheduled events, set the **scheduledEventExecution** value to `SPECIFIED` in **runtime**.
Specify which events should be enabled by listing their full names in the **myScheduledEvents** value in **runtime**.

For example, to enable the execution of event `EventOne` in module `MyFirstModule` and event `EventTwo` in `MySecondModule`,
set the **myScheduledEvents** list to `MyFirstModule.EventOne`, `MySecondModule.EventTwo`:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
  name: example-mendixapp
spec:
  runtime:
    scheduledEventExecution: SPECIFIED
    myScheduledEvents:
      - MyFirstModule.EventOne
      - MySecondModule.EventTwo
```

The **MyScheduledEvents** value should be removed from **customConfiguration** if **ScheduledEventExecution** is set to `ALL` or `NONE`.

### 3.3 Building and Deploying Your App

You now need to supply the CR you have just created to the platform so that the Mendix Operator can use it to build and deploy the app.

You can do this in one of two ways:

* via the CLI
* for OpenShift, you can use the [OpenShift console](#openshift-console)

#### 3.3.1 Processing the CR in the CLI

 To submit the CR via a CLI you will need a file containing the YML you created in [Editing the CR](#edit-cr), above.

##### 3.3.1.1 Kubectl in the CLI

To build and deploy your app using AWS-EKS or other Kubernetes platform execute the following command:

```shell
kubectl apply -f {File containing the CR} -n {namespace where app is being deployed}
```

##### 3.3.1.2 OpenShift CLI

To build and deploy your app using the OpenShift CLI, do the following:

1.  Paste the OpenShift login command into your command line terminal as described in the first few steps of the [Signing in to Open Shift](/developerportal/deploy/private-cloud-cluster/#openshift-signin) section of *Creating a Private Cloud Cluster*.
2.  Switch to the project where you've deployed the Mendix Operator using the command`oc project {my-project}` where {my-project} is the name of the project where the Mendix Operator is deployed.
3.  Paste the following command into your command line terminal:

```shell
oc apply -f {File containing the CR}
```

#### 3.3.2 Process the CR in the OpenShift Console{#openshift-console}

To build and deploy your app using the OpenShift Console, do the following:

1.  Sign in to the OpenShift Console.

1.  Go to your project.

2.  Click the **Add** button, and select **Import YAML**.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-operator/image1.png" >}}

3.  In the **Import YAML** page, enter/paste the YML you prepared in [Editing the CR}(#edit-cr), above.

4.  Click the **Create** button.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-operator/image2.png" >}}

Mendix Operator will now pick up the YAML and deploy your app.

### 3.4 Monitoring the Build Process.

The YAML window will report the status of the app build. Note that it can take up to ten minutes for all the statuses to reach ready.

The following statuses will be reported:

* **appState** – The status of your app (Started or Stopped)
  * This will also return the **appURL** which you can use to reach your app
* **buildStatus** – Ready
* **databaseStatus** – Ready
* **mendixAppState** – Ready
* **networkStatus** – Ready
* **runtimeStatus** – Ready
* **storageStatus** – Ready

### 3.5 Starting and Stopping Your App

You can start and stop your app through the CR you supplied to deploy your app. See section [Edit the CR](#edit-cr), above, for the full CR.

To stop your app when it is running, set the value of **replicas** to zero.

To start your app when it is stopped, set the value of **replicas** to be non-zero.

The value set in **replicas** will only be applied once the runtime status is **Ready**. If the runtime is waiting for another action to complete (for example, provisioning the database), then it will apply the replicas value once all other actions have been completed.

## 4 Current Limitations

### 4.1 Reserved Names for Mendix Apps{#reserved-names}

Names beginning **mendix-** cannot be used for your own apps as they are reserved for use by the Mendix Operator.

All names beginning **openshift-** are reserved for use by OpenShift if you are deploying to an OpenShift cluster.

### 4.2 ApplicationRootUrl Needs to be Set Manually

In some cases, your Mendix app will need to know its own URL – for example when using SSO or sending emails.

For this to work properly, you need to set the [ApplicationRootUrl variable](/refguide/custom-settings/#general) in `customConfiguration` to the app's URL. For example: 
```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
  name: example-mendixapp
spec:
  runtime:
    # Add the ApplicationRootUrl value here
    customConfiguration: |-
      {
        "ApplicationRootUrl": "https://myapp1-dev.mendix.example.com"
      }
```

{{% alert color="info" %}}
If you change `appURL`, you should also update the `ApplicationRootUrl` value.

Note that the `appURL` is a domain name (without a schema or path), while `ApplicationRootUrl` should be a HTTP URL with an http:// or https:// prefix.
{{% /alert %}}
