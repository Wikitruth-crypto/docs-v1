---
title: 隐私代币
description: Sapphire 上的 ERC20Secret/WROSEsecret 隐私余额与 EIP-712 授权流程。
sidebar:
  order: 6
---

### 隐私代币

项目使用基于 Oasis Sapphire 隐私库开发了一个通用的`ERC20Secret`合约，实现余额加密与隐私转账, 并提供基于 **EIP-712** 的签名授权接口，实现在链上不留痕迹的情况下完成代币交易。

- **余额隐私**：合约内部加密存储余额，普通查询仅返回本人可见数据。
- **签名授权**：支持基于 EIP-712 的 VIEW / TRANSFER / APPROVE 许可，避免在链上暴露敏感授权细节。
- **无事件日志**：不记录事件日志，避免在链上留下代币交易痕迹。
- **防重放**：签名唯一性校验与过期时间限制，防止重复使用。
- **Wrap/Unwrap**：与基础 ERC20 之间可包装/解包，兼容外部流动性， 原生代币如sapphire testnet（TEST），可以直接使用deposit/withdraw接口。

部署`ERC20Secret`合约后，通过`wrap`和`unwrap`接口，将`ERC20`代币包装成`ERC20Secret`代币，即可实现隐私代币的铸造。

> 注意：每个ERC20Secret代币只能对应一个ERC20代币。

#### 网络与合约部署（主网/测试网）
- **WTRC**: wikitruth项目的代币
- **WTRC.S**: WTRC的`ERC20Secret`代币。
- **wROSE.S**: wROSE的`ERC20Secret`代币。

| 项目 | 主网 | 测试网 |
| --- | --- | --- |
| 网络名称 | Oasis Sapphire | Oasis Sapphire Testnet |
| Chain ID | 23294 | 23295 |
| WTRC | 待填 | 0x990DE401CD0103a0107D27F82283db60F4844203 |
| WTRC.S | 待填 | 0x449e2CD61F0328Ae68f4A530170C892B45b4B269 |
| wROSE.S | 待填 | 0x4e30337908E19917f3F74adB45966114A55205c2 |

#### EIP-712 关键结构示例

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
