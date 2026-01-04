---
title: Roles and Trading
description: Responsibilities of key ecosystem roles and permission trigger conditions.
sidebar:
  order: 11
---

### Key Ecosystem Roles

-   **Minter**: Evidence provider and Truth Box creator, the source of value.
-   **Seller**: Can act as an agent to sell when the Box exceeds the protection period, earning a small reward upon transaction. Must not be the Minter.
-   **Buyer**: Pays to purchase/bid for the Truth Box.
-   **Bidder**: User participating in the auction.
-   **Completer**: Can execute the completion of the order after the refund application period ends, claiming the execution reward. Must not be the Buyer or Minter.
-   **DAO**: The highest authority entity for governance, parameter adjustment, blacklist processing, and transaction dispute adjudication.

### Operational Permissions

![Roles and Permissions](/docs/roles-permission.svg)

-   **ExtendDeadline**: Only the Minter can extend the protection period of the Box, but it must be within the window period.
-   **Sell/Auction**: Minter/Seller. Third-party users can act as agents to sell, but the Box must exceed the Deadline.
-   **Buy/Bid**: Buyer/Bidder.
-   **Request Refund**: Buyer, must be within the refund application period.
-   **Refund Review**: Minter/DAO. The Minter can only agree to a refund. The DAO can refuse a refund, but must pay attention to the review deadline; after it passes, anyone can agree to the refund.
-   **Complete Order**: When the Box is within the refund application period, only the Buyer can complete the order. After the refund application period, anyone can execute the completion of the order.
-   **Pay Confidentiality Fee**: Buyer, must be within the InSecrecy period.
-   **Publish**: Only Minter (Storing) or Buyer (InSecrecy) can actively publish; otherwise, it automatically turns to Published upon expiration.

![Exchange Process](/docs/exchange-process.svg)

### About Confidential Data Viewing Permissions

| Status | Role |
| --- | --- |
| Storing | Minter |
| Selling/Auctioning | Minter |
| Paid | Buyer |
| Refunding | Everyone |
| InSecrecy | Buyer |
| Published | Everyone |