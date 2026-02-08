---
title: "Plotly Images REST 서비스 엔드포인트 사용하기"
linktitle: "Plotly Images REST 엔드포인트"
url: /howto8/front-end/charts-plotly-images-rest/
weight: 70
---

## 소개

[Plotly API images 엔드포인트](https://api.plot.ly/v2/images)는 플롯을 원하는 형식의 이미지로 변환합니다. 본문 매개변수와 헤더 세트가 엔드포인트에 전달되며 요청 시 이미지를 반환합니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* *Plotly API Images* REST 엔드포인트 호출하기

* 엔드포인트에서 생성된 이미지 저장하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* **plot.ly**에 계정을 만드십시오: 여기서 plot.ly에 가입할 수 있습니다: https://plot.ly/accounts/login/?action=signup#/
* 계정과 함께 제공되는 plotly API 키를 가져오십시오; API 키는 사이트에 로그인한 상태에서 설정 페이지에서 찾을 수 있습니다

## Domain Model 설정하기

plotly REST 서비스 엔드포인트에서 사용할 Domain Model을 설정하려면 다음 단계를 따르십시오:

1. 두 개의 Entity를 만드십시오: **Image**와 **DataSource**.

1. **Image**는 **System.Image** Entity의 특수화여야 하므로 **Generalization**을 *System.Image*로 설정하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-image-entity.png" alt="image entity" class="no-border" >}}
1. **DataSource**는 **Data**와 **Layout** 문자열 Attribute를 가진 비영속 Entity여야 합니다.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-data-source-entity.png" alt="DataSource entity" class="no-border" >}}

## 'Plotly API Images' REST 엔드포인트 호출하기

*Plotly API images* REST 엔드포인트를 호출하려면 다음 단계를 따르십시오:

1. 기존 모듈에 빈 페이지를 추가하십시오.

1. 새 **DataSource** 객체를 반환하는 Microflow를 데이터 소스로 하는 **Data view**를 추가하십시오.

1. **Data view**에 소스 Attribute가 **Data**와 **Layout**인 입력 위젯을 배치하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-data-view.png" alt="Data view" class="no-border" >}}

1. *Data view*의 푸터에 **Call microflow button**을 추가하십시오.

1. 버튼을 새 Microflow: *ACT_Call_REST*에 연결하십시오.

1. 버튼 이름을 *Call Plotly REST Service*로 변경하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-button.png" alt="Configured microflow" class="no-border" >}}

1. 버튼을 마우스 오른쪽 버튼으로 클릭하고 **Go to on click microflow...**를 선택하십시오.

1. 아래와 같이 Microflow를 구축하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-microflow.png" alt="Configured microflow" class="no-border" >}}

1. **Call REST service** 액티비티는 다음과 같이 구성됩니다:

    * **General** 탭에서 **Location**을 *https://api.plot.ly/v2/images*로 설정하십시오

        {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-location.png" alt="Location" class="no-border" >}}
    * **HTTP Method**를 *POST*로 선택하십시오

        {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-method.png" alt="HTTP Method" class="no-border" >}}

    * **HTTP Headers** 탭에서 plotly 사용자 이름과 API 키를 입력하십시오 (plotly 인증에 대한 자세한 내용은 여기에서 확인할 수 있습니다: https://api.plot.ly/v2/#authentication)

        {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-authorization.png" alt="Authorization" class="no-border" >}}

        {{% alert color="warning" %}}사용자 정의 HTTP 헤더 'Content-Type'과 'Plotly-Client-Platform'이 제공되어야 합니다{{% /alert %}}

    * **Request** 탭에서 *Custom request template*을 선택하십시오; 요청은 다음 구조의 'JSON' 객체입니다

        ``` JSON
        {
            "figure": {
                "data": [{"y": [10, 10, 2, 20]}],
                "layout": {"width": 700}
            },
            "format": "png",
            "encoded": false
        }
        ```

        {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-request.png" alt="Request tab" class="no-border" >}}

        더 많은 요청 매개변수 세부 정보는 여기 문서를 참조하십시오: [Plotly REST API, v2](https://api.plot.ly/v2/images#fields).

        {{% alert color="warning" %}}`encoded`가 `true`로 설정되면 base64 이미지 URL이 반환됩니다.<br /><br />**Template** 필드에서 여는 중괄호 `{`는 이중 여는 중괄호 `{`<wbr>`{`를 사용하여 이스케이프하십시오.{{% /alert %}}

    * **Response** 탭에서 **Response handling**을 *Store in a file document*로 설정하십시오

        {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-response.png" alt="Response tab" class="no-border" >}}

    * **Output > Type**을 **Image** Entity로 설정하십시오

## 이미지 저장하기

REST 서비스에서 생성된 이미지를 저장하려면 다음 단계를 따르십시오:

1. *ACT_Call_REST* Microflow에 **Show page** 액티비티를 추가하십시오.

1. 새 페이지를 선택하십시오.

1. 생성된 이미지 객체를 페이지에 전달할 **Object to pass**로 설정하십시오.

1. 페이지의 레이아웃을 팝업으로 설정하십시오.

1. 페이지에 **Data view**를 배치하고 아래와 같이 채우십시오:

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-display-image.png" alt="Display image page" class="no-border" >}}

1. 앱을 실행하십시오.

1. 브라우저에서 **Call Plotly REST Service** 버튼이 있는 페이지를 여십시오.

1. **Data**와 **Layout** 필드를 채우십시오. 아래 이미지에 예가 표시되어 있습니다.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-fill-data.png" alt="Fill in data" class="no-border" >}}

1. **Call Plotly REST Service** 버튼을 클릭하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-plotly-images-rest/charts-call-rest-image-save.png" alt="Save image" class="no-border" >}}
    
1. **Save** 버튼을 클릭하여 표시된 이미지를 저장하십시오.

## 더 읽기

* [Plotly images 엔드포인트](https://api.plot.ly/v2/images)
* [Call a REST Service Action](/refguide8/call-rest-action/)
