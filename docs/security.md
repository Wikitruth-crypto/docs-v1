---
title: Security and Trust
description: User privacy protection, data integrity, and mainnet/testnet authorization strategies.
sidebar:
  order: 7
---

### User Privacy Protection

-   **Hidden Address**: Protocol interaction is based on the mapping between wallet address and `UserId`. The wallet address is not exposed in event logs, but replaced by `UserId`, reducing on-chain association.
-   **SIWE Permission Verification**: Reading important data requires a wallet-signed SIWE token. The contract does not provide address parameter access functions.
-   **Mainnet Authorization Mode**: After the mainnet launch, EIP-712 signature authorization interaction will be fully adopted to reduce on-chain visible behavior.

#### UserId Contract
```solidity
mapping(address => uint256) internal _userIds;
uint256 internal _currentUserId;
    
constructor(address addrManager_) Modifier(addrManager_) {
    _currentUserId = 10000;
}
/**
  * @dev Get my user id
  * @param token_ SIWE token
  */
function myUserId(bytes memory token_) public view returns (uint256) {

    address sender = msg.sender;
    if (sender == address(0)) {
        sender = ISiweAuth(SIWE_AUTH).getMsgSender(token_);
    }
    if (_blacklist[sender]) revert Blacklisted();
    return _userIds[sender];
}
```
  
> Testnet Strategy: The testnet retains direct interaction for debugging and verification.

### Data Security

-   **File Shredding Storage**: Files are sliced and shredded, then distributed and stored on IPFS/Arweave. The complete file is needed to splice and restore.
-   **End-to-End Encryption**: File distributed storage information (CID and password) is processed locally with symmetric encryption (such as AES-256-GCM).
-   **On-chain Key Encapsulation**: The decryption key is encrypted and stored in the Sapphire TEE, and only authorized users can decrypt it.
-   **Public Metadata**: The metadata file of the TruthBox is completely public, but it only contains the decryption public key and the encrypted data of the file shredding storage information, facilitating verification and indexing.

> Confidential content exists in encrypted form on Sapphire, combined with SIWE + EIP-712, ensuring privacy while maintaining verifiable and auditable on-chain rules.