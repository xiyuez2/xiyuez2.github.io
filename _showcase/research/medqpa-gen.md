---
title: "MedQPA-Gen: Medical Question Proposing and Answering for Report Generation"
subtitle: "UIUC · Co-first author · Jun 2025 – Jan 2026"
venue: "ACL 2026 Findings"
cover: /assets/images/covers/medqpa-gen.png
caption: "Figure 2 of the paper: the MedQPA evaluation loop (question proposing and answering), reflective prompting, and the RL update against the MedQPA reward model."
tags:
  - AI for healthcare
  - LLM / VLM
  - AI agent
keywords:
  - RL post-training
  - Reward design
  - Report generation
  - LLM-as-judge
paper: https://aclanthology.org/2026.findings-acl.2139/
authors:
  - Weijie Liang
  - Xiyue Zhu
  - Ruike Zhu
  - Chenhao Li
  - Cheng Tang
  - Zhiyu Liu
  - Zhihua Gong
  - Shirui Luo
  - Yudu Li
  - Volodymyr Kindratenko
show: true
width: 12
date: 2026-01-02 00:01:00 -0500
group: Research
---
- Proposed **MedQPA**, a question-driven agentic evaluation pipeline for medical report generation: propose clinical questions, answer them against image and report, and score fact consistency.
- Developed **MedQPA-Gen**, which optimizes report generators against MedQPA via reflective prompting, iterative DPO, and GRPO on Qwen2-VL-7B.
- 80% human-preference win rate over the base model and +3.5% accuracy on downstream disease classification.
