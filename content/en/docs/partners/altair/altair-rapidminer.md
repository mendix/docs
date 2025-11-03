---
title: "Integrating Mendix with Altair RapidMiner"
url: /partners/altair/integrate-mendix-altair
linktitle: "Altair RapidMiner"
weight: 20
description: "Learn how to build and deploy machine learning models using Altair AI Studio and AI Hub, and integrate them with your Mendix applications."
---

## Introduction

Altair RapidMiner lets you create machine learning models using Altair RapidMiner AI Studio and deploy them through AI Hub, enabling smooth integration with your Mendix applications. 

Using a practical example of employee attrition prediction, you will learn how to build predictive models, manage them in a centralized repository, and create endpoints for seamless integration. You can build a model that predicts whether an employee will leave the company based on various factors such as demographics, job satisfaction, and compensation details. While HR managers often have intuitive feelings about which employees might be at risk of leaving, machine learning provides significant advantages by enabling data-driven decisions and uncovering patterns that human intuition might miss. Even though the model may not have access to comprehensive data about employees (such as daily working hours, recent reviews, or real-time performance metrics), this model still provides valuable insights into the likelihood of employees staying with the company, allowing HR teams to proactively prevent churn. The dataset is a sample available in AI Studio.

This real-world use case demonstrates the complete workflow from data exploration to production deployment.

{{< figure src="/attachments/partners/altair/mendix-altair-integration-flow.png" >}}

In this document, you will:

* Learn how to build predictive models using AI Studio's Auto Model feature with the Employee Attrition dataset.
* Discover how to manage and version your models using AI Hub.
* Create deployable endpoints to enable integration with Mendix applications.
* Understand the process from model development to production deployment.

{{% alert color="info" %}}
For an example integration between Mendix and RapidMiner, you can check out the [Altair RapidMiner Showcase App](https://marketplace.mendix.com/link/component/247304) in the Mendix Marketplace. This sample app shows how to consume AI Hub endpoints within a Mendix application via REST and can serve as a reference implementation.
{{% /alert %}}

### Prerequisites

Before implementing this integration, ensure you meet the following requirements:

* Access to the [AI Studio](https://docs.rapidminer.com/latest/studio/) with appropriate licensing (a trial license is sufficient).
* Access to the [AI Hub](https://docs.rapidminer.com/latest/hub/) for model management and deployment (optional but recommended for Mendix integration).
* Familiarity with data preparation and feature selection.
* Basic understanding of machine learning concepts and predictive modeling.
* Basic understanding of REST integration in Mendix.

{{% alert color="info" %}}
While you can explore AI Studio and build models without AI Hub, you will need AI Hub access to create deployable endpoints for Mendix integration. If you are just getting started with AI Studio, you can skip the AI Hub sections initially and focus on model building.
{{% /alert %}}

## Altair RapidMiner Products

Altair RapidMiner offers two key components for machine learning integration with Mendix:

* [Altair AI Studio](https://docs.rapidminer.com/latest/studio/): Your development environment where you build, train, and test machine learning models. AI Studio provides a visual, drag-and-drop interface that makes machine learning accessible without requiring extensive programming knowledge. You can insert Python code into your processes, similar to Java in Mendix.

* [Altair AI Hub](https://docs.rapidminer.com/latest/hub/): Your production platform where you deploy and manage models. AI Hub is essential for creating web service endpoints that external applications (like Mendix) can consume. AI Hub is also used to collaborate with your team on the same projects.

While Altair offers a range of products for various data science and engineering needs, this integration guide primarily focuses on these two platforms.

## Setting Up Your AI Hub Project {#ai-hub-project}

If you plan to integrate your models with Mendix applications, you will need to set up an AI Hub project first. You can skip this section if you are only exploring model-building capabilities and not integrating the model into your Mendix app.

### Installing AI Hub

[AI Hub](https://docs.rapidminer.com/latest/hub/index.html) is Altair's centralized platform for collaboration and model deployment. AI Hub needs to be hosted on your own infrastructure, and the installation process depends on your specific requirements. This tutorial assumes you have access to a running AI Hub instance. For installation details, follow the official [Install AI Hub](https://docs.rapidminer.com/latest/hub/install/index.html) documentation.

### Creating a New Project

Proper project organization in AI Hub is essential for model lifecycle management and deployment:

1. Create a new project in AI Hub by following the [project creation guide](https://docs.rapidminer.com/latest/hub/projects/index.html).
2. Choose a descriptive project name that reflects your use case (for example, "Employee Attrition Prediction").

### Connecting AI Studio to AI Hub

If you created an AI Hub project, establish the connection between your development environment and the centralized repository:

1. In AI Studio, connect to your AI Hub instance.
2. Follow the detailed [AI Studio project connection guide](https://docs.rapidminer.com/latest/studio/projects/index.html).
3. Ensure proper authentication and permissions are configured.

## Building Predictive Models with AI Studio

### Accessing Sample Data

To get started with model building, you will use the sample employee attrition dataset provided in the AI Studio:

1. Navigate to **Community Samples** > **Community Real World Use Cases** > **Employee Attrition**.
2. Open and inspect the **EmployeeData** dataset.

### Creating an Auto Model

Auto Model feature in the AI Studio simplifies the machine learning process by automatically testing multiple algorithms and selecting the best-performing model. It does not require users to have extensive knowledge about data science. For comprehensive information about the Auto Model feature, its capabilities, and general usage guidelines, refer to the [AI Studio Auto Model documentation](https://docs.rapidminer.com/latest/studio/guided/auto-model/).

The following steps provide specific guidance for working with the Employee Attrition dataset:

#### Starting the Auto Model Process

1. In the **EmployeeData** dataset view, select **Auto Model** from the top toolbar. The wizard guides you through the machine learning pipeline setup.
2. On the **Select Task** page:

   * Click **Predict** to set up a predictive modeling task.
   * On the right side, select the **Status** column as your target variable.
   * The **Status** column represents the attrition value. A value of *Current* indicates employee is expected to stay with the company, whereas *Past* signifies the employee has left or is likely to leave. This Status is the attribute you plan to predict for new employee data based on the other existing variables, such as demographics, salary, etc. Based on this information, the models can calculate how the other attributes influence the status by finding correlations.

   {{% alert color="info" %}}
   Status is the attribute that gets predicted based on input parameters passed to the model. The **Status** indicates the attrition.
   {{% /alert %}}

3. Click **Next** to navigate to the **Prepare Target** page. The default settings are sufficient for this use case.
4. Click **Next** to navigate to the **Select Inputs** page.
5. Review all available input features that will be used to predict employee attrition. For this specific dataset, deselect the following columns to improve model performance:
   * **Marital** - Not needed to predict the attrition of an employee.
   * **CanDoBetter** - Not a part of this use case. The data represents textual feedback written by the employees.
6. Keep all other relevant features selected, as they provide valuable predictive information. Traffic lights below the **Status** and the **Quality** column indicate how well the attributes fit for a prediction of employee attrition.

   {{< figure src="/attachments/partners/altair/select-inputs-example.png" >}}

7. Click **Next** to navigate to the **Model Types** page. You can choose which models should be run for a later comparison. Keep the default settings and click **Run** to navigate to the results.
8. Auto Model runs various algorithms, including:

   * Decision Tree
   * Random Forest
   * Gradient Boosted Trees
   * Logistic Regression
   * Deep Learning

9. Wait for the training process to complete. This typically takes a few minutes, depending on:

   * Dataset size and complexity
   * Number of algorithms being tested
   * Available computing resources

10. Review the model performance results displayed in the interface. Auto Model compares how well each model was able to predict the status by automatically dividing the dataset into training and test subsets, verifying if the model can predict the test results well enough. The **Classification Error** value may indicate which model fits best for this use case (the smaller the better). You can dive deeper into each model's results and compare different parameters.

#### Saving Results

After reviewing model performance, click **Save Results**:

If you have access to an [AI Hub project](#ai-hub-project):

1. First, ensure you have created a folder in your AI Hub repository to organize your models, for example, `EmployeeAttrition`.
2. Select the respective repository, go to the folder you created, and save the results.

Otherwise, you can store the results on your local machine.

The results contain all the required documents to apply preprocessing of the data, train the model, and score new data. For each model that was selected in the auto model wizard, an individual folder is created containing the relevant documents. You can open each document and review it thoroughly. Adapt to your use case, either by using the operators provided by AI Studio or by calling your custom [Python code](https://docs.rapidminer.com/latest/python/index.html).

## Managing Models in AI Hub Repository

{{% alert color="info" %}}
This section applies only if you have access to AI Hub and exported your results to an AI Hub repository. If you have stored results locally, you cannot deploy your model for integration purposes.
{{% /alert %}}

### Committing Models to the Repository

After exporting your model results to your local repository managed by AI Hub, you need to commit them to the [remote repository](https://docs.rapidminer.com/2025.1/studio/projects/index.html):

1. In the AI Studio, verify that all your model results are now in the connected repository.
2. Create a new snapshot by right-clicking your repository and selecting **Create snapshot and add it to the AI Hub**.
3. Add descriptive commit messages that explain model changes and improvements.
4. Navigate to your AI Hub project to verify the snapshot was committed successfully by checking the **Snapshots** section.

### Creating Model Endpoints

This final step on the RapidMiner side transforms your trained models into callable web services that can be accessed from Mendix applications:

1. In AI Hub, go to your project where you committed the model snapshots.
2. Go to the **Endpoints** section. For more information, follow [RapidMiner's endpoint creation guide](https://docs.rapidminer.com/latest/hub/endpoints/create/index.html).
3. Configure the deployment:

   * Choose a deployment path, for example, `employeeattrition`.
   * Choose a snapshot, for example, your latest commit.
   * It is recommended to restrict access, for example, using the `Long-living API token` option, which you should store in a safe vault for later use.

4. Click **Add Endpoint Configuration** and select the right process you want to deploy. In this case, the Gradient Boosted Trees performed the best. Select the `score_set.rmp` document, which you can review in the AI Studio as a visual process. This process accepts input data, applies preprocessing, and predicts the **Status** attribute of an employee.

   {{< figure src="/attachments/partners/altair/endpoint-setup.png" >}}

5. In this example, no query parameters need to be mapped, so you can skip **Parameter mapping**. There might be cases where you need additional information in the query parameters to make your process work.
6. In the last step, **Dependencies**, you need to select every item from the project that the *score_set* depends on by navigating to the designated model folder and selecting the whole folder.
7. Finally, click **Save & Deploy**. In a few moments, your endpoint is ready to be consumed.

### Testing Model Endpoint {#testing-endpoint}

Now that your model (or rather the scoring process) is accessible for external invocation, you can first perform a test.

1. Navigate to your project's **Endpoints** section and click **Test** in the endpoint you just configured.
2. For input data, paste the following JSON as an example (note that the typo in `TrainingRecieved` comes from the dataset). The `Status` fields need to be included for the model to predict the outcome (employee attrition).

    ```json
    {
        "data": [
            {
                "Training": "Y",
                "Est_Income": 45000.00,
                "PositionType": "Non-Managerial/ Professional",
                "DriveTime": "More than 90 mnts",
                "Benefit": "N",
                "Education": "Baccalaureate or 4 year college degree",
                "SpousalBenefit": "Yes",
                "StockPlan": "No",
                "Facility": "Facility A",
                "TrainingRecieved": "No",
                "length_of_hire": 17.11,
                "Status": null
            }
        ]
    }
    ```

3. Paste your token in the **Token** textbox.
4. Click **Run Test**. In the **Test Result** section, you can view the result of the model, indicating if the employee will stay with the company or rather quit soon, also providing a **Confidence** factor.

A successful test indicates the successful integration of the model into your Mendix app. 

## Integrating into Your Mendix App

Once your endpoint in AI Hub is deployed and tested, you can integrate the machine learning model into your Mendix application. This section provides a high-level overview of the integration process. Read [Call REST Service](/refguide/call-rest-action/) to learn more about REST integrations in general.

{{% alert color="info" %}}
For a complete implementation example, refer to the [Altair RapidMiner Showcase App](https://marketplace.mendix.com/link/component/247304). This app demonstrates all the integration steps with working code examples.
{{% /alert %}}

### Preparing Your Mendix Domain Model

{{< figure src="/attachments/partners/altair/domain-model.png" >}}

Before consuming the AI Hub endpoint, ensure your Mendix application contains the proper data structures:

1. Create input data representation. Design your domain model to represent the input data required by the model.

   * You can derive the required structure from the test page in AI Hub, which shows the expected JSON format. It does not need to match the structure exactly. It is recommended to keep API structures separated from your app entities.
   * In the employee attrition example, this would include information like `Training`, `Salary`, and `PositionType` as attributes and `DriveTime` as an associated entity, etc.

2. Fit the prediction into your use case. Determine when and how predictions should be triggered in your application.

   * Manual trigger: In the example app, this is implemented as a button in the employee table.
   * Automatic trigger: Consider implementing automatic predictions based on business events, scheduled processes, or data changes.
   * Batch processing: For multiple predictions, consider implementing batch processing capabilities as demonstrated in the example app.

### Configuring Data Mapping

Set up the necessary data structures to communicate with the AI Hub endpoint:

1. Create JSON Structure: Configure a JSON structure that maps to the input format required by your AI Hub endpoint.

   * Use the JSON format shown in the AI Hub test page as your reference (as described in the [Testing Model Endpoint](#testing-endpoint) section above). In the example app, an `EmployeeId` was added, which is not used for the prediction, but it helps identify the objects in the response later.
   * Ensure all required fields are included and properly typed.

2. Prepare data structure (optional): If your master data does not fit the structure required by the REST call:

   * Create a helper entity (non-persistent) specifically for the REST call operation.
   * Map your existing data to this helper entity before making the API call.
   * This approach provides flexibility when your domain model differs from the API requirements.

3. Configure export mapping: Create an export mapping that uses the JSON structure.

   * This mapping will transform your Mendix domain objects into the JSON format expected by the AI Hub endpoint.
   * Handle any data type conversions or formatting requirements.

### Implementing the REST Call

Create the microflow logic to communicate with your AI Hub endpoint:

1. Handle data structure differences: If an entity for the API interaction was created, you need to create the objects before calling the endpoint.

2. Add a Call REST (POST) action in your microflow that triggers the prediction:

   * **Endpoint URL**: Use the endpoint URL from your AI Hub deployment
   * **HTTP Method**: POST
   * **HTTP Headers**: Configure authentication using your API token
     * **Key**: `Authorization`
     * **Value**: `apitoken <your-token-from-ai-hub>`
   * **Request**: Apply the export mapping to transform your data
   * **Response**: store the Response in a String variable

### Processing the Response

After successfully calling your AI Hub endpoint, you can now process the response and integrate the prediction results into your Mendix application:

1. Create JSON Structure for Response: Configure a JSON structure that maps the response format from your AI Hub endpoint.

   * Use the response structure shown in the AI Hub test page as your reference.
   * The response typically includes prediction results and confidence scores.
   * Include any identifier fields (like `employeeId`) that help match responses to your original data.

2. Prepare your domain model: Design your domain model to store the response data.

   * Option A: Create a new entity specifically for storing prediction results.
   * Option B: Use your existing API entity if it already contains the necessary attributes or extend it.

3. Create Import Mapping: Configure an import mapping that uses the JSON structure and your API entity.

   * This mapping will transform the JSON response from AI Hub into Mendix objects.
   * Map prediction results, confidence scores, and any identifier fields.
   * Handle data type conversions as needed.

4. Import response in your microflow: In your microflow that calls the REST endpoint, add response processing immediately after the REST call:

   * Add an **Import from JSON** action right after the **Call REST** action.
   * Use the import mapping you created to process the response string.
   * Use the objects to postprocess, for example, changing the status of your Mendix data.

5. Handle batch processing and data matching: If you are processing multiple predictions and need to update existing data.

   * Use identifier fields (such as `employeeId`) to match response objects back to your original data.
   * Implement logic to find and update the correct records in your domain model.
   * Consider using loops and retrieve actions to process each prediction result individually.

After successfully implementing this integration:

* You can build powerful machine learning models with your own data.
* Make the model available to external services.
* Connect from Mendix to your model for seamless integration.

## Read More

* [AI Studio Documentation](https://docs.rapidminer.com/latest/studio/)

* [AI Hub Documentation](https://docs.rapidminer.com/latest/hub/)

* [Altair RapidMiner Showcase App](https://marketplace.mendix.com/link/component/247304)
