---
title: "Nanoflow Commons"
url: /appstore/modules/nanoflow-commons/
description: "Describes the configuration and usage of the Nanoflow Commons module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515/) module contains the following commonly used nanoflow actions that are usable across web, hybrid mobile, and native mobile apps:

| Category            | Action                                     |
|:--------------------|:-------------------------------------------|
| Client activities   | Download web file                          |
|                     | Hide progress                              |
|                     | Refresh entity                             |
|                     | Refresh object                             |
|                     | Reload                                     |
|                     | Show confirmation                          |
|                     | Show progress                              |
|                     | Sign in                                    |
|                     | Sign out                                   |
|                     | Toggle sidebar                             |
| External activities | Call phone number                          |
|                     | Draft email                                |
|                     | Navigate to                                |
|                     | Open map                                   |
|                     | Open URL                                   |
|                     | Send text message                          |
|                     | Share                                      |
| Geolocation         | Geocode                                    |
|                     | Get current location                       |
|                     | Get current location with minimum accuracy |
|                     | Request location permission                |
|                     | Reverse geocode                            |
| Local storage       | Check storage item exists                  |
|                     | Clear cached session data                  |
|                     | Get storage item object                    |
|                     | Get storage item object list               |
|                     | Get storage item string                    |
|                     | Remove storage item                        |
|                     | Set store item object                      |
|                     | Set storage item object list               |
|                     | Set storage item string                    |
| Other activities    | Generate unique ID                         |
|                     | Get guid                                   |
|                     | Get object by guid                         |
|                     | Get platform                               |
|                     | Wait                                       |

### Limitations of Get/Set Storage Item Actions {#limitations}

The **Get storage item** and **Set storage item** actions use the device's native encrypted async storage mechanism (key-value storage). This storage is completely separate from the Mendix offline database and does not have any relationship with Mendix's entity model, entity access rules, or association capabilities.

Below is a list of the key limitations:

* No association support – When you store entities using **Set storage item object** or **Set storage item object list**, only the entity data itself is serialized and stored. Entity associations are not preserved. The storage mechanism has no concept of Mendix associations, referenced entities, or relational data structures.
* No entity access rules – Security and entity access rules defined in your domain model do not apply to data stored in device storage. The storage actions bypass the Mendix data layer entirely.
* Page state dependency – Mendix internally maintains a "page state" that tracks associated entities when objects are loaded into memory. This page state is session-scoped and is cleared when the user signs out or switches accounts on a native device. Any associations that depend on this page state are lost when the session ends.
* Manual association reconstruction required – If your application needs to work with associated entities after retrieving objects from local storage, you must explicitly retrieve and reconstruct those associations in your nanoflow logic. For example, if Entity A references Entity B, you must separately retrieve Entity B after loading Entity A from storage.

{{% alert color="warning" %}}
The local storage actions are intended for simple key-value storage use cases such as caching user preferences, temporary state, or serialized data that does not rely on associations. For complex relational data or entities that require association traversal, use Mendix's offline database capabilities instead of the storage item actions.
{{% /alert %}}

## Read More

* [How to Build JavaScript Actions: Part 1 (Basic)](/howto/extensibility/write-javascript-actions/)
* [How to Build JavaScript Actions: Part 2 (Advanced)](/howto/extensibility/write-javascript-github/)
* [How to Build JavaScript Actions for Native Mobile](/howto/extensibility/create-native-javascript-action/)
