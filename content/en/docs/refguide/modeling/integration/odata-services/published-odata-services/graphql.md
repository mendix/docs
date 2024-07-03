---
title: "Published GraphQL Services"
url: /refguide/published-graphql-services/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

In Mx 10.13 we've introduced beta support of GraphQL. Published GraphQL is an extension of a Published OData Service. In order to enable GraphQL support over **Settings** tab of your OData service and select **Supports GraphQL** to Yes.
After that all your published entities will be available in GraphQL too.

GraphQL service is available by making POST requests on service location (i.e. https://<your_app>/<path_to_the_service>). 
Use **Content_type: application/graphql** header and following body to request a collection of entities:
```
{ 
  query {
    <entitySetName> { 
      <listOfAttributesToRetrieve>
    }
  }
```

## 2 Limitations

Pagination is currently not supported. All entities are returned when requesting a collection.

Publish associations by ID is not supported.

Data mutation is not supported.

Running several queries in the same request is not supported.


