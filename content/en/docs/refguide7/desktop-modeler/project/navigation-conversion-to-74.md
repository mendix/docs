---
title: "Solving Issues with Navigation Profile Conversion to 7.4"
url: /refguide7/navigation-conversion-to-74/
description: "Describes requirements and possible fixes for navigation profile conversion from Mendix versions 7.2 and 7.3 to Mendix 7.4."
---

## 1 Changes in 7.4 for Profiles

In Mendix versions 7.2 and 7.3, there was no exact separation between hybrid tablet and hybrid phone profiles. The only separation was the logical meaning of a profile name like "MyTabletProfile" and "MyPhoneProfile." In Mendix version 7.4, the separation of hybrid profiles by device type was introduced. This makes profiles easier to understand and work with.

Also, to prevent confusion while working with profiles, having more than one profile of a specific type is not permitted. This restriction allows us to omit the profile name.

## 2 Conversion Process

For projects based on Mendix 7.1 and below, conversion to Mendix 7.4 is seamless.

In Mendix versions 7.2 and 7.3, miltiple profiles with different names and same types were possible. So, before converting from these versions, be sure to check the list of navigation profiles in your project and make sure they fulfill certain requirements.

## 3 Hybrid App Profiles Requirements

In order to convert your project from Mendix versions 7.2 and 7.3 to 7.4, make sure these requirements are fulfilled:

* The  list of profiles must contain the following:
	* A maximum of one profile of the **browser tablet** type
	* A maximum of one profile of the **browser phone** type
	* A maximum of two profiles of the **hybrid mobile app online** type
	* A maximum of two profiles of the **hybrid mobile app offline** type

* If you have two profiles of the **hybrid mobile app online** type, then make sure that one of them has the word "tablet" in its name and the second one has the word "phone" in its name
	* They will then be converted to the correct types in 7.4
	* Please note that it is not possible to have two hybrid online profiles for tablet or phone

* If you have two profiles of the **hybrid mobile app offline** type, then make sure that one of them has the word "tablet" in its name and the second one has the word "phone" in its name
	* They will then be converted to the correct types in 7.4
	* Please note that it is not possible to have two hybrid offline profiles for tablet or phone

After opening your project in Mendix 7.4, make sure that your hybrid profiles are converted correctly.
