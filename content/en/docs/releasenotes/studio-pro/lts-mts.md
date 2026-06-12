---
title: "LTS, MTS, and Monthly Releases"
url: /releasenotes/studio-pro/lts-mts/
weight: 1
---

## Introduction

The goal of this document is to clarify Mendix Studio Pro version options and help you decide which version to run your applications on.

To understand the different types of versions and releases, consider the example of Studio Pro [11.6.1](/releasenotes/studio-pro/11.6/#1161) discussed in the sections below.

### Major Version {#major-version}

In the 11.6.1 example, the first number (**11**) indicates the major version.

Mendix supports three major versions at a time. As defined in our SLA, while the current major version is Mendix 11, Mendix supports major versions 9, 10, and 11. 

To make version support duration clearer for our users, Mendix plans a new major release in a regular cadence. Mendix announce each new major version at least a year in advance. This helps you to prepare and plan to adopt new releases and upgrade from older Mendix versions. Each major version release may start with public beta releases to obtain feedback from users.

### Minor Version

In the 11.6.1 example, the second number (**6**) indicates the minor version. 

A minor version is generally released every month. It includes new features and fixes, but it does not include breaking changes.

### Patch Version {#patch-version}

In the 11.6.1 example, the third number (**1**) indicates the patch version. 

A patch version is released on an as-needed basis. It includes security fixes and critical bug fixes, but it does not include new features or breaking changes (unless these address security issues).

## Types of Support

There are three types of minor release which have different periods of support. These are long-term support versions (LTSs), medium-term support versions (MTSs) and other minor versions.

The current and planned LTS, MTS, and major versions are shown in the table below.

| Release | Date |
| --- | --- |
| 9.24 LTS | March 2023 |
| 10.24 LTS | June 2025 |
| 11.6 MTS | December 2025 |
| 11.12 LTS | June 2026 |
| 11.18 LTS | December 2026 |
| 11.24 LTS | June 2027 |
| 12.0 *New major version, not MTS or LTS* | June 2027 |

These three types of support are described below.

### Long-Term Support Version (LTS) {#lts}

An LTS version is a minor release of a major version which will continue to be supported until the major version falls out of support. LTS versions are production-grade and supported for the longest period of time, allowing a slower pace to your upgrades.

Although it continues to be supported, once a minor version becomes an LTS, it will have bug and security fixes only and not have new features added to it.

Release notes for the current LTS versions are marked with an LTS badge (<text class="badge badge-pill badge-lts" style="margin-left:0px">LTS</text>) in the left sidebar. The Marketplace also indicates LTS versions in the same way.

{{% alert color="info" %}}
Mendix recommends using the latest LTS version. To ensure maximum stability and security, you should always deploy the latest patch of that LTS version, as it contains the most recent bug fixes and security updates.
{{% /alert %}}

#### Support Duration

Support for an LTS version ends when a third consecutive major version is released for general availability (for example, support for Mendix version 8 LTS ended with the GA release of Mendix version 11).

This diagram illustrates the LTS concept with version and [end of support](#end) examples:

[//]: # (Original image in PowerPoint /static/originals/refguide/lts-support.pptx)

{{< figure src="/attachments/releasenotes/studio-pro/lts-mts/lts.png" class="no-border" >}}

{{% alert color="info" %}}For details on extending support for an older major version, see the [Extended Support](/support/#extended-support) section in *Mendix Support*.{{% /alert %}}

{{% alert color="info" %}}Native mobile apps have a shorter support duration. See [Support Guidelines for Native Mobile](/releasenotes/mobile/native-support/) for more information. We recommend updating native apps more often than other mobile apps and web apps so you can take advantage of evolving features. {{% /alert %}}

#### Support with Patch Releases

For the support duration, an LTS will receive [patch](#patch-version) releases for bug and security fixes but will not have new features. 

#### Upgrading Impact

Upgrading from an LTS to another LTS often has a lower impact than other upgrade options. That is because an LTS has the longest support duration and only gets critical fixes, which results in high stability over time. In addition, moving from one LTS to another happens less often as there are fewer LTS versions compared to [MTS](#mts) versions or monthly release versions.

### Medium-Term Support Version (MTS) {#mts}

MTS versions are also production-grade and give teams access to new capabilities on a regular cadence. A new MTS version is released more often than an LTS within the same major version, keeping upgrades straightforward. You can also skip one or more MTS cycles to fit your team's schedule.

For example, version 11.6 is an MTS version which was released in [December, 2025](#major-version).

Release notes for any current MTS versions are marked with an MTS badge (<text class="badge badge-pill badge-mts" style="margin-left:0px">MTS</text>) in the left sidebar. The Marketplace also indicates MTS versions in the same way.

Mendix MTS versions offer a balance between getting the latest and greatest Mendix has to offer every month, and security and stability.

{{% alert color="info" %}}
Mendix recommends using the latest patch version of an MTS version as this will contain the latest fixes and security updates.
{{% /alert %}}

#### Support Duration

In contrast to an LTS version, support for an MTS version ends three months after the next major version is released. For example, support for 10.6, 10.12, and 10.18 MTS versions ended three months after Mendix version 11.0 was released.

#### Support with Patch Releases

For the support duration, the MTS will receive patch releases for bug and security fixes but will not have new features.

#### Upgrading Impact

The impact of upgrading between MTS versions is higher than upgrading between LTS versions. That is because an MTS has a shorter support duration than an LTS, which means it has less time to become as stable as an LTS version. In addition, the upgrade has to be done more frequently.

### Monthly Release Version {#patch}

A monthly release is a non-MTS/LTS minor release that only receives patches for critical/security issues if they can be released earlier and faster than the next minor version release.

#### Support Duration

Monthly release versions do not enjoy regular patch releases like MTS and LTS versions do. Most bugs found in monthly release versions are resolved in the subsequent monthly release. However, high impact bugs which are found before the next minor (monthly) release may lead to a patch release.

For example, if a bug is found in version 10.1.0 before version 10.2.0 is released, it will usually only be fixed in the next monthly release, that is version 10.2.0. If the bug is judged to have a high impact and can be fixed quickly, then a patched version 10.1.1 may be released. 

#### Release Cycle

This is a monthly release that includes new features as well as bug fixes and security patches. Mendix also applies security patches and bug fixes to existing MTS and LTS versions, but not new features.

#### Support with Patch Releases

A monthly release only receives patches for critical/security issues if they can be released earlier and faster than the next minor version release. Otherwise, bugs found in a monthly release will only be fixed rolling forward to the next minor version. 

For example, if you are using version 10.1.0 after 10.2.0 has been released and you find a critical issue in 10.1.0, that fix will only be released in the next monthly release, which would be 10.3.0.

If a bug is found in a monthly-release version for an older major version, it will only be fixed as a patch on an existing LTS (for example, a bug found in 10.16 will only be fixed for a patch release on the LTS version 10.24). 

#### Upgrading Impact

The impact of upgrading between monthly releases is the highest of these options. That is because every month, all new features are shipped in such minor versions, including all bug fixes and security patches. In addition, to keep up with security patches and bug fixes, the upgrade has to be done monthly, which can be a significant drain on resources.

The advantage is that you can immediately use new features without having to wait for the more stable MTS/LTS version.

## End of Support {#end}

The "end of support" for a version means that fixes (including fixes for security vulnerabilities), updates, investigating, troubleshooting, and other forms of assistance are no longer provided. Applications using [unsupported Mendix versions](/developerportal/deploy/mendix-cloud-deploy/#mendix-cloud-supported-versions) cannot be deployed or run on Mendix Cloud. They can still be deployed and run on infrastructure that is owned by customers, but Mendix will not investigate any issues related to these applications.

If a new major version is nearing release, that means an older major version is nearing its end of support. If you are still using a major version for which support will end, Mendix recommends that you stop using that version and move to a newer LTS version that is supported. 

Furthermore, you should uninstall old versions for which support has ended. If you continue to use versions for which support has ended, you do so at your own risk for your applications, data, and security. Mendix does not recommend using versions for which support has ended unless you have purchased the [Extended Support](/support/#extended-support) product.

If you have purchased the Extended Support package, you can ask Mendix Support to supply the Studio Pro installation files for versions which are covered under the Extended Support product.
