---
title: "Guidelines for Content Creators"
url: /appstore/guidelines-content-creators/
description: "Describes guidelines for Marketplace content creators."
weight: 1
tags: ["marketplace", "content creation", "guidelines"]
---

## Introduction

When you prepare a product and submit it to the public Marketplace, follow the guidelines in this document.

### General Guidelines{#general}

Below are the general guidelines for creating new Marketplace content:

* Set up a separate app to build and maintain your Marketplace component.
* Use the latests MTS or LTS of any major Studio Pro version when creating the item. If that is not possible, then use the earliest version of any major Studio Pro version.
* Ensure that any latest version of your product supports at least one Mendix LTS versions or Mendix MTS versions.
* Your products must be complete and fully functional, as advertised upon submission.

When adding the content to the Marketplace, add information the end-user should know to the component [documentation](/appstore/submit-content/#doc).

### Using a GitHub Repo {#github}

You can set up a GitHub repository to contain the development content for your Marketplace component, and you can share this repo URL as the component source on the [Package](/appstore/submit-content/#package) page in the submission process.

When setting up the GitHub repo for your component, follow these guidelines:

* Make sure the repo name matches the name that will be used for the published Marketplace component.
* Use upper camel case to replace the spaces in the name, for example, *MyFirstApp*.
* Make sure the repo description states what the component does. You can also use this description in the Mendix Marketplace.
* Add a *.gitignore* file to keep your repo clean.

To create a new component release for the Mendix Marketplace, follow these steps:

1. Create a new tag on the appropriate commit on the production or release branch in your GitHub repo.

2. From this tag, create a [new release in GitHub](https://help.github.com/articles/creating-releases). 

3. In this GitHub release, provide an official name and write the release notes. You can use these for the Marketplace release as well.

4. If you add the *.mpk* file as a binary file to the release tag, the Mendix Marketplace automatically syncs the *.mpk* to your new draft:

   {{< figure src="/attachments/appstore/submit-content/github-releases.png" >}}

5. Link this GitHub release to the upcoming Mendix Marketplace release by mentioning the GitHub release number in the description. For more details, see the [Package](/appstore/submit-content/#package) and [Updating Existing Marketplace Content](/appstore/submit-content/#updating) sections in *How to Submit Marketplace Content*.

## Preparing Your Submission

{{% alert color="info" %}}
If you are not a [component partner](/appstore/partner-program/), you can skip this section.
{{% /alert %}}

### Legal and Compliance Guidelines

This section covers the legal and compliance guidelines.

#### Acceptable Use Policy

Your products must comply with the [Acceptable Use Policy](https://www.sw.siemens.com/en-US/sw-terms/aup/).

#### Intellectual Property

When considering intellectual property (IP) in the Mendix Marketplace, follow these guidelines:

* Do not copy any text, names, or other data from other components published in the Marketplace, since you do not own the copyright. Do not create unnecessary ambiguity or confusion that would mislead users of Marketplace components.
* Do not mention components published by others within your content on the Marketplace. 
* Make sure your component documentation only includes intellectual property that you have created. Your component should not include information or content published by others on the Marketplace, as this may lead to removing your component from the Marketplace. This also means other components can also be removed if they are using your component information or content. 
* If you come across instances of intellectual property abuse, contact support.

For more information, see [Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

#### End-User License

You must declare whether your product includes, uses, depends on, or distributes third-party software of any kind from sources other than you or Mendix. Third-party software means any and all files, including, but not limited to, APIs, content, source code, or compiled libraries. As part of your submission, you are required to include licensing and copyright information as part of your product description and to include *licensing.txt*, dependencies, and an OSS Readme at the root directory level of the *.mpk* file.

You must not use any restrictive or copyleft licenses such as GNU GPLv2, v3, as these limit the ability to sell commercially without disclosing source code or place restrictions on its usage. 

If you have a content which has open-source license such as MIT or Apache, check if the third-party libraries being used are compatible with the license. 

If you are using any [open-source licenses](https://opensource.org/licenses-old/category), make sure you have the code hosted on a public repository.  

Marketplace content governance team will check these cases once content is  submitted and get back to you if they find such issues. It is recommended that you do the check yourself beforehand to avoid delay in the listing.

If you have created own product specific terms and conditions, you must host them, for example, on your web page, and share the URL with the Mendix Marketplace team so they could be attached to the product listing page.

If your product is not licensed as an open-source component and you would like to specify certain licensing terms and conditions or end-user license agreements, Mendix recommends creating a document that covers the following topics:

- Copyright information and license conditions

- IP usage, which covers a list of OSS/commercial licenses used

  Below is a declaration template you can use for terms & conditions.

| Software Name and Version | Software URL | What does the Software do? Why is it needed? | License |
| ------------------------- | ------------ | -------------------------------------------- | ------- |
| Pro Secure Net 5.0 | https://example.com/prosecurenet/9f86d081884c7d659a2feaa0c55ad915 | A network security software that protects systems from unauthorized access and cyber threats. The software is needed to ensure the safety and integrity of network data. | MIT |

- Export control
- Data Privacy, including data processing agreement, as necessary 
- Customer Service Level Agreement (SLA)

#### Data Privacy

Mendix wants to make sure that key data privacy principles are complied with at any time. 

* Create transparency on all personal data processing activities. 
* Give users the choice to configure or influence the data collection, processing, and deletion wherever possible and useful. 
* Collect only personal data that is necessary for the provision of the application’s services and functions. 
* Delete personal data once no longer needed for the purpose of the collection. 
* Integrate the [Privacy by Design](https://gdpr-info.eu/issues/privacy-by-design/) principles by default into your application. 
* Conclude appropriate data processing agreements with your suppliers and subcontractors and give the customer full transparency and control over all recipients of their personal data.  
* Ensure that technical and organizational measures to protect data are in place.

Declare to the Marketplace team which applies to your product:

* Personal data is not collected: the developer does not collect any data with the product.
* Personal data is collected, but not shared: the developer collects data with the product, but does not share it with any third-party.
* Personal data is collected and shared: the developer collects data with the product, and share it with third-parties.

#### Export Control

Export Control is about following rules and regulations, mandated by countries in context of developing, sharing, delivering product, and handling different areas and departments where information and goods transfer can happen cross-border. 

It is imperative to understand main pillars on which the control system is placed. 

##### Country-based Sanctions 

Do not get confused with the word "Sanction". It has got exactly two opposite meanings. For export control, sanctioned countries mostly mean the ones which you are not allowed to do business with. An embargo is a government order that restricts or limits commerce with a specified country or the exchange of specific goods. An embargo is usually created as a result of unfavorable political or economic circumstances between nations. Country-specific embargoes are a list of countries to be prohibited for doing any economic activity. Currently, they are Cuba, North Korea, Iran, Syria, and Crimea region of Ukraine. Note that Russia and Belarus are not embargoed but very critical at the moment. 

##### Sanctioned Parties 

Sanctioned parties are individuals, companies, institutions, vessels, banks, etc., with whom either business is prohibited or possible, only after obtaining authorization from relevant government authorities. Sanctioned parties are published by US, EU, and other national authorities. 

### Technical Guidelines

#### Security Requirements 

Content security is an important pillar for the Mendix Marketplace. The following sections details the security requirements necessary for modules, widgets, and connectors packaged into an *.mph* file format. Fulfill the following requirements for all Mendix Marketplace content (*.mpk* files) onboarded to Mendix  Marketplace.

##### Virus and Malware Scan for Files

During the governance check, performed by the Marketplace team, it is checked  whether the file contains viruses. Mendix expects that the product that you submit is without any malware. Therefore, Mendix recommends completing a full virus and malware scan using [VirusTotal](https://www.virustotal.com/gui/home/upload) prior to your submission. You can also provide a “clean” report during onboarding of your *.mpk*  file to Mendix Marketplace onboarding team.

VirusTotal scans the file for traces of virus, and malware against 70+ virus engines and provides a report. This ensures that the uploaded file to the Marketplace is free from any viruses and malware.  

##### File Integrity Check

You must generate and provides a SHA-2 compatible hash (>=SHA256) of the file being uploaded to Mendix Marketplace. This way, Mendix Marketplace onboarding team can verify the integrity of the file being sent and that files are not corrupted or have been tampered with.  

More information of how to generate a hash can be found here:  

* [Windows](https://www.howtohaven.com/system/how-to-hash-file-on-windows.shtml)

* [Linux](https://www.techengineer.one/how-to-hash-files-in-linux/)

Essentially, you can use any inbuilt utility for your operating system to generate the hash and provide it to Mendix Marketplace onboarding team for verification of integrity of your artifact.  

##### Vulnerability Check 

To ensure that the uploaded artifact is free from any critical and high vulnerabilities, you must ensure that you have scanned all 3rd party libraries and dependencies distributed with the artifact (the *.mpk* file). Normally they are in the **userlib** or  **widgets** folder inside the *.mpk*.  

You must ensure that the CVSS 3.0 score is less than 7.0 to pass the onboarding  criteria as per the [NIST NVD specification](https://nvd.nist.gov/vuln-metrics/cvss).  

A report supporting the above scan indicating libraries free of vulnerabilities can also be provided by to the Menidx Marketplace onboarding team during onboarding. Mendix recommends [Snyk Open Source](https://snyk.io/product/open-source-security-management/) solution to scan the third-party dependencies for vulnerabilities. This is required for all new and subsequent versions of the component uploaded to Mendix Marketplace. 

##### SAST Scan for OWASP top 10 vulnerabilities

In addition, you must ensure there are no [OWASP Top 10 vulnerabilities](https://owasp.org/www-project-top-ten/) in the code.  Traditional code based SAST scanners will not be very helpful to detect security issues in the low-code. They also cannot point out  security misconfigurations—if any. It is recommended to use a tool that can look into security best  practices outlined in the [Implementing Best Practices for App Security](/howto/security/best-practices-security/) and point out any security misconfigurations and bad practices.  

Mendix Marketplace contains the following products which you could use for the check:  [Clevr ACR](https://marketplace.mendix.com/link/component/114669), [SIG QSM/AQM](https://www.softwareimprovementgroup.com/mendix-quality-and-security-management-powered-by-sigrid/),  [Bizzomate](https://chromewebstore.google.com/detail/bizzomate-mendix-dev-tool/nkbokoloejkhohjlickhfkjfmbmboaof),  [Omnext Software Analyses Suit](https://marketplace.mendix.com/link/component/120746). You can use them to inspect and correct your product. Mendix recommends that you inspect the component before you onboard your content on the Marketplace.

#### Architectural Best Practices

As the supplier ecosystem evolves, different types of services will emerge. This section shares the best practice relevant for each type of offering in respect to the access management and service reliability. 

##### Access Management

Below are the best practices regarding the access management:

1. Issue one set of keys to access one service instance only.  
2. Ensure that provided keys can provide minimal access rights for the application to perform any operations on the service instance. Service can choose the level of access according to the service instance configuration. 
3. Mendix does not store keys issued to service consumer. If the consumer loses the key, they are bound to generate multiple binding keys for same instances. Hence, ensure that the number of binding keys per service instance is not a limiting factor. 
4. On deletion of binding, delete the corresponding keys. Do not reuse the keys for any other binding key request. 
5. Log any operation with binding keys for auditing purposes .
6. Return a 404 error code for both scenarios below. This prevents giving clue to hackers:
   * Absence of a resource (service instance)
   * Access of a resource to which the accessor does not have rights for 

##### Service Reliability

Below are the best practices regarding the service reliability:

1. If the service cannot complete the provided operation within two seconds, consider using an asynchronous response mechanism. 
2. Throttle requests to avoid noisy neighborhood issues. 
3. Respond a 4XX error code for invalid inputs and if preconditions are not met. 
4. In case of server error, the consuming app may retry invoking the service multiple times. An idempotent endpoint will be more robust for retries. 
5. Choose appropriate scaling mechanism to handle varying loads. Prefer horizontal scaling against vertical scaling.
6. Set up appropriate tools can monitor the service workload and raise notifications.
7. Have a disaster recovery plan for your service.
8. Broadcast availability of your service and scheduled maintenance window.

## Submitting Your Product

### Product Logo 

Display your cover image in your Mendix Marketplace listing by uploading your file in the *.jpg* format with a resolution of minimum 600 px x 420 px and a file size of maximum 1 MB. Check the copyright branding guidelines of other companies if you use their logo as part of your image.

The thumbnail is visible on the Mendix Marketplace homepage. It is the same image as the cover image in the listing itself.

It is important to carefully think about the thumbnail image, since it is the first item that draws the attention of the potential customers to your product offering. Therefore, Mendix recommends not using personal photos but rather an image that represents your offering.

### Product Name Taxonomy

Finding a perfect name is one of the most challenging topics regarding your product. The Mendix Marketplace has almost no restrictions on the names and as a supplier. Knowing your product, you are responsible for finding the best option.

However, Mendix still has some rules associated with naming:

* The size of the name has to be 30-32 characters to fit it in the thumbnail.

* Names have to be in English. Currently, the Mendix Marketplace is international with no option to switch languages. Thus, use an English name for global rather than regional exposure.

* Do not use content type as part of the name. The Mendix Marketplace classifies products by content types and categories, which help customers with filtering and searching. Avoid using standard platform terms in the name of your product and focus on the main product features and benefits. For example, “Widget” can be substituted with “3D Viewer”.

* Avoid using non-commonly-known abbreviations. It is important to draw customers' attention right from the thumbnail view, so potential customers open the listing itself to get more information. Apart from the image, the name has to be catchy.

* If you use your company's name in the product name, similarly to the previous bullet point, do not abbreviate it so that customers remember your brand and pay attention to it in the future.

### Product Description

Use this field to explain your offering. Product description is one of the most important aspects of online selling. Even if your product is great, it is significant to let your customer know that.

Start introducing your offering by describing the challenges your potential customers may face daily and how your offering can solve those issues.

Follow your description by adding information on how the product solves the problems and what benefits the product brings.

The requirements for the product description are as follows:

*   There is no limit on the characters in the description.
*   Mendix recommends adding a catchy one-liner before the rich text of the description. This line is used in the product's thumbnail as plain text—a maximum of 150 characters.

Below are some tips that can help you write a proper product description:

*   The product description should cover answers to the key questions that developers have when they look for content.

*   The product description should cover the product benefits. Rather than covering many technical features, which you can also cover in the **Documentation** tab, the **Overview** tab can draw attention to the benefits. Specify how your product can improve customers' app development or work life in general. What can help you is outlining the features and benefits of your product, before writing the description. For every feature you list, think about how it will directly benefit a customer.

*   Knowing the target audience will help you understand why this person needs your product, what features or benefits interest your customer. That way, you can put the focus on the right aspects.
*   Use natural language. Imagine you are telling your friend about the product. Reading the description aloud helps you see if you bring the natural tone like in the real conversation. Friendly- and easily-explained lines in the description help your customers connect to your product. 

*   Try not to use plain text, but rather support your description with bullet points, short paragraphs, and different size fonts. That way, you will help customers skim your text faster and draw attention to the most important parts of the text.

*   You can also add keywords to your description to optimize the content for search engines like Mendix or Google Search. That way, if someone is searching for your product using a certain word, your product may come out in the search of the potential customer.

### Screenshots and Assets

A picture says more than 1,000 words. You can share up to 10 screenshots of your offering to showcase what your offering looks like so that future users know what to expect. You can also upload asset links like white papers, eBooks, and testimonials. The maximum file size is 1 MB.

### Video or Demo (Optional)

It would be great if you upload a short demo video, for example, 30-90 seconds, of your offering, in which you briefly explain why people need it, what it does, how it works, and how it can be implemented. Demo videos are important for developers because they give them an idea of how your product looks and works. It is a very powerful resource, especially for paid content.

## Publishing Your Product

After Mendix reviews and approves your offering, the Mendix Marketplace team will make the final preparations for the technical onboarding and publishing.   

You can also work with the Mendix Marketplace team to define joint customer value propositions, marketing messages, and campaigns to further strengthen your offering as well as potential integrated end-to-end solutions that contain offerings from both you and Mendix.

Once everything is ready, the offering is marked for production and will be published on the Mendix Marketplace during the next scheduled release.

## Managing the Lifecycle

### Product Support

You must manage the accuracy of the offering on the Marketplace. Therefore, it is a requirement that the offering information is kept up to data e.g. in the event of new features or  benefits, with new releases. Our goal is to ensure that users and customers of the Mendix Marketplace have the most updated information about offerings.

If users or customers have additional questions about your product on Mendix Marketplace or want to engage to discuss a challenge, they should always be able to request a response using the **Contact Us** form on Mendix website or by clicking the link to your webpage available on your product offering page. If the **Contact Us** option is used, then you will be informed about these requests. You are expected to respond in a timely manner.  

Any products listed on Mendix Marketplace must meet the following requirements: 

1. Customers must be able to submit issues to you through a customer support portal or using a dedicated email address. A link to the customer support portal or email address must be provided in the product listing. 
2. You must support customers under an enterprise service level agreement. A Service Level Agreement (SLA) report must be made available to Mendix upon request. Part of this SLA report must include proof of a customer satisfaction survey with CSAT >=97% for issues with the product. 
3. Critical issues, like security issues or data loss bugs, must be fixed according to a responsible disclosure policy. If an issue is already published, then it must be resolved within 48 hours after being disclosed. 
4. Mendix reserves the right to notify any customers who are in any way using a product with such a critical issue.
5. Mendix reserves the right to run customer satisfaction surveys for your products. If CSAT score is lower than 97%, then Mendix reserves the right to delist the product. 
6. A list of known issues must be documented and available for customers and Mendix Customer Support. 
7. For services or APIs, a well-known information point on service status must be available to customers and Mendix Customer Support.

To provide the best level of support to customers of the product. Mendix recommends that you do the following:

- Set up a Service Level Agreement (SLA). For inspiration, consider the Mendix SLA as one example.
- Provide customers 24 x 7 x 365 support with global coverage. Ideally, a dedicated support team is available. In any case, make it straightforward for customers to identify which team or contact person  gives them support. Ensure proper Mendix training for the team—Mendix Advanced Certification is recommended.
- Continuously monitor customer satisfaction with both the product itself and the support you are providing.
- The support team should have a direct line of communication with the engineering team delivering the product as second- or third-line  support.
- Put internal procedures in place to manage changes, incidents, and escalations.
- Make a status page like status.mendix.com available for all customers.

{{% alert color="info" %}}
Mendix reserves the right to temporarily delist any products that do not adhere to these requirements until resolved. In principle, you will be notified in advance, but for critical issues, the notification can be sent at the same time as the delisting and customer notifications.
{{% /alert %}}

## Mendix Partner Program

For more information on what this program offers, see [Mendix Component Partner Program](/appstore/partner-program/) and [Mendix Commercial Solution Partner Program](https://www.mendix.com/partners/become-a-partner/isv-program/). 

## Read More

* [Community Best Practices for App Performance](/refguide/community-best-practices-for-app-performance/)
* [Mendix Best Practices for Development](/refguide/dev-best-practices/)
* [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/)
