/**
 * Project Chimera – Architecture diagrams (Mermaid.js)
 * Use with Mermaid CLI or embed in Markdown / docs.
 * Render: https://mermaid.live or `npx mermaid-cli -i research/Mermaid.js`
 */

export const diagrams = {
  /** High-level system context: Human, OpenClaw, Social, Orchestrator, Managers, Workers, Skills, HITL */
  systemContext: `
flowchart TB
    subgraph External["External World"]
        HUM[Human Operator]
        OPEN[OpenClaw / Agent Network]
        SOCIAL[Social Platforms]
    end

    subgraph Chimera["Project Chimera"]
        ORCH[Super-Orchestrator]
        MGR[Manager Agents]
        WRK[Worker Agents]
        SKILLS[Skills Layer]
        HITL[Human-in-the-Loop Gate]
    end

    HUM -->|Goals & Policies| ORCH
    ORCH -->|Tasks| MGR
    MGR -->|Assignments| WRK
    WRK --> SKILLS
    WRK -->|Escalation| HITL
    HITL -->|Approve/Reject| HUM
    WRK <-->|Status & Protocols| OPEN
    SKILLS -->|Publish / Fetch| SOCIAL
`.trim(),

  /** Hierarchical Swarm: Orchestrator -> Manager agents -> Workers */
  hierarchicalSwarm: `
flowchart LR
    subgraph Layer1["Layer 1: Orchestration"]
        O[Super-Orchestrator]
    end

    subgraph Layer2["Layer 2: Management"]
        M1[Manager: Trends]
        M2[Manager: Content]
        M3[Manager: Publishing]
    end

    subgraph Layer3["Layer 3: Workers"]
        W1[Worker 1]
        W2[Worker 2]
        W3[Worker N...]
    end

    O --> M1 & M2 & M3
    M1 --> W1 & W2
    M2 --> W2 & W3
    M3 --> W1 & W3
`.trim(),

  /** Content pipeline: Orchestrator -> Manager -> Workers -> Skills, with HITL escalation */
  contentPipelineSequence: `
sequenceDiagram
    participant O as Orchestrator
    participant M as Manager
    participant W as Workers
    participant S as Skills
    participant HITL as Human Gate

    O->>M: Decompose goal (e.g. Weekly trend campaign)
    M->>W: Assign: fetch trends
    W->>S: skill_trend_fetcher
    S-->>W: Trend data
    M->>W: Assign: generate content
    W->>S: skill_content_generator
    S-->>W: Draft content
    alt Risk threshold exceeded
        W->>HITL: Escalate for approval
        HITL->>W: Approve / Reject
    end
    M->>W: Assign: publish
    W->>S: skill_publish
    S-->>W: Publish result
    W-->>M: Status
    M-->>O: Campaign status
`.trim(),

  /** Human-in-the-Loop: draft -> policy -> risk -> auto-publish or queue -> human -> approve/reject/edit */
  hitlDecisionFlow: `
flowchart TD
    A[Draft content ready] --> B{Policy check}
    B -->|Pass| C{Risk / sensitivity check}
    B -->|Fail| H[Reject / Route to HITL]
    C -->|Low risk| D[Auto-publish]
    C -->|High risk| E[Queue for human review]
    E --> F[Human reviews]
    F --> G{Decision}
    G -->|Approve| D
    G -->|Reject| I[Discard or revise]
    G -->|Edit| J[Human edits, then publish]
    H --> F
`.trim(),

  /** HITL placement in pipeline: Pre-publish -> Policy -> Risk -> Review Queue -> Human -> Publish/Reject */
  hitlPlacement: `
flowchart LR
    subgraph Pipeline["Content pipeline"]
        T[Trend Fetch] --> G[Generate] --> P[Pre-publish]
    end

    subgraph Safety["Safety layer"]
        POL[Policy Engine]
        RISK[Risk Scorer]
        QUEUE[Review Queue]
        HUMAN[Human Reviewer]
    end

    P --> POL
    POL --> RISK
    RISK -->|Escalate| QUEUE
    QUEUE --> HUMAN
    HUMAN -->|Approve| PUB[Publish]
    HUMAN -->|Reject| OUT[Out]
    RISK -->|Auto-OK| PUB
`.trim(),

  /** Logical data model (NoSQL-oriented): Trends, Content, Events, Agents, Memory, Logs */
  logicalDataModel: `
erDiagram
    TRENDS ||--o{ CONTENT_ITEMS : "feeds"
    CONTENT_ITEMS ||--o{ ENGAGEMENT_EVENTS : "generates"
    AGENTS ||--o{ CONTENT_ITEMS : "produces"
    AGENTS ||--o{ AGENT_MEMORY : "has"
    AGENTS ||--o{ EXECUTION_LOGS : "writes"

    TRENDS {
        string id PK
        string platform
        string trend
        float popularity
        datetime timestamp
        object filters
    }

    CONTENT_ITEMS {
        string id PK
        string agent_id FK
        string platform
        string text
        array media
        string status
        datetime timestamp
        object metadata
    }

    ENGAGEMENT_EVENTS {
        string id PK
        string content_id FK
        string event_type
        datetime timestamp
        object payload
    }

    AGENTS {
        string id PK
        string status
        object capabilities
        datetime last_updated
    }

    AGENT_MEMORY {
        string id PK
        string agent_id FK
        datetime snapshot_at
        object state
    }

    EXECUTION_LOGS {
        string id PK
        string agent_id FK
        string skill
        string outcome
        datetime timestamp
    }
`.trim(),

  /** Data flow: Ingest -> Document store + Time-series -> Query / analytics */
  dataFlowStorage: `
flowchart TB
    subgraph Ingest["High-velocity ingest"]
        API[Trend / Social APIs]
        AGENTS[Worker agents]
    end

    subgraph Store["NoSQL storage"]
        DOC[(Document store video/content metadata agent memory)]
        TS[(Time-series / events engagement, logs)]
    end

    subgraph Query["Query & analytics"]
        DASH[Dashboards]
        ORCH[Orchestrator decisions]
    end

    API --> DOC
    AGENTS --> DOC
    AGENTS --> TS
    DOC --> ORCH
    DOC --> DASH
    TS --> DASH
`.trim(),

  /** OpenClaw integration: Chimera Status API -> OpenClaw protocol/registry -> other agents */
  openClawIntegration: `
flowchart LR
    subgraph Chimera["Chimera"]
        ORCH[Orchestrator]
        STATUS_API[Status API]
        AGENTS[Chimera agents]
    end

    subgraph OpenClaw["OpenClaw network"]
        REG[Registry / Discovery]
        PROTO[Protocol layer]
    end

    ORCH --> STATUS_API
    AGENTS --> STATUS_API
    STATUS_API -->|POST /api/status| PROTO
    PROTO --> REG
    REG -.->|Discover & coordinate| Other[Other agents]
`.trim(),
};

/** All diagram names for iteration or CLI */
export const diagramNames = Object.keys(diagrams);

export default diagrams;
