---
title: "Agentic reasoning for video generation"
subtitle: "UIUC · Dissertation chapter · Jan 2025 – Jun 2026"
cover: /assets/images/covers/video-creation-agent.png
caption: "The generator and its metrics are treated as an environment; language agents plan, inspect, regenerate, and roll back around a frozen video diffusion model."
tags:
  - Video generation / understanding
  - AI agent
  - LLM / VLM
  - Diffusion models / visual generative models
keywords:
  - RL post-training
  - Reward design
  - Chain-of-thought planning
show: true
width: 12
date: 2026-06-01 00:01:00 -0500
group: Research
---
- A video-creation agent that integrates chain-of-thought planning and iterative self-refinement into video generation, built on Causal Forcing as the generator and Qwen2.5-VL-7B as the reasoner.
- Four roles around a frozen generator: a prompt agent, a video-understanding agent with adaptive frame inspection, a keyframe agent for hard temporal transitions, and a supervisor that can roll back to a better earlier candidate.
- Trained the reasoner with GRPO using VisionReward on the final video (minus a diffusion-call penalty) as the reward, improving VisionReward by 20.3% over the base generator with better physical plausibility and causal consistency.
- Supports multi-modal conditioned generation and interactive, interpretable editing through explicit reasoning traces.
