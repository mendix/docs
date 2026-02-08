---
title: "Performance Tool"
url: /appstore/partner-solutions/apd/rg-one-performance-tool/
---

## 소개

Performance Tool을 사용하여 개별 Microflow를 측정하고 액션, 루프 반복 및 하위 Microflow로 분류합니다. 선택적으로 Mendix 프로파일러를 실행하여 SQL 문을 액션에 연결할 수 있습니다.

Performance Tool은 다음으로 구성됩니다:

* [레코더](#recorder)
* [필터](#filter)
* [옵션](#options)
* [기록된 내용 보기](#show-recorded)
* [고급 사용법](#advanced)

## 레코더 {#recorder}

Performance Tool은 시작 시 모든 액션과 SQL 문을 기록하고, 중지 시 기록을 처리하고 저장하는 옵션을 제공하는 레코더입니다. 기록 중 및 기록이 중지된 후에도 기록된 데이터를 필터링할 수 있습니다. 이 필터링은 기록된 항목을 메모리에서 제거하므로 실행 취소가 없습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorder.png" class="no-border" >}}

**Session name**을 입력하고 기록을 시작합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorder_Started.png" class="no-border" >}}

**Set marker**를 사용하여 레코더 항목에 레이블이나 마커를 지정할 수 있으므로, 여러 기능을 동시에 기록할 때 결과에서 기록된 항목을 인식할 수 있습니다.

**Show recorded** 버튼은 필터링을 지원하기 위해 기록된 내용을 보는 데 사용됩니다. 이 버튼은 {{% icon name="search" %}} 아이콘에서도 사용할 수 있습니다. 기록된 내용 보기 기능은 아래에서 설명합니다.

**Filter** 버튼은 필터 대화 상자를 열며 아래에서 설명합니다.

메모리의 최대 항목 수에 도달하면 기록이 자동으로 중지됩니다.

**Stop**을 누르면 기록된 항목을 처리하는 옵션이 제공됩니다. 추가로 필터링할 수도 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorder_Stopped.png" class="no-border" >}}

처리 시 실제 데이터가 저장 허용량보다 많으면 특별한 필터 대화 상자가 나타납니다. 이 대화 상자에서 추가로 필터링할 수 있습니다. 필터 대화 상자의 처리 버튼을 사용하면 체크를 무시하고 메모리에 있는 모든 데이터를 처리합니다.

기록된 데이터 처리 중에 SQL 문은 액션에 연결되거나, 실패하면 전체 Microflow에 연결됩니다. 모든 SQL 문이 Microflow 및/또는 액션으로 추적될 수 있는 것은 아닙니다. 이를 개선하기 위해 휴리스틱이 적용됩니다.

## 필터 {#filter}

Performance Tool이 실행 중일 때의 필터 옵션을 보여주는 스크린샷입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Filter_Running.png" class="no-border" >}}

임계값은 기록된 Microflow, 액션 또는 SQL 문을 필터링하고 실행 시간이 임계값 미만인 경우 메모리에 저장하지 않거나 제거하는 데 사용됩니다.

**Show recorded** 버튼({{% icon name="search" %}})으로 메모리에 기록된 내용을 볼 수 있습니다.

**Include sub-microflows** 옵션은 장기 실행 Microflow에서 호출된 하위 Microflow를 메모리에 유지하는 데 사용할 수 있습니다.

**Record SQL statements**가 활성화되면 Mendix 프로파일러에 의해 SQL 문이 기록되고 런타임 요청 프로파일러 출력은 Microflow 임계값으로 필터링됩니다. SQL 문은 SQL 문 임계값으로 필터링됩니다.

**Save, apply filter & close** 버튼을 사용하면 Performance Tool에 옵션 변경이 적용됩니다.

* 실행 중에 SQL 문 기록이 해제되면 SQL 문 기록이 취소됩니다.
* 실행 중에 SQL 문 기록이 선택되면 SQL 문 기록이 시작됩니다.
* 임계값이 증가하면 이미 기록된 Microflow 및/또는 SQL 문이 새 임계값에 맞게 필터링됩니다.

## 옵션 {#options}

Performance Tool의 옵션을 보여주는 스크린샷입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Options.png" class="no-border" >}}

**Max actions to record**, **Max SQL statements to record** 및 **Run fixed period of time (seconds)**는 운영 환경에서 Performance Tool이 실행되어 메모리를 가득 채우는 것을 방지하기 위한 보호 기능입니다. 최대 임계값에 도달하면 Performance Tool이 중지됩니다. 중지되면 Performance Tool은 기록을 중지하고, 여전히 데이터를 필터링하거나 취소할 수 있습니다.

**Max actions to store** 및 **Max SQL statements to store**는 대규모 기록이 처리되고 데이터베이스에 저장되는 데 매우 오랜 시간이 걸리는 것을 방지하기 위해 도입되었습니다. 이 설정을 사용하면 기록되고 처리되는 데이터의 양을 필터링하거나 늘릴 수 있습니다.

**Max Processing Delay (ms)**를 정의할 수 있습니다. 처리 지연이 이 값보다 높으면 Performance Tool이 기록을 중지합니다. 여전히 데이터를 필터링하거나 취소 또는 중지할 수 있습니다.

**Save**(실행 중이 아닐 때) 또는 **Save & apply**(실행 중일 때) 버튼을 사용하면 Performance Tool에 옵션 변경이 적용됩니다.

* 실행 중에 SQL 문 기록이 해제되면 SQL 문 기록이 취소됩니다.
* 실행 중에 SQL 문 기록이 선택되면 SQL 문 기록이 시작됩니다.
* 임계값이 증가하면 이미 기록된 Microflow 및/또는 SQL 문이 새 임계값에 맞게 필터링됩니다.

## 기록된 내용 보기 {#show-recorded}

**Show recorded** 대화 상자에서 기록 중인 내용을 볼 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorded_Microflows.png" class="no-border" >}}

여기서 실행 중인 Microflow와 완료된 Microflow 그리드는 10개 레코드씩 로드됩니다. **Refresh & next chunk** 버튼을 사용하면 완료되지 않은 기존 레코드가 새로고침됩니다. 추가 10개 레코드가 로드됩니다. 그 사이에 Microflow가 완료되면 해당 레코드가 실행 중에서 완료로 이동합니다. 필터링이 적용되면 실행 중이던 Microflow가 사라질 수 있습니다. 실행 중인 Microflow는 시작 날짜 기준으로 가장 오래된 것부터 정렬됩니다. 완료된 Microflow는 소요 시간 기준으로 가장 긴 것부터 정렬됩니다.

개별 Microflow를 저장할 수 있습니다(기록된 경우 하위 Microflow 포함). 이렇게 하면 찾고 있는 것을 알고 있는 경우 시간을 절약할 수 있습니다.

Microflow를 [보기]하고 드릴다운할 수 있습니다. 그러나 여기서는 SQL 문이나 액션 간격 내의 이벤트 Microflow를 메인 Microflow로 볼 수 없습니다. 이는 기록된 데이터를 처리하고 데이터베이스에 저장한 후에만 볼 수 있습니다.

## 고급 사용법 {#advanced}

Performance Tool 기록에 컨텍스트 정보를 삽입하려면 특수 액션을 사용할 수 있습니다. 이에 대한 설명은 다음 문서에 있습니다: [컨텍스트 정보 삽입](/appstore/partner-solutions/apd/rg-one-inserting-context-information/)
