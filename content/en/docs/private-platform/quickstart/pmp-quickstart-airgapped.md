---
title: "Install Private Mendix Platform 2.8.0 for Air-Gapped Environments"
linktitle: "Air-Gapped Installation"
url: /private-mendix-platform/air-gapped-installation/
description: "Documents the installation process for Private Mendix Platform for air-gapped environments."
weight: 31
---

## Introduction

This document describes how you can perform a Private Mendix Platform in an air-gapped environment. For other installation types, see the following topics:

* [Install Private Mendix Platform in GUI Mode](/private-mendix-platform/interactive-installation/)
* [Install Private Mendix Platform with Helmfile](/private-mendix-platform/helmfile-installation/)

## Image Migration for Private Mendix Platform 2.8.0

The 2.8.0 release of Private Mendix Platform requires some manual steps to migrate images from various sources to the customer's air-gapped container registry:

* Some platform component images are provided as tarballs in one of the following ways:

    * In zip files downloaded over HTTP from the [Private Mendix Platform Download Portal](/private-mendix-platform/download-portal/)
    * Packaged inside the zip file of the Private Mendix Platform installer

* Some Platform components and Mendix images are provided through the Mendix public image registry

Either set uses a different tool to migrate. For more information, refer to the following sections.

### Images in a Zip File

For images downloaded from the Private Mendix Platform Download Portal or with the installer file, perform the following steps.

1. Download the release binary from your [Private Mendix Platform Download Portal](/private-mendix-platform/download-portal/). If you do not have access to the download portal, contact your Mendix partner for information.
2. Unzip the release binary to a local folder on your Windows or Linux server. The release binary contains the following files:

* In the *Tools* folder:

    * **mx-pclm-cli**, which can be used to manage PCLM
    * **helm** and **helmfile** tools, which are used to deploy and manage Private Mendix Platform charts and Svix charts
    * **images** - Private Mendix Platform image, PCLM image, Svix image, test application image

* In the *Installer* folder:

    * **mxpc-cli** - Installation tools which can be used to manage or configure the Mendix Operator
    * **charts** - Charts, including Private Mendix Platform charts and Svix charts

3. If your clusters can connect to a public registry with a passable network, skip to step 4 below, otherwise initialize the installation by performing the following steps:

    1. Upload the images to your private repository in an air-gapped environment:

        ```text
        ~/mpp-binary-linux$ ./installer init  migrate --help
        Migrate Mendix Private Platform related image to your own registry
        
        Usage:
        installer init migrate [flags]
        Flags:
            -h, --help                 help for migrate
            -r, --registryurl string   registry url (required)
            -e, --repo string          Repository name
            -u, --username string      Username (required) for your private registry
        ```

        The destination image is named `${registryurl }/${repo}/mendix-private-platform: ${tag}`. The `registryurl` and `repo` are read from the input parameters. The `tag` is automatically read by the installer. 
        
    2. If the repository does not exist, you must create it before running the init migrate command:

        ```text
        ~/mpp-binary-linux$ ./installer init migrate   -r [registry] -u  user -e [repositoryName]
        Please enter user password: ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

        Confirm password: ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
        the config checksum is empty
        The image destination[REDACTED] svix-server:v0.75.0
        The image destiation [REDACTED] mendix-private-platform:1.4.0.80d447b1
        the config checksum is empty
        The image destiation [REDACTED] mxpc-test:1.0
        the config checksum is empty
        The image destiation [REDACTED] privatecloud-license-manager:0.3.0
        svix-server_v0.75.0 => [REDACTED] svix-server:v0.75.0 - ok
        mendix-private-platform_1.4.0.80d447b1 => [REDACTED] mendix-private-platform:1.4.0.80d447b1 - ok
        mxpc-test_1.0 => [REDACTED] mxpc-test:1.0 - ok
        privatecloud-license-manager_0.3.0 => [REDACTED] privatecloud-license-manager:0.3.0 - ok
        ```

    3. By default, mxpc-cli tools install the latest version of Mendix Operator. You can specify a different Mendix Operator version by using the following command: `./installer operator init -v="version number"`

4. Migrate the files required to install the Private Cloud components by performing the following steps:

    1. Download the *mx-private-cloud.zip* file from your Private Mendix Platform download portal.
    2. Unzip the *mx-private-cloud.zip* file.
    3. Copy the *images* from the *mx-private-cloud* directory to the *images* sub-directory of the installer by running the following command: `cp -r mx-private-cloud/images/* <your installer>/pmp-binary-linux/images`
    4. Upload the directory to your private registry by using the `installer init migrate` command. All the images must be in the same registry.
    
5. Migrate the files required to enable Maia for Private Mendix Platform by performing the following steps:

    1. Download the *maia-appgen-pmp.zip* file from your Private Mendix Platform download portal.
    2. Unzip the *maia-appgen-pmp.zip* file.
    3. Copy the *maia-appgen-pmp* directory to the *images* sub-directory of the installer by running the following command: `cp -r maia-appgen-pmp/images/* <your installer>/pmp-binary-linux/images`
    4. Upload the Maia directory to your private registry by using the `installer init migrate` command.

6. After the migration is completed, [install Private Mendix Platform with Helmfile](/private-mendix-platform/helmfile-installation/).

### Images from the Public Mendix Registry

For SVIX, the Mendix Operator and its subcomponents (for example, sidecars, storage provisioners, image builder), as well as Mendix runtime base images and app building blocks for supported Mendix versions, you must use an AIP tool to download and migrate to a local registry.

#### Accessing Mendix Container Images

To install Private Mendix in an air-gapped environment, you must provision a list of images in your registry. 

1. Download an aip tool for your operating system.

    Mendix has created *aip* tools for different operating systems. Download them from the following links:

    * [Aip for Mac (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.1.0-macos-amd64.tar.gz)
    * [Aip for Mac (arm64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.1.0-macos-arm64.tar.gz)
    * [Aip for Windows (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.1.0-windows-amd64.zip)
    * [Aip for Windows (arm64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.1.0-windows-arm64.zip)
    * [Aip for Linux (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.1.0-linux-amd64.tar.gz)
    * [Aip for Linux (arm64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.1.0-linux-arm64.tar.gz)

2. Export the image list.

    1. In the [https://privateplatform.mendix.com/](https://privateplatform.mendix.com/), go to **Image Management** and select a Private Mendix Platform version.
    2. Filter by **Category** and select the images
    3. Click **Export Selection** to export the list to a file named *export-images-vx.x.x.json*, where `x.x.x` corresponds to a Private Mendix Platform version.

2. In the Mendix Portal, create a Personal Access Token (PAT) for private images that require a PAT for authentication. 

    1. Sign in to Mendix and go to **User Settings > Developer Settings > Personal Access Token**
    2. Click **New Token**.
    3. Under **OCI registry**, select the **mx:registry:access** as scope.
 
3. Fetch the images.

    1. Log in to the OCI registry for Oras by using the following command: `oras login -u pat -p <token>  registry.mendix.com`.
    2. Use the `oras pull` command to download the Helmfile from the OCI registry, for example, ` oras pull registry.mendix.com/private-platform/installer-helmfile:0.2.1`.
    3. Unzip the downloaded file by using the following command: `tar -xvf helmfile-config.tar.gz`.
    4. Test it by using the following command: `helmfile --file helmfile.d/helmfile.yaml --state-values-file <valuefile> apply`.

4. Pull the charts.

    1. Log in to the OCI registry for Helm by using the following command: `helm registry login -u pat -p ${YOUR_PAT} registry.mendix.com`.
    2. Use the `helm pull` command to download the Helmfile from the OCI registry, for example:

    ```text
    helm pull oci://registry.mendix.com/private-cloud/charts/mx-privatecloud-operator-installer --version 0.2.36
    helm install operator mx-privatecloud-operator-installer-0.2.36.tgz -f ./Downloads/20260916T113717Z-pmp-test-oci-generated-values.yaml --namespace pmp-oci-test
    ```

    where `/Downloads/20260916T113717Z-pmp-test-oci-generated-values.yaml` is the yaml file for Operator configuration. You can find this yaml file among the example files in the installer package.


Create PAT

Some images are private, and need create PAT(Personal Access Token) from Mendix portal for authentication.

Sign in to Mendix home -> User Settings → Developer Settings → Personal Access Token, click New Token button and choose mx:registry:access scope under OCI registry to create your PAT.

Run aip commands to synchronise images to your air-gapped registry

mkdir pmp-images
cd pmp-images

# Initialize aip with exported image list.
aip init ~/Downloads/export-images-v2.7.0.json

# Login Mendix registry
aip login -u pat -p <your-pat> registry.mendix.com

# Download all images from source registry to local folder.
aip pull

# Configure destination registry.
aip set-base-destination <myprivate.registry.com>

# Login new registry.
aip login -u <user> -p <password> <myprivate.registry.com>

# Upload all the images to new registry.
aip push



In case some registry need create repository before push, you can get all the repositories via below command:

# get list of required repositories - these will need to be created before you can push to them
jq -r '.["images", "charts", "custom-artifacts"][] .destination' state.json
