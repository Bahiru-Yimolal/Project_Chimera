# Project Chimera — Autonomous Influencer System

## 🚀 Project Overview
**Project Chimera** is an autonomous AI influencer system built with a fleet of AI agents (Planner, Worker, Judge) that can:  

- Detect social trends  
- Generate and publish content  
- Interact with other agents via **OpenClaw**  
- Enforce governance, safety, and Human-in-the-Loop (HITL) review  

The system follows **Spec-Driven Development (SDD)** principles. All agent behavior is defined by executable specifications in the `specs/` directory.  

---

## 🏗 Architecture

### 1. Agent Roles
- **Planner (Strategist):** Decomposes high-level goals into tasks, plans execution.  
- **Worker (Executor):** Executes atomic tasks using MCP tools.  
- **Judge (Gatekeeper):** Validates output, enforces HITL safety and compliance.

### 2. Tools & Environment
- **MCP Servers:** For version control, filesystem editing, and external integrations.  
- **Skills Directory:** Defines agent capabilities (e.g., trend fetching, audio transcription).  
- **Docker & Makefile:** Containerized environment ensures reproducibility.  

### 3. Data Storage
- **Weaviate:** Long-term semantic memory for agents  
- **Redis:** Task queue and ephemeral memory  
- **PostgreSQL / NoSQL:** Transactional data storage  
- **Immutable Ledger:** On-chain financial transactions  

---

## 📂 Folder Structure

```text
project_chimera/
├─ specs/                # Executable specifications (technical.md, functional.md, etc.)
├─ skills/               # Agent skills (Input/Output defined)
├─ tests/                # Failing tests for TDD
├─ scripts/              # Utility scripts (e.g., spec_check.py)
├─ Dockerfile            # Containerized environment
├─ Makefile              # Standardized commands (setup, test, spec-check)
├─ .github/workflows/    # CI/CD workflows
├─ .coderabbit.yaml      # AI Review & Governance config
├─ pyproject.toml        # Project dependencies for uv
└─ README.md             # This file


Setup & Running
1. Build & Setup Docker Environment
# Build Docker image
make build

# Setup dependencies inside Docker
make setup

2. Run Tests (TDD)
# Execute all failing tests
make test

3. Check Spec Alignment
# Verify Skills & Spec compliance
make spec-check


Note: All tests are failing initially. This is intentional to define the “empty slots” that agents must fill.

🛠 CI/CD & AI Governance

GitHub Actions workflow automatically runs make test on every push.

.coderabbit.yaml enforces:

Spec alignment checks

Security compliance

AI behavior rules

# Setup & Running

## 1. Build & Setup Docker Environment
```bash
# Build Docker image
make build

# Setup dependencies inside Docker
make setup

# Execute all failing tests
make test

# Verify Skills & Spec compliance
make spec-check