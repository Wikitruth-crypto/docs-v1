---
title: 奖励与费用
description: 交易资金分配、保密费机制与激励设计。
sidebar:
  order: 12
---

### 资金分配

![交易资金分配](/docs/rewards-allocation.svg)

#### 交易资金分配

- **平台服务费**：成功交易收取 3% 进入 DAO 国库， 将支持DAO治理与项目发展。
- **Helper奖励**：符合条件的代理执行者（Seller/Completer）， 分别可以获得1%的交易金额。
- **Minter奖励**：证据提供者获得交易金额主体（扣除Helper奖励）， 如果没有Helper， 则全部归Minter。

#### 保密费分配
与交易资金不同，保密费仅在 DAO、Minter分配， 不会分配给Helper。

### 递增保密费机制

![递增保密费机制图](/docs/confidentiality-fee.svg)

为维持TruthBox的保密状态，Buyer（Criminal） 需按“逐期递增”支付保密费。这枚“经济时间炸弹”迫使潜在加害方在“财务破产”与“主动自首”间抉择。

> 费率与系数可由 DAO 治理合约投票调整。
