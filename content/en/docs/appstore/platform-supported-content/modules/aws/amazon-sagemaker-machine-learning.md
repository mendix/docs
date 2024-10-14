---
title: "Add Machine Learning Capabilities to Your App with Amazon SageMaker"
linktitle: "Amazon SageMaker"
url: /appstore/modules/aws/amazon-sagemaker-machine-learning/
description: "Describes the steps required to add Amazon SageMaker machine learning capabilities to your Mendix app."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-sagemaker-machine-learning/
---

## Introduction

Machine Learning (ML) is a subset of Artificial Intelligence (AI) that focuses on developing algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed. In this way, models can be trained based on custom data of a specific sector or company, and can perform tasks more efficiently than an out-of-the-box foundational model. 

In this document, you will learn how you can incorporate ML into your Mendix app by using [Amazon SageMaker](https://aws.amazon.com/pm/sagemaker/).

### Prerequisites

To complete this tutorial, you need the following tools:

* [Amazon SageMaker](https://aws.amazon.com/pm/sagemaker/) - For creating and training the model. Amazon SageMaker is a fully managed machine-learning service from Amazon that helps you build, train and deploy machine learning models quickly. It offers a wide range of features that include, but are not limited to, Jupyter Notebooks, Pipelines, SageMaker Studio, Canvas and RStudio.
* Python 3.0 - To write the code.
* Mendix Studio Pro 10.1.1 or higher - The latest version of Mendix; includes the ML Kit required to create tailored smart end-user apps.

By following the tutorial, you will create a demo spam filter with the help of Amazon SageMaker and Mendix. To help you achieve that, download the following demo files:

* [The spam_nb.ipynb notebook example](https://github.com/mendix/mlkit-example-app/blob/main/notebooks/spam_nb.ipynb)
* [The spam.csv file](https://github.com/mendix/mlkit-example-app/blob/main/notebooks/spam.csv)

## Getting Started with Amazon SageMaker Studio

To start using SageMaker Studio, perform the following steps:

1. [Launch Amazon SageMaker Studio.](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-launch.html)
2. [Launch JupyterLab.](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-jl-user-guide.html)
3. In JupyterLab, click **Upload**.
4. Upload the *spam_nb.ipynb* and *spam.csv* example files.
5. Once the files are visible in the folder, open the *spam_nb.ipynb* file. For a detailed explanation of the contents of the file, see [Spam_nb.ipynb File Contents](#file-contents).
6. Select **ipykernel** as the kernel.
7. Run the notebook to execute the code.
    1. Put the cursor at the first line.
    2. Click **Run** ({{% icon name="controls-play" %}}) on top, and then click it again to run the model training and create the ONNX file. You only need to execute the first two sections, as shown in the following figure:

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/file-contents.png" alt="The file contents" class="no-border" >}}

    3. After training and testing the model, terminate all running instances to avoid extra charges.

### Spam_nb.ipynb File Contents {#file-contents}

The *spam_nb.ipynb* file consists of the following parts:

* The necessary libraries   
* Training and exporting  
* Testing

#### Necessary Libraries

At this point, the libraries are imported: 

* The SYS module which will help control and change the environment runtime. 
* The skl2onnx module. The sklearn-onnx contains the functions to convert models from scikit-learn toolkits into ONNX.   
* The onnx module.  
* The onnxruntime module. 
 
#### Training and Exporting

At this point, the model is trained and converted to ONNX, and then exported to an ONNX file.

This example teaches the model to predict by using a training set. 
  
The training set consist of training data (X_train) associated with the known results (y_train). The model will learn which pattern will be labelled as *1 (true)*, for example *spam*, or as *0 (false)*, for example *ham*. This process is also called *fitting*. A testing set is also going to be included (X_test, y_test). 

In lines 1-10, the required methods are imported. In the next line, 12 data set are imported (*df = pd.read_csv("spam.csv", encoding="L1")*), and the attributes X and y are defined (*X = df["v2"].values, y = df["v1"].values*).

Then 4 portions of data are created, which will be used for fitting & predicting values.

*X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=345)*

The sklearn.model_selection.train_test_split spits the arrays into random train and test subsets.

In the next lines, the pipeline object is created: 

*pipe = make_pipeline( 
    CountVectorizer(binary=True), 
    MultinomialNB() 
)*

In the next line, the fitting of the model begins: *pipe.fit (X_train, y_train)*.

To convert the model to the ONNX file using the *to_onnx* function, and then to export the file to the files in the notebook using the *write* function.

*onxx_pipeline = to_onnx(pipe, initial_types=[('message', StringTensorType([None, 1]))])*
*with open("spam_nb.onnx", "wb") as f:*
*f.write(onxx_pipeline.SerializeToString())*

For more examples and information about converting a pipeline to ONNX, refer to the ONNX documentation. 

## Importing the Model into Mendix Studio Pro

After creating the ONNX model file, import it into Mendix Studio Pro by doing the following steps:

1. Open Studio Pro and create a new blank app.
2. Select the module called **MyFirstModule** in the **App Explorer** and right-click it to open the pop-up menu.
3. Click **ML_model_mapping**.
4. Click **Import Model** in the upper left corner and import the ONNX file. Mendix will automatically create the input and output objects.
5. If an error message appears at the ML Model input, open the entity and fix the issue by selecting **1** as the **Static tensor shape**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/ml-model.png" alt="The Static tensor shape" class="no-border" >}}

6. Verify that the domain model resembles the following screenshot:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/domain-model.png" alt="The domain model" class="no-border" >}}

7. Go to the domain model in the **App Explorer**, add an extra entity, and call it *Email*.
8. Add the following string attributes to the **Email** entity: 
    * *Payload* (unlimited characters) 
    * *Prediction* (leave the default value)
9. Select the email entity and right-click to open the side menu, then select **Generate overview pages**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/generate-pages.png" alt="The Generate overview pages option" class="no-border" >}}

    Mendix automatically creates the **Email Overview** and **Email_NewEdit** pages, and place them in the **Overview pages** section of the **App Explorer**. 

10. Find the **Email_NewEdit** page and double-click to open it.
11. Double-click the **Save** action to open its properties.
12. In the **Events** section, select **Call a microflow** > **Select** > **New**.
13. Name the new microflow *Predict_Spam* (or P*redictSpam*).
14. Once the new microflow is open, add the following:

    * A parameter for the email entity.
    * A **Create object** action for the input object of the ML model.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/create-object.png" alt="The Create object action configuration" class="no-border" >}}

    * The **Call ML model** action; select the available ML model mapping and input object, and then click **OK**.
    * A **Change Object** action; set **Commit** and **Refresh** to **Yes**. As a member, select the prediction, and as value, set the output label of the **OutputObject**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/change-object.png" alt="The Change object action configuration" class="no-border" >}}

    * A **Close page** action.

15. In the **App Explorer**, open the **Navigation** and select the email overview page as the default page and home page.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/pages.png" alt="The default page and home page highlighted" class="no-border" >}}

16. Click **Run Locally** ({{% icon name="controls-play" %}}) in the upper right corner to run the project. Once it is ready, click **View App** to go to the local application.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/run-app.png" alt="The Run and View App options" class="no-border" >}}

## Testing the Spam Filter

After importing the ML model into Mendix Studio Pro, test the performance of the spam filter by doing the following steps:

1. On the homepage of your test app, click **New**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sagemaker/test-app.png" alt="The test spam filter" class="no-border" >}}

2. Add a message as a payload, for example:

    *Congratulations!*

    *You have been selected as one of the lucky winners of the Microsoft Lottery 2023. You have won a cash prize of $10,000,000 USD and a brand new laptop.*

    *To claim your prize, you need to contact our agent with the following information:* 

    *Name:*

    *Address:*

    *Phone number:*

    *Email address:*
    
    *Contact Agent*

If the email is recognized as spam, the prediction will display *spam*, and if not, *ham*.

## Read More:

* [mlkit-example-app](https://github.com/mendix/mlkit-example-app)
* [AI-enhanced app development for the enterprise](https://www.mendix.com/platform/ai/)
* [Introducing the Mendix ML Kit for Low-Code ML Deployment](https://www.mendix.com/blog/introducing-the-mendix-ml-kit-for-low-code-deployment/)
* [AI-Infused Apps](https://www.mendix.com/evaluation-guide/app-lifecycle/ai-infused-apps/)
* [Machine Learning Kit](/refguide/machine-learning-kit/)
* [AI at the Speed of Thought: A Guide to ML-Enhanced Applications Powered by Mendix and Amazon SageMaker](https://www.mendix.com/blog/ai-at-the-speed-of-thought-a-guide-to-ml-enhanced-applications-powered-by-mendix-and-amazon-sagemaker/)
