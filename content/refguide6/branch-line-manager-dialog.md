---
title: "Branch Line Manager Dialog"
parent: "dialogs"
---

Used to manage the branch lines of a Team Server project. From this dialog new [branch lines](version-control-concepts) can be created and existing branch lines can be deleted. 

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line. The first is to do maintenance development on a version that is running in production. You can keep on developing in the main line while you fix issues in the branch line. The second reason for creating a branch line is if you are starting the development of a large feature that will probably take more than a day to develop. By developing in a branch line, you can commit the half-implemented feature (possibly even with errors) without disturbing other development in the main line.

## Team Server project

Select the Team Server project that you want to manages the branch lines of. If you have a project open in the Modeler it will be selected automatically. However, you can also create a branch line from the Start Page and in that case no project will be selected.

By clicking 'New' in the branch lines grid you can create a new branch line.

### Create branch from

Choose where you want to create the branch line from. If you are doing maintenance on a deployed version you probably want to select a tagged version here. If you want to develop a large feature independently of the main line you choose 'Main line'. It is also possible to create a branch line from another branch line and we recommend you only do that if you know what you are doing.

### Tagged version (for 'Tagged version')

Select from which tagged version you want to create a branch line. Every time you create a deployment archive a tag is created so that you can always refer back to that version of the project.

### Revision (for 'Main line')

Select from which revision of the main line you want to create a branch line. Often you want to choose the most recent version. You then develop some functionality in the branch line and merge it back when you are done.

### Branch line (for 'Branch line')

Select from which branch line you want to create another branch line. We recommend that you make branch lines only from the main line but in some cases branching a branch line can be very useful.

### Revision (for 'Branch line')

Select from which revision of the selected branch line you want to create another branch line.

### Branch name

Enter a name for the new branch line. The existing branch lines are shown so that you do not accidentally create a branch line twice.
