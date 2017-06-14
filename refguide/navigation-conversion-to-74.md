---
title: "Solving Issues with Navigation Profiles Conversion to 7.4"
space: "Mendix 7 Reference Guide"
parent: "project"
description: "Describes requirements and possible fixes for navigation profiles conversion from Mendix versions 7.2 and 7.3 to Mendix 7.4"
---

## 1 Changes in 7.4 for profiles

In Mendix version 7.2 and 7.3 it was no exact separation between tablet and phone hybrid profiles. Only separation was the logical meaning of profile name like "MyTabletProfile" and "MyPhoneProfile". In Mendix version 7.4 separation of hybrid profiles by device type was introduced. It makes profiles easier to understand and work with.
Also to prevent confusion while working with profiles it is not allowed to have more than 1 profile of specific type. This restriction allows us to omit profile name.

## 2 Conversion process

For projects based on Mendix 7.1 and below conversion to Mendix 7.4 is seamless.
In Mendix versions 7.2 and 7.3 miltiple profiles with different names and same types were possible, so before converting from these version we advise to check list of navigation profiles in your project and make them fullfil certain requirements.


## 3 Hybrid apps profiles requirements

In order to convert your project from Mendix versions 7.2 and 7.3 to 7.4 check next points:
 - List of profiles contains:
   - Maximum one profile of *Browser tablet* kind.
   - Maximum one profile of *Browser phone* kind.
   - Maximum two profiles of *Hybrid mobile app online* kind.
   - Maximum two profiles of *Hybrid mobile app offline* kind.

 - If you have two profiles of *Hybrid mobile app online* kind then make sure that one of them has word "tablet" in its name and second one has word "phone" in its name. They will be then converted to correct types in 7.4. *It is impossible to have two hybrid online profiles for tablet or phone*.

 - If you have two profiles of *Hybrid mobile app offline* kind then make sure that one of them has word "tablet" in its name and second one has word "phone" in its name. They will be then converted to correct types in 7.4. *It is impossible to have two hybrid offline profiles for tablet or phone*.

After opening your project in Mendix 7.4 make sure that your hybrid profiles are converted correctly.
