---
title: "MPR Analyze Command"
url: /refguide/mx-command-line-tool/analyze-mpr/
weight: 60
description: "Describes MPR analyze command, which shows the contents of the MPR file and their contribution to file size."
---

## Introduction

The `mx analyze-mpr` command enables you to show information about the MPR file in the form of plaintext. 

{{% alert color="info" %}}
This command is available in `mx.exe` from Studio Pro 10.17.0 and above.
However, it can also be used to analyze MPR files created in older versions starting from Studio Pro 9.24.
{{% /alert %}}

{{% alert color="warning" %}}
We do not recommend building custom tooling on top of this outpur, as the output and the format may change over time.
{{% /alert %}}

## Usage

Use the following command pattern: `mx analyze-mpr TARGET-FILE [OPTIONS]`

The `TARGET-FILE` points to the location of the project file (this file has the extension *.mpr*).

The `OPTIONS` are described in the table below:

| Option | Result |
| --- | --- |
| `--big-string-threshold` | (Default: 1000) The number of bytes from which to consider a String value 'big' (for `Content categories` section) |
| `--big-blob-threshold` | (Default: 1000) The number of bytes from which to consider a BLOB value 'big' (for `Content categories` section) |
| `--help` | Displays the help screen. |

### Analysis

To identify which types of documents (pages, microflows, etc.) have the largest contribution to the MPR file size, you can focus on the **Size by unit type** section, where the number of occurrences and file size contribution are displayed in percentage.

### Examples

Valid examples are given below:

* `mx analyze-mpr temp.mpr`
* `mx analyze-mpr temp.mpr > analysis.txt`, to output to a text file

An example of the output is presented below:

<details>

<summary>Expand for code sample</summary>

  ```json
Reading file...
Calculating stats...

MPR File Analysis
----------------------------------------------------------------------------------------------------------------------------
            MPR File: C:\App.mpr
        Size on disk: 9.789.440 bytes
      Mendix version: 10.7.0.26214
     Number of units: 579

BSON contents
----------------------------------------------------------------------------------------------------------------------------
                                            IDs (model data) |      613.767 bytes |  6,27% of MPR |       29.227 occurrences
                               Primitive values (model data) |    5.818.329 bytes | 59,43% of MPR |       76.155 occurrences
                             Objects and arrays (model data) |      533.977 bytes |  5,45% of MPR |       43.430 occurrences
                                       Subtotal (model data) |    6.966.073 bytes | 71,16% of MPR | 
                                       Type names (metadata) |      729.494 bytes |  7,45% of MPR |       29.227 occurrences
                                   Property names (metadata) |    1.674.736 bytes | 17,11% of MPR |      171.541 occurrences
                                         Subtotal (metadata) |    2.404.230 bytes | 24,56% of MPR | 
                                      Total of all BSON data |    9.370.303 bytes | 95,72% of MPR | 

Content categories
----------------------------------------------------------------------------------------------------------------------------
                                           Marketplace units |    9.273.105 bytes | 94,73% of MPR |          567 occurrences
                                          Excluded documents |       99.191 bytes |  1,01% of MPR |            7 occurrences
                                                     Strings |      741.584 bytes |  7,58% of MPR |       52.852 occurrences
                                Big Strings (>= 1.000 bytes) |       28.026 bytes |  0,29% of MPR |            9 occurrences
                                                       BLOBs |    4.944.198 bytes | 50,51% of MPR |          816 occurrences
                                  Big BLOBs (>= 1.000 bytes) |    4.913.118 bytes | 50,19% of MPR |          326 occurrences

Size by module
----------------------------------------------------------------------------------------------------------------------------
                             [Marketplace] Atlas_Web_Content |    5.843.754 bytes | 59,69% of MPR |          141 occurrences
                                 [Marketplace] ExcelImporter |    1.826.742 bytes | 18,66% of MPR |          143 occurrences
                               [Marketplace] NanoflowCommons |      598.367 bytes |  6,11% of MPR |           59 occurrences
                                    [Marketplace] Atlas_Core |      409.550 bytes |  4,18% of MPR |           44 occurrences
                                [Marketplace] Administration |      227.841 bytes |  2,33% of MPR |           30 occurrences
                              [Marketplace] CommunityCommons |      178.742 bytes |  1,83% of MPR |          126 occurrences
                                    [Marketplace] WebActions |      112.509 bytes |  1,15% of MPR |           14 occurrences
                                [Marketplace] FeedbackModule |       74.697 bytes |  0,76% of MPR |            6 occurrences
                                                      Module |       26.740 bytes |  0,27% of MPR |            6 occurrences
                                   [Marketplace] DataWidgets |          903 bytes |  0,01% of MPR |            4 occurrences

Size by unit
----------------------------------------------------------------------------------------------------------------------------
      (ImageCollection) 6742d31e-db3c-4b03-927f-f6c37145e76f |    3.351.900 bytes | 34,24% of MPR | 
                 (Page) 07f4376a-22f2-41f7-ae0f-abd83b7cb4e1 |      408.219 bytes |  4,17% of MPR | 
         (PageTemplate) 008392a8-078f-4571-8f46-68cf612c0faf |      181.118 bytes |  1,85% of MPR | 
 (CustomIconCollection) d467a9be-3123-43dc-913b-679ede3c5e50 |      122.932 bytes |  1,26% of MPR | 
 (CustomIconCollection) efdec79f-91e2-4e96-b2f8-98384a897e0c |      110.904 bytes |  1,13% of MPR | 
         (PageTemplate) 9bb6404f-e348-439f-a916-32583dd5712a |       97.280 bytes |  0,99% of MPR | 
         (PageTemplate) b5cc64d4-3754-44e6-a73c-8250cf9c071d |       97.226 bytes |  0,99% of MPR | 
                 (Page) 06616fac-b3d8-4902-8b8f-1d453c6aa621 |       87.898 bytes |  0,90% of MPR | 
                 (Page) b9951248-773b-4ad2-a18f-ab50dfa6f1d3 |       73.316 bytes |  0,75% of MPR | 
            (Microflow) a7135f54-443c-4afc-895a-47e597eab50d |       72.110 bytes |  0,74% of MPR | 
        (BuildingBlock) a48635af-2edc-43d8-aac3-45bc39d70c41 |       70.760 bytes |  0,72% of MPR | 
         (PageTemplate) 471f6ace-e3a8-49ae-a053-3bff13a82360 |       70.703 bytes |  0,72% of MPR | 
              (Snippet) bac68ebb-899b-49c6-a479-0fcd00e2ead6 |       67.969 bytes |  0,69% of MPR | 
         (PageTemplate) 232288a1-0a1e-484f-9089-5073248a6c71 |       66.810 bytes |  0,68% of MPR | 
         (PageTemplate) cf4a9916-968c-45ad-ae53-97ff4640e1d5 |       65.394 bytes |  0,67% of MPR | 
        (BuildingBlock) 0b8bc2b0-0976-49ee-90df-6093c2bfee38 |       60.639 bytes |  0,62% of MPR | 
         (PageTemplate) ef74cde0-8b1d-4498-8ffb-581221da2e5f |       57.438 bytes |  0,59% of MPR | 
        (BuildingBlock) 3502c52d-2a92-450c-95fc-bd3a36cbce8b |       56.736 bytes |  0,58% of MPR | 
          (DomainModel) c1187c66-4539-4354-ad84-2a6487bd9df8 |       56.273 bytes |  0,57% of MPR | 
         (PageTemplate) 52f7bb71-ebc9-4f7c-a080-a7121b0e2834 |       54.900 bytes |  0,56% of MPR | 

Size by unit type
----------------------------------------------------------------------------------------------------------------------------
                                      Images$ImageCollection |    3.433.870 bytes | 35,08% of MPR |            6 occurrences
                                          Forms$PageTemplate |    1.714.342 bytes | 17,51% of MPR |           52 occurrences
                                                  Forms$Page |      945.107 bytes |  9,65% of MPR |           24 occurrences
                                         Forms$BuildingBlock |      844.441 bytes |  8,63% of MPR |           46 occurrences
                                        Microflows$Microflow |      826.584 bytes |  8,44% of MPR |           94 occurrences
                          JavaScriptActions$JavaScriptAction |      645.182 bytes |  6,59% of MPR |           52 occurrences
                            CustomIcons$CustomIconCollection |      233.836 bytes |  2,39% of MPR |            2 occurrences
                                      JavaActions$JavaAction |      137.036 bytes |  1,40% of MPR |           96 occurrences
                                               Forms$Snippet |      113.500 bytes |  1,16% of MPR |            4 occurrences
                                                Forms$Layout |       79.314 bytes |  0,81% of MPR |           21 occurrences
                                    DomainModels$DomainModel |       75.667 bytes |  0,77% of MPR |           10 occurrences
                                  Texts$SystemTextCollection |       54.860 bytes |  0,56% of MPR |            1 occurrences
                                             Microflows$Rule |       53.640 bytes |  0,55% of MPR |            4 occurrences
                                ExportMappings$ExportMapping |       48.968 bytes |  0,50% of MPR |            1 occurrences
                                    Enumerations$Enumeration |       48.672 bytes |  0,50% of MPR |           22 occurrences
                                ImportMappings$ImportMapping |       41.088 bytes |  0,42% of MPR |            1 occurrences
                                WebServices$PublishedService |       19.282 bytes |  0,20% of MPR |            1 occurrences
                                        XmlSchemas$XmlSchema |       16.212 bytes |  0,17% of MPR |            1 occurrences
                                  Projects$ProjectConversion |        9.724 bytes |  0,10% of MPR |            1 occurrences
                                             Projects$Folder |        7.538 bytes |  0,08% of MPR |           96 occurrences

Size by property
----------------------------------------------------------------------------------------------------------------------------
                                          Images$Image.Image |    3.426.303 bytes | 35,00% of MPR |           58 occurrences
                                Forms$PageTemplate.ImageData |      468.890 bytes |  4,79% of MPR |           52 occurrences
                               Forms$BuildingBlock.ImageData |      345.496 bytes |  3,53% of MPR |           46 occurrences
               CodeActions$MicroflowActionInfo.ImageDataDark |      214.830 bytes |  2,19% of MPR |          115 occurrences
                   CodeActions$MicroflowActionInfo.ImageData |      197.877 bytes |  2,02% of MPR |          115 occurrences
                   CustomIcons$CustomIconCollection.FontData |      118.718 bytes |  1,21% of MPR |            2 occurrences
                    CodeActions$MicroflowActionInfo.IconData |       90.315 bytes |  0,92% of MPR |          115 occurrences
                                      Texts$Translation.Text |       77.963 bytes |  0,80% of MPR |        3.959 occurrences
                CodeActions$MicroflowActionInfo.IconDataDark |       77.819 bytes |  0,79% of MPR |          115 occurrences
                              Texts$Translation.LanguageCode |       39.590 bytes |  0,40% of MPR |        3.959 occurrences
                        JavaActions$JavaAction.Documentation |       24.744 bytes |  0,25% of MPR |           96 occurrences
                                      Forms$Appearance.Class |       22.067 bytes |  0,23% of MPR |        2.650 occurrences
                  Microflows$SequenceFlow.DestinationPointer |       18.039 bytes |  0,18% of MPR |          859 occurrences
                       Microflows$SequenceFlow.OriginPointer |       18.039 bytes |  0,18% of MPR |          859 occurrences
                       XmlSchemas$XmlSchemaContents.Contents |       15.710 bytes |  0,16% of MPR |            1 occurrences
                                      Forms$Appearance.Style |       13.516 bytes |  0,14% of MPR |        2.650 occurrences
                             Forms$Appearance.DynamicClasses |       13.250 bytes |  0,14% of MPR |        2.650 occurrences
                                 CustomIcons$CustomIcon.Tags |       13.112 bytes |  0,13% of MPR |        1.224 occurrences
                               Forms$DesignPropertyValue.Key |       12.699 bytes |  0,13% of MPR |          774 occurrences
                                 CustomIcons$CustomIcon.Name |       12.438 bytes |  0,13% of MPR |          732 occurrences
  ```

</details>
