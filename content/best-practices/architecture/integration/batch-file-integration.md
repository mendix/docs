---
title: "Batch Integration"
parent: "integration-overview"
menu_order: 5
draft: true
---

## 1 Introduction

Batch integration is relevant for business processes that are periodic or when a lot of data needs to be transferred. The diagram below shows the main three steps involved in Batch integration:

1. Extract a set of data into e.g. a file
2. Move the data
3. Import the data

<![](attachments/batch-file-integration/bfi-intro.png)

### 1.1 Reasons to use Batch Processing

There are a few reasons to go for Batch oriented Integration:

1. When a business process is periodic, the correct way to process the integration is to work on a snapshot of the data, and then batch processing is the best way to work:
   a) Many financial processes are periodic, such as salary payments, interest calculations and often invoicing
   b) Reference data, e.g. products, drivers, employees etcetera should be shared with operational systems only at certain times
   c) Back-ups and other operational processes are typically done at night time
2. There is a processing advantage when working in batch. The initiation of an event or service call has a cost in processing power, so it is much more efficient to extract, move and import a million records in one go, than it is to initiate 1 million separate events or service calls. The advantage becomes relevant at around 50 000 records, and significant above 500 000 records.
3. Combining the two factors above: Some heavier processing can be moved to the night time to save on CPU cycles in the day time. This means we may need less expensive infrastructure, and/or we can improve response times for end-users in the day time
4. Batch integration is decoupled:
  a) The Export and Import can happen at different times. In fact Import can be done several times if required. 
  b) There is a clear defined file format that has been agreed on. I.e. two systems can be very far from each other and virtually un-aware of each other and still integrate well. Often in a Mendix project the developer only knows that there is a file of reference data we need to import, while it may be unclear or irrelevant where that file originated from. 

### 1.1 Reasons to avoid Batch Processing

The reasons not to go for Batch integration are: 

1. We are moving more and more towards a real-time world. Processes that used to be periodic, are becoming real-time. E.g. Invoicing was previously almost always monthly. Now a days it is frequently done in real-time as an order is confirmed or when a delivery is complete
2. Error handling can be complicated. E.g. if 5 records out of 1 million fail to import, there is a need to inform the source about this, or correct the file, or have a human workflow in the destination to manage these errors. 

## 2. Reference Data Examples with Mendix

Many organizations use Mendix to manage reference and master data as Microservices that have each a functional area of responsibility: Reference data is semi-static, such as vehicles, drivers, addresses, products, shop opening hours, or BI statistical information that is turned into reference data to fine-tune processes. Master data, such as customers, changes in real-time while being used in several processes across the enterprise. 

There area three typical examples where Mendix plays a role in master and reference data use-cases:
* Global reference data apps typically share data periodically as a file. This is because there are many subscribers that need to work on the same reference data set. E.g. ordering, engineering and financing all need to be aware of the same products for the order-to-cash process to work properly.
* Local "Shared data apps" are typical for Microservices systems consisting of 3-10 apps.  They manage import and distribution of reference data within that cluster of apps. The other apps can poll for differences instead of all importing a full set of data. Human workflow can define shared data and managing issues in import/export. the shared data app can also provide a combined view of data for the rest of the world, see <<Central Data>>.
* Global master data apps, such as a central customer apps, often need to share both in real-time for operational processes, see <<Service Integration>> as well as via files to e.g. ERP solutions, to prepare for invoicing later.

The diagram below shows an example for managing shared product and customer data across Mendix apps and other systems such as engineering and finance systems.

<< FIGURE 2 - NEW >>

1. New or changed product definitions should only be shared at decided moments, so the business process is periodic and all three down-stream systems need to have the data at the same time. I.e. this is a perfect case for Batch integration with files. New data will only be shared at night, when no ordering occurs, and only some nights when marketing, sales and engineering agree it can be released. An FTP server (or any nother file transfer management system) acts as a central point of contact for files.
2. A customer master data app is outside in Order-to-cash cluster to serve other areas as well. It can be reached via deep-link to create new customers when required, and this data is transferred almost directly to be able to place orders against it. 
3. The Order-to-Ship process is complex, so it has been broken up in five Microservices: The Dashboard for SSO and overviews, three separate apps for each of the phases: Order, Contract and Ship, and a Shared Data App to manage all shared data. 
4. As the shared data app is importing the product reference data file it marks all products that change as updated, so that the other apps can subscribe to those changes via a REST call, thereby minimizing the need for processing and allowing the other apps to be ignorant to how the product data is distributed globally.

## 3 File Integration and Management {#file-integration}

File integration is important for:
1. Batch integration as decribed above
2. Sharing content files such as PDFs, photos, images, manuals, brochures, binaries, 3D models etcetera
3. Logging and back-ups

### 2.1 Mendix File storage

Each Mendix app has a dedicated file storage area where it writes files to by default. This is also where the Mendix app log file is located by default. The size of this area is large enough to handle most regular file management. Also when importing a file, it is practical to copy the file to this local area first before processing it.

In rare cases, the file space can be extended by filing a support ticket. This could be if the purpose of the Mendix app is to help distribute files like manuals, documents or pictures, see <<Example for Product Support>> below

### 2.2 File transfer Options

The diagram shows different options to share or transfer files between two apps. In almost all cases the source app creates the file locally first after which it is transferred. The exception is when a shared folder location is available, in which case both apps can write and read from the same folder.

![](attachments/batch-file-integration/file-integration.png)  <<FIGURE 3>>

The five examples are:

1. Source app creates file locally. Destination app calls the source app with REST or SOAP to get the file as an attachment in a JSON or XML message. This is efficient for files smaller than approximatelly 5-10 MB.
2. Source app writes the file directly in a shared folder. At the end it renames it to the target name. The Destination app will be able to read the file as soon as it is renamed to the agreed name.
3. Move the file via FTP or SFTP. This requires an FTP server to be available. The Source app pushes files to the FTP server, that stores it locally until one or more subscribers can pick it up using FTP get, see https://appstore.home.mendix.com/link/app/107256/.
4. For more complex file management solutions there can be a special tool for this, or the ESB can be adapted to handle the transfer. Typically the source app pushes the file to this solution, that in turn creates a copy per destination in another folder, accessible only to one subscriber each. This MFT (Managed File Transfer) solution verifies that files are picked up and processed within agreed time-frames, and can raise alarms when it is not the case.

In larger organizations the file and batch process management can be quite elaborate. There is often a central scheduling solutions that expect files at certain times, and that orchestrates the moving of files and the export and import of the files and any errors that occur in this process.

### 2.3 Example: Manuals for Product Support

In the example below the customer can browse all products, register usage of specific products and download information and documentation related to these producst. In this case the file management is at the core of the solution.

<<FIGURE 4 - NEW>>

1. The departments that own the product groups will send files with information to the Portal, e.g. product sheets with meta data, manuals, pictures and 3D models. Updates are periodic, so batch processing is a good way to handle updates.
2. The Mendix Customer Portal app will poll for new product files and move them to the expanded internal file storage area, registering in the database some file-metadata, linking files to products or product groups.
3. The app imports some of the files with product meta data, to be searchable in the app and directly readable
4. Corporate customers can browse all products and related marketing information. They can also register a list of products that they use, and then download the related manuals and documentation, as well as receiving alerts when documents are updated. PDFs, Excel and other common format files can be read directly in the Mendix portal UX.


## 3 Export & Import {#export-import}

Batch processing runs a large set of data at a certain moment. For example, interfaces towards data warehousing (DWH) and business intelligence (BI) typically require a large export of data and later a large imports of the same data.

The diagram shows the three main steps of batch processing: export, move, and import file

![](attachments/batch-file-integration/export-import.png)   <<FIGURE 5>>

Typically the Extract happens at a different time from the Import. The moving of the file can be done separatelly as well, but often the destination app polls a location for a file. When the file appears, it copies the file and triggers the import.

Mendix frequently imports and exports files of various formats, and the level of skills required to do this depends on the format of the file. For un-usual file formats a more technical developer is recommended, while for common formats it is more or less out of the box.

The most common format is [CSV](csv) import and export. This also works well with Excel integration. The [Excel Importer](https://appstore.home.mendix.com/link/app/72/) module in the Mendix App Store is very frequently used. When there are text fields in the data, the text can contain a comma, so there should be more complex field separators to be sure it works correctly.

If there is a large amount of data to import, the best practice is to use a process queue to write to. This prevents the entire data set being in memory at the same time, see section <<"Using Internal Queues" in https://documentation-accp.cfapps.io/best-practices/architecture/integration/event-integration>>.  See also  the Use case <<Export, Import, Batch: https://documentation-accp.cfapps.io/best-practices/architecture/integration/export-import-batch>> .

## 4 ETL, DWH & BI Integration {#int}

ETL tools are used to keep Dataware houses (DWH) and Data lakes updated. They can perform the entire operation of extracting, moving, validating, transforming, and updating the destination. For legacy systems, they can use direct database access or use files as input. When Mendix integrates with ETL or BI, these are the preferred methods:

* Exporting a file for periodic dumps of specific data
* Using OData for more frequent and smaller updates
* Using the Mendix database backup file, if all data with the relations is required

This diagram presents the three most used methods for such a solution: OData, Files or DB back-up:

![](attachments/batch-file-integration/dwh.png)

Mendix recommends using either files or OData, and to restrict the amount of data that is shared. This also limits  dependencies. BI and DWH should have a specific purpose with gathering the data, and minimizing the retrieval to this purpose creates the simplest overall solution.

OData is positionned to collect smaller data chunks more close to real-time. This is typically useful for BI solutions or business dashboard, see the [Database Integration & OData](service-integration#db-odata) section of *Service Integration*). This requires the BI solution to have a direct link to the app, and if the Mendix data-model of the monitored data-object changes, it will often require the BI solution too update the retrieval as well. 

Files is the most decoupled option to share data with BI, ETL and Data warehouses. There could be several files with different data and functional IDs that link objects together. If this option is possible, it is recommended.

When the DWH wants almost all the data, when the domain model is complex, or when there are several important many-to-many relations, then the data-base dump is available as the best option. ETL solution will be directly depending on the Mendix data-model creating a tight coupling that forces the ETL solution to change with every new Mendix app release. To handle this dependency ETL solutions have a staging area where raw data is imported, so they can actually adopt even after changes occured, when errors are discovered.

## 5 Summary

Even as the world moves towards real-time, batch processing provides more efficient processing or the ability to move processing to a time of the day with the app instance is less busy. It alson provides decoupling for business processes that anyway are periodic in nature.

Batch processing is required in almost all enterprises and Mendix support this very well, with an internal scheduler, and good export and import functionality. Mendix apps have an internal file storage area and can also move or get files using a central FTP server or another managed file transfer solution available in the company.







