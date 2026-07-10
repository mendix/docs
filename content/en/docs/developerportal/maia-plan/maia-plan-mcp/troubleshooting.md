---
title: "Troubleshooting Maia Plan as MCP Server"
linktitle: "Troubleshooting"
url: /developerportal/maia-plan-mcp-troubleshooting/
description: "Describes how to fix potential Maia Plan as an MCP server issues."
weight: 10
---

## Introduction

If you encounter issues with Maia Plan as MCP Server, use the following troubleshooting tips to solve them.

## 401 or 403 Errors

Your PAT is invalid or expired. Regenerate the token in [User Settings](/portal/user-settings/#pat) and update the `MENDIX_TOKEN` environment variable.

## Tools Do Not Appear in Copilot

Confirm that `mcp.json` is in the correct location (see [Configuring Visual Studio Code Copilot](#configuring-visual-studio-code-copilot)), then open **Command Palette** and run **MCP: Reset Cached Tools**.

## Server Does Not Start

Open **Command Palette**, run **MCP: Reset Trust**, then trust the server again when prompted.

## Environment Variable Not Detected

Fully restart Visual Studio Code after setting the `MENDIX_TOKEN` environment variable. A reload is not sufficient.
