---
title: "Advanced Customization Options"
url: /partners/siemens/bom-widget-customization/
weight: 3
description: "Describes the customization capabilities that allow developers to add data from external systems, and how these can be combined into the Teamcenter BOM widget."
---

## Augmenting with Mendix Data

Client columns allow you to display custom data next to Teamcenter properties in the BOM view. The widget calls the following two microflows:

* `CUSTOM_RetrieveClientColumnDefinitions` – Microflow to retrieve the client column definitions: client column name, width, and column order.
* `CUSTOM_RetrieveClientColumnData` – Microflow to retrieve the additional cell data to display for the BOM lines and client columns. 

As a developer, you are free to implement this according to your own needs. Additional data includes calculated values, third-party data, or data from the database.

### CUSTOM_RetrieveClientColumnDefinitions

This microflow is invoked by the Teamcenter BOM widget to retrieve the definitions of the client columns to display in the widget.

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/custom-retrieveclientcolumndefinitions.png">}}

#### Input Parameter

* **Object**: `MendixColumnRoot`
* **Attribute**:
  
    * `WidgetId` is a unique identifier for the specific Teamcenter BOM widget instance that is making the request. This is useful if your app includes multiple Teamcenter BOM widgets that need to display different columns. You can use this ID to differentiate and return the appropriate data.

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/domain-model-mendixcolumnroot.png">}}

#### Return Value

* **Object**: `List of ClientColumn`
* **Attributes**:

    * `Name` – The name of the client column. This name is used in the UI of the Teamcenter BOM widget as the column title.
    * `ColumnOrder` – The order of the column within the widget, respectively. Teamcenter columns also have their own order, so this needs to be filled in conjunction. If the order is identical, Teamcenter columns take priority.    
    The first column should be object_string, which is already defined.    
    All Mendix client columns must start with `columnOrder 2` and will be displayed before the Teamcenter columns.    
    Mendix columns are sorted based on their `columnOrder` parameter.    
    Teamcenter columns are displayed after the client columns.     
    The `columnOrder` for Teamcenter columns is defined by the Teamcenter administrator using the column configuration utilities in the Teamcenter Admin Console.

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/domain-model-clientcolumn.png">}}

### CUSTOM_RetrieveClientColumnData

This microflow is invoked by the Teamcenter BOM widget to retrieve the data to be rendered in the BOM tree. It gathers cell data for specific BOM lines and any client columns.

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/custom-retrieveclientcolumndata.png">}}

#### Input Parameter

* **Object**: `MendixDataRoot`
* **Attributes and associations**:

    * `WidgetId` – A unique identifier for the specific Teamcenter BOM widget instance that is making the request. This is useful if your app includes multiple Teamcenter BOM widgets that need to display different data. You can use this ID to differentiate and return the appropriate data.
    * Associated `MendixDataColumnName` objects – This list specifies which custom columns the widget is configured to display. Each object has a `Name` attribute, representing the identifier of a custom column.
    * Associated `MendixDataBOMLine` objects – This list contains the specific BOM lines for which the widget requires data. Each object includes attributes such as `ItemId`, `RevisionId`, `RevisionUId`, and `BOMlineUid` to identify the BOM line and its `ItemRevision`.

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/domain-model-mendixdataroot-with-associations.png">}}

#### Return Value

* **Object**: `List of ClientDataResponse`
* **Attributes**:

    * `Value` – The value to display in a targeted cell in the BOM.
    * `ClientColumnName` – The name of the column of the targeted cell.
    * `ItemRevisionUID` – The item revision UID of the corresponding BOM line of the targeted cell.

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/domain-model-clientdataresponse.png">}}

### ClientColumn Overview Page

For convenience, the `TcBOMModule` includes overview and edit pages to define and manage `ClientColumns`.

## Upgrade Note

Please be aware that any direct modifications made to this specific microflow within the `TcBOMModule` will be overwritten and lost during future upgrades of the `TcBOMModule`.

To ensure your custom data retrieval logic is preserved across upgrades, Mendix highly recommends that you to create two new microflows in your own module to fetch the column definition and cell-data, and to return a list of `ClientColumn` objects and `ClientDataResponse` objects, respectively. These microflows can then be called in `CUSTOM_RetrieveClientColumnDefinitions` and `CUSTOM_RetrieveClientColumnData`.
