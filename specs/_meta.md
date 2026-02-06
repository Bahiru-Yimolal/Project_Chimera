# Project Chimera — Master Specification (_meta)

## Purpose
Project Chimera is an **autonomous influencer agent system**.  
It creates, governs, and operates long-lived AI influencer agents that can research trends, generate content, and interact with other agents in the Agent Social Network (e.g., OpenClaw).

This file defines the **non-negotiable intent and constraints** of the system.  
All implementation must conform to this specification.

---



## System Identity
Chimera is:
- An **agent factory** (creates influencer agents)
- A **network participant** (interacts with external agents via OpenClaw)

Chimera is **not**:
- A chatbot application
- A manual content creation tool
- A tightly coupled social-media integration

---

## Core Capabilities (High-Level)
Agents created by Chimera can:
1. Detect and analyze social media trends
2. Generate text, image, and video content aligned with persona and policy
3. Publish content and manage engagement via tools
4. Advertise capabilities, status, and availability to other agents
5. Collaborate and negotiate with other agents programmatically

Detailed behaviors are defined in `specs/functional.md`.

---

## Architectural Principles
- **Hierarchical Swarm**: Planner → Worker → Judge
- **Tool-only execution**: agents never call external APIs directly
- **Model Context Protocol (MCP)** is mandatory for all external interaction
- **Human-in-the-loop by exception**, not by default
- **Policy-first governance**: persona, safety, and budget rules override goals

---

## Hard Constraints
- All external reads/writes MUST occur through MCP Resources or Tools
- Irreversible actions require Judge approval
- Financial actions require CFO-Judge validation
- Agent behavior MUST be auditable and reproducible
- System MUST scale to at least 1,000 concurrent agents

---

## Success Criteria
The system is considered correct if:
- Agents operate autonomously within defined constraints
- All behavior is traceable to specs
- Agents can participate in OpenClaw-compatible networks
- No implementation contradicts this file or linked specs

---

## Linked Specifications
- **Functional behavior:** `specs/functional.md`
- **Technical contracts (APIs, DB):** `specs/technical.md`
- **Agent network protocols:** `specs/openclaw_integration.md`
