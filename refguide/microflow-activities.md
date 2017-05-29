---
title: "Microflow Activities"
space: "Mendix 7 Reference Guide"
parent: "integration"
---
## Integration Activitities

Integration activities can be used to integrate with other systems, for example by calling a web service.

| Graphic | Name | Description |
| --- | --- | --- |
| ![](attachments/16713769/19399144.png) | [Call REST action](call-rest-action) | Call rest action can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| ![](attachments/16713769/19398967.png) | [Call web service](call-web-service-action) | Call web service action can be used to call one of the [imported web services](consumed-web-services). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| ![](attachments/16713769/19398968.png) | [Import with mapping](import-mapping-action) | Import with mapping can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](domain-model) of the database. An [Import Mapping](import-mappings) is used to map the incoming XML or JSON to entities. |
| ![](attachments/16713769/19398969.png) | [Export with mapping](export-mapping-action) | Export with mapping can be used to export the data stored in [domain model](domain-model) entities into an XML or JSON string. It can also be stored in a file document. An [Export Mapping](export-mappings) is used to map domain model entities into XML or JSON. |
