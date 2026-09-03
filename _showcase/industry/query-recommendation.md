---
title: "Query recommendation and agentic search for e-commerce product pages and videos"
subtitle: "TikTok · Machine Learning Engineer Intern · May – Aug 2026"
cover: /assets/images/covers/query-recommendation.jpg
caption: "Schematic of the serving and training pipeline. Internal work; no public paper."
tags:
  - LLM / VLM
  - AI agent
keywords:
  - RL post-training
  - Reward design
  - Distributed training
  - E-commerce
  - Query recommendation
note: "Internal project — no public release"
show: true
width: 12
date: 2026-08-01 00:01:00 -0500
group: Industry
---
- Post-trained Qwen3-VL-8B for query recommendation: distillation from a frontier closed-source model on 200K samples, then GRPO with rewards from the online CTR of deployed questions and an agent-as-judge.
- A downstream web agent answers the proposed questions by tool-calling internal search.
- Trained with verl. Doubled offline-estimated CTR over the production system.
