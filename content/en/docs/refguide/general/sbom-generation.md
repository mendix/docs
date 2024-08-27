---
title: "SBOM Generation"
url: /refguide/sbom-generation/
weight: 60
description: "Describes how to create an SBOM from Studio Pro."
---

## Introduction

When building a Mendix app, you use many reusable components such as Widgets and Marketplace modules, which make use of components such as Java libraries and npm modules. You can also extend your own app with Java and JavaScript actions and base them on Java libraries and npm modules. You should know what you use in your app, what other components they are dependent on, and what licenses they make use of. Over time, these components may become outdated or vulnerable, so it is important to have this information in a ready-to-use, standard format. Studio Pro does this by generating a Software Bill of Materials (SBOM) based on the standardized CycloneDX format.

## Generating an SBOM

You can generate an SBOM by using [MxBuild](/refguide/mxbuild/). This generates an `sbom.json` file as part of your deployment folder or your package `.mda`. Bundling the SBOM together with your deployment ensures the components that were present during the build are clearly represented.

```bat
mxbuild --java-home="C:\Program Files\Eclipse Adoptium\jdk-11.0.16.101-hotspot" --java-exe-path="C:\Program Files\Eclipse Adoptium\jdk-11.0.16.101-hotspot\bin\java.exe" --generate-sbom  "C:\Mendix\MyApp\MyApp.mpr"
```

## SBOM Format

The SBOM is based on the [CycloneDX 1.4 JSON format](https://cyclonedx.org/docs/1.4/json/). This includes required fields, and information such as `version` and `description`. To identify the components from different package managers, the `purl` field is used. The content follows the specification defined at `https://github.com/package-url/purl-spec`. This includes Mendix marketplace modules and widgets, npm packages, and Java libraries. 

## Example Output

Since a full SBOM contains all project details, this is only a partial representation of a full example. To simplify, below is one of the Java libraries that is packaged. The `dependencies` field will contain the dependency relationship from Mendix Marketplace Modules to npm modules and Java libraries.

```json

{
  "bomFormat": "CycloneDX",
  "specVersion": "1.4",
  "serialNumber": "urn:uuid:d1a93219-d2fb-4282-9cc8-b591f85e0551",
  "version": 1,
  "metadata": { },
  "components": 
    {
      "type": "framework",
      "bom-ref": "urn:uuid:5371eb81-0997-48a0-ad0a-1a3012bf87cb",
      "author": "",
      "publisher": "",
      "name": "Mendix-Runtime",
      "version": "10.10.0.34429",
      "licenses": [],
      "copyright": "",
      "purl": "pkg:mendix/Mendix-Runtime@10.10.0.34429?type=framework",
      "components": []
    },
    {
      "type": "library",
      "bom-ref": "pkg:maven/com.google.guava/guava@32.0.1-jre?type=jar",
      "group": "com.google.guava",
      "name": "guava",
      "version": "32.0.1-jre",
      "description": "Guava is a suite of core and expanded libraries that include utility classes, Google\u0027s collections, I/O classes, and much more.",
      "licenses": [
        {
          "license": {
            "id": "Apache-2.0"
          }
        }
      ],
      "purl": "pkg:maven/com.google.guava/guava@32.0.1-jre?type=jar",
      "modified": false
    },
   
  "externalReferences": [],
  "dependencies": []
}

```

## Supported Features {#supported-features}

The table below describes what components are currently covered in the generated SBOM, and from what version. It is recommended to use version `10.10`, `9.24.22`, or `10.6.9` and above.

| Feature | Description | Version
| --- | --- | --- |
| Mendix Modules | `9.24.14`, `10.4.0` | Mendix Modules imported from the Marketplace. This does not include Add-on Modules, Solutions, Extensions, or manually imported modules. |
| [Java Dependencies](/refguide/managed-dependencies/) | `9.24.14`, `10.4.0` | Java libraries imported into your project using [Managed Dependencies](/refguide/managed-dependencies/), or those manually added in the `userlib` folder. Libraries added through managed dependencies will have access to information of the package manager and will include more details, such as the used license. |
| [Widgets](/appstore/widgets/) | `10.9.0`, `10.6.6`, `10.10.0`, `9.24.18` | User interface elements downloaded from the Marketplace, such as drop-downs or buttons. |
| JavaScript Actions(/refguide/javascript-actions/) | `10.10` | npm libraries that are used in your JavaScript actions. |

## Read More

* [CycloneDX](https://cyclonedx.org/)
* [Package URL spec](https://github.com/package-url/purl-spec)
* [Software Composition](/control-center/software-composition/)
