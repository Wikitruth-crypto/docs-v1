---
title: FAQ
description: Detailed answers on privacy protection, trading mechanisms, legal risks, and DAO governance.
sidebar:
  order: 22
---

### Basic Concepts

**Q: What exactly is WikiTruth? A WikiLeaks-style website?**
**A:** Not exactly. WikiTruth is a **decentralized evidence trading marketplace**. WikiLeaks is a one-way publishing platform, while WikiTruth introduces economic game theory. We allow evidence holders (Minters) to sell evidence, and also allow interested parties (Buyers) to temporarily delay the disclosure of evidence by paying "confidentiality fees". But ultimately, all evidence that expires without renewal will be automatically disclosed to the whole network.

**Q: Do I need to register an account?**
**A:** No traditional email or mobile number registration is required. You only need a Web3 wallet (such as MetaMask). We verify your identity through your wallet address and SIWE (Sign-In with Ethereum), without providing any real-name personal information throughout the process.

---

### Privacy and Security

**Q: How does WikiTruth protect the privacy of whistleblowers (Minters)?**
**A:** We use multiple privacy protections:
1.  **UserId Mapping**: The Minter is not publicly displayed; it is mapped to a UserId, and all on-chain events are replaced by the UserId.
2.  **On-chain Privacy**: Private on-chain data is encrypted and stored in the TEE (Trusted Execution Environment) of the **Oasis Sapphire** blockchain, which has hardware-level security performance. This means that even the miners of the validator nodes cannot know who the Minter of the Box is.
3.  **Network Isolation**: We strongly recommend using Tor or VPN for access, combined with our EIP-712 proxy contract, to cut off the association between your physical IP and on-chain address.

**Q: What if WikiTruth's website is shut down?**
**A:** WikiTruth is not a company, but a set of smart contracts running on the blockchain.
-   **Frontend**: Our code is open source and hosted on decentralized storage (IPFS/Arweave), and anyone can deploy a mirror site.
-   **Backend**: Once deployed, the smart contracts run perpetually on the Oasis network, and no one can shut them down.
-   **Data**: Evidence is stored in global IPFS nodes; as long as one node survives, the data will not be lost.

**Q: How does the platform prevent people from maliciously uploading false evidence or irrelevant content (such as selfies)?**
**A:**
1.  **Economic Cost**: Minting a Truth Box requires paying gas fees, so counterfeiting has a monetary threshold.
2.  **Buyer Game**: The one who wants to verify the authenticity the most is the buyer (usually the criminal). If the buyer finds that they bought a fake, they will immediately initiate arbitration.
3.  **DAO Governance**: The community can vote to blacklist non-compliant Truth Boxes and ban their addresses.

---

### Trading and Mechanisms

**Q: Why is there a "confidentiality fee" design? Is this not extortion?**
**A:** This is a philosophical question. In a world without WikiTruth, extortion happens in the dark, often accompanied by physical threats and indefinite cover-ups. WikiTruth makes this process **procedural and transparent**.
More importantly, the confidentiality fee is **exponentially increasing** (e.g., doubling every month). This means that no matter how rich the buyer is, one day they will not be able to afford this fee. Therefore, **the disclosure of truth is a mathematical inevitability; we are just levying a "time tax" on evil.**

**Q: If I buy the evidence (Truth Box), do I own its copyright?**
**A:** There is no such thing as copyright for evidence. What you own is the ownership of the Box and the **exclusive access rights** to the confidential content (during the confidentiality period).

**Q: If the police or court wants to retrieve evidence, will you cooperate?**
**A:** Even if we wanted to cooperate, we **cannot do it**.
1. WikiTruth administrators do not have a "backdoor" key. Only the current owner holding the Box (which could be the Minter or the Buyer) can decrypt the content. This is the essence of "code is law"—power belongs to the private key holder, not the platform developer.
2. Due to the mechanisms of confidentiality fees and time limits, the evidence will eventually be disclosed, so there is absolutely no need to take measures to retrieve the evidence.

---