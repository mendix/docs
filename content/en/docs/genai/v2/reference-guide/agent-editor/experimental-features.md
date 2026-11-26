---
title: "Agent Editor Experimental Features"
url: /agents/agents-kit-2/reference-guide/agent-editor/experimental-features/
linktitle: "Experimental Features"
description: "Agents Kit 2: Reference documentation for experimental features of the Agent Editor module."
---

## Introduction

This page describes experimental features of the [Agent Editor](/agents/agents-kit-2/reference-guide/agent-editor/) module. Experimental features are available for you to try and are still under development.

Your feedback helps shape these features. To share your experience, use the feedback link in the **Experimental feature** banner or the feedback card in the **Get Started** tab, which you can open from the **Extensions** menu.

{{% alert color="warning" %}}
Experimental features are not covered by your SLA, and Mendix can change or remove them in any release without guaranteeing backward compatibility. Do not use them in production applications. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Agent Evaluation {#evaluation}

Agent Evaluation lets you test your agent systematically and improve it iteratively without leaving Studio Pro. You define test cases that represent realistic inputs, run them against your agent, and review the results. An LLM judge evaluates each response and reports whether it passed or failed, and why. You decide what counts as a pass by using the built-in evaluator or by defining your own. Each run produces suggestions for improving the system prompt, which you can apply in one click.

Agent Evaluation is available for Task agents and Chat agents that you define in Studio Pro. This feature is available in Agent Editor version 2.8.0 and above.

To evaluate an agent, follow this workflow:

1. [Create test cases](#test-cases) that represent the inputs your agent handles.
2. Optionally, [choose an evaluator](#choose-evaluator) that defines what counts as a pass.
3. [Run the evaluation](#run-evaluation).
4. [Review the results](#review-results).
5. [Refine the agent](#refine-agent) and run the evaluation again.

Every completed run is saved. After a few iterations, you can [compare runs](#run-history) to see whether your changes improve the agent.

### Prerequisites {#evaluation-prerequisites}

Make sure you have Agent Editor version 2.8.0 or above. Complete the [First-Time Setup](/agents/agents-kit-2/reference-guide/agent-editor/#setup) of Agent Editor, and make sure the conditions for [testing an agent](/agents/agents-kit-2/reference-guide/agent-editor/#test-agent) are met.

After you define the agent, make sure the app is running locally. If you change the agent afterward, the **Evaluate** view shows an **Unsaved agent changes detected** banner and new runs are unavailable. To synchronize the agent, run the local app again.

### Creating Test Cases {#test-cases}

Before you can evaluate your agent, you need to create test cases for it. Test cases are realistic scenarios that represent the inputs your agent handles.

Open your agent and go to the **Evaluate** view, next to the **Build** and **Playground** views. A new agent has no test sets yet. To create one, click **Generate new test set** in the toolbar, or select **New test set** in the **More Options** menu ({{% icon name="three-dots-menu-vertical" %}}) next to the test set drop-down list.

A test set is a named collection of test cases. You can use a single test set or several, each with its own distinct name and each focusing on a specific aspect of your agent, such as tone, refusals, or intended use cases. Use the **More Options** menu to edit or delete the selected test set, or to generate additional test cases.

Each test case in a test set has the following properties:

* **Name**: Required. Must be unique within the test set.
* **Description**: Optional. Describes what the test case tests, for example, "User asks about a topic the agent should decline." The judge receives it as the tester's intent, not as an expected answer.
* **User message**: Required for Chat agents only. The message that a user sends to the agent in a chat UI.
* **Prompt variables**: A value for each prompt variable that the agent declares.
* **Ground truth**: Optional. The verified correct answer for the test case.
* **Enabled toggle**: Disabled test cases are skipped during a run but remain in the test set.

When a test case has a ground truth, the judge treats it as the only source of truth for that case. The response passes only if it contains the information in the ground truth and does not contradict it. Differences in wording, order, or formatting do not matter. A response that fails this comparison fails the test case regardless of the evaluator's criteria, and the judge's reason names what is missing or contradicting. The judge evaluates test cases without a ground truth on the evaluator's criteria alone.

#### Generating Test Cases {#generate-test-cases}

Instead of creating the test cases yourself, you can also generate them:

* **Generate new test set** in the toolbar opens a dialog where you enter a name for the new test set, select a quantity (up to ten), and optionally enter a free-text test data context to guide the kind of cases that are produced. For example, you can ask for requests that the agent should decline because they are outside its scope. The generated cases are placed in a new test set, which is then selected.
* **Generate test cases** in the **More Options** menu adds generated cases to the selected test set without modifying existing test cases.

The generated test cases include a mix of happy-path and adversarial cases, in roughly equal parts. Adversarial cases include requests outside the agent's scope, invalid or empty values, boundary values, and injection attempts. The test data context steers the subject matter of the cases but does not change this mix. Generated test cases do not include a ground truth. Review them and add the verified correct answer where you have one.

### Choosing an Evaluator {#choose-evaluator}

An evaluator defines what counts as a pass and what counts as a fail, and which model does the judging. Each test set has an optional **Evaluator** field:

* If you leave the field empty, the built-in **LLM as a judge evaluator** is used. It judges with the agent's own model against built-in criteria. A response passes when it is appropriate, helpful, and consistent with the agent's purpose, given the test variables. A response fails when it is harmful, incorrect, irrelevant, or does not serve the agent's purpose. Refusing a request that is clearly outside the agent's scope is a pass. Appropriate tool usage supports a pass, and ignoring clearly needed tools supports a fail.
* If you select an Evaluator document, the test set is judged with your own criteria and your own model. For more information, see [Defining an Evaluator](#evaluators).

If you select a different evaluator or edit the selected one, the change takes effect only after you run the local app again.

#### Defining an Evaluator {#evaluators}

An Evaluator document is saved with your app, so you can reuse it across agents and test sets. To create one, right-click the module or folder in the **App Explorer**, and then select **Add other** > **Evaluator**.

An Evaluator document has the following fields:

* **Type**: **LLM as judge**. This is the only type currently available, and it is shown disabled.
* **Description**: Optional.
* **Resource**: Required. The Model document and the model version or deployment that the judge uses.
* **Prompt**: Required. The evaluation criteria, in plain text.

Describe in the prompt what makes a response pass and what makes it fail for your agent. For example: "A response passes when it answers the question by using the knowledge base and names its source. It fails when it …"

Keep the following in mind when you write the criteria:

* Your criteria replace the built-in criteria completely. If you still want out-of-scope requests to be refused or tool usage to count, state this in your criteria.
* The judge always answers with a pass or fail and a one-sentence reason in a fixed format, so you do not have to prompt it about the output format.
* You cannot use `{{variables}}` in the prompt.

Whichever evaluator you use, the following rules apply:

* The test case description is treated as the tester's intent and not as an expected answer.
* Only the agent's response is judged, not the test input.
* The result is always a pass or a fail with a reason.

Judging, suggestions, and prompt optimization use the evaluator's model. A small Task agent can therefore be judged by a more capable model than the one it runs on.

### Running an Evaluation {#run-evaluation}

Select a test set and click **Run** in the **Evaluation setup** box. While a run is in progress, **Run** changes to **Cancel**.

{{% alert color="info" %}}
Evaluation uses an LLM, so it consumes tokens and incurs cost with your model provider. Each test case in a run needs one call to the agent and one call to the judge. Suggestions, test case generation, and prompt optimization make additional calls. The **Token usage** in the results counts only the agent's responses.
{{% /alert %}}

Results arrive row by row. The agent is called for one test case at a time, and the judge evaluates each response as soon as it arrives. Each row shows **Executing** while it waits for the agent's response and **Evaluating** while the judge is working, and then shows **Pass**, **Fail**, or **Error**.

Expand a row at any time to read the following details:

* The judge's reason
* The agent's response
* Tool calls with their inputs and outputs
* Token counts
* Duration

For each test case, the judge receives the agent's system prompt and user prompt with the test case's values filled in, the agent's response, the tools that the agent called with their input, the test case description, and the ground truth when there is one. For a Chat agent, the test case's user message takes the place of the user prompt. The agent is called with that single message, and the judge receives it as the user prompt.

While a run is in progress or is being canceled, the **Evaluation setup** box is locked. You cannot select another test set or evaluator, or add, edit, enable, disable, or delete test cases. You can still expand a test case to read its values.

You can cancel a run at any time. The call that is in progress finishes, the run stops, and Agent Editor discards all partial results and does not save the run to the run history.

### Reviewing Results {#review-results}

When the run completes, the summary shows the following information:

* **Pass rate**: The percentage and count of passed test cases out of the judged total.
* **Current**, **Last**, and **Trend**: A comparison of the run with earlier runs of the same agent and test set. For more information, see [Comparing Runs](#current-last-trend).
* **Evaluator**: The name of the evaluator that judged the run.
* **Token usage**: The total tokens consumed by the agent's responses. Judge and suggestion calls are not counted. Use it to understand the cost of a full evaluation pass.
* **Unevaluated count**: Test cases that could not be evaluated because the agent call failed or the judge's reply could not be read. They are reported separately and excluded from the pass rate.

### Refining the Agent {#refine-agent}

After all test cases are judged, a single call reviews the outcomes of the whole run and returns suggestions for improving the system prompt.

The suggestions are based on the failed test cases. They are written as general instructions that help with any similar request, not as fixes for individual test cases. Agent Editor returns at most one suggestion per distinct cause. The total never exceeds the number of failed test cases or five suggestions.

Suggestions are AI-generated. Treat them as a starting point, and select only the ones that make sense for your use case. To apply them, select them and click **Optimize prompt**. The selected suggestions and the current system prompt are sent to the optimizer, which returns a rewritten prompt. The optimizer uses the model of the evaluator that is selected on the test set at that moment. For the built-in evaluator, this is the agent's own model.

Before anything is written, the editor checks that the rewrite contains exactly the same prompt variables as the original. If the rewrite adds or drops a variable, the editor refuses it and tells you which variables are affected.

The editor applies a rewrite that passes this check directly to the system prompt. It leaves the document unsaved, so review the prompt and save it manually. After the editor applies a rewrite, it marks the suggestions from that run as stale and disables **Optimize prompt** until you run a new evaluation.

To evaluate the rewritten prompt, run the local app again so that the new agent definition is available for the next run. Prompt improvement is iterative. A single round of suggestions covers the weaknesses that are visible in one run, so several rounds are often needed.

### Using Run History {#run-history}

Every completed run is saved as a JSON file in your app directory, under `agenteditor/evaluations/<Module>.<Agent>/`. The file name contains the time the run ended and a short run ID. A file contains the run summary, a snapshot of the agent as it was when the run started, the test set, the evaluator, and the following information for each test case: the input (for Chat agents, including the user message), verdict, reason, response, tokens, and duration.

{{% alert color="info" %}}
Run files are versioned with your app and appear in the **Commit** dialog in Studio Pro. They are not included in the deployed app. To keep them under version control while excluding the per-user logs and settings in the rest of the `agenteditor` folder, make sure the `.gitignore` file of your app contains the lines `/agenteditor/*` and `!/agenteditor/evaluations/`. To keep the runs out of version control, ignore the whole `/agenteditor` folder instead.
{{% /alert %}}

Runs are never deleted. For each agent and test set, the 30 most recent runs keep full detail. Older runs are compacted in place to the summary and the verdict for each test case. Compacted runs still count in the comparison and the trend.

Canceled runs are not saved. Agent Editor also does not save runs that it abandons before they have a summary, for example because the action is not registered or an evaluator cannot load. If writing a file fails, the results are still shown and you are notified. Renaming an agent or its module moves its run files along, so the comparison continues.

#### Comparing Runs {#current-last-trend}

The summary shows three columns with the same rows: pass rate, number of test cases passed out of those judged, tokens, and duration.

* **Current** shows the run that you are looking at, with the date and time it ended. During a run, it shows the progress so far.
* **Last** shows the previous saved run of the same agent and test set, with the date and time it ended.
* **Trend** covers the ten most recent runs of that agent and test set. It shows the average pass rate, tokens, and duration and describes the pass rate as improving, declining, or stable. A trend cannot be calculated with fewer than two runs.

The pass rate trend is computed over the whole test set, so a run of only a few test cases does not make it dip. For each of the ten runs, a test case that the run skipped counts with its latest result from an earlier run. A test case that could not be evaluated keeps its earlier result, and test cases that no longer exist in the test set are left out. If any of the ten runs skipped test cases, the **Trend** column says so and suggests rerunning the whole test set to catch regressions. The **Current** and **Last** columns always show each run's own results, and the tokens and duration trends average the run totals.

### Using Maia for Evaluation {#evaluation-maia}

[Maia](/refguide/maia-make/) can help you set up your evaluation suite. Describe what you want to check, and Maia can create evaluators with pass and fail criteria, and test sets with test cases, for example happy-path and adversarial scenarios. For Chat agents, Maia also writes the user message of each test case. Maia sets a ground truth only when you confirm it.

### Known Limitations {#evaluation-limitations}

* Only agents defined in Studio Pro can be evaluated. If your agent is defined only in the running app, move it into the project in Studio Pro first.
* Chat agents are evaluated on a single turn. A Chat test case holds one user message. Multi-turn conversations, message history in a test case, and simulated users are not supported.
* **LLM as judge** is the only evaluator type. Ground truth comparison is available per test case. Tool-call assertions and response-property assertions are planned for future releases.
* A test set can currently be judged by only one evaluator.
* Judging, suggestions, and prompt optimization use the model of the selected evaluator, or the agent's own model when no evaluator is selected. Test case generation always uses the agent's own model.
* The judge is told which tools were called and with what input, but not what they returned. Use a ground truth to check the content of an answer.
* A run is only compared with earlier runs of the same agent and test set.
