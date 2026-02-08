---
title: "프라이빗 연결 구성 및 사용"
linktitle: "프라이빗 연결 구성 및 사용"
url: /control-center/configure-private-connectivity/
description: "Mendix Control Center에서 프라이빗 연결의 구성 단계를 설명합니다."
weight: 1
beta: true
---

{{% alert color="warning" %}}
이 기능은 공개 베타 버전입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하십시오.
{{% /alert %}}

## 소개

Mendix 앱에서 내부 네트워크의 리소스에 연결하려면 다음 단계를 따라야 합니다:

1. 네트워크를 추가합니다. Mendix 플랫폼에서 수행합니다.
2. 에이전트를 추가합니다. Mendix 플랫폼에서 수행합니다.
3. 에이전트를 설치합니다. 내부 인프라에서 수행합니다.
4. 에이전트를 실행합니다. 내부 인프라에서 수행합니다.
5. 리소스를 노출합니다. 내부 인프라에서 수행합니다.
6. 리소스를 활성화합니다. Mendix 플랫폼에서 수행합니다.
7. 연결을 요청합니다. Mendix 플랫폼에서 수행합니다.
8. 연결을 승인합니다. Mendix 플랫폼에서 수행합니다.
<!-- 9. Configure DNS (optional). This is done on the Mendix platform. -->

다음 섹션에서는 각 단계에 대한 세부 정보를 제공합니다.

## 네트워크 {#private-connectivity-networks}

Mendix 프라이빗 연결 네트워크는 Mendix Cloud와 자체 인프라 간의 브리지입니다. Mendix 앱에서 자체 인프라에 연결하려면 최소 하나의 네트워크가 필요합니다. 그러나 예를 들어 프로덕션 트래픽을 비프로덕션 트래픽과 격리하려는 경우 여러 네트워크를 만들 수 있습니다.

**프라이빗 연결** 페이지의 **네트워크** 탭에서 회사와 관련된 모든 프라이빗 연결 네트워크를 볼 수 있습니다. 페이지에는 각 네트워크에 대해 다음 정보가 표시됩니다:

* **네트워크** – 네트워크의 이름입니다.
* **외부 에이전트** – 내부 인프라에 설치되어 네트워크에 연결된 에이전트의 수입니다.
* **환경** – 네트워크를 사용하여 연결이 하나 이상 있는 Mendix Cloud의 앱 환경 수입니다.
* **작업** – 네트워크에 대해 수행할 수 있는 작업 목록입니다:

    * **세부 정보**    
    <!-- * **Add DNS** -->
    * **에이전트 추가**
    <!-- * **Edit**
	* **Delete** -->

### 네트워크 추가 {#private-connectivity-networks-add}

회사에 새 프라이빗 연결 네트워크를 추가하려면 다음 단계를 따르십시오:

1. **프라이빗 연결** 페이지에서 시나리오에 따라 다음 버튼 중 하나를 클릭하십시오:

    * 아직 네트워크가 없는 경우 **네트워크 생성**을 클릭하여 네트워크 마법사를 시작하십시오.
    * 이미 네트워크가 있는 경우 **네트워크** 탭에서 **네트워크 추가**를 클릭하십시오.

2. 마법사의 **안내** 탭을 읽으십시오. Mendix 앱에서 네트워크의 리소스에 연결하는 데 필요한 단계의 간략한 요약이 포함되어 있습니다. 그런 다음 **다음**을 클릭하십시오.
3. **네트워크 생성** 탭에서 새 네트워크에 대한 설명적이고 인식 가능한 이름을 제공한 다음 **생성**을 클릭하십시오.
4. **에이전트 추가** 탭에서 새 에이전트에 대한 설명적이고 인식 가능한 이름을 제공한 다음 **추가**를 클릭하십시오.
   자세한 내용은 [에이전트 추가](#private-connectivity-agents-add)를 참조하십시오.

네트워크와 에이전트가 추가되었습니다. 인프라에 [에이전트를 설치](#private-connectivity-agents-install)하여 계속할 수 있습니다. <!-- and [configuring the DNS](#private-connectivity-networks-dns) for your network. -->

### 네트워크 보기 및 편집 {#private-connectivity-networks-details}

기존 네트워크를 보고 편집하려면 다음 단계를 따르십시오:

1. **네트워크** 탭에서 세부 정보를 보거나 편집하려는 네트워크를 찾으십시오.
2. **추가 옵션**({{< icon name="three-dots-menu-horizontal" >}})을 클릭하십시오.
3. **세부 정보**를 선택하십시오. 해당 네트워크의 세부 정보가 표시됩니다:

    * **네트워크** – 네트워크에 지정한 이름입니다. 이 필드는 편집 가능합니다.
    * **네트워크 ID** – 네트워크의 내부 ID입니다. 예를 들어 네트워크 문제에 대한 지원 티켓에 제공하려는 경우 복사할 수 있습니다.
    * **외부 에이전트** – 자체 내부 인프라에서 실행되며 네트워크에 액세스할 수 있는 모든 외부 에이전트 목록입니다.
      이 필드에는 각 에이전트의 상태도 표시됩니다.
    <!-- * **DNS Details** – A list of domains for which you have [configured DNS](#private-connectivity-networks-dns). -->
    * **환경 세부 정보** – 네트워크를 사용하여 리소스에 연결하는 앱 환경 목록과 환경의 상태입니다.
    <!-- * **Show Logs** – This allows you to see [the flow logs](https://tailscale.com/kb/1219/network-flow-logs) for your network. They can help you troubleshoot issues with connectivity on your network. -->

4. 변경 사항을 저장하려면 **저장**을 클릭하십시오.

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

## 에이전트 {#private-connectivity-agents}

인프라를 프라이빗 연결 네트워크에 연결하려면 에이전트가 필요합니다.
Mendix 앱에서 인프라에 연결하려면 최소 하나의 에이전트가 필요하지만, 각 네트워크에 여러 에이전트를 연결할 수 있습니다.

**프라이빗 연결** 페이지의 **에이전트** 탭에서 회사와 관련된 모든 에이전트를 볼 수 있습니다. 페이지에는 각 에이전트에 대해 다음 정보가 표시됩니다:

* **에이전트** – 에이전트의 이름입니다.
* **네트워크** – 에이전트가 연결된 네트워크입니다.
* **리소스** – 에이전트를 통해 노출된 리소스의 수입니다.
* **상태(마지막 확인)** – 에이전트의 상태 또는 네트워크에 마지막으로 연결된 시간입니다:

    * **연결됨** – 에이전트가 현재 네트워크에 연결되어 있습니다.
    * 날짜 및 시간 – 에이전트가 네트워크에 마지막으로 연결된 시간입니다.

### 에이전트 추가 {#private-connectivity-agents-add}

프라이빗 연결 네트워크가 하나 이상 있는 경우에만 에이전트를 추가할 수 있습니다. 아직 네트워크를 만들지 않은 경우 [네트워크 추가](#private-connectivity-networks-add)를 참조하여 네트워크를 만드십시오.

네트워크에 새 에이전트를 추가하려면 다음 단계를 따르십시오:

1. 다음 옵션 중 하나를 선택하여 에이전트 마법사를 시작하십시오:

    * **네트워크** 탭에서 에이전트를 추가할 네트워크를 선택한 다음 **추가 옵션**({{< icon name="three-dots-menu-horizontal" >}})을 클릭하고 **에이전트 추가**를 선택하십시오.
    * **에이전트** 탭에서 **에이전트 추가**를 클릭하십시오.

2. **에이전트 추가** 탭에서 에이전트를 추가할 네트워크를 선택하십시오.
3. 에이전트의 인프라 유형을 선택하십시오.
4. 자체 인프라에 [에이전트를 설치](#private-connectivity-agents-install)하여 계속하십시오.

### 에이전트 보기 및 편집 {#private-connectivity-agents-details}

기존 에이전트를 보고 편집하려면 다음 단계를 따르십시오:

1. **에이전트** 탭에서 세부 정보를 보거나 편집하려는 에이전트를 찾으십시오.
2. **추가 옵션**({{< icon name="three-dots-menu-horizontal" >}})을 클릭한 다음 **세부 정보**를 선택하십시오. 해당 에이전트의 세부 정보가 표시됩니다:

    * **에이전트 이름** – 에이전트에 지정한 이름입니다. 이 필드는 편집 가능합니다.
    * **에이전트 ID** – 에이전트의 내부 ID입니다. 예를 들어 에이전트 문제에 대한 지원 티켓에 제공하려는 경우 복사할 수 있습니다.
    * **네트워크** – 에이전트가 연결된 네트워크입니다.
    * **상태(마지막 확인)** – 에이전트의 상태 또는 네트워크에 마지막으로 연결된 시간입니다:

        * **연결됨** – 에이전트가 현재 네트워크에 연결되어 있습니다.
        * 날짜 및 시간 – 에이전트가 네트워크에 마지막으로 연결된 시간입니다. 현재 에이전트가 연결되어 있지 않습니다.

    * **리소스 세부 정보** – 에이전트를 통해 노출된 리소스 목록입니다.
    <!-- * **DERP Details** – Information on the preferred Tailscale [Designated Encrypted Relay for Packets (DERP) server](https://tailscale.com/kb/1232/derp-servers). -->

3. 변경 사항을 저장하려면 **저장**을 클릭하십시오.

<!-- ### Deleting an Agent {#private-connectivity-agents-delete}

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
{{% /alert %}} -->

### 인프라에 에이전트 설치 {#private-connectivity-agents-install}

네트워크와 인프라 간의 연결을 설정하려면 이 인프라에 에이전트를 설치해야 합니다. 에이전트 설치는 일반적으로 내부 IT 부서, 인프라 부서 또는 네트워크 팀에서 수행합니다.

#### Windows 서버에 에이전트 설치 {#private-connectivity-agents-install-windows}

Windows 서버에 에이전트를 설치하려면 다음 단계를 따르십시오:

1. [Tailscale 다운로드 페이지](https://tailscale.com/download/windows)에 접속하십시오.
2. **Windows**를 선택한 다음 **Download Tailscale for Windows**를 클릭하십시오.
3. Windows용 Tailscale 설치 프로그램이 다운로드되면 설치 프로그램을 실행하여 에이전트를 설치하십시오.

[에이전트 시작](#private-connectivity-agents-run)으로 계속하십시오.

#### Linux 서버에 에이전트 설치 {#private-connectivity-agents-install-linux}

Linux 서버에 에이전트를 설치하려면 에이전트를 설치할 서버에서 다음 스크립트를 실행하십시오:

```bash Linux
curl -fsSL https://tailscale.com/install.sh | sh
```

또는 [Linux용 Tailscale 다운로드 페이지](https://tailscale.com/download/linux)를 열어 특정 Linux 배포판에 Tailscale 에이전트를 수동으로 설치하는 방법에 대한 지침을 확인하십시오.

[에이전트 시작](#private-connectivity-agents-run)으로 계속하십시오.

### 인프라에서 에이전트 시작 {#private-connectivity-agents-run}

에이전트를 설치한 후 에이전트를 시작하고 네트워크에 연결할 수 있습니다. 이를 위해서는 [에이전트를 추가](#private-connectivity-agents-add)할 때 생성된 인증 키가 필요합니다.

에이전트를 시작하고 네트워크에 연결하려면 에이전트가 설치된 머신에서 다음 스크립트를 실행하십시오.
`AUTH_KEY`를 에이전트의 인증 키로 교체해야 합니다.

```You can expose a single IP range
tailscale up --auth-key=<AUTH_KEY>
```

### 인프라에서 에이전트 제거 {#private-connectivity-agents-uninstall}

에이전트 제거는 일반적으로 내부 IT 부서, 인프라 부서 또는 네트워크 팀에서 수행합니다.

#### Windows 서버에서 에이전트 제거 {#private-connectivity-agents-uninstall-windows}

Windows용 Tailscale은 Windows 제어판을 사용하여 다른 Windows 앱처럼 제거할 수 있습니다:

1. **설정**으로 이동한 다음 **앱**으로 이동하십시오.
2. **Tailscale**을 찾은 다음 **제거** 버튼을 누르십시오.

Tailscale을 완전히 삭제하여 모든 상태 또는 로컬 정보를 파괴하려면 다음 경로의 파일도 제거할 수 있습니다:

* `C:\ProgramData\Tailscale`
* `C:\Users\%USERNAME%\AppData\Local\Tailscale`
* `C:\Windows\System32\config\systemprofile\AppData\Local\Tailscale`

`System32` 아래의 경로는 이전 버전의 Tailscale 클라이언트에서만 사용되었으며 시스템에 없을 수 있습니다.

#### Linux 서버에서 에이전트 제거 {#private-connectivity-agents-uninstall-linux}

처음에 바이너리를 설치하는 데 사용한 패키지 관리자의 제거 명령을 사용하여 Tailscale을 제거할 수 있습니다.

* 모든 Ubuntu 및 Debian 버전의 경우 `apt-get`을 사용하여 제거하십시오:

   ```bash Linux
   sudo apt-get remove tailscale
   ```

* CentOS 7 및 Amazon Linux 2의 경우 `yum`을 사용하여 제거하십시오:

   ```bash Linux
   sudo yum remove tailscale
   ```

* openSUSE Leap 15.1, 15.2 및 openSUSE Tumbleweed의 경우 `zypper`를 사용하여 제거하십시오:

   ```bash Linux
   sudo zypper rm tailscale
   ```

* CentOS 8, CentOS Stream 9, RHEL 8 및 Fedora의 경우 `dnf`를 사용하여 제거하십시오:

   ```bash Linux
   sudo dnf remove tailscale
   ```

Tailscale을 완전히 삭제하여 모든 상태 또는 로컬 정보를 파괴하려면 다음 경로의 파일도 제거할 수 있습니다: `/var/lib/tailscale/tailscaled.state`.

## 리소스 {#private-connectivity-resources}

리소스는 에이전트를 통해 노출되고 네트워크를 통해 접근할 수 있는 인프라의 데이터베이스 또는 애플리케이션과 같은 서비스입니다. Mendix 앱을 이러한 리소스에 연결할 수 있습니다.

**프라이빗 연결** 페이지의 **리소스** 탭에서 회사의 모든 노출된 리소스를 볼 수 있습니다.
페이지에는 각 리소스에 대해 다음 정보가 표시됩니다:

* **리소스** – 리소스의 이름입니다.
* **에이전트** – 리소스를 노출하는 에이전트의 이름입니다.
* **네트워크** – 리소스를 노출하는 에이전트가 연결된 네트워크의 이름입니다.
* **상태** – 리소스의 상태입니다. 다음 중 하나일 수 있습니다:

    * 활성화됨 – 기술 담당자가 리소스에 대한 연결을 요청할 수 있습니다.
    * 비활성화됨 – 기술 담당자가 리소스에 대한 연결을 요청할 수 없습니다.

* **환경** – 리소스에 대한 승인된 연결이 있는 Mendix Cloud의 앱 환경 수입니다.

### 리소스 보기 및 편집 {#private-connectivity-resources-details}

리소스를 보고 편집하려면 다음 단계를 따르십시오:

1. **리소스** 탭에서 세부 정보를 보거나 편집하려는 리소스를 찾으십시오.
2. **추가 옵션**({{< icon name="three-dots-menu-horizontal" >}})을 클릭한 다음 **세부 정보**를 선택하십시오.
   해당 리소스의 세부 정보가 표시됩니다:

    * **리소스** – 리소스에 지정한 이름입니다. 이 필드는 편집 가능합니다.
    * **리소스 ID** – 리소스의 내부 ID입니다. 예를 들어 에이전트 문제에 대한 지원 티켓에 제공하려는 경우 복사할 수 있습니다.
    * **리소스 유형** – 리소스 유형으로 다음이 될 수 있습니다:

        * **Route** – 리소스가 노출된 서브넷 경로입니다.

    * **Route** – 노출된 IP 범위입니다. 리소스 유형이 **Route**인 경우에만 표시됩니다.
    * **에이전트** – 리소스를 노출하는 에이전트의 이름입니다.
    * **네트워크** – 리소스를 노출하는 에이전트가 연결된 네트워크의 이름입니다.
    * **상태** – 리소스의 상태입니다. 다음 중 하나일 수 있습니다:

        * **활성화됨** – 사용자가 리소스에 대한 연결을 요청할 수 있습니다.
        * **비활성화됨** – 사용자가 리소스에 대한 연결을 요청할 수 없습니다.

    * **환경 세부 정보** – 리소스에 대한 승인된 연결이 있는 앱 환경 목록입니다.

3. 변경 사항을 저장하려면 **저장**을 클릭하십시오.

### 리소스 노출 {#private-connectivity-resources-expose}

자체 인프라에서 실행되는 리소스에 연결하기 전에 에이전트를 통해 이러한 리소스를 노출해야 합니다. 이를 위해서는 리소스를 실행하는 머신 또는 리소스에 액세스할 수 있는 머신에 에이전트를 설치해야 합니다.

Mendix Cloud 프라이빗 연결은 현재 에이전트를 통해 네트워크에 물리적 [서브넷 경로](https://tailscale.com/kb/1019/subnets)를 노출하는 것을 지원합니다. 노출할 수 있는 것은 다음과 같습니다:

* 단일 IP 범위, 예: `192.0.2.0/24`
* 콜론으로 구분된 여러 IP 범위, 예: `192.0.2.0/24,198.51.100.0/24`
* 단일 IP 주소, 예: `10.100.0.5/32`

#### Windows 서버에서 서브넷 경로 노출 {#private-connectivity-resources-expose-routes-windows}

이미 실행 중인 에이전트에 대한 서브넷 경로를 노출하려면 에이전트가 설치된 머신에서 다음 스크립트를 실행하십시오.
`IP_RANGE`를 노출하려는 IP 범위로 교체하십시오:

```shell Windows
tailscale set --advertise-routes=<IP_RANGE>
```

에이전트를 시작할 때 노출된 서브넷 경로를 구성할 수도 있습니다.
이 경우 `AUTH_KEY`를 에이전트의 인증 키로, `IP_RANGE`를 노출하려는 IP 범위로 교체하여 다음 스크립트를 사용하십시오:

```shell Windows
tailscale up --auth-key=<AUTH_KEY> --advertise-routes=<IP_RANGE>
```

#### Linux 서버에서 서브넷 경로 노출 {#private-connectivity-resources-expose-routes-linux}

Linux 서버에서 에이전트에 대한 서브넷 경로를 노출하려면 다음 단계를 따르십시오:

1. **중요**: [IP 포워딩을 활성화](https://tailscale.com/kb/1019/subnets?tab=linux#enable-ip-forwarding)해야 합니다. IP 포워딩을 활성화하지 않으면 리소스에 연결할 수 없습니다.
2. 에이전트가 설치된 머신에서 다음 스크립트를 실행하고 `IP_RANGE`를 노출하려는 IP 범위로 교체하십시오:

   ```shell Linux
   sudo tailscale set --advertise-routes=<IP_RANGE>
   ```

에이전트를 시작할 때 노출된 서브넷 경로를 구성할 수도 있습니다. 이 경우 `AUTH_KEY`를 에이전트의 인증 키로, `IP_RANGE`를 노출하려는 IP 범위로 교체하여 다음 스크립트를 사용하십시오:

```shell Linux
sudo tailscale up --auth-key=<AUTH_KEY> --advertise-routes=<IP_RANGE>
```

### 리소스 활성화 및 비활성화 {#private-connectivity-resources-enable-disable}

리소스가 [노출](#private-connectivity-resources-expose)되면 Mendix 관리자가 활성화해야 합니다. 사용자는 리소스가 활성화된 후에만 연결을 요청할 수 있습니다.

리소스를 활성화하려면 다음 단계를 따르십시오:

1. **리소스** 탭에서 활성화하려는 리소스를 찾으십시오.
2. **활성화**를 클릭하십시오.

리소스를 비활성화하려면 다음 단계를 따르십시오:

1. **리소스** 탭에서 비활성화하려는 리소스를 찾으십시오.
2. **비활성화**를 클릭하십시오.

## 연결 {#private-connectivity-connections}

Mendix 프라이빗 연결을 통해 Mendix Cloud의 애플리케이션이 Mendix 프라이빗 연결 네트워크를 통해 Mendix 프라이빗 연결 리소스에 연결할 수 있습니다.
연결은 Mendix Cloud의 애플리케이션이 리소스에 연결하기 전에 요청 및 승인되어야 합니다.
Mendix Cloud의 애플리케이션은 여러 리소스에 대한 여러 연결을 가질 수 있습니다.

**프라이빗 연결** 페이지의 **연결** 탭에서 회사와 관련된 모든 연결을 볼 수 있습니다. 페이지에는 각 연결에 대해 다음 정보가 표시됩니다:

* **앱** – 연결을 위한 앱의 이름입니다.
* **환경** – 연결을 위한 환경의 이름입니다.
* **네트워크** – 연결을 위한 네트워크입니다.
* **리소스** – 연결을 위한 리소스의 이름입니다.
* **상태** – 연결의 상태입니다. 다음 중 하나일 수 있습니다:

    * **대기 중** – 연결이 요청되었지만 아직 승인되지 않았습니다. 앱 환경은 이 연결을 사용하여 리소스에 연결할 수 없습니다.
    * **승인됨** – 연결이 승인되었습니다. 앱 환경은 이 연결을 사용하여 리소스에 연결할 수 있습니다.
    * **거부됨** – 연결이 거부되었습니다. 앱 환경은 이 연결을 사용하여 리소스에 연결할 수 없습니다.

    기술 담당자가 특정 환경에 대한 연결을 요청하는 방법에 대한 자세한 내용은 [외부 리소스에 연결](/developerportal/deploy/connecting-to-external-resource/)을 참조하십시오.

### 연결 세부 정보 보기 {#private-connectivity-connections-details}

기존 연결을 보려면 다음 단계를 따르십시오:

1. **연결** 탭에서 세부 정보를 보려는 연결을 찾으십시오.
2. **추가 옵션**({{< icon name="three-dots-menu-horizontal" >}})을 클릭한 다음 **세부 정보**를 선택하십시오. 해당 연결의 세부 정보가 표시됩니다:

    * **요청 세부 정보** – 연결 요청의 세부 정보입니다:

        * **이름** – 이 연결을 요청한 사용자의 이름입니다.
        * **상태** – 연결 요청의 상태입니다. 다음 중 하나일 수 있습니다:

            * **대기 중** – 연결이 요청되었지만 아직 승인되지 않았습니다. 앱 환경은 이 연결을 사용하여 리소스에 연결할 수 없습니다.
            * **승인됨** – 연결이 승인되었습니다. 앱 환경은 이 연결을 사용하여 리소스에 연결할 수 있습니다.
            * **거부됨** – 연결이 거부되었습니다. 앱 환경은 이 연결을 사용하여 리소스에 연결할 수 없습니다.

        * **날짜** – 연결이 요청된 날짜 및 시간입니다.

    * **앱** – 연결을 위한 앱의 이름입니다.
    * **환경** – 연결을 위한 환경의 이름입니다.
    * **네트워크** – 연결을 위한 네트워크입니다.
    * **리소스** – 연결을 위한 리소스의 이름입니다.
    * **리소스 ID** – 리소스의 내부 ID입니다. 예를 들어 지원 티켓에 제공하려는 경우 복사할 수 있습니다.
    * **에이전트** – 연결을 위한 에이전트의 이름입니다.
    * **에이전트 ID** – 에이전트의 내부 ID입니다. 예를 들어 지원 티켓에 제공하려는 경우 복사할 수 있습니다.
    * **네트워크** – 연결을 위한 네트워크의 이름입니다.
    * **네트워크 ID** – 네트워크의 내부 ID입니다. 예를 들어 지원 티켓에 제공하려는 경우 복사할 수 있습니다.

## 연결 승인 및 거부 {#private-connectivity-connections}

연결이 요청되면 앱 환경이 리소스에 연결하기 전에 승인되어야 합니다.

연결을 승인하려면 다음 단계를 따르십시오:

1. **Control Center**에서 **권한** 섹션에 접속한 다음 **승인 요청** 페이지로 이동하십시오.
2. **활성 요청** 탭에서 승인하려는 연결을 식별하십시오.
3. **승인**을 클릭하십시오.

{{% alert color="warning" %}}
연결 승인은 자동으로 활성화하지 않습니다. 승인된 모든 연결에 대해 기술 담당자가 활성화하고 사용할 수 있도록 [환경을 재배포](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/)해야 합니다.
{{% /alert %}}

연결을 비활성화하려면 다음 단계를 따르십시오:

1. **Control Center**에서 **권한** 섹션에 접속한 다음 **승인 요청** 페이지로 이동하십시오.
2. **활성 요청** 탭에서 거부하려는 연결을 식별하십시오.
3. **거부**를 클릭하십시오.

<!-- ## Activities

On the **Activities** tab, you can view a log of activities performed on your Private Connectivity assets. -->

## 프라이빗 연결 라우팅

Mendix 내부 시스템은 다음 서브넷에서 운영됩니다:

* 10.10.0.0/16
* 10.11.0.0/16
* 172.20.0.0/16

따라서 서브넷 또는 단일 IP 주소를 노출할 때 Mendix의 프라이빗 IP 범위와 충돌해서는 안 됩니다.
Mendix가 운영하는 서브넷을 반드시 사용해야 하는 경우 인프라에서 [네트워크 주소 변환(NAT)](https://en.wikipedia.org/wiki/Network_address_translation)을 구성하십시오.
