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

Your personal access tokem (PAT) is invalid or expired. Regenerate the PAT in [User Settings](/portal/user-settings/#pat), then update the `MENDIX_TOKEN` environment variable.

## Tools Do Not Appear in Copilot

Confirm that `mcp.json` is in the correct location, then open **Command Palette** and run **MCP: Reset Cached Tools**.

Refer to [Configuring Visual Studio Code Copilot](/developerportal/maia-plan-mcp/#configuring-visual-studio-code-copilot) for details.

## Server Does Not Start

Open **Command Palette**, run **MCP: Reset Trust**, then trust the server again when prompted.

## Environment Variable Not Detected

Fully restart Visual Studio Code after setting the `MENDIX_TOKEN` environment variable. A reload is not sufficient.
