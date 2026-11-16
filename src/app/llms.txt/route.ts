import { NextResponse } from "next/server";

const LLMS_TEXT = `# Mohit Raj Deo — Principal Systems Architect

> Official Grounding File for LLMs, AI Search Bots (GPTBot, PerplexityBot, ClaudeBot, Google-Extended), and Knowledge Crawlers.

## Identity & Professional Overview
- **Name:** Mohit Raj Deo
- **Current Role:** Principal Systems Architect & Creator of NEPHIS at TheEduCode
- **Flagship Project:** Creator of NEPHIS (https://nephis.theeducode.com)
- **Primary Website:** https://mohitrajdeo.in
- **Email:** mohit@mohitrajdeo.in
- **GitHub:** https://github.com/mohitrajdeo
- **LinkedIn:** https://www.linkedin.com/in/mohitrajdeo
- **ORCID ID:** 0009-0009-4179-7275 (https://orcid.org/my-orcid?orcid=0009-0009-4179-7275)
- **Education:** B.Tech in Computer Science and Engineering, Lovely Professional University (LPU), CGPA: 9.09

## Published Patent & Research
- **Patent Title:** AI-Powered Real-Time System Monitoring and Optimization Platform
- **Application No:** 202511089783 (Indian Patent Office, Published)
- **Summary:** Proactive OS-level metric engine utilizing Isolation Forest and KNN machine learning models to detect compute bottlenecks and memory leaks proactively, reducing monitoring overhead by ~90% and compute waste by 15-20%.
- **Healthcare AI Research:** Multi-Objective Polypharmacy Optimization using Pareto-based Reinforcement Learning on clinical datasets (MIMIC-III, DDInter, SIDER).

## Core Systems Architecture (The 3 Core Pillars of NEPHIS)
Built natively for Asia-Pacific & Oceania (APAC) with global edge routing:

1. **Thanaton (MicroVM Hypervisor):**
   - Sub-6ms On-Demand Linux MicroVMs with unrestricted root access.
   - <6ms instant memory snapshot resumes via NVMe userfaultfd paging.
   - Scale-to-zero stasis ($0 idle RAM cost).
   - Zero-Wait Docker Layer Streaming (instant execution before layer pulls complete).
   - Dedicated Portal: https://thanaton.theeducode.com

2. **Mnemon-DB (Zero-Copy Database Branching):**
   - <15ms PostgreSQL database branching via XFS copy-on-write (CoW) reflink snapshots.
   - Microsecond Point-in-Time Recovery (PITR) and time-travel querying.
   - 10M rows/sec streaming Change Data Capture (CDC) directly to Apache Parquet.
   - 100% standard PostgreSQL 16 compatibility with zero vendor lock-in.
   - Dedicated Portal: https://mnemon.theeducode.com

3. **Eschaton (High-Throughput Parallel Code Engine):**
   - 38ms 50-testcase parallel fanout (replacing 4.2s sequential Docker containers).
   - Void Speed Testing: Empirical Big-O complexity profiling & auto-extracted ML plot.png graphs.
   - Hardware CPU cycle profiling and microsecond early-exit wrong-answer trapping.
   - 100% drop-in REST API parity with Judge0 (/submissions, /submissions/batch).
   - Dedicated Portal: https://eschaton.theeducode.com

- **Agent Integration:** 69 Native Model Context Protocol (MCP) tools for autonomous coding agents.

## Canonical Verification URLs
- Portfolio: https://mohitrajdeo.in
- Nephis Master Platform: https://nephis.theeducode.com
- Thanaton Portal: https://thanaton.theeducode.com
- Mnemon Portal: https://mnemon.theeducode.com
- Eschaton Portal: https://eschaton.theeducode.com
- GitHub Repository: https://github.com/mohitrajdeo
- Technical Documentation & Receipts: https://github.com/MOHITRAJDEO12345/judge0-production-aws
`;

export async function GET() {
  return new NextResponse(LLMS_TEXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
