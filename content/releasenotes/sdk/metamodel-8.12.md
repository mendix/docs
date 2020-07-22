# Metamodel Release Notes for version 8.12.0

## DomainModels

### Entity (Element)


#### Property 'capabilities'
* Introduced; "What an entity is capable of"

### EntityCapabilities (Element)
* Introduced; "What an entity is capable of"


## Kafka

### ConsumedKafkaService (ModelUnit)


#### Property 'serviceFeed'
* Introduced; 

#### Property 'entities'
* Deleted; 

### KafkaRemoteEntitySource (Element)


#### Property 'topicName'
* Introduced; 

### KafkaEntity (Element)
* Deleted; 


### KafkaNavigationProperty (Element)
* Deleted; 


### KafkaAttribute (Element)
* Deleted; 


## Rest

### PublishedODataService (ModelUnit)


#### Property 'replaceIllegalChars'
* Introduced; "Allows export of content with illegal characters to XML by replacing them"

### ConsumedODataService (ModelUnit)


#### Property 'applicationId'
* Added public

## Menus

### MenuItem (Element)


#### Property 'alternativeText'
* Introduced; 

## Navigation

### NavigationProfile (Element)


#### Property 'applicationTitle'
* Deleted; "Use property 'appTitle' instead"

#### Property 'appTitle'
* Introduced; 

#### Property 'appIcon'
* Introduced; 

## Pages

### ClientAction (Element)


#### Property 'disabledDuringExecution'
* Introduced; 

### PageSettings (Element)


#### Property 'formTitle'
* Deleted; 

#### Property 'titleOverride'
* Introduced; 

### DivContainer (Element)


#### Property 'screenReaderHidden'
* Introduced; 

### TextBox (Element)


#### Property 'autocompletePurpose'
* Introduced; 

### InputWidget (Element)


#### Property 'screenReaderLabel'
* Introduced; 

### ActionButton (Element)


#### Property 'disabledDuringAction'
* Deleted; 

## Workflows

### WorkflowActivity (Element)


#### Property 'caption'
* Added public
