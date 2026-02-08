---
title: "클라이언트 인증서 사용하기"
url: /howto9/integration/use-a-client-certificate/
description: "클라이언트 인증서를 사용하여 인증하도록 앱을 구성하는 방법을 설명합니다."

#If moving or renaming this doc file, implement a temporary redirect and let the respective team (buildpack) know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

일부 서비스는 클라이언트 인증서를 사용하여 인증해야 합니다. 이 사용 방법 문서에서는 이를 수행하도록 앱을 구성하는 방법을 설명합니다.

서비스를 호출하는 앱이 이미 있다고 가정합니다. 이를 구성하는 방법에 대한 자세한 내용은 [REST 서비스 소비하기](/howto9/integration/consume-a-rest-service/) 또는 [간단한 웹 서비스 소비하기](/howto9/integration/consume-a-simple-web-service/)를 참조하십시오.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 로컬 실행 구성하기
* Mendix Cloud에서 구성하기

## 전제 조건

* 개인 키가 포함된 PKCS12 인증서 파일 — 이러한 파일은 일반적으로 *.pfx* 또는 *.p12* 파일 확장자를 가집니다
* 해당 파일을 열기 위한 비밀번호

## 로컬에서 실행하기

앱을 로컬에서 실행할 때만 사용되는 사용자 정의 설정을 구성하려면 다음 단계를 따르십시오:

1. Studio Pro에서 앱을 열고 **App** > **Settings**로 이동하십시오.
2. **Edit**를 클릭하여 **Edit Configuration** 대화 상자를 열고 **Custom** 탭을 선택하십시오.
3. 인증서 경로(ClientCertificates)와 일치하는 비밀번호(ClientCertificatePasswords)를 지정하는 두 개의 사용자 정의 설정을 추가하십시오. 또한 앱에서 둘 이상의 인증서를 사용하는 경우 어떤 서비스에서 어떤 인증서를 사용할지 지정하는 세 번째 설정(ClientCertificateUsages)을 추가하십시오.

    이름 | 값 | 참고
    --- | --- | ---
    ClientCertificates | 인증서 파일의 경로. | 파일이 둘 이상인 경우 쉼표로 구분하십시오. 경로의 백슬래시는 이중으로 사용할 필요가 없습니다.
    ClientCertificatePasswords | 각 인증서 파일의 비밀번호. | **ClientCertificates**와 동일한 순서로 입력하십시오.
    ClientCertificateUsages **(선택 사항)** | 어떤 파일을 어떤 서비스에 사용할지에 대한 설명. `"ModuleName.WebserviceName": "path"` 형식(웹 서비스용) 또는 `"www.server-to-contact.com": "path"` 형식(REST 서비스용). | 구성할 서비스가 둘 이상인 경우 쉼표로 구분할 수 있습니다. 전체 설정 값을 중괄호(`{ }`)로 감싸십시오. 경로의 백슬래시는 이중으로 사용해야 합니다. 또한 여기에서 지정하는 경로는 모두 **ClientCertificates**에 나타나야 합니다.

다음은 예제입니다:

```shell
{ "Module.WebService1": "D:\\App\\Mx1.pfx", "www.server-to-contact.com": "D:\\App\\Mx2.pfx" }
```

전체 구성은 다음과 같을 수 있습니다:

{{< figure src="/attachments/howto9/integration/use-a-client-certificate/example-custom-settings.png" class="no-border" >}}

서버가 클라이언트 인증서를 수락하는 경우에도 사용하지 않도록 지정하려면 `ClientCertificateUsages`에 빈 경로를 사용할 수 있습니다. 이를 위해 **Value** `{"<endpoint>":""}` 값을 추가해야 합니다(`<endpoint>`를 실제 엔드포인트로 교체하십시오).

{{% alert color="info" %}}
URL 엔드포인트에서 `https://`를 제거하십시오.
{{% /alert %}}

다음 샘플은 `WebService1`에 클라이언트 인증서 `Mx1.pfx`를 사용하고 `WebService2`에는 클라이언트 인증서를 사용하지 않습니다:

```shell
{ "Module.WebService1": "D:\\App\\Mx1.pfx", "Module.WebService2": "" }
```

## 클라우드에서 실행하기

{{% alert color="info" %}}
클라이언트 인증서에 대한 올바른 접근 권한이 있는 경우에만 아래 단계를 따를 수 있습니다.
{{% /alert %}}

Mendix Cloud에서 클라이언트 인증서를 구성하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com/)로 이동하여 앱의 **Environments** 페이지로 이동하십시오.
2. 각 환경에는 자체 구성이 있습니다. 환경 중 하나 옆의 **Details**를 클릭하십시오.
3. **Network**를 클릭하고 **Certificates for outgoing connections**까지 스크롤하십시오.
4. **Add client certificate**를 클릭하십시오. 인증서 파일을 업로드하십시오.
5. 앱에서 둘 이상의 클라이언트 인증서를 사용하는 경우에만 다음 단계를 따르십시오:
    1. 파일이 업로드되면 목록에 나타납니다. 목록의 항목을 더블 클릭하십시오.
    2. **Details** 화면의 **Pin Client Certificate to Web Services** 섹션에서 어떤 클라이언트 인증서가 어떤 서비스에 속하는지 지정할 수 있습니다:
        * 웹 서비스의 경우, 웹 서비스 이름을 입력하십시오(예: *ModuleName.WebServiceName*)
        * REST 서비스의 경우, 엔드포인트의 호스트 이름을 입력하십시오(예: *example.com*)
    3. **Details** 화면을 닫으십시오.

6. **Stop application**을 클릭한 다음 **Start application**을 클릭하십시오.
