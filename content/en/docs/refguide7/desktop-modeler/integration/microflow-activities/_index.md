---
title: "Microflow Activities"
url: /refguide7/microflow-activities/
---
## Integration Activitities

Integration activities can be used to integrate with other systems, for example by calling a web service.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/19399144.png" >}} | [Call REST action](/refguide7/call-rest-action/) | Call rest action can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| {{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/19398967.png" >}} | [Call web service](/refguide7/call-web-service-action/) | Call web service action can be used to call one of the [imported web services](/refguide7/consumed-web-services/). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| {{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/19398968.png" >}} | [Import with mapping](/refguide7/import-mapping-action/) | Import with mapping can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](/refguide7/domain-model/) of the database. An [Import Mapping](/refguide7/import-mappings/) is used to map the incoming XML or JSON to entities. |
| {{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/19398969.png" >}} | [Export with mapping](/refguide7/export-mapping-action/) | Export with mapping can be used to export the data stored in [domain model](/refguide7/domain-model/) entities into an XML or JSON string. It can also be stored in a file document. An [Export Mapping](/refguide7/export-mappings/) is used to map domain model entities into XML or JSON. |
