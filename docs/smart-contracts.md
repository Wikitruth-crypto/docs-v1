---
title: Smart Contract Architecture
description: Modular contracts on Sapphire, upgrades, and mainnet/testnet placeholder information.
sidebar:
  order: 5
---

### Smart Contract Architecture

WikiTruth adopts modular smart contracts deployed on **Oasis Sapphire** (EVM-compatible privacy public chain). Confidential data is stored on-chain in encrypted form, and permissions are verified through SIWE tokens.

> In the testnet, core contracts support Proxy upgrades, upgrading business logic without changing addresses and data. Mainnet contracts are non-upgradable contracts.

**Core Modules**

-   `AddressManager.sol`: Unifies management of core contract addresses, DAO, and supports token and DEX whitelists.
-   `SiweAuthWikiTruth.sol`: SIWE identity authentication, supports multi-domain verification, adapts to Sapphire zero-address scenarios.
-   `UserId.sol`: User ID/blacklist management, protects on-chain identity privacy.
-   `TruthBox.sol`: Core asset contract, manages state machine, pricing, and duration, uses Sapphire TEE to encrypt and store confidential data.
-   `TruthNFT.sol`: ERC-721, responsible for minting, transferring, and metadata of Truth Boxes.
-   `Exchange.sol`: Trading engine, handles the full process of Sell/Auction/Buy/Bid/Refund/Complete.
-   `FundManager.sol`: Fund custody and allocation, supports multi-currency payment and DEX exchange.

#### Network and Contract Deployment (Mainnet/Testnet)

| Item | Mainnet | Testnet |
| --- | --- | --- |
| Network Name | Oasis Sapphire | Oasis Sapphire Testnet |
| Chain ID | 23294 | 23295 |
| Block Explorer | TBD | [Oasis Sapphire Testnet explorer](https://explorer.oasis.io/testnet/sapphire/address/) |
| AddressManager | TBD | 0x7609F2617c6e4A8757809dB67a7EAd55A5B33195 |
| TruthBox | TBD | 0x1aec0197b0Ddc0412393813F863382748Da5C01e |
| Exchange | TBD | 0xFD4C4CFA8B1dF3aF3F7a07A630B2FbBa6b45b40d |
| FundManager | TBD | 0x28FE0c45e9730a89ABDdD4DC817b532F802Fe1E3 |
| TruthNFT | TBD | 0x4994C64ABC6A7BAE72C3b58133F8AAAB4dF1CbE7 |
| UserId | TBD | 0xB1F04fB48490F3B37D5FEe3731c140dbF2224F5e |
| SiweAuth | TBD | 0x6547F0a925BD522F029D0aFEC3A239aCDcE0122a |