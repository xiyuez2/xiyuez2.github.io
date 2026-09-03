---
title: "MapPrior: Bird's-Eye View Map Layout Estimation with Generative Models"
subtitle: "UIUC · First author · Jul 2022 – Aug 2023"
venue: "ICCV 2023"
cover: /assets/images/covers/mapprior.png
caption: "An off-the-shelf perception model gives a noisy estimate; a generative encoder, transformer sampler, and decoder turn it into realistic, diverse map layouts."
tags:
  - Autonomous driving
  - Diffusion models / visual generative models
keywords:
  - BEV map segmentation
  - Generative priors
paper: https://openaccess.thecvf.com/content/ICCV2023/html/Zhu_MapPrior_Birds-Eye_View_Map_Layout_Estimation_with_Generative_Models_ICCV_2023_paper.html
authors:
  - Xiyue Zhu
  - Vlas Zyrianov
  - Zhijian Liu
  - Shenlong Wang
project_page: https://mapprior.github.io/
code: https://github.com/xiyuez2/MapPrior
show: true
width: 12
date: 2023-08-01 00:01:00 -0500
group: Research
---
- Introduced generative priors for BEV map segmentation, exploiting the prior distribution of map layouts to fix occluded and out-of-range regions.
- Improved IoU by ~1% and substantially improved realism (MMD) and uncertainty estimation (ECE) for downstream planning on nuScenes.
