---
title: Rewards and Fees
description: Transaction fund allocation, confidentiality fee mechanism, and incentive design.
sidebar:
  order: 12
---

### Fund Allocation

![Transaction Fund Allocation](/docs/rewards-allocation.svg)

#### Transaction Fund Allocation

-   **Platform Service Fee**: A 3% fee is charged on successful transactions and goes into the DAO treasury to support DAO governance and project development.
-   **Helper Reward**: Eligible proxy executors (Seller/Completer) can each receive 1% of the transaction amount.
-   **Minter Reward**: The evidence provider receives the main body of the transaction amount (deducting Helper rewards). If there is no Helper, it all goes to the Minter.

#### Confidentiality Fee Allocation
Unlike transaction funds, confidentiality fees are only allocated between the DAO and the Minter, and will not be allocated to Helpers.

### Incremental Confidentiality Fee Mechanism

![Incremental Confidentiality Fee Mechanism Chart](/docs/confidentiality-fee.svg)

To maintain the confidential status of the Truth Box, the Buyer (Criminal) needs to pay the confidentiality fee on an "increasing period" basis. This "economic time bomb" forces the potential perpetrator to choose between "financial bankruptcy" and "turning themselves in".

> Rates and coefficients can be adjusted by DAO governance contract voting.