---
title: "Configuring and Using Private Connectivity"
linktitle: "Configuring and Using Private Connectivity"
url: /control-center/configure-private-connectivity/
description: "Describes the configuration steps of Private Connectivity in the Mendix Control Center."
weight: 1
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

To connect from a Mendix app to a resource on your internal network, you need to follow these steps:

1. Add a network. This is done on the Mendix platform.
2. Add an agent. This is done on the Mendix platform.
3. Install an agent. This is done on your internal infrastructure.
4. Run the agent. This is done on your internal infrastructure.
5. Expose resources. This is done on the Mendix platform.
6. Enable resources. This is done on the Mendix platform.
7. Request a connection. This is done on the Mendix platform.
8. Approve the connection. This is done on the Mendix platform.
<!-- 9. Configure DNS (optional). This is done on the Mendix platform. -->

The following sections provide details on each of the steps.

## Networks {#private-connectivity-networks}

Mendix Private Connectivity networks are the bridge between Mendix Cloud and your own infrastructure. You need at least one network to be able to connect from a Mendix app to your own infrastructure. You can, however, create multiple networks if, for example, you want to isolate your production traffic from non-production traffic.

On the **Networks** tab of the **Private Connectivity** page, you can see all the private connectivity networks associated to your company. The page shows the following information for each network:

* **Network** – The name of the network.
* **External Agents** – The number of agents that are installed on your internal infrastructure, and that are connected to the network.
* **Environments** – The number of app environments on Mendix Cloud that have at least one connection using the network.
* **Actions** – A list of actions that you can take on the network:

    * **Details**    
    <!-- * **Add DNS** -->
	* **Add Agent**
	<!-- * **Edit**
	* **Delete** -->

### Adding a Network {#private-connectivity-networks-add}

To add a new private connectivity network for your company, follow these steps:

1. On the **Private Connectivity** page, click one of these buttons, depending on your scenario:

    * If you do not yet have any networks, click **Create a Network** to launch the network wizard.    
    * If you already have a network, click **Add Network** on the **Networks** tab.

2. Read through the **Instructions** tab of the wizard, which contains a short summary of the steps required to connect from a Mendix app to a resource on your network, then click **Next**.
3. On the **Create Network** tab, provide a descriptive and recognizable name for your new network, then click **Create**.
4. On the **Add Agent** tab, provide a descriptive and recognizable name for the new agent, then click **Add**.    
   Refer to [Adding an Agent](#private-connectivity-agents-add) for details.

Your network and agent are now added. You can continue with [installing the agent](#private-connectivity-agents-install) on your infrastructure. <!-- and [configuring the DNS](#private-connectivity-networks-dns) for your network. -->

### Viewing and Editing Networks {#private-connectivity-networks-details}

To view and edit an existing network, follow these steps:

1. On the **Networks** tab, find the network for which you want to view details, or that you want to edit.
2. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}).
3. Select **Details**. The details of that network are displayed:

    * **Network** – The name you gave to the network. This field is editable.
    * **Network ID** – The internal ID of your network. You can copy this if, for example, you want to provide it in a support ticket for any issues with the network.
    * **External Agents** – A list of all external agents that run on your own internal infrastructure, and that have access to the network.    
	  This field also displays the status of each agent.
    <!-- * **DNS Details** – A list of domains for which you have [configured DNS](#private-connectivity-networks-dns). -->
    * **Environment Details** – A list of app environments that are using the network to connect to a resource, as well as the environment's status.
    <!-- * **Show Logs** – This allows you to see [the flow logs](https://tailscale.com/kb/1219/network-flow-logs) for your network. They can help you troubleshoot issues with connectivity on your network. -->

4. Click **Save** to save any changes you have made.

<!-- ### Configuring DNS for your Network {#private-connectivity-networks-dns}

If your Mendix app connects to external resources, you probably want to do this using host names. DNS (Domain Name System) servers, also known as nameservers, translate a host name, like `www.mendix.com` to an IP address, like `192.168.1.1`. If the DNS record with that translation is on a public nameserver, Mendix apps can access those by default with no issues. However, if you want to connect to a private host name, like `mydatabase.myinternalnetwork.net`, where the DNS record for this host name is stored on a private nameserver, your Mendix app will not be able to resolve the host name to an IP address, thus making the host inaccessible for the Mendix application.

With Mendix Cloud Private Connectivity, you can configure your network to use restricted nameservers for specific domains. Using a restricted nameserver is also known as split DNS. If you configure an internal nameserver for a domain, for example `myinternalnetwork.net`, any DNS request for host names within that domain, for example `mydatabase.myinternalnetwork.net`, will be forwarded to the configured nameserver. There, the host name will be resolved to an IP address. This will allow you to use internal host names to connect to resources on your internal infrastructure, without having to add the DNS records for those internal resources on a public DNS server.

To configure split DNS for a new domain on your network, follow these steps:

1. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}) for a network, then select **Add DNS**.
2. In the **Edit DNS** dialog box, click **Add New Domain**.
3. Provide the following information:

    * **Domain** – Provide the domain for which the nameservers should be used, such as `myinternalnetwork.net`.
    * **Nameservers** – Provide the IP address of the nameserver to use to resolve DNS queries for the provided domain. You can add multiple nameserver IP addresses for high availability.

4. Click **Save** to save changes.

To remove split DNS for a domain on your network, follow these steps:

1. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}) for a network, then select **Add DNS**.
2. In the **Edit DNS** dialog box, find the domain for which you want to remove the DNS, then click **Delete Domain**.
3. Confirm that you want to delete the domain.

To add a nameserver for a domain that you have already added to your network, follow these steps:

1. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}) for a network, then select **Add DNS**.
2. In the **Edit DNS** dialog box, find the domain you want to add a nameserver for, then click **Add New Nameserver**.
3. Provide the following information:

    * **Nameservers** – Provide the IP address of the nameserver to use to resolve DNS queries for the provided domain. You can add multiple nameserver IP addresses for high availability.

4. Click **Save** to save changes.

To remove a nameserver for a domain that you have already added to your network, follow these steps:

1. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}) for a network, then select **Edit DNS**.
2. In the **Edit DNS** dialog box, find the domain that you want to delete a nameserver for.
3. Click **Delete Nameserver** for the nameserver you want to delete.
4. Confirm that you want to delete the nameserver.

### Deleting Networks {#private-connectivity-networks-delete}

To delete a network, follow these steps:

1. On the **Networks** tab, find the network that you want to delete.
2. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}), then select **Delete**.
3. Confirm that you want to delete the network.

When you delete a network, the following actions also occur:

* All agents connected to that network are deleted.
* The agents' authentication keys are revoked.
* All resources exposed through the agents and all connections to those resources are removed. 
* Approved connections are broken immediately. 

{{% alert color="warning" %}}
When you delete a network, agents that are connected to your infrastructure are not uninstalled.    
Refer to the instructions for [uninstalling an agent](#private-connectivity-agents-uninstall). 
{{% /alert %}} -->

## Agents {#private-connectivity-agents}

To connect your infrastructure to your private connectivity networks, you need agents.     
At least one agent is necessary to be able to connect from a Mendix app to your infrastructure, but you can connect multiple agents to each network.

On the **Agents** tab of the **Private Connectivity** page, you can see all the agents associated to your company. The page displays the following information for each agent:

* **Agent** – The name of the agent.
* **Network** – The network to which the agent is connected.
* **Resources** – The number of resources exposed through the agent.
* **Status (Last seen)** – The status of the agent, or the last time it was connected to the network:

    * **Connected** – The agent is currently connected to the network.
    * Date and time – The last time the agent was connected to the network. The agent is not connected at this time.

### Adding an Agent {#private-connectivity-agents-add}

You can only add agents if you have at least one private connectivity network. Refer to [Adding a Network](#private-connectivity-networks-add) to create a network if you have not done so already.

To add a new agent to a network, follow these steps:

1. Launch the agent wizard by choosing one of the following options:

    * On the **Networks** tab, select a network to which you want to add an agent, then click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}), and select **Add Agent**.
    * On the **Agents** tab, click **Add Agent**.

2. On the **Add Agent** tab, select the network to which you want to add the agent.
3. Provide a descriptive and recognizable name for the agent.
4. Select the infrastructure type for your agent.
5. Click **Create**.

Your agent is now added. You can continue with [installing the agent](#private-connectivity-agents-install) in your own infrastructure.

### Viewing and Editing Agents {#private-connectivity-agents-details}

To view and edit an existing agent, follow these steps:

1. On the **Agents** tab, find the agent for which you want to view details, or that you want to edit.
2. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}), then select **Details**. The details of that agent are displayed:

    * **Agent Name** – The name you gave to the agent. This field is editable.
    * **Agent ID** – The internal ID of your agent. You can copy this if, for example, you want to provide it in a support ticket for any issues with the agent.
    * **Agent Key** – The authentication key of your agent. You can copy this authentication key for use when [starting an agent](#private-connectivity-agents-run).     
	  This key should be treated as confidential.
    * **Network** – The network to which the agent is connected.
    * **Status (Last seen)** – The status of the agent, or the last time it was connected to the network:

        * **Connected** – The agent is currently connected to the network.
        * Date and time – The last time the agent was connected to the network. The agent is not connected at this time.

    * **Resource Details** – A list of the resources exposed via the agent.
    * **DERP Details** – Information on the preferred Tailscale [Designated Encrypted Relay for Packets (DERP) server](https://tailscale.com/kb/1232/derp-servers).

3. Click **Save** to save any changes you have made.

### Deleting an Agent {#private-connectivity-agents-delete}

To delete an existing agent, follow these steps:

1. On the **Agents** tab, find the agent that you want to delete.
2. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}), then select **Delete**.
3. Confirm that you want to delete the agent.

When you delete an agent, the following actions occur automatically:

* The agent's authentication key is revoked.
* All resources exposed through the agent and all connections to those resources are removed. 
* Approved connections are broken immediately.

{{% alert color="warning" %}}
Deleting an agent does not uninstall the agent from your own infrastructure.    
Refer to the instructions for [uninstalling an agent](#private-connectivity-agents-uninstall). 
{{% /alert %}}

### Installing an Agent on your Infrastructure {#private-connectivity-agents-install}

To establish a connection between your network and your infrastructure, you must install an agent on this infrastructure. Installing an agent is typically done by your internal IT department, Infra department, or Network team.

#### Installing an Agent on a Windows Server {#private-connectivity-agents-install-windows}

To install an agent on a Windows server, follow these steps:

1. Access the [Tailscale Download page](https://tailscale.com/download/windows).
2. Select **Windows**, then click **Download Tailscale for Windows**.    
3. Once the Tailscale installer for Windows is downloaded, run the installer to install the agent. 

Continue with [starting the agent](#private-connectivity-agents-run).

#### Installing an Agent on a Linux Server {#private-connectivity-agents-install-linux}

To install an agent on a Linux server, run the following script on the server where you want to install the agent:

```bash Linux
curl -fsSL https://tailscale.com/install.sh | sh
```

Alternatively, open the [Tailscale Download page for Linux](https://tailscale.com/download/linux) for instructions on manually installing the Tailscale agent on your specific Linux distribution.

Continue with [starting the agent](#private-connectivity-agents-run).

### Starting an Agent on your Infrastructure {#private-connectivity-agents-run}

Once you have installed your agent, you can start the agent and connect to your network. To do this, you need an authentication key, which was created when you [added the agent](#private-connectivity-agents-add). You can find and copy the authentication key for your agent on [the agent details page](#private-connectivity-agents-details).

To start an agent and to connect it to your network, run the following script on the machine where the agent is installed.    
You need to replace `AUTH_KEY` with the authentication key of your agent.

```
tailscale up --auth-key=<AUTH_KEY>
```

### Uninstalling an Agent from your Infrastructure {#private-connectivity-agents-uninstall}

After [deleting an agent](#private-connectivity-agents-delete), you can uninstall it from your infrastructure. Uninstalling an agent is typically done by your internal IT department, Infra department, or Network team.

#### Uninstalling an Agent on a Windows server {#private-connectivity-agents-uninstall-windows}

Tailscale for Windows can be uninstalled like any Windows app, by using the Windows Control Panel:

1. Go to **Settings**, then to **Apps**.
2. Find **Tailscale**, then press the **Uninstall** button.

If you want to completely delete Tailscale, destroying any state or local information, you can also remove the files at the following paths:

* `C:\ProgramData\Tailscale`
* `C:\Users\%USERNAME%\AppData\Local\Tailscale`
* `C:\Windows\System32\config\systemprofile\AppData\Local\Tailscale`

The path under `System32` was only used in older versions of the Tailscale client, and may not be present on your system.

#### Uninstalling an Agent on a Linux server {#private-connectivity-agents-uninstall-linux}

You can uninstall Tailscale by using the uninstall command of the package manager you used to install the binary in the first place.

* For all Ubuntu and Debian versions, uninstall using `apt-get`:

   ```bash Linux
   sudo apt-get remove tailscale
   ```

* For CentOS 7 and Amazon Linux 2, uninstall using `yum`:

   ```bash Linux
   sudo yum remove tailscale
   ```

* For openSUSE Leap 15.1, 15.2, and openSUSE Tumbleweed, uninstall using `zypper`:

   ```bash Linux
   sudo zypper rm tailscale
   ```

* For CentOS 8, CentOS Stream 9, RHEL 8, and Fedora, uninstall using `dnf`:

   ```bash Linux
   sudo dnf remove tailscale
   ```

If you want to completely delete Tailscale, destroying any state or local information, you can also remove the file at the following path: `/var/lib/tailscale/tailscaled.state`.

## Resources {#private-connectivity-resources}

Resources are services, such as databases or applications, on your infrastructure that are exposed via your agents and that are accessible via your networks. Mendix apps can be connected to these resources.

On the **Resources** tab of the **Private Connectivity** page, you can see all the exposed resources of your company.     
The page displays the following information for each resource:

* **Resource** – The name of the resource.
* **Agent** – The name of the agent that exposes the resource.
* **Network** – The name of the network to which the agent exposing the resource is connected.
* **Status** – The status of the resource. This can be one of the following:

    * Enabled – Technical Contacts can request connections to the resource.
	* Disabled – Technical Contacts cannot request connections to the resource.

* **Environments** – The number of app environments on Mendix Cloud that have an approved connection to the resource.

### Viewing and Editing Resources {#private-connectivity-resources-details}

To view and edit a resource, follow these steps:

1. On the **Resources** tab, find the resource for which you want to view details, or that you want to edit.
2. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}), then select **Details**. 
   The details of that resource are displayed:

    * **Resource** – The name you gave to the resource. This field is editable.
    * **Resource ID** – The internal ID of your resource. You can copy this if, for example, you want to provide it in a support ticket for any issues with the agent.
    * **Resource Type** – The type of resource, which can be:

        * **Route** – The resource is an exposed subnet route.

    * **Route** – The exposed IP range. This is only displayed if the resource type is **Route**.
    * **Agent** – The name of the agent that exposes the resource.
    * **Network** – The name of the network to which the agent exposing the resource is connected.
    * **Status** – The status of the resource. This can be one of the following:

	    * **Enabled** – Users can request connections to the resource.
	    * **Disabled** – Users cannot request connections to the resource.

    * **Environment Details** – A list of app environments that have an approved connection to the resource.

3. Click **Save** to save any changes you have made.

### Exposing Resources {#private-connectivity-resources-expose}

Before you can connect to resources running on your own infrastructure, you have to expose these resources through an agent. This requires you to install an agent on the machine running the resource, or on a machine that has access to the resource.

Mendix Cloud Private Connectivity currently supports exposing physical [subnet routes](https://tailscale.com/kb/1019/subnets) to your network via an agent. You can expose a single IP range, such as `192.0.2.0/24`, or multiple IP ranges separated by a colon, such as `192.0.2.0/24,198.51.100.0/24`.

#### Exposing Subnet Routes on a Windows Server {#private-connectivity-resources-expose-routes-windows}

To expose subnet routes for an agent that is already running, run the following script on the machine where the agent is installed.    
Replace `IP_RANGE` with the IP ranges you want to expose:

```shell Windows
tailscale set --advertise-routes=<IP_RANGE>
```

You can also configure the exposed subnet routes when starting the agent.     
In that case, use the following script, replacing `AUTH_KEY` with the authentication key of your agent, and `IP_RANGE` with the IP ranges you want to expose:

```shell Windows
tailscale up --auth-key=<AUTH_KEY> --advertise-routes=<IP_RANGE>
```

#### Exposing Subnet Routes on a Linux Server {#private-connectivity-resources-expose-routes-linux}

To expose subnet routes for an agent on a Linux server, follow these steps:

1. **Important**: Make sure you [enable IP forwarding](https://tailscale.com/kb/1019/subnets?tab=linux#enable-ip-forwarding). Not enabling IP forwarding means you will not be able to connect to your resources.
2. Run the following script on the machine where the agent is installed, and replace `IP_RANGE` with the IP ranges you want to expose:

   ```shell Linux
   sudo tailscale set --advertise-routes=<IP_RANGE>
   ```

You can also configure the exposed subnet routes when starting the agent. In that case, use the following script, replacing `AUTH_KEY` with the authentication key of your agent, and `IP_RANGE` with the IP ranges you want to expose:

```shell Linux
sudo tailscale up --auth-key=<AUTH_KEY> --advertise-routes=<IP_RANGE>
```

### Enabling and Disabling Resources {#private-connectivity-resources-enable-disable}

Once resources are [exposed](#private-connectivity-resources-expose), they must be enabled by a Mendix Admin. Users can only request connections to resources once they have been enabled.

To enable a resource, follow these steps:

1. On the **Resources** tab, find the resource you want to enable.
2. Click **Enable**.

To disable a resource, follow these steps: 

1. On the **Resources** tab, find the resource you want to disable.
2. Click **Disable**.

## Connections {#private-connectivity-connections}

Mendix Private Connectivity connections allow applications on Mendix Cloud to connect to Mendix Private Connectivity resources over Mendix Private Connectivity networks.     
A connection has to be requested and approved before an application on Mendix Cloud can connect to the resource.     
An application on Mendix Cloud can have multiple connections to multiple resources.

On the **Connections** tab of the **Private Connectivity** page, you can see all the connections associated to your company. The page displays the following information for each connection: 

* **App** – The name of the app for the connection.
* **Environment** – The name of the environment for the connection.
* **Network** – The network for the connection.
* **Resource** – The name of the resource for the connection.
* **Status** – The status of the connection. This can be one of the following:

    * **Pending** – The connection was requested, but not yet approved. The app environment cannot connect to the resource using this connection.
	* **Approved** – The connection is approved. The app environment can connect to the resource using this connection.
	* **Rejected** – The connection is rejected. The app environment cannot connect to the resource using this connection.

    For details on how Technical Contacts request connections for a specific environment, refer to [Connecting to External Resources](/developerportal/deploy/connecting-to-external-resource/).

### Viewing Connection Details {#private-connectivity-connections-details}

To view an existing connection, follow these steps:

1. On the **Connections** tab, find the connection for which you want to view details.
2. Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}), then select **Details**. The details of that connection are displayed:

    * **Request Details** – The details of the connections request:

	    * **Name** – The name of the user that requested this connection.
	    * **Status** – The status of the connection request. This can be one of the following:

		    * **Pending** – The connection was requested, but not yet approved. The app environment cannot connect to the resource using this connection.
		    * **Approved** – The connection is approved. The app environment can connect to the resource using this connection.
		    * **Rejected** – The connection is rejected. The app environment cannot connect to the resource using this connection.

	    * **Date** – The date and time when the connection was requested.

    * **App** – The name of the app for the connection.
    * **Environment** – The name of the environment for the connection.
    * **Network** – The network for the connection.
    * **Resource** – The name of the resource for the connection.
    * **Resource ID** – The internal ID of your resource. You can copy this if, for example, you want to provide it in a support ticket.
    * **Agent** – The name of the agent for the connection.
    * **Agent ID** – The internal ID of the agent. You can copy this if, for example, you want to provide it in a support ticket.
    * **Network** – The name of the network for the connection.
    * **Network ID** – The internal ID of the network. You can copy this if, for example, you want to provide it in a support ticket.

## Approving and Rejecting Connections {#private-connectivity-connections}

Once a connection is requested, it must be approved before the app environment can connect to the resource.

To approve a connection, follow these steps:

1. On the **Connections** tab, find the connection you want to enable.
2. Click **Approve**.

{{% alert color="warning" %}}
If this is the first connection that is approved for an app environment, the Technical Contact must [redeploy](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/) the environment to be able to use the connection. 
{{% /alert %}}

To disable a connection, follow these steps:

1. On the **Connections** tab, find the connection you want to disable.
2. Click **Reject**.

<!-- ## Activities

On the **Activities** tab, you can view a log of activities performed on your Private Connectivity assets. -->

## Private Connectivity Routing

The Mendix internal systems operate on the following subnets:

* 10.10.0.0/16
* 10.11.0.0/16
* 172.20.0.0/16

As such, when you expose a subnet or a single IP address, it must not conflict with our private IP ranges.     
If you absolutely must use the subnets on which Mendix operates, please configure [Network address translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) on your infrastructure.
