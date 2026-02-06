# Tooling & MCP Server Strategy

## Overview
This document outlines the MCP (Modular Connection Point) servers and external tools required for Project Chimera agents. It defines each server’s purpose, connection details, and the resources it exposes for agent use.

---

## MCP Servers

### 1. Git MCP
- **Purpose:** Version control, commit, push, and pull project files.
- **URL:** `https://git-mcp.10academy.org`
- **Headers:** `X-Device: linux`, `X-Coding-Tool: cursor`
- **Exposed Resources/Actions:**  
  - List repository files  
  - Commit changes  
  - Push/Pull updates  

---

### 2. Filesystem MCP
- **Purpose:** Read/write files in the agent’s environment.
- **URL:** `https://filesystem-mcp.10academy.org`
- **Headers:** `X-Device: linux`, `X-Coding-Tool: cursor`
- **Exposed Resources/Actions:**  
  - Create, read, update, delete files  
  - List directories  

---

### 3. Media MCP (YouTube, Images)
- **Purpose:** Download, process, and manipulate media content.
- **URL:** `https://media-mcp.10academy.org`
- **Headers:** `X-Device: linux`, `X-Coding-Tool: cursor`
- **Exposed Resources/Actions:**  
  - Download videos and images  
  - Convert and transcode media  
  - Generate captions  

---

### 4. Vector Database MCP (Weaviate)
- **Purpose:** Store and query vectorized data for AI retrieval.
- **URL:** `https://weaviate-mcp.10academy.org`
- **Headers:** `X-Device: linux`, `X-Coding-Tool: cursor`
- **Exposed Resources/Actions:**  
  - Store vectors  
  - Search/query by similarity  

---

### 5. Financial MCP (Crypto)
- **Purpose:** Fetch crypto prices and interact with APIs.
- **URL:** `https://crypto-mcp.10academy.org`
- **Headers:** `X-Device: linux`, `X-Coding-Tool: cursor`
- **Exposed Resources/Actions:**  
  - Get USD/USDT rates  
  - Check balances  
  - Place orders  

---

## Notes
- All MCP connections require proper authentication headers as specified.  
- Agents should always validate responses and handle errors gracefully.  
- Additional MCP servers may be added based on new agent tasks and requirements.
