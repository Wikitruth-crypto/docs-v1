---
title: 铸造流程
description: 从本地加密到上链铸造的全流程示意。
sidebar:
  order: 10
---

### 铸造流程

![铸造流程](/docs/create-process.svg)

Minter需要上传机密证据和 Box 展示信息，上传铸造Truth Box流程如下：

1. **压缩与粉碎**：将证据文件进行加密压缩，并粉碎为多个文件。
2. **上传至存储**：将粉碎文件上传到 IPFS/Arweave，获得粉碎文件的CID。
3. **对称加密**：使用对称加密算法生成密钥对，并将粉碎文件的CID和密码进行加密，获得加密后的数据。
4. **生成元数据**：将加密后的数据以及公钥，与Box展示信息打包成元数据文件，上传到IPFS/Arweave，获得元数据文件的CID。
5. **铸造 Truth Box**：提交元数据文件CID和私钥到合约，并铸造 Truth Box。

