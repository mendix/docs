---
title: "로깅"
url: /refguide8/logging/
---

## 소개

아래에서는 Runtime의 다양한 로그 레벨이 출력으로 표시하는 내용을 설명합니다.
개발 중에는 콘솔(advanced -> set log levels)에서 이러한 로그 레벨을 설정할 수 있으며, 서버에 배포된 경우 [배포](/developerportal/deploy/mendix-cloud-deploy/) 페이지를 참조하십시오.

## 로그 레벨

### Critical

Critical은 애플리케이션이 더 이상 안정적으로 작동하지 못할 수 있는 드문 경우에 사용됩니다. 일반적으로 이런 일은 발생하지 않아야 합니다. 발생하면 즉시 조치를 취해야 합니다. 3.0 클라우드는 이러한 메시지를 알림으로 처리하고 클라우드 대시보드에서 알림을 보냅니다.

### Error

Error는 처리되지 않은 모든 예외를 기록하는 데 사용됩니다. 이는 발생해서는 안 되지만 치명적이지 않은 예상치 못한 이벤트입니다. 이후에도 애플리케이션은 정상적으로 작동할 수 있어야 합니다.

### Warning

Warning은 처리된 '예외' 또는 기타 중요한 로그 이벤트에 자주 사용됩니다. 예를 들어, 애플리케이션에 구성 설정이 필요하지만 설정이 없는 경우 기본값이 있다면, Warning 레벨을 사용하여 누락된 구성 설정을 기록해야 합니다.

### Information

Information 레벨은 일반적으로 시스템의 실행 및 관리에 유용한 정보를 출력하는 데 사용됩니다. Information은 애플리케이션의 주요 영역에서 진입 및 종료 지점을 기록하는 데 사용되는 레벨이기도 합니다. 그러나 개발 및 테스트 중에 더 세밀한 정보를 위해 Debug 레벨에서 더 많은 진입 및 종료 지점을 추가할 수 있습니다.

### Debug

개발 중 시스템 디버깅에 사용해야 하지만 프로덕션 시스템에서는 사용하지 마십시오. 문제를 쉽게 정확히 찾아내고 애플리케이션의 일반적인 흐름을 파악하는 데 사용할 수 있습니다.

### Trace

가장 상세한 로깅 레벨이며, Debug보다 더 세밀한 로깅이 필요한 경우 사용할 수 있습니다.

## 로그 노드

이 섹션에서는 Mendix에서 사용하는 특정 로그 노드에 대한 자세한 정보를 제공합니다. 직접 [로그 메시지](/refguide8/log-message/)를 작성하는 경우 Mendix 로그 메시지와의 혼동을 피하기 위해 고유한 로그 노드 이름을 사용하는 것이 좋습니다.

### 기본 Mendix 로그 노드{#mendix-nodes}

다음 로그 노드는 Mendix가 로그 메시지를 작성할 때 사용됩니다.

{{% alert color="info" %}}
이 목록은 현재 불완전하며 작업 중입니다.
{{% /alert %}}

| 로그 노드 | 설명
| --- | --- |
| ActionManager | 작업 스케줄링(예: Scheduled Event) 및 작업 실행(예: Microflow 실행)과 관련된 메시지를 기록합니다. |
| Configuration | 시작 시 읽어들이는 Mendix 앱의 구성과 관련된 로깅입니다. |
| ConnectionBus | Mendix의 데이터베이스 시작, 동기화 및 연결 관리와 관련된 일반 로깅입니다. |
| ConnectionBus_Mapping | XPath 쿼리와 OQL 텍스트 쿼리를 OQL 쿼리로 변환하는 것과 관련된 정보입니다. |
| ConnectionBus_Queries | 더 이상 사용되지 않음: 레거시 노드입니다. |
| ConnectionBus_Retrieve | 데이터 검색과 관련된 모든 정보. 예: 애플리케이션에서 들어오는 요청, 실행된 문장. 수신된 데이터 처리 중 발생한 문제도 기록합니다. |
| ConnectionBus_Security | 데이터베이스에 접근하는 데 필요한 접근 권한에 관한 정보입니다. |
| ConnectionBus_Synchronize | 더 이상 사용되지 않음: 레거시 노드입니다. |
| ConnectionBus_Update | 데이터베이스의 데이터 업데이트와 관련된 모든 정보. 들어오는 저장 요청, 실행된 문장 및 저장 중 발생한 문제입니다. |
| ConnectionBus_Validation | 기존 데이터베이스 수정 및 데이터베이스 마이그레이션과 관련된 정보입니다. |
| Connector | |
| Core | 핵심 Runtime의 메시지를 기록합니다. Runtime 시작, Runtime 버전, 사용 중인 라이선스 및 모델 해석과 관련된 문제가 포함될 수 있습니다. |
| DataStorage_QueryHandling | 실행 중인 쿼리와 관련된 메시지를 기록합니다. |
| DataStorage_QueryPlan | 모든 쿼리에 대해 데이터베이스에서 사용하는 쿼리 계획을 기록합니다(현재 PostgreSQL 데이터베이스에서만 지원됨). {{% alert color="warning" %}}`DataStorage_QueryPlan` 로그 노드는 매우 큰 성능 영향이 있으므로 프로덕션에서 활성화하면 안 됩니다.{{% /alert %}} |
| DocumentExporter | 문서를 생성하는 템플릿 엔진과 관련된 메시지를 기록합니다. |
| FileDocumentSizesPopulateJob | 해당 필드가 채워지지 않은 문서에 대해 데이터베이스의 파일 크기 필드를 채우는 백그라운드 작업에 대한 메시지를 기록합니다(레거시 마이그레이션 시 사용됨). |
| I18NProcessor | 앱 번역과 관련된 메시지를 기록합니다. |
| Integration API | 통합 API 문서화와 관련된 메시지를 기록합니다. |
| JSON | Mendix Client에서 Runtime Server로의 JSON 메시지입니다. 자세한 내용은 아래 [JSON](#json)을 참조하십시오. |
| JSON Export | JSON으로의 Export Mapping과 관련된 메시지를 기록합니다. |
| JSON Import | JSON에서의 Import Mapping과 관련된 메시지를 기록합니다. |
| Jetty | Runtime과 외부 세계 간의 HTTP 요청을 처리하는 내부 Jetty 웹 서버의 메시지를 기록합니다. |
| LocalFileSystemStore | 로컬 파일 시스템을 파일 저장소로 사용하는 경우 파일 처리와 관련된 메시지를 기록합니다. |
| Logging | Mendix에서 사용하는 로깅 프레임워크와 관련된 메시지를 기록합니다. |
| M2EE | Mendix Runtime과의 관리 인터페이스 메시지를 기록합니다. |
| MicroflowDebugger | Microflow 디버거의 상태와 관련된 메시지를 기록합니다(예: 연결 상태, 수신 및 발신 요청). |
| MicroflowEngine | Microflow 실행과 관련된 메시지를 기록합니다(예: 실행 중인 Microflow 또는 Microflow 작업, 실행 중 발생하는 오류). |
| ModelStore | |
| Module | Microflow 엔진과 같이 핵심 Runtime에서 온디맨드로 로드되는 모듈에 대한 메시지를 기록합니다. |
| ObjectManagement | 존재하지 않는 객체에 대한 연관을 만들려는 시도와 관련된 오류를 기록합니다. |
| ODataConsume | 소비된 OData 서비스와 관련된 메시지를 기록합니다. |
| OData Publish | 게시된 OData 서비스와 관련된 메시지를 기록합니다. |
| QueryParser | XPath 및 OQL 쿼리의 파싱 또는 해석과 관련된 메시지를 기록합니다. |
| REST Consume | Call REST 서비스 활동과 관련된 메시지를 기록합니다. |
| REST Publish | 게시된 REST 서비스와 관련된 메시지를 기록합니다. |
| RequestStatistics | |
| Services | |
| StorageAzure | Azure 시스템을 파일 저장소로 사용하는 경우 파일 처리와 관련된 메시지를 기록합니다. |
| StorageS3 | Amazon S3 시스템을 파일 저장소로 사용하는 경우 파일 처리와 관련된 메시지를 기록합니다. |
| WebServices | SOAP 호출 요청 및 응답 내용을 추적합니다. |
| WebUI | |
| XML Export | XML로의 Export Mapping과 관련된 메시지를 기록합니다. |
| XML Import | XML에서의 Import Mapping과 관련된 메시지를 기록합니다. |

### JSON{#json}

관련 레벨은 하나뿐입니다: *Debug*.

이 로그 레벨을 Debug로 설정하면 Mendix Client에서 Runtime Server로의 모든 JSON 요청과 응답이 표시됩니다. 이 출력은 일반적으로 스트리밍되므로 성능이 저하될 수 있습니다. 프로덕션 환경에서 사용자가 무엇을 하고 있는지 파악하는 데도 사용할 수 있습니다. 여기에서 사용할 때는 로그 파일에 충분한 디스크 공간이 있는지 확인하십시오.
