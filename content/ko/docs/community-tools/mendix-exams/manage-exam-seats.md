---
title: "시험 좌석 관리"
url: /community-tools/purchasing-exams/manage-exam-seats/
weight: 10
description: "조직의 시험 관리자가 시험 좌석을 관리하는 방법을 설명합니다."
---

## 소개

조직은 Mendix 인증 시험 좌석을 대량 주문할 수 있습니다. Mendix가 주문을 처리하면 주문별로 시험 관리자가 지정됩니다.

주문이 처리되면 지정된 시험 관리자에게 주문을 관리하라는 이메일과 알림이 전송됩니다. 시험 관리자는 주문의 세부 정보를 관리하고 구매한 시험 좌석을 조직 내 개인에게 할당할 수 있습니다. 시험 좌석을 할당받은 사람은 무료로 시험에 응시할 수 있습니다.

이 가이드에서는 시험 관리자로서 시험 좌석을 관리하는 방법을 설명합니다.

## 전제 조건

시험 좌석을 관리하려면 Mendix 계정을 보유하고 있어야 하며 시험 관리자여야 합니다.

## 학생에게 시험 응시 초대하기

1. Mendix Academy의 [Exam Administration Overview](https://academy.mendix.com/link/examadmin) 페이지로 이동하여 시험을 관리하세요.

    **Available Exams** 아래에서 각 주문 및 시험 유형별 남은 좌석을 확인할 수 있습니다.

    {{< figure src="/attachments/community-tools/order-exams-in-bulk/manage-exam-seats/overview.png" >}}

2. **Invite Student**를 클릭하세요.

    **Add Student** 대화 상자가 열립니다.

3. 초대하려는 학생의 이메일 주소를 입력하세요. 여러 이메일 주소를 입력하는 경우 쉼표로 구분하세요.

4. **Add to Invite**를 클릭하세요.

    **Add More Students** 버튼으로 더 많은 학생을 추가할 수 있습니다.

5. 초대 만료일을 설정하세요.

   {{< figure src="/attachments/community-tools/order-exams-in-bulk/manage-exam-seats/expiry-date.png" >}}

   {{% alert color="info" %}}학생은 만료일 전에 시험에 등록해야 합니다. 만료일 전에 등록하지 못한 경우 해당 좌석은 **Remaining Seats**에 추가되어 재할당할 수 있습니다.{{% /alert %}}

6. **Send Invites**를 클릭하세요.

    학생들은 시험 등록 페이지로 리디렉션되는 링크가 포함된 이메일을 받게 됩니다.

초대 내역은 **Invited Students** 아래에서 확인할 수 있습니다.

## 초대 상태 확인하기

**Invited Students** 섹션에서 전송된 초대의 상태를 확인할 수 있습니다.

{{< figure src="/attachments/community-tools/order-exams-in-bulk/manage-exam-seats/invited-students.png" >}}

초대는 다음 상태 중 하나를 가질 수 있습니다:

* **NOT ACCEPTED YET** – 학생이 아직 초대를 수락하지 않았습니다. 아직 [학생에게 리마인더를 보내거나](#remind-student) [초대를 철회](#withdraw-invitation)할 수 있습니다.
* **REGISTERED** – 학생이 등록했지만 아직 시험을 완료하지 않았습니다.
* **UNDISCLOSED** – 학생이 시험을 응시했지만 결과를 공유하지 않았습니다. 학생은 시험 등록 시 시험 관리자와 결과를 공유하지 않도록 선택할 수 있습니다.
* **CERTIFIED** – 학생이 시험에 합격하여 인증을 받았습니다.
* **FAILED** – 학생이 시험에 응시했지만 불합격했습니다.

### 학생에게 초대 수락 리마인더 보내기 {#remind-student}

학생이 초대를 수락하지 않은 경우 시험 등록을 독려하는 리마인더 이메일을 보낼 수 있습니다. **Remind Student**를 클릭하세요.

### 초대 철회하기 {#withdraw-invitation}

수락되지 않은 초대를 철회할 수 있습니다. **Withdraw Invite**를 클릭하세요.
