---
title: 状态机制
description: Truth Box 生命周期状态、参数对比与超时规则。
sidebar:
  order: 9
---

### Truth Box 状态机详解

```solidity
enum Status(
  Storing,
  Selling,
  Auctioning,
  Paid,
  Refunding,
  InSecrecy,
  Published,
  Blacklisted
)
```

一个 Truth Box 会经历以下状态，全部由合约严格定义：

1. **Storing**：create方法铸造后的初始状态。
2. **Selling**：一口价出售中。
3. **Auctioning**：拍卖中，每次出价会延长deadline。
4. **Paid**：买家已支付，进入退款申请期。
5. **Refunding**：退款仲裁期，Minter/DAO 可处理退款。
6. **InSecrecy**：交易完成后进入保密期，可支付保密费延长。
7. **Published**：内容公开，任何人可读取机密数据， 或者采用createAndPublish铸造。
8. **Blacklisted**：DAO 封禁状态，交易冻结并触发退款/销毁。

### 状态流程图

![状态流程图](/docs/status-process.svg)

1. 铸造时可选择 Store（默认）或直接 Publish（createAndPublish）。
2. 只有 Storing 状态的 Box 可以 Sell 或 Auction。
3. Selling/Auctioning 到期无人购买将转为 Published；
4. Selling如有买家则进入 Paid, Auctioning则需要等待deadline截止才会转为Paid。
5. Paid 状态下买家可申请退款进入Refunding，或者完成订单进入InSecrecy。
6. InSecrecy 期间需支付保密费延长；到期自动转为 Published。

### 状态期限

![状态期限](/docs/status-period.svg)

1. Storing：初始 365 天，仅可在到期前 30 天内延长，单次最多 365 天。
2. Selling：固定 365 天上架周期。
3. Auctioning：初始 30 天，每次出价重置为 30 天。
4. 退款申请期限：默认 7 天，超时则无法申请，且他人可完成订单。
5. 退款审核期限：默认 30 天，超时任何人可同意退款。
6. InSecrecy：初始 365 天，每次支付保密费可延长 365 天。


#### 时间参数（主网/测试网对比）

| 参数 | Oasis sapphire | Oasis sapphire testnet |
| --- | --- | --- |
| Storing 初始保护期 | 365 天 | 15 天 |
| 可延长窗口 | 30 天内 | 3 天内 |
| 单次可延长 | 365 天 | 15 天 |
| Selling 上架周期 | 365 天 | 15 天 |
| Auctioning 上架周期 | 30 天 | 3 天 |
| InSecrecy 保密期 | 365 天 | 15 天 |
| Request Refund Period | 7–15 天 | 7 天 |
| Refund Review Period | 15–60 天 | 15 天 |


> 部分参数可以通过DAO治理进行调整。


