---
title: 角色与交易
description: 生态关键角色的职责与权限触发条件。
sidebar:
  order: 11
---

### 生态关键角色

- **Minter**：证据提供者与 Truth Box 创建者，价值源头。
- **Seller**：当 Box 超过保护期后可代理出售，成交获得小额奖励， 必须不是Minter。
- **Buyer**：支付购买/竞拍 Truth Box。
- **Bidder**: 参与竞拍的用户。
- **Completer**：退款申请期结束后可执行完成订单，领取执行奖励， 必须不是Buyer和Minter。
- **DAO**：治理与参数调整、黑名单处理、交易争议裁决的最高权限实体。

### 操作权限

![角色与权限](/docs/roles-permission.svg)

- **ExtendDeadline**：只有Minter可延长Box的保护期， 但要注意必须在窗口期内。
- **Sell/Auction**： Minter/Seller，第三方用户方可代理出售,但是必须是Box超过Deadline。
- **Buy/Bid**: Buyer/Bidder,
- **Request Refund**：Buyer,必须是在退款申请期限内。
- **Refund Review**：Minter/DAO, Minter只能同意退款，DAO可拒绝退款， 但是必须注意审核期限， 超过后任何人可同意退款。
- **Complete Order**：Box 处于退款申请期内时，只有Buyer可以完成订单，超过退款申请期后，任何人均可执行完成订单。
- **Pay Confidentiality Fee**：Buyer，必须是在InSecrecy期内。
- **Publish**：仅 Minter（Storing）或 Buyer（InSecrecy）可主动发布；超时则自动转 Published。

![交易流程](/docs/exchange-process.svg)

### 关于查看机密数据权限

| 状态 | 角色
| --- | --- | --- |
| Storing | Minter | 
| Selling/Auctioning | Minter |
| Paid | Buyer |
| Refunding | Everyone |
| InSecrecy | Buyer |
| Published | Everyone |