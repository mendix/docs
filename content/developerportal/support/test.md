---
title: "Test File for code snippets"
category: "Mendix Support"
menu_order: 99
#description: "Presents details on how Mendix Support prioritizes tickets."
#tags: ["support", "request", "impact", "urgency"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#notoc: true
#layout: wide
draft: true
#toc-level: "3"
---

{{% todo %}}[Test file - DELETE AFTER TESTING]{{% /todo %}}

## Introduction

Test file for review of Code syntax highlighting.

## tsx

```tsx
import { Component, ReactNode, createElement } from "react";
    
export interface InputProps {
    value: string;
}
    
export class TextInput extends Component<InputProps> {
    render(): ReactNode {
        return <input type="text" value={this.props.value} />;
    }
}
```

## ts

```ts
import { Component, ReactNode, createElement } from "react";
    
export interface InputProps {
    value: string;
}
    
export class TextInput extends Component<InputProps> {
    render(): ReactNode {
        return <input type="text" value={this.props.value} />;
    }
}
```

## TypeScript

```typescript
type GreetingLike = string | (() => string) | MyGreeter;

declare function greet(g: GreetingLike): void;

function getGreeting() {
    return "howdy";
}
class MyGreeter extends Greeter { }

greet("hello");
greet(getGreeting);
greet(new MyGreeter());
```

## javaScript

```js
import {domainmodels} from "mendixmodelsdk";

function createEntity(domainModel : domainmodels.DomainModel, entityName : string, attributeName : string) {
    const newEntity = domainmodels.Entity.createIn(domainModel);
	newEntity.name = entityName;
	domainModel.entities.push(newEntity);

	// location on the canvas in the Mendix Studio Pro:
	newEntity.location = { 'x': 100, 'y': 100 };

    // new attribute (which is by default a string attribute):
    const newAttribute = domainmodels.Attribute.createIn(newEntity);
	newAttribute.name = attributeName;
	newEntity.attributes.push(newAttribute);
}
```

## JSON

```json
[{
     "Name" :  "Main line-1.1.5.9.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Initial app" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404739654045 ,
     "Version" :  "1.1.5.9" ,
     "PackageId" :  "4ee10492-6cfc-4582-b825-a9040c0988ad" ,
     "Size" :  1.057138442993164
},{
     "Name" :  "Main line-2.5.4.63.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Add scientific mode" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404990271835 ,
     "Version" :  "2.5.4.63" ,
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
     "Size" :  3.0571174621582031
}]
```

## HTML

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Mendix 5</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <!-- Mendix Stylesheets-->
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="mxclientsystem/mxui/ui/mxui.css">

        <!-- Custom Stylesheet -->
        <link rel="stylesheet" href="css/theme.css">

    </head>
    <body class="" dir="ltr">

        <!-- Page Area Mendix Modeler -->
        <div id="content"></div>

        <!-- Mendix Client JS -->
        <script>
            dojoConfig = {
                isDebug: false,
                rtlRedirect: "index-rtl.html",
                baseUrl: "mxclientsystem/dojo/"
            };
        </script>
#       <script>
#           if (!document.cookie || !document.cookie.match(/(^|;)originURI=/gi))
#               document.cookie = "originURI=/openid/login";
#       </script>
        <script src="mxclientsystem/mxui/mxui.js"></script>
    </body>
</html>

```

## bash

```bash
docker run -it \
  … \
  -e LICENSE_ID=<LicenseId> \
  -e LICENSE_KEY=<LICENSE_KEY> \
  mendix/mendix-buildpack:…
```

## Java

```java
Function Wait-For-Built($headers, $url, $appName, $packageId, $timeOutSeconds) {
   $date = Get-Date

    while($true) {
        $duration = ((Get-Date) - $date).TotalSeconds

        if($duration -gt $timeOutSeconds) {
            Write-Host "Build timed out after $duration"

            return $false
        }

        sleep -s 10
        $package = Get-Package $headers $url $appName $packageId

        if($package.Status -eq 'Succeeded') {
            Write-Host "Built package: $package"

            return $true
        }
    }
}
```

## CSS

```css
html, body {    height: 100%;
}o
.login-cntainer {
    display: table;
    width: 90%;
    max-width: 300px;
    min-width: 180px;
    height: 80%;
    margin: auto;
    text-align: center;
}
```

## SQL

```sql
 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 ORDER BY "myfirstmodule$employee"."firstname" ASC,
 "myfirstmodule$employee"."id" ASC LIMIT 20
 SELECT COUNT(*)
 FROM "myfirstmodule$employee"
```

## No language 

```
type GreetingLike = string | (() => string) | MyGreeter;

declare function greet(g: GreetingLike): void;

function getGreeting() {
    return "howdy";
}
class MyGreeter extends Greeter { }

greet("hello");
greet(getGreeting);
greet(new MyGreeter());

import {domainmodels} from "mendixmodelsdk";

function createEntity(domainModel : domainmodels.DomainModel, entityName : string, attributeName : string) {
    const newEntity = domainmodels.Entity.createIn(domainModel);
	newEntity.name = entityName;
	domainModel.entities.push(newEntity);

	// location on the canvas in the Mendix Studio Pro:
	newEntity.location = { 'x': 100, 'y': 100 };

    // new attribute (which is by default a string attribute):
    const newAttribute = domainmodels.Attribute.createIn(newEntity);
	newAttribute.name = attributeName;
	newEntity.attributes.push(newAttribute);
}

[{
     "Name" :  "Main line-1.1.5.9.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Initial app" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404739654045 ,
     "Version" :  "1.1.5.9" ,
     "PackageId" :  "4ee10492-6cfc-4582-b825-a9040c0988ad" ,
     "Size" :  1.057138442993164
},{
     "Name" :  "Main line-2.5.4.63.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Add scientific mode" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404990271835 ,
     "Version" :  "2.5.4.63" ,
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
     "Size" :  3.0571174621582031
}]

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Mendix 5</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <!-- Mendix Stylesheets-->
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="mxclientsystem/mxui/ui/mxui.css">

        <!-- Custom Stylesheet -->
        <link rel="stylesheet" href="css/theme.css">

    </head>
    <body class="" dir="ltr">

        <!-- Page Area Mendix Modeler -->
        <div id="content"></div>

        <!-- Mendix Client JS -->
        <script>
            dojoConfig = {
                isDebug: false,
                rtlRedirect: "index-rtl.html",
                baseUrl: "mxclientsystem/dojo/"
            };
        </script>
#       <script>
#           if (!document.cookie || !document.cookie.match(/(^|;)originURI=/gi))
#               document.cookie = "originURI=/openid/login";
#       </script>
        <script src="mxclientsystem/mxui/mxui.js"></script>
    </body>
</html>

docker run -it \
  … \
  -e LICENSE_ID=<LicenseId> \
  -e LICENSE_KEY=<LICENSE_KEY> \
  mendix/mendix-buildpack:…

Function Wait-For-Built($headers, $url, $appName, $packageId, $timeOutSeconds) {
   $date = Get-Date

    while($true) {
        $duration = ((Get-Date) - $date).TotalSeconds

        if($duration -gt $timeOutSeconds) {
            Write-Host "Build timed out after $duration"

            return $false
        }

        sleep -s 10
        $package = Get-Package $headers $url $appName $packageId

        if($package.Status -eq 'Succeeded') {
            Write-Host "Built package: $package"

            return $true
        }
    }
}

html, body {    height: 100%;
}o
.login-cntainer {
    display: table;
    width: 90%;
    max-width: 300px;
    min-width: 180px;
    height: 80%;
    margin: auto;
    text-align: center;
}

 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 ORDER BY "myfirstmodule$employee"."firstname" ASC,
 "myfirstmodule$employee"."id" ASC LIMIT 20
 SELECT COUNT(*)
 FROM "myfirstmodule$employee"

```


