---
title: "3D Viewer Advanced Configuration"
url: /partners/siemens/3d-viewer/advanced-configuration/
weight: 4
description: "Describes the advanced configuration of the 3D Viewer app service."
---

## Introduction

The viewer provides comprehensive configurations to customize behaviors. Advanced users can use these to customize their products by overriding default options. Some of the options are available in the **Advanced Version** ONLY, so please be aware of this when using the configuration options.

Here is an example of how to set configuration options:

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

You can set the following configuration options:

## Cache Options

### enableCache

This enables the edge / segment / vertex cache when loading JT files. When opening the same JT files, it will load directly from the browser cache to improve performance.

* Type – Boolean
* Default value – *false*

## SectionManipulator Options

### enableSectionManipulator

If you set enableSectionManipulator to true for a [section view](/partners/siemens/3d-viewer/installation-configuration/#section-view), it will add a trihedron drag handle to the section plane.

* Type – Boolean
* Default value – *false*

### enableSectionHandle

If you set enableSectionHandle to true for a [section view](/partners/siemens/3d-viewer/installation-configuration/#section-view), it will add a drag handle to the section plane.

* Type – Boolean
* Default value – *false*

### sectionHandle

Defines the style of sectionHandle. `arrowRadius` and `handleRadius` are measured in pixels.

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

Setting this to true enables bounding box SurfaceScanner for lazy loading and rendering, which will improve performance for large models.

* Type – Boolean
* Default value – *false*

### bboxSurfaceScanner

Specifies bboxSurfaceScanner options.

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

## Measurement

### measurementStyle

This defines measurement behaviors and dimension styles. The `measurement` section is used to customize measurement behaviors and the `dimension` section is used to customize text, material, lines, colors etc.  |

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

## Preference Options

Here is a sample Preference configuration:

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

Defines the PMI entities you do not want to display.

* Type – array
* Default value - *`[ ]`*

Available enumeration values:

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

Defines whether or not to filter the model view.

* Type – Boolean
* Default value – *false*

### ignoreDesignGroup

Defines whether or not to filter the design group.

* Type – Boolean
* Default value – *false*

#### onlyShowAssemblyLevelPMI

Defines whether or not to show the assembly level PMI only.

* Type – Boolean
* Default value – *false*
