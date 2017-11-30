---
title: "Encode an Icon with Base64"
category: "Custom Widgets"
---
## Description

This section describes how to encode your widget icon as Base64\. This is the format used by the Mendix Business Modeler when reading in your widget.xml. Tutorials related to this subject can be found [here](custom-widgets).

## Instructions

 **Find a suitable icon.**

The first step is to find a small image to encode. For this how-to the following icon will be used: ![](attachments/2621632/2752920.png)

 **Encode the image.**

Use a Base64 encoder to process the image. These can be easily found by searching for "Base64 encoder" with a web search engine.

 **Insert the string into your widget.xml.**

Enter the string which resulted from encoding between your widget.xml's <icon> tags.

```java
<icon>iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2Fy
ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoZJREFUeNpEkTtoVEEUhs85M/fu7s1K
VKIQUSwMsfABARERLSSIldoKNj4QBLEWiwhWVoKVldgICiLY2ARBtAiKYiBoxOey
SJLdLNns6969c+d1HAX1FAPD/OfMd/4f59rm5uv8Q4pEQOCBCRgAwSMiM8LvWygJ
aoLWbxzdJq++yeeXbdBCeGULOAJYAAdZjIIQlZeI1iEm9ZVaq92Tq4Mc4spEgoe2
Gi9K5IzyUYLcUfp50yssky8gnM6wh9VWX7KIodCnJpPbh0vNQlRJVSPZVSjjkaff
+5fn8pwTIQ13G6wyWYqJXCAUEEF9wFOP0kuveF3D9LPB+Zf9M5OVfVvKYbDLWtxe
Rme8ySWgBZbS/d6yWdhVI8KQpYIaLQr41djAoM3LNcHaUsnHjuBvBUOAgldkUEaS
ygJEsKG1Ihrf7pycOLZ7G2QZGP+/4V9XBJ6swrxTEeyHPaHVxYPbp8YSKAryJIEF
kGdiF9SspbOOkXuN1npaW9s4c3znm10byjEu1JqBHG0efrAAmQBDYbu0BXkHgRKt
0oE++2B+anzT9enJmScfZz81AzCzkeCHoPukw94xqFR4IZ0QmkOIo1GJKEC6YDRy
EXJn6wktg7Zh6p+k2RvnApFzY5G6d+7Q84WlK48Xrp3ae2LPDuilGNidM6AhpF+J
LBmIwSYxhlw3j8gd1fj+y893Z7/2Crt/fAy8kcaI5PSlbJhHLqp38tf1PngxHKi5
L828gKGyL2pr3VwZ7d4v/qh31CgpPPjwy9taN3RDPgQpAx6kA4hdsBy6OUQBNWQ3
BBSg6cDOCN+tZtdmfy6udcragyXru95VwBdxkVkn0Cny3jI6ne/ZWL114cgvAQYA
01518wUVoBgAAAAASUVORK5CYII=</icon>

```
