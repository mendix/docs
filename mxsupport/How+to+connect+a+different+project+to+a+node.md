---
title: "How to connect a different project to a node"
category: "Mendix Support"
---
# How to connect a different project to a node

This how-to describes how to connect a different **project** to your licensed **node** so that you can deploy a different **app.**

**After completing this how-to you will know:**

*   How to connect a different **project** to your **node** which already has a connected project
*   How to exchange **projects** between two **nodes**

## 1. Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   **Project** is a teamserver project. In [here](/howto6/Create+and+Deploy+Your+First+App) you can see how to create a collaboration **project**.

<div class="alert alert-info">{% markdown %}

In case you have created a project in the modeler, then you can upload this to the teamserver (see [Upload To Team Server Dialog](/refguide6/Upload+To+Team+Server+Dialog)) and a repository will be created automatically.

{% endmarkdown %}</div>

*   No **sandbox** is connected to your **project**. (Every teamserver **project** is connected to a **sandbox** automatically).

<div class="alert alert-info">{% markdown %}

You can create a **ticket** to delete your **sandbox** on our [Support Portal](https://support.mendix.com/). You can choose the template **‘Delete Sandbox’**.

{% endmarkdown %}</div>

## 2\. Connecting a project to a cloud node

*   In [here](/mendixcloud/Deploying+to+the+cloud) you can see how to connect a **project** to a cloud **node**.

## 3\. Connecting a different project to the node

1.  In the **Dev Center**, go to **'Projects'** and select the **project** you want to connect to the **node** 

    ![](attachments/19202636/19398908.png)
2.  Once you are in the **project**, go to the **'Deploy'** tab.

    ![](attachments/19202636/19398909.png)
3.  In case your **project** isn’t linked to a **sandbox** anymore you should be able to see the blue button **‘Select Node’** and click on it.

    ![](attachments/19202636/19398912.png)
4.  Select the correct **node** by clicking on **'Use this Node' **button and connect it to your **project** to deploy your **app**. The current connected **project** will be disconnected automatically.
    ![](attachments/19202636/19398913.png)

## 4\. Exchange connected projects between nodes

In case you want to exchange two **projects** with **nodes** who are already connected, you can create a new **project** and follow chapters 1 to 3 of this document.

<div class="alert alert-info">{% markdown %}

Project A → Node 1
Project B → Node 2

1.  To be able to connect **project A** to **Node 2**, you have to create a new empty **project C** (see [Chapter 1](How+to+connect+a+different+project+to+a+node)).
2.  And to connect this to **Node 1** (see [Chapter 2](How+to+connect+a+different+project+to+a+node)). 
3.  **Project A** will be released from **Node 1** and can be connected to **Node 2** (see ).

{% endmarkdown %}</div>
