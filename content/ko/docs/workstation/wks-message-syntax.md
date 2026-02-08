---
title: "파일, 스마트 카드 및 블루투스 장치의 메시지 구문"
linktitle: "장치 구문"
url: /mendix-workstation/device-syntax/
description: "다양한 장치 유형에 필요한 메시지 구문에 대한 정보를 제공합니다."
weight: 40
---

## 소개

Mendix Workstation이 장치와 통신할 수 있도록 하려면, 보내는 메시지가 올바른 구문을 사용하는지 확인해야 합니다. 이 구문은 장치 유형에 따라 다릅니다. 다음 섹션에서는 파일 시스템, 스마트 카드 및 Bluetooth 장치에 필요한 구문을 설명합니다.

## Bluetooth {#bluetooth}

이 장치 유형에는 다음과 같은 메시지와 응답이 필요합니다:

### 메시지

* `0#ServiceUUID#CharacteristicUUID` - 서비스 `ServiceUUID`의 특성(Characteristic) `CharacteristicUUID`를 구독합니다.
* `1#ServiceUUID#CharacteristicUUID` - 서비스 `ServiceUUID`의 특성(Characteristic) `CharacteristicUUID` 구독을 해제합니다.
* `2#ServiceUUID#CharacteristicUUID` - 서비스 `ServiceUUID`의 특성(Characteristic) `CharacteristicUUID`를 읽습니다.
* `3#ServiceUUID#CharacteristicUUID` - 서비스 `ServiceUUID`의 특성(Characteristic) `CharacteristicUUID`에 씁니다.

### 응답

* `CharacteristicUUID#Response`

## 파일 장치(File Device) {#file-device}

이 장치 유형에는 다음과 같은 메시지와 응답이 필요합니다:

### 중요 고려 사항

파일 장치(File Device)에 메시지를 보내기 전에 다음 사항을 검토하십시오:

* 경로 처리 - 경로를 절대 경로(예: `/var/log/app.log` 또는 `C:\Data\report.txt`)로 제공하거나 상대 경로로 제공할 수 있습니다. 상대 경로는 항상 Workstation Management에서 구성된 허용 폴더를 기준으로 해석됩니다.
* 구분자 - `#` 문자가 메시지 내 구분자로 사용됩니다. 경로와 데이터에는 `#` 문자를 포함할 수 없습니다. 
* 대소문자 구분 - 파일 및 디렉토리 경로는 기반 운영 체제에 따라 대소문자를 구분할 수 있습니다. 예를 들어, Linux 경로는 일반적으로 대소문자를 구분하지만, Windows 경로는 구분하지 않습니다.
 
### 메시지

* `0#Path` - 지정된 `Path`의 변경 사항 감시를 시작합니다. `Path`가 디렉토리인 경우, 해당 디렉토리 내의 변경 사항(파일/하위 디렉토리의 생성, 삭제, 이름 변경 또는 수정)을 감시합니다. `Path`가 파일인 경우, 해당 특정 파일의 변경 사항(수정, 삭제 또는 이름 변경)을 감시합니다.
* `1#Path` - 지정된 `Path`의 변경 사항 감시를 중지합니다.
* `2#File path` - 지정된 `File Path`에 있는 파일의 내용을 읽습니다.
* `3#File path#Data#flag` - 지정된 `File Path`에 있는 파일에 `Data`를 씁니다. `flag`는 덮어쓰기의 경우 `w`, 추가의 경우 `a`를 사용합니다. 비워두면 기본값은 `w`입니다.

### 응답

* `R#Path` - 지정된 `Path`의 파일 또는 디렉토리가 이름 변경, 생성 또는 삭제되었습니다.
* `C#Path` - 지정된 `Path`의 파일 또는 디렉토리가 변경되었습니다. 파일이 수정되거나 디렉토리의 내용이 변경될 때 트리거됩니다. 
* `D#Data` - 파일 읽기에서 가져온 `Data`입니다.
* `E#Error` - 운영 체제의 `Error` 메시지입니다.
* `S#{0,1,2,3}#directory` - `directory`에 대한 명령 `{0,1,2,3}`이 성공했습니다.

### 예제 테스트

아래 섹션은 구성을 확인하기 위해 실행할 수 있는 샘플 테스트를 보여줍니다.

1. Workstation Management에서 새 워크스페이스를 생성하십시오.
2. 새 스테이션을 생성하십시오.
3. 이 스테이션에 다음 구성으로 `File Device`를 추가하십시오:
    * **Device Name** - *Write files to test folder* 
    * **Allowed Folder** - 예를 들어, Windows 컴퓨터에서 `C:\MyTestFolder`와 같은 경로를 사용할 수 있습니다.
    * **Allow writing files** - **Yes**
    * 나머지는 기본값을 사용하십시오. 
4. 스테이션을 컴퓨터에 등록하십시오(Workstation Client가 설치되어 있다고 가정합니다).
5. 워크스페이스에서 **Test Your Station**으로 이동하여 구성된 파일 장치를 클릭하십시오.
6. **Send Message** 필드에 `3#test.txt#Hello from Mendix`를 입력한 다음 **Send Message**를 누르십시오.

    테스트 결과 텍스트 파일 *test.txt*가 *MyTestFolder*에 성공적으로 작성되었음을 나타내는 `S#3#C:\MyTestFolder\test.txt`와 같은 응답이 표시되어야 합니다. 

7. *C:\MyTestFolder*로 이동하여 텍스트 파일이 포함되어 있는지 확인하십시오.
8. 테스트 파일을 열고 *Hello from Mendix*라는 텍스트가 포함되어 있는지 확인하십시오.

## 카드 리더기 {#card-readers}

이 장치 유형에는 다음과 같은 메시지와 응답이 필요합니다:

### 메시지

16진수 문자열로 명령을 보내십시오. 예를 들어, 스마트 카드 ID를 읽으려면 *FFCA000000*을 사용합니다. 스마트 카드와 교환되는 메시지는 APDU 메시지입니다. 자세한 내용은 스마트 카드 리더기의 APDU 명령 문서를 참조하십시오.

### 응답

* `0#` - 카드가 연결되었습니다.
* `1#` - 카드가 연결 해제되었습니다.
* `2# Response` - 장치에서 원시 16진수로 응답합니다.
* `3# Error` - 장치에서 오류 메시지를 반환합니다.
