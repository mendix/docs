---
title: "How to Link a Different App to a Cloud Node"
space: "General How-To's"
category: "Mendix Cloud"
---

This how-to describes how to link a different **app** to your licensed **cloude node** so that you can deploy a different **app**.

**After completing this how-to you will know:**

*   How to link a different **app** to your **node** which already has a linked an app
*   How to exchange **apps** between two **nodes**

## 1 Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   The app has the **teamserver** enabled. In [here](/howto6/Create+and+Deploy+Your+First+App) you can see how to create a collaboration **app**.

In case you have created an app in the Mendix Modeler, then you can upload this to the teamserver (see [Upload To Team Server Dialog](/refguide6/Upload+To+Team+Server+Dialog)) and a repository will be created automatically.

*   No **sandbox** is linked to your **app**. (Every teamserver **app** is linked to a **sandbox** automatically).
In [here](/mendixcloud/how-to-unlink-sandbox) you can see how to **unlink your Sandbox** from your **app** 

## 2 Linking a App to a Licensed Cloud Node

*   In [here](/mendixcloud/Deploying+to+the+cloud) you can see how to link an **app** to a cloud **node**.

## 3 Linking a Different App to the Node

1.  In the **Developer Portal**, go to **'Apps'** and select the **app** you want to link to the **node** 
2.  Once you are in the **app**, go to the **'Environments'** tab in the left navigation panel.
3.  In case your **app** isn’t linked to a **sandbox** anymore you should be able to see the blue button **‘Select Node’** and click on it.
4.  Select the correct **node** by clicking on **'Use this Node' **button and link it to your **app** to deploy your **app**. The current linked **app** will be dislinked automatically.

## 4 Exchange Linked Apps Between Nodes
In case you want to exchange two **apps** with **nodes** who are already linked, you can create a new **app** and follow chapters 1 to 3 of this document.


app A → Node 1
app B → Node 2

1.  To be able to link **app A** to **Node 2**, you have to create a new empty **app C** (see [Chapter 1](how-to-link-app-to-node)).
2.  And to link this to **Node 1** (see [Chapter 2](how-to-link-app-to-node)). 
3.  **app A** will be released from **Node 1** and can be linked to **Node 2**.

## 5 Related Content
*   [Create and Deploy Your First App] (/howto6/Create+and+Deploy+Your+First+App)
*   [Deploying to the Cloud] (Deploying+to+the+cloud)
*   [How To Link Your Free App to a Licensed Cloud Node] (how-to-link-app-to-node)
*   [How To Unlink Your Sandbox](how-to-unlink-sandbox)