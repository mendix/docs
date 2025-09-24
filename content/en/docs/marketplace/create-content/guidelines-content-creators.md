---
title: "Guidelines for Content Creators"
url: /appstore/guidelines-content-creators/
description: "Describes guidelines for Marketplace content creators."
weight: 1
tags: ["marketplace", "content creation", "guidelines"]
---

## Introduction

This document provides guidelines and best practices to follow before you submit content to the public Mendix Marketplace. They ensure that your content is secure, compliant with legal and data privacy standards, user friendly, consistent, and discoverable.

## General Guidelines {#general}

These are the general guidelines for creating new Marketplace content:

* Set up a separate app to build and maintain your Marketplace component.
* Use the latest MTS or LTS of any major Studio Pro version when creating the item. If that is not possible, then use the earliest version of any major Studio Pro version.
* Ensure that the latest version of your product supports at least one Mendix LTS version or Mendix MTS version.
* Your product must be complete and fully functional, as advertised upon submission.
* In Mendix 10.21.0 and above, do not use direct associations in your module, as this can cause issues when it is imported.

When you add content to the Marketplace, include in the component [documentation](/appstore/submit-content/#doc) any information that the end-user should know.

## Using a GitHub Repository {#github}

You can set up a GitHub repository to contain the development content for your Marketplace component. During the submission process, you can share the repository URL as the component source on the [Package](/appstore/submit-content/#package) page.

### GitHub Repository Guidelines

When setting up the GitHub repository for your content, follow these guidelines:

* Make sure the repository name matches the name that will be used for the published Marketplace component.
* Use upper camel case to replace any spaces in the repository name. Example: *MyFirstApp*.
* Make sure the repository description states what the component does. You can use the same description in the Mendix Marketplace.
* Add a *.gitignore* file to keep your repository clean.

### Creating a Component Release

To create a new component release for the Mendix Marketplace, follow these steps:

1. Create a new tag on the appropriate commit on the production or the release branch in your GitHub repository.

2. From this tag, create a [new release in GitHub](https://help.github.com/articles/creating-releases). 

3. In this GitHub release, provide an official name and write the release notes.  
   You can use these for the Marketplace release as well.

4. If you add the *.mpk* binary file to the release tag, the Mendix Marketplace automatically syncs the *.mpk* to your new draft.

   {{< figure src="/attachments/appstore/submit-content/github-releases.png" >}}

5. Link this GitHub release to the upcoming Mendix Marketplace release by mentioning the GitHub release number in the description. For more details, see the [Package](/appstore/submit-content/#package) and [Updating Existing Marketplace Content](/appstore/submit-content/#updating) sections in *Upload to the Marketplace*.

## Preparing Your Submission

{{% alert color="info" %}}
If you are not a [component partner](/appstore/partner-program/), you can skip this section.
{{% /alert %}}

### Legal and Compliance Guidelines

This section covers the legal and compliance guidelines needed to ensure that your content abides by intellectual property, licensing, privacy, and export control regulations.

#### Acceptable Use Policy

Your products must comply with the [Acceptable Use Policy](https://www.sw.siemens.com/en-US/sw-terms/aup/).

#### Intellectual Property

When considering intellectual property (IP) in the Mendix Marketplace, follow these guidelines:

* Do not copy any text, names, or other data from Marketplace components for which you do not own the copyright. Doing so might create unnecessary ambiguity or confusion that could mislead users of those Marketplace components.
* Do not mention components published by others within your content. 
* Make sure your component documentation only includes intellectual property that you have created.  
  Including information or content published by others on the Marketplace could lead to your component being removed from the Marketplace.  
  This also means other components can be removed if they are using your component information or content. 
* If you come across instances of intellectual property abuse, contact the support team.

For more information, see [Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

#### End-User License

You must declare whether your product includes, uses, depends on, or distributes third-party software of any kind from sources other than you or Mendix. Third-party software means any and all files, such as APIs, content, source code, or compiled libraries. 

You must include the following:

* In the product description:
    * Licensing information
    * Copyright information
* At the root directory level of the *.mpk* file:
    * The *licensing.txt* file
    * Any dependencies
    * An OSS Readme file

You must not use any restrictive or copyleft licenses, such as GNU GPL v2 or v3, as they limit the ability to sell commercially without disclosing source code, or place restrictions on code usage. 

If you have content which has an open-source license, such as MIT or Apache, check if the third-party libraries being used are compatible with the license. 

If you are using any [open-source licenses](https://opensource.org/licenses-old/category), make sure you have the code hosted in a public repository.  

The Marketplace content governance team will check these cases once content is  submitted, and get back to you if they find issues. It is recommended that you do the check yourself beforehand to avoid any delays in the listing of your content.

If you have created your own product specific terms and conditions, you must host them, for example, on your web page, and share the URL with the Mendix Marketplace team. The team will then attach the terms and conditions to the product listing page.

If your product is not licensed as an open-source component, and you would like to specify certain licensing terms and conditions or end-user license agreements, Mendix recommends creating a document that covers the following topics:

* Copyright information and license conditions

* IP usage, which includes a list of OSS/commercial licenses used

  Below is a declaration template that you can use for terms and conditions.

| Software Name and Version | Software URL | What does the Software do? Why is it needed? | License |
| ------------------------- | ------------ | -------------------------------------------- | ------- |
| Pro Secure Net 5.0 | https://example.com/prosecurenet/9f86d081884c7d659a2feaa0c55ad915 | A network security software that protects systems from unauthorized access and cyber threats. The software is needed to ensure the safety and integrity of network data. | MIT |

* Export control
* Data Privacy, including a data processing agreement, as necessary 
* Customer Service Level Agreement (SLA)

#### Data Privacy

Mendix wants to make sure that Marketplace content complies with key data privacy principles at all times. This means that you must abide by the following guidelines: 

* Create transparency around activities that process personal data. 
* Give users the choice to configure or influence data collection, processing, and deletion wherever possible and useful. 
* Collect only personal data that is necessary for the provision of the application’s services and functions. 
* Delete personal data once it is no longer needed. 
* Integrate the [Privacy by Design](https://gdpr-info.eu/issues/privacy-by-design/) principles into your application by default. 
* Conclude appropriate data processing agreements with your suppliers and subcontractors, and give the customer full transparency and control over all recipients of their personal data.  
* Ensure that technical and organizational data protection measures are in place.

Let the Marketplace team know which of these options applies to your product:

* Personal data is not collected: the developer does not collect any data with the product.
* Personal data is collected, but not shared: the developer collects data with the product, but does not share it with any third-party.
* Personal data is collected and shared: the developer collects data with the product, and shares it with third-parties.

#### Export Control

Export control covers the rules and regulations mandated by different countries around developing, sharing, and delivering products. It also covers different areas and departments where the transfer of information and goods can happen across borders. 

It is imperative to understand the main pillars that support the control system. 

##### Sanctioned Countries 

In the context of export control, sanctioned countries are the ones that you are not allowed to do business with.   

An embargo is a government order that restricts or limits commerce or the exchange of specific goods with a specified country. An embargo is usually created as a result of unfavorable political or economic circumstances between nations.  

Country-specific embargoes, which dictate the prohibition of any economic activity, are currently in place for Cuba, North Korea, Iran, Syria, and the Crimea region of Ukraine. Russia and Belarus are not embargoed, but are very critical at the moment. 

##### Sanctioned Parties 

Sanctioned parties are individuals, companies, institutions, vessels, banks, etc., with whom business is either prohibited or possible only after obtaining authorization from relevant government authorities. Sanctioned parties are published by the USA, the EU, and other national authorities. 

### Technical Guidelines  

This section covers the technical guidelines needed to ensure that your content is free of viruses, malware, and security vulnerabilities.

#### Security Requirements 
 
You must abide by the following requirements for all modules, widgets, and connectors packaged into an *.mpk* file and published to the Mendix  Marketplace.

##### Virus and Malware Scan for Files

The governance check performed by the Marketplace team includes a virus and malware scan. This means that Mendix expects that the product you submit is virus- and malware-free.  

Mendix recommends completing a full scan using [VirusTotal](https://www.virustotal.com/gui/home/upload) prior to your submission. VirusTotal checks the file for traces of virus and malware against more than 70 virus engines, and provides a report. This ensures that you can provide the Mendix Marketplace team with a clean report while uploading your *.mpk* file.
  
##### File Integrity Check

You must generate and provide at least a 256 bit hash (SHA256) of the file you upload to the Mendix Marketplace. This way, the Mendix Marketplace onboarding team can verify that the file is complete, not corrupted, and has not been tampered with.  

You can generate the hash using any inbuilt utility. Find out more about how to generate a hash for [Windows](https://www.howtohaven.com/system/how-to-hash-file-on-windows.shtml) or [Linux](https://www.techengineer.one/how-to-hash-files-in-linux/).
 
##### Vulnerability Check 

To ensure that the uploaded artifact is free of any critical and high vulnerabilities, you must scan all third party libraries and dependencies distributed with the *.mpk* file. These libraries and dependencies can be found in the **userlib** or  **widgets** folder within the *.mpk*.  

You must ensure that the CVSS 3.0 score is less than 7.0 to pass the onboarding  criteria, as described in the [NIST NVD specification](https://nvd.nist.gov/vuln-metrics/cvss).  

When uploading your file, you must provide the Mendix Marketplace team with a report proving that you have completed a vulnerability scan and indicating that libraries are free of vulnerabilities. Mendix recommends the [Snyk Open Source](https://snyk.io/product/open-source-security-management/) solution for scanning third-party dependencies for vulnerabilities. This is required for all new and subsequent versions of any component uploaded to the Mendix Marketplace. 

##### SAST Scan for OWASP top 10 vulnerabilities

You must ensure that there are no [OWASP Top 10 vulnerabilities](https://owasp.org/www-project-top-ten/) in the code.  

Traditional code-based SAST scanners cannot properly detect security issues in low-code applications. They also cannot point out any security misconfigurations. Mendix recommends that you use a tool which can take into consideration the security best  practices outlined in [Implementing Best Practices for App Security](/howto/security/best-practices-security/), and point out security misconfigurations and bad practices.  

The Mendix Marketplace contains the following products that you can use to inspect and correct your product before uploading it:  

* [Clevr ACR](https://marketplace.mendix.com/link/component/114669)
* [SIG QSM/AQM](https://www.softwareimprovementgroup.com/mendix-quality-and-security-management-powered-by-sigrid/)
* [Bizzomate](https://chromewebstore.google.com/detail/bizzomate-mendix-dev-tool/nkbokoloejkhohjlickhfkjfmbmboaof)
* [Omnext Software Analyses Suit](https://marketplace.mendix.com/link/component/120746)

#### Architectural Best Practices

As the supplier ecosystem evolves, different types of services emerge. This section shares the best practices relevant for each type of offering in respect to access management and service reliability. 

##### Access Management

Follow these best practices with regards to access management:

* Issue one set of keys for each service instance.  
* Ensure that the keys provide minimal access rights for the application to perform operations on the service instance.  
  The service can choose the access level according to the service instance configuration. 
* Mendix does not store the keys which are issued to the service consumer.  
  If the consumer loses the keys, they will likely generate multiple binding keys for the same instances. Hence, ensure that the number of binding keys per service instance is not a limiting factor. 
* When the binding is deleted, make sure to delete the corresponding keys.  
  Do not reuse the keys for any other binding key request. 
* Log any operation with binding keys for auditing purposes.
* Return a 404 error code for both of the following scenarios, thus ensuring that hackers do not get any clues:
    * Absence of a resource (service instance)
    * Access of a resource for which the accessor does not have rights 

##### Service Reliability

Follow these best practices with regards to service reliability:

* If the service cannot complete the provided operation within two seconds, consider using an asynchronous response mechanism. 
* Throttle requests to avoid noisy neighbor issues. 
* Respond with a 4XX error code for invalid inputs and unmet preconditions. 
* Use an idempotent endpoint for retries in case of server errors, where the consuming app may retry invoking the service multiple times.
* Choose an appropriate scaling mechanism to handle varying loads. Horizontal scaling is preferred to vertical scaling.
* Set up appropriate tools that can monitor the service workload and raise notifications.
* Have a disaster recovery plan for your service.
* Broadcast the availability of your service and the scheduled maintenance window.

## Submitting Your Product

### Product Logo 

Display your cover image in your Mendix Marketplace listing by uploading a file with these specifications:

* *.jpg* format
* Minimum 600 x 420 px resolution
* Maximum 1 MB file size

Check the copyright branding guidelines of other companies if you use their logo as part of your image.

#### Thumbnail

The thumbnail is visible on the Mendix Marketplace homepage. It is the same image as the cover image within the listing itself.

It is important to carefully think about the thumbnail image, since it is the first item that draws the attention of potential customers. Therefore, Mendix recommends not using personal photos, but rather an image that clearly represents your offering.

### Product Name Taxonomy

The product name is just as important as the logo. As such, follow these rules to make sure your product's name is compliant and draws attention to your listing:

* Use a maximum of 30 - 32 characters to ensure the name fits within the thumbnail.

* Use an English name to ensure global exposure.  
  Currently, the Mendix Marketplace is international, with no option to switch languages.

* Do not include the content type or standard platform terms in the name. The Mendix Marketplace already classifies products by content types and categories, which helps customers filter and search. Instead, focus on the main product features and benefits. For example, “Widget” can be substituted with “3D Viewer”.

* Avoid using abbreviations that are not commonly known.  

* If you use your company's name in the product name, do not abbreviate it.

### Product Description

Describe the challenges your potential customers may face daily, and how your product can help. Mendix recommends starting with a catchy one-liner, which will be used in the product's thumbnail as plain text. 

While the description itself has no character limit, the introductory one-liner is capped at 150 characters.

Here are some tips to help you write a proper product description:

* Include answers to key questions that developers have when they look for content.
* Cover the entire range of product benefits, and focus on how your product can improve customers' app development or work life in general.  
  A good practice is to outline the features and benefits of your product before describing them.  
  For every feature you list, think about how it will directly benefit customers.  
  Consider including technical aspects on the **Documentation** tab.

* Know your target audience, and try to understand why they need your product, and what features or benefits are of interest to them.
* Use friendly and easy to understand language, ensuring that customers can connect to the product.   
  A good practice is to read the description aloud and assess whether it sounds natural. 

* Support your description with a good layout including bullet points, short paragraphs, and different sized fonts. This will help customers skim your text faster and focus on the most important parts of the text.

* Add keywords to optimize the content for search engines. That way, if a potential customer searches using a certain word, your product may come up in the search results.

### Screenshots and Assets

You can share up to 10 screenshots of your offering so that potential customers know what to expect. You can also upload asset links like white papers, eBooks, and testimonials.  

The maximum file size is 1 MB.

### Demo (Optional)

You can upload a short 30- to 90-second demo video of your offering, in which you briefly explain why people need it, what it does, how it works, and how it can be implemented. This can prove to be a useful resource, especially for paid content.

## Publishing Your Product

After Mendix reviews and approves your offering, the Mendix Marketplace team makes the final preparations for the technical onboarding and publishing.   

You can work with the Mendix Marketplace team to define joint customer value propositions, marketing messages, and campaigns to further strengthen your offering. In addition to that, you can collaborate with the team on integrated end-to-end solutions that contain offerings from both you and Mendix.

Once everything is ready, the offering is marked for production and is published to the Mendix Marketplace during the next scheduled release.

## Managing the Product Lifecycle

### Product Support

Our goal is to ensure that users and customers of the Mendix Marketplace have the most up-to-date information about offerings. You must therefore manage the accuracy of your own offering on the Marketplace, making sure that it is kept up to date with new features or releases.

If users or customers have additional questions about your product, or if they want to engage to discuss a challenge, they should always be able to contact you.  This can be done by clicking the link to your website available on your product offering page. For solutions, users can also get in touch with you through the **Contact Us** form on your solution page. If they do, you are notified, and are expected to respond in a timely manner.  

#### Product Support Requirements

All products listed on the Mendix Marketplace must meet the following requirements: 

* Customers must be able to submit issues to you through a customer support portal or using a dedicated email address.  
  You must provide a link to either of these in the product listing. 
* You must support customers under an Enterprise Service Level Agreement.  
  A Service Level Agreement (SLA) report must be made available to Mendix upon request. It must include proof of a customer satisfaction survey with a CSAT score of at least 97% for product issues. 
* Mendix reserves the right to run customer satisfaction surveys for your products.  
  If the CSAT score is lower than 97%, Mendix reserves the right to delist the product.
* Critical issues, like security vulnerabilities or data loss problems, must be fixed according to a responsible disclosure policy.  
  If an issue is already published, it must be resolved within 48 hours of it being disclosed.  
  Mendix reserves the right to notify any customers who are in any way using a product with such a critical issue. 
* You must provide a list of known issues to customers and to Mendix Customer Support. 
* For services or APIs, you must provide a well-known information point on service status to customers and to Mendix Customer Support.
* Provide customers with global non-stop support, ideally through a dedicated support team.  
  Customers should be able to easily identify which team or contact person  provides them support.  
* Ensure the support team has proper Mendix training. The Mendix Advanced Certification is recommended for this purpose.
* The support team should have a direct line of communication with the engineering team delivering the product, as second- or third-line support.
* Continuously monitor customer satisfaction with both the product itself, and the support you are providing.
* Put internal procedures in place to manage changes, incidents, and escalations.

{{% alert color="info" %}}
Mendix reserves the right to temporarily delist any products that do not adhere to these requirements until resolved.  

In principle, you are notified in advance. For critical issues, though, the notification can be sent at the same time as the delisting and the customer notifications.
{{% /alert %}}

## Mendix Partner Program

For more information on what this program offers, see [Mendix Component Partner Program](/appstore/partner-program/) and [Mendix Commercial Solution Partner Program](https://www.mendix.com/partners/become-a-partner/isv-program/). 

## Read More

* [Community Best Practices for App Performance](/refguide/community-best-practices-for-app-performance/)
* [Mendix Best Practices for Development](/refguide/dev-best-practices/)
* [Best Practices for Creating Connectors](/appstore/creating-content/connector-guide-best-practices/)
