---
title: Status Mechanism
description: Truth Box lifecycle status, parameter comparison, and timeout rules.
sidebar:
  order: 9
---

### Truth Box State Machine Detailed

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

A Truth Box will go through the following states, all strictly defined by the contract:

1.  **Storing**: Initial state after minting via `create` method.
2.  **Selling**: Being sold at a fixed price.
3.  **Auctioning**: Being auctioned; each bid extends the deadline.
4.  **Paid**: Buyer has paid; enters refund application period.
5.  **Refunding**: Refund arbitration period; Minter/DAO can process refunds.
6.  **InSecrecy**: Enters confidentiality period after transaction completion; can pay confidentiality fee to extend.
7.  **Published**: Content is public; anyone can read confidential data. Or minted using `createAndPublish`.
8.  **Blacklisted**: DAO banned state; transactions frozen and refund/destruction triggered.

### Status Flowchart

![Status Flowchart](/docs/status-process.svg)

1.  When minting, you can choose Store (default) or directly Publish (`createAndPublish`).
2.  Only Boxes in Storing state can be Sold or Auctioned.
3.  Selling/Auctioning will turn to Published if no one buys upon expiration.
4.  Selling enters Paid if there is a buyer; Auctioning needs to wait for the deadline to pass before turning to Paid.
5.  In Paid state, the buyer can apply for a refund to enter Refunding, or complete the order to enter InSecrecy.
6.  During InSecrecy, confidentiality fees must be paid to extend; it automatically turns to Published upon expiration.

### Status Duration

![Status Period](/docs/status-period.svg)

1.  Storing: Initial 365 days, can only be extended within 30 days before expiration, max 365 days per time.
2.  Selling: Fixed 365 days listing cycle.
3.  Auctioning: Initial 30 days, reset to 30 days with each bid.
4.  Refund Application Period: Default 7 days; cannot apply if timed out, and others can complete the order.
5.  Refund Review Period: Default 30 days; anyone can agree to refund if timed out.
6.  InSecrecy: Initial 365 days; each confidentiality fee payment extends 365 days.

#### Time Parameters (Mainnet/Testnet Comparison)

| Parameter | Oasis Sapphire | Oasis Sapphire Testnet |
| --- | --- | --- |
| Storing Initial Protection Period | 365 days | 15 days |
| Extension Window | Within 30 days | Within 3 days |
| Extension Per Time | 365 days | 15 days |
| Selling Listing Cycle | 365 days | 15 days |
| Auctioning Listing Cycle | 30 days | 3 days |
| InSecrecy Confidentiality Period | 365 days | 15 days |
| Request Refund Period | 7–15 days | 7 days |
| Refund Review Period | 15–60 days | 15 days |

> Some parameters can be adjusted through DAO governance.