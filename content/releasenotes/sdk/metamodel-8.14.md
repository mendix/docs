# Metamodel Release Notes for version 8.14.0

## DomainModels

### EntityCapabilities (Element)


#### Property 'countable'
* Added public

## Rest

### ConsumedODataService (ModelUnit)


#### Property 'versionApiMockResults'
* Deleted; "Use real payload from the Version API"

#### Property 'serviceId'
* Deleted; 

#### Property 'lastUpdated'
* Introduced; "When the ODataService was last updated"

## Pages

### PageClientAction (Element)


#### Property 'numberOfPagesToClose'
* Deleted; "Use property 'numberOfPagesToClose2' instead"

#### Property 'numberOfPagesToClose2'
* Introduced; 

### ClosePageClientAction (Element)


#### Property 'numberOfPages'
* Deleted; "Use property 'numberOfPagesToClose' instead"

#### Property 'numberOfPagesToClose'
* Introduced; 

### CreateObjectClientAction (Element)


#### Property 'numberOfPagesToClose'
* Deleted; "Use property 'numberOfPagesToClose2' instead"

#### Property 'numberOfPagesToClose2'
* Introduced; 
