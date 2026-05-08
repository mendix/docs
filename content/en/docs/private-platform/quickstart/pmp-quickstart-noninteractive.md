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
* Installation and upgrade of (Svix, PCLM, Private Cloud related)
* Installation and upgrade of Private Mendix Platform  

##  Performing the Installation

To install and configure the Mendix Operator, perform the following steps:

1. Download the release binary from your [Private Mendix Platform download portal](https://privateplatform.mendix.com/). If you do not have access to the download portal, contact your Mendix partner for information.

2. Unzip the release binary to a local folder on your Windows or Linux server. The release binary contains the following files:

    * **Tools** - *mx-pclm-cli*, which can be used to manage PCLM
    * **helm**, and **helmfile** tools, which are used to deploy and manage Private Mendix Platform charts and Svix charts
    * **images** - Private Mendix Platform image, PCLM image, Svix image, test application image
    * **Installer** - installer tools
    * **mxpc-cli** - installation tools which can be used to manage or configure the Mendix Operator
    * **charts**  - charts, including Private Mendix Platform charts and Svix charts
    
    {{< figure src="/attachments/private-platform/pmp-binary.png" class="no-border" >}}

3. Initiate the creation of configuration files for non-interactive installation by running the following commands, where `-n` indicates the namespace:

    * `./installer operator configure -n=<Private Mendix Platform namespace>` - To generate a configuration file for the Operator
    * `./installer component -n=<Private Mendix Platform namespace>` - To generate configuration files for the components; you can select the component in the configuration tool
    * `./installer platform  -n=<Private Mendix Platform namespace>` - To generate a configuration file for the Private Mendix Platform

4. Fill out the required configuration parameters, and then click **Write Configuration** to generate the file.

    {{< figure src="/attachments/private-platform/pmp-install-ni1.png" class="no-border" >}}

5. Apply the configuration by running the following command: `./installer apply-config -f <config-file path>`.

## Configuration File Structure

The configuration file is organized into four main sections:

* **General Settings** – Defines the overall information, such as the namespace name.
* **Operator** – Configures the Mendix Operator, including cluster type, registry, cluster mode, database plan, storage plan, and so on.
* **Components** – Specifies the optional platform components to be enabled or disabled, for example, PCLM, Svix, PDFGen, Build Agent, and Maia. You must specify the configuration for enabled components. 
* **Private Platform** – Defines the Mendix Private Platform application settings, including the app URL, database and storage plans, resource limits, runtime configuration, and feature toggles.