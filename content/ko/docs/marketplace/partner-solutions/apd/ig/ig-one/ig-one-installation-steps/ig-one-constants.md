---
title: "상수"
url: /appstore/partner-solutions/apd/ig-one-constants/
---
이 부록에서는 APMAgent에서 사용되는 상수에 대해 설명합니다. CompanyName 상수를 제외하고는 기본값을 사용하는 것이 좋습니다.

다음 상수가 사용됩니다:

* `APMAgent.AppName`은 라이선스에 사용됩니다. 설치 시 설정해야 합니다.
* `APMAgent.BatchDeleteChunkSize` (기본값 10000)는 데이터 삭제 시 배치 크기를 결정합니다.
* `APMAgent.CompanyName`은 라이선스에 사용됩니다. 설치 시 설정해야 합니다.
* `APMAgent.ExcludedMicroflows` (기본값 APMAgent.; )는 Microflow를 필터링하는 세미콜론으로 구분된 패턴 목록을 포함합니다. 제외는 Statistics Tool과 Performance Tool에서 사용됩니다.
* `APMAgent.InstanceIndex` (기본값 0)는 온프레미스 로드 밸런싱 환경에서만 사용되며 각 인스턴스에 고유 번호를 부여합니다.
* `APMAgent.MaxRunningMicroflowsInDialog` (기본값 10)는 Performance Tool의 실행 중인 Microflow 대화 상자에서 로드되는 Microflow 수를 결정합니다.
* `APMAgent.MetricHistory` (기본값 5)는 표현식에서 사용하기 위해 Measurements Tool에서 캐시에 보관하는 이전 측정 수를 설정합니다.
* `APMAgent.NotifyMicroflowName` (기본값 APMAgent.SampleNotifyMicroflow_LogMessage)은 트리거 알림 액션에서 실행되는 Microflow를 정의합니다.
* `APMAgent.PerformanceToolWaitTimeForMicroflowToFinish` (기본값 10)는 기록 중지 시 시작된 Microflow가 완료되기를 기다리는 초 수입니다. GUI 버튼으로 중지할 때만 사용되며, 보호 기능이 작동할 때는 사용되지 않습니다.
* `APMAgent.CompanyName` (기본값 '<company name constant>')은 라이선스에 사용됩니다.
* `APMAgent.PrintAllOnStartup` (기본값 false)은 `AfterStartup`이 모든 JMX 데이터를 Mendix 로그에 기록해야 하는지 선택하는 데 사용됩니다. 디버깅에 유용할 수 있습니다.
* `APMAgent.RunAfterStartup` (기본값 True)은 런타임 시작 시 오류가 발생하는 드문 경우에 재배포 없이 After startup을 비활성화합니다.

**참고:** `APMAgent.RunAfterStartup` 상수는 After startup 및 Before shutdown Microflow를 건너뜁니다(정확히 말하면 즉시 종료됩니다). 이것은 Mendix API가 변경되는 드문 상황에 대한 안전 조치입니다.

잠재적 사용 시나리오 설명:

1. Mendix가 업그레이드되었으나 테스트에서 변경된 API 오류를 발견하지 못함.
2. 시작 시, 이전 API 호출이 포함된 APM Tool 모듈이 시작되도록 구성되지 않음.
3. 이 APM Tool 모듈이 시작 후 실행되도록 구성되어 수동으로 시작됨. 이제 오류가 나타나야 하지만 무시될 수 있음.
4. 어느 시점에서 재시작이 발생하고 오류로 인해 애플리케이션이 시작되지 않음.

설계 원칙으로서, After startup 코드는 켜고 끌 수 있으므로 운영 시스템을 시작할 수 있으며 시작을 위해 새 배포가 필요하지 않습니다. 물론 문제를 수정하기 위해 나중에 새 배포가 필요합니다. APM 도구는 수동으로 시작할 때 여전히 사용할 수 있으며, 이전 API 호출을 사용하는 APM 도구 부분은 예외입니다.
