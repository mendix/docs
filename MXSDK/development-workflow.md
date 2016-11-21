---
title: "Development Workflow"
space: "Mendix Platform SDK"
category: "Your learning path for the Mendix SDK"
---
A script that makes use of the Mendix Model SDK may contain one or more of the following activities:

1.  Create a new app (if you start from scratch).
2.  Create an online working copy from an existing project.
3.  Modify/analyze/export the model in the online working copy.
4.  Commit changes in the online working copy back to team server (if you made modifications).

How many of these activities are present in your script depends on where you are in developing your script. Early in the development phase, you might want to take a more trial and error approach. It's important to have short feedback cycles, therefore you might want to avoid recreating an online working copy or committing to the team server every time you execute the script. You only want to execute activities (1), (2), and (4) once and focus more on developing activity (3). We call this the "staged round-trip".

At (or close to) the end, you want a script that covers all the activities, so that you can publish and share it. We will refer to this as the "one-shot round-trip" or "full round-trip".

# One-shot round-trip

There are two possibilities for starting with a new app or using an existing app:

1.  For an example on how to have a full round-trip script with a new app, see [one-shot-round-trip-from-scratch.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/one-shot-round-trip/one-shot-round-trip-from-scratch.ts).
2.  For an example on how to have a full round-trip script with an existing app, see [one-shot-round-trip-from-existing-project.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/one-shot-round-trip/one-shot-round-trip-from-existing-project.ts).

Both examples are in this GitHub repository, along with a user guide: [https://github.com/mendix/mendixplatformsdk-examples/tree/master/one-shot-round-trip](https://github.com/mendix/mendixplatformsdk-examples-workflow/tree/master/one-shot-round-trip)

# Staged round-trip

| I want to... | Get started | Do my work | Finish up |
| --- | --- | --- | --- |
| Modify/analyze/export my existing app | Create an online working copy from a revision in the teamserver. See [create-online-wc-from-existing-project.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/staged-round-trip/create-online-wc-from-existing-project.ts) | Modify/analyze/export. See [update-online-wc.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/staged-round-trip/update-online-wc.ts) | Commit to the teamserver. See [commit-online-wc.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/staged-round-trip/commit-online-wc.ts) |
| Start from scratch with a new app | Create a new app and the online working copy of the newly created app. See [create-online-wc-from-scratch.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/staged-round-trip/create-online-wc-from-scratch.ts) | Update my app. See [update-online-wc.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/staged-round-trip/update-online-wc.ts) | Commit to the teamserver. See [commit-online-wc.ts](https://github.com/mendix/mendixplatformsdk-examples-workflow/blob/master/staged-round-trip/commit-online-wc.ts) |

Both examples are in this GitHub repository, along with a user guide: [https://github.com/mendix/mendixplatformsdk-examples/tree/master/staged-round-trip](https://github.com/mendix/mendixplatformsdk-examples-workflow/tree/master/staged-round-trip)
