---
title: Truth Box
description: On-chain data structure and encrypted storage method of Truth Box.
sidebar:
  order: 8
---

### On-chain Data Structure

```solidity
struct PublicData {
  Status _status;
  uint256 _price;
  uint256 _deadline;
}

struct SecretData {
  address _minter;
  bytes _encryptedData; // Encrypted payload (private key / evidence key)
  bytes32 _nonce;       // Encrypted nonce, requires decryption
}
```

-   **PublicData**: Public status, pricing, and deadline, used for transaction matching and expiration judgment.
-   **SecretData**: Confidential fields encrypted by Sapphire TEE, containing the creator address, ciphertext of confidential data, and nonce; only authorized SIWE + contract verification can decrypt.
-   Truth Box is both a transferable NFT carrier and an access control entry for confidential data.

### Metadata

There are two types of metadata files for TruthBox, corresponding to the two ways of creating a TruthBox: `create` and `createAndPublish`. The following shows their main differences.

<!-- TODO: The following two codes should be displayed in tabs -->

#### create

Contains symmetrically encrypted data.
```json
{
  "mintMethod": "create",
  "encryptionSlicesMetadataCID": {
    "slicesMetadataCID_encryption": "0xabae872298fe488793f17df3e79c5dd4e8f8e9f9da0cf1edee035314887c7192deb7ada30b04915e0602a75c001991ecc570966430f9cf6fa06d3d8fb53caa1e02d7417447f91957336525",
    "slicesMetadataCID_iv": "0x76ed0699369e1b84988d424b"
  },
  "encryptionFileCID": [
    {
      "fileCID_encryption": "0x71f4e8844358d32996f98a27c807fffdd706dec902764f6ba00221ca5e3e16c80c42a86a65c6f975ad1ce6d566cdccda5335d7379985956c39fb1bffb51e0dc9510f2c48cf7a1985cf7487",
      "fileCID_iv": "0x11bcacd05f25f5fb5dc88191"
    },
    {
      "fileCID_encryption": "0xd3d0d4d7f519cc846dfd2faeaf0cc3de1be26fdd7e0b7405778d6c42d9da140f6f281e318a45331fc5f65ea4b2dccc61bbc36ddc02a34a1fea31eb05b59ae5ba762c3136f58ace71c57245",
      "fileCID_iv": "0x827b3181516cb4283ac44a76"
    }
  ],
  "encryptionPasswords": {
    "password_encryption": "0xbad15d202fc944949086f1d490d169f2b17b49f71fd0ca63020348b8060e8166c6a485c0c3c87d59d8810b6e8480a73cf1900287722afc053296d4522e9dc51ed8f72b7ab6f3f9ae65440aef7b6f3518",
    "password_iv": "0x3dd46d0c6a9df5c8e7bf9b3f"
  },
  "publicKey": "0x3059301306072a8648ce3d020106082a8648ce3d03010703420004cdb130ae2d72132ec0369c11873353f22ddb09e4f0d52c221c9d673090596bc38fab6d842690d0ce6aedf7fddc740fd1572c2511e86728b1332b6eb8732ad9ca",
  "fileList": [],
  "password": ""
}
```

#### createAndPublish

Does not contain symmetrically encrypted data, but directly stores the CID of the file.
```json
{
  "mintMethod": "createAndPublish",
  "encryptionSlicesMetadataCID": {
    "slicesMetadataCID_encryption": "",
    "slicesMetadataCID_iv": ""
  },
  "encryptionFileCID": [],
  "encryptionPasswords": {
    "password_encryption": "",
    "password_iv": ""
  },
  "publicKey": "",
  "fileList": [
    "bafkreibnsg36tgfxsoyq3jb6dfwwb3ffunn3mrrd6twlj6p5mhstfym3xy"
  ],
  "password": ""
}
```