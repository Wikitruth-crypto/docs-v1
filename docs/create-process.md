---
title: Minting Process
description: Full process from local encryption to on-chain minting.
sidebar:
  order: 10
---

### Minting Process

![Minting Process](/docs/create-process.svg)

Minters need to upload confidential evidence and Box display information. The process for uploading and minting a Truth Box is as follows:

1. **Compression and Shredding**: Encrypt and compress the evidence file, and shred it into multiple files.
2. **Upload to Storage**: Upload the shredded files to IPFS/Arweave to obtain the CIDs of the shredded files.
3. **Symmetric Encryption**: Generate a key pair using a symmetric encryption algorithm, and encrypt the CIDs and passwords of the shredded files to obtain the encrypted data.
4. **Generate Metadata**: Package the encrypted data and public key with the Box display information into a metadata file, upload it to IPFS/Arweave, and obtain the metadata file CID.
5. **Mint Truth Box**: Submit the metadata file CID and private key to the contract and mint the Truth Box.