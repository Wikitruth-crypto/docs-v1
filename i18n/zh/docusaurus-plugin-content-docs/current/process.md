---
title: 运行流程
description: 从本地加密到上链铸造、交易、保密与公开的全流程示意。
sidebar:
  order: 4
---

### 运行流程

![简单流程](/docs/symbol-process.svg)

假设(Criminal)进行了一些违法行为，证据被（Minter）掌握并在wikitruth上出售，而需求方（Buyer）需要购买以规避风险或试图推迟真相公开，流程如下：

- **铸造 Truth Box**：上传加密文件以及元数据上传到 IPFS/Arweave，并在合约中铸造 Truth Box。
- **交易**：Truth Box可被上架出售或拍卖，Helper（Seller\Completer）则可能参与代理出售/完成交易，DAO治理则会在交易发生纠纷时参与审核。
- **保密期**：交易完成后进入保密期，Buyer需按期支付保密费可延长保密期，否则 Truth Box 将自动公开。
- **公开**：保密期到期或无人购买时自动公开，让真相回到公众视野。

WikiTruth 的价值来自“掩盖真相”的高成本：遮蔽者不得不支付费用与保密成本，真相才会被迫走向公开；而提供证据、维护秩序的参与者获得回报，形成长期可持续的正向激励。

