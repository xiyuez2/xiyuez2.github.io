---
title: "Introducing 3D Representation for Volume-to-Volume Translation via Score Fusion"
subtitle: "UIUC · First author · Nov 2023 – Feb 2025"
venue: "ICML 2025"
cover: /assets/images/covers/score-fusion.png
caption: "At each denoising step, perpendicularly trained 2D diffusion models give initial estimates and a lightweight 3D network learns to fuse them in score space; alignment modules inject hierarchical 2D features."
tags:
  - Diffusion models / visual generative models
  - AI for healthcare
  - Video generation / understanding
keywords:
  - MRI super-resolution
  - Inverse problems
  - 3D representation
paper: https://icml.cc/virtual/2025/poster/45130
project_page: https://score-fusion.github.io/
code: https://github.com/score-fusion/ScoreFusion
show: true
width: 12
date: 2025-02-01 00:01:00 -0500
group: Research
---
- **Score Fusion** learns to fuse diffusion score functions instead of combining them arithmetically, yielding a 3D representation for volume-to-volume translation and multi-modal fusion — the first work to bring 3D generative priors into MRI super-resolution and outperform 2D methods.
- Improved 3D medical-image and video inverse-problem results by 3–10%, with better downstream tumor segmentation.
