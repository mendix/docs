---
title: "Microflow Activities"
space: "Reference Guide 6"
parent: "integration"
---
## Integration Activitities

Integration activities can be used to integrate with other systems, for example by calling a web service.

<div class="alert alert-info">{% markdown %}
The Call Rest Action is available since Mendix 6.6.0.
{% endmarkdown %}</div>

| Graphic | Name | Description |
| --- | --- | --- |
| ![](attachments/16713769/19399144.png) | [Call Rest Service](/refguide6/call-rest-action) | Call Rest Action can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| ![](attachments/16713769/19398967.png) | [Call Web Service](/refguide6/call-web-service-action) | Call Web Service Action can be used to call one of the [imported web services](/refguide6/consumed-web-services). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| ![](attachments/16713769/19398968.png) | [Import with Mapping](/refguide6/import-mapping-action) | Import with Mapping can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](/refguide6/domain-model) of the database. An [Import Mapping](/refguide6/import-mappings) is used to map the incoming XML or JSON to entities. |
| ![](attachments/16713769/19398969.png) | [Export with Mapping](/refguide6/export-mapping-action) | Export with Mapping can be used to export the data stored in [domain model](/refguide6/domain-model) entities into an XML or JSON string. It can also be stored in a file document. An [Export Mapping](/refguide6/export-mappings) is used to map domain model entities into XML or JSON. |
