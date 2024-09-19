---
title: "Access a Samba Share"
url: /howto9/integration/access-a-samba-share-from-the-mxcloud/
weight: 11
description: "Describes how to access a Samba share from the MxCloud and use a server name."
---

## Introduction

You can use a Samba connection to pull or push files to a Windows share. When doing this, you need to use a static IP address in the connection string. The library could support the usage of a servername, but that requires extensive configuration to specify the DNS server location, DFS address, etc. It is far more efficient to use the IP address.

This how-to teaches you how to do the following:

* Access a Samba share from the MxCloud
* Use a servername instead of an IP address

## Code Example

When connecting to a Samba share using a regular username, password, and IP address, the code below with the NTLMFileHandler is sufficient. Based on the SMB configuration and the name of the FileDocument, the FileHandler will connect to the Samba share and pull the document with the same file name.

```java
public ReadFileFromSMBDrive(SMBConfiguration SMBConfig, FileDocument DocumentParameter1)
{
    super();
    this.SMBConfig = SMBConfig;
    this.DocumentParameter1 = DocumentParameter1;
}

@Override
public Boolean executeAction() throws Exception
{
    // BEGIN USER CODE

    NTLMFileHandler fileHandler = new NTLMFileHandler(getContext(), this.SMBConfig.getDomainName(), this.SMBConfig.getUsername(), this.SMBConfig.getPassword());
    fileHandler.getSingleFile(this.SMBConfig.getImportFolder(), this.DocumentParameter1.getName(getContext()), this.DocumentParameter1.getMendixObject(), this.DocumentParameter1.getDeleteAfterDownload());;

    return true;
    // END USER CODE
}
```

## Using a Servername Instead of an IP Address

If you choose to connect to a server based on the server name instead of the IP address, you will have to enable all the properties related to this option. For details on the different WINS properties that need to be specified in order for the library to resolve the domain and the server, see this page: [https://jcifs.samba.org/src/docs/resolver.html](https://jcifs.samba.org/src/docs/resolver.html).

| Name | Resolution Properties |
| --- | --- |
| **jcifs.netbios.wins** | The IP address of the WINS server (or, more formally, NBNS). This is only required when accessing hosts on different subnets, although it is recomended if a WINS server is being used. |
| **jcifs.netbios.baddr** | The local network's broadcast address. It may be necessary to set this for certain network configurations, because the default 255.255.255.255 may otherwise throw a "Network is unreachable" `IOException`. For example, if the local host's IP address is 192.168.1.15, the broadcast address would likely be 192.168.1.255. |
| **jcifs.resolveOrder** | A comma-separated list of name resolution method identifiers that specify which methods will be used and in what order to resolve hostnames. The possible identifiers are `LMHOSTS`, `WINS`, `BCAST`, and `DNS`. |
| **jcifs.netbios.lmhosts** | The path to an LMHOSTS (LAN Manager Hosts) file containing a map of the IP addresses to hostnames. The format of this file is identical to that of the Windows LMHOSTS file format (with a few exceptions noted below.) |
| **jcifs.netbios.scope** | This is rare, but NetBIOS provides for a "scope ID" to be used in an attempt to conceal groups of machines on the same network. Ask your network administrator if a scope ID is used. If so, it must be set using this property, or the name queries will fail. |

However, the cloud edit library requires an additional property override. The DFS property is not supposed to be enabled in the Mendix cloud since the Mendix cloud cannot resolve the DFS server by default. If you choose to enable the DFS, you will need to make sure that the server will be able to resolve the DFS based on the domain name and DNS location.

| Name | Resolution Properties |
| --- | --- |
| **jcifs.smb.client.dfs.disabled** | If this property is true, the domain-based DFS referrals will be disabled. The default value is false, but the cloud-edit version has a default value of true. This property can be important in non-domain environments where domain-based DFS referrals that normally run when JCIFS first tries to resolve a path would timeout, causing a long startup delay (for example, running JCIFS only on a local machine without a network, like on a laptop). |
| **jcifs.smb.client.dfs.ttl** | The time in seconds that DFS topology information should be cached. The default value is 300 seconds (although the trusted domains list is cached for 10: timesjcifs.smb.client.dfs.ttl). |
| **jcifs.smb.client.dfs.strictView** | This property controls how JCIFS behaves if it fails to enumerate DFS roots but succeeds in enumerating shares. By default, this value is false in order to indicate that JCIFS should return the list of shares even if the DFS root enumeration fails. If this value is set to true, an exception will be thrown if the DFS information cannot be successfully retrieved (for example, an SmbAuthException due to insufficient access). |

The cloud does not allow the properties to be specified using the system properties. Therefore, you will need to specify these through Java, and before initializing any of the JCIFS classes, you will need to specify the exact `Config` options. This can be done by using the following line of code:

```shell
jcifs.Config.setProperty("jcifs.smb.client.dfs.disabled","false");
```

For more details on all the properties, see [Setting Client Properties](https://www.jcifs.org/src/docs/api/overview-summary.html#scp).

## Further Documentation

* [The Java CIFS Client Library](https://www.jcifs.org/src/docs/api/)
