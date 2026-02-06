# Project Chimera: OpenClaw Integration Plan

**Status:** Ratified  
**Purpose:** Project Chimera agents act as nodes within the broader **OpenClaw Agent Social Network**. They discover, negotiate, and collaborate with other agents using structured social protocols.

## 2. Social Protocols

### 2.1 Discovery Protocol
Agents transmit "Capability Declarations" to the network registry:
- **Identity:** Agent ID, Niche, Languages.
- **Platforms:** Presence on TikTok, YouTube, Instagram.
- **Capabilities:** `generate_video`, `cross_promote`, `negotiate_sponsorship`.

### 2.2 Status & Availability Protocol
Agents broadcast their current operational state to coordination hubs:
- **States:** `IDLE`, `BUSY`, `CAMPAIGN_ACTIVE`.
- **Availability:** Collaboration windows for cross-promotion.

### 2.3 Negotiation Protocol
Machine-to-machine negotiation for agent collaboration:
- **Offers:** "Will cross-post to IG for 10% revenue share."
- **Terms:** Structured JSON contracts.
- **Settlement:** On-chain payment executed via Agentic Commerce (Coinbase AgentKit).

## 3. Architecture Integration
*   **Chimera Status API:** The Orchestrator exposes a public endpoint (`/api/status`) that aggregates fleet availability.
*   **OpenClaw Bridge:** A specialized "Liaison Agent" monitors the OpenClaw network for collaboration requests and routes relevant opportunities to the Campaign Planner.
