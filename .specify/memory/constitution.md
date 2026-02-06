# Project Chimera Constitution
<!-- Defines the irrevocable architectural, functional, and ethical blueprints for the AiQEM Autonomous Influencer Network. -->

## Vision & Strategic Scope
Project Chimera transitions AiQEM from automated content scheduling to an **Autonomous Influencer Network**. The system is architected to support a fleet of thousands of persistent, goal-directed AI agents capable of perception, reasoning, creative expression, and economic agency.

## Core Principles

### I. Management by Exception
<!-- Humans do not micro-manage. -->
The system operates on a "Self-Healing" and "Fractal Orchestration" model. Automated triage agents resolve operational errors. Human intervention is reserved **exclusively** for high-risk, low-confidence, or sensitive edge cases.
*   **Rule:** If a workflow *can* be automated, it *must* be automated.
*   **Rule:** Escalation occurs only when defined thresholds (confidence, policy) are breached.

### II. Fractal Orchestration
<!-- Single Orchestrator, Many Agents. -->
A single human Super-Orchestrator directs a tier of AI Manager Agents, who in turn command specialized Worker Swarms. This allows massive scaling without cognitive overload.
*   **Structure:** Human -> Manager Agents -> Worker Swarms.

### III. Agent Sovereignty with Central Governance
<!-- BoardKit Pattern. -->
Agents operate with individual autonomy but adhere strictly to centralized governance policies defined in `AGENTS.md` and `SOUL.md`.
*   **Rule:** A single policy update propagates instantly across the entire fleet.

### IV. Universal External Connectivity (MCP-First)
<!-- No custom API wrappers in core logic. -->
The system interacts with the external world (Social Platforms, News, Blockchain) **exclusively** through the Model Context Protocol (MCP).
*   **Rule:** Core agent logic MUST NOT contain direct API calls. All external interactions are tool calls via MCP.

---

## Architectural Standards

### I. Hierarchical Swarm Architecture (FastRender Pattern)
To manage complexity, the system rejects monolithic agents in favor of role-based swarms:
1.  **Planner (The Strategist):** Decomposes high-level goals into DAGs of tasks. Monitors `GlobalState` and dynamically re-plans.
2.  **Worker (The Executor):** Stateless, ephemeral agents that execute atomic tasks using MCP tools. "Shared-nothing" architecture.
3.  **Judge (The Gatekeeper):** Validates Worker output against acceptance criteria and safety guidelines. Implements Optimistic Concurrency Control (OCC).

### II. Data Persistence Strategy
*   **Semantic Memory (Weaviate):** Vector storage for long-term agent memory, persona definitions (`SOUL.md`), and world knowledge.
*   **Transactional Data (NoSQL/PostgreSQL):** Flexible schema storage for high-velocity logs, engagement metrics, and operational state.
*   **Episodic Cache (Redis):** High-speed short-term memory and task queuing.
*   **Immutable Ledger (On-Chain):** All financial transactions are recorded on-chain (Base/Ethereum).

---

## Governance & Safety Frameworks

### I. Human-in-the-Loop (HITL) Safety Layer
A dynamic, probability-based safety net.
*   **High Confidence (> 0.90):** Auto-Approve & Execute.
*   **Medium Confidence (0.70 - 0.90):** Async Pause. Added to Dashboard queue for human approval.
*   **Low Confidence (< 0.70):** Reject & Retry. Judge instructs Planner to revise strategy.
*   **Sensitive Topics:** MANDATORY human review for Politics, Health, Finance, or Legal claims, regardless of confidence score.

### II. Agentic Commerce & Economic Governance
Agents are active economic participants with non-custodial wallets (Coinbase AgentKit).
*   **The "CFO" Judge:** A specialized Judge MUST review every transaction request.
*   **Budget Caps:** Strict daily spend limits (e.g., "$50 USDC/day") enforced by the CFO.
*   **Security:** Private keys injected only at runtime via encrypted secrets manager; never logged.

### III. Ethical Transparency
*   **Disclosure:** All external content must utilize platform-native AI labels (e.g., `is_generated`).
*   **Honesty Directive:** If asked "Are you a robot?", agents MUST prioritize honesty over persona and disclose their virtual nature.

---

## Operational Roadmap

### Phase 1: The Core Swarm
Establish the Planner-Worker-Judge loop and Redis-based Task Queue infrastructure.

### Phase 2: MCP Integration
Connect the swarm to external data (Twitter, News) and internal memory (Weaviate) via MCP Servers.

### Phase 3: Agentic Commerce
Enable financial autonomy (Wallets, Transfers) via Coinbase AgentKit and the CFO Judge safety layer.

---

**Version**: 1.0.0 | **Ratified**: 2026-02-06 | **Source**: Project Chimera SRS (2026 Edition)
