---
title: "Set Up your Personal Access Token (PAT)"
url: /apidocs-mxsdk/mxsdk/set-up-your-pat/
weight: 11
aliases:
    - /apidocs-mxsdk/mxsdk/setup-your-pat/
---

## Introduction

Before running your first script, you need to set up your personal access token by creating a new token with the required scope and saving it to your computer as an environment variable.

## Creating the Personal Access Token

For details on how to create your personal access token (PAT), see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*.

Make sure you choose at least the following scopes:

* **Model Repository** – `mx:modelrepository:repo:write`
* **Sprintr Project API** – `mx:app:create` and `mx:app:delete`

## Saving the Personal Access Token as an Environment Variable

We do not recommend hard-coding your credentials (meaning, your PAT) into your script. Instead, you can save it as an environment variable with the name of a variable called `MENDIX_TOKEN`, and the Mendix Platform SDK will read it automatically.

Here is some useful information for setting the environment variable in different operating systems:

* [Create and Modify Environment Variables on Windows](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)
* [Setting up Environment Variables in MacOS](https://medium.com/@himanshuagarwal1395/setting-up-environment-variables-in-macos-sierra-f5978369b255)
* [How to Set Environment Variables in Linux](https://www.serverlab.ca/tutorials/linux/administration-linux/how-to-set-environment-variables-in-linux/)
