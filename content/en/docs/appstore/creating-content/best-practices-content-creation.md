---
title: "Best Practices for Content Creation"
url: /appstore/creating-content/best-practices/
description: "Describes some best practices to create content in the Mendix Marketplace."
weight: 5
tags: ["marketplace", "content ", "best practices", ""]
---

## 1 Introduction

This document is an addition to the Mendix Marketplace Guidelines and aims to provide Partners with best practices, recommendations, and tips for preparing a product as well as submitting it to the public Marketplace.  

You will find information on:

*   Technical recommendations, including architectural best practices.

*   Marketing tips, for example, on how to write nice description, what name to choose for the product.

*   Operational recommendations for support, product lifecycle.

## 2 Technical Best Practices

### 2.1 Low Code Security Misconfigurations (Recommended)

Mendix applications, widgets, connectors, modules are developed Mendix, so traditional code based SAST scanners will not be very helpful to detect security issues in the low-code. They also cannot point out security misconfigurations - if any. It is recommended to use a tool that can look into security best practices outlined in the [Mendix documentation](https://docs.mendix.com/howto/security/best-practices-security/) and point out any security misconfigurations and bad practices. 

Mendix Marketplace contains the following products which you could use for the check: [Clevr ACR](https://marketplace.mendix.com/link/component/114669), [SIG QSM/AQM](https://www.softwareimprovementgroup.com/solutions/sigrid-for-mendix-application-quality-monitoring/), [Bizzomate](https://chrome.google.com/webstore/detail/bizzomate-mendix-dev-tool/nkbokoloejkhohjlickhfkjfmbmboaof) , [Omnext Software Analyses Suit](https://marketplace.mendix.com/link/component/120746). These can be used to inspect and correct your Module, Widget or Connector. It is recommended for Partner to inspect the component before you onboard your content on marketplace. 

### 2.2 Architectural Best Practices (Recommended)

As the supplier ecosystem evolves, different types of services will emerge. This section shares the best practice relevant for each type of offering in respect to the Access management and Service Reliability.

Backend service implementation 

Access Management 

1. Issue one set of keys to access one service instance only.

2. Ensure that provided keys can provide minimal access rights for the application to perform any operations on the service instance.
   Service can choose the level of access according to the service instance configuration.

3. Mendix platform does not store keys issued to service consumer. If the consumer loses the key, she is bound to generate multiple binding keys for same instances. Hence ensure that the number of binding keys per service instance is not a limiting factor.

4. On deletion of binding delete the corresponding keys. Don’t reuse the keys for any other binding key request.

5. Log any operation with binding keys for auditing purposes 

6. Return 404 for both scenarios below. This prevents giving clue to hackers 
   1.  absence of a resource ( service instance ) 
   2.  access of a resource to which the accessor does not have rights for 

Service Reliability 

1. If the service cannot be complete the provided operation within 2 seconds consider using an asynchronous response mechanism.
2. Throttle requests to avoid noisy neighborhood issues.
3. Respond 4XX for invalid inputs and If preconditions are not met.
4. In case of server error, the consuming app may retry invoking the service multiple times. An idempotent endpoint will be more robust for retries.
5. Choose appropriate scaling mechanism to handle varying loads. Prefer horizontal scaling against vertical scaling 
6. Setup appropriate tools that enable monitoring of the service workload and can raise notifications 
7. Have a disaster recovery plan for your service 
8. Broadcast availability of your service and scheduled maintenance window

Useful links 

* [Community Best Practices for App Performance](https://docs.mendix.com/howto/general/community-best-practices-for-app-performance/)
* [Minimize the Number of In-Use Objects in Your Session](https://docs.mendix.com/howto/general/minimize-number/)
* [Implement Best Practices for App Security](/howto/security/best-practices-security/)
* [Mendix Best Practices for Development](https://docs.mendix.com/howto/security/best-practices-security/)
* [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/)

## 3 Marketing Best Practices

### 3.1 Product Logo 

Display your cover image in your Mendix Marketplace listing by uploading your file (.jpg) in the right dimensions: resolution of minimum 600px x 420px and file size of maximum 1 MB. Do check the copyright branding guidelines of other companies, if you use their logo as part of your image.

The thumbnail is visible on the Mendix Marketplace homepage. It is the same image as the cover image in the listing itself.

It is important to carefully think about the thumbnail image, since it is the 1st item which draws attention of the potential customers to your product offering. Therefore, we recommend to not use personal photos,
rather an image that represents your offering.

### 3.2 Product Name Taxonomy 
One of the most challenging topics regarding your product is finding a perfect name. In our marketplace we have almost no restrictions on the names and as a supplier, knowing your product, you are responsible to find the best option.

However, we still have some rules associated to naming:

*   The size of the name has to be 30-32 characters to fit it in the thumbnail.

*   Names have to be in English. Currently, our marketplace is international and we have no option to switch the languages,
    therefore showing the dedicated to the region content. Therefore, if you want a global exposure (rather than regional) - we recommend using English name.

*   Do not use content type as part of the name. We classify products by content types and categories, which help customers with filtering and search. Avoid using standard platform terms in the name of your product and focus on the main product feature/benefit. (e.g.
    “Widget” could be substituted with “3D Viewer”) 
*   Avoid using non commonly known abbreviations. It is important to draw customer’s attention right from the thumbnail view, so potential customer opens the listing itself to get more information.
    Apart from the image, the name has to be catchy.

*   If you use the name of your company in the product name, similarly to the previous bullet point, do not abbreviate it, so that customer remembers your brand, and in future potentially draws attention to it.

### 3.3 Product Description

Use this field to explain your offering. Product description is one of the most important aspects of online selling. Even if your product is great, it is significant to let your customer know that.

Start introducing your offering by describing the challenges that your potential customers may face in day to day life and how your offering could solve those issues.

Follow your description by adding information on how the problems are actually solved and what benefits the product brings.

Requirements:

*   No limit in characters for the description 
*   We recommend adding a one catchy liner before the rich text of description. This line will be used in the thumbnail of the product as plain text - max. 150 characters 
Tips which may help you write a proper product description:

*   Product description should cover the key answers makers have when looking for content.

*   Product benefits. Rather than speaking about a large number of technical features ( which you could also cover in documentation section), overview section could be used to draw attention to the benefits. Meaning how your product can improve customer’s app development or work life in general. Before writing the description, what could help you is making an outline of features and benefits of your product. For every feature that you list, think how it will directly benefit the customer.
    
*   Knowing the target audience, will help you understand why this person needs your product, what features, or benefits would interest your customer. That way you can put the focus on the right aspects 
*   Using natural language. Imagine you are telling your friend about the product. Reading the description outload will help you see if you bring the natural tone like in the real conversation. Reading friendly easily explained lines of the description will help your customers connect to your product. 

*   Try not to use plain text, but rather support your description with bullet points, short paragraphs, different size fonts.  That way you will help customer skim your text faster and draw attention to the most important parts of the text.

*   You can also add some keywords to your descriptions to optimizing the content for search engines like Mendix or Google search. That way if someone is searching for your product using a certain word,
    your product may come out in the search of the potential customer.

### 3.4 Screenshots and Assets

A picture says more than 1,000 words! Share up to 10 screenshots of your offering to showcase what your offering looks like, so future users know what to expect. You can also upload asset links like white papers,
eBooks, customer and/or developer testimonials.

### 3.5 Video or Demo (Optional)

Did you know that video retains 95% of a video’s message in comparison to 10% when reading the text? That’s why it would be great if you upload a short (demo) video (30-90 sec) of your offering in which you briefly explain why people need it, what it does, how it works and/or how it can be implemented. Demo videos are important for Makers because they give them an idea of how your product looks and works It is very powerful resource, especially for "paid" content.

## 4 Operational Best Practices 

### 4.1 Terms & Conditions 

If your product is not licensed as an Open-Source component and you would like to specify some certain licensing terms and conditions or End User License agreement, we recommend creating a document, which should cover the following topics:

*   Copyright information and license conditions 
*   IP Usage – list of OSS/commercial licenses used 

This is the template of the declaration you could use for T&Cs.

| Software Name and Version | Software URL | What does the Software do? Why is it needed? |License|
|-|-|-|-|
|||||

*   Export control 
*   Data Privacy, including data processing agreement, as necessary 
*   Customer Service Level Agreement (SLA)

### 4.2 Support Recommendations 

The objective is to provide the best level of support to customers of the product. To that end, we provide the following recommendations:

*   Set up an SLA. For inspiration, consider the Mendix SLA as one example.
*   Provide customers 24x7x365 support with global coverage. Ideally a dedicated support team is available. In any case, a specific team or contact person should be identified who will provide support. Ensure proper Mendix training for the team - Advanced Certification is recommended.
*   Monitor customer satisfaction with both the product itself and the support you are providing on a continuous basis.
*   The support team should have a direct line of communications with the engineering team delivering the product as second-or third-line support.
*   Put internal procedures in place for change/incident/escalation management.
*   Make a status page like status.mendix.com available for all customers.
