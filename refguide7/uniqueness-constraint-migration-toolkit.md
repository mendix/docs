# MigrationToolkit

As of Mendix 7.3 you have the option to validate unique constraints on attributes 
and associations in the database. Prior to Mendix 7.3 constraints where validated 
in the runtime, preventing the need for data migration logic when deploying applications
with changes to unique constraints.

Database validation of unique constraints improves performance for highly concurrent
application, so as of Mendix 7.3 this will be the default behavior for new projects.

Before you can enable this option for existing projects that you migrate to Mendix 7,
your existing production data needs to comply with these business rules. To migrate 
your data you have 3 options:

* Use After Startup microflows to migrate your data as you would normally do when needed data migrations upon deployment.
* The the MigrationToolkit module described in this document. You can add it to your project, migrate your data, and then remove the module.
* In-case of an on-prem or private cloud installation you can ask your DBA to migrate data in your database.

The goal of the MigrationToolkit is to provide you with tools to do a one-time migration of your
production data, by adding pages to your application where you can identify and migrate
your data.

It is worth to mention that MigrationToolkit is designed for applications running on Mendix Cloud and has support for PostgreSQL database only.

## Usage

**Note: As this module will change data in your database we advise you to make a backup first, and ideally test your steps on a backup first.**

MigrationTookit will help you identify data that contains duplicates that do not adhere to your model. This toolkit targets duplications in both associations(1-1 and 1-*) and unique attributes. When you import the migration toolkit in your project, you need to add 
two pages "StartAssociationMigrationPage" and "StartAttributeMigrationPage" in your project navigation.  

### Usage scenario: ensure data complies with existing rules in Mendix 7

If you want to deploy an existing app on Mendix 7 with database constraints enabled:

1. On deployment you will see an error message in your runtime log stating that your data needs migration to comply with your validation rules
2. Disable database constraints in your project settings
3. Add migration module to your application
4. Add migration module pages to your navigation
5. Update security to ensure only administrator can access the migration pages
4. Deploy your application (consider doing this on  snapshot or backup of your production database)
5. Open migration pages, select and adjust or remove incorrect data.
6. In your project enable database constraints
7. Remove the MigrationToolkit module from your application
7. Redeploy your application.

Now your application is running with database constraints enabled, and your production data complies with your validation rules. 
Going forward, if you make changes to your validation rules that are incompatible with existing data, you will need to migrate your 
data before you can apply those validation rules, as it is described in the next section.

### Usage scenario: migrate data when adding more strict validation rules

If you change your project to add more strict validation, causing possible incompatibilities with your data:

1. Add "On App Startup" microflow action.
2. In your migration microflow convert existing data to the rules you will be adding later
3. Deploy your application, validate that your data has been converted correctly.
4. Add the new validation rules to your model
5. Redeploy your application

## Pages

The module contains the following pages that will help you detect and migrate incompatible data:

* *StartAssociationMigrationPage* - lists all associations that contain data needing to be migrated
* *AssociationConflictsOverview* - lists all the association data that needs to be migrated
* *StartAttributeMigrationPage* - lists all unique attributes that contain data needing to be migrated
* *AttributeConflictsOverview* - lists all the unique attribute data that needs to be migrated

### StartAssociationMigrationPage

On this page you'll see all associations that contain duplicate data. You can select a duplicate association to see the 
actual association records for that association duplicate.

For example: in case of a 1-1 association, if you have the id 42 more than one in the association this will be displayed 
once in this page. If you select it, it will show you all the records that use this id. You can select the one you want 
delete or the one you want to keep.

The page shows one line per duplicate association. Every line show the following:
* *Association name* - Name of the association
* *Table name* - Name of the database table where the association data is stored
* *Column name* - Name of the table column that contains duplicate values
* *Object id* - The actual value that is stored multiple times in the association

![StartAssociationMigrationPage][1]

When you select a duplicate association you will see a popup which lists all the association records that are incompatible:
* *Parent record* - Summary of the data in the parent object
* *Parent id* - Id of the parent object
* *Child id* - Id of the child object
* *Child record* - Summary of the data in the child object

In this popup you can either select the record to keep or the record(s) to be deleted.

![AssociationConflictsOverview][2]

### StartAttributeMigrationPage

You can use this page to detect and migrate attribute values which contain duplicates. 
The first page shows you a list of all attribute values that are used in multiple objects, 
eventhough a unique constraints has been defined on the attribute.

The page lists the following per value containing duplicates:
* *EntityName* - Name of the entity containing the object
* *Table name* - Name of the database table where the objects are stored
* *Attribute name* - Name of the attribute for which a unique constraint has been defined, but duplicate values are detected
* *Non Unique Value* - The actual value that exists multiple times in the attribute

![StartAttributeMigrationPage][3]

When you select a record in this list, you can display the actual objects or records
with the duplicate attribute values. Per object the popup will show the following 
info:
* *ObjectId* - Id of the object
* *Duplicate* - The value that exists multiple times
* *Record* - A summary of all the data in the object

To fix the duplicate values to can select a record, and change it's value.

![AttributeConflictsOverview][4]

## Internals

The entities and actions provided by this module are described in the following section. 
They are used by the pages provided in the module, but alternatively you may use them in your custom migration microflows.

### Entities

#### DuplicationInfo
This non-persistent entity provides duplication information for both associations and unique attributes.

This entity has the following attributes:   

* *ObjectName* - This field represents the domain model names of either an association or an entity having duplications.   
* *TableName* - This attribute represents the physical, database specific, table names of either an association or an entity.   
* *ColumnName* - This attribute represents the duplicated physical column name of an association and duplicated unique attribute name of an entity.
* *Value* - This field has different representations for associations and unique attributes.   
  For an association having duplications, this attribute represents duplicated 'id' value of the corresponding "ColumnName".    
  For an entity having duplications in unique attributes, this attribute represents the duplicated attribute values.

![DuplicationInfo][5]

#### AssociationConflict

For each 'Value' (or association 'id') field entry in DuplicationInfo entity, this non-persistent 
entity provides information about the conflicted records of an association.   

This entity has following attributes:

 * *AssociationName* - Name of the conflicted association
 * *ChildId* - Child 'id' value of the conflicted association
 * *ChildRecord* - Child record info of the conflicted association
 * *ParentId* - Parent 'id' value of the conflicted association
 * *ParentRecord* - Parent record info of the conflicted association

![AssociationConflict][6]

#### UniqueAttributeConflict

For each 'Value' (unique attribute duplicated value) field entry in DuplicationInfo entity, 
this non-persistent entity provides information about the records(with conflicts) of a duplicated unique attribute.   

This entity has following attributes-   

 * *ObjectId* - 'id' column values of the conflicted unique attribute.
 * *Value* - Current non unique values of the corresponding 'ObjectId''s.
 * *Record* - Entire record info of the conflicted unique attribute.
 
![UniqueAttributeConflict][7]

### Actions

* *DetectCorruptAssociations* - This action reads the domain model associations and the corresponding physical database 
  association tables and returns a list of association duplication info for the given domain model. This action will be 
  triggered by 'StartAssociationMigrationPage' page.   
* *DetectCorruptAttributes* - This action reads the domain model unique attributes and the corresponding physical 
  database entity tables and returns a list of attribute duplication info for the given domain model. This action will 
  be triggered by 'StartAttributeMigrationPage' page.   
* *GetAssociationConflicts* - For each duplicate association, this action returns a list of AssociationConflict.   
* *GetAttributeConflicts* - For each unique attribute duplicationInfo, this action returns  a list of UniqueAttributeConflict.   
* *DeleteSelected* - This action takes an association to delete and duplicationInfo as input parameters and deletes the 
  association that is being provided as an input.   
* *RemainSelected* - This action deletes all the associations, but the one that is being selected.
* *UpdateSelected* - This action updates the value of a unique attribute. The new value being provided should also be 
  unique, otherwise, no update will be performed.   

Of course, an application with duplicate attributes will only start when you set the radio button back to 'Runtime'. If 
you have run all migrations that are needed to clean the database, you can set the radio button to 'Database'. Any new 
data entering the app will comply with the unique attribute definitions.

 [1]: attachments/datastorage/association-conflicts-overview.png
 [2]: attachments/datastorage/show-duplicate-associations.png
 [3]: attachments/datastorage/show-duplicate-unique-attributes.png
 [4]: attachments/datastorage/unique-attribute-conflict-overview.png
 [5]: attachments/datastorage/duplication-info-entity.png
 [6]: attachments/datastorage/association-conflict-entity.png
 [7]: attachments/datastorage/unique-attribute-conflict-entity.png


