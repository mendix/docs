---
title: "Troubleshooting Team Server Issues"
url: /refguide10/troubleshoot-team-server-issues/
linktitle: "Team Server Issues"
weight: 30
description: "Presents a list of problems and fixes for Team Server issues."
---

## Introduction

Mendix Studio Pro needs to connect to the Team Server, where all your apps are stored. Team Server is a version control server. Git is the default version control system for the Team Server. This document describes permissions and settings required to connect to the Team Server, as well as troubleshooting steps in case of connectivity issues.

## Basic Configuration Issues: Team Server App Network Settings

Being unable to download the Team Server app can indicate that the security configuration of your company network is blocking access to `https://home.mendix.com` and the Team Server itself that is located at `https://git.api.mendix.com/`.

Mendix Studio Pro uses the HTTPS (TCP) to communicate with the Team Server. To access the Team Server from Studio Pro, the network at your location needs the following settings:

* The HTTPS port (TCP 443) needs to be open
* The HTTP port (TCP 80) needs to be open

Mendix Studio Pro connects to `https://teamserver.sprintr.com/` and with the domains shown in the diagram below over HTTPS on port 443. These domains should be added to the firewall safe list:

{{< figure src="/attachments/refguide10/version-control/troubleshoot-version-control-issues/networkaccessmendixplatform.png" alt="Domains home.mendix.com, cloud.mendix.com, and git.api.mendix.com need to be accessible on port 443 from your network" class="no-border" >}}

You can look up the IP address `https://git.api.mendix.com/`.

{{% alert color="warning" %}}
Mendix reserves the right to change the IP address at any time and without notification to the customer. This could happen if Mendix moves to a different infrastructure, for example.
{{% /alert %}}

{{% alert color="info" %}}
Contact your network administrator and give them this information to allow them to configure your network (for example, firewall and proxy settings) correctly.
{{% /alert %}}

## Advanced Troubleshooting

### Most Reported Git-Related Issues

Customers experiencing Git-related problems often report the following issues:

* Git operations (clone, commit, pull, push) are unusually slow or never get completed
* Network timeout errors when connecting to `https://git.api.mendix.com`
* SSL connection failures during Git operations
* Proxy error
* Mendix Portal connection errors while trying to create an app or interact with the Team Server

The error messages that you get from known errors and exceptions are represented below.

#### Timeout Error

```Failed to connect to git.api.mendix.com port 443 after 262515 ms: Timed out```.

#### SSL Connection Error

```The SSL connection could not be established```.

#### Mendix Portal Connector Exception

```
Mendix.Modeler.Sprintr.SprintrConnectorException: Error while creating sprintr project.
---> Mendix.Modeler.VersionControl.TeamServer.TeamServerRepositoryServiceException: An error occurred while sending the request.
---> System.Net.Http.HttpRequestException: An error occurred while sending the request.
---> System.Net.Http.WinHttpException (80072EFF, 12030): Error 12030 calling WINHTTP_CALLBACK_STATUS_REQUEST_ERROR, 'The connection with the server was terminated abnormally'.
```

#### Socket Exception and Early EOF

```LibGit2Sharp.LibGit2SharpException: early EOF```.

#### Proxy Error

```Failed with status 407```.

### Diagnosing Git-Related Issues

To determine which area has an issue there are three diagnosing steps:

1. [General connectivity](#general-connectivity) – Can you successfully reach the Team Server? Check your internet speed, and verify whether a VPN or proxy is in use.
2. [GIT CLI interaction with the Team Server](#team-server) – Is the Git Command Line Interface (CLI) functioning correctly when communicating with the Team Server?
3. [Studio Pro connectivity](#studio-pro-connectivity) – Are there any issues within Studio Pro, assuming no problems were found in the previous two steps?

#### Validating General Connectivity {#general-connectivity}

##### CURL over HTTP

The first step is to validate whether CURL is able to reach the Team Server over HTTP.

* Why – Git uses the CURL library to do network operations over HTTP or HTTPS. If CURL does not work the network infrastructure is interfering. 

* How – Store the output of the following command on the command line: ```curl -v http://git.api.mendix.com```.

* Validate the output – An expected response is given below. Lines to note:

    * Line 6 – You see the request connected to `https://git.api.mendix.com`. This means the request has reached the server and was not interrupted.
    * Line 13 – You see the request returned a permanent redirect. This is expected as CURL is reaching the HTTP URL, which should redirect to the HTTPS variant.

* Actions to take if something is wrong – Request your internal IT department to look into this and contact Mendix once the CURL request returns an expected request. 

  ```
  curl -v git.api.mendix.com
  * Host git.api.mendix.com:80 was resolved.
  * IPv6: (none)
  * IPv4: 63.32.204.124, 34.246.251.192
  *   Trying 63.32.204.124:80...
  * Connected to git.api.mendix.com (63.32.204.124) port 80
  > GET / HTTP/1.1
  > Host: git.api.mendix.com
  > User-Agent: curl/8.8.0
  > Accept: */*
  >
  * Request completely sent off
  < HTTP/1.1 308 Permanent Redirect
  < Date: Wed, 02 Oct 2024 09:34:54 GMT
  < Content-Type: text/html
  < Content-Length: 164
  < Connection: keep-alive
  < Location: https://git.api.mendix.com
  < X-Content-Type-Options: nosniff
  <
  <html>
  <head><title>308 Permanent Redirect</title></head>
  <body>
  <center><h1>308 Permanent Redirect</h1></center>
  <hr><center>nginx</center>
  </body>
  </html>
  * Connection #0 to host git.api.mendix.com left intact
  ```

##### CURL over HTTPS

The second step is to validate whether CURL is able to reach the Team Server over HTTPS.

* Why  – Git uses the CURL library to do network operations over HTTP or HTTPS. If CURL does not work the network infrastructure is interfering. 

* How – Store the output of the following command on the command line: ```curl -v https://git.api.mendix.com```.

* Validate the output – An expected response is given below. Lines to note:

    * Line 2 – You see the host/domain is resolved.
    * Line 6 – You see the request connected to `https://git.api.mendix.com` on port 443. This means the request hit the server and was not interrupted.
    * Line 13 – You see the request returned a permanent redirect. This is expected as CURL is reaching the HTTP URL, which should redirect to the HTTPS variant.
    * Line 23 – Even though this line says 400 Bad Request, this is expected as the teams server is no HTTP server. This line tells you the request made it to the server and a response was given. 

* Actions to take if something is wrong – Request your internal IT department to look into this and get back to Mendix once the CURL request returns an expected request. 

  ```
  curl -v https://git.api.mendix.com
  * Host git.api.mendix.com:443 was resolved.
  * IPv6: (none)
  * IPv4: 63.32.204.124, 34.246.251.192
  *   Trying 63.32.204.124:443...
  * Connected to git.api.mendix.com (63.32.204.124) port 443
  * schannel: disabled automatic use of client certificate
  * ALPN: curl offers http/1.1
  * ALPN: server accepted http/1.1
  * using HTTP/1.x
  > GET / HTTP/1.1
  > Host: git.api.mendix.com
  > User-Agent: curl/8.8.0
  > Accept: */*
  >
  * Request completely sent off
  * schannel: remote party requests renegotiation
  * schannel: renegotiating SSL/TLS connection
  * schannel: SSL/TLS connection renegotiated
  * schannel: remote party requests renegotiation
  * schannel: renegotiating SSL/TLS connection
  * schannel: SSL/TLS connection renegotiated
  < HTTP/1.1 400 Bad Request
  < Date: Wed, 02 Oct 2024 09:34:44 GMT
  < Content-Length: 64
  < Connection: keep-alive
  < Strict-Transport-Security: max-age=15724800; includeSubDomains
  < X-Content-Type-Options: nosniff
  <
  Please provide valid input to execute this request. Invalid url.* Connection #0 to host git.api.mendix.com left intact
  ```

##### VPN, Proxy or Zscaler

The next step is to verify whether you are behind a VPN, Proxy or Zscaler.

* Why – Git uses the CURL library to do network operations over HTTP or HTTPS. If CURL does not work the network infrastructure may be interfering.  

* How – do the following: 

    * Check whether you are behind a VPN or proxy. Reach out to your internal IT department if you are not sure. Alternatively you can try a website to detect a VPN.
    * Perform the following line on `cmd` and store the output: ```netsh.exe winhttp show proxy```.

* Validate the output – A system with no proxy should show the following:

  ```
  C:\Users\UserName>netsh.exe winhttp show proxy
  Current WinHTTP proxy settings:
  Direct access (no proxy server).
  ```

* Actions to take if something is wrong – do one of the following:

    * If you are behind a proxy:  
        * Retry without VPN or proxy and see if that solves the issue. Reach out to your internal IT department if you are not sure how to test it.
        * Set up the proxy in Git following the [Proxy Servers Are Not Supported](/refguide10/troubleshoot-version-control-issues/#proxy-servers-are-not-supported) section in *Troubleshooting Version Control*.
      A correct example command looks like this: ```git config --global http.proxy https://username:mypassword@someproxyurl.com:123123```
      Please note, if the username or password contains a `:` or a `@`, it might not work.
    * In case ```netsh.exe winhttp show proxy``` gives an output that implies there is no proxy active. If the Git CLI is able to work with Git, but Studio Pro is not, then you can try ```netsh.exe winhttp reset proxy``` to reset your local proxy setting.

##### Validate Network Speed

* Why – Speed gives you a tool to calculate the expected time a clone should roughly take.
* How – Use a tool to test your network speed, such as [speedtest.net](https://www.speedtest.net/) and write down the download and upload speed.
* Validate the output – The speed is in bits, meaning the value has to be divided by 8. if the speed is shown as 80Mbitps, the actual speed is 10MByte per second. This means that a 80MB repo will take at least 8 seconds to download.

#### GIT CLI Interaction with the Team Server {#team-server}

In the section above, you checked: 

* The ability of CURL to access the Team Server through HTTP and HTTPS
* Proxy/VPN 
* Internet speed

With this information, you can try to get Git working using the command line.

Studio Pro uses the Git Command Line Interface (CLI) under the hood. However, Studio Pro does a little bit more. To pinpoint the exact area causing the issue, it is important to first attempt to reproduce the issue without Studio Pro.

{{% alert color="info" %}}
If you are encountering issues when using Git CLI, this is typically an issue your internal IT department should help with.
{{% /alert %}}

##### Prerequisites

You need to setup a [Personal Access Token (PAT)](/mendix-profile/user-settings/#pat) to work with Git on the command line. The following permissions should be configured while creating the PAT:

```
Model Repository
mx:modelrepository:repo:write
Write access to Team Server Git repositories and Team Server API
mx:modelrepository:repo:read
Read access to Team Server Git repositories and Team Server API
mx:modelrepository:write
Full access to Team Server Git repositories and Team Server API
Model Server
mx:modelrepository:write 
```

{{% alert color="info" %}}
The troubleshooting commands should be executed in `cmd` or `command prompt` in Windows. Executing these through `Powershell` will not work for all commands.
{{% /alert %}}

##### Verify Git Config

* Why – Various config lines in the config can influence the connection, such as the SSL config or proxy settings.
* How – Perform the following command in `cmd` and store the output for contacting Support: `git config --list --show-origin`.
* Validate the output – Please be on the lookout for values `http.proxy` containing incorrect values.
* Actions to take if something is wrong – Update the config file where needed: `git config --global [key] "[value]"`.

##### Verify Full Clone Through Git CLI

* Why – Validate if a Git clone works as intended outside Studio Pro.

* How – Replace `[PROJECT_ID]` with your project ID and perform the following command in `cmd`:

  ```
  set GIT_TRACE_PACKET=1
  set GIT_TRACE=1
  set GIT_CURL_VERBOSE=1
  git clone https://git.api.mendix.com/[PROJECT_ID].git 
  ```

* Validate the output – If this succeeded, please continue with troubleshooting the [Studio Pro Connectivity](#studio-pro-connectivity).

* Actions to take if something is wrong – Save the output and try the next step below, verifying shallow clone through Git CLI.

##### Verify Shallow Clone Through Git CLI

* Why – If a full clone fails it can be due to the size of the repository. A shallow clone only retrieves all files for 1 commit, reducing the amount of data needed to transfer by magnitudes.

* How – Replace `[PROJECT_ID]` with your project ID and perform the following command in `cmd`:

  ```
  set GIT_TRACE_PACKET=1
  set GIT_TRACE=1
  set GIT_CURL_VERBOSE=1
  git clone --depth 1 https://git.api.mendix.com/[PROJECT_ID].git 
  ```

* Validate the output – If this succeeded, there is a connectivity issue causing a full clone to fail. Contact your internal IT department to discuss the situation.

* Actions to take if something is wrong – Save the output and try the next step below, verifying a shallow clone without using HTTPS.

##### Verify Shallow Clone Through Git CLI Without HTTPS

* Why – If a shallow clone fails it can still be that the SSL handling is failing. This canbe due to a proxy, ZScaler or a VPN.

* How – Replace `[PROJECT_ID]` with your project ID and perform the following command in `cmd`:

  ```
  set GIT_TRACE_PACKET=1
  set GIT_TRACE=1
  set GIT_CURL_VERBOSE=1
  git -c http.sslVerify=false clone --depth 1 https://git.api.mendix.com/[PROJECT_ID].git 
  ```

* Validate the output – If this succeeded, there is an issue with SSL handling. Please take a look at your git config.

    * If you are using a proxy – Setting up a `http.proxy` in the git config might address this issue.
    * If you are seeing a warning on SSL on windows – Setting the `http.sslbackend` to `schannel` by running the following command might improve your experience: `git config --global http.sslbackend schannel`
    * If you are using a VPN – Try again without VPN
    * If Zscaler or any other network filtering/security tool is active – Check whether SSL inspection is enabled. Try disabling SSL inspection or adding an exception for git.api.mendix.com.

* Actions to take if something is wrong – Save the output and reach out to Mendix Support with all information that you have gathered to discuss the situation.

#### Studio Pro Connectivity {#studio-pro-connectivity}

{{% alert color="info" %}}
When you reach this step in the diagnosis, you should already have confirmed that Git clone works outside Studio Pro. If this is not the case, please refer to the steps in the previous sections first.

{{% /alert %}}

From this point  the actions taken in Studio Pro should be done with debug level logs. To achieve this, start Studio Pro in the command line and run the following command adjusting the version <9.24.4.11007> to match your project: ```C:\Program Files\Mendix\9.24.4.11007\modeler>studiopro.exe --log-level=debug```.

All files from the log folder should be shared with Mendix in a Support ticket. Open **Help** > **Open Log File** to easily access the log folder.

Given that the commands through Git CLI succeeded, this will help to find out what the problem in Studio Pro is. 

##### If a Full Clone Through Git CLI Succeeds

If a full clone through Git CLI succeeds, please attempt a regular clone in Studio Pro. In case this fails, run ```netsh.exe winhttp reset proxy``` on the command line and try again. 
If it still fails, gather all files from the log and provide them to Mendix Support.

##### If a Shallow Clone Through Git CLI Succeeds

If a shallow clone through Git CLI succeeds, attempt a Partial Clone in Studio Pro, by changing the [clone type](/refguide10/clone-type/) and doing a fresh clone. In case this fails, run ```netsh.exe winhttp reset proxy``` on the command line and try again. 
If it still fails, gather all files from the Log directory and provide them to Mendix Support.

##### If a Clone Through Git CLI Without SSL Succeeds

If a Clone Through Git CLI Without SSL succeeds, temporarily disable Git sslVerify, by running ```config --global http.sslVerify false```, and attempt a fresh clone in Studio Pro. 

Re-enable Git sslVerify by running ```git config --global --unset http.sslVerify```.

Gather all files from the log and provide them to Mendix Support. Please mention that this is the result of cloning with Git sslVerify disabled.

## Read More

* [Version Control FAQ](/refguide10/version-control-faq/)
