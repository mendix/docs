---
title: "3D Viewer 고급 구성"
url: /partners/siemens/3d-viewer/advanced-configuration/
weight: 4
description: "Describes the advanced configuration of the 3D Viewer app service."
---

## 소개

뷰어는 동작을 사용자 정의하기 위한 포괄적인 구성을 제공합니다. 고급 사용자는 기본 옵션을 재정의하여 제품을 사용자 정의할 수 있습니다. 일부 옵션은 **Advanced Version**에서만 사용할 수 있으므로 구성 옵션을 사용할 때 이 점에 유의하십시오.

다음은 구성 옵션을 설정하는 방법의 예입니다:

```json
{
    "enableCache": true,
    "enableSectionManipulator": true,
    "enableBboxSurfaceScanner": true,
    "bboxSurfaceScanner": {
        "showBBoxes": false,
    },
    "pmiPreference": {
        "ignoredPMI": ["DIMENSION","NOTE"], 
        "ignoreModelView": true, 
        "ignoreDesignGroup": true, 
        "onlyShowAssemblyLevelPMI": false
    }
}
```

다음 구성 옵션을 설정할 수 있습니다:

## 캐시 옵션

### enableCache

JT 파일을 로드할 때 엣지/세그먼트/버텍스 캐시를 활성화합니다. 동일한 JT 파일을 열 때 브라우저 캐시에서 직접 로드하여 성능을 향상시킵니다.

* Type – Boolean
* Default value – *false*

## SectionManipulator 옵션

### enableSectionManipulator

[section view](/partners/siemens/3d-viewer/installation-configuration/#section-view)에 대해 enableSectionManipulator를 true로 설정하면 단면 평면에 삼면체 드래그 핸들이 추가됩니다.

* Type – Boolean
* Default value – *false*

### enableSectionHandle

[section view](/partners/siemens/3d-viewer/installation-configuration/#section-view)에 대해 enableSectionHandle을 true로 설정하면 단면 평면에 드래그 핸들이 추가됩니다.

* Type – Boolean
* Default value – *false*

### sectionHandle

sectionHandle의 스타일을 정의합니다. `arrowRadius`와 `handleRadius`는 픽셀 단위로 측정됩니다.

* Type – object
* Default value –

    ```json
    {
        "arrowColor": 16711680,
        "handleColor": 16711680,
        "arrowRadius": 8,
        "handleRadius": 1.5
    }
    ```

## Culling / bboxSurfaceScanner

### enableBboxSurfaceScanner

이를 true로 설정하면 지연 로딩 및 렌더링을 위한 바운딩 박스 SurfaceScanner가 활성화되어 대형 모델의 성능이 향상됩니다.

* Type – Boolean
* Default value – *false*

### bboxSurfaceScanner

bboxSurfaceScanner 옵션을 지정합니다.

* Type – object
* Default value –

    ```json
    {
        "useDefault": true,
        "detailLevel": 35.8,
        "positions": {
            "enableAllScannerPositions": false,
            "positions": {
                "front": true
            },
            "fitAllPositions": {
                "left": false,
                "right": false,
                "top": false,
                "bottom": false,
                "front": false,
                "rear": false
            }
        },
        "bboxOpacity": 35,
        "showBBoxes": true,
        "useMovingFrameCulling": true,
        "movingFrameCullingBoundary": 2,
        "movingFrameSleepMS": 200,
        "autoScanning": true,
        "autoScanDelayMS": 2000,
        "cameraSensitivity": 0.1,
        "reevaluateAfterRotation": true,
        "drawWhileLoading": false,
        "renderBBoxesOnMovingFrames": false,
        "sleepBetweenAutoDrawsMS": 750
    }
    ```

## 측정

### measurementStyle

측정 동작 및 치수 스타일을 정의합니다. `measurement` 섹션은 측정 동작을 사용자 정의하는 데 사용되며 `dimension` 섹션은 텍스트, 재질, 선, 색상 등을 사용자 정의하는 데 사용됩니다.  |

* Type – object
* Default value –

    ```json
    {    
        "dimension": {    
            "text": {    
                "color": 0,    
                "flatToScreen": true,    
                "font": 1,    
                "lineGapFactor": 0.25,    
                "lineFactor": 0.25,    
                "hasBorder": false,    
                "isHollow": false,    
                "backgroundColor": 39321,    
                "labelTextColor": 16777215,    
                "textSelectionColor": 16777215,    
                "textHighlightColor": 16777215,    
                "selectionBackgroundColor": 39321,    
                "highlightBackgroundColor": 6151645,    
                "height": 12,    
                "fontFamily": "Arial"    
            },    
            "associationMaterial": {    
                "diffuse": 18761,    
                "linewidth": 3    
            },    
            "associationHighlightMaterial": {    
                "diffuse": 6151645,    
                "specular": 0,    
                "shininess": 1,    
                "linewidth": 3    
            },    
            "pointOnTopColor": {    
                "diffuse": 14226709    
            },    
            "arrowLine": {    
                "color": 8886442    
            },    
            "extensionLine": {    
                "color": 8886442    
            },    
            "selectionColor": 39321,    
            "highlightColor": 6151645,    
            "widelineHighlightColor": {    
                "linewidth": 3,    
                "diffuse": 14226709    
            },    
            "meshHighlightColor": 14226709,    
            "overwrite": true    
        },    
        "measurement": {    
            "autoPosition": false,    
            "highlightColor": {    
                "diffuse": 14226709,    
                "specular": 1,    
                "shininess": 1    
            },    
            "pickingMaterial": {    
                "diffuse": 12156222,    
                "specular": 0,    
                "shininess": 0    
            }    
        }    
    }
    ```

## 환경 설정 옵션

다음은 환경 설정 구성 샘플입니다:

```json
{
    "pmiPreference": {
        "ignoredPMI": ["DIMENSION","NOTE"], 
        "ignoreModelView": true, 
        "ignoreDesignGroup": true, 
        "onlyShowAssemblyLevelPMI": false
    }
}
```

### ignoredPMI

표시하지 않으려는 PMI 엔티티(Entity)를 정의합니다.

* Type – array
* Default value - *`[ ]`*

사용 가능한 열거형 값:

```json

{
  "type": "array",
  "items": {
    "type": "string",
    "enum": [
      "BALLOON_NOTE",
      "CALLOUT_DIMENSION_TYPE",
      "CENTRELINE",
      "CHAMFER_DIMENSION_TYPE",
      "COORDINATE_SYSTEM",
      "DATUM_TARGET",
      "DIMENSION",
      "FEATURE_CONTROL_FRAME",
      "FEATURE_DATUM_TYPE",
      "FEATURE_DISCRETE_JOIN_TYPE",
      "LINE_WELD",
      "MATERIAL_SPECIFICATION",
      "MEASUREMENT_LOCATOR",
      "MEASUREMENT_POINT",
      "NOTE",
      "ORGANIZATION",
      "PART_SPECIFICATION",
      "PMI_TABLE_TYPE",
      "PROCESS_SPECIFICATION",
      "REFERENCE_AXIS",
      "REFERENCE_GEOMETRY",
      "REFERENCE_PLANE",
      "REFERENCE_POINT",
      "SECTION",
      "SPOT_WELD",
      "SURFACE_FINISH"
    ]
  }
}

```

### ignoreModelView

모델 뷰를 필터링할지 여부를 정의합니다.

* Type – Boolean
* Default value – *false*

### ignoreDesignGroup

디자인 그룹을 필터링할지 여부를 정의합니다.

* Type – Boolean
* Default value – *false*

#### onlyShowAssemblyLevelPMI

어셈블리 수준 PMI만 표시할지 여부를 정의합니다.

* Type – Boolean
* Default value – *false*
