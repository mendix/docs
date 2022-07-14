---
title: "Generalization vs One-to-One Associations"
url: /refguide/generalization-and-association/
weight: 50
tags: ["domain model", "association", "inheritance", "one-to-one", "generalization"]
---

## 1 Introduction

Sometimes, you want to add information to an entity which is used in a different module, perhaps a module which is imported from the Mendix Marketplace. You do not want to customize the entity as this will prevent you from getting updated versions of the module. At other times, you may want to add additional information to some objects of an entity but not to others. For these cases there are two methods you can use: **generalization** (or *inheritance* as it is often called) or **associated entities**.

Mendix developers have to choose on a daily basis whether or not they want to use inheritance or associations. One example which occurs in most apps is deciding how you want to set up your users. Are you going to keep using the already available Account entity in the Administration module? Or are you going to work with separate entities with a one-to-one association to the user account? Or are you going to add (multiple) entities that inherit from **System.User**? In this case, it would be bad practice to add additional information directly to the System.User entity and, in fact, Mendix prevents you from doing so.

When defining closely related structures, it can be difficult to decide on the best architecture. Should the entity inherit from a base structure or do you rather want to use a one-to-one association? You should consider both options as each one can have a huge impact on the performance of the application or the speed of development.

## 2 Generalization, Specialization & Inheritance

The Mendix domain model is based on the [class diagram](http://en.wikipedia.org/wiki/Class_diagram) in [UML](http://en.wikipedia.org/wiki/Unified_Modeling_Language), which allows the specification of the objects/entities and their attributes and associations. The concept of generalization in Mendix is exactly the same as in UML. However, the Mendix domain model uses a different notation to display the generalization. The UML class diagram uses associations with a hollow triangle (arrow) pointing to the super class (meaning, the generalization). In Mendix generalization is expressed with a blue label above the specialized entity, specifying the generalization entity name.

{{< figure src="/attachments/refguide/modeling/domain-model/generalization-and-association/generalization-indication.png" alt="example of generalization notation" >}}

UML also allows us to specify the types of associations, such as an [Aggregation](http://en.wikipedia.org/wiki/Aggregation_(object-oriented_programming)) or [Composition](http://en.wikipedia.org/wiki/Object_composition). The definition of these associations specify whether or not the objects can exist without each other. Unlike UML we can not specify how strong a relationship is. Any dependencies between the two objects have to be specified using [event microflows](/refguide/event-handlers/) or [delete behavior/prevention](/refguide/association-properties/#delete-behavior).

### 2.1 Performance

To understand the impact on, and behavior of, the application, you need to understand the basic concepts of [Transactions](http://en.wikipedia.org/wiki/Database_transaction) and [(Database) Isolation Levels](http://en.wikipedia.org/wiki/Isolation_(database_systems)#Read_committed).

The Mendix Platform uses transactions, which means that every microflow, commit, and delete will happen in a (database) transaction.  The transaction is initialized as soon as the microflow executes its first database action, and only ends when the microflow completes. Write actions to the database take write locks on the modified objects and these are held until the end of the transaction. This is the reason we recommend that write activities for all types of entities and associations are moved as far as possible towards the end of the microflow. Locks taken for retrieve activities, on the other hand, only last until the end of the retrieve action.

The Mendix Platform uses the isolation level [Read Committed](http://en.wikipedia.org/wiki/Isolation_(database_systems)#Read_committed), which means that only committed objects can be read outside the transaction. If another microflow is trying to read an object that is in the middle of being changed, it will have to wait until the transaction has completed. The details of the way the database implements this isolation level depend on the underlying database management system (for example, PostgreSQL). This is important to know, since this has significant impact on your choice between inheritance or associated objects.

### 2.2 Creating & Changing Objects

When changing an object, the Mendix Platform will write those changes to the database as soon as you execute the commit activity or when you set the **Commit** action on the change object to **Yes**. The update or insert query will be performed based on the values you have changed. However, this does not end the transaction. The precise behavior varies according to the database management system being used, but most likely this will lock the record and prevent other users from reading it until the transaction has been completed (either finished or rolled back).

#### 2.2.1 Inheritance

When you change an object with inheritance the platform will potentially prevent all the retrieves on all entities from the hierarchy, since it will look at the generalization, which is required for all retrieves.

#### 2.2.2 One-to-One Association

When changing an object, none of the associated objects will be changed. There are two exceptions to this rule: if you change the associated object in an object event, or when associated objects are being 'autocommitted', see [Object Activities](/refguide/object-activities/).

Whenever you have a high number of write transactions in your application, it is better to choose a one-to-one association, since this limits the number of tables that are being changed/locked during a transaction. However, if you do more inserts than updates it might be worth using inheritance again. Inheritance uses one fewer table to store the relationship; it does not have the association table. Therefore, any inserts require one indexed table fewer to be updated.

### 2.3 Retrieving Objects

When using data widgets on a page, Mendix is optimized to only retrieve the data that is required for the action that is being executed. That means, for example, that if you do not show any associated or inherited attributes those objects will not be included in the retrieve queries. Where entities in the domain model contain access rules using XPath constraints, however, this may cause additional data to be retrieved. For example, constraints based on the current user need to retrieve information about the user. 

When you use a microflow to retrieve data, however, all data is retrieved (see [Microflows](#microflows), below).

#### 2.3.1 Inheritance

If you retrieve any specializations, the platform will only retrieve attributes from the generalization objects themselves if this data is required.

One exception to this is the System.User entity. If you have an overview of **Administration.Account**, the platform will include the System.User table if security is set to production, whether or not you show any System.User attributes. Both tables have a clustered index on the object id, so joining the information in the database is very efficient.

If you query a generalization, then additional queries will be performed after the main query if attributes of the specialization are needed.

#### 2.3.2 One-to-One Association

For a one-to-one association, the associated objects have to be retrieved when they are shown in a page and will result in additional queries after the main query. This is less efficient than with inheritance, because the information is retrieved using the association table. Depending on how the information is ordered and filtered, it will generally be less efficient to join over the association table than over the clustered index that is used with inheritance.

If you require a lot of searching, sorting, and displaying of the inherited/associated information, it can be more efficient to use inheritance. On the other hand, if the associated information is only required on a few pages, the additional delay retrieving the information over association instead of inheritance might be acceptable when compared with the faster retrieve times in other parts of the application.

## 3 Flexibility

Making a decision between inheritance and associations is something you should do before loading a lot of data into the application. When adding associations, additional data may be required to specify the relationships between objects. When you remove generalizations, the relationship between the two objects will get lost. There are tricks you can use to resolve any previous relationships, however, this can be difficult and time consuming once there is a lot of data stored in your application.

### 3.1 Inheritance

Using inheritance can make your microflows easier to maintain, you can re-use functionality. However, you do lose flexibility. Once you have applied inheritance to an entity it is difficulty to remove the inheritance and keep all the data using a relationship. Take into account whether a record can change type of subclass, for example an employee specialization object changes and becomes a project manager object. In most scenarios there is no perfect solution and there are always concessions to make, just be aware of the implications when making a choice.

Don't just add inheritance because it is easier, or remove it because it is slower. Especially in scenarios where different object types have to go through a similar process, it can be worthwhile to apply inheritance just so you can re-use functionality and increase the consistency and stability of your application.

One place where one-to-one associations are preferable to inheritance, however, is in a system with a high transaction volume.  Writing and updating records in tables with inheritance is slower than just updating a single table. If there are many new or changed objects loaded through Excel, web services, or any other integration then inheritance can slow the process down significantly.

### 3.2 One-to-One Association

When loading data during an integration, inheritance can improve the development speed, because functionality can be re-used. This is a huge advantage since all future changes only have to be applied in a single place. Inheritance however, could cause slower performance if all the changes can be stored in a separate entity. If it is possible to separate all data in a separate entity, and this information is only used by the application in a limited number of locations, it will be faster to keep a one-to-one entity.

## 4 Microflows {#microflows}

Although data retrieval for pages is optimized to only join with entities and retrieve attributes which are used in the data view, microflow retrieve activities are not. In a microflow, *all* columns are retrieved, from generalizations and specializations of the entity. In addition, all associated entities are retrieved where the selected entity is at the parent end of an association.
 
For entities with a lot of attributes this leads to a lot of data being retrieved from the database. For entities with a lot of associations where they are the parent, this also leads to a lot of additional queries.
 
The most efficient retrieval in a microflow is of an object with associations with owner type `Default` where the object is the `child`. In other words, where you are retrieving an object which is at the `one` end of a `one-to-many` association. If you retrieve this object, no association tables will be read by default, because you are the child. Having a one-to-many association is not always handy, but making a one-to-one association, with owner type `Both` makes the association act like a parent-to-parent association so that a retrieval of the object will always retrieve the associated object.

## 5 Conclusion

This explanation might not have given you an explicit answer to the question of when to use inheritance or associations, but that is because there is no right or wrong answer. Both inheritance and one-to-one associations have their advantages and disadvantages. Based on your situation you need to decide what is better for a particular entity.

There are, however, a few situations where a clear answer can be given:

* Use one-to-one associations for entities with:
  * a high number of transactions on the different sub entities (we consider multiple changes or creates per second as being high)
  * only a handful common attributes — if you feel that it isn't worth creating associated objects for the information, it isn't worth inheriting either

* Use inheritance for entities:
  * that always require the information from the associated objects, and users intensively search and sort on the associated attributes
