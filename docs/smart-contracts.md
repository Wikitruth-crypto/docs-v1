---
title: 智能合约架构
description: Sapphire 上的模块化合约、升级与主网/测试网占位信息。
sidebar:
  order: 5
---

### 智能合约架构

WikiTruth 采用模块化智能合约，部署在 **Oasis Sapphire**（EVM 兼容隐私公链）。机密数据在链上以加密形式存储，并通过 SIWE 令牌校验权限。核心合约支持 Proxy 升级，在不变更地址与数据的情况下升级业务逻辑。

**核心模块**

- `AddressManager.sol`：统一管理核心合约地址、DAO、支持代币与 DEX 白名单。
- `SiweAuthWikiTruth.sol`：SIWE 身份认证，支持多域名校验，适配 Sapphire 零地址场景。
- `UserId.sol`：用户 ID/黑名单管理，保护链上身份隐私。
- `TruthBox.sol`：核心资产合约，管理状态机、定价与期限，使用 Sapphire TEE 加密存储机密数据。
- `TruthNFT.sol`：ERC-721，负责 Truth Box 的铸造、转移与元数据。
- `Exchange.sol`：交易引擎，处理 Sell/Auction/Buy/Bid/Refund/Complete 全流程。
- `FundManager.sol`：资金托管与分配，支持多币种支付与 DEX 兑换。

#### 网络与合约部署（主网/测试网）

| 项目 | 主网（待定） | 测试网（当前） |
| --- | --- | --- |
| 网络名称 | Oasis Sapphire | Oasis Sapphire Testnet |
| Chain ID | 23294 | 23295 |
| 区块浏览器 | 待填 | [Oasis Sapphire Testnet explorer](https://explorer.oasis.io/testnet/sapphire/address/) |
| AddressManager | 待填 | 0x7609F2617c6e4A8757809dB67a7EAd55A5B33195 |
| TruthBox | 待填 | 0x1aec0197b0Ddc0412393813F863382748Da5C01e |
| Exchange | 待填 | 0xFD4C4CFA8B1dF3aF3F7a07A630B2FbBa6b45b40d |
| FundManager | 待填 | 0x28FE0c45e9730a89ABDdD4DC817b532F802Fe1E3 |
| TruthNFT | 待填 | 0x4994C64ABC6A7BAE72C3b58133F8AAAB4dF1CbE7 |
| UserId | 待填 | 0xB1F04fB48490F3B37D5FEe3731c140dbF2224F5e |
| SiweAuth | 待填 | 0x6547F0a925BD522F029D0aFEC3A239aCDcE0122a |
