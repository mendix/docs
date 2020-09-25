# Metamodel Release Notes for version 8.14.0

## DomainModels

### EntityCapabilities (Element)


#### Property 'countable'
* Added public

### RemoteEntitySourceDocument (ModelUnit)


#### Property 'endpointId'
* Introduced; "The endpoint UUID"

#### Property 'minimumMxVersion'
* Introduced; "The minimum Mendix version this remote source requires"

#### Property 'recommendedMxVersion'
* Introduced; "The recommended Mendix version to use this remote source"

#### Property 'environmentType'
* Introduced; "A type to indicate a production service or not"

## Kafka

### ConsumedKafkaService (ModelUnit)


#### Property 'serviceId'
* Deleted; 

### PublishedKafkaService (ModelUnit)
* Introduced; 


### PublishedKafkaResource (Element)
* Introduced; 


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
