---
title: "3D Viewer API 사용"
url: /partners/siemens/3d-viewer-api/
description: "Describes how to use the 3D Viewer API"
---

## 소개

3D Viewer API를 사용하면 3D 모델 엔티티(Entity), 액션 및 속성을 프로그래밍 방식으로 검색, 생성 및 업데이트할 수 있습니다. 3D 모델과 상호 작용하고 조작하는 사용자 정의 로직을 쉽게 만들 수 있습니다.

## API 레퍼런스

자세한 내용은 [3D Viewer API Reference](https://d102io3ppw18a6.cloudfront.net/)를 참조하십시오.

## 사용법

### 사용 사례 예제

3D Viewer에서 선택한 부품의 속성을 가져오려면 다음 단계를 수행하십시오:

1. 3D Viewer의 [선택 변경 시](/partners/siemens/3d-viewer/usage/#on-selection-change) 이벤트 속성을 통해 선택한 객체 정보를 문자열로 가져오십시오.
2. [`mx.viewer3D.getObjects()`](http://3dviewer-apidoc.s3-website.eu-central-1.amazonaws.com/index/v2.1/apidoc/3dviewer.mx.viewer3d.getobjects.html#mx-viewer3d-getobjects-function)를 사용하여 객체 인스턴스를 가져오십시오.
3. [`IPart.getProperties()`](http://3dviewer-apidoc.s3-website.eu-central-1.amazonaws.com/index/v2.1/apidoc/3dviewer.ipart.getproperties.html)를 사용하여 선택한 객체를 파라미터로 전달하십시오. 그러면 키-값 쌍으로 속성을 얻을 수 있습니다. 다음은 JavaScript 액션의 샘플 코드입니다. `selectedObject`와 `propertyObject` 2개의 파라미터를 받습니다.

    ```javascript
        /**
         * @param {string} selectedObject
         * @param {string} propertyObject
         * @returns {Promise.<MxObject[]>}
         */
        export async function GetProperties(selectedObject, propertyObject) {
          // BEGIN USER CODE
          console.info(selectedObject);
            // Get the underlying 3D objects given its selection ids.
          let instances = mx.viewer3D.getObjects(selectedObject);
          let promises = [];
          let objects = [];
          if (instances && instances.length > 0) {
            let properties = await instances[0].getProperties();
            for(let key in properties) {
              if(properties.hasOwnProperty(key)) {
                promises.push(createPropertyObject(objects, key, properties[key]));
              }
            }
          }
    
          return Promise.all(promises).then(()=>objects);
    
          function createPropertyObject(objects, key, value) {
          return new Promise(function (resolve, reject) {
              mx.data.create({
            entity: propertyObject,
            callback: function(prop) {
                prop.set("Key", key);
                prop.set("Value", value);
                  objects.push(prop);
                resolve(prop);
            },
              error: function(error) {
                  reject(error.message);
              }
                });
            });
              }
    
            // END USER CODE
          }
    ```

4. 나노플로우(Nanoflow)에서 이 JavaScript 액션을 호출하여 주어진 부품의 모든 사용 가능한 속성을 가져오십시오.
5. 반환된 모든 속성을 표시하기 위해 페이지를 사용하십시오:
    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-api/show-properties.jpg" alt="show-properties" class="no-border" >}}

### 기타 샘플 코드 스니펫

버전 2.2.0부터 3D Viewer 모듈에는 일부 기본 제공 API 액션이 포함되어 있습니다. 이 모듈을 사용하면 **RotatePart**, **ScalePart**, **SetPartColor** 및 **TranslatePart** API 액션을 통해 모델 부품을 조작할 수 있습니다. 이러한 액션은 Studio Pro의 **App Explorer**에서 **Viewer3D** > **USE_ME** > **API Actions** 폴더에서 찾을 수 있습니다. 이를 직접 사용하여 모델 조작을 위한 사용자 정의 로직을 만들 수 있습니다. 이러한 JavaScript 액션의 코드 구현과 3D Viewer API Reference를 확인하십시오. 이를 통해 3D Viewer API를 어떻게 활용할지에 대한 아이디어를 얻을 수 있습니다.

## 피드백

[3D Viewer API Reference](https://d102io3ppw18a6.cloudfront.net/)에 나열된 3D Viewer API를 사용하는 데 문제가 있거나 더 많은 API가 노출되기를 원하시면 [Mendix Support 포털](https://support.mendix.com/)에서 티켓을 제출하십시오. 그에 따라 처리하겠습니다.
