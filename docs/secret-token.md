---
title: Privacy Token
description: ERC20Secret/WROSEsecret privacy balance on Sapphire and EIP-712 authorization process.
sidebar:
  order: 6
---

### Privacy Token

The project uses a general `ERC20Secret` contract developed based on the Oasis Sapphire privacy library to achieve encrypted balances and private transfers, and provides a signature authorization interface based on **EIP-712** to complete token transactions without leaving traces on-chain.

-   **Balance Privacy**: The contract internally encrypts and stores balances, and ordinary queries only return data visible to the user themselves.
-   **Signature Authorization**: Supports VIEW / TRANSFER / APPROVE permissions based on EIP-712, avoiding exposure of sensitive authorization details on-chain.
-   **No Event Logs**: Does not record event logs, avoiding leaving token transaction traces on-chain.
-   **Anti-Replay**: Signature uniqueness verification and expiration time limit prevent reuse.
-   **Wrap/Unwrap**: Can wrap/unwrap with basic ERC20, compatible with external liquidity. Native tokens like sapphire testnet (TEST) can directly use deposit/withdraw interfaces.

After deploying the `ERC20Secret` contract, use the `wrap` and `unwrap` interfaces to wrap `ERC20` tokens into `ERC20Secret` tokens to achieve the minting of privacy tokens.

> Note: Each ERC20Secret token can only correspond to one ERC20 token.

#### Network and Contract Deployment (Mainnet/Testnet)
-   **WTRC**: The token of the WikiTruth project.
-   **WTRC.S**: The `ERC20Secret` token of WTRC.
-   **wROSE.S**: The `ERC20Secret` token of wROSE.

| Item | Mainnet | Testnet |
| --- | --- | --- |
| Network Name | Oasis Sapphire | Oasis Sapphire Testnet |
| Chain ID | 23294 | 23295 |
| WTRC | TBD | 0x990DE401CD0103a0107D27F82283db60F4844203 |
| WTRC.S | TBD | 0x449e2CD61F0328Ae68f4A530170C892B45b4B269 |
| wROSE.S | TBD | 0x4e30337908E19917f3F74adB45966114A55205c2 |

#### EIP-712 Key Structure Example

```solidity
// EIP-712 domain parameters
bytes32 private constant EIP712_DOMAIN_TYPEHASH = keccak256(
    "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
);
bytes32 public immutable DOMAIN_SEPARATOR;

bytes32 public constant EIP_PERMIT_TYPEHASH = keccak256(
    "EIP712Permit(uint8 label,address owner,address spender,uint256 amount,uint256 deadline)"
);

enum PermitLabel { VIEW, TRANSFER, APPROVE }

struct EIP712Permit {
    PermitLabel label;
    address owner;
    address spender;
    uint256 amount;
    uint256 deadline;
    SignatureRSV signature;
}
```