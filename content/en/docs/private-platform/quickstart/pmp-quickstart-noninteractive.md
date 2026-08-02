---
title: "Install Private Mendix Platform in Non-Interactive Mode"
linktitle: "Non-Interactive Installation"
url: /private-mendix-platform/noninteractive-installation/
description: "Documents the installation process for Private Mendix Platform in non-interactive (automatic) mode."
weight: 30
---

## Introduction

To support automated namespace installation and configuration, we have provided a non-interactive mode in the configuration tool. In non-interactive mode, you use commands to automatically install Private Mendix Platform components. If you would like to perform a manual installation instead, see [Install Private Mendix Platform in Interactive Mode](/private-mendix-platform/interactive-installation/).

Non-interactive mode supports the following tasks:

* Automated namespace installation, upgrade, and Operator configuration 
* Installation and upgrade of components such as Svix, PCLM, and others
* Installation and upgrade of Private Mendix Platform  

##  Performing the Installation

To install and configure Private Mendix Platform and its components, perform the following steps:

1. Download the release binary from your [Private Mendix Platform download portal](https://privateplatform.mendix.com/). If you do not have access to the download portal, contact your Mendix partner for information.

2. Unzip the release binary to a local folder on your Windows or Linux server. The release binary contains the following files:

    * **Tools** - *mx-pclm-cli*, which can be used to manage PCLM
    * **helm**, and **helmfile** tools, which are used to deploy and manage Private Mendix Platform charts and Svix charts
    * **images** - Private Mendix Platform image, PCLM image, Svix image, test application image
    * **Installer** - installer tools
    * **mxpc-cli** - installation tools which can be used to manage or configure the Mendix Operator
    * **charts**  - charts, including Private Mendix Platform charts and Svix charts
    
    {{< figure src="/attachments/private-platform/pmp-binary.png" class="no-border" >}}

3. Upload the images to your private repository in an air-gapped environment by running the following command `./installer init migrate`.
4. Initiate the creation of configuration files for non-interactive installation by running the following commands, where `-n` indicates the namespace:

    * `./installer operator configure -n=<Private Mendix Platform namespace>` - To generate a configuration file for the Operator.  For more information, see [Operator](#operator).
    * `./installer component -n=<Private Mendix Platform namespace>` - To generate configuration files for the components. You can select the component in the configuration tool. For more information, see [Components](#components).
    * `./installer platform  -n=<Private Mendix Platform namespace>` - To generate a configuration file for the Private Mendix Platform. For more information, see [Private Mendix Platform](#pmp).

5. Fill out the required configuration parameters, and then click **Write Configuration** to generate the file.

    {{< figure src="/attachments/private-platform/pmp-install-ni1.png" class="no-border" >}}

6. Apply the configuration by running the following command: `./installer apply-config -f <config-file path>`.

## Configuration File Structure

The configuration file is organized into four main sections:

* **General Settings** – Defines the overall information, such as the namespace name.
* **Operator** – Configures the Mendix Operator, including cluster type, registry, cluster mode, database plan, storage plan, and so on.
* **Components** – Specifies the optional platform components to be enabled or disabled, for example, PCLM, Svix, PDFGen, Build Agent, and Maia. You must specify the configuration for enabled components. 
* **Private Platform** – Defines the Mendix Private Platform application settings, including the app URL, database and storage plans, resource limits, runtime configuration, and feature toggles.

### Sample Configuration File

```text
namespace: installertest
mx-privatecloud-license-manager:
  enable: true
  dbname: pclminstallertest
  authMode: static
  dbhost: pmp-qa-sgp-postgres-db.csgiuoqgq1ut.ap-southeast-1.rds.amazonaws.com
  dbport: "5432"
  dbuser: postgres
  dbpassword: TempautoxxMendix2000
  dbtype: postgres
  image: private-cloud.registry.mendix.com/privatecloud-license-manager
  image-tag: 0.10.9
  operator-user: operatoruser
  operator-password: operatorpass
  admin-password: adminpass
  customerclusterdomain: cluster.local
svix-server:
  enable: true
  postgres: postgresql://postgres:TempautoxxMendix2000@pmp-qa-sgp-postgres-db.csgiuoqgq1ut.ap-southeast-1.rds.amazonaws.com/svixinstallertest
  image:
    registry: docker.io
    name: svix/svix-server
    tag: v1.95.1
maia-appgen:
  enable: true
  image:
    registry: 216906236208.dkr.ecr.eu-central-1.amazonaws.com
    name: maia-appgen
    tag: 0.39.1
  env:
  - name: MXASSIST_COPILOT_MXID3_URL
    value: dafdaf/oidc/
  ingress:
    enable: false
mx-privatecloud:
  enable: true
  image:  
     registry: "216906236208.dkr.ecr.eu-central-1.amazonaws.com"
  nats:
    server_addr: "nats://my-nats.installertest:4222"
  authenticator:
    database:
      host: "mx-privatecloud.csgiuoqgq1ut.ap-southeast-1.rds.amazonaws.com"
      port: "5432"
      name: "authenticatordaisy"
      user: "authuserdaisy"
      password: "def"
  collector:
    database:
      host: "mx-privatecloud.csgiuoqgq1ut.ap-southeast-1.rds.amazonaws.com"
      port: "5432"
      name: "collectordaisy"
      user: "colluserdaisy"
      password: "abc"
  interactor_bridge:
    ingress:
      enable: false
mx-private-document-generation:
  enable: true
  namespace: "abc2"
  image:
    registry: "private-cloud.registry.mendix.com"
    name: "mendix/document-generation-service"
    tag: "1.0.0"
maia-llm-gateway:
  image:
    registry: autoinfraazure.azurecr.io
    name: maia-llm-gateway
    tag: 0.13.2
  enable: true
  env:
  - name: MXASSIST_COPILOT_MXID3_URL
    value: https://md.mxplatform.net/oidc/
  ingress:
    enable: true
    hostName: maia-appgen-llm-azure.mxplatform.net
mxplatform-kube-agent:
  enable: true
  namespace: "abc2"  
  image:
    registry: "216906236208.dkr.ecr.eu-central-1.amazonaws.com"
    name: "mxplatform-kube-agent"
    tag: "1.18.0"
mxplatform:
  enable: true
  name: mxplatform
  kubeAgentNamespace: abc2   # specify the kubeagent namespace 
  maiaEnabled: true          # if you install maia appgen
  svixEnabled: true          # if you install svix 
  privateCloudEnabled: true  # if you install privatecloud 
  pclm:
    username: administrator  #pclm admin username
    password: adminpass      #pclm admin password 
  spec:
    appURL: am.mxplatform.net
    database:
      servicePlan: new-pmp-db-eph
    storage:
      servicePlan: storage-test-eph
    replicas: 1
    resources:
      limits:
        cpu: 1000m
        memory: 2048Mi
      requests:
        cpu: 500m
        memory: 1024Mi
    sourceURL: oci-image://public.ecr.aws/p2w4x6l6/mendix-private-platform:2.6.0.7df5550a
    runtime:
      mxAdminPassword: Abcd1234....
      microflowConstants:
        UserAdmin.TOGGLE_CAPS_ENABLECI: "True"
        UserAdmin.TOGGLE_CAPS_IDP: "True"
        UserAdmin.TOGGLE_CAPS_MKTPLS: "True"
        UserAdmin.TOGGLE_CAPS_PRJMGMT: "True"
        UserAdmin.TOGGLE_CAPS_WEBHOOK: "True"
        UserAdmin.TOGGLE_MKTPLS_APPROVAL: "True"
        UserAdmin.TOGGLE_MKTPLS_IMPORT: "True"
        UserAdmin.TOGGLE_PERSIST_CONFIG: "False"
      dtapMode: P
```

## Required Configuration

For non-interactive installation of Private Mendix Platform, you must configure the following parameters.

### Namespace

The `namespace` is the cluster namespace where your Private Mendix Platform will be installed.

## Operator {#operator}
 
For general information about configuring Mendix Operator in non-interactive mode, see [Install and Configure Mendix on Kubernetes Non-Interactive Mode](/developerportal/deploy/private-cloud-cli-non-interactive/).

To generate the configuration file for the Oprator part, run the following command:

```text
  ./installer operator configure -n=<Private Mendix Platform namespace>
```

The *mx_config_cli.yaml* file is generated when you click **Write YAML** during the **Review and Apply** phase of the interactive namespace configuration. You must then copy the contents of *mx_config_cli.yaml* into the Operator section.

```text
operator:
   enable: false    
   base:  # base installation info
     cluster_type: generic    #for Openshift set it to  openshift
     registry:  private-cloud.registry.mendix.com   #  Operator registry info 
   config:  
      cluster_mode: standalone
      namespace: aa
      mask:
       database_plan: true
       storage_plan: true
       proxy: false
       custom_tls: false
      database_plan:
       name: db-config
       type: ephemeral
      storage_plan:
       name: storage-config
       type: ephemeral
``` 

### Components {#components}

Private Mendix Platform components include Svix, PCLM, Maia, PrivateCloud, and others.

To generate the configuration file for each component, run the following command:

```text
  ./installer component -n=<Private Mendix Platform namespace>
```

After that, choose the components, fill the configuration details, and click **Write configuration**.

{{< figure src="/attachments/private-platform/pmp-installni2.png" class="no-border" >}}

### Private Mendix Platform {#pmp}

To generate the configuration file for Private Mendix Platform, run the following command:

```text
./installer platform  -n=<Private Mendix Platform namespace>
```

After that, fill the configuration info and click **Write Configuration**.

{{< figure src="/attachments/private-platform/pmp-installni1.png" class="no-border" >}}