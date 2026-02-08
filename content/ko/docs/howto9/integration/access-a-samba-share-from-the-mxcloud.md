---
title: "Samba 공유에 접근하기"
url: /howto9/integration/access-a-samba-share-from-the-mxcloud/
weight: 11
description: "MxCloud에서 Samba 공유에 접근하고 서버 이름을 사용하는 방법을 설명합니다."
---

## 소개

Samba 연결을 사용하여 Windows 공유로 파일을 가져오거나 보낼 수 있습니다. 이 작업을 수행할 때 연결 문자열에 고정 IP 주소를 사용해야 합니다. 라이브러리는 서버 이름 사용을 지원할 수 있지만, DNS 서버 위치, DFS 주소 등을 지정하기 위한 광범위한 구성이 필요합니다. IP 주소를 사용하는 것이 훨씬 효율적입니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* MxCloud에서 Samba 공유에 접근하기
* IP 주소 대신 서버 이름 사용하기

## 코드 예제

일반적인 사용자 이름, 비밀번호, IP 주소를 사용하여 Samba 공유에 연결할 때, NTLMFileHandler를 사용하는 아래 코드로 충분합니다. SMB 구성과 FileDocument의 이름을 기반으로, FileHandler가 Samba 공유에 연결하여 동일한 파일 이름을 가진 문서를 가져옵니다.

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

## IP 주소 대신 서버 이름 사용하기

IP 주소 대신 서버 이름을 기반으로 서버에 연결하려면, 이 옵션과 관련된 모든 속성을 활성화해야 합니다. 라이브러리가 도메인과 서버를 확인하기 위해 지정해야 하는 다양한 WINS 속성에 대한 자세한 내용은 이 페이지를 참조하십시오: [https://jcifs.samba.org/src/docs/resolver.html](https://jcifs.samba.org/src/docs/resolver.html).

| 이름 | 확인 속성 |
| --- | --- |
| **jcifs.netbios.wins** | WINS 서버(또는 공식적으로 NBNS)의 IP 주소입니다. 이는 다른 서브넷의 호스트에 접근할 때만 필요하지만, WINS 서버를 사용하는 경우 권장됩니다. |
| **jcifs.netbios.baddr** | 로컬 네트워크의 브로드캐스트 주소입니다. 기본값 255.255.255.255가 "Network is unreachable" `IOException`을 발생시킬 수 있으므로, 특정 네트워크 구성에서는 이 값을 설정해야 할 수 있습니다. 예를 들어, 로컬 호스트의 IP 주소가 192.168.1.15인 경우, 브로드캐스트 주소는 192.168.1.255일 가능성이 높습니다. |
| **jcifs.resolveOrder** | 호스트 이름을 확인하는 데 사용할 이름 확인 방법 식별자와 순서를 지정하는 쉼표로 구분된 목록입니다. 가능한 식별자는 `LMHOSTS`, `WINS`, `BCAST`, `DNS`입니다. |
| **jcifs.netbios.lmhosts** | IP 주소와 호스트 이름의 매핑을 포함하는 LMHOSTS(LAN Manager Hosts) 파일의 경로입니다. 이 파일의 형식은 Windows LMHOSTS 파일 형식과 동일합니다(아래에 언급된 몇 가지 예외 사항 포함). |
| **jcifs.netbios.scope** | 드물지만, NetBIOS는 동일한 네트워크에서 머신 그룹을 숨기기 위해 "scope ID"를 사용할 수 있습니다. 네트워크 관리자에게 scope ID가 사용되는지 확인하십시오. 사용되는 경우, 이 속성을 사용하여 설정해야 하며, 그렇지 않으면 이름 쿼리가 실패합니다. |

그러나 클라우드 편집 라이브러리에는 추가 속성 재정의가 필요합니다. Mendix Cloud에서는 기본적으로 DFS 서버를 확인할 수 없으므로, DFS 속성을 활성화하지 않는 것이 좋습니다. DFS를 활성화하려면, 서버가 도메인 이름과 DNS 위치를 기반으로 DFS를 확인할 수 있는지 확인해야 합니다.

| 이름 | 확인 속성 |
| --- | --- |
| **jcifs.smb.client.dfs.disabled** | 이 속성이 true이면 도메인 기반 DFS 참조가 비활성화됩니다. 기본값은 false이지만, 클라우드 편집 버전의 기본값은 true입니다. 이 속성은 도메인 기반 DFS 참조가 JCIFS가 처음 경로를 확인할 때 실행되어 긴 시작 지연을 유발하는 비도메인 환경에서 중요할 수 있습니다(예: 네트워크 없이 로컬 머신에서만 JCIFS를 실행하는 경우, 노트북에서 사용하는 경우). |
| **jcifs.smb.client.dfs.ttl** | DFS 토폴로지 정보가 캐시되어야 하는 시간(초)입니다. 기본값은 300초입니다(신뢰할 수 있는 도메인 목록은 jcifs.smb.client.dfs.ttl의 10배 동안 캐시됩니다). |
| **jcifs.smb.client.dfs.strictView** | 이 속성은 DFS 루트 열거에 실패했지만 공유 열거에 성공한 경우 JCIFS의 동작을 제어합니다. 기본적으로 이 값은 false로, DFS 루트 열거가 실패하더라도 JCIFS가 공유 목록을 반환해야 함을 나타냅니다. 이 값이 true로 설정되면, DFS 정보를 성공적으로 검색할 수 없는 경우 예외가 발생합니다(예: 불충분한 접근 권한으로 인한 SmbAuthException). |

클라우드에서는 시스템 속성을 사용하여 속성을 지정할 수 없습니다. 따라서 Java를 통해 지정해야 하며, JCIFS 클래스를 초기화하기 전에 정확한 `Config` 옵션을 지정해야 합니다. 다음 코드 줄을 사용하여 수행할 수 있습니다:

```shell
jcifs.Config.setProperty("jcifs.smb.client.dfs.disabled","false");
```

모든 속성에 대한 자세한 내용은 [Setting Client Properties](https://www.jcifs.org/src/docs/api/overview-summary.html#scp)를 참조하십시오.

## 추가 문서

* [The Java CIFS Client Library](https://www.jcifs.org/src/docs/api/)
