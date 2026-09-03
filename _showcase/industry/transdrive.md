---
title: "TransDrive: a shared-BEV vision–language–action framework unifying planning and end-to-end driving"
subtitle: "Xpeng Motors · Machine Learning Intern · May 2025 – Jan 2026"
cover: /assets/images/covers/transdrive.jpg
caption: "Two-stage training: pretrain on rendered nuPlan planning data, then fine-tune on nuScenes with BEV maps from a frozen perception model."
tags:
  - LLM / VLM
  - Autonomous driving
keywords:
  - Vision-language-action
  - BEV representation
  - End-to-end driving
  - Distributed training
note: "Manuscript under review"
show: true
width: 12
date: 2026-01-01 00:01:00 -0500
group: Industry
---
- Instead of feeding a VLM latent BEV embeddings, render perception outputs *and* vectorized planning data into the same human-readable BEV image, so one Qwen2.5-VL backbone serves both tasks without architectural changes.
- The shared representation unlocks pretraining on planning datasets that are 10× larger than end-to-end driving data, then transfer to sensor-based driving — with the largest gains in low-data regimes.
- Led distributed training on 200+ GPUs; reduced L2 trajectory error by 4–9% over the baseline model.
