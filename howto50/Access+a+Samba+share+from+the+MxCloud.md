---
title: "Access a Samba share from the MxCloud"
category: "howto50"
space: "Mendix 5 How-to's"
---
<table><thead><tr><th class="confluenceTh">Mendix Version</th><th class="confluenceTh">Create Date</th><th colspan="1" class="confluenceTh">Modified Date</th></tr></thead><tbody><tr><td class="confluenceTd">5.20</td><td class="confluenceTd">May 21, 2015 19:46</td><td colspan="1" class="confluenceTd">Oct 09, 2015 15:47</td></tr></tbody></table>



Using the Mendix Cloud and a VPN connection you will be able to use a Samba connection to pull or push files to a windows share. When doing this you need to use the static ip address in the connection string. The library could support the usage of a Server name, however that requires some extensive configuration to specify the DNS server location, DFS address, etc. It is far more efficient to use the IP Address/

## Code example

When connecting to a samba share using a regular username, password and ip-address the code below with the NTLMFileHandler is sufficient. Based on the SMB configuration and the name of the FileDocument the FileHandler will connect to the Samba share and pull the document with the same file name. 

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

## Using a servername instead of ip-address

If you choose to connect to a server based on the server name instead of the ip-address, you will have to enable all the properties related to this option. See this page: [http://www.stderr.org/doc/libjcifs-java-doc/resolver.html](http://www.stderr.org/doc/libjcifs-java-doc/resolver.html) That page describes the different WINS properties that need to be specified in order for the library to resolve the domain and the server.

<table><thead><tr><th colspan="2" class="confluenceTh">Name Resolution Properties</th></tr></thead><tbody><tr><td class="confluenceTd"><strong>jcifs.netbios.wins</strong></td><td class="confluenceTd">The IP address of the WINS server(or more formally&nbsp;<a href="http://www.stderr.org/doc/libjcifs-java-doc/wins.html" class="external-link" rel="nofollow">NBNS</a>). This is only required when accessing hosts on different subnets although it is recomended if a WINS server is being used.</td></tr><tr><td class="confluenceTd"><strong>jcifs.netbios.baddr</strong></td><td class="confluenceTd">The local network's broadcast address. It may be necessary to set this for certain network configurations because the default of 255.255.255.255 may otherwise throw a "Network is unreachable"&nbsp;<code>IOException</code>. For example if the local host's IP address is 192.168.1.15, the broadcast address would likely be 192.168.1.255.</td></tr><tr><td class="confluenceTd"><strong>jcifs.resolveOrder</strong></td><td class="confluenceTd">A comma separated list of name resolution method identifiers that specify which methods will be used and in what order to resolve hostnames. The possible identifiers are&nbsp;<code>LMHOSTS</code>,&nbsp;<code>WINS</code>,&nbsp;<code>BCAST</code>, and&nbsp;<code>DNS</code>.</td></tr><tr><td class="confluenceTd"><strong>jcifs.netbios.lmhosts</strong></td><td class="confluenceTd">The path to an lmhosts file containing a map of IP addresses to hostnames. The format of this file is identical to that of the Windows lmhosts file format with a few exceptions noted below.</td></tr><tr><td class="confluenceTd"><strong>jcifs.netbios.scope</strong></td><td class="confluenceTd">This is rare but NetBIOS provides for a "scope id" to be used in a attempt to conceal groups of machines on the same network. Ask your network administrator if scope id is used. If so, it must be set using this property or name queries will fail.</td></tr></tbody></table>

The cloud edit library however requires an additional property override. The DFS property is not supposed to be enabled in the Mendix cloud since the Mendix cloud cannot resolve the DFS server by default. If you choose to enable the DFS you will need to make sure that the server will be able to resolve the DFS, based on domain name and DNS location.

<table><thead><tr><td class="confluenceTd"><strong>jcifs.smb.client.dfs.disabled</strong></td><td class="confluenceTd">If this property is&nbsp;true, domain based DFS referrals will be disabled. The default value is false, but the cloud edit version has a default value of True. This property can be important in non-domain environments where domain-based DFS referrals that normally run when JCIFS first tries to resolve a path would timeout causing a long startup delay (e.g. running JCIFS only on the local machine without a network like on a laptop).</td></tr></thead><tbody><tr><td class="confluenceTd"><strong>jcifs.smb.client.dfs.ttl</strong></td><td class="confluenceTd">The time in seconds that DFS topology information should be cached. The default value is 300 seconds (although the trusted domains list is cached for 10 timesjcifs.smb.client.dfs.ttl).</td></tr><tr><td class="confluenceTd"><strong>jcifs.smb.client.dfs.strictView</strong></td><td class="confluenceTd">This property controls how JCIFS behaves if it fails to enumerate DFS roots but succeeds to enumerate shares. By default this value is false to indicate that JCIFS should quitely return the list of shares even if the DFS root enumeration fails. If this value is set to true, an exception will be thrown if DFS information cannot be successfully retrieved (e.g. an SmbAuthException due to insufficient access).</td></tr></tbody></table>

The cloud does not allow the properties to be specified using the system properties. Therefore you will need to specify these through Java, before initializing any of the JCIFS classes you will need to specify the exact Config options. This can be done by using the following line of code:

jcifs.Config.setProperty("jcifs.smb.client.dfs.disabled","false");

Additional information describing all the properties can be found here: [http://jcifs.samba.org/src/docs/api/overview-summary.html#scp](http://jcifs.samba.org/src/docs/api/overview-summary.html#scp)

_**Documentation:**_

*   [http://jcifs.samba.org/](http://jcifs.samba.org/)
*   [http://www.stderr.org/doc/libjcifs-java-doc/overview.html#scp](http://www.stderr.org/doc/libjcifs-java-doc/overview.html#scp)

Related content

*   [Explore our connectors and adapters](Explore+our+connectors+and+adapters)
*   [Send Custom Emails From Your App](Send+Custom+Emails+From+Your+App)
*   [Send Custom Emails From Your App](/howto6/Send+Custom+Emails+From+Your+App)
*   [Access a Samba share from the MxCloud](Access+a+Samba+share+from+the+MxCloud)