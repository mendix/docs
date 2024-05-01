---
title: "Guidelines for Content Creation"
url: /appstore/creating-content/guidelines/
description: "Describes guidelines for creating content in the Mendix Marketplace."
weight: 1
no_list: false
description_list: true
tags: ["marketplace", "content creation", "guidelines"]
---

## 1 Introduction

This document provides guidelines for you to prepare a product as well as submit it to the public Marketplace.

## 2 Preparing Your Submission

### 2.1 Legal and Compliance Guidelines

Your products must comply with the [Acceptable Use Policy](https://assets.ctfassets.net/17si5cpawjzf/7GAYqpSdeZHciTtkfz7FoF/2f10c6aa72f80e06921e25154f46a973/Siemens_AUP-English.pdf). 

#### 2.1.1 End-User License

You must declare whether their product includes, uses, depends on, or distributes Third-Party Software of any kind from sources other than the partner or Mendix. Third-Party Software means any and all  files, including, but not limited to, APIs, content, source code, or compiled libraries. As part of your submission, partners are required to including licensing and copyright information as part of your product description and to include l*icensing.txt*, dependencies and an OSS Readme at the root directory level of the *.mpk*.

It is prohibited to use any restrictive or copyleft licenses such as GNU GPLv2, v3, as these limit the ability to sell commercially without  disclosing source code or place restrictions on its usage.  

If you have created own product specific Terms and Conditions, it is required that you host them, for example, on your web page and share the URL with the Mendix Marketplace team so they could be attached to the product listing page.

If your product is not licensed as an open-source component and you would like to specify certain licensing terms and conditions or end-user license agreements, we recommend creating a document that covers the  following topics:

- Copyright information and license conditions

- IP Usage – list of OSS/commercial licenses used 

  Below is a declaration template you can use for terms & conditions.

| Software Name and Version | Software URL | What does the Software do? Why is it needed? | License |
| ------------------------- | ------------ | -------------------------------------------- | ------- |
|                           |              |                                              |         |

- Export control
- Data Privacy, including data processing agreement, as necessary 
- Customer Service Level Agreement (SLA)

#### 2.1.2 Data Privacy

At Mendix, we believe you can have great products and great privacy.  We understand that data depends on how the customer interacts with the  product, but we want to make sure that key data privacy principles are  complied with at any time. 

* Create transparency on all personal data processing activities. 

* Give users the choice to configure or influence the data collection, processing and deletion wherever possible and useful. 

* Collect only personal data that is necessary for the provision of the application’s services and functions. 

* Delete personal data once no longer needed for the purpose of the collection. 

* Integrate privacy by design principles by default into your application. 
* Give customers control with whom to share their personal data. 
* Conclude appropriate data processing agreements with your suppliers and subcontractors and give the customer full transparency and control over all recipients of their personal data.  
* Ensure technical and organizational measure to protect data are in place

Declare to the Marketplace team which applies to your product:

* Personal data is not collected: the developer does not collect any data with the product.
* Personal data is collected, but not shared: the developer collects data with the product, but it is not shared with any  third-party.
* Personal data is collected and shared: the developer collects data with the product, and it is  shared with third-parties.

#### 2.1.3 Software Classification

#### 2.1.4 Export Control

Export Control is about following rules and regulations, mandated by  the country (or countries) in context of developing, sharing, delivering product and handling different areas/departments where  information/goods transfer can happen cross-border. 

It is imperative to understand main pillars on which the control system is placed. 

##### 2.1.4.1 Country Based Sanctions 

Do not get confused with the word "Sanction", it has got exactly two  opposite meanings. For export control Sanctioned countries mostly mean  the ones which you are not allowed to do business with. An embargo is a  government order that restricts/limits commerce with a specified country or the exchange of specific goods. An embargo is usually created as a  result of unfavorable political or economic circumstances between  nations. Country specific embargoes, a list of countries to be  prohibited for doing any economic activity. Currently, they are Cuba,  North Korea, Iran, Syria and Crimea region of Ukraine. Please note,  Russia and Belarus are not embargoed but very critical at the moment. 

##### 2.1.4.2 Sanctioned Parties 

Sanctioned Parties are individuals, companies, institutions, vessels, banks, etc., with whom either business is prohibited or possible, only after  obtaining authorization from relevant government authorities. Sanctioned Parties are published by US, EU and other national authorities. 

### 2.2 Technical Guidelines

Your products must be complete and fully functional, as advertised upon submission.

At any point in time you are responsible to ensure that any latest version of the product supports at least one Mendix LTS versions or  Mendix MTS versions.  

It is required to ensure that the Product CVSS 3.0 score should be less than 7.0 to pass the onboarding criteria as per the [NIST NVD specification](https://nvd.nist.gov/vuln-metrics/cvss) and that this is maintained. 

The product must not contain [OWASP Top 10 vulnerabilities](https://owasp.org/www-project-top-ten/) in the code. 

#### 2.2.1 Security Requirements 

Content security is an important pillar  for the Mendix Marketplace. This Appendix details the security  requirements necessary for modules, widgets, and connectors packaged  into a .mpk file format. The following requirements are to be fulfilled  for all Mendix Marketplace content (.mpk files) onboarded to Mendix  Marketplace: 

#### 2.2.2 Virus and Malware Scan for Files

During the  governance check, performed by the Marketplace team, it is checked  whether the file contains viruses. We expect that the product that you  submit is without any malware. Therefore, we recommend completing a full virus and malware scan using [VirusTotal](https://www.virustotal.com/gui/home/upload) prior to your submission.  You can also provide a “clean” report during onboarding of your .mpk  file to Mendix Marketplace onboarding team. 

VirusTotal  scans the file for traces of Virus, and Malware against 70+ virus  engines and provides a report. This ensures that the uploaded file to  marketplace is free from any viruses and malware.  

File -  Integrity Check It is required that the Partner also generates and  provides a SHA-2 compatible hash(>=SHA256) of the file being uploaded to Mendix Marketplace. This way Mendix Marketplace onboarding team can  verify the integrity of the file being sent and that files are not  corrupted or have been tampered with.  

More information of how to generate a hash can be found here:  

* [Windows](https://www.howtohaven.com/system/how-to-hash-file-on-windows.shtml)

* [Linux](https://www.techengineer.one/how-to-hash-files-in-linux/)

Essentially you can use any inbuilt utility for your operating system to generate  the hash and provide it to Mendix Marketplace onboarding team for  verification of integrity of your artifact.  

#### 2.2.3 Vulnerability Check 

To ensure that the uploaded artifact is free from any critical and high  vulnerabilities, it is required that the Partner ensures that he/she has scanned all 3rd party libraries/dependencies distributed with the  artifact (.mpk file). Normally they are present in “userlib” or  “widgets” folder inside the .mpk.  

It is required to  ensure that the CVSS 3.0 score is less than 7.0 to pass the onboarding  criteria as per the [NIST NVD specification](https://nvd.nist.gov/vuln-metrics/cvss).  

 A report  supporting the above scan indicating libraries free of vulnerabilities  can also be provided by to the Menidx Marketplace onboarding team during onboarding. Mendix recommends [Snyk Open Source](https://snyk.io/product/open-source-security-management/) solution to scan the 3rd party dependencies for vulnerabilities. This is required for all new and subsequent versions of the component uploaded to Mendix Marketplace. 

SAST Scan for OWASP top 10 vulnerabilities In addition, it is required to ensure there are no [OWASP Top 10 vulnerabilities](https://owasp.org/www-project-top-ten/) in the code. Mendix  Marketplace contains the following products which you could use to  assess the code for OWASP Top 10.: [Clevr ACR](https://marketplace.mendix.com/link/component/114669), [Omnext Software Analyses Suit](https://marketplace.mendix.com/link/component/120746), [SIG QSM/AQM](https://www.softwareimprovementgroup.com/mendix-quality-and-security-management-powered-by-sigrid/). You can make use of that or any other commercial/free tool which can do a SaST analysis of Mendix low-code.  

#### 2.2.4 Restrictive Licenses Check 

Content hosted on Mendix Marketplace should not have any restrictive/copyleft  licenses such as GNU GPLv2,v3 that limits the ability of maker to sell  commercially without disclosing source code or place restrictions on  usage.  

If you have a content which has open-source  license such as MIT or Apache, check if the 3rd party libraries being  used are compatible with the license. For Example, Apache v2.0 cannot be used with GNU GPLv2.  

If you are using any [Open-source licenses](https://opensource.org/licenses-old/category), make sure you have the code hosted on a public repository.  

Marketplace content governance team will check these cases once content is  submitted and get back to you if they find such issues. It is  recommended for Partner to do the check themselves beforehand to avoid  delay in the listing.

## 3 Submitting Your Product

### 3.1 Product Logo 

Display your cover image in your Mendix Marketplace listing by uploading your file (*.jpg*) in the right dimensions: resolution of minimum 600px x 420px and file size of maximum 1 MB. Check the copyright branding guidelines of other companies if you use their logo as part of your image.

The thumbnail is visible on the Mendix Marketplace homepage. It is the same image as the cover image in the listing itself.

It is important to carefully think about the thumbnail image, since it is the first item that draws the attention of the potential customers to your product offering. Therefore, we recommend not using personal photos but rather an image that represents your offering.

### 3.2 Product Name Taxonomy

Finding a perfect name is one of the most challenging topics regarding your product. In our Marketplace, we have almost no restrictions on the names and as a supplier. Knowing your product, you are responsible for finding the best option.

However, we still have some rules associated with naming:

* The size of the name has to be 30-32 characters to fit it in the thumbnail.

* Names have to be in English. Currently, our marketplace is international, and we have no option to switch languages. Thus, we recommend using an English name for global rather than regional exposure.

   {{% todo %}}What is "therefore showing the dedicated to the region content?"{{% /todo %}}

* Do not use content type as part of the name. We classify products by content types and categories, which help customers with filtering and searching. Avoid using standard platform terms in the name of your product and focus on the main product features and benefits. (e.g., “Widget” can be substituted with “3D Viewer”) 

* Avoid using non-commonly-known abbreviations. It is important to draw customers' attention right from the thumbnail view so potential customers open the listing itself to get more information. Apart from the image, the name has to be catchy.

* If you use your company's name in the product name, similarly to the previous bullet point, do not abbreviate it so that customers remember your brand and pay attention to it in the future.

### 3.3 Product Description

Use this field to explain your offering. Product description is one of the most important aspects of online selling. Even if your product is great, it is significant to let your customer know that.

Start introducing your offering by describing the challenges your potential customers may face daily and how your offering can solve those issues.

Follow your description by adding information on how the product solves the problems and what benefits the product brings.

The requirements for the product description are as follows:

*   There is no limit on the characters in the description.
*   We recommend adding a catchy one-liner before the rich text of the description. This line is used in the product's thumbnail as plain text—a maximum of 150 characters.

Tips that may help you write a proper product description:

*   The product description should cover answers to the key questions that developers have when they look for content.

*   The product description should cover the product benefits. Rather than covering many technical features (which you can also cover in the **Documentation** tab), the **Overview** tab can draw attention to the benefits. Specify how your product can improve customers' app development or work life in general. Before writing the description, what can help you is outlining the features and benefits of your product. For every feature you list, think about how it will directly benefit a customer.

*   Knowing the target audience will help you understand why this person needs your product, what features or benefits interest your customer. That way, you can put the focus on the right aspects.
*   Use natural language. Imagine you are telling your friend about the product. Reading the description aloud helps you see if you bring the natural tone like in the real conversation. Friendly- and easily-explained lines in the description help your customers connect to your product. 

*   Try not to use plain text, but rather support your description with bullet points, short paragraphs, and different size fonts. That way, you will help customers skim your text faster and draw attention to the most important parts of the text.

*   You can also add keywords to your description to optimize the content for search engines like Mendix or Google Search. That way, if someone is searching for your product using a certain word, your product may come out in the search of the potential customer.

### 3.4 Screenshots and Assets

A picture says more than 1,000 words! Share up to 10 screenshots of your offering to showcase what your offering looks like so that future users know what to expect. You can also upload asset links like white papers, eBooks, and testimonials. The maximum file size is 1 MB.

### 3.5 Video or Demo (Optional)

Did you know that people retain 95% of a video’s message in comparison with 10% when reading the text? That’s why it would be great if you upload a short demo video, for example, 30-90 seconds, of your offering, in which you briefly explain why people need it, what it does, how it works, and how it can be implemented. Demo videos are important for developers because they give them an idea of how your product looks and works. It is a very powerful resource, especially for "paid" content.

## 4 Publishing Your Product

After the your offering has been submitted, reviewed, and approved by Mendix, the Mendix Marketplace team will make the final preparations for the technical onboarding and publishing.   

The partner can  also work with the Mendix Marketplace team to define joint customer  value propositions, marketing messages and campaigns to further  strengthen its offering as well as potential integrated end-to-end  solutions that contain offerings from both the Partner and Mendix.    

Once everything is ready, the offering is marked for production and will be  published on Mendix Marketplace during the next scheduled release.

## 5 Managing the Lifecycle

### 5.1 Product Support

Partners are required to manage the accuracy of the offering on the  Marketplace. Therefore, it is a requirement that the offering  information is kept up to data e.g. in the event of new features or  benefits, with new releases. Our goal is to ensure that Makers and  customer of the Mendix Marketplace have the most updated information  about offerings.   It is a requirement, that if Makers or customers have additional questions about a partner product on Mendix Marketplace or  want to engage to discuss a challenge, that they will be able to request a response using the Contact Us form on Mendix website or by clicking  the link to the Partner web page available on the respective partner  product offering page. If the Contact Us option is used, then the  partners will be informed about these requests. Partners are expected to respond in a timely manner.  

Any products listed on Mendix Marketplace must adhere to the following requirements: 

1. Customers must be able to submit issues to the partner through a  Customer Support Portal or using a dedicated partner email address. A  link to the Customer Support Portal or email address must be provided in the product listing. 
2. Customers must be supported by the  partner under an enterprise service level agreement. An SLA report must  be made available to Mendix upon request. Part of this SLA report must  include proof of a Customer Satisfaction survey with CSAT >=97% for  issues with the product. 
3. Critical issues, like security issues or data loss bugs, must be fixed according to a responsible disclosure  policy. If an issue is already published, then it must be resolved  within 48h after being disclosed. 
4. Mendix reserves the right to notify any customers who are in any way using a product with such a critical issue. 
5. Mendix reserves the right to run customer satisfaction surveys for  partner products. If CSAT score is lower than 97%, then Mendix reserves  the right to delist the product. 
6. A list of known issues must be documented and available for customers and Mendix Customer Support. 
7. For services/APIs, a well-known information point on service status must be available to customers and Mendix Customer Support.

Mendix reserves the right to temporarily delist any products that do  not adhere to these requirements until resolved. In principle the  partner will be notified in advance, but for critical issues, the  notification can be sent at the same time as the delisting and customer notifications.

The objective is to provide the best level of support to customers of the product. To that end, we offer the following recommendations:

- Set up a Service Level Agreement (SLA). For inspiration, consider the Mendix SLA as one example.
- Provide customers 24 x 7 x 365 support with global coverage.  Ideally, a dedicated support team is available. In any case, make it  straightforward for customers to identify which team or contact person  gives them support. Ensure proper Mendix training for the team—Mendix  Advanced Certification is recommended.
- Continuously monitor customer satisfaction with both the product itself and the support you are providing.
- The support team should have a direct line of communication with the engineering team delivering the product as second- or third-line  support.
- Put internal procedures in place to manage changes, incidents, and escalations.
- Make a status page like status.mendix.com available for all customers.

{{% alert color="info" %}}
Mendix reserves the right to temporarily delist any products that do not adhere to these requirements until resolved. In principle the  partner will be notified in advance, but for critical issues, the notification can be sent at the same time as the delisting and customer notifications.
{{% /alert %}}

### 5.2 Product Updates

### 5.3 Product Retiring & Removal