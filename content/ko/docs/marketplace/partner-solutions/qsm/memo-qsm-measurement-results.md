---
title: "QSM 측정 결과 메모"
url: /appstore/partner-solutions/qsm/memo-measurement-results/
description: "Mendix와 Software Improvement Group(SIG)이 개발한 클라우드 서비스인 Mendix Quality and Security Management와 구현된 모범 사례 점검 항목을 소개합니다."
---

## 배경

Software Improvement Group(SIG)과 Mendix는 Mendix 라이선스 사용자에게 품질 측정 지원을 제공하기 위한 파트너십을 체결했습니다. 특히, SIG는 Mendix 애플리케이션 모델에 대한 품질 측정을 수행하고, 측정 결과에서 품질 등급을 계산하며, 측정 결과와 등급을 모두 품질 대시보드에 표시하는 Quality and Security Management(QSM) 도구를 개발했습니다. QSM은 SIG가 개발하고 Mendix 인프라에서 호스팅됩니다.

## SIG의 지속적 개선을 위한 측정 결과 활용

QSM의 측정 결과는 SIG R&D 팀이 측정 알고리즘을 개선하고, 등급 시스템을 재보정하며, 라이선스 사용자에게 익명화된 벤치마크를 제공하는 데 사용됩니다:

* 측정 개선: Mendix 애플리케이션 모델에서 기본 측정 정보를 추출하는 알고리즘을 조정합니다. 이는 버그 수정, 새로운 모델 구조 지원 또는 추가 정보 추출일 수 있습니다.

* 등급 시스템 재보정: 기본 측정 결과를 별점 등급으로 매핑하기 위해 등급 시스템에서 사용하는 임계값은 과거 측정 결과에 대한 데이터 마이닝을 통해 도출됩니다. 자세한 내용은 아래 참고의 두 출판물을 참조하십시오. 새로운 측정 결과가 제공되면 임계값을 최신 상태로 유지하기 위해 재보정이 수행됩니다.

  {{% alert color="info" %}} [1] Tiago L. Alves, José Pedro Correia, and Joost Visser, Benchmark-based Aggregation of Metrics to Ratings, In Proceedings of the Joint Conference of the 21st International Workshop on Software Measurement (IWSM) and the 6th International Conference on Software Process and Product Measurement (Mensura), pp20-29, IEEE Computer Society, 2011.</br></br>
  [2] Tiago Alves, Christiaan Ypma, and Joost Visser, Deriving Metric Thresholds from Benchmark Data, In proceedings of the 26th IEEE International Conference on Software Maintenance (ICSM 2010), September 12-18m 2010, Timisoara, Romania, IEEE Computer Society, 2010.{{% /alert %}}

* 익명화된 벤치마크: 하나 이상의 선택된 앱의 등급 결과를 익명의 동종 그룹과 비교하여 보여주는 개요를 제공할 수 있습니다.

## SIG 정보 보안

SIG는 TÜV Informationstechnik에 의해 인증된 ISO 17025 품질 측정 시스템을 갖춘 소프트웨어 분석 연구소를 운영합니다. 또한 SIG 정보 보안 관리 시스템은 TÜV Nord에 의해 ISO 27001 인증을 받았습니다. 이러한 관리 시스템은 모든 SIG 활동에서 데이터의 올바르고 안전한 처리를 보장합니다.
