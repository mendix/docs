---
title: "Create Branch Line Dialog"
parent: "dialogs"
---

## 1 Introduction

Use this dialog to create a new [branch line](version-control-concepts) in your app.

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line:

1. To do maintenance development on a version of your app that is running in production. You can keep on developing in the main line while you fix issues in the branch line.

2. If you are starting the development of a very large feature that will take more than a day to develop. By doing this in a branch line you can commit the half-implemented feature (possibly even with errors) without disturbing other development in the main line.

## 2 Create Branch From

Choose where you want to create the branch line from. If you are doing maintenance on a deployed version you probably want to select a tagged version here. Select *Main line* if you want to develop a large feature independently of the main line. It is also possible to create a branch line from another branch line, but we don't recommend this unless you know what you are doing.

## 3 Tagged Version (for Tagged Version)

Select from which tagged version you want to create a branch line. Every time you create a deployment archive a tag is created so that you can always refer back to that version of the project.

## 4 Revision (for Main Line)

Select from which revision of the main line you want to create a branch line. Often, you want to choose the most recent version. You then develop some functionality in the branch line and merge it back to the main line when you are done.

## 5 Branch Line (for Branch Line)

Select from which branch line you want to create another branch line. We recommend that you make branch lines only from the main line but in some cases branching a branch line can be very useful.

## 6 Revision (for Branch Line)

Select from which revision of the selected branch line you want to create another branch line.

## 7 Branch Name

Enter a name of the new branch line. Since branch line names must be unique, the existing branch lines are shown so that you do not accidentally create a branch line twice.
